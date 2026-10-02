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
