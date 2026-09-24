# Senior workflow — from a brief to a shipped screen

Read this when the request is "design X" rather than "style X": a new screen or flow from a one-line brief, a redesign, or any time two principles conflict and no table in this skill settles it.

## Contents

- What senior means here
- The sequence — never start in visuals
- Layout archetypes
- When principles conflict — the procedure
- The hard choices
- The decision log
- Outcome evidence
- Borrowing IBM's process when working alone
- Enterprise decisions and the senior default
- Worked examples
- Pre-release passes

## What senior means here

A mid-level designer executes the ticket. A senior owns the outcome — reframes the brief when a form is the wrong answer, cuts scope to protect the primary task, designs the unhappy paths before the happy one, and can explain every decision along with the alternatives rejected. The ambiguity is the job: as the problem gets vaguer, you go looking for what's actually being asked.

## The sequence — never start in visuals

1. **Job to be done.** What is the *one* thing the user came here to do? Everything else is secondary.
2. **Data first.** What objects exist, how they relate, and how many there are. Cardinality picks the layout: one record is a detail page; hundreds is a table; a handful of unlike things might be cards.
3. **Clear page-level primary emphasis.** Use at most one page-level primary action when the task warrants it; read-only or monitoring views may need none; a focused modal, panel, or task can have its own primary while active. See the component selection guidance.
4. **Layout archetype.** Choose from the table below.
5. **All states before styling.** Empty (first-run, no-results, error, deleted), loading, error, partial, overflow, success. Carbon has patterns for empty and loading because that's where enterprise apps fail.
6. **Unhappy paths.** Validation, permission denied, long-running work, network failure, destructive-action recovery.
7. **Progressive disclosure.** Primary visible, secondary in overflow, advanced on request.
8. **Composition on the grid.**
9. **Polish, budgeted.** The last 10% goes to the primary path and the highest-frequency interactions. The rest ships at good enough.

A design engineer's variant is to skip mockups and prototype in code from step 4, because interaction quality can only be judged in motion. Either way the order of decisions is the same.

## Outcome evidence

Before choosing a visual direction, write down what a person should be able to do, the conditions under which they must do it, and what would show that the design helped. For a product task, use an observable signal such as successful completion, fewer corrections, clear recovery after failure, or an unambiguous next action. The signal is a criterion to test, not a measured result until someone observes it.

Separate three kinds of input: **known constraints** from the product or approved design record; **observations** from users, existing behavior, or rendered screens; and **assumptions** that still need validation. A screenshot can support a hierarchy or composition finding, but cannot establish task success, keyboard behavior, or user comprehension. Source code can establish a possible behavior path, but a browser check is needed to confirm the rendered result.

Choose the smallest useful comparison for a consequential decision: the current experience and one plausible alternative, viewed with the same content, viewport, theme, and task state. Note what each option improves and costs. If the decision relies on an assumption, state what evidence would change it. This makes a design recommendation reviewable without claiming that a polished image proves usability.

## Layout archetypes

| Archetype | Use when | Built from |
|---|---|---|
| App shell | Any product with more than one section | UI shell header + left panel (`ui-shell.md`) |
| Index page — filters + data table | Browsing and acting on many records | PageHeader, DataTable or Datagrid, toolbar, batch actions, pagination |
| List–detail split | Triage; users move between items quickly | Two panes, or a slide-in side panel that pushes content |
| Record page with tabs | One object, several facets | PageHeader with tabs; sticky tabs on scroll |
| Overview / dashboard | At-a-glance status, entry point | Grid tiles with designated aspect ratios, Carbon Charts, feed column |
| Create / edit flow | Making or changing a resource | Container chosen from `composition.md` |
| Settings | Infrequent configuration | Single-column forms grouped by section |
| First-run / onboarding | Activation | Educational empty state; coach marks sparingly |
| Search results | Discovery across a large set | Search + faceted filtering, result count always shown |
| Activity / notifications | Async status and history | Notifications panel, newest first |

## When principles conflict — the procedure

