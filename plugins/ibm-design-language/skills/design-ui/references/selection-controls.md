# Selection controls and structured lists

## Toggle

Use an on/off switch for a reversible binary preference that applies immediately. Use a checkbox plus a submit action for staged changes; use other choices for more than two states. Do not put irreversible deletion behind a switch. Usage's prohibition on actions needing immediate feedback concerns confirmation/destructive actions; successful preference changes still need honest persistence and failure feedback.

- Keep the option's accessible label stable in both states. Default Toggle shows a label and separate state text; small Toggle can omit visible text only when surrounding context and a programmatic name clearly identify the setting. A checkmark distinguishes visual on-state without color, but cannot replace the accessible name. State labels are adjectives such as Enabled/Disabled; use concise translated copy without clipping it to an English three-word cap.
- Inspected Toggle is a native button with role=switch and aria-checked. Enter/Space uses native button activation. The Usage state table mentions arrow keys, but no arrow handler exists in the inspected source; do not add arrow selection as a supposed Carbon requirement. Visible state text is aria-hidden, so verify the actual name/state separately. Use a named group/fieldset when related switches need group context.
- Selected `@carbon/react@1.117.0` supports defaultToggled for uncontrolled initial state, toggled for controlled state and onToggle(nextBoolean), not a native input change-event payload. Remain controlled or uncontrolled for the component lifetime. onClick receives the event separately; do not persist twice by handling both callbacks as changes. The button does not submit a checkbox value automatically: serialize application state.
- readOnly suppresses setChecked/onToggle but still invokes a supplied onClick. It does not automatically add aria-readonly in this implementation. Keep read-only callbacks free of mutations and verify conveyed semantics, focus and label activation. disabled is native button disabled, not a permission boundary. hidelabel behavior changes side text to labelText; inspect the name when combining hideLabel, external labels and aria-labelledby.
- Application persistence remains application-owned. Define pending behavior and committed versus optimistic state, prevent duplicate/racing writes, retain a meaningful option label, report rejection, and restore the committed state or provide retry. Show the actual effective setting rather than leaving a failed optimistic state presented as saved. Preserve focus when resolving errors.
- Default visual track is 48 by 24px and small is 32 by 16px, not the entire hit target. Label uses label-01 and state text body-compact-01. Documented on/off colors use support-success/toggle-off with icon-on-color handles and semantic focus/read-only/disabled roles. Contextual brand authority still controls approved aliases; avoid hard-coded green. The Style table pairs an 18px handle with 1.25rem (20px at a 16px root), so inspect installed CSS rather than propagating the arithmetic mismatch.
- enable-v12-toggle-reduced-label-spacing is documented as 8px instead of 16px label spacing, a visual change rather than a new state contract. Its implementation belongs to styling; the selected Toggle JS does not itself inspect that flag. Verify the version and flag before enabling it; no automatic v12 migration follows from the docs.

Verify stable accessible names and checked state, native Enter/Space and label clicks, no duplicate callback/writes, controlled rerenders, read-only/disabled mutation protection, pending/rejection/retry and race handling, small target geometry, translated labels, narrow/RTL/zoom and rendered contrast. No Toggle runtime/AT pass was performed.

