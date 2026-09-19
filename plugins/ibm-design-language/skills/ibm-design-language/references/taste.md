# Taste: judge the result in context

These are craft heuristics, not additional Carbon specifications. Correct component selection does not guarantee a usable or polished screen.

## Establish the register

Productive tools favor predictable controls, scanning, and efficient density. Expressive pages can use fluid type, imagery, and more dramatic composition. Apply the approved product brand when one is in scope. Judge against the task rather than forcing every surface into an admin-console aesthetic.

## Rubric

| Dimension | Inspect |
|---|---|
| Hierarchy | Is the task clear? Is page-level primary emphasis unambiguous? Do grouping and placement reflect importance? |
| Layout and spacing | Is the grid coherent? Does proximity express relationships? Does density fit each region? Does reflow preserve reading order? |
| Typography | Do named styles form a readable hierarchy? Does the productive/expressive choice suit the region and actual content? |
| Color and imagery | Are semantic roles and brand authority preserved? Are actual surfaces legible? Does imagery communicate something useful? |
| Surfaces and depth | Do layers, corners, borders, and shadows follow the applicable component or visual treatment? Is unnecessary enclosure making scanning harder? |
| Interaction and detail | Are focus, activation, feedback, loading, empty/error, overflow, and recovery handled? Does motion preserve context without delaying work? |

Prioritize findings by task impact, but inspect every material dimension. A hierarchy problem is not a reason to miss a keyboard trap.

## Frequent problems

| Observation | Direction |
|---|---|
| Several page actions compete | Keep one page-level primary; focused flows may have their own primary while active |
| Everything looks equally important | Reduce secondary emphasis and assign space according to task importance |
| Paragraphs are hard to scan | Use start-aligned reading text and appropriate line length; account for writing direction |
| Every region has a border or shadow | Try space or layers; retain boundaries that carry meaning |
| Paired icons appear heavier than labels | Use the correct library glyph, size, and alignment; preserve the paired foreground contract |
| Excessive decorative movement distracts | Preserve productive feedback; reduce displacement or choreography that adds no information |
| Status depends on color alone | Add a legible non-color distinction appropriate to the indicator |
| An empty state merely fills space | Explain the condition and give a useful next action |
| A chart obscures the comparison | Select a clearer encoding; retain labels, axes, and legends needed to interpret it |
| A component looks correct but behaves incorrectly | Test the composed interaction, state model, and accessible semantics |

## Craft heuristics

- Keep related information close and make stronger separations between tasks.
- Prefer a coherent type hierarchy over arbitrary per-element sizes; use tabular figures where numbers align or change.
- For productive tools, begin with neutral surfaces and semantic emphasis. For expressive work, derive color and imagery from applicable IBM or product guidance.
- Preserve matching paired icon/text foregrounds where required; do not dim the icon to repair the wrong glyph or size.
- Keep focus and feedback clear. Frequently used controls can benefit from short productive motion.
- Test realistic data, long labels, and failure states before polishing ideal content.
- Treat grayscale and five-second checks as diagnostics rather than substitutes for task testing.

## Study a concrete comparison

Use one relevant [visual casebook](visual-casebook.md) study when a task benefits from a visible example. Explain why the choice fits the actual task and when an alternative would be better. The paired studies deliberately combine changes; they do not establish measured usability or model improvement.

## Cross-view consistency

When the requested scope includes sibling pages, tabs or repeated sections, review them as a set as well as individually. Enumerate the requested views; record each as inspected, partially inspected or uninspected, with the screenshot/runtime/source evidence used. Do not imply full coverage when a view or required state was inaccessible.

Compare matching views at the same viewport, theme, zoom and relevant state where possible. With supplied screenshots, identify mismatched capture conditions and qualify measurements. Use this compact checklist to complete the comparative pass; record material differences or justified variations in the matrix below, and mark unavailable evidence as unverified:

- **Geometry:** page gutters, content width, title/tab/panel alignment and shell movement. Report observed movement separately from suspected scrollbar or CSS causes.
- **Context area:** compare search, counts, summaries and helper text by both purpose and presentation: background surface, typography, spacing and alignment with the content below. Different purposes can justify different controls without explaining every visual difference.
- **Tables:** compare header/body surfaces, row density, typography and numeric header-to-value alignment.
- **Row actions:** explicitly compare visible forms such as icon-only editing, labeled Rename and overflow menus, including placement and emphasis. State whether the underlying tasks are equivalent or different before proposing a shared convention; different tasks need not use identical controls. Do not infer menu contents or accessible names from screenshots.
- **Primary actions:** assess scope, alignment and separation from the controlled content as described below.

Before giving the overall verdict, check that no applicable comparison was skipped merely because each screen looked reasonable in isolation. This is a coverage check, not a requirement to invent a defect in every category.

Assess each primary action in relation to the content it controls, not just its position across screenshots. Identify whether its scope is the page, active tab, section or row; compare its alignment and separation from that content. For example, a far-right Add button above a narrow left-aligned table may look detached even when every tab uses the same header position. Record whether that relationship is clear and why. When separation weakens the association, propose aligning the action with its content or placing it in the relevant toolbar. Preserve a page-level action when its scope and the established header hierarchy justify that placement; do not require every action to move beside a table or every table to expand. Treat this as a contextual design judgment, not a universal Carbon requirement or a fixed pixel-distance rule.

Record material differences in a compact matrix: views and evidence, shared element, observed difference, task impact, proposed correction or justification, and anything still unverified. This comparative pass is required for a multi-view consistency review even when each screen looks plausible on its own. A single-screen critique does not require unrelated navigation.

Consistency does not mean identical screens. Fewer columns may justify a narrower table; small lists may not need search; a read-only history may have no create action; different tasks may require different row actions. Explain the reason for a variation instead of inventing controls or forcing every table to full width. Shared visual conventions still need a coherent rationale. A count column heading should align with its values rather than the neighboring actions.

Separate screenshot observations, verified implementation causes and hypotheses. Screenshots alone cannot prove keyboard behavior, accessible names, contrast compliance or the prior review's execution path. Prioritize findings and state the limits of the overall verdict. If a previous review missed a finding, inspect its evidence before attributing the failure to a particular model, skill version or skipped step.

## Critique output

Use screenshots, runtime observation, and code as distinct evidence. State observation, task impact, and concrete correction. Separate official requirements from preferences. Preserve what works and name the highest-value correction.

For numeric evaluation, use [evaluation](evaluation.md). Scores require evidence; a screenshot cannot establish working behavior or accessibility.
