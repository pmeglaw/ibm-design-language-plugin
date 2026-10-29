# Recovery

For a fresh Codex setup, start with [First-time installation](INSTALLATION.md).
This guide also covers the owner-managed `jp-personal` installation, drift checks,
and rollback; preserve existing marketplace entries and unrelated configuration.

## Release identity

- Version: `1.1.45`
- Immutable tag: `v1.1.45`
- `plugin.zip` SHA-256: `5ef4ef4e855b9602a544da57430d8807d6001b804de1fcdda22ba866f85873f8`
- Manifest: `releases/1.1.45/files.json`
- Release commit: `412068d0f164a57e1f3a5d540daae3188897c954`; confirm the immutable tag with the command below.
- Publication: [GitHub release](https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.1.45)

Fetch the published tag and confirm the release commit with `git rev-parse 'v1.1.45^{commit}'`.
Pin installation to that immutable commit. See the [publication receipt](RELEASE-1.1.45-PUBLICATION-2026-10-29.md)
and [installation receipt](INSTALLATION-1.1.45-VERIFICATION-2026-10-29.md).

## Restore and verify

1. Obtain the reviewed release, check the downloaded ZIP against the checksum above, and verify its files against the manifest.
2. Run `python -B scripts/verify.py` from the matching repository checkout. All checks must pass.
3. Inspect `codex plugin marketplace list --json`. Preserve the existing `jp-personal` identity and unrelated entries. The owner directed local/published synchronization on 2026-09-25; follow the scoped authorization and completion checks in [Maintaining releases](RELEASING.md).
4. For an existing personal `git-subdir` entry, preserve the repository URL and `./plugins/ibm-design-language` path and advance only its immutable SHA to the reviewed release commit. On a fresh setup, use `codex plugin marketplace add https://github.com/pmeglaw/ibm-design-language-plugin.git --ref RELEASE_COMMIT --json`, substituting that full commit.
5. Run `codex plugin add ibm-design-language@jp-personal --json`. Confirm version and enabled state with `codex plugin list --marketplace jp-personal --json`. Compare the returned installation directory to `releases/1.1.45/files.json`.
6. Verify fresh discovery with app-server `skills/list`, using `forceReload: true` and the intended workspace. Expect enabled `ibm-design-language:design-ui`, `ibm-design-language:review-product-experience`, and `ibm-design-language:seat-planner-ui-ux` entries with pluginId `ibm-design-language@jp-personal` and the installed version's path. Follow [bounded discovery readiness](#bounded-discovery-readiness) before declaring discovery complete or unavailable. Preserve obsolete standalone copies and deliberately vendored project skills; do not remove them as an automatic cleanup. Use the refreshed skill on the next turn.

## Uploaded account installations

The published package and existing private account installation are **1.1.45**.
All four public assets and 178 source/ZIP files match the frozen release. The same
private USER-scoped account plugin was updated through its supported flow.
Complete 179-file account/installed parity includes the validated host wrapper.
Fresh catalog reads confirm installed/enabled 1.1.45; all three enabled qualified
skills were discovered in 1.211 seconds within the shared five-second deadline.
See the [publication](RELEASE-1.1.45-PUBLICATION-2026-10-29.md) and
[installation](INSTALLATION-1.1.45-VERIFICATION-2026-10-29.md) receipts.
Automatic selection and existing desktop-conversation refresh remain unverified.

The following 1.1.44 observations describe its earlier verification.
This task verified its four downloaded assets and complete 179-file account/local
parity including the exact host wrapper. The current candidate is separate.

The dated 1.1.44 [publication](RELEASE-1.1.44-PUBLICATION-2026-10-29.md) and [installation](INSTALLATION-1.1.44-VERIFICATION-2026-10-29.md) receipts preserve its separate verification. Fresh native discovery of the three enabled 1.1.44 skills passed in 1.187 seconds at that verification; these historical results do not describe the current installation.

The following 1.1.43 observations describe its earlier verification.
All four public assets and 178 source/ZIP files match the frozen release. The same
private USER-scoped account plugin was updated through its supported flow.
Complete 179-file account/installed parity includes the validated host wrapper.
Fresh catalog reads confirm installed/enabled 1.1.43; all three enabled qualified
skills were discovered in 1.544 seconds within the shared five-second deadline.
See the [publication](RELEASE-1.1.43-PUBLICATION-2026-10-29.md) and
[installation](INSTALLATION-1.1.43-VERIFICATION-2026-10-29.md) receipts.
Automatic selection and existing desktop-conversation refresh remain unverified.

