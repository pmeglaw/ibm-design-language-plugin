# 1.1.41 Carbon deprecation checklist preparation

Prepared 29 October 2026 from `9703fb8eb727c078aab12bdfc15640b25993d162`
on `codex/carbon-deprecation-checklist`. This is preparation, not publication.

Add the source-linked checklist to framework integration and link it from main
skill intake. Only those references, package metadata and release notes change
in the package; no dependency, product code, runtime asset or fixture assertion
changes. Preserve all earlier releases.

Local checks on the final candidate:

- `python -B scripts/verify.py`: PASS, 178 files, frozen releases, links and synthetic checks.
- `python -B -m unittest discover -s tests -p 'test_*.py'`: PASS, 38 tests with two Windows symlink-capability skips.
- `npm test` in `tests/release-fixture`: PASS, 8 tests (Corrected 29/29, Missed fails all).
- `npm test` in `tests/behavior-fixture`: PASS, 3 tests (Corrected 13/13 in both themes, Missed fails all).
- `python -B scripts/prepare_shell_fixture.py`, production `npm run build` and `npm test` in `.verification/nextjs-shell`: PASS, 20 tests.
- `node --test tests/casebook/renderer.test.cjs`: PASS, 25 tests.
- `python -B scripts/verify_release_docs.py`: PASS, published 1.1.40 / candidate 1.1.41 distinction.
- Read-only scoped diff/source review: checklist matches the official notice reviewed today; version-specific and migration-authorization boundaries preserved.

An initial sandboxed unit run failed on temporary-file permissions; the complete
suite subsequently passed outside the sandbox. A preliminary installation check
used the candidate manifest against the old installation and correctly reported
a version mismatch. The explicit old-release manifest comparison passed for all
179 installed files, and the freshly downloaded old account archive passed complete
parity. No drift was overwritten. Private raw evidence stays in ignored verification
files. New CRLF lines were normalized before freezing the final candidate.

Exact merged-commit CI, immutable publication, downloaded assets, supported account
update, installed parity, catalog state and bounded fresh discovery remain separate
delivery gates. No model-generated product quality or AT certification is claimed.
