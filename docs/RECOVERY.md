# Recovery

For a fresh Codex setup, start with [First-time installation](INSTALLATION.md).
This guide also covers the owner-managed `jp-personal` installation, drift checks,
and rollback; preserve existing marketplace entries and unrelated configuration.

## Release identity

- Version: `1.1.28`
- Immutable tag: `v1.1.28`
- `plugin.zip` SHA-256: `a80c99611098e37fa91178b7e43949d312e8ca429ef2d88aba66dbde457c1e61`
- Manifest: `releases/1.1.28/files.json`
- Release commit: `7f1af9669e137708798cd95bce3f41893f9f9917`; confirm the immutable tag with the command below.
- Publication: [GitHub release](https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.1.28)

Fetch the published tag and confirm the release commit with `git rev-parse 'v1.1.28^{commit}'`.
Record that full commit alongside the checksum. Pin marketplace installation to
that commit rather than an evolving branch. A missing release/tag means
publication is incomplete; a locally prepared ZIP is not proof of publication.
Package identity is separate from successful destination installation and fresh
discovery. Keep those checks explicit.

## Restore and verify

1. Obtain the reviewed release, check the downloaded ZIP against the checksum above, and verify its files against the manifest.
2. Run `python -B scripts/verify.py` from the matching repository checkout. All checks must pass.
3. Inspect `codex plugin marketplace list --json`. Preserve the existing `jp-personal` identity and unrelated entries. The owner directed local/published synchronization on 2026-09-25; follow the scoped authorization and completion checks in [Maintaining releases](RELEASING.md).
4. For an existing personal `git-subdir` entry, preserve the repository URL and `./plugins/ibm-design-language` path and advance only its immutable SHA to the reviewed release commit. On a fresh setup, use `codex plugin marketplace add https://github.com/pmeglaw/ibm-design-language-plugin.git --ref RELEASE_COMMIT --json`, substituting that full commit.
5. Run `codex plugin add ibm-design-language@jp-personal --json`. Confirm version and enabled state with `codex plugin list --marketplace jp-personal --json`. Compare the returned installation directory to `releases/1.1.28/files.json`.
6. Verify fresh discovery with app-server `skills/list`, using `forceReload: true` and the intended workspace. Expect enabled `ibm-design-language:design-ui` and `ibm-design-language:review-product-experience` entries with pluginId `ibm-design-language@jp-personal` and the installed version's path. Preserve obsolete standalone copies and deliberately vendored project skills; do not remove them as an automatic cleanup. Use the refreshed skill on the next turn.

## Uploaded account installations

For an existing uploaded account plugin, update that same plugin through the
host's supported update flow; do not create a duplicate Git marketplace install.
Keep its identity, sharing, metadata and unrelated files unchanged, and verify
the published payload after updating.

The current source's `scripts/verify-install.py` accepts the exact observed
skills-only Codex upload wrapper at `.codex-plugin/plugin.json` as separately
reported `host_metadata`, only when its complete shape and identity match the
hash-verified root manifest. It does not ignore that directory or arbitrary
metadata. Unknown keys, different skill paths, identity mismatches and symlinks
fail; any compatibility manifest already owned by the release remains
hash-checked. The verifier does not prove enabled state or fresh discovery.
Use the verifier from the checkout matching the installed release version.

## Previous release rollback identity

Version 1.1.27: commit `bf99217379e43a55a1816b962cac910773455873`, tag `v1.1.27`, ZIP SHA-256 `fd82fd1565d11aafee25f7b185eebb4507795f2baece92e2e7f6339e33a3eb04`. Its frozen archive and manifest remain in `releases/1.1.27/`.

Version 1.1.26: commit `85368ab8927a375889292a112d58df75495eac9d`, tag `v1.1.26`, ZIP SHA-256 `dd37d800fe3c77ff2b1a4c3c02fb5dde6d60a00cd57509e492049427ed2ca1d9`. Its frozen archive and manifest remain in `releases/1.1.26/`.

Version 1.1.25: commit `b63641855c241a7fbbabde15144405c4e1613131`, tag `v1.1.25`, ZIP SHA-256 `c111bd17d1ef24719d606bc62b533d68b33ed275808f323f5946c6d574af7ea9`. Its frozen archive and manifest remain in `releases/1.1.25/`.

