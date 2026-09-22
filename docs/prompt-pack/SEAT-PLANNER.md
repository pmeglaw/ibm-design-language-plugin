# Seat Planner prompts

Select the IBM Design Language plugin and the brand-system skill when available. Open the intended Seat Planner checkout; do not run these against an unrelated project.

## Implement a scoped change

Replace the three opening placeholders, then paste the entire prompt.

```text
Use the IBM Design Language plugin and Seat Planner brand-system guidance to implement:

Feature/change: [specific change]
Affected routes/components: [scope]
Acceptance criteria: [observable outcomes]

Work in the selected Seat Planner checkout. First read AGENTS.md, the current implementation, and the applicable design records under docs/redesign-v2/, including relevant owner decisions and dated Phase 5 amendments. State which plugin and brand guidance loaded. If a reference path is stale, locate the current equivalent and disclose the mismatch.

Follow the approved product design authority. Preserve semantic --sp-* tokens, approved terracotta interaction roles, theme-specific dark roles, and Draft purple. Do not substitute generic IBM blue or treat Carbon preview documentation as permission for a framework migration. Check installed/vendored versions before choosing APIs. Keep runtime and Phase 3 sp-components.css byte-identical when either is changed.

Compare affected views with sibling screens before implementing. Establish shared invariants for page edges, headings, tabs, primary-action placement, list/table surfaces, row density, counts, and action alignment. Preserve justified differences in content width and available actions. Watch for horizontal movement caused by scrollbars and vertical movement caused by conditional controls.

Preserve draft/published isolation, server admin authorization, database access controls, and protected-seat rules. Use synthetic fixtures or the documented local test stack for mutation tests. Live preview/production review must remain read-only; do not edit people, seats, drafts, or published data. Ask me to sign in in the browser if necessary, never to paste credentials into chat.

Use a suitable non-default branch and preserve unrelated work. Make the smallest maintainable change. Read the repository's required workflow guides for the affected work.

Verification:
- Run typecheck and focused ESLint for changed TS/TSX, plus the relevant behavior/browser tests required by AGENTS.md.
- For token/brand changes, use the current repository's product contrast and resolved-token checks. Unused vendored palette diagnostics do not establish product contrast.
- Review rendered affected views at 1920x1080 in light and dark, 390px wide, and overflow at 320px. Check relevant intermediate breakpoints; include Reception's operational band if affected.
- Check explicit and system-selected themes where applicable; label browser simulation separately from physical-device or actual OS evidence.
- Compare sibling views at identical viewport/theme settings, with short and long content and settled loading/transitions. Cover applicable no-data/no-results, error/retry, disabled/read-only, keyboard/focus, and permission states.
- Use focused regression tests for the observed failure mechanisms, with retrying assertions for animated/asynchronous states. Do not weaken requirements to make tests pass.

Complete the authorized local implementation and validation. Do not commit, push, open a PR, merge, deploy, or mutate production data without explicit authorization. Report the diff, actual checks/results, remaining findings, unverified behavior, and any unrelated local changes you observed. Recommend a concrete next action for approval only when further work is needed; otherwise state that the local task is complete.
```

## Audit Management before changing it

This prompt is ready to paste without feature placeholders.

```text
Use the IBM Design Language plugin and Seat Planner brand-system guidance to perform a read-only cross-view audit of /admin/management: Employees, Departments, Zones, and Publish history.

Read AGENTS.md, the current implementation, relevant approved design records and Phase 5 amendments, and the plugin's critique/cross-view guidance. Confirm which guidance loaded. Use the current UI as evidence; do not assume historical defects still exist.

Inspect all four tabs at matching viewport sizes and themes. Compare page/title/tab left edges and vertical positions, scrollbar-induced movement, panel widths, Add-action placement, helper bands, list/table surfaces, header heights, count headings, numeric alignment, row density, and Rename/Edit/overflow actions. Explain task-driven differences rather than forcing every panel to be identical.

At 1920x1080, compare short option lists against the longer employee directory and loaded publish history. At 390px and 320px, check tab overflow, wrapped content, action placement, and unintended document scrolling. Include relevant breakpoint boundaries. Check light/dark and applicable system-theme behavior, keyboard tab navigation and focus, employee search/no-results/clear, and applicable loading/error states using safe fixtures where necessary.

Capture rendered evidence and measure suspicious geometry. Wait for loading and transitions to settle. Keep live review read-only; do not add, rename, delete, assign, publish, discard, or restore records. If authentication is needed, ask me to sign in directly in the browser and continue independent source review while waiting.

Return a view/state coverage matrix followed by prioritized findings with observed versus expected behavior, evidence, and concrete repairs. Separate confirmed defects, source findings, hypotheses, and untested states. Give no overall clean verdict if relevant coverage is missing. Finish with a scoped repair proposal for approval. Do not change code or configuration during this audit.
```
