# IBM Design Language plugin maintenance

Read [release maintenance](docs/RELEASING.md) and [recovery](docs/RECOVERY.md) before
changing or installing this plugin. Preserve frozen releases and unrelated work.

The owner requires the local installed plugin and the published GitHub release to
stay in sync. Authorized plugin updates include the scoped release and installation
workflow unless explicitly restricted to local or unpublished work. Complete the
documented CI, publication, installation and file-hash parity checks before reporting
success. Never finish with only an edited cache or silently discard local drift.

This authority is limited to the requested plugin changes. It does not permit
publishing unrelated work, private data, product changes or new unrequested features.

For approval scope, distinguish packaged plugin maintenance, companion repository
documentation, and product work using the plugin as described in
[release maintenance](docs/RELEASING.md#authorization-and-documentation-scope).
Repository-only documentation edits do not require a plugin release or reinstall;
their Git publication still requires task-specific authorization. Current explicit
task restrictions take precedence over the synchronization default above.

## Working rules

Apply these rules to work in this repository, in cloud or local Codex sessions.
Scale planning and verification to the task's scope and risk.

### Verify rule

- Define success and the evidence needed before making changes.
- Verify both the artifact and the delivery claims. Use the
  [delivery verification checklist](docs/RELEASING.md#delivery-verification)
  to reconcile source version, current documentation, release tag, exact-commit
  CI and installation status when reporting release or synchronization work.
- Distinguish package integrity, fixture behavior, model-generated product
  quality and destination installation. Evidence for one does not prove another.
- Run applicable checks on the final changes. Report pass, fail or unverified
  with the command or evidence link and the commit/version it applies to.
  Label historical or reused evidence explicitly.
- Never count unrun checks as passes or infer installation from publication.
  Preserve known failures and frozen evidence; do not weaken checks to finish.

### Context rule

- Read applicable instructions and relevant source before acting. Establish the
  requested outcome, scope, current commit, package version and authorization.
  For product work, also establish the installed framework/Carbon version and
  approved brand; inspect installation state when the task depends on it.
- Distinguish observed facts, assumptions and historical preparation notes.
  Use the published GitHub release and immutable tag for publication status.
- Read focused references as needed. For longer work, maintain a concise task
  record with decisions, changed files, evidence, blockers and the next action.
  Keep private context and raw transcripts out of this public repository.
- Refresh that record before a handoff or context reset. Recheck mutable facts
  when resuming, including branch, release, CI and installation state.

### Orchestrator rule

- Own the outcome through planning, execution, integration and verification.
  Handle small tasks directly; split larger work into deliverables, dependencies
  and acceptance criteria.
- Keep review, implementation, evaluation, publication and installation scopes
  explicit. Continue authorized work without unnecessary permission requests;
  preserve the authorization boundaries above.
- Delegate only when authorized by the user or applicable instructions and
  useful for separable work. This rule does not itself authorize spawning agents.
  Give each worker focused context, ownership boundaries and acceptance criteria.
- Inspect delegated results and verify the integrated artifact. A worker's
  completion report is not independent proof.
- Close with what changed, evidence checked, actual delivery state and remaining
  limitations. An open PR is not a merged change; publication is not installation.
