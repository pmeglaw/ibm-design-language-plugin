# Content design and action semantics

Use for interface labels, instructions, errors, and implementation handoff. Based on Carbon's [content overview](https://carbondesignsystem.com/guidelines/content/overview/), [writing style](https://carbondesignsystem.com/guidelines/content/writing-style/), and [action labels](https://carbondesignsystem.com/guidelines/content/action-labels/), reviewed 2026-09-29. Product terminology and the user's approved copy remain applicable.

## Choose words from the operation

| Label | Contract |
|---|---|
| Add | Put an existing object into a new context, such as group membership. |
| Create | Make a new object from supplied details. New can initiate the creation flow; Create completes it. |
| Remove | Remove an association or context without destroying the underlying object. |
| Delete | Destroy the object. Decide confirmation and recovery from actual consequences and reversibility. |
| Clear | Clear content or selections; retain a required default selection where appropriate. |
| Apply | Apply/save the configuration while keeping the dialog open. |
| Cancel | Stop the current action and close its dialog; disclose meaningful consequences. |
| Close | Close a page/window; avoid pairing Close with OK or Cancel for the same decision. |
| Done | Leave the working environment after finishing. Finish completes a sequence of steps. |
| Export / Download | Export converts/saves data outside the system; Download transfers a remote file locally. |
| Filter / Find / Search | Filter narrows a collection; Find locates the next match; Search discovers relevant results. |

The full official glossary is rendered from `src/data/guidelines/glossary.js` in the Carbon website source. An MDX page containing `<GlossaryComponent />` is not the glossary itself. Read the relevant definition when another action's semantics matter; do not infer it from the heading.

## Writing decisions

Use sentence case for UI titles, labels, tabs, buttons, and table headings. Preserve proper names, trademarks and known abbreviations. Capitalization must not encode subjective importance. Refer to a UI label using its actual capitalization.

Use simple language, short sentences, active voice when appropriate, and user-facing second person. Prefer a precise outcome over internal implementation terminology. Explain unfamiliar abbreviations on first use. Maintain a product terminology list when multiple surfaces share concepts.

Keep voice coherent while adjusting tone to the task. Errors need economical, direct explanation and a useful next action; onboarding can provide more context. Avoid blame, inflated claims and negative exclamations. Use politeness purposefully rather than on every control. Inclusive wording must remain understandable and translatable.

## Implement and verify

An action's label, accessible name, actual mutation and feedback must agree. A Remove control must not secretly delete the object. A Cancel control must not save changes. Test the consequence, not just the label. Preserve entered values when recovery requires them.

Check names in isolation as well as in context: repeated icon buttons need the relevant object in their accessible name; instructions must not depend solely on position or color. Associate labels, help and error messages using the supported component API. A placeholder is not a durable label.

Check long translations, wrapping, locale-specific dates/numbers, mixed scripts, and reading direction for affected layouts. Do not make English character counts a universal fit rule. Source copy review does not establish rendered readability, screen-reader announcements or successful recovery.
