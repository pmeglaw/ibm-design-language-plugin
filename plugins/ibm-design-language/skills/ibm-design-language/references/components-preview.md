# Carbon preview core components

Reviewed 2026-09-15 against the [preview overview](https://preview.carbondesignsystem.com/building-blocks/core/components/overview/components).

Read the relevant row below to choose a component, then locate its variants and detailed topics in [the subsection index](components-preview-index.md). Read only that component's source sections before designing unfamiliar behavior. [Coverage and limits](components-preview-coverage.md) distinguish documentation discovery from verified implementation.

## Authority and implementation

- A preview-site page can label a component Stable while describing individual examples or modifiers that are not production-ready. Check the page's qualifications and the installed package's exports, props, feature flags, and version before implementing. This catalog is not a v12 migration instruction.
- Existing CSS assets in this skill provide a limited styling foundation; they do not implement all catalog entries or their JavaScript behavior. Prefer the project's installed Carbon components when available. For a missing equivalent, document the decision and implement/test the relevant interaction contract.
- Use the project brand authority for approved semantic colors, and Carbon component contracts for behavior. Resolve disagreements between a local summary, preview guidance, and installed implementation explicitly; do not silently invent compatibility.
- The source index preserves the site's actual headings, including nested headings, rather than treating every page as a uniform template. Some component variants appear within tables rather than headings: inspect each source's Variants section as well.
- Guidelines, specifications, accessibility, and Storybook serve different purposes. Follow the source's links for measurements, keyboard/screen-reader details, and current API documentation. This index enumerates the retrieved guidelines pages; it does not claim to reproduce all linked tab contents.
- For Button specifically, the source limits page-level primary emphasis and permits temporary focused flows to have their own primary. Its fluid/hanging examples include production caveats. Do not treat the older local 'one per section' shorthand as permission to scatter primaries across a page.

## Component selection

The notes below are concise selection and verification prompts. The linked source remains necessary for detailed variant behavior.

| Component | Selection and verification |
|---|---|
| [Accordion](components-preview-index.md#accordion) | Reveal optional sections while keeping their headings scannable. Check expansion, heading semantics, and whether hidden content is essential to the task. |
| [AI label](components-preview-index.md#ai-label) | Identify AI involvement and expose an explanation. Keep provenance separate from the action that requests generation; test focused and container placements. |
| [Breadcrumb](components-preview-index.md#breadcrumb) | Represent location in a hierarchy, not a history of clicks. Preserve a usable route to ancestors when the trail overflows. |
| [Button](components-preview-index.md#button) | Use for actions; choose emphasis from task priority. Verify the particular variant, icon treatment, group layout, and installed-package support before adopting preview modifiers. |
| [Checkbox](components-preview-index.md#checkbox) | Use for independent choices or multiple selections. Model the mixed parent state explicitly when child selections differ. |
| [Code snippet](components-preview-index.md#code-snippet) | Present code with a suitable inline, single-line, or multiline treatment. Verify copying preserves the source and overflow leaves the content reachable. |
| [Contained list](components-preview-index.md#contained-list) | Use a contained collection when a table's column model is unnecessary. Select on-page or disclosed placement and identify row actions independently. |
| [Content switcher](components-preview-index.md#content-switcher) | Switch presentations of the same content. Choose tabs for distinct content areas; choose a toggle for a binary setting. |
| [Data table](components-preview-index.md#data-table) | Use for comparing records by shared attributes. Plan selection, expansion, sorting, batch actions, search, pagination, and loading together. |
| [Date picker](components-preview-index.md#date-picker) | Choose simple entry for remembered dates, a calendar for scheduling, and a range for intervals. Treat time entry and locale formatting explicitly. |
| [Dropdown](components-preview-index.md#dropdown) | Choose a dropdown for a bounded single choice, multiselect for several, or a combo box when typing helps find an option. Check native Select as an alternative. |
| [File uploader](components-preview-index.md#file-uploader) | Provide a button or drop zone with accepted-file guidance. Validate failures per file and preserve a path to retry or remove a failed upload. |
| [Form](components-preview-index.md#form) | Use the Forms pattern for grouping, labels, help, validation, and submission. An overview entry named Form is not evidence of a separate component API. |
| [Inline loading](components-preview-index.md#inline-loading) | Keep action progress near the initiating control. Handle inactive, active, finished, and error outcomes; avoid leaving the action indefinitely blocked. |
| [Link](components-preview-index.md#link) | Use for navigation, with text describing the destination. Choose inline or standalone placement and disclose special destination behavior when relevant. |
| [List](components-preview-index.md#list) | Use ordered items when sequence matters and unordered items otherwise. Preserve semantic nesting instead of simulating it with indentation. |
| [Loading](components-preview-index.md#loading) | Indicate processing when completion is unknown. Choose inline loading for a local action and a progress bar when measurable progress is available. |
| [Menu](components-preview-index.md#menu) | Group commands, not complex form content. Check nested menus, contextual placement, selection behavior, and keyboard traversal. |
| [Menu buttons](components-preview-index.md#menu-buttons) | Choose menu button for grouped commands, combo button for a frequent default plus alternatives, and overflow for contextual secondary actions. |
| [Modal](components-preview-index.md#modal) | Use for a short focused interruption. Distinguish passive, transactional, acknowledgment, and progress variants; apply the dialog reference's dismissal and focus rules. |
| [Multiselect](components-preview-index.md#multiselect) | Use Dropdown's Multiselect subsection for multiple choices. Test selection counts, clear behavior, filtering, and parent-checkbox labeling. |
| [Notification](components-preview-index.md#notification) | Choose inline, toast, actionable, or callout from message origin and required response. Verify persistence, dismissal, and focus impact. |
| [Number input](components-preview-index.md#number-input) | Use for actual quantities with numeric constraints. Use text input for identifiers such as account numbers; define bounds, steps, and validation. |
| [Pagination](components-preview-index.md#pagination) | Choose data pagination for item collections and pagination navigation for page sequences. Keep size, count, current page, and responsive behavior coherent. |
| [Popover](components-preview-index.md#popover) | Treat the popover as a presentation container. Choose the interaction contract from tooltip, toggletip, disclosure, or menu; check no-tip, caret-tip, and tab-tip placement. |
| [Progress bar](components-preview-index.md#progress-bar) | Use determinate progress for a known measurable amount and indeterminate progress otherwise. Preserve meaningful success/error feedback and labels. |
| [Progress indicator](components-preview-index.md#progress-indicator) | Show steps in a workflow rather than elapsed processing. Define current, completed, error, and future-step behavior with validation. |
| [Radio button](components-preview-index.md#radio-button) | Use for one choice from a small visible set. Keep grouping, labels, selected state, and keyboard behavior consistent. |
| [Search](components-preview-index.md#search) | Use to query a collection. Define scope, result feedback, clearing, empty results, and delayed responses with the Search pattern. |
| [Select](components-preview-index.md#select) | Consider native selection behavior for forms and mobile use. Choose a custom dropdown only when its richer behavior serves the task. |
| [Slider](components-preview-index.md#slider) | Choose a single value or range deliberately. Verify keyboard adjustment, bounds, and how users enter an exact value. |
| [Structured list](components-preview-index.md#structured-list) | Use for simple comparable content without full table tooling. Select the default or selectable variant based on whether choosing a row is a task. |
| [Tabs](components-preview-index.md#tabs) | Use distinct content panels. Choose line, contained, or vertical presentation; test overflow, automatic/manual activation, and focus after dismissal. |
| [Tag](components-preview-index.md#tag) | Distinguish read-only classification, dismissal, selection, and operational actions. Do not make decorative tags appear interactive. |
| [Text input](components-preview-index.md#text-input) | Choose single-line, multiline, or password entry. Keep labels and helper/error relationships intact; check resizing, overflow, and password visibility. |
| [Tile](components-preview-index.md#tile) | Choose base, clickable, selectable, or expandable tiles according to the whole tile's task. Avoid ambiguous nested actions and inconsistent selection affordances. |
| [Toggle](components-preview-index.md#toggle) | Use for a binary setting with clear state language. Distinguish immediate setting changes from choices submitted later in a form. |
| [Toggletip](components-preview-index.md#toggletip) | Use an explicitly activated explanation that may contain interaction. Verify opening, dismissal, and keyboard access to the disclosed content. |
| [Tooltip](components-preview-index.md#tooltip) | Use concise supplemental text on hover/focus. Keep critical instructions visible and interactive content in a suitable alternative. |
| [Tree view](components-preview-index.md#tree-view) | Use for hierarchical data. Distinguish expanding a branch from selecting a node and preserve predictable keyboard focus across collapsed branches. |
| [UI shell](components-preview-index.md#ui-shell) | Compose header and optional panels for product navigation. Separate product navigation from system utilities and check narrow-screen relocation. |
| [UI shell left panel](components-preview-index.md#ui-shell-left-panel) | Use for product navigation hierarchy. Keep nested navigation manageable and verify collapsed, expanded, and responsive behavior. |
| [UI shell right panel](components-preview-index.md#ui-shell-right-panel) | Use for system utilities or switching products. Keep expansion, dismissal, and selection behavior distinct from persistent product navigation. |

## Focused verification

For the selected component and variant, identify the task, states, content, keyboard model, focus movement, accessible name, responsive changes, and relevant loading/error/empty behavior. Test those interactions in the implementation; source retrieval alone is not a passing UI test. For overlays, explicitly decide whether focus is trapped. For selectable collections, separate selection from navigation and expansion.

Use [Patterns](patterns.md) for multi-component flows, [Composition](composition.md) for container decisions, and [UI shell](ui-shell.md) for navigation. Keep existing Typeface and typography references for text roles.
