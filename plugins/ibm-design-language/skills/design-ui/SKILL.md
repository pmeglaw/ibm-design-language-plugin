---
name: design-ui
description: "Design, implement, and critique IBM Design Language and Carbon interfaces. Use for IBM/Carbon product UI, IBM Plex, layout and typography, component or flow selection, semantic color and approved brand integration, accessibility, and interaction refinement."
---

# IBM Design Language and Carbon

Design decisions should help people understand the task, act confidently, and recover when something goes wrong. Start from the user's outcome and the actual product context.

## Scope and authority

- Use the requested workspace, product, and brand. A generic request remains generic; examples and remembered projects do not authorize changes elsewhere.
- Inspect the installed framework, Carbon packages, versions, existing styles, and applicable project guidance before implementation. Prefer the project's supported Carbon components and theme APIs. Use the [deprecation checklist](references/framework-integration.md#deprecation-checklist) when choosing dependencies, adapting legacy examples or recommending migrations, including Carbon React imports/props, Sass/token APIs, warning attribution and newer stable-release fix checks, and IBM Products package, component and prop status.
- Use current component documentation for behavior and measurements, installed package documentation/exports for APIs, and the approved product system for its semantic brand values. Read the applicable Usage, Style, Code and Accessibility contracts with [documentation intake](references/documentation-intake.md); resolve dynamic content and stale examples rather than treating heading coverage as detail review. A preview page is not proof that an API is released.
- For current documentation discovery with Context7, use [version-aware retrieval](references/context7-refresh.md). Verify returned sources against the installed package; index freshness is not release, compatibility, or product acceptance evidence.
- Label local craft advice as a heuristic. When sources disagree, identify the conflict and choose the instruction applicable to this version, component, and task. Preserve accessibility and explain material deviations.
- Treat this skill as guidance, not evidence of a passing design or working component. See [source coverage](references/source-map.json) for reviewed sources and known gaps.

## Choose the mode

**Focused guidance:** Read only the reference sections needed to answer the question. Explain a concrete decision and its conditions. For a focused question, this mode takes precedence over the composition benchmark and gate reading below. Preserve applicable component and accessibility contracts.

**Design or build:** Read [senior workflow](references/senior-workflow.md) and the relevant component/container reference. Before coding runnable interactions, also read [practical implementation review](references/practical-implementation-review.md) and the applicable interaction contracts; use them to establish action destinations, heading/control structure, pending-state and font-delivery acceptance before implementation. Establish the main task, objects, data volume, important states, and an observable outcome to judge the result. Choose density by region: scanning zones can be compact while decision zones need space.

