# 1.1.36 installation verification

21 October 2026. This sanitized receipt records the separately authorized update
of the existing private account plugin after publication. The unchanged
[publication receipt](RELEASE-1.1.36-PUBLICATION-2026-10-21.md) retains its earlier
publication-only scope. Installation observations below come from that completed
update, not from this documentation follow-up or CI.

## Identity and installed parity

- Published package: [v1.1.36](https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.1.36).
- Immutable release commit: `42cc6a9529b355ec5bf67fa47f2748053cbc4bf1`.
- Frozen ZIP SHA-256: `b281eb4ec28c42fcc46d5b21de4516ed6b0c37640d6f7eb0c01d7772bf716cee`.
- Verification checkout: `913638dd9859b83916ce414fce7f9ef7c528c69c`; its 171 package files match that release. This documentation change and its eventual commit are separate from the release target and installation-verification checkout.
- The existing private account plugin was updated through its supported account
  flow with a current-release guard, read back, then refreshed through Codex's
  remote-plugin installer. Identity, ownership scope, sharing, description,
  presentation, default prompt, policy fields and unrelated components were
  preserved. No duplicate Git marketplace installation was created.
- The partial account update contained five changed release-owned files:
  plugin.json, RELEASE_NOTES.md and three design-ui references (carbon-next.md,
  composition.md and source-map.json), plus the existing host wrapper's
  version-only change from 1.1.35 to 1.1.36. Omitted files were retained; no
  deletion was requested. All three SKILL.md entrypoints remain unchanged.
- Complete account read-back and matching-release installed-file verification
  passed: **172 files**, no missing, extra or changed paths. All 171 release-owned
  hashes match releases/1.1.36/files.json. The exact recognized host wrapper is
  separately reported as host_metadata, not an exemption for arbitrary extras.
- Native plugin state reports remote and local **1.1.36**, installed and enabled.

These are recorded destination observations, not CI installation tests or proof
for every host. Account archives, backend identifiers, private configuration,
signed download URLs and raw transport logs remain private.

## Fresh discovery

Codex CLI **0.163.0** generated its installed binary's protocol schemas, which
were inspected before the dedicated local verification client ran. A fresh
native stdio app-server used the intended Bench workspace. One monotonic
five-second deadline began before the first initialization RPC and covered
initialization, a forced matching remote-catalog read and skills discovery.
Scans used forceReload: true without extra roots.

| Completed observation | Elapsed | Result |
| --- | ---: | --- |
| First skills scan | 1.578 s | All three exact 1.1.36 skills present and enabled |

The readiness result was **PASS at 1.578 seconds** within the shared five-second
bound. This run's first completed scan was ready; earlier empty scans and failed
attempts retain their original records. The bound is a verification limit,
not a host startup guarantee.

The discovered skills were:

- ibm-design-language:design-ui
- ibm-design-language:review-product-experience
- ibm-design-language:seat-planner-ui-ux

Each belonged to the existing account-plugin identity and resolved under its
installed 1.1.36 directory. No fixed sleep replaced the readiness condition,
and no feature/trust setting, security policy or skill search path changed.
The [bounded discovery procedure](RECOVERY.md#bounded-discovery-readiness)
and its failure reporting are unchanged.

This verifies that fresh native session. Refresh of an already-running desktop
connection and automatic skill selection remain unverified. It does not
establish that every existing conversation loaded the new instructions.

## Preservation and checks

All **172** original installed 1.1.35 files were privately archived and verified
byte-for-byte before updating. The supported installer retired the old active
cache; it was not manually deleted, recreated or overlaid. The earlier
[installation receipt](INSTALLATION-1.1.35-VERIFICATION-2026-10-20.md), publication
receipts and all older evidence remain unchanged.

All **17** installation/preservation checks passed, covering repository bytes,
Git state, worktrees, **111** frozen release files, **36,500** earlier external
files, existing results, unrelated account plugins, Bench and configuration/
security-policy hashes. Dependency, build, browser, package-manager and temporary
caches were excluded from the historical-result hash snapshot. Production and
retained office records were not accessed. The published release, tag, body
and four asset identities remained unchanged.

The matching package verifier passed for 171 payload files, 337 local links,
all 33 archives and 55 model-free evaluator checks. Installation regressions ran
12 tests: **10 passed and two host-symlink tests were skipped**. Skipped tests are
separate from passes. No assertions or repository gates were changed.

## Preserved failed attempts and evidence limits

The initial preparation equality check **failed** because the source text reader
returned source-map.json with LF while the complete account archive retained
CRLF. The 1.1.35 archive contains 1,386 CRLF pairs; the verified 1.1.36 archive
contains 1,405. A fresh external preparation script accounted for that text-reader
representation only. The original script/failure remains retained. Full archive,
installed and frozen-manifest comparisons remained exact-byte checks. No
existing or frozen package byte was normalized.

An initial archive-download invocation supplied no stdin and stopped before a
download. A later supported private download succeeded without retaining its
signed URL. An early schema-path lookup preceded completion of generation;
the completed generated schemas were subsequently located and inspected. Those
attempts are preserved separately and are not passes.

The native transport audit contained only initialization, plugin catalog/read/
install and skills-list operations, with one intended installation refresh.
No model thread, product mutation, database operation or new behavior evaluation
ran. No credential was copied to bypass an access failure and no security policy
changed. Earlier grades, raw whitespace failures, incomplete and unrun results,
configuration-provenance, migration, accessibility and loading limits remain
unchanged. File parity and fresh discovery do not establish causal improvement,
generated-product quality or broad reliability. The loading experiment remains
parked.

This documentation follow-up performs no merge, release, reinstall, model run or
production action. Its validation and Git delivery/CI are separate from the
completed installation observations above.
