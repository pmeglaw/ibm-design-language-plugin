# 1.1.45 Carbon Sass/token checklist preparation

Prepared 29 October 2026 from `8ba51becc9362bf247667d37f0b92d9cc79b0ecb`
on `codex/carbon-sass-token-checks`. This record describes preparation, not delivery.

Extend framework deprecation guidance and main-skill routing with Sass/token APIs,
custom-property provenance, in-memory diagnostic compilation, complete warning
trace attribution, suppression limits and separate application/upstream/unresolved
outcomes. Preserve the 1.1.44 review-wording refinements unchanged. No product,
dependency, runtime asset or fixture assertion changes. Seat Planner is unchanged.

## Baseline reconciliation

The source checkout initially selected 1.1.43, while current main, GitHub and the
existing private installation were 1.1.44. Fast-forwarded the clean checkout,
verified the immutable 1.1.44 tag at the baseline commit above, downloaded all four
assets and compared them byte-for-byte with frozen files. Complete fresh account
and local 1.1.44 parity passed for 179 files including the validated host wrapper.
No drift was discarded. Recovery archives/private evidence stay outside source.

README, installation, recovery and history still described 1.1.44 as unpublished.
Current companion docs now distinguish actual published 1.1.44 from candidate
1.1.45. Frozen 1.1.44 NOTES retain their original preparation wording and bytes;
that wording does not override the actual release/tag record. An initial docs
check caught a leftover candidate package-entry version and it was corrected
before the final passing checks.

## Local checks on the final candidate

- `python -B scripts/verify.py`: PASS, 178 files, all frozen integrity, links and synthetic checks.
- `python -B -m unittest discover -s tests -p 'test_*.py'`: PASS, 38 tests, two Windows symlink-capability skips.
- `npm test` in `tests/release-fixture`: PASS, 8 tests (Corrected 29/29; Missed fails all).
- `npm test` in `tests/behavior-fixture`: PASS, 3 tests (Corrected 13/13 in both themes; Missed fails all).
- Prepared production Next.js shell build and `npm test`: PASS, 20 tests.
- `node --test tests/casebook/renderer.test.cjs`: PASS, 25 tests.
- `python -B scripts/verify_release_docs.py --github`: PASS, published 1.1.44 / candidate 1.1.45 distinction.
- Scoped diff/source review: versioned Carbon APIs and official Sass warning policy
  support the new guidance. Warning origin requires a full call/import trace;
  local CSS definitions are not automatically public package exports or rendered proof.

Existing pinned fixture installations were used without dependency upgrades.
Exact merged-commit CI, immutable publication, downloaded bytes, supported account
update, parity, enabled state and bounded discovery are separate delivery gates.
No model-generated quality improvement or AT certification is claimed.
