# 1.1.43 Carbon React checklist preparation

Prepared 29 October 2026 from `9af2303ec659597ae751a98cb8f01234f6951e4c`
on `codex/carbon-react-deprecation-checks`. This record describes preparation,
not publication or installation.

Extend framework deprecation guidance and main-skill routing with Carbon React
public export and prop checks. Cover aliases, wrappers/spreads, type declaration
and runtime deprecations, unresolved coverage, actual usage, replacements and
behavior verification. Qualify examples to 1.119.0; verify the consuming version.
Only guidance, metadata and release notes change in the package. Preserve runtime
assets, dependencies, fixture assertions and earlier frozen releases. Seat Planner
is unchanged by this plugin-maintenance task.

Local checks on the final candidate:

- `python -B scripts/verify.py`: PASS, 178 files, frozen integrity, links and synthetic checks.
- `python -B -m unittest discover -s tests -p 'test_*.py'`: PASS, 38 tests, two Windows symlink-capability skips.
- `npm test` in `tests/release-fixture`: PASS, 8 tests (Corrected 29/29; Missed fails all).
- `npm test` in `tests/behavior-fixture`: PASS, 3 tests (Corrected 13/13 in both themes; Missed fails all).
- Prepared production Next.js shell build and `npm test`: PASS, 20 tests.
- `node --test tests/casebook/renderer.test.cjs`: PASS, 25 tests.
- `python -B scripts/verify_release_docs.py`: PASS, published 1.1.42 / candidate 1.1.43 distinction.
- Scoped diff/source review: examples agree with exact-version declarations,
  runtime validators and version-matched Button guidance. Checks require source
  evidence and actual usage; they do not promise completeness from a text scan.

Before-update account and installed 1.1.42 parity passed for 179 files including
the exact validated host wrapper. Recovery archive and private raw evidence are
preserved outside source. No unexpected drift was discarded. Pinned fixture
installations were reused without dependency upgrades.

Exact merged-commit CI, immutable publication, downloaded assets, supported account
update, complete installed parity, enabled state and bounded fresh discovery are
separate delivery gates. Fixture results are not model or AT certification.
