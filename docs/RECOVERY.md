# Recovery

## Current release identity

- Version: `1.1.10`
- Commit: `16ffacdb1c4761a0bc5add45325b256ff2b57a0b`
- Tag: `v1.1.10`
- `plugin.zip` SHA-256: `416f1c094184abf9ec8e89645f1032c81cca3b6ae756df5d65c85cd2988d8ac1`
- Manifest: `releases/1.1.10/files.json`

Package identity is separate from successful destination installation and fresh discovery. Keep those checks explicit.

## Local restore

1. Obtain this repository or its reviewed backup ZIP and verify its checksum against your separately retained receipt.
2. Run `python -B scripts/verify.py` from its root. All checks must pass.
3. Inspect `codex plugin marketplace list --json`. If `jp-personal` already exists, check its source first. Do not add a competing marketplace with the same name or remove unrelated entries. Changing an existing source requires authorization; the owner authorized completing the canonical installation and release on 2026-09-23. Preserve unrelated marketplace entries.
4. On a fresh setup, register this checkout with `codex plugin marketplace add /absolute/path/to/checkout --json`, then run `codex plugin add ibm-design-language@jp-personal --json`.
5. Confirm version and enabled status with `codex plugin list --marketplace jp-personal --json`. Compare the returned installed directory's files to `releases/1.1.10/files.json`.
6. Verify fresh discovery with app-server `skills/list`, using `forceReload: true` and the intended workspace. Expect one enabled IBM entry with pluginId `ibm-design-language@jp-personal` and the installed version's path. If an obsolete user-level standalone copy exists, preserve its files and avoid duplicate discovery. Deliberate project-vendored skills remain governed by their project and must not be removed as installation cleanup. Use the new skill on the next turn.

## After GitHub publication

Record the canonical repository URL and immutable release commit in the release record. On a fresh setup, use `codex plugin marketplace add https://github.com/pmeglaw/ibm-design-language-plugin.git --ref 16ffacdb1c4761a0bc5add45325b256ff2b57a0b --json`, followed by the plugin add and verification steps above. This pins version 1.1.10 to its reviewed release commit; use the matching version manifest when verifying another release. This source repository is public; authenticate GitHub separately when publishing changes.

Use a reviewed release commit to prevent an unrelated branch update from changing the selected package. A tag such as `v1.1.10` is a convenient label; retain its commit and ZIP checksum separately.

## Rollback to 1.1.5

Preserve the current installation and source before changing them. Extract `releases/1.1.5/plugin.zip` to a new, empty staging folder and verify all files against its `files.json`. Use that tree as the plugin source in a separate staging checkout with the same marketplace identity. After approval, select that source and run the supported installer, then check version, file hashes and fresh discovery. Do not overlay old files onto a newer plugin tree or replace unrelated configuration.

No model evaluations are required to restore identical bytes. Installation and discovery still need checking on the destination machine.

Official references: [plugin commands](https://learn.chatgpt.com/docs/developer-commands#codex-plugin), [skill discovery](https://learn.chatgpt.com/docs/app-server#skills), [marketplace format](https://learn.chatgpt.com/docs/enterprise/plugin-management#supported-formats).