The following 1.1.42 observations describe its earlier verification.
All four public assets and 178 source/ZIP files match the frozen release. The same
private USER-scoped account plugin was updated through its supported flow.
Complete 179-file account/installed parity includes the validated host wrapper.
Fresh catalog reads confirm installed/enabled 1.1.42; all three enabled qualified
skills were discovered in 2.212 seconds within the shared five-second deadline.
See the [publication](RELEASE-1.1.42-PUBLICATION-2026-10-29.md) and
[installation](INSTALLATION-1.1.42-VERIFICATION-2026-10-29.md) receipts.
Automatic selection and existing desktop-conversation refresh remain unverified.

The following 1.1.41 observations describe its earlier verification.
All four public assets and 178 source/ZIP files match the frozen release. The same
private USER-scoped account plugin was updated through its supported flow.
Complete 179-file account/installed parity includes the validated host wrapper.
Fresh catalog reads confirm installed/enabled 1.1.41; all three enabled qualified
skills were discovered in 2.099 seconds within the shared five-second deadline.
See the [publication](RELEASE-1.1.41-PUBLICATION-2026-10-29.md) and
[installation](INSTALLATION-1.1.41-VERIFICATION-2026-10-29.md) receipts.
Automatic selection and existing desktop-conversation refresh remain unverified.

The following 1.1.40 observations describe its earlier verification.
All four public assets and 178 source/ZIP manifest entries match the frozen
release. The same private USER-scoped account plugin was updated through its
supported account flow, preserving identity, scope, sharing and presentation.
Complete account/installed parity passed for 179 files including the validated
host wrapper. Fresh native catalog reads confirm installed/enabled 1.1.40;
all three qualified skills were discovered in 1.977 seconds within the
shared five-second deadline. See the [publication](RELEASE-1.1.40-PUBLICATION-2026-10-29.md)
and [installation](INSTALLATION-1.1.40-VERIFICATION-2026-10-29.md) receipts.
Automatic selection and existing desktop-conversation refresh remain unverified.

The following 1.1.39 observations describe its earlier verification.
All four public assets and all 177 ZIP/source manifest entries match the frozen
release; see the [publication verification](RELEASE-1.1.39-PUBLICATION-2026-10-29.md).
Complete account/installed parity passed for 178 files including the validated
host wrapper, and native catalog reads confirm installed/enabled 1.1.39. The
diagnostic follow-up verified all three enabled skills within the shared
five-second bound: 0.966 seconds on the CLI and 0.914 seconds on the desktop
native binary. The earlier reported failure was a verifier false negative
caused by matching bare names against plugin-qualified names; see the
[correction and preserved evidence](DISCOVERY-VERIFIER-CORRECTION-2026-10-29.md) and
[installation verification](INSTALLATION-1.1.39-VERIFICATION-2026-10-29.md).
No reinstall, account update or policy/configuration change was performed.
These destination results do not prove automatic selection or desktop refresh.

The following records describe earlier versions and their original scope.

Version **1.1.38** had verified publication; all four public assets and the 198-file
ZIP/source manifest match the frozen release, as recorded in the
[publication verification](RELEASE-1.1.38-PUBLICATION-2026-10-27.md). The existing private account plugin was
subsequently updated through its supported account flow. Complete 199-file
account/installed parity, including the validated host wrapper, and fresh
native discovery of all three enabled skills passed at 1.54 seconds within
the shared five-second deadline; see the [installation verification](INSTALLATION-1.1.38-VERIFICATION-2026-10-27.md).
Identity, private sharing and presentation were preserved. Existing
desktop-session refresh and automatic selection remain unverified.

Version **1.1.37** retains its unchanged
[publication verification](RELEASE-1.1.37-PUBLICATION-2026-10-24.md) and
preparation records. Their installation statements describe their original
dated scope; the current destination result is recorded separately above.

Version **1.1.36** has all four downloaded assets verified in
the unchanged [publication receipt](RELEASE-1.1.36-PUBLICATION-2026-10-21.md), which
retains its publication-time installation status. The existing uploaded account
plugin was subsequently updated to **1.1.36** through its supported account flow.
Complete 172-file account/installed parity and fresh native discovery of all
three enabled skills passed at 1.578 seconds within the shared five-second
deadline; see the [dated installation receipt](INSTALLATION-1.1.36-VERIFICATION-2026-10-21.md).
Identity, private sharing, presentation and earlier receipts were preserved.

The earlier separately authorized 1.1.35 account update passed complete 172-file
account and installed parity and fresh native discovery of all three enabled
skills at 0.687 seconds within the shared five-second deadline; see the unchanged
[dated installation receipt](INSTALLATION-1.1.35-VERIFICATION-2026-10-20.md).
Identity, private sharing and presentation were preserved. Existing desktop-session
refresh and automatic selection remain unverified. Publication alone does not
update any installation; the later installation receipt records that separate
authorized operation.

