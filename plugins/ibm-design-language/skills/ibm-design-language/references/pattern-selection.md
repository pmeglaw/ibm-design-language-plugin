# Select a pattern from the task

Use this as a short route into the detailed references, not an exhaustive decision
tree or a promise that one component fits every case. State the constraint behind
the choice and what observation would change it. Numeric timing, field-count and
navigation-count thresholds are local heuristics unless the cited component
specifies them.

| Ask | Starting choice | Check before committing |
|---|---|---|
| Must the user respond before continuing? | A modal for a focused, user-initiated task; a page for sustained work | Can the task fit at the required viewport? Does the user need to operate the underlying page? Do not open a success modal merely because background work completed. |
| Must the underlying page remain usable? | Inline work or a non-modal side panel | Seeing the background through a tearsheet does not make it interactive. Confirm focus and modality, not just position. |
| Is this contextual help? | Tooltip for noninteractive text; toggletip/disclosure for interactive supporting content | Keep essential instructions visible. A raw popover alone does not supply a complete keyboard widget. |
| Where did the event happen? | Inline feedback near the active task; toast for an out-of-context system event | An action-bearing notification persists until acted on or dismissed. Undo must restore the affected state. |
| Does the message apply across the product? | Banner below the shell; callout for guidance loaded with content | Banners scroll with content. Callouts are not triggered error/success feedback. |
| Is the incoming layout known? Is progress measurable? | Skeleton for appropriate known initial content; loading indicator for unknown progress; determinate progress for a real measured fraction | Scope loading to the affected region. Do not invent a percentage, a universal 200ms threshold, or a one-second limit for inline loading. |
| How many values and categories can be selected? | Single-select control for one value; checkboxes/multiselect for several; filter region for multiple categories | Use Apply for costly queries or a deliberate batch. Show applied state and clearing; do not hide several categories in a dropdown. |
| Is search expensive, local, or scoped? | Basic results page, active in-place filtering, or focused search with a widening option | Accessible name, actual result count including zero, loading and recovery. Debounce and suggestion behavior depend on the dataset and service. |
| Why is there no content? | No-data onboarding, no-results recovery, or an error state | Preserve query/filter context for no results; offer a relevant next action. Do not render a misleading empty table as the no-data state. |
| Can the user see the value? Can they edit it? | Read-only/static information, unavailable control, or hidden content according to the permission contract | Lack of edit permission does not imply lack of view permission. Disabled is not hidden and does not universally disappear from assistive technology. |
| Is the request about responsive width or expressive fluid styling? | Read [fluid styles](fluid-styles.md); choose style from the task and enclosing structure | Check complexity, assistance needs, separators, and the component-specific form/button rules. |
| What happens if deletion is a mistake? | Low impact: direct action; moderate: consequence confirmation; high: typed resource-name confirmation | Recovery and cascading effects determine friction. Undo and reauthentication are product decisions, not universal Carbon additions to every delete. |

For a form, preserve the full range of containers: **inline → modal → non-modal
side panel → narrow tearsheet → wide tearsheet → full page** is a set of options,
not a mandatory escalation sequence. Narrow tearsheets suit a sectioned task
without distinct steps; wide tearsheets can accommodate distinct steps and more
complex work. Name the task, available space and need for surrounding context.
Do not select by field count alone, nest modals, or treat all side panels as modal.

Read [composition](composition.md) for containers and tables,
[patterns](patterns.md) for feedback/search/filtering/forms,
[accessibility](accessibility.md#control-states) for control states, and
[UI shell](ui-shell.md) for navigation. Those references own the detailed rules;
this selector should not duplicate their full specifications.

For code, first check the target package's exports and props. In the versions
inspected on 2026-09-24, `@carbon/react` 1.117.0 exports `PasswordInput` directly;
`Tearsheet` and `EmptyState` are exported by `@carbon/ibm-products` 2.99.0.
Neither a historical correction nor preview documentation establishes every
future package contract. Import-path checks do not validate all example props.

Sources: [notifications](https://carbondesignsystem.com/patterns/notification-pattern/),
[dialogs](https://carbondesignsystem.com/patterns/dialog-pattern/),
[common actions](https://carbondesignsystem.com/patterns/common-actions-pattern/),
[disabled-control keyboard guidance](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#focusabilityofdisabledcontrols),
[React 1.117.0 exports](https://unpkg.com/@carbon/react@1.117.0/lib/index.js),
[IBM Products 2.99.0 exports](https://unpkg.com/@carbon/ibm-products@2.99.0/lib/index.js).

This selector is an author-created synthesis. It does not promote supplied
prototypes or community patterns to governance-approved IBM requirements.
