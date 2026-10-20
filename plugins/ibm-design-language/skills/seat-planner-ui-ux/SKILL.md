---
name: seat-planner-ui-ux
description: Use when the user requests a Seat Planner or Bench UI/UX run, or asks to review, design, refine, or implement its seat map, search, inspector, publish review, management, responsive layout, accessibility, or interactions in pmeglaw/seat-planner. Also applies to follow-ups clearly continuing that UI/UX task. Not for unrelated products, general IBM questions, or repository-status and backend-only work.
---

# Seat Planner UI/UX Run

A dedicated Bench workflow inside `ibm-design-language`. Use this entrypoint for Seat Planner work; keep the sibling IBM skills general-purpose.

## Select the run mode

A bare request to "run UI/UX" defaults to a **read-only review**. Design, mockup, and handoff requests produce those deliverables without product edits. Implement only when the user explicitly requests or authorizes implementation. A follow-up approval applies only to the specific proposal presented, not every finding or a new redesign. Preserve existing authorization without asking again.

This run does not itself authorize commits, pushes, PRs, merges, releases, deployments, database changes, or production-data writes. Follow the product's current approval boundaries.

## Required intake

Read the target repository's current root `AGENTS.md`, applicable nested instructions, `docs/DESIGN-FOUNDATIONS.md`, and relevant sections of `docs/AGENT-WORKFLOW.md`, then the bundled [Seat Planner contract](references/seat-planner-contract.md) in full. Use the current task and design foundations for visual intent; earlier screen decisions are historical context. The bundled contract cannot override current repository authority. Repository paths in that reference are not plugin-relative paths.

Before declaring project evidence unavailable, inspect the supplied tool/resource catalog as well as the working directory. Read current project contracts through an available supplied document reader or repository path, respecting declared read bounds and paging through required text. An empty workspace or blocked shell does not establish that supplied source or contracts are absent. Report what was available and read, and what remains inaccessible; apply current approved repository authority when it supersedes the bundled baseline.

**Required companion skills:** use `design-ui` from this same IBM plugin, and `review-product-experience` for flow or cross-view reviews. Follow their relevant references and release-gate criteria. Never mix duplicate plugin copies or claim guidance was read when it was unavailable.

## Execute the run

1. **Frame.** Identify the person, task, requested surfaces, authorized mode, current commit, and observable success. Resolve discoverable facts by inspection. For a whole-app run, inventory existing routes and roles first; prioritize staff find/inspect and admin plan/review flows without pretending every state was inspected.
2. **Inspect.** Read affected source and inspect the actual rendered interface where accessible. Record route, role, viewport, theme, content, and state. Use sanitized local fixtures for mutation checks. No browser or login access means an explicitly source-only or limited review, not a visual pass.
3. **Evaluate.** Apply current repository design foundations, the bundled contract, IBM taste guidance, and relevant component contracts. Prioritize task completion, draft/published clarity, same-session map alignment, responsive containment, and keyboard/recovery behavior. Prefer refinement over structural redesign. Keep observed findings, source-supported findings, and hypotheses distinct.
4. **Act within mode.** For review, report corrections without editing. For authorized implementation, make the smallest coherent change, preserve protected behavior, and complete applicable product tests and rendered checks. Do not infer a new Carbon-version migration or production permission from a UI request.

   When a request includes a production-data action, state its exact scope and consequence in the user-facing response, including when refusing or deferring it: draft/directory edits affect shared office data before publish; publishing replaces viewers’ map and employee snapshot and can include unrelated draft changes. Explicitly state in the user-facing response, including refusals or deferrals, that proceeding with the named production-data action and scope requires specific owner authorization and the repository’s applicable current safeguards: verified target, admin/database enforcement, scope review, and stale-edit/concurrency checks. Check whether valid prior authorization already covers that action and scope; reuse it without asking again. Explicitly state the applicable current safeguards for any production action whose prior authorization remains valid. If prior assent is ambiguous between options or scopes, ask one focused question naming the unresolved choice; pause only dependent work and continue independent authorized work. If it is missing, pause that mutation; request approval only if production work is within the owner's permitted scope. Preserve target verification, admin/database enforcement, publish review and stale-edit safeguards; never enable an override just for QA. Continue independent read-only work and use a verified sanitized local target for routine mutation tests.

5. **Report.** Lead with the verdict and inspected coverage. Give prioritized findings with evidence, user impact, proposed correction, and verification. Include a scoped PASS/FAIL/UNVERIFIED ledger, exact delivery status, blockers, and one next step. An inspected screenshot, automated check, or fixture is not proof of screen-reader usability.

## Example invocation

"Run Seat Planner UI/UX on the viewer map and admin publish-review flow. Review only; prioritize map stability, responsive behavior, and accessibility."

Regression scenarios are in `evaluation-cases.json`; this is a scenario specification, not an input packet for the existing evaluator. Their presence is not an executed evaluation or evidence that this skill improves generated designs.