Seniors don't rank rules once and forever; they run a procedure and write down the result.

1. Name the user's **primary task** on this screen.
2. Name the **outcome** the product needs from it.
3. Choose the principle that **serves both**.
4. **Write the trade-off** so it can be revisited (see decision log).

The recurring conflicts and their usual resolutions:

| Conflict | Resolution |
|---|---|
| Density vs. whitespace | Resolve by *zone*, not by screen. Dense where the user scans (the table); calm where the user decides (toolbar, filters, side panel). Undifferentiated density is the problem, not density. |
| Consistency vs. the better local solution | Default to the system — it compounds across every screen. Deviate only with evidence that the task suffers, and record it as a purposeful deviation. |
| Speed vs. polish | Budget polish by frequency × visibility. Frequent actions need immediate feedback and efficient productive motion; an occasional onboarding moment can justify expressive choreography. |
| Discoverability vs. simplicity | Progressive disclosure: primary visible, secondary in an overflow menu, advanced behind a "show all options" toggle. |
| System compliance vs. product need | Compliance by default; product need wins with evidence, and leaves an audit trail. |

## The hard choices

- **Modal, side panel, tearsheet, page, or inline** — the container guide in `composition.md`. The short version: modal only when it's tiny; side panel when the page behind it still matters; tearsheet when it's a real task with steps; full page only when nothing works until it's done.
- **Single or multi-column form** — single column by default; it gives one reading path. Two columns only for short paired fields (city / postcode; start / end).
- **Tabs, accordion, or separate pages** — tabs for peer facets of one object; accordion for long, sequential, mostly-collapsed content; separate pages when each section is its own task with its own URL and permission.
- **Table or cards** — table when users compare across a consistent set of attributes and scan many rows; cards when items are few, unlike, or image-led.

## The decision log

Write one paragraph per screen. It is the artifact that most reliably separates senior work.

```
Screen: <name>
Problem: <what the user is trying to do, in their words>
Primary task: <one thing>
Options considered: <two or three, with a sentence each>
Choice: <what and why it serves task + outcome>
Trade-off: <what got worse, deliberately>
Would change if: <the evidence that reopens this>
```

## Borrowing IBM's process when working alone

Enterprise Design Thinking scales down cleanly:

- **One Hill per project**, written as *Who / What / Wow*: who is enabled, what they can now do, what makes it remarkable. Keep it to an outcome, never a feature list. Test every screen against it.
- **Playbacks.** Narrate the flow aloud as the user's story before you build it and again before you ship. Misalignment shows up in the telling.
- **One sponsor user.** A real person who does this job, for an hour a month. One sponsor user per Hill.
- **The Loop.** Observe, reflect, make — in tight increments. Small bets that can fail cheaply.

## Enterprise decisions and the senior default

| Decision | Default |
|---|---|
| Navigation | Left panel past five secondary items; never three tiers; breadcrumbs on deep or full-page flows; nav reflects the domain, not the org chart |
| Permissions | Preserve information the user may see; distinguish read-only values, temporarily disabled actions, and hidden content using accessibility.md |
| Bulk actions | Batch bar appears on row selection, in the toolbar |
| Destructive actions | Undo for reversible; confirm for irreversible; typed confirmation where the action pattern and consequences warrant it (patterns.md) |
| Long-running work | Optimistic where safe; skeleton on load; explicit submitting state; success or error notification; screen reader told when busy or failed |
| Forms | Single column; validate on blur or submit, never per keystroke; mark the minority (required or optional); smart defaults |
| Search & filtering | Faceted batch filters for multi-dimension sets; chips with clear-all; saved views for recurring queries; result count always, zero included |
| Responsive | Desktop-first for tools; header collapses to hamburger at narrow widths; the Carbon grid reads the viewport, not the container |
| Internationalization | Budget 30–50% text expansion; the left nav tolerates it better than the header |
| Pagination | Pagination when users need addressable positions; infinite scroll or virtualization when they don't |
| Onboarding | Educational empty state for a primary resource (show what populated looks like); basic empty state for secondary ones |
| Interruptions | Match disruption to urgency: modal for critical only, toast for non-blocking, inline for contextual |

