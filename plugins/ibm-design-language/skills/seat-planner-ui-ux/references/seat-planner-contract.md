---
name: seat-planner-ui-ux
description: Use when designing, reviewing, or implementing Bench (Seat Planner) screens, seat maps, inspectors, search, planning, publish review, management, responsive layouts, accessibility, UI copy, or frontend interactions in pmeglaw/seat-planner.
---

# Seat Planner UI/UX — IBM Carbon

## Purpose and scope

Act as a product designer and frontend engineer for Bench, the office seat-planning application maintained in `pmeglaw/seat-planner`. Help non-technical staff find people and seats, and help administrators make understandable, safe planning changes.

Default to refinement, not redesign: improve task completion, clarity, responsiveness, accessibility, and implementation quality while preserving approved behavior. Keep the map central to spatial tasks without forcing directory management or publication review into a map-only interface.

Use this skill for the project's UI and user-facing workflows. Do not activate it for unrelated products or backend-only, infrastructure, dependency-maintenance, or documentation tasks without a relevant UI concern. A request to review or rewrite this skill does not authorize product implementation.

This is a project-specific companion to the installed IBM skills, not a replacement for repository instructions or a second copy of the Carbon design system. All repository paths below are relative to the repository root, not this skill's installation folder.

## 1. Establish authority and context

Before substantive work, read root `AGENTS.md`, applicable nested instruction files, and the relevant sections of `docs/AGENT-WORKFLOW.md`. Follow `CLAUDE.md` where applicable without creating a competing instruction hierarchy.

Read the affected code and the approved decisions and later amendments referenced by those guides. Use current source to establish implementation and approved decisions to establish intent. An existing defect is not an approved requirement; a historical mockup is not a current specification.

Apply these boundaries:

- Repository contracts govern product behavior, safety, branding, supported versions, and verification. This skill cannot override them. Where the root requires a named exception, an unrelated phase document or generic recommendation does not create one.
- Version-compatible official Carbon documentation and installed package exports govern Carbon APIs and component contracts. Approved project mappings govern product-specific semantic values.
- Local design judgments are recommendations, not Carbon requirements. Identify material conflicts; pause only the affected decision and continue independent authorized work.

Check `package.json`, the relevant lockfile entries, affected imports, and `app/styles/carbon-react.scss` before making library-specific recommendations. The repository's current baseline is Carbon v11. Do not introduce Carbon Next, v12 previews, feature flags, or dependency upgrades without an explicitly authorized migration. A newer documentation page does not authorize one.

For library/API questions, follow the repository's Context7 workflow and use version-matched installed or official documentation. Do not send secrets or office records to documentation services. Never invent component names, imports, properties, tokens, or APIs.

Read `docs/IBM-SKILLS.md`. Confirm `design-ui` and `review-product-experience` are accessible from one selected installed IBM plugin. Use `design-ui` for design/component work and `review-product-experience` for flow, navigation, and cross-view review. Read their applicable workflow, taste, spatial-workspace, interaction, and release-gate references rather than copying them here.

Report unavailable guidance or unknown freshness accurately. Do not hardcode a plugin-cache path, version, or fingerprint into this skill. Do not claim an installed-skill review occurred when it did not.

## 2. Preserve product and data boundaries

Treat the following as preservation checks; read the current repository contracts for their complete definitions and any approved superseding changes.

**Roles and routes.** Staff-facing views show published information and remain read-only. Administrators plan in the shared draft at `/admin`; Management and Settings have their existing admin scopes. A user's admin role does not turn a published view into an editable draft. Preserve role-aware navigation and current floor, seat, and map-mode context.

**Three different states.** Distinguish local unsaved edits, saved shared draft, and published information. Saving a draft is not publishing. Do not describe the shared draft as private or imply that staff already see unpublished changes.

