# 1.1.40 UI shell reference preparation

Prepared 29 October 2026 from repository baseline
`0c58b16b0c406f03a0a3194400c421205e694bed` on
`codex/ui-shell-observed-reference`. This record describes preparation, not
publication or destination installation.

## Scoped change

Add the [dated UI shell observation reference](../plugins/ibm-design-language/skills/design-ui/references/ui-shell-observed-2026-10-29.md)
and route to it from design-ui, UI shell guidance and source coverage. Include
desktop geometry, typography, hover and tooltips, dropdown, demonstration content
and modal, responsive boundary checks, hamburger, drawer and nested links.
Preserve source-version uncertainty, addon exclusions and narrow-layout defects.
Only these reference/routing files, package metadata and release notes change in
the package. No product, dependency, runtime asset, fixture assertion, historical
evaluation or earlier frozen release is changed.

## Local checks

- `python -B scripts/verify.py`: PASS, 178 package files; frozen release integrity,
  links, JSON/Python syntax and synthetic evaluator checks.
- `python -B -m unittest discover -s tests -p 'test_*.py'`: PASS, 38 tests,
  two Windows symlink-capability skips. Exact-commit Linux CI must check its
  applicable cases; local skips are not passes for those cases.
- `npm test` in `tests/release-fixture`: PASS, eight tests, including the
  Corrected 29/29 and Missed 0/29 checks across specified views.
- `npm test` in `tests/behavior-fixture`: PASS, three tests, including Corrected
  13/13 on White and Gray 100 and Missed failing every check.
- `npm run build` and `npm test` in `.verification/nextjs-shell`: PASS,
  production build and 20 tests. Existing pinned prepared fixture dependencies
  were used; no dependency upgrade was performed.
- `node --test tests/casebook/renderer.test.cjs`: PASS, 25 tests.
- `python -B scripts/verify_release_docs.py`: PASS offline, distinguishing
  published 1.1.39 from unpublished source 1.1.40.
- Independent read-only reference/package review: no actionable findings;
  publication, live-browser remeasurement and installation were outside review.

Private local logs remain in ignored `.verification/ui-shell-*` files. An initial
sandboxed unit run could not create temporary files; a preparatory rerun also saw
the temporary source/validator version mismatch before candidate reconciliation.
The complete final suite above passed outside the filesystem sandbox. Initial
CRLF whitespace diagnostics in the added source-map block were corrected before
the final candidate was frozen; earlier release bytes were not regenerated.

## Evidence limits and delivery

The reference records the mouse/browser inspection from this task; no fresh
model evaluation, generated-product quality improvement, physical-touch,
keyboard/AT, native-zoom, RTL, reduced-motion or complete theme pass is claimed.
Passing unchanged fixtures checks regressions, not the quality of future output.

Required exact-commit CI, immutable tag, downloaded release assets, account
update, installed-file parity, enabled state and fresh discovery must be checked
separately after preparation. Current companion documentation and dated delivery
receipts should report those actual results without rewriting this record.
