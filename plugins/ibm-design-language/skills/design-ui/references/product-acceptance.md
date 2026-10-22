# Product acceptance for common compositions

Use the relevant rows for a header, table, search field or form being designed,
built or critiqued. Begin with the task, installed component version, supported
themes, required viewports and states. A focused question still uses only the
reference sections needed to answer it. Review alone does not authorize changes.

Read the matching component benchmark for anatomy and measurements. The fixture
IDs below provide traceability to the packaged checks; their fixed pixel values,
demo content and selectors are fixture-specific. Apply the actual component and
product contract, record justified adaptations, and do not add an irrelevant
control or force truncation merely to match a fixture.

## Choose the affected checks

| Applies when | Expected product outcome | Fixture trace |
|---|---|---|
| A product shell header is affected | Check its compact silhouette, boundary, width, identity/navigation relationship and utility grouping. Distinguish shell navigation from page actions; preserve approved brand authority. Use the [header benchmark](ui-shell.md#what-good-looks-like-header-benchmark). | Geometry: `header-compact`, `header-rule`, `header-full`, `header-identity`, `header-utilities`, `header-action` |
| A comparison table is affected | Choose deliberate density; check header/body typography against the selected variant; align column/header/body reading edges and component padding; keep surfaces and separators restrained and collection controls associated with the table. Long content must remain contained and fully accessible through an appropriate treatment. Use the [table benchmark and sizing reconciliation](composition.md#what-good-looks-like-data-table-benchmark). | Geometry: `table-density`, `table-type`, `table-pad`, `table-edges`, `table-borders`, `table-toolbar`, `table-long`, `table-clip` |
| A search field is affected | Use supported size and variant anatomy, aligned magnifier/text, enough clear-control space, and placement that communicates search scope. Use the [search benchmark](forms-and-upload.md#what-good-looks-like-search-benchmark). | Geometry: `search-height`, `search-rule`, `search-shape`, `search-glyph`, `search-icon`, `search-room`, `search-clear`, `search-place` |
| A form is affected | Keep visible labels, helper text and fields related; align reading edges; use meaningful groups and component-appropriate spacing. Place the final action after its questions with clear task scope. Use the [form benchmark](forms-and-upload.md#what-good-looks-like-form-benchmark), including its default/fluid and framework distinctions. | Geometry: `form-label`, `form-anatomy`, `form-edge`, `form-cards`, `form-gutter`, `form-stack`, `form-action` |
| A shell menu is affected | Reach it through ordinary Tab navigation; activate, dismiss and return focus according to its supported contract. Preserve the product's first-focusable skip link. The fixture's menu-first starting point is local to its candidate frame. | Keyboard: `header-tab`, `header-open`, `header-close`, `header-return` |
| Search entry and clearing are affected | Reach the named field and clear control by keyboard, enter a query, clear it and verify focus recovery. Confirm actual results, count and no-results recovery separately. | Keyboard: `search-type`, `search-clear`, `search-focus` |
| Table filtering or long-content access is affected | Reach the filter through Tab. Reach the actual overflow owner and access the full content by keyboard when scrolling is the chosen treatment. Preserve the selected table variant's semantics; do not add grid navigation to an ordinary table. | Keyboard: `table-tab`, `table-long` |
| Form entry or validation is affected | Verify the label is programmatically associated, controls are reachable and failed submission exposes errors and places focus appropriately. Check the operation's real outcome and recovery separately. | Keyboard: `form-label`, `form-submit` |
| Layout containment or direction is affected | Check normal-viewport document and nested-region bounds with long content and relevant open, pending and feedback states. Include 320px or RTL where required by the task; candidate-frame checks alone do not prove whole-page reflow. A direction-only test must preserve the actual content language. | Keyboard fixture: `frame-320`, `frame-rtl`; also [nested containment and language](practical-implementation-review.md) |

## Record evidence proportionately

For each applicable outcome, record **pass**, **fail** or **untested**, with the
observed state and evidence. Note why a fixture condition was adapted or was not
applicable; an omitted or unavailable check is not a pass. Reuse valid evidence
for unchanged behavior when its version and conditions still apply.

- Use rendered observations and measurements for geometry, recording viewport,
  theme, zoom, content and state. A mockup is a proposal, not a runtime pass.
- Exercise keyboard paths without manually focusing otherwise unreachable
  controls. Source wiring alone does not prove focus, dismissal or recovery.
- Keep visual, functional, keyboard, assistive-technology and user-outcome claims
  separate. Do not infer usability or accessibility certification from a screenshot
  or these fixture-derived criteria.
- For runnable work, also use [practical implementation review](practical-implementation-review.md)
  for destinations, state transitions, async recovery, fonts and overflow.

The [packaged gate definitions](release-gate-definitions/README.md) preserve exact
fixture IDs, conditions and assertions for inspection when needed. They are not
a product test runner. Maintaining or publishing this plugin additionally follows
[release gates](release-gates.md); a green authored fixture is not evidence that a
model-generated interface or another product passes.