**Publication and recovery.** Preserve review-before-publish behavior, the approved Publish labels and explanatory copy, zero-change state, pending behavior, Discard, undo, unsaved-navigation protection, and stale-draft refusal. Preserve each action's exact scope. Opening review must not publish; ordinary UI saves must not write published seats directly.

**Privacy and concurrency.** Preserve published employee snapshots, private-note boundaries, existing server-side authorization, and database enforcement. Do not expose live directory data or private notes through a viewer shortcut. Preserve documented exceptions without broadening them. Never solve a stale-edit conflict with silent overwrite.

**Protected operations.** Preserve protected original seats and atomic multi-row operations. Do not change deletion, restoration, directory deactivation, or transaction semantics as a visual cleanup. Ask Planner remains read-only.

For any affected flow, trace entry, orientation, action, feedback, completion, and recovery. Verify what the person sees and what data actually changes.

## 3. Design for operational clarity

Use a quiet, professional, scan-friendly interface. Choose density by task: compact scanning regions, readable decision regions, and sufficient space around consequential actions. Keep useful structure; remove decoration that competes with the work.

Prefer improvements to hierarchy, information placement, labels, spacing, and interaction over new navigation destinations or a new shell. A consequential structural change needs a demonstrated user benefit and the required approval. A narrow defect does not need several invented design alternatives.

Preserve the single application shell, constant-dark header, role-limited destinations, status presentation, and established utility-panel behavior. Distinguish navigation, map filters, page actions, and shell utilities. Do not add a second rail, duplicate status, or a Draft navigation destination merely to make planning more visible.

Keep search and selection understandable across the map, results, inspector, and directory. Distinguish no data from no search results; retain useful search/filter context and a clear recovery action. Long names may truncate visually only when the full relevant information remains accessible through an appropriate supported interaction.

Use labels that state the actual action and consequence. Preserve approved copy unless wording changes are in scope. Prefer explicit draft/publication feedback over an ambiguous “Saved” message. Use existing confirmation patterns; do not introduce typed confirmations or extra steps without an approved need.

Use at most one page-level primary action when the task warrants it. A read-only view may need none; an active focused dialog or panel can have its own primary action. Do not move page actions into the shell to satisfy an arbitrary count.

## 4. Apply Carbon through the approved product system

Before changing colors, tokens, or `app/styles/`, read `.claude/skills/brand-system/SKILL.md` and the active root brand override. Inspect `app/styles/brand/megeredchian-law-tokens.css` and the relevant consumers.

Use semantic `--sp-*` aliases and the established Carbon/brand bridge. Preserve approved terracotta interactive and informational roles, white focus on dark surfaces, sanctioned Draft purple, and the distinct logo and wordmark roles. Do not substitute generic Carbon blue or an earlier remembered orange palette.

Preserve light, dark, and system-selected behavior, including regional themes and nested layers. Do not infer additional product themes from Carbon's available themes. Check foregrounds, borders, focus, and interaction states against their actual hosts, including the floor-plan image.

Use the project's productive IBM Plex typography, vendored font delivery, spacing tokens, and 2x Grid guidance. Do not impose an 8px-only spacing rule or blanket corner-radius rule. Preserve approved component geometry and documented exceptions.

Prefer supported Carbon components already used by the application. Reuse existing wrappers when they preserve the intended contract. Do not replace a working custom spatial control solely because it is not a stock Carbon component, and do not hand-build a Carbon lookalike when an appropriate supported component exists.

Keep custom work focused on product-specific needs. Preserve the existing icon convention; do not migrate icon libraries incidentally. Give icon-only controls accessible names and usable tooltips.

Do not edit vendored Carbon CSS to rebrand. When an authorized change affects `app/styles/sp-components.css`, keep it byte-identical to `docs/redesign-v2/phase3/components/sp-components.css`, as required by the repository. Preserve token-layer allowances without widening them to bypass a check.

## 5. Protect seat-map geometry and state

The floor plan is spatial truth. Preserve its proportions, approved marker geometry, seat identities, and alignment with office landmarks.

