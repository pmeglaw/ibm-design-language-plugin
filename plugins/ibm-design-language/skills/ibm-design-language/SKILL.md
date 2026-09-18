---
name: ibm-design-language
description: "Design, implement, and critique IBM Design Language and Carbon interfaces. Use for IBM/Carbon product UI, IBM Plex, layout and typography, component or flow selection, semantic color and approved brand integration, accessibility, and interaction refinement."
---

# IBM Design Language and Carbon

Design decisions should help people understand the task, act confidently, and recover when something goes wrong. Start from the user's outcome and the actual product context.

## Scope and authority

- Use the requested workspace, product, and brand. A generic request remains generic; examples and remembered projects do not authorize changes elsewhere.
- Inspect the installed framework, Carbon packages, versions, existing styles, and applicable project guidance before implementation. Prefer the project's supported Carbon components and theme APIs.
- Use current component documentation for behavior and measurements, installed package documentation/exports for APIs, and the approved product system for its semantic brand values. A preview page is not proof that an API is released.
- Label local craft advice as a heuristic. When sources disagree, identify the conflict and choose the instruction applicable to this version, component, and task. Preserve accessibility and explain material deviations.
- Treat this skill as guidance, not evidence of a passing design or working component. See [source coverage](references/source-map.json) for reviewed sources and known gaps.

## Choose the mode

**Design or build:** Read [senior workflow](references/senior-workflow.md) and the relevant component/container reference. Establish the main task, objects, data volume, and important states. Choose density by region: scanning zones can be compact while decision zones need space.

**Critique:** Use [taste](references/taste.md). Inspect the supplied screen or running interface when available. Distinguish visible evidence, source-code findings, and hypotheses; do not describe an unseen screenshot. Prioritize hierarchy and task completion, while still checking serious accessibility and functional issues.

For composition work, use one relevant [casebook study](references/visual-casebook.md) to examine visible choices and tradeoffs. Adapt its reasoning to the actual task; the examples are teaching material, not product acceptance evidence.

**Focused guidance:** Read only the references needed to answer the question. Explain a concrete decision and its conditions rather than prescribing an unrelated build or test sequence.

Identify the visual register: productive interfaces use efficient, predictable layout and fixed UI typography; expressive reading/arrival regions can use fluid type, imagery, and greater scale. Mix deliberately by region, with consistent component behavior. A marketing page should not acquire product shell chrome simply because Carbon is in use. An approved product brand can override generic values through semantic roles; see [color authority](references/color-and-brand.md).

## Implementation and verification

1. Use the installed component system first. The bundled CSS is an optional standalone prototype fallback, limited to White and Gray 100. Read [asset scope](references/asset-scope.md) before using it; it is not a JavaScript component library or a four-theme implementation.
2. Compose with the 2x Grid, named type styles, spacing tokens, semantic colors, and the applicable component's anatomy. Use component-specific corner, size, and focus treatments rather than global styling absolutes. Trace authored color rules to semantic roles, including interaction states; see the [worked example](references/semantic-token-example.md).
3. Keep a clear page-level primary action; a focused modal, panel, or task may have its own primary while active. Repeated sections do not each need a primary button. See [component selection](references/components-preview.md).
4. Design the relevant no-data, no-results, loading, failure, partial/overflow, submitting, and success states. For a table's no-data state, replace the empty table including headers/footer; preserve useful surrounding actions. Keep search/filter context in a no-results state. See [patterns](references/patterns.md).
5. Follow [accessibility](references/accessibility.md) for names, control states, keyboard/focus, and evidence. Disabled is not hidden. A search field still needs an accessible name when its visible label is omitted.
6. Preserve supported Carbon microinteractions. Choose motion by purpose and event semantics, keep feedback immediate, and honor reduced-motion preferences. Frequent use and keyboard input do not impose a blanket animation ban. See [motion](references/motion.md).
7. Test what the task changes: actual interactions, required states, responsive behavior, supported themes, and relevant contrast pairs. The contrast checker's built-in presets are diagnostics, not product acceptance tests. Report checks run and results; keep untested behavior explicit.
8. Review the result against the task and [taste rubric](references/taste.md), including [source review](references/design-engineering.md#source-review-for-authored-color). Record meaningful tradeoffs, evidence, and the next corrective action if work remains.

## Reference routing

| Reference | Use when |
|---|---|
| [Components](references/components-preview.md), [index](references/components-preview-index.md), [coverage](references/components-preview-coverage.md) | Selecting a core component; locating its variants, specifications, accessibility, and source sections |
| [Composition](references/composition.md) | Choosing page, modal, panel, tearsheet, table, or dashboard structure; IBM Products |
| [Patterns](references/patterns.md), [coverage](references/patterns-coverage.md) | Notifications, forms, search, filtering, loading, empty states, disclosure |
| [Accessibility](references/accessibility.md) | Accessible names, disabled/read-only states, keyboard, focus, and verification limits |
| [2x Grid](references/2x-grid.md) | Geometry, breakpoints, grid behaviors, guideline subcategories, or implementation |
| [Tokens](references/tokens.md), [color and brand](references/color-and-brand.md) | Semantic values, contrast traps, approved brand mappings |
| [Themes](references/themes.md) | White, Gray 10, Gray 90, Gray 100, nested layers, or user/system preferences |
| [Spacing](references/spacing.md) | Fixed token values, responsive composition, Stack/gap, component spacing |
| [Typography](references/typography.md), [typeface](references/typeface.md), [coverage](references/typeface-coverage.md) | Productive/expressive type, Plex families, multilingual text, fonts |
| [Icons and pictograms](references/icons-and-pictograms.md) | Library symbols, sizes, foregrounds, optical alignment, clearance |
| [Motion](references/motion.md) | Productive/expressive movement, easing, duration, choreography, reduced motion |
| [UI shell](references/ui-shell.md) | Product navigation, headers, panels, and responsive shell behavior |
| [Status and data visualization](references/status-and-dataviz.md) | Status meaning, non-color signals, marks, charts, technical diagrams |
| [Senior workflow](references/senior-workflow.md), [taste](references/taste.md) | Screen/flow design, density, judgment, critique |
| [Visual casebook](references/visual-casebook.md) | Annotated before/after table, form, dashboard, settings and expressive composition; task-dependent tradeoffs |
| [Design engineering](references/design-engineering.md) | Browser behavior, interruption/recovery, implementation polish |
| [Carbon Next](references/carbon-next.md) | Roadmap, preview/release boundaries, flags, future versions |
| [Asset scope](references/asset-scope.md) | Optional standalone CSS fallback and its limits |
| [Source map](references/source-map.json) | Source authority, category/subcategory coverage, freshness, unresolved gaps |
| [Evaluation](references/evaluation.md), [history](references/evaluation-history.md) | Preparing, running, grading, comparing evaluations, or interpreting existing evidence |

IBM logos, photography, illustration, app icons, and creative animation are not yet fully covered by local playbooks. Follow the relevant official route in the source map and disclose that boundary; do not generalize productive UI rules to every IBM visual expression.
