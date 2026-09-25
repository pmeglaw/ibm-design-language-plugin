---
name: review-product-experience
description: Review and improve a product's information architecture, UI, and UX using IBM Design Language and the installed Carbon version. Use for screen, cross-view, navigation, task-flow, or responsive audits that need evidence, alternatives, implementation, and verification.
---

# Review product experience

Use this focused review workflow with the sibling [IBM Design Language skill](../ibm-design-language/SKILL.md). Treat its source hierarchy, installed Carbon version, product brand, and accessibility guidance as authoritative. Its [senior workflow](../ibm-design-language/references/senior-workflow.md) and [taste rubric](../ibm-design-language/references/taste.md) supply decision and craft guidance; neither is proof of product quality.

## Frame the review

1. Identify the requested views, the person and primary task for each, and an observable success criterion. Record known product constraints, direct observations, and assumptions separately. Do not import another product's requirements.
2. Inspect the current implementation and rendered interface when accessible. Inventory navigation, objects, labels, data scale, permissions, and state transitions. Record viewport, theme, content, and user role for each observation. A source path establishes implementation; a screenshot establishes appearance; neither establishes successful use.
3. Follow the main task from entry to completion and recovery. Check whether people can locate the correct destination, understand the next action, maintain context, detect system status, and undo or recover. For cross-view work, enumerate every requested view and use the [cross-view consistency matrix](../ibm-design-language/references/taste.md#cross-view-consistency). Mark inaccessible views and states uninspected.

## Decide and improve

4. Rank findings by task impact and evidence. Separate information architecture (where tasks and objects live), interaction (what happens), and presentation (what the person sees); explain dependencies between them. Check terminology, navigation depth, search and filters, primary action scope, density by region, content hierarchy, and responsive reading order. Use the applicable [composition](../ibm-design-language/references/composition.md), [patterns](../ibm-design-language/references/patterns.md), and [accessibility](../ibm-design-language/references/accessibility.md) references for component decisions.
5. Compare the current experience with one plausible alternative under matching content, viewport, theme, role, and state. Explain which task each serves, its costs, and what evidence would change the choice. Carbon specifications are requirements only where they apply to the installed version; label craft judgments as heuristics.
6. If implementation is requested, change the smallest coherent flow that addresses the strongest finding. Preserve approved brand and existing behavior unless the task requires a change. Cover relevant first-run, no-results, loading, partial/overflow, failure, conflict, submitting, and success states. Avoid claiming a state is covered solely because a component exists in source.

## Verify and report

7. Exercise the changed task in the rendered product at desktop and narrow widths, with realistic and long content. Check mouse and keyboard paths, focus order and visibility, accessible names, status feedback, and recovery. Use assistive technology only when actually available; otherwise mark it unverified. Capture screenshots for visual claims and state their conditions.
8. Review all material dimensions of the [taste rubric](../ibm-design-language/references/taste.md#rubric). Report changes, a compact pass/fail/unverified ledger with evidence, tradeoffs, remaining blockers, and the next best step. Do not turn a proposed test, static source inspection, or synthetic test into a usability or accessibility pass.
