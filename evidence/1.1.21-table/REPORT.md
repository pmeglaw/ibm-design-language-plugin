# 1.1.21 data table guidance review

Scope: strengthen `design-ui` with a positive visual benchmark using the owner-selected Carbon Data table Guidelines and React DataTable Basic overview. No application, stylesheet, component API, casebook rendering or evaluation assertion changes.

## Reference inspection - 2026-10-01

- [Guidelines](https://www.carbondesignsystem.com/building-blocks/core/components/data-table/guidelines): read current prose and inspected the rendered anatomy illustration. The page displayed a September 30, 2026 update date. Its small/tall toolbar pairings conflict with its later statement that toolbar height always matches the table row; the amendment records the discrepancy rather than treating it as a released API matrix.
- [React Basic overview](https://react.carbondesignsystem.com/?path=/docs/components-datatable-basic--overview): visually inspected the white, desktop, unselected table. Storybook displayed `@carbon/react@1.117.0`. Visible qualities include consistent column edges, a distinct header surface, neutral body rows and quiet horizontal separators. The demo frame is not table chrome to copy into a product.
- Inspected local package source: `@carbon/react@1.117.0` `lib/components/DataTable/DataTable.js`, `TableToolbar.js` and `TableToolbar.d.ts`; `@carbon/styles@1.116.0` `scss/components/data-table/action/_data-table-action.scss` and `scss/utilities/_layout.scss`. Table size defaults to lg; toolbar accepts xs/sm/lg; `getToolbarProps()` passes xs/sm and otherwise leaves size unset; toolbar styling defaults to 48px and maps md/xl layout heights to 48px. This is source evidence, not a rendered toolbar/batch-action measurement.

## Bounded retrieval review

Before editing, a read-only reviewer used the source skill and table/taste references against a scenario with oversized single-line rows, centered text, heavy cell borders, detached actions and squeezed columns. Existing guidance covered individual corrections, but the official positive table benchmark, exact React Basic link and a unified comparison procedure were missing. Medium toolbar guidance identified uncertainty without a version-specific resolution.

The amendment adds both source links, five labeled craft correction pairs, comparable-render inspection criteria and a dated sizing reconciliation. The skill entrypoint and taste rubric route to the same benchmark. Cross-row comparison remains the reason for choosing a table: supplementary disclosure must not hide the attributes needed for that comparison.

A separate read-only reviewer retrieved both official URLs, all five correction pairs, the comparison procedure and sizing reconciliation from the amended guidance. It found no consequential editorial contradiction or blocker and confirmed the brand, version and evidence boundaries. The Basic URL retrieval returned the Storybook shell; the rendered inspection belongs to the primary review above.

## Validation boundaries

Both skill frontmatter validations and all six installation-parity unit tests passed locally. The release integrity check passed for 135 package files, 278 local links and all preserved archives from 1.1.4 through 1.1.21; all 42 synthetic evaluator tests passed. CI, publication, downloaded-asset checks and installed-file parity are separate gates recorded by their own outputs.

No generated application, exhaustive theme/responsive matrix, live toolbar/batch geometry, keyboard or assistive-technology evaluation was performed for this amendment. The bounded retrieval review is not a blinded experiment or a design-quality score. Historical practical verdicts and frozen releases remain unchanged; prior 320px/RTL failures are not claimed fixed.
