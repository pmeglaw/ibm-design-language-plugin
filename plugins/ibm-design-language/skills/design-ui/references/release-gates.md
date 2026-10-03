# Release gates

Use both gates for design and critique of header, table, search, and form compositions. They block publication of plugin versions after 1.1.23 alongside the existing package checks.

Read the check names and conditions from the [packaged gate definitions](release-gate-definitions/README.md), available in an installed plugin without the repository or network access. For geometry, read the [release specification](release-gate-definitions/release-fixture/tests/release.spec.ts) and [geometry checks](release-gate-definitions/release-fixture/src/checks.ts); for keyboard, read the [behavior specification](release-gate-definitions/behavior-fixture/tests/behavior.spec.ts), [keyboard sequence](release-gate-definitions/behavior-fixture/src/sequence.ts) and its [DOM conditions](release-gate-definitions/behavior-fixture/src/dom.ts). These are unchanged copies of the canonical repository fixtures, checked for byte parity. Do not invent check names. They define fixture checks, not a self-contained application test runner; adapt their applicable criteria and selectors to the product and keep unrun checks untested.

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
