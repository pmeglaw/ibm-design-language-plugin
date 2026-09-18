# Visual casebook

Five author-created composition studies connect design choices to a task, a cost and an alternative. Use them to examine judgment; they are not official IBM exemplars, copy-ready product implementations or evidence that this skill improves model performance.

## Select one relevant case

| Case | Decision to examine |
|---|---|
| [Data table](casebook/table.md) | Reading edges, primary action, row density, local overflow |
| [Form](casebook/form.md) | Decision sequence, nearby help, entry versus review |
| [Dashboard](casebook/dashboard.md) | Actionable exception, comparable scale, supporting context |
| [Settings](casebook/settings.md) | Workspace scope, required values, coherent save model |
| [Expressive page](casebook/expressive.md) | Arrival typography, explanatory diagram, next action |

Read the matching case and inspect its images when visual composition matters. Do not load all five for a narrow component or API question.

## Apply the lesson

1. Establish the actual user's task, data and constraints before looking for an analogue.
2. Compare original and revised images. Use the three numbered notes to connect a visible choice to its intended task impact.
3. State which condition fits the current task and which does not. Test the alternative when the tradeoff matters.
4. Implement with the project's installed Carbon components, semantic roles and approved brand. Do not copy fictional content or the study's static controls into a working product.
5. Review the real rendered result and its relevant interactions. Similarity to an illustration is not an acceptance test.

The original versions deliberately expose composition problems. Several changes appear together, so these pairs cannot isolate a causal effect. A larger title, fewer borders or more whitespace is not automatically better.

## Files and scope

- [Offline comparison viewer](../assets/casebook/index.html): five studies, White/Gray 100 and desktop/mobile capture selectors; image and static-study links.
- [Structured annotations](../assets/casebook/cases.json): 15 decisions with tradeoffs, alternatives and five transfer exercises.
- assets/casebook/studies/: ten static HTML compositions.
- assets/casebook/screens/: 40 browser-rendered PNGs, 1440px and 390px wide, before/after in both themes.
- [Font provenance](../assets/casebook/font-sources.json) and [SIL Open Font License](../assets/casebook/fonts/license.txt): two bundled IBM Plex Sans weights from the pinned official IBM repository.

The viewer works locally without a server or external runtime requests. Open index.html in a browser; select a study, theme and capture size. PNGs are illustrative snapshots. The linked HTML exposes responsive composition, including the table's own scroll region.

The studies use a small author-defined semantic CSS palette inspired by Carbon White and Gray 100. They do not import Carbon React, cover Gray 10/90 or implement a theme-switching product. The settings switches, table actions and form fields are static illustrations. Interactive behavior, real browser zoom, assistive technology, forced colors, localization and additional content states require their own product verification.

## Keep teaching and evaluation separate

These examples are reference material supplied to the skill. They are not unseen evaluation cases; do not grade a model on recreating them and call it generalization. Prepare fresh, fixed cases outside this package when evaluating transfer. Keep original packets and results frozen. See [evaluation guidance](evaluation.md) and [evaluation history](evaluation-history.md).
