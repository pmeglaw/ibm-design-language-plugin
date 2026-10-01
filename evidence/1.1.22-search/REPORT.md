# 1.1.22 Search guidance review

Scope: add a positive Search visual benchmark to `design-ui` using the owner-selected Carbon Search Guidelines and React Search overview, and reconcile the size mapping. No application, stylesheet, component API, casebook rendering or evaluation assertion changes.

## Reference inspection - 2026-10-01

- [Guidelines](https://www.carbondesignsystem.com/building-blocks/core/components/search/guidelines): read the current prose and visually inspected the default anatomy illustration. The page displayed a September 30, 2026 update date. It lists xs/sm/md/lg at 24/32/40/48px, recommends md for ordinary density and describes fluid as 64px with a stacked internal label.
- [React Search overview](https://react.carbondesignsystem.com/?path=/docs/components-search--overview): visually inspected the white desktop empty default field. Storybook identified `@carbon/react@1.117.0`. Its restrained rectangular surface, fine bottom border, leading magnifier and start-aligned text establish the baseline. The Guidelines filled-field illustration shows the trailing clear control. The Storybook frame is not component chrome to copy.
- Inspected package source: `@carbon/react@1.117.0` `lib/components/Search/Search.d.ts` and `Search.js` accept xs/sm/md/lg and pass explicit sizes into layout classes. Paired `@carbon/styles@1.116.0` `scss/components/search/_search.scss` uses md as the default with xs-to-lg bounds; `scss/utilities/_layout.scss` maps those heights to 24/32/40/48px. This is source evidence, not a rendered all-size test. The preceding skill summary omitted a supported xs size.

## Bounded reference retrieval

Before editing, a read-only reviewer used the existing source skill against a developer question about the Search visual benchmark and `size="xs"` in React 1.117.0. It found useful behavior, type and three-height guidance, but no dedicated benchmark, direct React overview route or supported size-literal reconciliation. It correctly left xs support unresolved from the available references.

The amendment adds both official URLs, positive composition guidance, five labeled craft correction pairs, a comparable-render review procedure, version-qualified sizing and explicit inspection limits. The entrypoint and taste rubric route to the same section. The source map records partial coverage separately from historical audit receipts.

The read-only reviewer repeated the same scenario against the amendment and retrieved both exact URLs, the composition criteria and the supported size mapping. It found no contradictory claim in the amended passages and correctly retained the distinction between source-supported sizing and untested all-size rendering. This review did not independently inspect upstream code or render a product.

## Validation boundaries

Both skill frontmatter validations and all six installation-parity unit tests passed locally. The release integrity check passed for 135 package files, 280 local links and all preserved archives from 1.1.4 through 1.1.22; all 42 synthetic evaluator tests passed. The existing 1.1.21 installation matched all 135 files before updating, with no missing, extra or changed files. CI, publication and destination-installation results are recorded by their separate delivery checks.

The before/after reference check is a bounded, author-associated retrieval review, not a blind experiment, generated application or design-quality score. No exhaustive theme/responsive/RTL matrix, rendered all-size measurement, fluid/expandable interaction, keyboard or assistive-technology evaluation was performed. Historical practical verdicts and frozen releases remain unchanged; prior 320px/RTL failures are not claimed fixed. Package, CI, publication, downloaded-asset and installed-file checks remain distinct delivery gates.