**Critique:** Use [taste](references/taste.md). For a task-flow, IA or multi-view audit, use the sibling [review product experience workflow](../review-product-experience/SKILL.md). Review alone does not authorize implementation or publication. Inspect the supplied screen or running interface when available. Distinguish visible evidence, source-code findings, and hypotheses; do not describe an unseen screenshot. Prioritize hierarchy and task completion, while still checking serious accessibility and functional issues. For reviews spanning pages or tabs, use the [cross-view comparison](references/taste.md#cross-view-consistency) and report coverage before giving an overall verdict.

For design critique or redesign, follow [design-deliverable retention](../review-product-experience/SKILL.md#preserve-the-requested-design-deliverable): complete the requested composition and any requested visual proposal, and assess discovered bugs against that direction. Do not let a convenient repair replace the design task; honor separately scoped repair requests.

When a composition decision benefits from a visual analogue, use one relevant [casebook study](references/visual-casebook.md) to examine visible choices and tradeoffs. Adapt its reasoning to the actual task; the examples are teaching material, not product acceptance evidence.

For a product shell header, data table, search field or form, read the [composition benchmarks](references/release-gates.md#composition-benchmarks) in both design and critique. They route to the official visual reference for each, its version-qualified sizing notes, and the geometry and keyboard acceptance checks; report unrun checks as untested.

Identify the visual register: productive interfaces use efficient, predictable layout and fixed UI typography; expressive reading/arrival regions can use fluid type, imagery, and greater scale. Mix deliberately by region, with consistent component behavior. A marketing page should not acquire product shell chrome simply because Carbon is in use. Use [expressive surfaces](references/expressive-surfaces.md) for hybrid region decisions, layout craft and selected Gallery studies; use the [brand decision path](references/color-and-brand.md#hybrid-and-expressive-brand-decisions--local-guidance) for approved semantic overrides. Conceptual Hybrid UI artwork is distinct from a working hybrid page. For relationships between components, use [composition craft](references/composition-craft.md); its correction pairs add local heuristics, not new benchmark passes.

## Implementation and verification

1. Use the installed component system first. The bundled CSS is an optional standalone prototype fallback, limited to White and Gray 100. Read [asset scope](references/asset-scope.md) before using it; it is not a JavaScript component library or a four-theme implementation.
2. Compose with the 2x Grid, named type styles, spacing tokens, semantic colors, and the applicable component's anatomy. Use component-specific corner, size, and focus treatments rather than global styling absolutes. Trace authored color rules to semantic roles, including interaction states; see the [worked example](references/semantic-token-example.md).
3. Use at most one page-level primary action when the task warrants it; a monitoring or read-only view may need none. Do not invent a primary to satisfy a count; a focused modal, panel, or task may have its own primary while active. Repeated sections do not each need a primary button. See [component selection](references/components-preview.md).
4. Design the relevant no-data, no-results, loading, failure, partial/overflow, submitting, and success states. For a table's no-data state, replace the empty table including headers/footer; preserve useful surrounding actions. Keep search/filter context in a no-results state. See [patterns](references/patterns.md).
5. Follow [accessibility](references/accessibility.md) for names, control states, keyboard/focus, and evidence. Disabled is not hidden. A search field still needs an accessible name when its visible label is omitted.
6. Preserve supported Carbon microinteractions. Choose motion by purpose and event semantics, keep feedback immediate, and honor reduced-motion preferences. Frequent use and keyboard input do not impose a blanket animation ban. See [motion](references/motion.md).
7. For runnable work, use [practical implementation review](references/practical-implementation-review.md) to define and test observable destinations/action outcomes, relevant async recovery, and containment through the nested layout. Check normal viewport geometry in open/expanded and feedback states at required widths, themes and directions; for code, verify ordinary Tab access and scrolling on the actual overflow owner. Confirm delivery of used font assets. Scope these checks to the affected task and installed version. Report pass/fail/untested with evidence; source wiring, a caption or a file path alone does not prove rendered behavior or image inspection. Use the applicable [release-derived regression checks](references/context7-refresh.md#release-derived-regression-checks) when these components are affected. The contrast checker's presets are diagnostics, not product acceptance tests.
8. Review the result against the task and [taste rubric](references/taste.md), including [source review](references/design-engineering.md#source-review-for-authored-color). Record meaningful tradeoffs, evidence, and the next corrective action if work remains.

## Reference routing

Read only the rows that apply. Each reference states its own sources, versions and limits.

| Reference | Use for |
|---|---|
| **Workflow and judgment** | |
| [Senior workflow](references/senior-workflow.md) | Screen and flow design, density by region, design judgment |
| [Taste](references/taste.md) | Critique rubric and cross-view consistency |
| [Visual casebook](references/visual-casebook.md) | Annotated before/after table, form, dashboard, settings and expressive studies |
| [Design engineering](references/design-engineering.md) | Browser behavior, interruption/recovery, implementation polish, authored-color source review |
| [Practical implementation review](references/practical-implementation-review.md) | Runnable destinations/actions, async lifecycle and focus, scrolling, nested narrow/RTL sizing, fonts |
| [Release gates](references/release-gates.md) | Header/table/search/form benchmarks, geometry and keyboard acceptance checks, evidence limits |
| [Artifact intake](references/artifact-intake.md) | Selective reuse of supplied research, prototypes and mockups |
| **Layout and foundations** | |
| [Composition craft](references/composition-craft.md) | Desktop hierarchy, reading edges, spacing, density and state growth |
| [2x Grid](references/2x-grid.md) | Grid geometry, breakpoints, grid behaviors and implementation |
| [Spacing](references/spacing.md) | Fixed token values, responsive composition, Stack/gap, component spacing |
| [Typography](references/typography.md), [typeface](references/typeface.md), [coverage](references/typeface-coverage.md) | Productive/expressive type, type tokens, IBM Plex families, multilingual text, fonts |
| [Tokens](references/tokens.md), [semantic token example](references/semantic-token-example.md) | Semantic color roles, palette contrast traps, tracing authored rules to tokens |
| [Color and brand](references/color-and-brand.md) | Approved brand mappings and hybrid/expressive brand decisions |
| [Themes](references/themes.md) | White, Gray 10, Gray 90, Gray 100, nested layers, user/system preferences |
| [Fluid styles](references/fluid-styles.md) | Fluid versus default styling, attached actions, form help, separators |
| [Icons and pictograms](references/icons-and-pictograms.md), [dynamic libraries](references/dynamic-svg-libraries.md) | Library symbols, sizes, foregrounds, optical alignment, clearance |
| [Motion](references/motion.md) | Productive/expressive movement, easing, duration, choreography, reduced motion |
| [Accessibility](references/accessibility.md) | Accessible names, disabled/read-only, keyboard and focus, evidence |
| **Components and patterns** | |
| [Pattern selector](references/pattern-selection.md) | Containers, feedback, loading, search, filters, control states, deletion |
| [Components](references/components-preview.md), [index](references/components-preview-index.md), [coverage](references/components-preview-coverage.md) | Component choice, variants, specifications, accessibility and source sections |
| [Composition](references/composition.md) | Page, modal, panel, tearsheet, table and dashboard structure; IBM Products |
| [Patterns](references/patterns.md), [coverage](references/patterns-coverage.md) | Notifications, forms/filtering, empty states, disclosure |
| [Core interaction contracts](references/core-interaction-contracts.md) | Tree view, Tile, Tabs, Accordion, Breadcrumb, Button, Checkbox, Code snippet, Contained list, Content switcher, List |
| [Menus and triggers](references/menus-and-triggers.md) | Tooltip/Toggletip, command menus, Popover, menu/combo/overflow actions, controlled closing |
| [Date and time](references/date-and-time.md) | Locale, format, timezone, manual/calendar/range entry, validation |
| [Selection controls](references/selection-controls.md) | Toggle, Tag, radio, Select, dropdown, multiselect, combo box, StructuredList |
| [Forms and upload](references/forms-and-upload.md) | Text input, textarea, Search, Slider, required/optional, numeric validation, uploader |
| [Action feedback and links](references/action-feedback-and-links.md) | Notifications, progress versus steps, loading announcements, recovery, link semantics |
| [UI shell](references/ui-shell.md) | Header, side nav, utilities, skip/focus/route contracts, responsive navigation |
| [Community flows](references/community-flows.md) | Community/core boundaries, create/edit/remove, import/export, API keys, chat |
| [Spatial workspaces](references/spatial-workspaces.md) | Maps, floor plans, inspectors, spatial keyboard navigation, draft/publication |
| **Data, content and AI** | |
| [Status and data visualization](references/status-and-dataviz.md) | Status meaning, chart choice, domains, missing data, legends, dashboards |
| [Chart behavior](references/chart-behavior.md), [chart example integration](references/chart-example-integration.md) | Chart interaction and design-only versus code boundaries |
| [Infographics and chart selection](references/infographics-and-chart-selection.md) | Conceptual symbols, technical diagrams, infograms, analytical charts |
| [Content design](references/content-design.md) | Action semantics, writing style, localization, label/behavior agreement |
| [AI explainability](references/ai-explainability.md) | AI provenance, labels, read-only access, override/revert, keyboard behavior |
| **Expressive and brand surfaces** | |
| [Expressive surfaces](references/expressive-surfaces.md) | Productive/expressive/hybrid regions and selected Gallery studies |
| [Brand marks and app icons](references/brand-marks-and-app-icons.md) | IBM 8-bar/Rebus versus product identity; app icons versus action glyphs |
| [Imagery and illustration](references/imagery-and-illustration.md) | Illustration branch and fidelity, photography selection |
| [Creative animation](references/creative-animation.md) | Creative storyboards versus live UI motion |
| **Framework and sources** | |
| [Framework integration](references/framework-integration.md) | Official/community setup, Web Components, legacy snippets, deprecations, Carbon MCP boundaries |
| [Next.js shell recipe](references/nextjs-shell.md) | App Router with real Carbon navigation, shared routes, dismissal and focus |
| [Context7 retrieval and refresh](references/context7-refresh.md) | Live documentation discovery, version reconciliation, release-derived regression checks |
| [MCP result validation](references/mcp-result-validation.md) | Retrieved examples, chart completeness, stylesheet delivery, instruction conflicts |
| [Carbon Next](references/carbon-next.md) | Roadmap, preview and release boundaries, flags, future versions |
| [Documentation intake](references/documentation-intake.md) | Component Usage/Style/Code/Accessibility tabs, dynamic docs, source conflicts |
| [Asset scope](references/asset-scope.md) | Limits of the optional standalone CSS fallback |
| [Source map](references/source-map.json) | Source authority, coverage, freshness and unresolved gaps |
| [Evaluation](references/evaluation.md), [history](references/evaluation-history.md) | Preparing, running, grading and comparing evaluations; interpreting existing evidence |

Coverage is partial. Expressive, identity, imagery and animation guidance is local craft advice built on a small set of inspected Gallery assets; visual catalogs, production kits, asset permissions and product runtime or assistive-technology checks remain unverified. Do not generalize productive UI rules to every IBM visual expression.
