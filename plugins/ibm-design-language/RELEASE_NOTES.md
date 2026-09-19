# IBM Design Language 1.1.6

Adds explicit cross-view review guidance for sibling pages, tabs and repeated sections, addressing inconsistencies that can be missed when screens are reviewed individually.

- Reports which requested views were inspected and which remain unverified.
- Compares geometry, context-area surfaces and typography, table treatments, numeric-column alignment, row-action forms and primary-action placement.
- Assesses actions in relation to the content they control, including narrow lists beneath page-wide headers.
- Preserves justified differences in widths, controls and action scope. Requires evidence and contextual judgment rather than identical screens or invented defects.

## Validation and evidence

The unchanged nine-point known-regression rubric scored 1.1.5 at 7/9, rc.1 at 8/9, rc.2 at 7/9 and rc.3 at 9/9. Each version received one screenshot-review run; rc.3 passed all nine criteria. The released skill content is byte-identical to rc.3. Stable preparation changes only the version metadata and these release notes.

This case was used to revise the guidance and was graded by the author with version knowledge. These results do not establish repeatability or general improvement. rc.2 and rc.3 emitted host warnings that discoverable skill descriptions were shortened; candidate guidance was supplied inline. Runtime behavior, responsive states, alternate themes and accessibility behavior were not tested by these screenshot-only runs.

Local skill validation, relative-link checks, exact file comparisons and archive integrity checks passed. All implementation assets, evaluator code, bundled 21 cases / 121 assertions and design-engineering.md remain byte-identical to 1.1.5; prior passing evaluator checks are reused on that basis. The separate regression rubric and historical evidence remain unchanged.

This stable package is prepared locally. No additional model runs, installation or publication were performed during stable preparation.
