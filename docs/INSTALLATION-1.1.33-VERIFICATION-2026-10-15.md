# 1.1.33 installation verification

15 October 2026 (local); verification completed 16 October UTC. This sanitized
receipt records the separately authorized update of the existing private account
plugin after publication. The [publication receipt](RELEASE-1.1.33-PUBLICATION-2026-10-15.md)
remains unchanged as the record of the earlier publication-only scope.

## Identity and installed parity

- Published package: [v1.1.33](https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.1.33).
- Immutable release commit: `16a5e4a5845bc736aed9c116ded93f25bf1a1b3d`.
- Frozen ZIP SHA-256: `5efb158d85b7be0c96f3e7cc6ab6267254ef3c9db0986cd2a6e5a88473837e87`.
- Verification checkout: `9f6761e34e0cf24dbcef04e52889b15c827a072f`; its package
  bytes match that release. The documentation containing this receipt is separate
  from both the release target and the installation-verification checkout.
- The existing private account plugin was updated through its supported account
  flow with an expected-release guard, then refreshed through Codex's remote-plugin
  installer. Identity, sharing, presentation and unrelated configuration were
  preserved. No duplicate Git marketplace installation was created.
- The account update contained all 171 release-owned files plus the existing
  host wrapper, whose version alone changed from 1.1.32 to 1.1.33.
- Complete account read-back and installed-file verification passed: **172 files**,
  no missing, extra or changed paths. All 171 release-owned hashes match
  `releases/1.1.33/files.json`. The exact recognized
  `.codex-plugin/plugin.json` wrapper is reported separately as `host_metadata`.
- Native plugin state reports remote and local **1.1.33**, installed and enabled.

These are recorded destination observations, not CI installation tests or a
general guarantee. Account archives, backend identifiers, local configuration
and raw transport logs remain private.

## Fresh discovery and retained initial scan

Codex CLI **0.162.1** started a fresh native stdio app-server for the intended
Bench workspace. One monotonic five-second deadline began before the first
initialization RPC and covered initialization, remote-catalog loading, the first
skills scan, retries and waits. Scans used `forceReload: true` without extra roots.

| Completed observation | Elapsed | Result |
| --- | ---: | --- |
| Initial skills scan | 0.543 s | No IBM skills yet; retained as an incomplete readiness snapshot |
| Second skills scan | 0.881 s | All three exact 1.1.33 skills present and enabled |

The final readiness result was **PASS at 0.881 seconds** within the shared
five-second bound. The initial empty scan remains recorded; it was not treated
as proof of absence or overwritten by the later pass. This observation is not a
startup-time guarantee.

The discovered skills were:

- `ibm-design-language:design-ui`
- `ibm-design-language:review-product-experience`
- `ibm-design-language:seat-planner-ui-ux`

Each belonged to the existing account-plugin identity and resolved under its
installed 1.1.33 directory. No fixed sleep replaced the readiness condition, and
no feature/trust setting, security policy or skill search path was changed.

This verifies that fresh native session. Refresh of an already-running desktop
connection and automatic skill selection remain unverified. It does not establish
that every existing conversation loaded the new instructions.

## Preservation and evidence limits

All 171 original installed 1.1.32 files were privately archived and verified
byte-for-byte before updating. The supported installer retired the old active
cache directory; it was not manually recreated. Older verification receipts and
their original results remain unchanged, including the
[1.1.32 installation record](INSTALLATION-1.1.32-VERIFICATION-2026-10-15.md).

Final preservation checks passed for frozen release assets, tracked plugin source,
prior evaluation records and transport evidence, Bench source/state, unrelated
account-plugin files, and configuration/security-policy hashes. Production and
retained office data were not accessed or changed. The initial restricted CLI
version query emitted temporary-alias access warnings but returned its version;
subsequent scoped native execution succeeded without policy changes or a
credential-copy workaround.

The transport audit contained only initialization, plugin catalog/read/install
and skills-list operations, with one intended installation refresh. No model turn,
product mutation, database operation or new behavior evaluation was run. Prior
baseline/candidate scores, failures, incomplete attempts and unrun checks are
preserved. Installed guidance and discovery do not establish causal improvement,
rendered design quality, full integration, accessibility or broad reliability.
See the [design-focus evidence limits](DESIGN-FOCUS-EVALUATION-2026-10-15.md).

This documentation follow-up performs no release, reinstall, model evaluation or
production action. Documentation validation and any later Git delivery/CI are
separate from the installation observations above.
