# 1.1.42 IBM Products checklist preparation

Prepared 29 October 2026 from `e9e51af2dcb13bfaaba601c2eef8e91ade581cec`
on `codex/ibm-products-deprecation-checks`. This record describes preparation,
not publication or installation.

Extend the framework deprecation checklist with IBM Products checks and clarify
main-skill routing. Distinguish package/component/prop status, current peers and
usage, preview naming, future core migration, composable replacements, stylesheet
ownership and application behavior. Sources are pinned to Products 2.101.0 and
require current release verification when used. Seat Planner is unchanged.
Only guidance, metadata and release notes change in the package; preserve older
frozen releases, runtime assets, dependencies and fixture assertions.

Local checks on the final candidate:

- `python -B scripts/verify.py`: PASS, 178 files, frozen integrity, links and synthetic checks.
- `python -B -m unittest discover -s tests -p 'test_*.py'`: PASS, 38 tests, two Windows symlink-capability skips.
- `npm test` in `tests/release-fixture`: PASS, 8 tests (Corrected 29/29; Missed fails all).
- `npm test` in `tests/behavior-fixture`: PASS, 3 tests (Corrected 13/13 in both themes; Missed fails all).
- Prepared production Next.js shell build and `npm test`: PASS, 20 tests.
- `node --test tests/casebook/renderer.test.cjs`: PASS, 25 tests.
- `python -B scripts/verify_release_docs.py`: PASS, published 1.1.41 / candidate 1.1.42 distinction.
- Scoped source/diff review: checklist matches the pinned release migration overview,
  preview guide and inspected 2.101.0 SidePanel declarations. No product-derived
  private context or raw account evidence is included in the package.

Before-update complete account and local 1.1.41 parity passed (179 files including
the exact validated host wrapper). Recovery archive and raw evidence are retained
outside source. No unexpected drift was discarded. Existing pinned fixture
installations were used without dependency updates.

Exact merged-commit CI, immutable tag, downloaded bytes, supported account update,
complete installed parity, enabled state and bounded fresh discovery remain
separate delivery gates. Fixture checks are not model or AT certification.
