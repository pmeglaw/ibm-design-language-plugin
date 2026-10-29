# 1.1.39 existing-installation verification

Verified 29 October 2026 PDT. This is read-back of an existing installation,
not a new installation or account update.

## Destination and parity

The same private, USER-scoped account plugin already used the 1.1.39 restoration.
The account metadata, current account archive and local installation were read
without changing identity, scope, sharing, presentation or unrelated plugins.
Private identifiers, signed URLs and raw native responses remain outside source.

- Complete account/archive and installed comparison: PASS, 178 matching files.
- Matching-source `python -B scripts/verify-install.py INSTALL_DIRECTORY`: PASS,
  177 release-owned files, zero missing/extra/changed files; one exact validated
  host wrapper reported separately as `host_metadata`.
- All 175 installed skill files match frozen 1.1.37.
- Fresh native catalog reads: version and localVersion 1.1.39, installed and enabled.
- Published 1.1.39 source/manifest/ZIP and all four downloaded assets agree; see
  the [publication receipt](RELEASE-1.1.39-PUBLICATION-2026-10-29.md).

No cache edits, duplicate marketplace installation, reinstall, account update,
policy/trust/feature override or unrelated configuration change was performed.

## Fresh discovery: unresolved

The documented read-only sequence used one shared five-second monotonic deadline,
including initialize, forced created-by-me catalog refresh and forced skill scans.
No extra roots or deadline reset were used.

- Installed CLI 0.165.0: completed scans did not return the IBM plugin skills;
  the final RPC reached its transport deadline at 5.008 seconds. This is a
  transport failure with preceding incomplete readiness results, not a PASS.
- The running desktop's native 0.165.0-alpha.1.2 binary: completed the bounded
  sequence without returning the expected skills. FAIL (readiness timeout).

Both catalogs identified the existing installation as enabled. The current
conversation advertises its three 1.1.39 skills, but that does not substitute for
fresh-session discovery. No package defect was identified by independent review;
the failing discovery layer remains unresolved. Byte synchronization is verified,
but full delivery verification is incomplete. Automatic selection, refresh of an
existing conversation, model behavior, product quality and AT remain unverified.
