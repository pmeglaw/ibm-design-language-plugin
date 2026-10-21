# 1.1.35 installation verification

20 October 2026. This sanitized receipt records the separately authorized update
of the existing private account plugin after publication. The
[publication receipt](RELEASE-1.1.35-PUBLICATION-2026-10-20.md) remains unchanged
as the earlier publication-only record. Installation observations below come
from that completed update, not from this documentation follow-up or CI.

## Identity and installed parity

- Published package: [v1.1.35](https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.1.35).
- Immutable release commit: `5e967e95e3fccda5ad4d8e69d818d57eee2374d4`.
- Frozen ZIP SHA-256: `b92e9b5cc3a39cf72371304d9455e3831848bb25982add17d12fe0c18dca4165`.
- Verification checkout: `dd68096b0a3cc2981d1270ba65418d8805c59af4`; its 171 package files match that release. This documentation change and its eventual commit are separate from the release target and installation-verification checkout.
- The existing private account plugin was updated through its supported account flow with a current-release guard, then refreshed through Codex's remote-plugin installer. Identity, ownership scope, sharing, presentation, default prompt, policy fields and unrelated components were preserved. No duplicate Git marketplace installation was created.
- The partial account update contained three changed release-owned files (`plugin.json`, `RELEASE_NOTES.md`, `skills/design-ui/SKILL.md`) plus the existing host wrapper's version-only change from 1.1.34 to 1.1.35. Omitted files were retained; no deletion was requested.
- Complete account read-back and matching-release installed-file verification passed: **172 files**, no missing, extra or changed paths. All 171 release-owned hashes match `releases/1.1.35/files.json`. The exact recognized `.codex-plugin/plugin.json` wrapper is separately reported as `host_metadata`.
- Native plugin state reports remote and local **1.1.35**, installed and enabled.

These are recorded destination observations, not CI installation tests or proof
for every host. Account archives, backend identifiers, private configuration,
signed download URLs and raw transport logs remain private.

## Fresh discovery

Codex CLI **0.163.0** started a fresh native stdio app-server for the intended
Bench workspace. Its installed binary's protocol schema was generated and
checked before the dedicated local verification client ran. One monotonic
five-second deadline began before the first initialization RPC and covered
initialization, a forced matching remote-catalog read, the initial skills scan
and any retries or waits. Scans used `forceReload: true` without extra roots.

| Completed observation | Elapsed | Result |
| --- | ---: | --- |
| First skills scan | 0.687 s | All three exact 1.1.35 skills present and enabled |

The readiness result was **PASS at 0.687 seconds** within the shared five-second
bound. This run's first completed scan was ready; earlier empty scans and
failures retain their original records. The observation is not a host startup
guarantee.

The discovered skills were:

- `ibm-design-language:design-ui`
- `ibm-design-language:review-product-experience`
- `ibm-design-language:seat-planner-ui-ux`

Each belonged to the existing account-plugin identity and resolved under its
installed 1.1.35 directory. No fixed sleep replaced the readiness condition,
and no feature/trust setting, security policy or skill search path changed.
The [bounded discovery procedure](RECOVERY.md#bounded-discovery-readiness)
and its failure reporting are unchanged.

This verifies that fresh native session. Refresh of an already-running desktop
connection and automatic skill selection remain unverified. It does not establish
that every existing conversation loaded the new instructions.

## Preservation and evidence limits

All **172** original installed 1.1.34 files were privately archived and verified
byte-for-byte before updating. The supported installer retired the old active
cache directory; it was not manually deleted, recreated or overlaid. The earlier
[1.1.34 installation receipt](INSTALLATION-1.1.34-VERIFICATION-2026-10-19.md)
and all older records remain unchanged.

All **15** installation-verification and preservation checks passed, including
frozen assets, tracked plugin source and Git state, **30,240** earlier external
files, Bench source/state, unrelated account-plugin files and configuration/
security-policy hashes. Dependency, build, browser, package-manager and temporary
caches were excluded from the historical-result hash snapshot. Production and
retained office data were not accessed or changed. No credentials were copied
to bypass access failures and no security policy changed.

The matching package verifier passed for 171 payload files, 335 local links and
32 release archives, including 55 model-free evaluator tests. The installation
regression suite ran 12 tests: 10 passed and two host-symlink tests were skipped.
Skipped tests are not passes. An initial restricted CLI version probe reported
temporary-cleanup/PATH-alias permission warnings while returning 0.163.0;
subsequent authorized native calls succeeded without policy changes.

The native transport audit contained only initialization, plugin catalog/read/
install and skills-list operations, with one intended installation refresh.
No model turn, product mutation, database operation or new behavior evaluation
ran. Previous baseline/candidate scores, failures, incomplete attempts and
unrun checks are preserved. File parity and discovery do not establish causal
improvement, generated-product quality, full integration, accessibility or
broad reliability. The historical configuration-provenance and behavior/loading/
RTL limits remain disclosed in the unchanged publication records. The loading
experiment remains parked.

This documentation follow-up performs no release, reinstall, model evaluation
or production action. Documentation validation and its eventual Git delivery/CI
are separate from the installation observations above.
