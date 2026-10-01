# Action feedback and navigation links

## Notification

Choose feedback by task context, urgency and required action. Inline belongs near the relevant task or field (form feedback above submission actions supplements field-level errors); toast surfaces asynchronous updates without obscuring critical work; actionable inline/toast contains an explicit recovery or detail action; Callout is static contextual guidance loaded with the page. A modal has its separate interaction contract. The Usage overview's supported-variant sentence omits Callout and includes modal despite its four-variant table; do not copy that inconsistency into an API inventory.

- Inline, toast and actionable use informational/success/warning/error statuses. Callout uses information/warning, has no dismissal and is not task-completion feedback. Do not add a live announcement just because its appearance resembles a notification. Use semantic status roles, icons and text, not color alone.
- Inline persists until resolved or dismissed. Omit its optional close control when critical content must remain available. Toast persists by default; five-second dismissal is an optional design example, not a required default. Keep timed messages available elsewhere and validate reading time, preferences and accessible recovery. Actionable toast persists until user dismissal: the specific Dismissal section resolves the earlier contradictory auto-dismiss sentence.
- Write a concise title describing what happened, without a final period; body adds context and the next usable step rather than repeating it. Error messages require recovery guidance. Short one/two-word action labels are an English writing target, not permission to clip translations or obscure the action. A brief summary can link to complete details; never truncate essential recovery instructions to meet a two-line recommendation.
- Documented toast width is 288px, newest first at top right, separated by spacing-03 (8px). Accommodate narrow screens, zoom, long content and mobile action wrapping. Timestamp use should be consistent. Title/body use heading-compact-01/body-compact-01; minimum notification and close-control height is 48px. High/low contrast uses notification-specific semantic backgrounds/icons/borders, not arbitrary brand recoloring. Verify actual theme contrast and viewport fit.

### Installed React receipt and focus boundaries

Selected declarations/source inspected in `@carbon/react@1.117.0`, not a browser or screen-reader pass:

- ToastNotification and InlineNotification default to `role="status"` and include a close button unless `hideCloseButton` is true. Accessibility prose claiming no interactive elements is too broad. Select announcement urgency deliberately and test close naming, tab traversal and focus after removal. Toast `timeout=0` is persistent; `onClose` returning false vetoes internal closing.
- ActionableNotification defaults to `role="alertdialog"`, `hasFocus=true` and `closeOnEscape=true`. Focus wrapping is conditional on that role; `enable-focus-wrap-without-sentinels` changes the implementation. These defaults can disrupt an unrelated task, so choose the appropriate feedback interaction before mounting it. Do not change only the ARIA role and assume equivalent focus behavior.
- Its initial focus source queries the document's first actionable-notification action button. Multiple instances or an instance without an action need explicit rendered focus checks; source inspection does not prove focus lands in the intended message. The inspected close path does not restore the original invoker. Compose safe focus return/removal behavior for the actual task.
- Callout is exported by this release and does not default to a live-region role. It has no close button; `titleId` describes its action button, and interactive child content needs an appropriate description relationship. Native links activate with Enter; do not implement the Accessibility page's Space-for-links sentence as a custom anchor handler.

Verify actual action outcomes, persist/dismiss/veto/timing, error retry with preserved input, duplicate feedback, announcement urgency, focus entry/trap/return, multiple instances, native links, responsive stacking and contrast. Carbon's upstream testing badge does not certify the application composition.

