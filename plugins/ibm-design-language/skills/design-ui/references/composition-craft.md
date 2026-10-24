# Composition craft: relationships between components

Use after selecting a page structure and component variants. All recipes, correction pairs and diagnostic measurements below are **local craft heuristics**, not additional Carbon specifications. They extend the existing header/table/search/form benchmarks without upgrading their evidence.

## Evidence baseline

Carbon [Header](https://www.carbondesignsystem.com/building-blocks/core/components/ui-shell-header/guidelines), [Data table](https://www.carbondesignsystem.com/building-blocks/core/components/data-table/guidelines), [Search](https://www.carbondesignsystem.com/building-blocks/core/components/search/guidelines) and [Form](https://www.carbondesignsystem.com/building-blocks/core/components/form/guidelines) prose was rechecked 2026-10-24 for scope, anatomy and placement. No new Storybook render, DOM measurement, theme matrix, keyboard or AT run accompanies this reference.

The existing [header](ui-shell.md#what-good-looks-like-header-benchmark), [table](composition.md#what-good-looks-like-data-table-benchmark), [Search](forms-and-upload.md#what-good-looks-like-search-benchmark) and [Form](forms-and-upload.md#what-good-looks-like-form-benchmark) receipts retain their dated limits and sizing reconciliations. They mostly inspect White desktop examples; do not call the uninspected themes passing. Their React example baseline is 1.117.0/styles 1.116.0; the Form example has a separate Web Components boundary. Check installed APIs before translating any geometry into props.

## Set the density by region — local heuristic

| Region | What good looks like | Tune by |
|---|---|---|
| Persistent shell | Stable, compact orientation; utility rhythm does not compete with work | Navigation scope, supported shell anatomy |
| Title/context | Clear object, state and task; optional explanation earns its space | Meaning and frequency of use, not filling a hero slot |
| Decision controls | Search, filters and collection actions form a readable cluster | Scope, labels, open states and action prominence |
| Comparison data | Stable reading edges and efficient row rhythm | Data type, expected lines and comparison frequency |
| Editing/recovery | Labels, help, values and errors stay visibly related | Question complexity, validation growth and recovery |
| Expressive arrival | One focal message with a deliberate path into work | [Register and imagery](expressive-surfaces.md), not table-row density |

Repeated small gaps cannot repair missing hierarchy. Establish which content belongs together and which regions perform different tasks, then choose spacing tokens and the component's supported size. Do not shrink targets or type merely to make a composition feel denser.

## Geometry pass — local review method

Use comparable content, desktop viewport, theme, zoom and state. Name the content area's start/end after persistent navigation or an open inspector. Then trace:

1. **Reading edges:** title, explanation, controls and content should have an intelligible grid relationship. Deliberate hanging component surfaces can share a text edge without sharing their outer box edge.
2. **Vertical rhythm:** compare gaps within a group with gaps between tasks. Verify that repeated sections follow the same rhythm unless their purpose differs.
3. **Action reach and scope:** inspect the distance and alignment between each action and the object it controls. A far-edge button may work for a full-page task but feel detached from a small collection.
4. **Content fit:** use realistic long labels, full numeric units and expected multi-line rows. Inspect labels/help/errors and the open controls, not just the resting rectangles.
5. **State growth:** compare empty, populated, selected/batch, validation and pending/error states that actually apply. Keep orientation, useful context and recovery visible as content changes.

Record measured coordinates or gaps only after inspecting the render. Explain the relationship they reveal; do not derive a universal pixel quota from a screenshot. Existing component measurements are version-qualified contracts or dated observations, not a license to force every adjacent control to identical heights.

## Correction pairs — local craft guidance

| Observation | Correction | Evidence to seek in the consuming product |
|---|---|---|
| Compact shell followed by oversized repeated page titles and generous empty bands | Restore a clear title-to-content hierarchy; reserve larger expression for the moment that needs it | Compare how quickly the task and context are visible with realistic content |
| Toolbar, table and pagination look like three unrelated cards | Align their collection relationship and use supported adjoining surfaces | Inspect edges and states, including selection/batch mode |
| Every row is roomy while filters and explanation are cramped | Allocate space to decisions; choose table density for expected content | Read long cells and operate the actual controls before reducing row height |
| Form groups have equal gaps everywhere | Keep field label/help close, use stronger section breaks and align final actions with the task | Inspect invalid and long-help states; no disconnected error text |
| Search is prominent but its scope is ambiguous | Place it with the controlled collection and make scope clear through label/context | Confirm both visual association and actual result/clear behavior |
| Row menus are quiet but all useful actions are hidden | Expose frequent or essential actions where scanning calls for them; keep secondary choices in overflow | Compare task frequency, labels, row repetition and keyboard access |
| Empty state leaves stale table headers around a large illustration | Use the actual no-data pattern; preserve useful surrounding actions | Distinguish first-run no-data from filtered no-results and failed loading |
| Primary, tertiary and destructive actions share the same emphasis | Establish action scope and consequence through supported component hierarchy | Inspect focus/hover/disabled/pending as well as resting color |
| A page-level Create action becomes visually detached when a panel opens | Reassess its relationship to the remaining content area; retain wider scope when justified | Compare the same page with and without the panel; do not move controls arbitrarily |

These are corrections to relationships, not instructions to restyle built-in controls. Keep [semantic brand states](color-and-brand.md), [accessibility](accessibility.md), and installed component contracts. Use [taste](taste.md) to prioritize observed issues and the sibling review workflow for cross-view comparisons.

## Review output — local craft guidance

For each material issue, provide the observed condition, its task cost, one concrete correction and the evidence needed to judge it. Distinguish source contracts, screenshot observations, measured geometry, local preferences and untested behavior. Compare a correction under matching content/state before recommending it; static teaching examples are not proof of usability or implementation quality.

This amendment focuses on desktop composition. It adds no narrow/320px or RTL work and does not change existing regression gates or historical benchmark claims. Product verification still follows the actual task's required environments.
