# IBM Design Language prompt pack

Copy-ready prompts for a new implementation or review session. Prepared 2026-09-21 against the installed IBM Design Language plugin 1.1.6 guidance.

## Choose a prompt

- [Five general workflows](./WORKFLOWS.md): implement, audit sibling views, repair an audit, work from screenshots, and review before release.
- [Seat Planner prompt](./SEAT-PLANNER.md): a project-specific implementation prompt and a ready-to-use Management audit.

## Use in a new session

1. Open the intended project or checkout.
2. Select `@ibm-design-language` from the session's plugin autocomplete. For Seat Planner, also select `@brand-system` if available. These selections are UI actions; copying an @name as plain text is not proof that its guidance loaded.
3. Copy one fenced prompt and replace its bracketed placeholders. Attach any referenced screenshots or identify the actual report path.
4. The prompt asks the agent to confirm which guidance it loaded. If a plugin is unavailable, it should disclose that boundary.

For an existing interface, use **audit → approved repair → final review**. For a new feature, use **implement → final review**. The audit is read-only; implementation prompts authorize local work and validation. Git publication and production actions require a separate, specific approval.

The Seat Planner prompt is deliberately project-specific. General prompts do not import its branding or repository rules into other products. Prompts improve review discipline; they do not guarantee that every defect will be found.

This pack is companion repository documentation. It does not install or modify the plugin and is not part of the frozen 1.1.6 release ZIP.
