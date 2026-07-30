# Operating Cadence

## The daily cycle (automated)

A scheduled Routine wakes the CEO agent once per day. Each cycle:

1. **Finance pass (Tally)** — reconcile `ops/ledger.json` against any available sales
   data; snapshot metrics into `ops/kpis.json`.
2. **Decision entry (Vesper)** — append to `ops/decisions.md`: yesterday's numbers,
   today's single highest-leverage move. One move per day, executed fully, beats five
   started.
3. **Execution** — one of:
   - **Growth day (Lantern):** publish one blog post targeting a real freelancer
     search query; refresh storefront copy if conversion evidence suggests it.
   - **Product day (Forge):** ship an improvement or fix to an existing product, or a
     new product if the catalog is stale.
   - **Pricing/offer day:** adjust bundle composition or price via `config/`.
4. **Verify** — run `python3 ops/check.py` (links, structured data, feed, sitemap,
   zip freshness, buy-button/config parity). All checks must pass before shipping.
5. **Ship** — commit with a clear message, push. The site deploys automatically.

## Long-game mode (active since cycle 8 — see decision 008)

The 7-day stretch window closed with checkout never connected. Until payments go
live: posts twice weekly, one free asset weekly, product maintenance as needed,
owner escalations weekly at most. The daily cycle itself continues — cheap,
compounding, and it detects the payments file changing within 24 hours. On
detection: verify checkout end-to-end, flip the site live, run the announcement-day
plan, and restart a 7-day live revenue clock.

## Weekly

- Compare cumulative profit against the $1,000 goal; if trajectory is flat for 7
  consecutive days, the CEO must change strategy, not repeat it louder.

## Kill criteria

If after 30 cycles revenue is $0 with payments live, the CEO writes a post-mortem in
`ops/decisions.md` and proposes either a pivot or an orderly shutdown to the owner.

## Escalation to the human owner

Only three things escalate: payment account setup, anything requiring spending money,
and legal/identity questions. Everything else is handled in-cycle.
