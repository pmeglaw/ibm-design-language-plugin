# Recovery

## Release identity

- Version: `1.1.13`
- Immutable tag: `v1.1.13`
- `plugin.zip` SHA-256: `0d17737643a1f575b83f1aea970d0166308bd0895f199161ce651f5a165e45a0`
- Manifest: `releases/1.1.13/files.json`
- Publication and full release commit: [GitHub release](https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.1.13)

After publication, fetch the tag and resolve `git rev-parse 'v1.1.13^{commit}'`.
Record that full commit alongside the checksum. Pin marketplace installation to
that commit rather than an evolving branch. A missing release/tag means
publication is incomplete; a locally prepared ZIP is not proof of publication.
Package identity is separate from successful destination installation and fresh
discovery. Keep those checks explicit.

## Restore and verify

1. Obtain the reviewed release, check the downloaded ZIP against the checksum above, and verify its files against the manifest.
2. Run `python -B scripts/verify.py` from the matching repository checkout. All checks must pass.
3. Inspect `codex plugin marketplace list --json`. Preserve the existing `jp-personal` identity and unrelated entries. The owner authorized publishing and installing 1.1.13 on 2026-09-24; that does not authorize unrelated future source changes.
4. For an existing personal `git-subdir` entry, preserve the repository URL and `./plugins/ibm-design-language` path and advance only its immutable SHA to the reviewed release commit. On a fresh setup, use `codex plugin marketplace add https://github.com/pmeglaw/ibm-design-language-plugin.git --ref RELEASE_COMMIT --json`, substituting that full commit.
5. Run `codex plugin add ibm-design-language@jp-personal --json`. Confirm version and enabled state with `codex plugin list --marketplace jp-personal --json`. Compare the returned installation directory to `releases/1.1.13/files.json`.
6. Verify fresh discovery with app-server `skills/list`, using `forceReload: true` and the intended workspace. Expect one enabled IBM entry with pluginId `ibm-design-language@jp-personal` and the installed version's path. Preserve obsolete standalone copies and deliberately vendored project skills; do not remove them as an automatic cleanup. Use the refreshed skill on the next turn.

## Previously verified rollback identity

Version 1.1.12: commit `2386ddfdc9932d8b4f624f2b9fee9b2866a2b021`, tag
`v1.1.12`, ZIP SHA-256
`dcce95650b583951adbf88981666da8f5d3296d4377044fa741bc1c135ee4841`.
Earlier release archives, manifests and checksums remain frozen in `releases/`.

For a requested rollback, preserve the current installation and source, verify
the selected frozen archive, select its reviewed commit, and reinstall using
the supported installer. Do not overlay old files onto a newer plugin tree or
replace unrelated configuration. No model evaluations are required to restore
identical bytes; installation and fresh discovery still need checking.

Official references: [plugin commands](https://learn.chatgpt.com/docs/developer-commands#codex-plugin), [skill discovery](https://learn.chatgpt.com/docs/app-server#skills), [marketplace format](https://learn.chatgpt.com/docs/enterprise/plugin-management#supported-formats).
