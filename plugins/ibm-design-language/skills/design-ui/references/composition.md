# Composition — the layer above components

Read this when building a *page* rather than a component: choosing the container for a create or edit task, laying out a data table at scale, composing a dashboard, or reaching for anything in `@carbon/ibm-products` (page headers, tearsheets, side panels, data grids).

## Contents

- Page anatomy
- Create and edit containers
- Carbon for IBM Products — what to use and when
- Maturity model and recent renames
- Data tables at scale
- Dashboards
- The grid in practice

## Page anatomy

Top to bottom: **UI shell** (global header, optional left panel — `ui-shell.md`) → **page header** (breadcrumb, title, status tags, a primary action when warranted, optional tabs) → **content on the 2x Grid**.

- Consider a left panel when secondary navigation is substantial or users switch between items often. Keep its hierarchy easy to scan; check deeper navigation against the task and available space.
- Breadcrumbs on record pages and any full-page flow.
- Use at most one page-level primary action when warranted; a read-only or monitoring page can have none. A focused modal or panel may have its own primary while active; repeated sections do not each need a primary.

## Create and edit containers

This guide covers Carbon and Carbon for IBM Products containers. Note that Create flows is a *community* pattern in Carbon's docs — strong guidance, not governance-approved.

When fit has not been tested, make the container choice provisional. Name the task or observed constraint that would change it—for example, actions becoming unreachable at a narrow viewport, excessive scrolling, or needing the underlying list during entry. Field count alone is not that evidence.

| Container | Use when | Specifics |
|---|---|---|
| **Inline** | Quick, simple creation where the page context helps | Page stays visible and interactive |
| **Modal** | A short focused task that can fit comfortably | Choose by task complexity and available space; core modal bodies may scroll vertically |
| **Side panel** | Medium complexity where the user needs the page behind it | Size against task and remaining page area; distinguish persistent non-modal and modal variants |
| **Narrow tearsheet** | Medium complexity with scrolling or sections; no distinct steps | Overlay dims the page; no progress indicator |
| **Wide tearsheet** | Complex or interactive, or two or more distinct steps | Vertical progress rail, 256px (320px for long labels); optional "show all options" toggle that switches to anchor-link navigation |
| **Full page** | A sustained task needs room or its own location | Valid when a large modal or tearsheet cannot comfortably support the task |

For the selected create pattern, verify its documented variant and installed implementation:

- Trigger is a "New [asset]" button with a plus icon.
- Do not generalize specialized create-pattern dismissal rules to every dialog. Core Carbon modals support close and Escape; define consistent unsaved-work behavior for each supported exit.
- Multi-step buttons are Cancel / Back / Next, and Next becomes **Create** on the last step.
- Protect meaningful unsaved changes consistently across supported exits; avoid unconditional warnings on untouched forms.
- On submit: loading state, then a success banner if the user stays, or navigate to the new object; errors as a notification with the form intact.
- Tearsheets can stack for a nested task; **a modal never nests** — no confirmation dialog on top of a modal. When you spec any modal, say this explicitly and design the exit so it never needs one (Cancel discards without confirming, or the task moves to a side panel or tearsheet, which may open a confirmation).

Side panel behavior matters for accessibility: a **slide-in** panel pushes page content and does not trap focus (it's part of the page); a **slide-over** panel overlays and traps focus (it's a dialog). Choose deliberately — slide-in when the page behind stays relevant, slide-over when the task is self-contained.

## Core Modal detail contract

Core Modal's four public tabs were reviewed 2026-09-29 at website commit `d8783ad2ae3b5e59c58f58311491f8a2c4e62631`. The following supplements container choice; images/demos and Modal runtime/AT remain unverified.