Sources: [Usage](https://carbondesignsystem.com/components/notification/usage/), [Style](https://carbondesignsystem.com/components/notification/style/), [Code](https://carbondesignsystem.com/components/notification/code/), [Accessibility](https://carbondesignsystem.com/components/notification/accessibility/). All four public source tabs reviewed 2026-09-29 at website commit `d8783ad2ae3b5e59c58f58311491f8a2c4e62631`; images/demos uninspected. Selected live Usage text also checked; full live tab parity remains unverified.

Public four-tab source text for the components below was reviewed 2026-09-29 at website commit `d8783ad2ae3b5e59c58f58311491f8a2c4e62631`. Installed-source receipts are explicitly scoped to the named release/components. This is not rendered-contrast or assistive-technology verification. Use [patterns](patterns.md) for larger loading/notification flows.

For system-operation progress and user-driven step sequences, use the distinct contracts below rather than treating both as loading animations.

## Progress bar: system operation

Use determinate progress only when a meaningful total and current amount are available; use indeterminate while the amount is unknown, and switch when real measurements become available. Never fabricate percentages or time estimates. Keep values monotonic within the same operation; a retry/new phase needs an explicit state transition rather than an unexplained reset. File transmission completing is not proof that server processing or persistence succeeded.

- Give a stable process label even when visually hidden. Keep measured amount/percentage and changing status in helper text. Supply helper text for indeterminate outcomes and errors, including recovery; success/error color or icons alone do not communicate completion. Format amounts/percent signs for the locale and mirror fill/label/value alignment in RTL.
- The indicator is not keyboard operable. Disable dependent actions during pending work, while preserving unrelated work and meaningful cancellation. Mark the affected region busy while it is actually processing; clear that state on terminal failure as well as success. A visual busy class does not block keyboard interaction.
- Style guidance is 8px big/4px small, minimum width 48px and a recommended maximum six columns; maintain context rather than stretching across a whole wide page. Text belongs adjacent to the track, not inside it. Label uses body-compact-01, helper uses helper-text-01, with 8px top/bottom separation and 16px for left-aligned labels. The general above-label instruction coexists with inline alignment: use the selected variant instead of overriding both.
- Active/success/error colors use border-interactive/support-success/support-error with border-subtle track. The Usage five-second threshold and Loading three-second recommendation are selection heuristics, not a reason to delay immediate feedback or simulate a measured operation.

Selected `@carbon/react@1.117.0` source/declarations: status is `active | finished | error`, not `success`; omit `value` for active indeterminate, `max` defaults to 100, and `type` is `default | inline | indented`. Validate a finite positive total and finite current amount before rendering. Finished forces the ARIA amount to max; error forces it to zero despite the full-width visual error track. Do not interpret that zero as measured rollback.

The track owns role=progressbar and label/description/value relationships. Its busy attribute remains true on error (`!isFinished`). The helper's hidden polite live text says Done or Loading, including Loading on error, rather than announcing the changing helper content as promised in Accessibility prose. Test actual error/indeterminate announcements and compose correct task status where needed; do not claim source attributes establish assistive-technology behavior.

Verify measured/unknown transition, zero/invalid totals, success versus server completion, error/cancel/retry, dependent blocking, busy clearing, label/value/announcement, locale/RTL, reduced-motion behavior and real contrast/layout. No ProgressBar runtime or AT pass was performed for this audit.

Sources: [Usage](https://carbondesignsystem.com/components/progress-bar/usage/), [Style](https://carbondesignsystem.com/components/progress-bar/style/), [Code](https://carbondesignsystem.com/components/progress-bar/code/), [Accessibility](https://carbondesignsystem.com/components/progress-bar/accessibility/). Four-tab public source prose reviewed 2026-09-29; images/videos/demos uninspected.

## Progress indicator: user-driven steps

Use for a linear sequence of at least three steps with known order/count, alongside Back/Next navigation. An unordered checklist, changing conditional sequence or system-operation percentage needs another pattern. Default presentation reports completed/current/future steps; optional interaction navigates permitted steps. Preserve entered values when revisiting and validate the actual task before progressing; visual complete state is not persisted-data proof.

- Use clear step names, optional/error secondary labels, and field-level validation plus server failure feedback. Short one/two-word or 16-character labels are writing targets, not a localization cap. Prefer wrapped helper text over truncation and make full truncated names accessible on keyboard/touch. Explain unavailable steps rather than relying solely on disabled contrast.
- Vertical is recommended where possible; horizontal must still fit narrow screens. Documented step minimum width is 128px, icon 16px, label body-compact-01 and helper label-01. Use state-specific semantic line/icon/focus tokens. Do not squeeze a multi-step row into horizontal page overflow just to retain the desktop arrangement.
- Usage says Left/Right arrows and Accessibility describes native links, but inspected 1.117.0 renders a list of buttons with native Tab stops and Enter/Space handlers, without arrow navigation. Disabled buttons leave the tab order; disabled content does not thereby disappear from all screen-reader reading. Verify the installed semantics rather than adding a tablist role to match ambiguous prose.
- `currentIndex` is zero-based and controlled; `onChange(index)` requests selection, not automatic route navigation or validation. Earlier children are marked complete from index order; actual validity/persistence must remain in application state. Current-step click is suppressed but its keyboard handler still invokes onClick; test repeated/native key dispatch and callback counts before attaching a mutation. State names are translated through `carbon.progress-step.complete/incomplete/current/invalid`.

Verify allowed/blocked/back/next/revisit paths, preserved input, completed/current/error state naming, server/client validation, keyboard callback counts, focus after step changes, disabled-step explanation, long/translated labels and RTL/responsive layout. Source inspection is not a runtime pass.

Sources: [Usage](https://carbondesignsystem.com/components/progress-indicator/usage/), [Style](https://carbondesignsystem.com/components/progress-indicator/style/), [Code](https://carbondesignsystem.com/components/progress-indicator/code/), [Accessibility](https://carbondesignsystem.com/components/progress-indicator/accessibility/). Four-tab public source prose reviewed 2026-09-29; images/demos uninspected. Installed source receipts above are release-specific.

## Inline loading

Use local indeterminate feedback for a short asynchronous action or small refresh. Full-page initial loading needs an appropriate skeleton/other loading pattern; measurable progress needs the relevant progress control rather than a spinner that pretends to show completion percentage.

- States are inactive (no visible indicator), active, finished and error. Use task language such as Saving/Saved/Save failed. If visible text is omitted, provide an equivalent status; the installed component's default symbol label may be too generic for a busy screen.
- When replacing content/button, preserve its location/alignment and plan focus. Inline loading is not itself keyboard operable. Suppress duplicate or conflicting dependent actions, but do not disable unrelated recovery or meaningful cancellation without a task reason.
- Carbon describes a polite live region for text and accessible status icon titles when no text is shown. Verify the actual rendered status/announcement and avoid duplicated live regions shouting the same update. Visual spinner presence alone is not evidence of an announcement.
- Documented success duration is 1.5 seconds before an optional `onSuccess`; without the callback success can persist. Verify supported callback/timing in the installed release and keep backend completion separate from an animation timer. A success callback must not erase unsaved values or navigate before the task actually succeeds.
- On error, stop pending state and show meaningful inline error/notification with retry. Preserve user input, restore usable actions and focus. Do not leave a spinner indefinitely active or show a success tick after a failed request.
- Usage discourages simultaneous action loaders except initial loading/refresh. Resolve this against actual concurrency: prevent contradictory operations and confusion, but do not falsify the statuses of independently progressing items.
- Style repeats `status: finished` for both success and error tokens, and lists 14px as 0.75rem. These are source inconsistencies; use actual finished/error semantics and body-compact-01 (14px is 0.875rem at a 16px root), verified in installed styles.

Verify inactive/pending/success/error, duplicate prevention, timing/callbacks, focus through replacement, status announcements, retry/cancel and actual theme contrast. A promised callback or SVG title is not a tested screen-reader result.

Sources: [Usage](https://carbondesignsystem.com/components/inline-loading/usage/), [Style](https://carbondesignsystem.com/components/inline-loading/style/), [Code](https://carbondesignsystem.com/components/inline-loading/code/), [Accessibility](https://carbondesignsystem.com/components/inline-loading/accessibility/).

## Link

Use navigation to a page/resource/section or appropriate mail/phone target. Use buttons for state/data actions. Give links real destinations; `href="#"` is not a working ancestor route and can unexpectedly move the page.

- Names identify the destination. If repeated Read more labels are needed, associate their distinct context programmatically; preserve visible words in the accessible name. Do not make several identical names lead to different resources without context.
- Inline links match surrounding text size and remain underlined; standalone links match the page's body style and can underline on hover/focus/active. Standalone can use a destination icon, inline normally does not. Avoid cluttering a sentence with many links.
- Enter activates the focused native link; Tab/Shift+Tab traverses it. Preserve browser link capabilities such as open in a new tab and copying the address, and use the application's supported client navigation when appropriate. Carbon's browser-refresh example is not a mandate to defeat an existing SPA/router contract.
- Documented text sizes are 12/14/16px, with 16/18/22px line heights; associated small/medium icons are 16px, large icons 20px. Grouped-link spacing is design guidance not built-in component functionality.
- New-tab/resource behavior must be clear and icons consistent. Different source sections say external links and new-tab calls use Launch; distinguish destination from opening behavior and communicate the actual outcome. An icon alone is not sufficient disclosure or accessible naming.
- Visited styling is opt-in, useful when prior navigation matters, and not a substitute for application state. Check real hover/focus/active/visited roles rather than deriving a status from CSS color.
- Disabled styling cannot make a native anchor noninteractive by itself. Use the supported component semantics and suppress activation consistently where genuinely unavailable; preserve understandable content and the relevant disabled-control focus contract.
- The public page lists opening a read-only modal among link outcomes but otherwise prohibits action-only links. Preserve a real navigable resource when a link progressively enhances its presentation; use an appropriate button/dialog trigger when the operation is solely opening a local interaction. Do not infer an action button is a navigation link just from blue text.
- Generic Carbon contrast statements do not certify brand overrides, nesting or composed themes. Measure the link against the actual background and, where color carries the distinction without persistent underline, surrounding text and non-color affordances.

Verify destinations and hash targets, names/context, native Enter and browser actions, tab/URL behavior, disabled handling, inline/standalone distinctions, responsive wrapping and rendered focus/contrast. A screenshot cannot prove the destination works.

Sources: [Usage](https://carbondesignsystem.com/components/link/usage/), [Style](https://carbondesignsystem.com/components/link/style/), [Code](https://carbondesignsystem.com/components/link/code/), [Accessibility](https://carbondesignsystem.com/components/link/accessibility/).

## Loading

Use indeterminate Loading for a task whose duration is unknown; use a skeleton for initial progressive page content where its structure can be represented, and a progress control for meaningful measurable progress. Public Usage recommends a spinner when a process is expected to exceed three seconds; this is not a mandate to withhold all immediate action feedback for three seconds.

- Default large is 88px and small is 16px. Small feedback belongs to its local operation without an overlay; a large blocking indicator centers in the affected page/region. Scope the blocked region deliberately rather than obscuring unrelated usable work.
- Loading has active/inactive states; Inline loading has additional success/error states. An indicator disappearing does not communicate completion or failure: provide explicit task status and a usable recovery route.
- Accessibility guidance describes an assertive live region and SVG title. Verify the installed output and appropriate announcement urgency in the composed task. Routine updates should not steal focus; avoid duplicate live regions. A visual overlay does not by itself suppress keyboard interaction with blocked controls. Preserve meaningful cancellation when the operation permits it.
- Avoid competing loaders for the same operation. Independently loading regions still need honest localized statuses; do not hide a pending task merely to enforce a one-spinner count.

Verify pending/completion/failure, scope and keyboard blocking, names/announcements, cancel/retry, focus visibility and actual layout. Source text is not a screen-reader pass.

Sources: [Usage](https://carbondesignsystem.com/components/loading/usage/), [Style](https://carbondesignsystem.com/components/loading/style/), [Code](https://carbondesignsystem.com/components/loading/code/), [Accessibility](https://carbondesignsystem.com/components/loading/accessibility/). Four-tab public source text reviewed 2026-09-29; images/demos and installed Loading implementation remain unverified.