The earlier 1.1.34 update passed 172-file account/installed parity and fresh native
discovery at 0.890 seconds within its shared five-second deadline; its
[installation receipt](INSTALLATION-1.1.34-VERIFICATION-2026-10-19.md) remains unchanged.

The following 1.1.33 verification is retained as earlier history.

The separately authorized update passed account/installed-file parity and fresh
native discovery of all three enabled skills; see the [dated installation receipt](INSTALLATION-1.1.33-VERIFICATION-2026-10-15.md). The initial empty scan, old archived bytes and desktop-refresh
limits remain recorded. The [1.1.33 publication receipt](RELEASE-1.1.33-PUBLICATION-2026-10-15.md)
retains its earlier publication-only scope.

The [1.1.34 publication receipt](RELEASE-1.1.34-PUBLICATION-2026-10-19.md) retains its original publication-time scope: no 1.1.34 installation had yet run. The later separately authorized 1.1.34 installation is recorded in its unchanged receipt above; publication alone did not update the existing copy.

The following 1.1.32 verification is retained as earlier history.

The existing owner installation was subsequently updated to **1.1.32** under
separate installation authorization. Installed-file parity and fresh native
stdio app-server discovery passed for all three enabled skills. The
[dated installation verification](INSTALLATION-1.1.32-VERIFICATION-2026-10-15.md)
records sanitized evidence, the preserved limited first smoke attempt and failed
preflights, and the unverified running-desktop connection refresh. This is a
recorded destination result, not proof for every installation or a production
workflow. The earlier publication-only receipt remains unchanged as history.

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

## Bounded discovery readiness

Use this read-only check after an authorized installation or when verifying an
existing destination. A fresh app-server may initially return no plugin skills
while startup work is still completing. That first snapshot alone does not prove
that the package is absent. The [dated investigation](DISCOVERY-READINESS-2026-10-15.md)
preserves both the failed immediate probes and the later readiness observations.

1. Record the intended workspace, installed version and destination from the
   supported host flow, and check file parity separately. Resolve the exact
   existing plugin identity; do not select a similarly named catalog entry.
2. Before the first app-server RPC, start one monotonic five-second deadline.
   Bound every RPC by the remaining time, including `initialize`, `plugin/list`
   and the initial `skills/list`. If no time remains, issue no further calls;
   record the applicable failure from step 5. Initialize the native app-server.
   For an uploaded account plugin, read the existing remote catalog with
   `plugin/list`, the matching
   `marketplaceKinds` (for example `["created-by-me-remote"]`) and
   `forceRefetch: true`. This is a catalog read, not `plugin/install`.
   Keep the returned plugin identity for comparison; preserve unrelated entries.
3. Call `skills/list` with the intended `cwds` and `forceReload: true`.
   Compare the complete plugin-qualified names returned by the API, such as
   `ibm-design-language:design-ui`, rather than bare frontmatter names.
   Require the exact three skill names listed above, enabled, belonging to the
   intended plugin, with paths under that destination's expected version.
   Do not add `perCwdExtraUserRoots` or copy files to manufacture discovery.
4. If the result is incomplete, retry the same read at 200 ms intervals within
   the remaining budget. Do not reset the deadline after initialization, catalog
   reads or any discovery result. Cap each wait by the remaining time and stop
   when the exact readiness condition is met. The RPC timeout is a client
   transport setting, not an extra `skills/list` parameter. Do not replace this
   condition with a fixed sleep.
5. At the deadline, record **FAIL (readiness timeout)** when completed scans have
   not returned the expected complete result. Preserve partial/disabled/wrong-version
   results and errors. Record a transport failure separately when any request
   cannot complete, including initialization, catalog or initial discovery RPCs;
   never treat an expired RPC as a completed empty scan. Never count either
   outcome as PASS or retry indefinitely. Complete independent read-only checks,
   then investigate the failing layer.

A readiness PASS is scoped to that fresh native session and recorded destination.
It does not prove automatic skill selection, refresh of an existing desktop
conversation, model behavior or product quality. The five-second bound is a
verification limit, not a host startup guarantee. On failure, do not reinstall,
enable feature/trust flags, change policy or relax the identity/version checks
merely to obtain a pass. Those actions need their own task authority.

## Previous release rollback identity

Version 1.1.44: commit `8ba51becc9362bf247667d37f0b92d9cc79b0ecb`, tag `v1.1.44`, ZIP SHA-256 `14874e9e25091b72a3387d89e30021a6cc1ce7f688955993aeaa79045590eb64`. Frozen assets remain in `releases/1.1.44/`.

