---
name: review-product-experience
description: Review and improve a product's information architecture, UI, and UX using IBM Design Language and the installed Carbon version. Use for screen, cross-view, navigation, task-flow, or responsive audits that need evidence, alternatives, implementation, and verification.
---

# Review product experience

Use this focused review workflow with the sibling [IBM Design Language skill](../design-ui/SKILL.md). Treat its source hierarchy, installed Carbon version, product brand, and accessibility guidance as authoritative. Its [senior workflow](../design-ui/references/senior-workflow.md) and [taste rubric](../design-ui/references/taste.md) supply decision and craft guidance; neither is proof of product quality.

## Frame the review

1. Identify the requested views, the person and primary task for each, and an observable success criterion. Record known product constraints, direct observations, and assumptions separately. Do not import another product's requirements.
2. Inspect the current implementation and rendered interface when accessible. Inventory navigation, objects, labels, data scale, permissions, and state transitions. Record viewport, theme, content, and user role for each observation. A source path establishes implementation; a screenshot establishes appearance; neither establishes successful use.
3. Follow the main task from entry to completion and recovery. Check whether people can locate the correct destination, understand the next action, maintain context, detect system status, and undo or recover. For cross-view work, enumerate every requested view and use the [cross-view consistency matrix](../design-ui/references/taste.md#cross-view-consistency). Mark inaccessible views and states uninspected.

## Preserve the requested design deliverable

Record the requested outcome and surfaces at intake. For a design critique or redesign, deliver the current-versus-recommended composition and rationale for each requested surface, plus a visual proposal when requested. A justified recommendation to retain the current design is valid; do not invent a redesign or an unrequested mockup.

Record discovered bugs separately and explain whether each would survive, be addressed by, or potentially be superseded by the recommended direction. A quick repair, nearly finished patch, urgent meeting or green tests does not replace the design deliverable. Permission to make local improvements does not cancel that deliverable.

If a defect blocks inspection, name the specific blocked observation, continue independent design work, and use a safe workaround only within existing authority. Report partial coverage when necessary; do not substitute a repair or claim unobserved visual evidence.

A switch to repair-only work needs the owner's scoped choice. Reuse valid prior authorization for that action and scope without asking again. Honor an explicitly scoped repair request without forcing a new design exercise. Report the requested design outcome first, then separate defects, their disposition and remaining evidence gaps.

Separate response-behavior scenarios are in [evaluation cases](evaluation-cases.json). Their presence is not an executed evaluation or product pass.

## Decide and improve

4. Rank findings by task impact and evidence. Separate information architecture (where tasks and objects live), interaction (what happens), and presentation (what the person sees); explain dependencies between them. Check terminology, navigation depth, search and filters, primary action scope, density by region, content hierarchy, and responsive reading order. Use the applicable [composition](../design-ui/references/composition.md), [patterns](../design-ui/references/patterns.md), and [accessibility](../design-ui/references/accessibility.md) references for component decisions.
5. For a consequential design choice, compare the current experience with one plausible alternative under matching content, viewport, theme, role, and state. A narrow defect audit can establish the expected behavior from the applicable contract without generating an alternative design. Explain which task each serves, its costs, and what evidence would change the choice. Carbon specifications are requirements only where they apply to the installed version; label craft judgments as heuristics.
6. If implementation is requested, read [practical implementation review](../design-ui/references/practical-implementation-review.md) and implement the selected design direction or explicitly authorized correction within its approved scope. Keep a review-only request read-only; a repair proposal is not authorization to change the product. Preserve approved brand and existing behavior unless the task requires a change. Cover relevant first-run, no-results, loading, partial/overflow, failure, conflict, submitting, and success states. Avoid claiming a state is covered solely because a component exists in source.

## Verify and report

7. Exercise the reviewed or changed task in the rendered product at the product's required desktop and narrow widths, with realistic and long content. Include relevant open/expanded and pending/error/success states, supported themes, and required directions; inspect element bounds as well as document overflow. Check mouse and keyboard paths, focus order and visibility, accessible names, status feedback, and recovery. Use assistive technology only when actually available; otherwise mark it unverified. Capture screenshots for visual claims and state their conditions.
8. Review all material dimensions of the [taste rubric](../design-ui/references/taste.md#rubric). Report changes, a compact pass/fail/unverified ledger with evidence, tradeoffs, remaining blockers, and the next best step. Do not turn a proposed test, static source inspection, or synthetic test into a usability or accessibility pass.