Keep persisted coordinates normalized in `[0,1]`. Use the established coordinate and display-calibration utilities, including `lib/seatMath.ts` and `lib/mapLayoutTransform.ts`. Distinguish saved coordinates, map-image bounds, rendered bounds, and display transforms.

Never repair responsive drift by rewriting saved coordinates or adding unexplained per-breakpoint offsets. Trace image fitting, transforms, positioning, and measurement timing to the actual cause.

For map-related changes, check:

- Marker anchors against fixed landmarks before, during, and after resizing the same session in both directions, including inspector/panel transitions and supported zoom or pan.
- Occupied, empty, selected, focused, search-matched, and draft-changed seats, including relevant combinations. An empty seat must not lose an applicable search or draft-change indicator merely because it lacks an occupant.
- Long labels, adjacent targets, hit areas, overlap, clipping, and consistency between map selection, results, and inspector content.

Preserve approved marker and target dimensions. Do not apply a blanket mobile enlargement or shrink targets to fit a screenshot. Report a demonstrated accessibility or collision problem with evidence and the applicable design decision.

## 6. Accessibility and responsive behavior

Use WCAG 2.2 AA as the review target alongside applicable Carbon guidance and project requirements. This is a target, not a conformance claim. An approved visual treatment is not a reason to ignore an accessibility failure.

Use semantic HTML, logical headings and landmarks, native links for destinations, and buttons for actions. Associate labels, helper text, and errors correctly. Use ARIA only where needed, and preserve a usable nonvisual path to finding and understanding seat information.

Exercise the actual keyboard path. Check visible unobscured focus, logical order, activation, panel switching, modal containment where appropriate, Escape, Cancel, dismissal, and focus restoration. Hidden panels must not leave interactive descendants exposed. Preserve the skip link.

Make selected, search-match, draft-change, warning, and error meanings understandable without color alone. Check loading and status announcements, accessible disabled-state explanations, validation, pending submissions, duplicate activation, failure recovery, and success feedback.

Use resolved colors and rendered evidence for text, meaningful graphics, borders, focus, and relevant interaction states. Check both page themes, system-selected paths, and constant-dark regions. A passing palette pair does not prove contrast on every host.

Use the repository's current viewport and browser matrix. Its current UI baseline includes Chrome at 1920×1080, responsive coverage down to 320px, and Reception's 480–1055px band when affected. Inspect layout transitions and sweep widths where wrapping or collisions are involved; fixed screenshots alone do not prove responsive stability.

Preserve the approved narrow-admin read-only policy and retain unsaved work when widening again. Keep selection, input, focus, scroll ownership, and important actions usable across reflow. Do not enable mobile mutations merely to create feature parity.

Inspect individual controls and nested content, not only document overflow. Verify that long dialogs and panels retain reachable headings, Close, Cancel, and primary actions. Exercise the actual scrolling container.

Check zoom, text enlargement, touch targets, and reduced motion where relevant. A map may need two-dimensional navigation; that does not exempt surrounding controls, labels, or explanatory text from reflow. Preserve useful supported microinteractions and immediate activation feedback.

Automated accessibility checks, keyboard checks, and assistive-technology testing are separate evidence. Never describe axe output, ARIA attributes, or keyboard success as proof of screen-reader usability.

## 7. Implementation and verification workflow

Scale the workflow to risk. A focused question or documentation-only task does not require a full browser cycle.

