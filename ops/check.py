#!/usr/bin/env python3
"""NightShift Labs site health check. Run from the repo root: python3 ops/check.py
Exits non-zero if any check fails. Used by the CEO cycle before committing."""
import re, os, glob, json, sys
from urllib.parse import urlparse, unquote

failures = []

def check(name, ok, detail=""):
    print(f"{'ok ' if ok else 'FAIL'}  {name}" + (f" — {detail}" if detail else ""))
    if not ok:
        failures.append(name)

# 1. Internal links resolve (all site pages; product payloads excluded)
pages = [p for p in glob.glob('**/*.html', recursive=True) if not p.startswith('products/')]
broken = []
for page in pages:
    src = open(page).read()
    for _, url in re.findall(r'(href|src)="([^"]+)"', src):
        if url.startswith(('http://', 'https://', 'data:', 'mailto:', '#')):
            continue
        path = unquote(urlparse(url).path)
        if not path:
            continue
        target = os.path.normpath(os.path.join(os.path.dirname(page), path))
        # absolute /PathVo-Site/ paths (404 page) resolve against repo root
        if path.startswith('/'):
            target = path.replace('/PathVo-Site/', '', 1).lstrip('/') or 'index.html'
        if not os.path.exists(target):
            broken.append(f"{page} -> {url}")
check(f"internal links ({len(pages)} pages)", not broken, '; '.join(broken[:5]))

# 2. JSON-LD blocks parse
bad_ld = []
for p in pages:
    for m in re.finditer(r'<script type="application/ld\+json">(.*?)</script>', open(p).read(), re.S):
        try:
            json.loads(m.group(1))
        except Exception as e:
            bad_ld.append(f"{p}: {e}")
check("JSON-LD validity", not bad_ld, '; '.join(bad_ld[:3]))

# 3. Feed and sitemap are valid XML; sitemap URLs map to real files
import xml.dom.minidom
try:
    xml.dom.minidom.parse('feed.xml'); feed_ok = True
except Exception:
    feed_ok = False
check("feed.xml valid XML", feed_ok)
missing = []
try:
    sm = open('sitemap.xml').read()
    for loc in re.findall(r'<loc>(.*?)</loc>', sm):
        rel = loc.replace('https://mmnovk.github.io/PathVo-Site/', '') or 'index.html'
        if not os.path.exists(rel):
            missing.append(rel)
    check("sitemap URLs exist on disk", not missing, '; '.join(missing[:5]))
except Exception as e:
    check("sitemap parse", False, str(e))

# 4. Every blog post is in the sitemap and the feed
posts = [p for p in glob.glob('blog/*.html') if not p.endswith('index.html')]
feed_src = open('feed.xml').read()
sm_src = open('sitemap.xml').read()
un_fed = [p for p in posts if p not in feed_src]
un_mapped = [p for p in posts if p not in sm_src]
check(f"posts in feed ({len(posts)} posts)", not un_fed, '; '.join(un_fed))
check("posts in sitemap", not un_mapped, '; '.join(un_mapped))

# 5. Dist zips at least as new as their product dirs
stale = []
for prod in ['invoice-forge', 'client-whisperer', 'followup-machine']:
    z = f'products/dist/{prod}.zip'
    if not os.path.exists(z):
        stale.append(f"{prod}: zip missing"); continue
    zt = os.path.getmtime(z)
    for f in glob.glob(f'products/{prod}/**', recursive=True):
        if os.path.isfile(f) and os.path.getmtime(f) > zt:
            stale.append(f"{prod}: {f} newer than zip"); break
check("dist zips fresh", not stale, '; '.join(stale))

# 6. Payments config parses and storefront buy buttons match its keys
try:
    cfg = json.load(open('config/payments.json'))
    idx = open('index.html').read()
    btns = set(re.findall(r'data-product="([^"]+)"', idx))
    keys = set(cfg['links'].keys())
    check("buy buttons match payments keys", btns == keys, f"buttons={sorted(btns)} keys={sorted(keys)}")
except Exception as e:
    check("payments config parse", False, str(e))

print(f"\n{len(failures)} failure(s)" if failures else "\nall checks passed")
sys.exit(1 if failures else 0)