## Worked examples

### Index page — hundreds of records, filters, bulk actions, create

*Job:* find and act on specific records; occasionally create one. *Data:* one object type, hundreds to thousands of rows, six to eight meaningful attributes, actionable singly and in bulk. Cardinality says table.

*Layout:* shell → PageHeader (title, breadcrumb, one primary "New [asset]" button) → full-width table with toolbar above.

*Density:* compact rows — the task is scanning. The toolbar and any detail panel stay calm. That's the density conflict resolved by zone.

*Components:* sortable headers; multi-select checkboxes driving batch actions in the toolbar; expandable rows for secondary detail instead of more columns; advanced pagination because positions matter (switch to virtualization only if they don't). Filtering as a batch panel with chips and clear-all, since selections span categories. Row hover on.

*Create:* one or two fields → modal; medium with page context → side panel; multi-step → wide tearsheet with the progress rail. Follow the selected variant’s dismissal contract; Next becomes Create on the last step. Field count alone does not determine the container.

*States:* first-run educational empty state replacing the empty table and its headers/footer, with a useful surrounding CTA and no competing primary; a distinct no-results state that keeps the filters; skeleton rows; inline error with retry; truncation with tooltip and tag overflow.

*Polish:* preserve efficient productive state feedback and reduced-motion behavior; follow the installed table variant for selection and keyboard navigation instead of adding a grid interaction to every table.

### Overview dashboard — KPI tiles, charts, activity

*Job:* assess status and decide where to drill in. A presentation dashboard, not an exploration one.

*Hierarchy:* prioritize data by importance, then give the most important the highest contrast and the largest area, top-left. Everything else steps down.

*Charts:* maximize data ink — drop gridlines and chrome that don't aid reading; label series directly; no legend for a single category; titles that state the insight. One chart per decision; if two tell the same story, cut one.

*Grid:* KPI tiles as same-size fixed-ratio tiles (2:1), width measured to columns; trend charts at 16:9 below; activity feed in a four-column rail.

*Leave out:* vanity metrics, redundant legends, animated counters on numbers that refresh often.

*States:* skeleton tiles; per-tile error so one failed query doesn't blank the page; a "last updated" timestamp for trust.

### Complex create flow — four sections, one interactive step

*Container:* not inline (too complex); not a modal (this sustained multi-section task needs more room and orientation); not a side panel (page context isn't needed); a narrow tearsheet has no progress indicator and this flow benefits from one; a full page is also valid if the task needs a dedicated location or more room. So: **wide tearsheet** with the vertical progress rail, "show all options" for power users.

*Form:* single column per step, section headers, smart defaults, room for the interactive step.

*Validation:* on blur; Next disabled until the step is valid; errors at the field and marked on the step in the rail.

*Exit:* define the chosen variant’s close, Escape and Cancel behavior consistently; protect meaningful unsaved work; warn before turning off advanced options if it discards input. On Create: submitting state, then open the new object or show a success banner; error as a notification with the form preserved.

## Pre-release passes

Run these as separate passes; combining them is how things get missed.

1. **Rubric crit** against `taste.md`, top-down.
2. **State coverage** — every screen has empty, loading, error, partial, overflow, success.
3. **Keyboard** — full path with the mouse unplugged; skip link, landmarks, arrow keys on grids, Escape closes.
4. **Screen reader** — dynamic content announced; icon-only controls named; disabled versus read-only correct.
5. **Responsive** — each breakpoint, not just the one you designed at.
6. **Copy** — verbs on buttons, actionable errors, sentence case, no jargon in titles.
7. **Contrast** — check actual resolved foreground/background pairs for supported surfaces and states; built-in presets are diagnostics.
8. **Pre-mortem** — "It's launch day and this screen failed; why?" Usually surfaces a missing state.

Use a small, relevant user test when access permits, then continue testing if consequential uncertainty remains. Do not treat a fixed participant count as proof of usability.