- Use short, infrequent interruptions tied to the user's workflow. Passive informs without a submission; transactional commits/cancels; danger confirms consequential destruction; acknowledgment records an acknowledgment; progress divides a coherent task into steps. A progress modal is not a workaround for a flow that needs a page. Noncritical feedback belongs in a suitable notification.
- Explain task/object and consequences in the title/body. Keep trigger/title wording consistent and labels action-specific. The acknowledgment variant's OK example is a narrow exception to the generic advice against vague OK/Done labels. Closing with X/Escape must not count as acknowledgment or submission.
- Name the dialog, expose its modal relationship, constrain focus, and restore focus to the invoker or a sensible successor after its removal. Initial focus is task-specific: first relevant form field, passive close control, ordinary confirmation action, or **Cancel for destructive confirmation**. Accessibility's explicit danger rule overrides generic Usage prose that puts every transactional modal on its primary. For lengthy structured content, preserve the user's ability to start reading it before acting.
- Dismissal and rollback are application contracts. X/Escape/cancel must not submit. Public wording that Cancel "undoes all applied changes" does not supply a server rollback; stage edits or implement deliberate reversible behavior rather than promising automatic reversal of already committed effects. Define unsaved exits consistently. Passive outside-click dismissal does not justify enabling accidental loss in every transactional dialog.
- Validate before closing; client validation does not replace server enforcement. Preserve inputs on failure, associate field errors and expose server failure inline. Pending submission prevents duplicates and conflicting actions, announces progress and retains recovery/cancel behavior appropriate to the operation. A visual overlay alone does not enforce keyboard blocking or correct focus.
- Only the body scrolls vertically while header/footer remain reachable. Avoid modal-wide horizontal scroll, keep focused controls visible and test long/localized content and mobile keyboards. Full-width tables/lists may bleed their surfaces to the edges; their text still respects content padding. Do not hard-code the prose's universal80% copy width: Style's per-size/breakpoint tables include16px narrow exceptions and even disagree internally. Inspect installed geometry for the chosen size.
- At wide breakpoints, documented xs/sm/md/lg widths are24/36/48/72% with max heights48/72/84/96%. Widths grow at smaller breakpoints; at320px they span the grid, and mobile maximum-height rules change. Choose from actual content fit rather than copying desktop percentages to mobile. Footer proportions differ for one, two and three actions; preserve logical order in RTL and actual primary/task emphasis.
- `enable-focus-wrap-without-sentinels` changes focus wrapping and DOM structure. Verify the active implementation, including portaled menus, conditional controls and disabled/loading transitions; do not depend on hidden sentinel selectors as an application contract.

Installed-source receipt, `@carbon/react@1.117.0`: Modal declares `selectorPrimaryFocus`, `launcherButtonRef`, `selectorsFloatingMenus`, `preventCloseOnClickOutside`, `onRequestClose`, `onRequestSubmit` and `shouldSubmitOnEnter`. Default initial selector is `[data-modal-primary-focus]`; source falls back to a secondary button for danger. Those callbacks are requests for application behavior, not proof that save or rollback occurred. Test Enter against textarea/combo interactions before enabling blanket submission. Source inspection is not a browser pass.

