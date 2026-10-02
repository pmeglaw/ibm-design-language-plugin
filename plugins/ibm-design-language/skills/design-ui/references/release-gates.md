# Release gates

Use both gates for design and critique of header, table, search, and form compositions. They block publication of plugin versions after 1.1.23 alongside the existing package checks.

Read the check names from `tests/release-fixture` and `tests/behavior-fixture` in the canonical plugin repository. Do not invent them. For geometry, read `tests/release-fixture/tests/release.spec.ts` and `tests/release-fixture/src/checks.ts`; for keyboard, read `tests/behavior-fixture/tests/behavior.spec.ts` and `tests/behavior-fixture/src/sequence.ts`. If the fixture sources are unavailable, obtain them before naming checks; keep unrun checks untested.

## Geometry

There are 29 checks. Corrected must pass all on White, Gray 100, and at 390px. Missed must fail all.

## Keyboard

There are 13 checks:

- The menu button is the first stop. Enter opens it. Escape closes it and returns focus.
- Typing enters the query. The clear control empties the field and leaves focus there.
- Tab reaches the table filter. Arrow keys reach the end of the long cell.
- The project-name label belongs to its field. A failed submit focuses that field.
- At 320px, and again right to left, every operable control stays inside the frame and English stays `lang="en"`.

Corrected must pass all on White and Gray 100. Missed must fail all.

## Evidence and integrity

A critique reports each applicable check as pass, fail, or untested, with evidence for the interface under review. Prose is not a pass. An unrun check is untested.

A green fixture run is not a model evaluation and not a screen-reader certification. Do not treat fixture results as evidence that another product passes.

Do not edit fixture assertions or the Missed pattern to force a pass.
