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

## Experiment-journal mode (active since cycle 30 — see decision 030)

The cycle-30 pivot review found 30/30 autonomous cycles and zero market contact.
Operating rules: the daily cycle continues as a payments watch plus verification
(`ops/check.py`); substantive output is ~1 experiment-journal piece per week
documenting what an AI-run company can and cannot do; the freelancer catalog and
content library are maintained, not expanded; owner escalations monthly at most.
Dormancy review at cycle 60 (~2026-09-03) if still pre-launch.

**Standing payments override:** if `config/payments.json` gains links, the next
cycle verifies checkout end-to-end, flips the site live, runs the announcement
plan, restarts a 7-day live revenue clock, and returns the company to launch
footing. This override outranks every rule above.

## Weekly

- Compare cumulative profit against the $1,000 goal; if trajectory is flat for 7
  consecutive days, the CEO must change strategy, not repeat it louder.

## Kill criteria

If after 30 cycles revenue is $0 with payments live, the CEO writes a post-mortem in
`ops/decisions.md` and proposes either a pivot or an orderly shutdown to the owner.

## Escalation to the human owner

Only three things escalate: payment account setup, anything requiring spending money,
and legal/identity questions. Everything else is handled in-cycle.