Sources: [Usage](https://carbondesignsystem.com/components/toggle/usage/), [Style](https://carbondesignsystem.com/components/toggle/style/), [Code](https://carbondesignsystem.com/components/toggle/code/), [Accessibility](https://carbondesignsystem.com/components/toggle/accessibility/). Four-tab public source text reviewed 2026-09-29 at website commit `d8783ad2ae3b5e59c58f58311491f8a2c4e62631`; images/demos uninspected. [APG Switch](https://www.w3.org/WAI/ARIA/apg/patterns/switch/) directly read: stable label, binary state, Space required and Enter optional, naming/grouping semantics.

## Tag variants

Read-only tags label categories without interaction; dismissible tags remove a filter/user label via their close control; selectable tags toggle a choice; operational tags disclose related/overflow tags. Do not combine selection and dismissal into the same ambiguous hit area, or use tags for unrelated-page navigation. Color/category and selection state are different meanings and need text/state cues.

- Read-only has no ordinary tab stop; dismissible focuses its close button, selectable and operational focus the whole button. Native Enter/Space activate. Name dismissal with the tag context, update the actual filter/label state and plan focus after removal; hiding a chip without clearing its active filter is not completion. Operational disclosure needs expanded state, popup behavior and focus return in the application composition.
- Selectable may support single or multiple choices, but a group must implement its own exclusivity/validation and clear policy. Do not assume a set of toggle buttons automatically behaves as native radios. Expose controlled selection and a group question where needed.
- Keep tag text single-line and concise while preserving full accessible meaning. Truncate start/middle/end only when the distinguishing part remains usable. Native title hover is insufficient for keyboard/touch, especially a read-only tag with no focusable entry. AI explanation is an additional interactive exception to the otherwise read-only container; public guidance allows it only on read-only/dismissible variants.
- Documented heights are 18/24/32px, label-01 text and 8px group spacing. Tag glyph/visual height does not establish a compliant interaction target. Groups may wrap, even when six or fewer cannot fit; beyond roughly five lines consider another selection component. Avoid wrapping text inside one tag. Align containers with adjacent content rather than hanging them into grid gutters.
- Read-only/dismissible/operational color families use component tokens; selectable uses core selected/inverse/layer/focus roles. Light category text/background steps70/20 and dark20/70 are source palette guidance, not permission to bypass product semantic tokens or rendered contrast. Do not use color as the only category cue or introduce arbitrary selection colors.

Selected installed `@carbon/react@1.117.0` source inspected: use DismissibleTag, SelectableTag and OperationalTag exports rather than deprecated Tag filter/onClose shortcuts. SelectableTag uses controlled `selected`, `defaultSelected`, onChange and aria-pressed, and separately calls onClick. DismissibleTag removes a passed container onClick, calls onClose(event), and leaves actual state/removal to the application. Its close name switches between `title` and `dismissTooltipLabel` when text is ellipsized; give both meaningful translated context. OperationalTag supplies button appearance/semantics and forwards handlers; it does not create the related-tag popup by itself. Do not nest buttons inside it. Changing `as` does not automatically supply all semantics/keyboard behavior.

TagBase can become a button when onClick is passed, so adding a handler is a semantic change, not harmless analytics on a read-only div. Ellipsis checks are mount-time in the inspected tag variants; verify dynamic names, resizing and full-text help instead of claiming a live responsive tooltip pass. Read-only AI explanation/decorator must remain separate from dismissal. Verify labels, selected state/callbacks, single/multiple policy, actual filter removal, popup behavior, disabled controls, focus after removal, long/translated text and responsive/theme/RTL contrast. No Tag runtime/AT pass was performed.

Sources: [Usage](https://carbondesignsystem.com/components/tag/usage/), [Style](https://carbondesignsystem.com/components/tag/style/), [Code](https://carbondesignsystem.com/components/tag/code/), [Accessibility](https://carbondesignsystem.com/components/tag/accessibility/). Four public source tabs reviewed 2026-09-29 at website commit `d8783ad2ae3b5e59c58f58311491f8a2c4e62631`; images/demos uninspected.

## Structured list

Present simple related records/descriptions in aligned rows/columns, optionally with one selected row. Use DataTable for multiple selection, large/complex or expandable records, and ContainedList for confined list contexts. Read-only presentation is distinct from a selectable option list; nested data or arbitrary row actions need an appropriate composition.

- Name the list for its actual purpose, describe columns clearly, and associate captions/descriptions with the table-role wrapper. Preserve rowgroup/row/columnheader/cell relationships. Row selection needs a meaningful input name and row-specific accessible label; a decorative radio/check icon or default generic wrapper label is insufficient.
- Wrap readable content and headers; the Usage suggestion to reveal truncated text on hover must also work for keyboard/touch. Recommended maximum three paragraphs per row is a scanning target, not permission to drop essential distinctions between options. Avoid interactions inside a selectable row that inadvertently change selection.
- Hang/flush alignment exists for default lists; selectable and background variants use hang. Documented default/condensed rows are 60/36px, with heading-compact-01 headers and body-01 rows, contextual divider/layer/selected/focus roles. Long rows can grow. A listed 500px minimum cannot become uncontrolled page overflow at narrow sizes; preserve relationships and accessible reading through a deliberate responsive treatment.
- Website Code describes `enable-v12-structured-list-visible-icons`, changing persistent radio-style affordances and their position. Resolve against the installed release/active flags and styles; do not claim identical visual or keyboard output across versions from the prose alone.

Selected installed `@carbon/react@1.117.0` source inspected: StructuredListWrapper renders a role=table div and stores selected-row identity, initialized through `selectedInitialRow`. Row and cell components provide their roles; the row forwards caller onKeyDown rather than implementing the website's arrow navigation itself. StructuredListInput is a native radio whose checked/value derive from the row context; supply a common group `name` explicitly because each omitted name receives a distinct generated value. It forwards an actual change event, not Dropdown's selected-item payload. Current radios do not toggle off merely by clicking again despite Usage's select/deselect wording; model a genuine clear choice when needed. Inspect pointer selection, native radio keys and controlled application state together.

The row's click path updates selection independently of the radio change callback; disabled input styling is not proof that clicking the row cannot change the selection. Verify actual disabled-row guards, pointer and keyboard callback paths, visual state versus submitted choice, selection after removal/reorder and labels before relying on a composed variant. Selected source already renders radio icons; the website's historic checkmark description is not proof of this release's appearance.

Verify read-only versus selectable semantics, named columns/caption/inputs, single-selection group isolation, tab/arrows/Space, disabled and row/input dispatch, clear/revisit/removal, long-text disclosure, responsive/RTL relationships and actual focus/theme contrast. No StructuredList runtime/AT pass was performed.

Sources: [Usage](https://carbondesignsystem.com/components/structured-list/usage/), [Style](https://carbondesignsystem.com/components/structured-list/style/), [Code](https://carbondesignsystem.com/components/structured-list/code/), [Accessibility](https://carbondesignsystem.com/components/structured-list/accessibility/). All four public source tabs reviewed 2026-09-29 at website commit `d8783ad2ae3b5e59c58f58311491f8a2c4e62631`; images/demos uninspected.

## Radio button

Use for a visible set of mutually exclusive choices. Checkboxes allow independent/multiple selection; an on/off setting may suit Toggle; complex plans or multi-column records need the appropriate selectable tile/list/table. Do not use a radio as a command. Choose a legitimate default deliberately; Carbon does not require one. If users need to clear a selected choice, provide a meaningful None/Other option rather than making the selected radio toggle off.

- Use a common unique group name, distinct input IDs/values and associated visible labels. A fieldset/legend supplies the group question; omitting a visually redundant heading does not remove the need for programmatic context. Required semantics, helper/error descriptions and domain validation remain necessary.
- Ordinary groups have one sequential tab stop, Space selects and arrows move/select with wrapping. Carbon's “first always receives focus” wording has a native-browser exception: reverse entry into an entirely unselected group can focus the last radio. Toolbar radio groups have a distinct navigation contract; do not apply ordinary arrow-to-select behavior blindly inside a roving toolbar. See the [APG radio pattern](https://www.w3.org/WAI/ARIA/apg/patterns/radio/).
- Prefer vertical groups for scanning; keep labels aligned at the top of a wrapped control. Do not ellipsize option labels. Short wording is a target, not a translation restriction. Mirror input/label order for RTL while preserving meaningful reading/focus order.
- Documented control is 20px with an 8px selected dot and 8px label/item separation; group label/helper use label-01/helper-text-01, option body-compact-01. Form separation is normally 32px, with 24/16px constrained alternatives. The 20px glyph is not the whole hit target. Use state-specific semantic roles and verify actual focus/readability contrast.
- AI label may describe the group or a particular AI-influenced choice; explanation access must not select that option. Use the supported decorator slot rather than putting arbitrary interactive content inside a native label.

Selected `@carbon/react@1.117.0` source/declarations inspected: RadioButtonGroup exposes `name`, `legendText`, `valueSelected`, `defaultSelected`, `orientation` and `onChange(selection, name, event)`. It renders fieldset/legend and native radios, owns selection state, and suppresses its selection callback while group readOnly. Standalone RadioButton forwards native `readOnly` and its own change callback; native radio inputs do not obtain text-input readonly behavior from that attribute. Verify pointer, label, Space and all arrows against actual rendered checked state/callbacks for both forms; CSS/read-only appearance alone is insufficient. Disabled fieldset and read-only differ in focus and submitted values. Group invalid text is outside the fieldset; inspect actual error associations rather than assuming the visible message is announced.

Verify no/default selection, unique group isolation, required/None choices, change payload and controlled updates, native/reverse entry, label activation, disabled/read-only behavior, error/helper relationships, AI explanation, wrapping and RTL. These receipts are source evidence, not RadioButton runtime/AT passes.

Sources: [Usage](https://carbondesignsystem.com/components/radio-button/usage/), [Style](https://carbondesignsystem.com/components/radio-button/style/), [Code](https://carbondesignsystem.com/components/radio-button/code/), [Accessibility](https://carbondesignsystem.com/components/radio-button/accessibility/). All four public source tabs reviewed 2026-09-29; images/demos uninspected.

## Native Select

Use for one predefined form value; fewer than three choices usually suit visible radios. Preserve native browser/OS option rendering and keyboard/mobile picker behavior instead of styling it into a custom menu. A custom Dropdown/MultiSelect is still a choice control, not automatically a command menu: Select Usage's action-oriented Dropdown shorthand does not override the command-versus-value boundary.

- Provide persistent labels, a unique ID/name and stable option values. A prompt option can be disabled/hidden with an empty value; an intentional default is a separate product choice. In React, control the select with value/defaultValue rather than independently marking option selected. Validate required prompt versus actual choice and submit the intended value.
- List order may be alphabetical, numeric or meaningful frequency, with localization-aware comparison. Preserve full option meaning and an alternative readable display for constrained/native truncation; a browser title alone does not serve all keyboard/touch users.
- Default/inline heights are 32/40/48px; fluid is 64px. Inline reduces visual weight rather than eliminating names/help. Field uses contextual field/border-strong, label label-01 and text body-compact-01, 16px leading padding and space for chevron/status/decorator. Align field sizes within a form. Long labels/validation must remain legible at narrow/zoomed sizes.
- Native keyboard opening, type-to-find and commit/cancel vary by platform; test supported environments rather than replacing native handling to force every website-listed key. Disabled controls leave ordinary tab traversal and form submission but are not universally hidden from assistive reading. Preserve readable state/context when values must be understood.

Selected installed 1.117.0 Select renders a native select, forwards value/defaultValue/onChange, and associates labels through the caller's `id`. Read-only uses mouse-down prevention and blocks ArrowUp/Down/Space; native select has no readonly attribute. Test letter/typeahead, Home/End, Enter, touch and assistive operation before claiming complete immutability. Caller key/mouse handlers can be overwritten by those internal handlers. Warning/inline/fluid helper associations require actual DOM/AT inspection. The Code tab's Fluid demo erroneously points to FluidSearch; confirm the real FluidSelect export and release support.

AI suggestions/explanation are separate from selection. Preserve the original suggestion for explicit revert after manual override, rather than recomputing an allegedly original value. The decorator must not obstruct native selection or keyboard access.

Verify native selection/submission, placeholder/default/required/error states, names/descriptions, change payloads, read-only across input methods, disabled submission, async option replacement, missing selected values, AI override/revert, long/translated text, responsive and theme states. No Select runtime/AT pass was performed.

Sources: [Usage](https://carbondesignsystem.com/components/select/usage/), [Style](https://carbondesignsystem.com/components/select/style/), [Code](https://carbondesignsystem.com/components/select/code/), [Accessibility](https://carbondesignsystem.com/components/select/accessibility/). Four-tab public source prose reviewed 2026-09-29; images/demos uninspected.

## Dropdown, multiselect and combo box

Reviewed 2026-09-29 from public Carbon Usage, Style, Code and Accessibility source text at website commit `d8783ad2ae3b5e59c58f58311491f8a2c4e62631`. Images, runtime interactions and target-package APIs remain unverified. Consult installed components and current framework docs before implementing modifiers.

## Selection model

Dropdown chooses one predefined option. Multiselect chooses several. Combo box combines typing with suggested selection; custom values are a separate policy and implementation capability. Do not assume typing a string creates a new record or yields a valid selected object.

For two visible choices prefer radios. Avoid nested dropdowns or complex content in options. Native Select is often a useful choice for form-based/mobile experiences; custom listboxes are not automatically superior. Inline is documented for dropdown/multiselect without filtering, not as a universal modifier for every variant.

## Names and content

- Keep a persistent descriptive label and meaningful helper instructions; placeholders are optional prompts, not labels. Repeated controls need unique label IDs and unambiguous purpose.
- Use concise sentence-case options, normally alphabetical unless another meaningful order is required. Avoid decorative images/icons and paragraphs in the option list. Preserve required/optional semantics.
- Long single-line options can truncate visually, but preserve their full accessible names and accessible full-text disclosure. Prefer keyboard-capable Carbon tooltips to browser-title-only hover; test touch access and distinguish options whose unique suffix disappears.
- An optional bulk parent is labeled All or All roles, as an option rather than a command. Avoid it where all and none mean the same filter state.
- Multiselect shows selected count and a clear-all control, not only a mysterious numeral or unlabeled x. Selected options can move to the top on reopening; do not unexpectedly reorder under the keyboard during selection. Clearing filter text and clearing selected options are different actions.

## Variant-specific keyboard contracts

| Variant | Documented behavior to verify |
|---|---|
| Dropdown | Tab reaches trigger; Enter/Space/Down opens; arrows navigate; Enter/Space commits and closes; Escape/Tab closes without changing committed selection |
| Multiselect | Enter/Space/Down opens; arrows navigate; Enter/Space toggles options while list remains open; Escape/Tab dismisses; Delete on the collapsed field clears selection |
| Combo box/filterable multiselect | Typing filters, Enter/arrows opens or navigates; Enter commits a highlighted option; Space enters text and must not be hijacked as selection; Escape closes and may clear query according to actual state |

Distinguish DOM focus from active-option focus and committed value. Dropdown documentation describes focus moving to options; a supported implementation may maintain DOM focus on its input and expose the active option through ARIA. Follow its complete pattern rather than adding unrelated option tab stops.

The source accidentally writes `role="combo box"`; use the valid `combobox` token and appropriate popup role, names, expanded state, controls and active-descendant relationships. See the [APG combobox contract](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/). For editable fields preserve native text-editing keys. A listbox of values is different from a menu of commands.

The documented multiselect bulk parent clears all when clicked from mixed state. Do not silently impose a different generic checkbox rule on this variant. Derive and expose none/some/all coherently, define the scope when options are filtered, and verify actual behavior in the installed package.

Custom combo-box values are described as committed on blur/Tab/Enter. Verify whether the installed component permits them, how it reports a custom string versus an option, and what submission validates. Reject unavailable values when the domain requires a predefined choice; don't discard a legitimate custom value merely because it is absent from suggestions.

## Layout, state and recovery

Default fields/menu rows match at 32/40/48px, medium by default. Fluid field is 64px; its menu can use 64px default or 40px condensed rows. Default label is external, fluid label is inside. Width follows context/content, with menu width matching the field; flexibility is not permission to clip values or remove labels.

Menu opens downward by default and can flip upward to avoid cropping. Check clipping ancestors, portal placement, zoom and narrow viewports; verify scroll and focused-option visibility. The sixth-option and half-visible-last-row advice is a discoverability recommendation, not a reason to cut off keyboard targets.

Use state-specific field/layer, selected, disabled/read-only, error/warning and focus roles. Vertical dividers separate interactive controls and mark the leftmost interactive set; they are not decoration around every noninteractive status icon. Check actual installed markup before manual divider overrides. Approved product semantic tokens govern values.

AI suggestions keep explanation access separate from changing a value. Manual override removes AI styling and a saved-original revert restores it. Version-check the actual AI and fluid exports: the stable announcement still links one multiselect example to an old deployment preview, which is not installed-release proof.

Verify opening/closing/selection for each used variant, input editing and Space, unique naming, mixed/count/clear scope, no-results, asynchronous options and stale responses, custom-value validation, errors, disabled/read-only, focus/scroll, long option meaning and theme/RTL/zoom placement. These are implementation checks, not reported passes.

Sources: [Usage](https://carbondesignsystem.com/components/dropdown/usage/), [Style](https://carbondesignsystem.com/components/dropdown/style/), [Code](https://carbondesignsystem.com/components/dropdown/code/), [Accessibility](https://carbondesignsystem.com/components/dropdown/accessibility/).
