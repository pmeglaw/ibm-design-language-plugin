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
| Present | [Read-only inputs](https://carbondesignsystem.com/patterns/read-only-states/) | [Reference](patterns.md#disabled-and-read-only-states) |
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
