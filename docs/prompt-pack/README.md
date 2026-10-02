# IBM Design Language prompt pack

Copy-ready prompts for implementation or review. Originally prepared 2026-09-21 against 1.1.6; reviewed and refined 2026-09-30 against published 1.1.17 and its practical evidence. Check the current installed version and applicable project rules each time.

## Choose a prompt

- [Five general workflows](./WORKFLOWS.md): implement, audit sibling views, repair an audit, work from screenshots, and review before release.
- [Seat Planner prompt](./SEAT-PLANNER.md): a project-specific implementation prompt and a ready-to-use Management audit.

## Use in a new session

1. Open the intended project or checkout.
2. Select the IBM Design Language plugin/skill offered by the host. Codex exposes `ibm-design-language:design-ui` for design/build and `ibm-design-language:review-product-experience` for a flow or multi-view audit. For Seat Planner, load its project brand-system guidance too. Autocomplete syntax varies by host; a plain-text @name or an installed plugin alone does not prove that the intended entrypoint loaded.
3. Copy one fenced prompt and replace its bracketed placeholders. Attach any referenced screenshots or identify the actual report path.
4. The prompt asks the agent to confirm which guidance it loaded. If a plugin is unavailable, it should disclose that boundary.

For an existing interface, use **audit → approved repair → final review**. For a new feature, use **implement → final review**. The audit is read-only; implementation prompts authorize local work and validation. Git publication and production actions require a separate, specific approval.

The Seat Planner prompt is deliberately project-specific. General prompts do not import its branding or repository rules into other products. Prompts improve review discipline; they do not guarantee that every defect will be found.

This pack is companion repository documentation, outside the plugin and its release ZIPs. It does not install or modify the plugin. The published 1.1.17 generation still failed 320px containment/RTL assertions; these prompts do not establish that those defects or future generation reliability are solved.

## Product work versus plugin maintenance

The local-only defaults above apply to the product targeted by a prompt. They do
not describe the owner's separate release/install workflow for maintaining the
packaged plugin itself. See [authorization and documentation scope](../RELEASING.md#authorization-and-documentation-scope).
Companion prompt/documentation edits can be reviewed and published separately
from the frozen plugin package; publication still needs task-specific approval.
