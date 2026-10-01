# Pattern coverage checklist

Reviewed 2026-09-15 for plugin 1.1.1. Scope: the 14 entries on [Carbon Patterns overview](https://carbondesignsystem.com/patterns/overview/). A checked entry means local guidance exists, not that every source example, visual specimen, linked component, or accessibility behavior has been reproduced or tested.

## Category map

| Coverage | Carbon source | Local guidance |
|---|---|---|
| Present | [Common actions](https://carbondesignsystem.com/patterns/common-actions/) | [Reference](patterns.md#common-actions) |
| Present | [Dialogs](https://carbondesignsystem.com/patterns/dialog-pattern/) | [Reference](patterns.md#dialogs) |
| Present | [Disabled states](https://carbondesignsystem.com/patterns/disabled-states/) | [Reference](patterns.md#disabled-and-read-only-states) |
| Present | [Disclosures](https://carbondesignsystem.com/patterns/disclosures-pattern/) | [Reference](patterns.md#disclosures) |
| Present | [Empty states](https://carbondesignsystem.com/patterns/empty-states-pattern/) | [Reference](patterns.md#empty-states) |
| Present | [Filtering](https://carbondesignsystem.com/patterns/filtering/) | [Reference](patterns.md#filtering) |
| Present | [Forms](https://carbondesignsystem.com/patterns/forms-pattern/) | [Reference](patterns.md#forms) |
| Present | [Global header](https://carbondesignsystem.com/patterns/global-header/) | [Reference](ui-shell.md) |
| Present | [Loading](https://carbondesignsystem.com/patterns/loading-pattern/) | [Reference](patterns.md#loading) |
| Present | [Login](https://carbondesignsystem.com/patterns/login-pattern/) | [Reference](patterns.md#login) |
| Present | [Notifications](https://carbondesignsystem.com/patterns/notification-pattern/) | [Reference](patterns.md#notifications) |
| Present | [Read-only inputs](https://carbondesignsystem.com/patterns/read-only-states-pattern/) | [Reference](patterns.md#disabled-and-read-only-states) |
| Present | [Search](https://carbondesignsystem.com/patterns/search-pattern/) | [Reference](patterns.md#search) |
| Present | [Text toolbar](https://carbondesignsystem.com/patterns/text-toolbar-pattern/) | [Reference](patterns.md#text-toolbar) |

## Expanded subcategories

- [x] Dialogs: non-modal passive/transactional choices, dismissal by variant, and modal-only focus trapping.
- [x] Disclosures: profile menus, settings/filter menus, combo buttons, anatomy, action behavior, and keyboard differences.
- [x] Text toolbar: attachments, link editing, search feedback, saving, responsive arrangements, and focus restoration.

## Fluid styles review: 2026-09-25

- [Focused guide](fluid-styles.md): reviewed the [fluid-styles pattern](https://carbondesignsystem.com/patterns/fluid-styles/) text, including terminology, selection, component types, alignment, placement, sizing, accessibility and hybrids.
- Cross-checked relevant [form](https://carbondesignsystem.com/components/form/usage/) and [button](https://carbondesignsystem.com/components/button/usage/) passages for gutter, assistance, validation growth and attached-action qualifications.
- Illustrations, live demos, package API support and application behavior were not tested. Decision exercises are teaching examples, not evaluation results.

## Verification limits and maintenance

- The three expanded categories were compared with their public Carbon pages on the review date. Other categories retain their existing condensed guidance; they have not received an exhaustive subsection audit.
- The read-only page could not be retrieved during the audit. Its local coverage is present, but source parity remains unverified. Recheck the overview's link before relying on the URL above.
- Overflow content, fluid styles, and status guidance are also included locally; the overview table is not a complete index of every related Carbon topic.
- Community patterns are separate. This checklist does not claim coverage of all community assets.
- No UI implementation or assistive-technology test was performed for this documentation update.
- When extending a pattern, open its source, inspect relevant subheadings, update the focused reference, and record the review date and remaining gaps here. Avoid treating category presence as exhaustive coverage.


## Source audit amendment: 2026-09-29

The earlier scope statements above are historical. In this candidate, complete pinned-source prose has now been read for Overview, Common actions, Dialogs, Disabled states, Disclosures, Empty states, Loading and Read-only states, in addition to the separately recorded Login, Overflow content and Text toolbar reviews. Read-only retrieval is no longer unresolved: its actual source route is `/patterns/read-only-states-pattern/`; the Overview's “Ready-only inputs” relative link is stale. Overview still omits related navigation entries such as Overflow content, Fluid styles and Status indicators, so it cannot serve as the exhaustive audit inventory.

Current amendments in [Patterns](patterns.md) distinguish source recommendations from installed behavior, standards conflicts and application-owned state. Images/GIFs, internal profile/canvas references, actual AT combinations and new runtime transitions remain untested. Forms and Notifications were outstanding at that checkpoint; the completion note below supersedes that source-review limitation. Existing local guidance alone is not proof of runtime parity. Coverage accounting is recorded separately in the audit's coverage.json/source-map, not inferred from the Present labels above.

Filtering and Search complete pinned-source prose reviewed in the same audit. Added predicate/default/applied-state, scoped-result, naming, composition and asynchronous race boundaries in patterns.md. Images, remote service behavior, capacity and AT remain unverified.

Fluid styles and Status indicator full pattern source prose reviewed 2026-09-29. Status injected table/row/YAML/palette source also read; actual SVG assets and rendered controls remain unverified. See fluid-styles.md and status-and-dataviz.md for amended conflicts and limits.

Global header full pattern prose reviewed 2026-09-29; ui-shell.md adds task/persistence, bounded IA, branding scope, application-owned state retention and responsive semantic-order limits. Artwork, route-state behavior and AT remain unverified.

All18 MDX pages under patterns/ have now received full pinned-source prose review in this exhaustive audit, including Forms and Notifications on2026-09-29. This includes related pages omitted from Overview. Images, videos, rendered specimens, framework diversity, AT and final practical model evaluation remain unfinished; this does not claim exhaustive rendered pattern verification.

All14 community/ MDX pages received pinned-source prose review29 September2026. See [Community flows](community-flows.md) for the separate maintainer/maturity, creation/edit/removal, data-transfer, API-key and chat contracts. The old index is deprecated and the pattern index unmaintained. Current external catalog access failed in this audit; images, linked/internal implementations, actual workflows and final model evaluation remain open. This does not extend core support to community assets.
