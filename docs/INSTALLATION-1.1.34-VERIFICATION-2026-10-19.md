# 1.1.34 installation verification

19 October 2026. This sanitized receipt records the separately authorized update
of the existing private account plugin after publication. The
[publication receipt](RELEASE-1.1.34-PUBLICATION-2026-10-19.md) remains unchanged
as the earlier publication-only record. Installation observations below come
from that completed update, not from this documentation follow-up or CI.

## Identity and installed parity

- Published package: [v1.1.34](https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.1.34).
- Immutable release commit: `9ba059d9664d8892673848162256c82a0ebe20f3`.
- Frozen ZIP SHA-256: `731b32694c4ad7a7feebeb76cbd0078ace94ed628749db0ff6257ebf4fa0c191`.
- Verification checkout: `0cb7204d9eb0ad5b31645a884480e64f9fd471e9`; its 171 package files match that release. This documentation change and its eventual commit are separate from the release target and installation-verification checkout.
- The existing private account plugin was updated through its supported account flow with a current-release guard, then refreshed through Codex's remote-plugin installer. Identity, ownership scope, sharing, presentation, default prompt and unrelated components were preserved. No duplicate Git marketplace installation was created.
- The partial account update contained the four changed release-owned files plus the existing host wrapper's version-only change from 1.1.33 to 1.1.34. Omitted files were retained; no deletion was requested.
- Complete account read-back and matching-release installed-file verification passed: **172 files**, no missing, extra or changed paths. All 171 release-owned hashes match `releases/1.1.34/files.json`. The exact recognized `.codex-plugin/plugin.json` wrapper is separately reported as `host_metadata`.
- Native plugin state reports remote and local **1.1.34**, installed and enabled.

These are recorded destination observations, not CI installation tests or proof
for every host. Account archives, backend identifiers, private configuration,
signed download URLs and raw transport logs remain private.

## Fresh discovery

Codex CLI **0.163.0** started a fresh native stdio app-server for the intended
Bench workspace. Its installed binary's protocol schema was generated and
checked before the dedicated local verification client ran. One monotonic
five-second deadline began before the first initialization RPC and covered
initialization, remote-catalog loading, the initial skills scan, retries and
waits. Scans used `forceReload: true` without extra roots.

| Completed observation | Elapsed | Result |
| --- | ---: | --- |
| First skills scan | 0.890 s | All three exact 1.1.34 skills present and enabled |

The readiness result was **PASS at 0.890 seconds** within the shared five-second
bound. This run's first completed scan was ready; earlier empty scans and
failures retain their original records. The observation is not a host startup
guarantee.

The discovered skills were:

- `ibm-design-language:design-ui`
- `ibm-design-language:review-product-experience`
- `ibm-design-language:seat-planner-ui-ux`

Each belonged to the existing account-plugin identity and resolved under its
installed 1.1.34 directory. No fixed sleep replaced the readiness condition,
and no feature/trust setting, security policy or skill search path changed.
The [bounded discovery procedure](RECOVERY.md#bounded-discovery-readiness)
and its failure reporting are unchanged.

This verifies that fresh native session. Refresh of an already-running desktop
connection and automatic skill selection remain unverified. It does not establish
that every existing conversation loaded the new instructions.

## Preservation and evidence limits

All **172** original installed 1.1.33 files were privately archived and verified
byte-for-byte before updating. The supported installer retired the old active
cache directory; it was not manually recreated. The earlier
[1.1.33 installation receipt](INSTALLATION-1.1.33-VERIFICATION-2026-10-15.md)
and all older records remain unchanged.

All **15** installation-verification and preservation checks passed, including
frozen assets, tracked plugin source and Git state, **18,167** earlier external
files, Bench source/state, unrelated account-plugin files and configuration/
security-policy hashes. Dependency, build, browser, package-manager and temporary
caches were excluded from the historical-result hash snapshot. Production and
retained office data were not accessed or changed. No credentials were copied
to bypass access failures and no security policy changed.

The native transport audit contained only initialization, plugin catalog/read/
install and skills-list operations, with one intended installation refresh.
No model turn, product mutation, database operation or new behavior evaluation
ran. Previous baseline/candidate scores, failures, incomplete attempts and
unrun checks are preserved. File parity and discovery do not establish causal
improvement, generated-product quality, full integration, accessibility or
broad reliability. The historical configuration-provenance and behavior/loading/
RTL limits remain disclosed in the unchanged publication records.

This documentation follow-up performs no release, reinstall, model evaluation
or production action. Documentation validation and its eventual Git delivery/CI
are separate from the installation observations above.