Sources: [Usage](https://carbondesignsystem.com/components/modal/usage/), [Style](https://carbondesignsystem.com/components/modal/style/), [Code](https://carbondesignsystem.com/components/modal/code/), [Accessibility](https://carbondesignsystem.com/components/modal/accessibility/).

## Carbon for IBM Products — what to use and when

`@carbon/ibm-products` (CSS prefix `c4p`) is the library of patterns built on `@carbon/react`. Don't hand-build what it already gives away.

| Component | Reach for it when |
|---|---|
| **PageHeader** | Every record and index page. Composable family (title, breadcrumb, actions, tags, status, tabs); breadcrumb and tabs can stick on scroll |
| **Tearsheet / TearsheetNarrow** | A focused task anchored to the bottom of the viewport; wide for steps, narrow for a single sectioned form |
| **SidePanel** | A task that needs the page alongside it; sizes `xs`–`2xl` |
| **Create\*** (CreateModal, CreateSidePanel, CreateTearsheet, CreateTearsheetNarrow, CreateFullPage) | Resource creation, per the container table above |
| **Datagrid** | Tables beyond base DataTable: nested rows, batch actions, inline edit, sticky columns, column customization, infinite scroll — but see the maturity note |
| **EmptyState** family (NoData, Error, NotFound, Notifications) | No-content states with the standard illustration and a next-step action |
| **RemoveModal** | Destructive confirmation; supports typed resource-name confirmation |
| **ExportModal / ImportModal** | Data export and file import |
| **FullPageError** | Full-page 403 / 404 / custom errors with a recovery path |
| **StatusIcon** | Standard status glyphs (fatal, critical, major, minor, normal, info) |
| **TagSet / TagOverflow** | Many tags collapsing into "+N" |
| **ProductiveCard / ExpressiveCard** | Data-and-action cards vs. visual cards |
| **Coachmark / InterstitialScreen** | Feature spotlight; welcome flow — sparingly |
| **Saving / AboutModal** | Save status; product info |

## Maturity model and recent renames

Components export with a lifecycle prefix. **Stable** has no prefix. **`preview__`** is production-ready with minor API changes possible. **`previewCandidate__`** is feature-complete and in validation. The older `pkg.component.*` canary flags are deprecated in favor of these prefixes (`pkg.feature.*` flags remain). Check the prefix before you depend on something.

Renames and deprecations from 2024–2026 that still trip people up:

| Old | Now |
|---|---|
| HTTPError403 / 404 / Other | FullPageError with a `kind` prop |
| InlineEdit | EditInPlace |
| UserProfileImage | UserAvatar |
| Datagrid `useInlineEdit` | `useEditableCell` |
| Size `max` | `2xl` |
| Size `xlg` | `xl` |
| TagSet `overflowDirection` | `overflowAlign` |
| IconButtonBar, ModifiedTabs | Removed / deprecated |

**Datagrid direction.** From late 2024 IBM steers new work toward composable tables built on TanStack Table with Carbon's DataTable components, rather than the monolithic Datagrid, which is in maintenance (severe bugs only). For a new table, start from the TanStack examples; reach for Datagrid only when you need a feature the examples don't cover and can accept the maintenance status.

Exact pixel values for side panel sizes and other geometry should be read from the component's Storybook at build time rather than memorized — they have shifted between versions.

## Data tables at scale

Base DataTable gives you: single-select (radio) or multi-select (checkbox); single or batch actions on selection; expandable rows; a toolbar with search, settings, and primary actions; sortable headers; zebra striping; simple or advanced pagination.

Senior defaults:

- **Row height by task.** Compact or short when the job is scanning; comfortable only when rows carry rich content. Row hover always on — it carries the eye across.
- **Disclose supplementary details.** Use expansion for secondary information; retain columns needed for cross-row comparison and use local horizontal scrolling when necessary.
- **Batch actions on selection**, in the toolbar, with the count shown.
- **Pagination when positions are addressable** ("page 3, row 12"); infinite scroll or virtualization when they aren't and the set is huge.
- **Numbers right-aligned, tabular figures.** Text left. Status as icon plus label.
- **Preserve full-content access when truncating; collapse tags into +N.** Tooltips need keyboard access; native title/hover alone does not establish touch access to essential content.
- For no data, replace the table including headers and footer with an empty state. Preserve useful surrounding actions without duplicating primary emphasis. For no results, retain search/filter context and provide recovery. Loading uses its own treatment.

### What good looks like: data table benchmark

Use these owner-selected official references when designing or critiquing a Carbon data table:

- [Carbon data table guidelines](https://www.carbondesignsystem.com/building-blocks/core/components/data-table/guidelines): anatomy, density, placement, toolbar hierarchy and state examples.
- [React DataTable Basic overview](https://react.carbondesignsystem.com/?path=/docs/components-datatable-basic--overview): the rendered baseline for header/body contrast, type, cell padding and row boundaries. Use the sibling Toolbar, Selection, Expansion, Sorting and Pagination stories for the features the task actually needs; Basic alone does not demonstrate those contracts.

**Positive composition.** A table is one coherent comparison surface: stable column edges, readable headers, consistent row rhythm and quiet horizontal separators keep attention on differences between records. The Basic example uses a stronger header surface above neutral body rows without a heavy border around every cell. In the Guidelines anatomy, the title and optional description establish context, collection controls sit immediately above the headers, and pagination attaches below at the table's width. Include only the controls the task needs. The table should have enough space for its useful columns; full page width is not mandatory for a small dataset.

These correction pairs are local craft judgments derived from the references, not additional Carbon specifications:

| If the candidate shows | Prefer this benchmark quality |
|---|---|
| Oversized single-line rows with large empty gaps | Choose density from content and task; start at the documented medium 40px when there is no special requirement, use compact rows for dense scanning and 64px for expected two-line content |
| Centered names or headers drifting away from their values | Stable start-aligned text edges; align numeric headings with their values and use right-aligned tabular figures when comparing quantities; identifiers need not behave like quantities |
| Heavy cell grids, repeated card outlines or competing shadows | A coherent table surface, restrained row separators and clear header/body distinction; preserve boundaries that carry meaning |
| Collection actions floating far from a narrow table | Group search and collection controls with that table; keep row actions in rows and preserve a page-level action when its wider scope justifies the position |
| Squeezed columns, tiny type or clipped essential data | Allocate width to the comparison; expose supplementary details through expansion or a panel, or retain necessary columns in a usable local horizontal scroll region |

**Apply the reference.** Select the matching variant and compare rendered candidate and reference at comparable viewport, theme, zoom, density and state. Inspect title-to-toolbar-to-header alignment, column reading edges, row rhythm, padding, header/body surfaces, separators, action emphasis and pagination attachment. Use realistic long content. At narrow widths, check the actual overflow owner, keyboard access and access to full cell content; disclosure is suitable for supplementary details but must not hide the attributes users need to compare across rows. Record each material mismatch as observation, task impact and correction, or explain the product requirement behind the deviation. Keep approved semantic brand colors and installed component treatments. The Storybook demo frame, placeholder records and sample controls are not product requirements. Visual resemblance does not prove sorting, selection, focus or accessibility.

**Sizing reconciliation, 2026-10-01.** Guidelines maps xs/sm/md/lg/xl rows to 24/32/40/48/64px, recommends md when no special density requirement exists, and matches header height to body rows. This design recommendation is distinct from React's default: inspected `@carbon/react@1.117.0` uses `lg` when table size is omitted. Set the intended size explicitly.

The current Guidelines first describes small/tall toolbars paired with xs/sm and lg/xl, then says toolbar height always matches the row; its batch and pagination prose adds an xl-to-lg exception. These statements are not a consistent implementation matrix. In `@carbon/react@1.117.0`, `TableToolbar` accepts only `xs`, `sm` and `lg`; `DataTable.getToolbarProps()` passes xs/sm through and leaves other sizes unset. Inspected `@carbon/styles@1.116.0` defaults the toolbar to lg/48px and maps its md/xl layout heights to 48px. For this version, a 40px table with the helper's default 48px toolbar is the supported starting composition, not an invented `TableToolbar size="md"`. Use the installed helper and supported children, verify batch controls fit that toolbar, and choose pagination through its separate supported size contract. Recheck package/flags and rendered geometry before overriding sizes; do not force every nested component to the row height from prose alone.

**Inspection boundary.** The current Guidelines prose and anatomy illustration and the React Basic overview's white, desktop, unselected table were inspected on 2026-10-01; Storybook identified `@carbon/react@1.117.0`. The sizing receipt above is package-source inspection, not a rendered toolbar test. Other stories, themes, responsive sizes, keyboard/assistive technology and generated-product quality were not tested for this amendment. The [local table case study](casebook/table.md) remains an author-created teaching comparison, not an official Carbon React exemplar. Historical receipts below retain their original scope.

### Public core table contracts

Reviewed 2026-09-29 from the public [Usage](https://carbondesignsystem.com/components/data-table/usage/), [Style](https://carbondesignsystem.com/components/data-table/style/), [Code](https://carbondesignsystem.com/components/data-table/code/) and [Accessibility](https://carbondesignsystem.com/components/data-table/accessibility/) source text. This establishes documented behavior, not a runtime result or access to internal extensions.

- Use a named semantic table. Give sortable headers their controls and `aria-sort`; Enter/Space sorts, and cell links/inputs retain native keyboard behavior. Row hover assists scanning even when the row has no action; it does not authorize whole-row selection or navigation.
- Keep selection and expansion distinct. Selection uses labeled checkboxes/radios; the header checkbox exposes mixed state. Where both are present, the expansion control precedes selection in the documented LTR layout. Define bulk-selection scope across search/pages; do not hide the affected count.
- Expansion holds supplementary details or deferred queries. Expanding all is optional and negates some lazy-load benefit; if details are cramped, use a dedicated page or suitable panel instead of nesting another dense table.
- Batch mode appears on selection. Disable conflicting single-row action icons/menus during batch mode; Cancel or clearing selection exits it. Verify focus when the toolbar changes, the selected-count announcement and failure recovery for the actual batch operation.
- Reserve the toolbar for collection-wide search/settings/filters/actions, with up to five visible actions before purposeful overflow. Open search starts on the left and fills available space until actions. Table primary emphasis must agree with page-level button hierarchy.
- Persistent row overflow is the default. The hover option must also reveal on focus and remain available on touch; test the installed implementation rather than assuming hover-only discovery is accessible. Fewer than three contextual commands can be inline, with explicit names and destructive-action treatment.
- Header and data row heights match: xs/sm/md/lg/xl are 24/32/40/48/64px. The 64px option accommodates two-line content with top padding. The earlier source described small/large toolbars and batch bars as 32/48px and left the medium pairing unspecified. Use the [current sizing reconciliation](#what-good-looks-like-data-table-benchmark) for the live prose conflict and version-specific toolbar support; keep this dated source receipt distinct from runtime evidence.
- Loading data uses appropriate skeletons, with an accessible loading indication. Pagination belongs below the table and has its own count/navigation contract. Search and sort apply to the intended collection before pagination; changing results must leave a valid current page.
- Style's three-column guidance is a design preference, not an HTML table validity rule or reason to invent dummy columns. Column labels can wrap; expose complete meanings if further truncated. Vertical centering of compact-row text does not imply centered horizontal text alignment.
- AI presence follows data provenance: whole-table treatment only when the whole table is AI-generated; individual generated cells receive inline labels without broad layering; generated rows/columns get their scoped treatment. Do not extend provenance styling to human-authored data.

Verify names/header relationships, sorting state and outcomes, selection scope, expansion, keyboard and touch actions, batch-mode focus, skeleton/empty/error states, valid pagination after filtering, long content and rendered theme contrast. The Code tab links framework Storybooks and provides sample records; it does not fully document render-prop wiring or server-side sorting/paging. Inspect the installed API.

## Pagination detail contract

Pagination four-tab source prose reviewed 2026-09-29 at website commit `d8783ad2ae3b5e59c58f58311491f8a2c4e62631`. Images/demos and Pagination runtime/AT remain unverified.

- Pagination divides a collection; it does not represent form steps or processing completion. Usage's link to Progress bar for a linear journey must not be mistaken for a workflow progress-indicator contract. Use the appropriate step control and real next/previous actions.
- Table Pagination attaches directly below the table at its width; PaginationNav sits near the page/section it controls. Ordinary heights are32/40/48px, normally matching table rows, with compact/extra-large rows paired to the nearest supported pagination size. Verify responsive content rather than assuming all desktop selects persist: public design removes them at the small breakpoint while retaining range and previous/next access.
- Keep current page, page size, item range and total consistent with the actual filtered/sorted collection. Reconcile page after filtering, deletion, page-size changes and remote responses; no out-of-range blank page or stale range. Distinguish unknown total from zero. Concurrent requests must not render an older page under a newer selected control. These are application/data obligations, not supplied by a styled pagination bar.
- Native selects retain platform keyboard behavior; previous/next and numbered buttons activate with Enter/Space. Disable impossible boundaries unless looping is deliberately chosen. Give multiple pagination regions distinct context, preserve translated Page/Previous/Next names and current-page state, and announce changed content appropriately without stealing focus on every refresh.
- Ellipsis represents available intervening pages rather than a decoration at the first/last position. Check access to every page, huge-option performance, long localized count labels, focus after page-window changes and narrow layouts. Do not replace native selects with custom combobox roles merely because Accessibility links an APG combobox example.
- Style says sentence case but then says capitalizing every word; use actual sentence case. Its disabled roles differ between Pagination and PaginationNav and defer to nested components; inspect implemented semantic states rather than copying a contradictory table into new overrides.

Installed-source receipt, `@carbon/react@1.117.0`: Pagination uses one-based `page` (default1) and calls `onChange` with `{page,pageSize,...}`; PaginationNav uses zero-based `page` (default0), calls `onChange` with an index, and exposes its active native button with `aria-current="page"`. PaginationNav's `totalItems` counts page options, while Pagination's counts records. Translate between these explicitly; reusing a page-state object blindly causes off-by-one errors. Pagination declares `pagesUnknown` and `renderPageSelect`; a custom render must retain the supplied name/value/change contract. Pagination declarations also include `xs`, beyond the public three-size design table. Source does not prove rendered compatibility.

PaginationNav source uses native buttons/selects without the Up/Down button-roving described in Usage; Accessibility's tab sequence is the applicable contract for this inspected release. Verify actual keyboard behavior before adding competing handlers. Its `disableOverflow` mode leaves a disabled ellipsis select rather than full direct page access; choose this performance tradeoff deliberately and provide a viable navigation route.

Sources: [Usage](https://carbondesignsystem.com/components/pagination/usage/), [Style](https://carbondesignsystem.com/components/pagination/style/), [Code](https://carbondesignsystem.com/components/pagination/code/), [Accessibility](https://carbondesignsystem.com/components/pagination/accessibility/).

## Dashboards

Two kinds: **presentation** (big-picture status) and **exploration** (interactive — search, sort, filter, drill). Decide which before drawing anything.

- **Prioritize by importance, then build hierarchy from it.** The most important data gets the highest contrast and the largest area, top-left (F-pattern). Everything else steps down.
- **Tiles get a designated aspect ratio each**, width measured to the columns. Same-size KPI tiles at 2:1; trend charts at 16:9; don't shoehorn a shared ratio onto unlike content.
- **Legends only when direct labels won't fit.** None for a single category. Top or bottom when space is scarce; left when type alignment matters.
- **Don't overfill the frame.** Whitespace around a chart measurably improves comprehension.
- **Per-tile loading and error states.** One failed query must not blank the dashboard.
- **A "last updated" mark** somewhere visible.
- Network and node diagrams aren't a Carbon Charts type — compose them from the technical-diagram rules in `status-and-dataviz.md` or a graph library.

## The grid in practice

- Read `2x-grid.md` before composing a page. The standard grid uses 4 columns at Small, 8 at Medium, and 16 at Large through Max, with fixed outer margins and fluid columns between breakpoints.
- Gutters may be absent. Carbon's Figma templates default to wide 32px gutters; narrow is 16px and condensed is 1px. Containers may hang into narrow or condensed gutters, but type never does, and labeled fixed components such as inputs and dropdowns stay wide.
- Preferred aspect ratios are 1:1, 2:1, 2:3, 3:2, 4:3, and 16:9. Ratios may adapt across breakpoints; use another ratio or scaling multiple when the content requires it.
- Type never sits closer than 32px to a container edge it isn't aligned to.
- Breakpoints are **viewport** media queries. There's no container query support in the grid package, so a grid inside a narrow docked panel needs its own handling.
- One full-bleed, container-free moment per flow at most — that's an expressive moment, and it should be deliberate.

Source scope: [core Carbon modal usage](https://carbondesignsystem.com/components/modal/usage/) permits vertical body scrolling. Numeric field-count advice from a specialized create pattern is not a universal modal limit.
