# 0001. One directory per published piece behind a hub index

## Status

Accepted.

## Context

The site publishes independent pieces (courses, findings, verdicts) that must stay linkable and self-contained.

## Decision

- Each published piece lives in its own top-level directory (for example `vietnam-deja-vu/`, `ark-nova/`), or as a page under `answers/` for short findings and verdicts.
- The root `index.html` is the hub that links every piece.
- Shared styles and scripts live in `assets/`; pieces do not copy them.
- `_ledger/` holds the published source ledgers; the raw research store `work/` is gitignored and never published.
- No markdown plans, drafts or dossiers are tracked; standing decisions are ADRs in `docs/adr/`.

## Consequences

Adding a piece means adding a directory and one hub link. Removing a piece never breaks another.
