# AI presence, explainability and editing

Use when AI generates or recommends content. Sources reviewed 2026-09-29: [Carbon for AI](https://carbondesignsystem.com/guidelines/carbon-for-ai/), [AI label usage](https://carbondesignsystem.com/components/ai-label/usage/), [style](https://carbondesignsystem.com/components/ai-label/style/), [code](https://carbondesignsystem.com/components/ai-label/code/), [accessibility](https://carbondesignsystem.com/components/ai-label/accessibility/). Style tables require task-specific retrieval; this reference does not reproduce the full token specification.

## Meaning and scope

AI styling identifies actual AI presence; it is not decorative branding. The AI label opens explainability. It must not perform Generate or Regenerate; those actions need their own named controls. Explainability should be available on demand without obstructing the main task.

Choose focused labels when users must distinguish human and generated content, act on an individual suggestion, or inspect an individual explanation. Broad labels can summarize shared AI presence when per-instance actions/explanations are unnecessary. Use both when broad context and individual provenance matter. Do not label an entire mixed-origin table as though every cell were generated.

For LTR tables, the documented placement is: whole-table presence at the upper right of the table header; column presence at the right of the column header, after sort; row presence before selection/expansion; cell presence inline before the cell text. Containers use the upper right with margin, inputs use the right/middle, and whole-form presence uses the form header. Mirror reading-direction-dependent placements for RTL. In icon groups, the AI label normally comes first, with exceptions for expanding search or changing sort controls.

Default sizes run 16, 20, 24, 32, 40, 48 and 64 CSS px. Inline small/medium/large heights are 16/18/22px and pair with 12/14/16px text respectively. These are documented variant measurements, not permission to shrink click targets globally. Use installed variants and check the rendered hit area in context.

## Editing and read-only states

AI labels remain enabled when the host value is disabled or read-only: people still need provenance and explanation. Do not let a disabled parent fieldset silently disable this separate control.

When a user overrides an AI suggestion, remove that value's AI presence styling and replace its label with a named Revert action. Keep the original suggested value in application state. Revert restores that exact value and its AI provenance/styling. It is not a new generation request and must not merely change the icon. Keep generated and user-edited versions distinct through asynchronous updates and errors; define the product's persistence and permission behavior separately.

## Explainability and keyboard contract

The public usage page offers four content groups: overview, supporting details, artifacts/resources, and additional actions. Make content specific to the instance and truthful about available evidence. Do not invent confidence, model provenance or causal explanations. Detailed internal IBM patterns are access-limited and were not reviewed.

The label is a tab stop; Enter/Space toggles the popover. Opening keeps focus on the trigger. Tab reaches interactive content when present; with only noninteractive text, or after the final interactive element, Tab closes the popover and advances to the next page stop. Escape closes it and returns focus to the trigger. Use the supported accessible-name, expanded and controls relationships. Test reverse traversal, embedded input/revert behavior, touch, viewport-edge positioning and portals in the actual composition.

## Release boundary

The reviewed general guideline contains a stale statement that AI Slug will become stable, while the component Usage page calls AI label stable. Prefer the component-specific status for that source snapshot, then verify the installed framework's exports and API. Neither page proves a particular package version contains the feature. The Code tab routes to framework Storybooks rather than supplying a complete API contract. No installed Carbon React/Web Components integration or assistive-technology pass is implied by this guidance.
