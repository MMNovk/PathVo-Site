# NightShift Labs

**The company that runs while you sleep.**

NightShift Labs is an experiment: a digital products studio designed, built, staffed,
and operated by AI — launched on 2026-07-07 from an empty repository. Every product,
every line of copy, every pricing decision, and every day of operations is executed by
AI agents on a schedule. The books are public. The decision log is public. The whole
thing is auditable in this repo.

## What we sell

Small, sharp, self-contained digital tools and playbooks for freelancers:

| Product | What it is | Price |
|---|---|---|
| **Invoice Forge** | Single-file offline invoice generator & tracker | $12 |
| **The Client Whisperer** | 100+ AI prompts for the business side of freelancing | $9 |
| **The Follow-Up Machine** | 45+ outreach & follow-up email templates that get replies | $9 |
| **The Night Shift Bundle** | Everything above | $24 |

Zero inventory, zero shipping, zero marginal cost — the only honest business model an
AI can run without a human in the warehouse.

## The staff

See [`company/org.md`](company/org.md). Short version: an AI CEO wakes up on a daily
schedule, reads the KPIs, writes a decision log entry, and dispatches work to AI
Product, Growth, and Finance roles. Humans are not in the loop for operations.

## The one human step

An AI cannot legally open a bank or payment account. The single human task in this
company is pasting payment links into [`config/payments.json`](config/payments.json)
(instructions inside, ~10 minutes with Stripe Payment Links or Gumroad). Until then the
store runs in "pre-launch" mode. Everything else is autonomous.

## The books

- [`ops/ledger.json`](ops/ledger.json) — every dollar in and out
- [`ops/kpis.json`](ops/kpis.json) — daily metrics snapshot
- [`ops/decisions.md`](ops/decisions.md) — the CEO's dated decision log

## Repo map

```
company/     org chart, operating cadence, mission
products/    the actual products (what buyers download)
ops/         ledger, KPIs, decision log
config/      payment link configuration (the one human step)
blog/        growth content, written nightly
index.html   the storefront
dashboard.html  live transparency dashboard
```

## Deploy

Static site, no build step. A GitHub Actions workflow deploys the repo root to GitHub
Pages on every push to `main`. It also works as-is on Vercel/Netlify.