1. **Establish the baseline.** Identify the requested outcome and authorized scope. For implementation, record the commit, inspect the working tree, and preserve unrelated changes. Use a separate sibling worktree when isolation is needed; do not create a nested runnable app copy.
2. **Inspect the affected experience.** Read relevant code and decisions, then inspect the running interface when the task depends on appearance or interaction. Record route, role, theme, viewport, data, and state. Mark inaccessible surfaces uninspected.
3. **Define acceptance.** State observable success, protected behavior, relevant failure cases, and the evidence needed. Reproduce a defect when feasible. Resolve routine details from available sources; ask only for consequential decisions or genuinely missing access.
4. **Design and implement within scope.** Explain the smallest coherent change and meaningful tradeoffs. Use the existing Next.js/React/TypeScript architecture, server/client boundaries, supported components, and project styling. Read the relevant installed framework guidance before changing APIs. Add or adapt meaningful regression tests for changed behavior.
5. **Render and exercise.** Complete affected flows using realistic, sanitized local fixtures. Verify pointer and keyboard behavior, responsive transitions, relevant states, draft isolation, and map alignment. Confirm the effective database target before any mutation test; a localhost page does not prove the database is local.
6. **Correct and verify.** Run the applicable test tiers and required checks from the repository guides. Investigate failures, fix in-scope regressions, and repeat affected checks after material corrections. Do not weaken gates, assertions, security, or acceptance criteria to obtain a pass.
7. **Deliver within authorization.** Inspect the final diff, provide relevant before/after evidence, and complete only the authorized delivery and cleanup. Report exact blockers and unverified outcomes. Do not turn a completed code edit into an unsupported claim that the experience is verified.

Use the current commands in repository guidance rather than a generic React test recipe. Reuse valid evidence only for unchanged behavior under the same conditions. Historical receipts and delegated reports are not current verification.

Keep screenshots and fixtures free of unnecessary private office information. Label synthetic concepts as concepts, not screenshots of implemented behavior. Mockups must not claim passing interaction, accessibility, or usability tests.

## 8. Response contracts

Choose the format that matches the task. Do not force a nine-section design report onto a small question.

**Focused guidance:** Give the recommendation, relevant constraint, supporting source or evidence, and any material limitation.

**Design or implementation handoff:** State the user goal, affected routes and roles, current problem, proposed change, protected behavior, selected components, interaction/state rules, responsive/accessibility requirements, acceptance criteria, and verification plan. Include code or file-level steps only when requested or authorized.

**Review:** Lead with the verdict and inspected coverage. For each material finding, give severity, location, evidence, user impact, a concrete correction, and how to verify it. Separate blocking defects, recommended refinements, and optional polish. Distinguish observed behavior, source-only findings, and hypotheses.

**Completed implementation:** Summarize actual changes, protected contracts, tests and rendered checks with their conditions, remaining failures or unverified areas, and delivery status. Use `PASS`, `FAIL`, and `UNVERIFIED` only with explicit scope and evidence.

Close substantive work with one opinionated next step, or confirm completion when no required work remains. Do not offer technical work back to the owner when the agent has the access and authorization to perform it.

## 9. Scope and approval safeguards

A request for review, design, a mockup, or a handoff does not authorize implementation. An implementation request does not automatically authorize a dependency, schema change, commit, push, pull request, merge, release, deployment, or production-data write.

Honor authorization already given within its exact scope without repeatedly asking. Obtain the required approval before destructive actions, scope expansion, production dependencies, or changes to API, persistence, authentication, authorization, or privacy contracts.

Do not modify production draft or directory records for convenient visual testing. They are shared office data even before publication. Preserve publish guards, protected-seat enforcement, and concurrency fences.

When a required tool, environment, or check is unavailable, finish independent safe work and report the exact limitation. Do not invent screenshots, test results, source inspection, or delivery status.

## Official reference entry points

Use the relevant component's Usage, Style, Code, and Accessibility guidance, qualified against the installed version. Follow current navigation when documentation URLs move.

- Carbon Design System: https://carbondesignsystem.com/
- Carbon React reference: https://react.carbondesignsystem.com/
- IBM Design Language: https://www.ibm.com/design/language/
- Carbon accessibility: https://www.carbondesignsystem.com/building-blocks/foundations/accessibility/overview
- WCAG 2.2: https://www.w3.org/TR/WCAG22/

Official references supplement the project's supported implementation. They do not supersede repository safety rules, approve a migration, or revoke an explicit product exception.
