# 1.1.46 stable Carbon Sass fix checklist preparation

Prepared 29 October 2026 from `02ea9a4c93f766095a31ae989dc76272f8fc987b`
on `codex/carbon-sass-stable-release-checks`. Preparation is not publication.

Adds stable-release/transitive-graph checks, published-source verification,
comparable non-mutating diagnostics and qualified upgrade recommendations to the
Sass checklist, linked from main-skill intake. No dependencies, runtime assets,
fixture assertions or product files change. Seat Planner remains unchanged.
Historical receipts added on main were fast-forwarded and preserved.

Before editing, fresh account/archive and local 1.1.45 parity passed for all
178 release files plus the exact validated host wrapper, 179 total, zero drift.
Recovery archive/private evidence remain outside source.

## Local evidence

- `python -B scripts/verify.py`: PASS, 178 files and frozen integrity/link/synthetic checks.
- `python -B -m unittest discover -s tests -p 'test_*.py'`: PASS, 38 tests, two Windows symlink skips. Initial sandbox run failed on temporary-directory permissions; unchanged suite passed outside the sandbox.
- `npm test` in `tests/release-fixture`: PASS, 8 tests; Corrected 29/29 and Missed fails all.
- `npm test` in `tests/behavior-fixture`: PASS, 3 tests; Corrected 13/13 in both themes and Missed fails all.
- Prepared production shell build and `npm test`: PASS, 20 tests.
- `node --test tests/casebook/renderer.test.cjs`: PASS, 25 tests.
- `python -B scripts/verify_release_docs.py --github`: PASS, published 1.1.45 distinguished from candidate 1.1.46.
- Scoped source/diff review: PASS; checks require exact published evidence and disclose unrun graph/compile verification rather than treating previews or suppression as stable fixes. `git diff --check`: PASS after normalizing edited Markdown line endings.

Existing pinned fixture dependencies were reused. Exact-commit CI, publication,
downloaded assets, supported account update, installed parity, enabled state and
bounded fresh discovery remain separate delivery gates. No new model-generated
quality, automatic selection or assistive-technology result is claimed.