Version 1.1.24: commit `ee7dbf087bffc69fc78b08e6b6dd7bd7ca53fd73`, tag `v1.1.24`, ZIP SHA-256 `e751ce210bfbdc91f0b99e167560a30cc2e02f576aa51c1a2ceafd968306a0f7`. Its frozen archive and manifest remain in `releases/1.1.24/`.

Version 1.1.23: commit `60bdef14d0e55b56a3d891295735aaa7c0311e26`, tag `v1.1.23`, ZIP SHA-256 `45a044c15ae9147edb2aeabdb405f4646c9ed54929591a87ffa4bf56b005a18e`. Its frozen archive and manifest remain in `releases/1.1.23/`.

Version 1.1.22: commit `6bdedc8793d01f498a4242db661a94ead362f9de`, tag `v1.1.22`, ZIP SHA-256 `48638cd6b480695047054b9caba4201bf112269134e1b8b925dcc0c6285f2d0d`. Its frozen archive and manifest remain in `releases/1.1.22/`.

Version 1.1.21: commit `8ed438457a0cb94bb6e01e2fa4b87d9420c7cd38`, tag `v1.1.21`, ZIP SHA-256 `aa537d56d87b03ec1dd76d8f33da52f4a0071e76e4f16de3a924f3c8d7f52a40`. Its frozen archive and manifest remain in `releases/1.1.21/`.

Version 1.1.20: commit `d758a5031262a6eea4efdfba4e3f11bf5e363914`, tag `v1.1.20`, ZIP SHA-256 `ceb4837e5b1587a4079fafac4f27e8cb58985a46bc5f18bbcbdc12c9a47914c5`. Its frozen archive and manifest remain in `releases/1.1.20/`.

Version 1.1.19: commit `28d050cf314d786e0373baf1a8c3b9a6f2508080`, tag `v1.1.19`, ZIP SHA-256 `e0c22711cb02604092a648b6be9fdbe6b5598c04e653355ed9c657dae8ba3c99`. Its frozen archive and manifest remain in `releases/1.1.19/`.

Version 1.1.18: commit `3d99ce9fc864072dab91ff04b6e94e6f31d5c630`, tag `v1.1.18`, ZIP SHA-256 `32eda708c41fb1a3a8ea51dcd62b92c447c16c73efc29e543a68c7897ba604e4`. Its frozen archive and manifest remain in `releases/1.1.18/`.

Version 1.1.17: commit `9f4366bd78f69f30ae5f4e691ab6e44b3fb2570b`, tag `v1.1.17`, ZIP SHA-256 `ff9219c6f749911300dd6eb02c7fbd0f4a7dc1ebd4b93bce8e12fe1671494c2b`. Its frozen archive and manifest remain in `releases/1.1.17/`.

Version 1.1.16: commit `d04c52c0eb5c5b80052bf6f82898e7f1afe38549`, tag `v1.1.16`, ZIP SHA-256 `989fa7ca89c459bae27afa331ddb678a2144d3be2f5700fe5ce256d23a165313`. Its frozen archive and manifest remain in `releases/1.1.16/`.

## Previously verified rollback identity

Version 1.1.13: commit `0b4237b36fd244ee0ee8638863274275bcd750ad`, tag
`v1.1.13`, ZIP SHA-256
`41a804706f5edd65f45d5fb01486cb24e63bf26ec97d7266c31dedead35c919b`.
Earlier release archives, manifests and checksums remain frozen in `releases/`.

For a requested rollback, preserve the current installation and source, verify
the selected frozen archive, select its reviewed commit, and reinstall using
the supported installer. Do not overlay old files onto a newer plugin tree or
replace unrelated configuration. No model evaluations are required to restore
identical bytes; installation and fresh discovery still need checking.

Official references: [plugin commands](https://learn.chatgpt.com/docs/developer-commands#codex-plugin), [skill discovery](https://learn.chatgpt.com/docs/app-server#skills), [marketplace format](https://learn.chatgpt.com/docs/enterprise/plugin-management#supported-formats).
