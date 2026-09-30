# Universal patterns and related guidance

Carbon draws a hard line: a **component** is designed, coded and importable; a **pattern** has multiple valid answers and combines components with additional decisions. That's why most patterns ship no code. Patterns are the judgement layer.

Read together, almost all of them argue one thing: **match disruption to consequence, and default low.**

For source links and review scope, see [Pattern coverage checklist](patterns-coverage.md).

## Contents
- [Common actions](#common-actions)
- [Dialogs](#dialogs)
- [Notifications](#notifications)
- [Empty states](#empty-states)
- [Forms](#forms)
- [Filtering](#filtering)
- [Search](#search)
- [Disclosures](#disclosures)
- [Disabled and read-only states](#disabled-and-read-only-states)
- [Loading](#loading)
- [Login](#login)
- [Overflow content](#overflow-content)
- [Fluid styles](#fluid-styles)
- [Text toolbar](#text-toolbar)

Global header and status indicators have their own reference files.

---

## Common actions

Standard vocabulary so the same word means the same thing everywhere.

| Action | Treatment |
|---|---|
| Add | Inserts an existing object into a list or system. Emphasis high/medium/low by importance; only one primary button. |
| Cancel | Stops the current action and closes its context according to the task contract. Secondary treatment; explain meaningful consequences. Cancellation/rollback must actually be implemented. |
| Clear | Removes data from a field or resets to default. Close icon on the right of the field. |
| Close | Terminates a page, window, menu, or dismisses a notification. Close icon, upper right. Carbon recommends the icon presentation; implement it as an accessible button rather than an inert icon. |
| Copy | Identify whether the task duplicates an object or writes text to the clipboard. Confirm success only after the real operation succeeds. |
| Delete | Destroys. See impact tiers below. |
| Edit | Menu option, button, or edit icon. |
| Next | Advances a sequence. Button with icon or forward icon. |
| Refresh | Reloads a view that's out of sync with its source. |
| Remove | Takes an object out of a list without destroying it. Rarely primary; don't over-emphasize. |
| Reset | Reverts to the last saved/applied state. Use action semantics even when the visual treatment resembles a link. |

**Deletion impact tiers.** Low: trivially undone — delete on click, no warning. Moderate: can't be undone easily, or affects more than one thing — confirm with the consequences described. High: expensive or slow to recreate, large volume, or cascades into other objects — confirm **and** require the user to type the resource name.

After confirmed deletion, restore the appropriate list/workflow context and announce the result. Optional removal/rollback animation must respect reduced motion. On failure, retain or restore the actual record and offer recovery. The source suggests a second-channel notification; that requires the product’s supported notification contract and authorization, rather than automatic email from a UI implementation.

Error copy: brief, honest, supportive; explain what happened and what to do. The source suggests three lines for page/large-modal errors and two for field errors as editorial targets. Do not enforce these with clipping or discard required information when localized text wraps.

## Dialogs

Triggered by a user action, on top of page content, persistent until dismissed. Purpose immediately apparent, path to completion obvious.

**Use for**: focusing attention, short task completion, gathering input, displaying relevant information.
**Don't use for**: content unrelated to the workflow; complex or large data; recreating a page; anything the user didn't trigger.

**Modal** blocks the page — for critical information or required input. **Non-modal** leaves the page usable — for optional or supporting tasks like find-and-replace. The pattern describes movable windows, but that is not evidence that Carbon Modal implements dragging or a non-modal variant.

Modal variants: **passive** (no actions), **transactional** (cancel + primary), **acknowledgment** (single button), **progress** (cancel, previous, next).

Hard rules:
- **Never nest modals.** If a modal task depends on a confirmation modal, that task shouldn't be in a modal.
- **Never make a modal full-page.** If it needs more than the large size, it's a page.
- Don't use one when the user must consult information outside it.
- Dialogs must be user-initiated. A background process finishing is not a user action — use a toast.

Buttons: cancel outermost left, primary outermost right, one primary only, full bleed to the bottom edge. One button = 50% width, right. Two = 50/50. Three = 25% each, right-aligned, only the rightmost may be primary. Progress: cancel (ghost, left), previous + next grouped right at 25% each; the final step's Next takes the name of the final action.

Behavior: choose initial focus for the task; a simple input dialog commonly focuses its first field. Destructive confirmation and long structured content need special consideration; see the accessibility clarification below. For modal dialogs, trap focus until closed, then restore focus to the invoker or an appropriate surviving workflow target. Non-modal dialogs must leave the page reachable. Body scrolls with header and footer fixed. Validate before closing; keep the dialog open on error with an inline message. During a short load, spinner and overlay over the body with the primary button disabled.

Avoid inside a dialog: links that lead away, accordions and tabs that hide content, and complex data tables. Selections in a table are fine; batch editing inside a modal is not.

### Variant dismissal and non-modal tasks

[Source: Carbon Dialogs](https://carbondesignsystem.com/patterns/dialog-pattern/).

| Variant | Completion and dismissal |
|---|---|
| Passive modal | No action footer; close icon, Escape, or an outside click dismisses it. |
| Transactional, acknowledgment, progress modal | Primary action completes; close icon or Escape dismisses. Cancel, when present, abandons changes. Do not inherit passive-modal outside-click dismissal. |
| Passive non-modal | Supporting information without action buttons; keep the underlying page usable. |
| Transactional non-modal | Optional actions can repeat without closing; include at least one action button. |

Non-modal dismissal uses the close icon, Escape, or Cancel when provided. Cancel reverses applied changes according to the task contract. A required response belongs in a modal. For non-modal tools such as find-and-replace, users must be able to work with both the tool and the document; do not apply the modal focus trap.

## Notifications

Relevant, timely, informative. Task-generated feedback usually belongs inline near the task; system-generated feedback often suits a toast. Context, urgency and required action also determine the vehicle. Follow [the detailed notification contract](action-feedback-and-links.md#notification) for current component/API differences and persistence/focus checks.

Status: informational (blue, info filled), success (green, checkmark filled), warning (yellow, warning filled), error (red, error filled).

| Type | Behavior |
|---|---|
| Inline | Confined to its area. Persists until resolved or dismissed. Concise body, with complete recovery details available. A ghost action belongs to the actionable inline variant. |
| Toast | Top right, newest first, documented fixed width with responsive fit. Persists by default; optional timing needs an accessible later reading route. Actionable toast persists until user dismissal. |
| Actionable | Inline- or toast-styled interaction; alertdialog defaults take and wrap focus. Choose that disruption deliberately. One primary action; concise labels must remain meaningful in translation. |
| Callout | Loads with the page. Not triggered, not dismissible, not feedback. Guidance before a task. No success or error status exists. Place near the control it informs. Don't stack several on a page. |
| Banner | Top of the interface, product- or system-wide, unrelated to a task. One at a time. Scrolls with content — not sticky. |
| Notification panel | A centre for system-generated messages. Chronological, groupable by source or urgency. Let users manage preferences; don't resend an unacknowledged notification. |
| Modal | Highly disruptive. Only when critical and immediate. One at a time. |

High-contrast style for urgent, low-contrast for supplemental — never mix styles within a variation.

Accessibility: preserve critical messages and recovery access, allow appropriate control over interruptions/timing, and verify announcement/focus behavior. Apply current WCAG timing and interruption criteria with their level and exceptions; the old numeric shorthand here did not establish conformance.

## Empty states

Anatomy: optional image, title (write it as a positive — "Start by adding data assets" over "You don't have any"), body explaining the next action, optional primary action, optional secondary link.

Three kinds:
- **No data** — first use. Say what will appear here and how to add it.
- **User action** — no search results, or process complete. Suggest adjusting search or filters.
- **Error management** — permissions, systems, configuration, unsupported action. Higher specificity: why there's no data *and* what to do. Plain language, no codes, no jokes.

Rules that catch people:
- The empty state **replaces** the element it stands in for. A table's headers and footer go with it — otherwise a screen reader reads the whole empty table first.
- Never lead into a dead end.
- Don't cover multiple options — pick the most important.
- Don't use product-specific terms a new user won't know, or talk about other areas of the app.
- Left-align the block. The exception is a small tile, where the image centers above left-aligned text so it doesn't read as content.
- Multiple empty states on one screen: use tertiary buttons so there aren't several primaries, and consider text-only.
- Decorative illustrations get an empty `alt` so screen readers skip them.

Deeper alternatives for first use: in-line documentation, onboarding flows (always alongside a basic empty state, since onboarding is optional), and starter content.

## Forms

Ask only for what's necessary. Group related tasks under section titles, follow a predictable order, and let people stay on one input method.

Labels: sentence case, concise, no colons, and above default fields. One to three words is an editorial target; accuracy and localization govern. Every input needs an appropriate accessible label. Fluid labels have their own documented arrangement.

**Mark the minority.** Mostly-required form → mark only `(optional)`. Mostly-optional form → mark only `(required)`. Decide consistently for the product/form type and state the convention at the start; expose requiredness programmatically.

Choosing a control:

| Need | Control |
|---|---|
| A few words | Text input |
| Hidden value | Password input |
| Multiple lines | Text area |
| One or more from a few | Checkbox |
| Exactly one from a few | Radio button |
| Binary setting | Toggle (always label the affected attribute) |
| One from many | Combo box |
| Several from many | Multiselect |
| Incremental number | Number input |
| Number in a range | Slider |
| Date / time | Date picker / time picker |

The Forms pattern suggests select lists above five options; treat this as a selection heuristic and reconcile it with the specific component/task guidance, not a rule to hide every six-item checkbox set.

Help: default **helper text** is persistent for need-to-know; it can be replaced by error/warning text, so preserve critical instructions through validation. **Placeholder** disappears, so never put anything essential there. Fluid inputs use disclosed help as a documented exception; verify keyboard/touch and accessible descriptions. Information icons use a suitable toggletip for activated or interactive help. See [form implementation](forms-and-upload.md).

Buttons at the bottom, never pinned to the top. In-page forms: primary left, left-aligned. Wizards, dialogs and side panels: primary right. In containers, the button group spans the width and bleeds to the bottom edge. Name the action, not "Submit".

Validation: useful client checks on blur/submission; enforce rules server-side and return recoverable errors as an inline notification plus appropriate field messages. The source’s reload example is not a requirement to abandon the application’s navigation/state contract. Short forms may disable the primary button until valid; long forms should not, because the error and the button won't be on screen together. Disable on submit to prevent duplicates.

Longer forms: progressive disclosure, accordion sections (not in dialogs), or multistep with a progress indicator.

Single column by default. Two or three inputs on a line only when they logically belong together (city / state / zip).

## Filtering

Selection methods: single (behaves like radio), multiselect (behaves like checkbox), multiple categories, batch updates ("Apply"), instant updates.

Batch when selections span categories or the data is slow to return. Instant when there's one category or one expected selection.

- **Multiple categories must never be inside a menu or dropdown.** Left rail, vertical; or a horizontal strip above the data.
- Start each category all-selected if users typically exclude a few; all-unselected if they typically want one.
- A collapsed filter container needs a visible count of applied filters and a way to clear without reopening.
- Every category needs a clear-all. Multiple categories need a global clear-all.

## Search

| Type | When |
|---|---|
| Basic | Routes to a distinct results page. Large, slow, or expensive data; unfamiliar data structures. |
| Active | Runs on each character, results in place, no results page. Small data sets, on-page catalogs, tables. |
| Focused | Active results within the current scope plus an option to widen to everything. |

- A search field needs an accessible name. Its visible label may be omitted where permitted; a placeholder or magnifier does not replace the name. See [accessibility](accessibility.md).
- **Always display the number of results, including zero** — and per scope if a scope filter exists.
- No results is an empty state with a suggested next action, not silence.
- Include meaningful loading feedback for a slow search; use a progress bar only when progress can be measured truthfully. Heavy work alone does not establish a percentage or ETA.
- Optional scope filter selects one category at a time and always offers "All"/"Any", selected by default.
- RTL languages flip the field layout; the magnifier icon is universal.

Keyboard follows the selected search composition: Tab enters the field; Enter submits basic search or selects the active suggestion when appropriate. Active filtering must not acquire an unrelated form-submit behavior. Suggestion navigation needs its supported combobox/listbox contract. After changing a facet, preserve the user’s focus during refresh.

## Disclosures

A trigger plus a container that opens on click. Unlike a tooltip, the content may be interactive.

Use for settings, filter and sort menus, profile menus, combo buttons — anything revealing more about part of the UI.

- One open at a time.
- **Never nested** (side-flyout submenus in a context menu are fine).
- Never wider than six columns.
- Never auto-opened.
- Never hide critical information inside one.
- Close icon, if present, sits top right in empty space, never inline with interactive elements.

Trigger sizes 48/40/32px; trigger icons 20 or 16px. Keep ~16px between interactive elements inside.

Keyboard depends on the chosen composition: Enter/Space toggles a disclosure, command menus use their menu navigation contract, and settings forms retain Tab navigation. Generic Disclosure prose moves focus to the first control, while Popover/Toggletip component guidance can retain trigger focus. Use the documented component composition and verify its entry/dismissal behavior; see the clarification below.

### Disclosure variants

[Source: Carbon Disclosures](https://carbondesignsystem.com/patterns/disclosures-pattern/).

- **Profile menu:** Combine an identity trigger with account/session information and navigation. Group related items with optional dividers; include settings and sign-out where relevant. Use supplemental icons and links sparingly. Opening focuses the first item; Up/Down traverses items, Enter selects, Escape closes.
- **Settings/filter menu:** Use an icon trigger, popover, controls, and optional Reset/Apply actions. Focus the first control; Tab/Shift+Tab moves among controls. For batch changes, Apply updates results and closes the menu. Retain roughly 16px separation between interactive elements. Keep multi-category filtering in the layouts described under Filtering.
- **Combo button:** Separate the frequent default action from the adjacent menu trigger. The main button executes immediately; the trigger exposes related alternatives. Prefer text-only action labels. Enter/Space activates either button; Down also opens the menu. Opening focuses the first alternative; Up/Down navigates, Enter/Space selects, Escape cancels.

Clicking the trigger again or outside dismisses the popover. Do not substitute menu-item arrow navigation for tab navigation through form controls.

## Disabled and read-only states

Use [accessibility](accessibility.md#control-states) for the canonical distinction between native disabled, ARIA disabled, read-only, static, and hidden content.

For a temporary prerequisite, disabled may be appropriate with an explanation outside the control. For values restricted by plan or permissions, preserve readable content using supported read-only controls or static labeled values and explain the upgrade/request-access route. Do not hide values the task says users can see.

Use supported component state styling instead of multiplying arbitrary opacity values. Read-only does not imply every element should enter the tab order. Test the final markup and keyboard behavior.

## Loading

**Skeleton states** for initial page load — only on container components (tiles, structured lists) and data components (tables, cards). Action components generally don't need them. **Never** skeleton a toast, overflow menu, dropdown item, modal, or loader; elements *inside* a modal may have skeletons, the modal itself may not.

**Loading indicators** signal processing without measurable progress. If completion is measurable, use a progress bar with truthful values; a ProgressIndicator represents workflow steps and is not a substitute for a timed progress bar. Use full-screen loading only when the whole application is blocked; use inline loading for a localized operation. The loading-pattern source uses “progress indicator” loosely; choose the installed component by its actual semantics.

**Progressive loading** for slow or multi-source views: structure and text first, then images, off-viewport content and interactive components. Not everything needs a skeleton — a 600×600 image can simply be 600×600 of white space.

**Load more** can extend a list in progressive batches. Choose batching, pagination or infinite scrolling from the task and navigation/recovery contract; the pattern does not mandate replacing every infinite-scroll experience.

Screen readers must be told when the application is loading, busy, stuck, or has failed.

## Login

- **Don't reveal whether an account exists.** No error for an unknown user until after the password step, and one shared message for both wrong-user and wrong-password: "Incorrect IBMid or password. Try again."
- Progressive authentication is the IBM default: ask for the user ID, Continue, then route to SSO or password.
- Validate client-side format/required fields on blur or submission without revealing account existence. Carbon describes a reloaded server-error flow with password clearing and an inline notification; adapt recovery to the approved application navigation/authentication contract rather than forcing a full-document reload. Keep account-enumeration protection and useful inline feedback.
- Keep related actions (create account, SSO) **inside the login region** — users don't look outside it.
- Don't place alternate login buttons between the username field and the primary button, or above the form. Keep the primary button closest to the input.
- With multiple alternate logins, use default (not fluid) inputs and buttons.
- Use landmark regions so screen readers can jump straight to the fields, especially in split-screen layouts.
- Carbon explicitly has no consolidated MFA guidance on the reviewed login page. Verify the actual authentication provider, accessible factor/recovery flows and product policy; do not present a made-up Carbon MFA contract.

## Overflow content

Truncation types: **front-line** (`...56789`, content continues from elsewhere), **mid-line** (`1234...5678...4321`, when strings share middles; requires JavaScript, no class), **end-line** (`12345...`, most common).

Good candidates: breadcrumbs, pagination, long URLs, description paragraphs, long generated names.

**Never truncate**: page headers, titles, labels, error messages, validation messages, notifications.

An ellipsis should stand for three or more characters. Add `title` for the browser tooltip. An ellipsis used alone as a control needs an overflow menu on hover, not a tooltip. Classes: `.cds--text-truncate--front`, `.cds--text-truncate--end`.

Prefer a **Show more** button over scrolling, gradients or fades when there's a lot of overflow; "Load more" where performance matters.

## Fluid styles

Read [fluid styles](fluid-styles.md) when selecting or reviewing this treatment.
It covers selection, responsive width, hybrid forms, component-specific exceptions,
implementation checks and source limits.

## Text toolbar

Groups: actions (undo/redo, cut/copy/paste), formatting, paragraph, attachment, search, and the text area. Controls move progressively into an overflow menu as space shrinks.

Keyboard: Tab and Shift+Tab enter and leave the toolbar; **arrow keys move within it** (first entry lands on the first non-disabled control, later entries may return to the last focused one); up/down navigate menus; Enter opens and closes. Use the `toolbar` ARIA role. Buttons that act on click get tooltips on hover *and* focus.

### Editing workflows and responsive layout

[Source: Carbon Text toolbar](https://carbondesignsystem.com/patterns/text-toolbar-pattern/).

- **Attachments:** Show the chosen file at the lower left of the text area, with a remove control.
- **Links:** Open a URL field from the link action; confirm to embed. Close or click outside to leave the field. Selecting existing linked text allows editing or removal.
- **Search:** Highlight matches and show their count. Clear removes the query/results; dismissing search exits its field. The reviewed pattern explicitly says its keyword-search concept is not available for production use; implement and test an application editor integration rather than assuming a Carbon export.
- **Saving:** Choose explicit save/send, Save draft, or autosave to suit the workflow; record which contract the editor uses.

| Breakpoint | Toolbar arrangement |
|---|---|
| max / xlg | Single row; search may expand. |
| lg | Collapse search to a button or move controls into overflow. |
| md | Two rows. |
| sm | Compact two-row layout with additional overflow. |

Use icon-button interaction states and dropdown behavior for typeface/size. On re-entry, restoring the last focused control is optional; otherwise use the first enabled control. Verify attachment removal, link editing, search clearing, and saving in the chosen layout.


## Availability, empty content and asynchronous recovery

Source prose reviewed in full: [Disabled states](https://carbondesignsystem.com/patterns/disabled-states/), [Read-only](https://carbondesignsystem.com/patterns/read-only-states-pattern/), [Empty states](https://carbondesignsystem.com/patterns/empty-states-pattern/) and [Loading](https://carbondesignsystem.com/patterns/loading-pattern/). Images, animations and actual AT combinations were not inspected here.

### Choose availability from the reason

| Reason | Treatment and recovery |
|---|---|
| Temporary unmet prerequisite | Keep the relevant action discoverable, disable through its supported contract, and explain what enables it outside the unavailable control. |
| Application processing or shared edit lock | Preserve the value in readable form and explain the temporary restriction; do not silently convert an already-disabled control to read-only. |
| Permission allows viewing but not editing | Preserve readable values using supported read-only controls or labeled static content. Include request-access information only when the product actually offers that route. |
| Permission forbids viewing | Omit unauthorized UI/data and enforce permission at the server; hiding a button is not authorization. |
| Static information never editable | Use ordinary semantic content, rather than manufacturing a read-only input. |

The older disabled/read-only prose says disabled controls are not read by screen readers. That is too broad; preserve the distinction in [Accessibility](accessibility.md#control-states). Native disabled affects focus, validation and form submission. [ARIA disabled](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled) communicates state without enforcing event suppression or removing focusability. Guard pointer and keyboard activation and the underlying action; pointer-events alone cannot enforce unavailability. Do not multiply the historical 50%/25% opacity table onto current component tokens.

[Native readonly](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/readonly) supports textual inputs and textarea, not select, checkbox, radio, range or button. Use the installed component's supported readOnly behavior or static representation rather than forwarding an ineffective attribute. Native disabled values are excluded from submission; ensure the application preserves data it must retain and independently validates server-side. Read-only values may be selected/copied when the component permits this; distinguish reviewing/navigation from changing a value. Do not add tab stops to every static value.

Default read-only field backgrounds blend with their layer; the reviewed pattern says fluid fields retain their enabled background. Keep informative text readable and selected values apparent. Disabled-looking chevrons/calendar/clear affordances must stop editing while retaining contextual icons where useful. Replace an instructive empty selection prompt with truthful informational content. Verify the actual supported component and fluid variant rather than creating one universal CSS rule.

### Empty-state decision and content

Separate first-use/no-data, search/filter zero results, successfully completed work, and unavailable data due to permission, service or configuration. A failed fetch is not proof the collection is empty. Keep the cause and action truthful, local to the affected region, and useful for the actual role. Prefer a brief title, reason/next-step body and one clear action; a secondary documentation link is optional. Some healthy empty states need no action, such as no alerts requiring attention.

Replace the empty data presentation with the message in that same region. The source says to remove an empty table's headers/footer, but preserve necessary search/filter controls and a route to adjust them; follow an owner-approved table contract when it intentionally retains its structure. Keep the region's accessible name and valid HTML. Avoid leaving a full old table visible beneath “no results.” Distinguish total from matching counts and preserve the user's query during retry. Do not reset meaningful user input merely to populate the view.

Use text alone when small space or repeated widget emptiness makes illustrations noisy. Multiple empty widgets should not create competing primary actions; the pattern recommends tertiary calls to action. The source's physical left alignment is an LTR design example: review logical alignment for localized RTL content. Large-region blocks may have a wider margin or be centered as a group; small-tile image centering does not mean center-aligning all text. Verify the actual layout and artwork before claiming visual fidelity.

Decorative images use empty alt text; informative images need an equivalent description. Keep key information out of decorative artwork. Optional inline documentation, onboarding and starter content should serve one feature and have a basic empty-state fallback. Maintenance/localization costs and evidence of user need should drive richer onboarding. The source mentions preconfigured credentials; do not place secrets in shipped samples or seed private/production data to make an empty state appear populated.

### Loading and completion are a state machine

Distinguish initial load, background refresh, action pending, success, failure and exhausted results. Skeletons suggest expected container/data geometry on initial load; preserve space without pretending to know real content. Keep them short-lived when possible, but a timeout is a failure/recovery condition rather than permission to fabricate completion. Do not skeletonize the modal shell, menus, toast, loader or arbitrary actions. Support reduced motion and avoid multiple competing loading announcements.

Keep usable content and unrelated controls available during localized refresh. Reserve an overlay for a genuinely blocking operation and define cancellation, focus and failure recovery. Prevent repeated submissions with actual state/handler guards; preserve draft input and focus across failure. Appending “Load more” results should retain existing content and provide an accessible update, end-of-list state and retry route. Concurrent query changes must not allow a stale response to replace newer results.

Announce meaningful busy/completion/failure changes once through the appropriate status/live-region or progress semantics, not every skeleton pulse. A CSS animation or Loading component does not implement fetch cancellation, races, retry or safe mutation. Determine which announcements the actual component already provides before adding a second live region. Never invent progress percentages from elapsed time. Test slow response, zero results, failed refresh, repeated activation, keyboard focus continuity, reduced motion and the final count/content. Source review alone does not prove these transitions.


## Dialog implementation and recovery clarification

The full [Dialog pattern](https://carbondesignsystem.com/patterns/dialog-pattern/) source was reviewed on 29 September 2026. Its behavior section applies modal trapping to “dialogs” broadly, while its accessibility section correctly restricts trapping to modal dialogs. Retain a keyboard route between a non-modal tool and its host page; do not advertise an accessible background then trap users indefinitely. The pattern does not establish a supported draggable/non-modal Carbon export.

The current [W3C APG](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/) qualifies first-control focus: long structured content may need initial focus on a static heading with tabindex=-1; difficult-to-reverse confirmation may favor the least destructive action. Avoid a single aria-describedby string for complex structured content. Label the dialog and keep its controls inside it. aria-modal=true requires actual modality for every user, not merely an overlay or an ARIA attribute. Restore focus to the invoker when appropriate, or a logical surviving target after its removal. Use natural tab order rather than positive tabindex to imitate the source's fixed action sequence.

Carbon's no-nested-modal rule is a product design constraint; APG's nested examples do not override it. Passive/transactional/acknowledgment/progress are pattern variants, not proof of distinct installed React exports. Check the current Modal props and controlled open state. onRequestClose/onRequestSubmit request changes; the application owns commit, cancellation and closing. Do not close on request before asynchronous validation/server success or treat a button press as a completed mutation.

The source's “Cancel undoes all applied changes” is a required task decision, not an automatic rollback supplied by a modal. Keep edits locally until confirmation or implement an explicit supported undo/transaction contract. Close/X/Escape must follow that contract; none should silently submit. State dismissal rules during pending work and prevent duplicate activation without losing the user's draft. Surface recoverable errors inside the open dialog and preserve relevant focus. Do not announce inaccessible progress “elsewhere” behind an active modal; put meaningful status where it can be perceived, and use actual progress data.

The source's fixed footer percentages and physical left/right order describe Carbon's LTR layout. Use supported component footer markup and verify long localized labels, RTL, narrow widths, body scroll and visible header/footer. Preserve logical reading/tab order. Input validation may occur on blur when useful; avoid immediately flagging untouched fields or concealing server errors. A complex table, repeated primary task or need to consult outside content is a reason to consider a page or non-modal workflow rather than grow the dialog into a second application.

No dialog browser/AT, scroll, dragging or backend rollback behavior was tested by this source review. Require opening/closing from keyboard, focus containment/restoration, invalid submission, pending failure/retry and the applicable modal/non-modal background-access contract in a practical evaluation.


## Common-action implementation checks

The full [Common actions](https://carbondesignsystem.com/patterns/common-actions/) source was reviewed on 29 September 2026. Add associates an existing object; Remove disassociates it; Delete destroys it. Match labels to the actual data operation, including bulk consequences, permissions, permanence, duration and failure recovery. A danger color or confirmation prompt is not authorization or a transaction. Keep low/moderate/high deletion safeguards proportional to the actual cost, reversibility and cascade; typed resource-name confirmation must use the current authoritative resource identity.

Clear may empty input/selections or restore their documented default; Reset restores the last saved/Apply snapshot. Define that snapshot explicitly for live filtering versus staged changes. Refresh updates a stale view, preserving relevant query, selection and unsaved-input rules. Next advances a sequence and should name the final action at completion. Test each operation against its expected post-state rather than checking that a button exists.

Carbon's Close/clear icon suggestions describe presentation. Use a named keyboard-operable action control, with a context-specific name when multiple identical icons occur; do not bind click only to an SVG. Keep button and navigation semantics distinct, including link-looking Cancel/Reset. [W3C's Button pattern](https://www.w3.org/WAI/ARIA/apg/patterns/button/) describes Enter/Space activation, accessible names and focus appropriate to the resulting context. Close does not submit; Cancel does not prove an already-started server task was aborted. Define cancellation and repeated-activation behavior explicitly.

Object duplication and clipboard copying need different action/result contracts. Clipboard denied/unavailable or a failed clone must not show a “copied” success state. Preserve exact text—including whitespace and direction—and verify the resulting payload; UI feedback alone is not proof. Keep useful recovery at the source. The earlier practical clipboard probe's payload remains unresolved, so these checks are requirements rather than a passed candidate capability.

## Disclosure composition clarification

The full [Disclosures pattern](https://carbondesignsystem.com/patterns/disclosures-pattern/) source and its profile, settings/filter and combo-button subsections were reviewed. Its W3C reference URL is malformed; use the current [APG Disclosure pattern](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/), which describes a button toggling content with aria-expanded and an optional aria-controls relationship. It does not require moving focus to the first control for every show/hide disclosure. A menu button, ordinary settings form, Toggletip and expandable content are different compositions; assign roles and keys accordingly.

For profile/command menus, follow the installed menu's item-navigation contract. For settings/filter forms, Tab/Shift+Tab visits the controls rather than hijacking arrow keys from native fields. For combo buttons, the primary button executes the default action and the adjacent trigger opens alternatives; do not make the whole split control perform both actions. [Menus and triggers](menus-and-triggers.md) records the inspected Carbon API and focus differences. VoiceOver/JAWS/NVDA prose in the source is guidance, not evidence of a tested browser/AT combination.

Only one disclosure open at a time requires coordination between instances; Popover alone does not create that registry. Nested context submenus are the stated design exception, not permission for arbitrary stacked panels. Keep content concise, essential information visible and popup size proportional to the actual grid/viewport; six columns is a source design ceiling, not a portable fixed-pixel width. Collision handling, clipping, theme/layer scope and popup mount must be verified with the selected component.

Specify whether setting changes apply immediately or are staged. A staged Apply updates the result and closes on the defined successful transition; Reset restores the appropriate applied snapshot. Specify what outside click, Escape, trigger-toggle and tabbing out do to uncommitted choices. Do not dismiss on every Tab when internal controls remain, or auto-save merely because the panel closed. On Escape/close preserve a logical focus target; on outside pointer dismissal avoid overriding the user's intended destination. Test both traversal directions, portal/nested controls, retry, long/localized content and actual responsive geometry. No fresh disclosure runtime or AT pass is claimed here.


## Filtering and search implementation clarification

The full [Filtering](https://carbondesignsystem.com/patterns/filtering/) and [Search](https://carbondesignsystem.com/patterns/search-pattern/) source prose was reviewed on 29 September 2026. Filtering adds/removes items from the displayed result set; it is read-only data presentation unless the product explicitly defines a separate mutation. A filter control must not delete or alter the underlying records. The source's relative Checkbox link and Search's Select link are malformed/misdirected; use the actual component documentation and installed APIs.

Define predicate semantics rather than inferring them from the appearance of checkboxes: how multiple choices combine within a category, how categories combine, what “none selected” means and how a default/all selection is represented. Initial all-selected/all-unselected choices are usability recommendations, not database query semantics. Preserve product-approved defaults and restore them with clear-all; separately define Reset to the last applied snapshot. Ensure applied-count, visible selections, URL/query state and returned results agree. Distinguish individual criteria counts from category counts with clear wording.

Batch filtering separates edited choices from the applied predicate and refreshes on Apply; instant filtering updates on each committed choice. Batch suits costly queries or multiple deliberate decisions; instant suits responsive simpler filtering. Keep a visible active-filter indicator and a clear route when controls are collapsed. Offer category and global clearing as appropriate, and ensure clear-all can actually recover from zero matches. Do not silently clear an independent keyword search when clearing structured filters unless that is the defined action. On failed refresh retain the user's choices and identify whether visible results are stale.

The universal pattern places multiple categories in a visible vertical region or horizontal strip, not inside a dropdown/menu. The Disclosures pattern also describes settings/filter forms. Select the narrow composition appropriate to a simple category versus a faceted set; any owner-approved responsive alternative needs its own explicit design and accessibility verification rather than pretending both sources prescribe the same layout.

Basic search runs a committed query and presents a distinct result context; active search refines in place; focused search stays scoped and offers an explicit widening path. The Carbon Search input alone does not implement suggestions, history, a results panel, remote querying or focused navigation. Do not give a plain input fabricated listbox roles unless its actual interactive suggestions implement that contract. Name the field and clear control; a hidden visual label may be appropriate but placeholder text is not its accessible name. Keep keyboard behavior matched to native select, checkbox/radio facets or the selected combobox—do not copy the source's universal Enter/arrow facet sequence onto every control.

For live remote results, prevent stale responses from overwriting newer query/scope selections. Define debouncing/cancellation, loading, failed request and retry, and preserve composition input for IME text. A source claim that suggestions place minimal server load is not capacity evidence. Do not fabricate measurable progress or an ETA. Keep loading separate from “no results”; announce final matching count including zero without stealing field/facet focus. Expose total/per-scope counts where useful and supported, and do not imply an unknown unqueried scope has zero results.

An optional scope selector defaults to All/Any only within the data the user is authorized to search. Widening scope never widens authorization. The source recommends recent/trending suggestions; adding search-history storage, telemetry or cross-user trends requires an approved product/privacy contract and is not a necessary side effect of adopting the input component. Persist focused facets for the documented workflow/session, using the actual product contract rather than adding storage automatically.

Use logical RTL placement for the field and its controls; do not mirror arbitrary result content, numbers or code. Verify query editing, clearing, scope changes, keyboard suggestion selection/dismissal, facet focus continuity, no matches, slow/failing response, out-of-order response, repeat searches and narrow/localized presentation. Images, actual suggestion data, server capacity, runtime results and AT were not tested by this prose review.


## Forms pattern source clarification

The complete [Forms pattern](https://carbondesignsystem.com/patterns/forms-pattern/) prose was read at website commit d8783ad2ae3b5e59c58f58311491f8a2c4e62631, including selection/bound inputs, help, defaults, buttons, validation, longer forms, layout, variants and accessibility. The first tool output elided a few characters in the button-alignment table; that exact source section was reread before recording complete prose review. Images/GIFs, external research and actual form browser/AT behavior remain unverified.

### Data, constraints and help

Ask for the minimum information needed for the task; this design principle alone does not establish legal compliance. Respect password managers/autofill and choose safe explicit defaults. Preselecting country from location or using today's date must follow the actual product contract, privacy expectations and timezone semantics, not be added automatically. A password field hides characters visually; it does not make collected personal/payment information safe to store or transmit. Do not copy the source's sensitive-data examples into live samples.

The source says bound controls accept only valid values so need no field validation. This is false as a general implementation guarantee: empty, typed, pasted, programmatic, out-of-range and cross-field values still need applicable checks. Preserve domain rules, server authorization and concurrency validation. Number, slider, date/time constraints may not match the application's units/timezone/range. See [Form controls](forms-and-upload.md) and [Date/time](date-and-time.md) for version-scoped API gaps rather than relying on input appearance.

Single-line overflow may scroll within the native editor; never shorten the actual stored value to mimic visual truncation. The source's first-required-field autofocus is contextual guidance, not permission to steal focus on every page render or expand a mobile keyboard unexpectedly. Keep the user's current editing context and use deliberate focus for dialogs and error recovery.

Keep a real label, associated instructions and programmatic requiredness. [W3C form instructions](https://www.w3.org/WAI/tutorials/forms/instructions/) distinguish labels, format guidance and accessible descriptions; placeholder is not a label. Carbon's accessibility prose calling helper text “label” does not make every helper node a second label. Preserve critical instructions when validation replaces ordinary helper text. The source's password-infotip suggestion conflicts with its own no-essential-tooltip rule; prefer accessible persistent instructions or the selected fluid component's documented assistance contract. Test actual keyboard/touch access and description relationships.

### Submission and form structure

Use a semantic form for the submitted task; do not nest forms. Group related controls with meaningful headings/legends and natural DOM order. Component type tokens affect appearance, not heading rank. The legacy productive-heading token and nominal40px field height are not the sole current choices; follow installed modern tokens and32/40/48px/default versus fluid variants. The dialog-fewer-than-five/side-panel-more-than-five suggestions leave exactly five unspecified and are not an exhaustive selection algorithm. Choose from task complexity, frequency, required context and approved layout.

Progressively disclosed fields need explicit value/validation/submission policy when hidden. An accordion does not implement a form's validity summary; expose failing hidden sections through accessible recovery. Carbon explicitly has no consolidated inline-editing or form-rule guidance here, and accordion-form guidance is exploratory. Do not invent a universal autosave, separator or section-submit contract. Multistep progress components display step state but the application owns persistence, navigation validation, resume and final submission.

Submission must prevent duplicate mutations through handler/pending logic, preserve useful draft data on failure, and restore a usable retry route. Disabled-button appearance alone is insufficient. Short-form disabling is a source recommendation, not a substitute for explaining why submission is unavailable; long forms must expose validation rather than trap users behind a distant disabled action. Keep server errors in the existing form context when the app supports it; do not force a full-page reload just because the pattern illustrates one. Client constraints never replace server enforcement.

The pattern discourages top-pinned form actions and recommends bottom action groups; choose supported footer/default/hybrid treatment and test long localized labels, focus visibility, narrow widths and invalid-state growth. Physical left/right action placements are LTR examples requiring RTL review. Native Back, Cancel and Previous are distinct workflow operations; preserve approved navigation and unsaved-work policy. Test autocomplete/IME, required/default data, hidden fields, blur/submission validation, double activation, slow rejection/retry, keyboard recovery and multistep retention before claiming practical competence.

## Notification pattern source clarification

All [Notification pattern](https://carbondesignsystem.com/patterns/notification-pattern/) source prose was reviewed, including task/system generation, status, seven types, priority, actions, copy and accessibility. The source swaps timing criterion numbers: [No Timing is2.2.3, AAA](https://www.w3.org/WAI/WCAG22/Understanding/no-timing.html); [Interruptions is2.2.4, AAA](https://www.w3.org/WAI/WCAG22/Understanding/interruptions.html). Apply the actual criterion, conformance level and exceptions; the swapped links do not establish a test pass. Critical/actionable messages need enough time and access to act, with appropriate control over noncritical disruption.

Banner and Notification panel are pattern guidance, not installed core exports confirmed by the page. A narrow actual @carbon/react1.117.0 export check found Banner/NotificationPanel undefined and InlineNotification/ToastNotification/ActionableNotification/Callout/Form present. That does not cover other packages or rule out application implementations. Do not invent imports or add dependencies to obtain a suggested notification center. Its history, preference controls, grouping, acknowledgement and persistence need an explicit application contract.

Keep notification status separate from disruptive vehicle. A red/error visual does not automatically block a transaction, and an actionable notification is not permission to steal focus for every background update. Use [the inspected notification contract](action-feedback-and-links.md#notification) for role/focus/timeout behavior. Only move focus when the chosen interaction needs it; keep noncritical status available without interrupting current input. Do not nest a newly triggered modal inside an active modal merely because a system message arrived. Resolve the source's “modal only critical” and “dialog user initiated” guidance through the approved task/emergency policy rather than imposing either indiscriminately.

Actionable messages persist until the defined action/dismissal and offer one clear action. Removing a close button does not implement server-side blocking or guarantee reading. Callouts provide initial guidance, not async success/error; banners occupy the relevant content region without covering chrome and the source recommends one nonsticky banner. Toast stacking/newest-first is a presentation recommendation; implement ordering, deduplication, later retrieval and focus/announcement management rather than merely appending nodes indefinitely. Do not send duplicate prompts to a user who has not acknowledged the first.

Two-/three-line copy limits and two-word action labels are editorial aims, not permission to clip essential recovery or break translated labels. Success must reflect actual completion; failure should preserve a useful retry path and context. Verify exact action execution, pending/failure state, dismissal/timing, accessible later reading, announcement frequency, focus preservation, portal/container placement, long text, themes and mobile/RTL. No fresh notification runtime/AT or final model pass was performed here.
