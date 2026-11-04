# Release gates

Use both gates for design and critique of header, table, search, and form compositions. They block publication of plugin versions after 1.1.23 alongside the existing package checks.

Read the check names and conditions from the [packaged gate definitions](release-gate-definitions/README.md), available in an installed plugin without the repository or network access. For geometry, read the [release specification](release-gate-definitions/release-fixture/tests/release.spec.ts) and [geometry checks](release-gate-definitions/release-fixture/src/checks.ts); for keyboard, read the [behavior specification](release-gate-definitions/behavior-fixture/tests/behavior.spec.ts), [keyboard sequence](release-gate-definitions/behavior-fixture/src/sequence.ts) and its [DOM conditions](release-gate-definitions/behavior-fixture/src/dom.ts). These are unchanged copies of the canonical repository fixtures, checked for byte parity. Do not invent check names. They define fixture checks, not a self-contained application test runner; adapt their applicable criteria and selectors to the product and keep unrun checks untested.

## Composition benchmarks

For a product shell header, data table, search field or form, compare the rendered result with the matching benchmark below in both design and critique, then apply the geometry and keyboard checks in this file as acceptance criteria.

For a product shell header, use the [Carbon header visual benchmark](ui-shell.md#what-good-looks-like-header-benchmark). The linked Carbon guidelines and React Storybook are the reference for its compact silhouette, identity/navigation hierarchy and contiguous utilities. Compare the actual rendered header with the relevant example; preserve approved brand authority and verify behavior separately. Read its dated current-header contract and [saved header images](../assets/ui-shell-header/2026-10-06/README.md) for current variants, state roles, geometry and accessibility obligations; retain the recorded Storybook version and evidence limits. For measured geometry, mouse hover/tooltips and hamburger/side-navigation states, use the [29 October observation record](ui-shell-observed-2026-10-29.md); preserve its version uncertainty, overlay exclusions and phone clipping limitations rather than copying demo defects.

For a data table, use the [Carbon data table visual benchmark](composition.md#what-good-looks-like-data-table-benchmark). Compare the rendered table with the official Guidelines and React Basic example for column alignment, density, surfaces, separators and action placement. Read its sizing reconciliation before selecting toolbar sizes; use the relevant sibling stories for richer variants.

For search, use the [Carbon Search visual benchmark](forms-and-upload.md#what-good-looks-like-search-benchmark). Compare the rendered field with the official Guidelines and React Search overview for field shape, icon/text alignment, clear-control space and placement. Read its version-qualified size mapping; distinguish the default, fluid and expandable treatments and verify application results separately.

For a form, use the [Carbon Form visual benchmark](forms-and-upload.md#what-good-looks-like-form-benchmark). Compare labels, helper text, field alignment, grouping and actions with the Guidelines and Web Components Default example. Read the spacing/sizing reconciliation and preserve the consuming framework's API and submission contracts; a Web Components story does not establish React behavior.

## Geometry

There are 29 checks. Corrected must pass all on White, Gray 100, and at 390px. Missed must fail all.

## Keyboard

There are 13 checks:

- In the keyboard fixture, the menu button is the first stop after focusing the candidate root. This is a fixture-local starting point, not a whole-page order requirement. A product shell preserves its first-focusable skip-to-main link as required by [the shell contract](nextjs-shell.md#decisions-implemented-by-the-example); verify the menu's place within the header separately. Enter opens the menu. Escape closes it and returns focus.
- Typing enters the query. The clear control empties the field and leaves focus there.
- Tab reaches the table filter. Arrow keys reach the end of the long cell.
- The project-name label belongs to its field. A failed submit focuses that field.
- At 320px, and again right to left, every operable control stays inside the candidate frame and English stays `lang="en"`. Candidate-frame containment does not establish whole-page reflow.

Corrected must pass all on White and Gray 100. Missed must fail all.

## Evidence and integrity

A critique reports each applicable check as pass, fail, or untested, with evidence for the interface under review. Prose is not a pass. An unrun check is untested.

A green fixture run is not a model evaluation and not a screen-reader certification. Do not treat fixture results as evidence that another product passes.

Do not edit fixture assertions or the Missed pattern to force a pass.
