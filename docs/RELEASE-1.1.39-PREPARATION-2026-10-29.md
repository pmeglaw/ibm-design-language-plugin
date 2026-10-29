# 1.1.39 restoration reconciliation

## Scope

Reconcile the repository with the existing 1.1.39 restoration, preserving its
exact package bytes. All 175 skill files match frozen 1.1.37. The package removes
the 21 anatomy-example files introduced by 1.1.38 and restores five references.
Version metadata and the release-note prefix distinguish it from 1.1.37.
The three skill identities, fixture assertions and dependency locks are unchanged.
Older release archives and manifests remain frozen; the removed examples remain
available inside the preserved 1.1.38 archive. Historical preparation documents
describe their original package, not the current source tree.

The owner authorized source, release and installation reconciliation. This is
not a product change, new feature, model evaluation or quality-improvement claim.

## Candidate and local evidence

- Package: 177 files; [archive](../releases/1.1.39/plugin.zip),
  [manifest](../releases/1.1.39/files.json),
  [checksum](../releases/1.1.39/SHA256SUMS).
- ZIP SHA-256: `b69dd299002d804b9e6e85bc898d20c42adc2a74e24080b404c20004c60c9ec2`.
- `python -B scripts/verify.py`: PASS; 177 files, all 36 release archives,
  397 package-local links and synthetic evaluator checks; no model calls.
- `python -B scripts/verify_release_docs.py --github`: PASS for published
  1.1.38 and unpublished 1.1.39 source before publication.
- Python unit discovery: 38 tests, 36 passed, two host symlink skips.
  Initial sandbox temporary-directory permissions caused errors; rerunning with
  a workspace-local temporary directory passed without changing tests.
- Release fixture `npm test`: eight passed; corrected/negative controls retained.
- Keyboard fixture `npm test`: three passed; 13/13 corrected checks on both themes.
- Prepared Next.js shell: production build and all 20 browser tests passed.
- Casebook renderer: all 25 browser tests passed.
- Complete existing account/archive and installed parity: 178 files, including
  the validated generated host manifest. No installation change was needed.
- Matching-source `scripts/verify-install.py`: PASS, zero missing/extra/changed
  package files, with the host manifest reported separately.
- Fresh native catalog: existing 1.1.39 is installed and enabled. The bounded
  discovery probe did not return its three skills in completed scans and its
  final request reached the shared five-second transport deadline. Fresh skill
  discovery is unverified; no policy, trust, extra skill roots or configuration
  was changed to force a pass. The current desktop chat advertises all three
  1.1.39 skills, which does not replace a fresh native readiness result.

## Delivery limits

These are local candidate checks before commit. Exact-commit CI, merge, immutable
tag, publication and downloaded-asset verification remain separate delivery
requirements. Existing account parity does not prove automatic skill selection,
desktop refresh, generated-product quality or assistive-technology behavior.