Version 1.1.42: commit `0020d5be7606634578917493a762f58d09fd42ed`, tag `v1.1.42`, ZIP SHA-256 `adba0955775b518d217fab9a5eb6466697c38e8fe629645266d45e480716cc79`. Frozen assets remain in `releases/1.1.42/`.

Version 1.1.41: commit `c5b31f4c47ffae0516a9245bb73720101d77e07b`, tag `v1.1.41`, ZIP SHA-256 `a6ec45f21960f6eefeff2035bbc525ce4f9b429f8b948baf2e5cf7c69f599a1d`. Frozen assets remain in `releases/1.1.41/`.

Version 1.1.40: commit `e602082a6a7d291297fbce0478fa166f3f89cea4`, tag `v1.1.40`, ZIP SHA-256 `8a4c9cc2321ab3ff5ecdd3b3cca495b7aaaa4347766437503a752632ef1f8d87`. Frozen assets remain in `releases/1.1.40/`.

Version 1.1.39: commit `d34cb0621b636fcc72d4971eb411d79cddd16c84`, tag `v1.1.39`, ZIP SHA-256 `b69dd299002d804b9e6e85bc898d20c42adc2a74e24080b404c20004c60c9ec2`. Its frozen archive and manifest remain in `releases/1.1.39/`.

Version 1.1.38: commit `fb8b1fb7dae700e064421bd0f2f1fa78f797a43a`, tag `v1.1.38`, ZIP SHA-256 `0e2054f026def6d8ca61b0d1495b1cee938a78a9c855175c348f873e894db894`. Its frozen archive and manifest remain in `releases/1.1.38/`.

Version 1.1.37: commit `fa2f1fa5e3fed0c3119806fd968ace7a81c5074d`, tag `v1.1.37`, ZIP SHA-256 `e5c57f25c688262c9846c2ea5334ee7733e408049dff1309b896089f77d825e7`. Its frozen archive and manifest remain in `releases/1.1.37/`.

Version 1.1.36: commit `42cc6a9529b355ec5bf67fa47f2748053cbc4bf1`, tag `v1.1.36`, ZIP SHA-256 `b281eb4ec28c42fcc46d5b21de4516ed6b0c37640d6f7eb0c01d7772bf716cee`. Its frozen archive and manifest remain in `releases/1.1.36/`.

Version 1.1.35: commit `5e967e95e3fccda5ad4d8e69d818d57eee2374d4`, tag `v1.1.35`, ZIP SHA-256 `b92e9b5cc3a39cf72371304d9455e3831848bb25982add17d12fe0c18dca4165`. Its frozen archive and manifest remain in `releases/1.1.35/`.

Version 1.1.34: commit `9ba059d9664d8892673848162256c82a0ebe20f3`, tag `v1.1.34`, ZIP SHA-256 `731b32694c4ad7a7feebeb76cbd0078ace94ed628749db0ff6257ebf4fa0c191`. Its frozen archive and manifest remain in `releases/1.1.34/`.

Version 1.1.33: commit `16a5e4a5845bc736aed9c116ded93f25bf1a1b3d`, tag `v1.1.33`, ZIP SHA-256 `5efb158d85b7be0c96f3e7cc6ab6267254ef3c9db0986cd2a6e5a88473837e87`. Its frozen archive and manifest remain in `releases/1.1.33/`.

Version 1.1.32: commit `08839a956be8f0f3829986a0c414e3f496545b4f`, tag `v1.1.32`, ZIP SHA-256 `08f7eb0ae3f0e8ddeb1ef3cf8fc8a11fe900b11403a228dc9cb912fca89cc224`. Its frozen archive and manifest remain in `releases/1.1.32/`.

Version 1.1.30: commit `cd2ad7c5af0fd7e77079e60b674a57d681d9c0d7`, tag `v1.1.30`, ZIP SHA-256 `b98c087822c5f840158b36bf344d8a731d6781405b4c9926b8f168bcaca80b36`. Its frozen archive and manifest remain in `releases/1.1.30/`.

Version 1.1.29: commit `f7f91e5b5fc4183247a9cf5eafa430ea17f1ecd5`, tag `v1.1.29`, ZIP SHA-256 `44e43f744f76da3ea71f2bb3c803b42d589813b6fd379986b44192b517b31a68`. Its frozen archive and manifest remain in `releases/1.1.29/`.

Version 1.1.28: commit `7f1af9669e137708798cd95bce3f41893f9f9917`, tag `v1.1.28`, ZIP SHA-256 `a80c99611098e37fa91178b7e43949d312e8ca429ef2d88aba66dbde457c1e61`. Its frozen archive and manifest remain in `releases/1.1.28/`.

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
