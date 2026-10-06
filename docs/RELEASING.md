# Maintaining releases

Keep frozen release ZIPs and their manifests unchanged. Make new work on a task branch. Change the source plugin and increment its version only for an intentional release; the validator deliberately rejects source drift from the manifest selected by its `CURRENT` version (currently 1.1.27). A prepared candidate passing this check is not proof of publication.

For a new release, review the source diff, run relevant local checks, write accurate release notes, build a fresh ZIP and file manifest, and update the validator's current release version. Never regenerate hashes merely to hide an unexpected difference. Preserve older versions for rollback.

Run `python -B scripts/verify.py`. This invokes synthetic tests only. Behavioral or visual changes may need targeted evaluation with separate authorization; routine restoration does not. Record what was tested, reused, failed or untested. Preserve known evidence limitations.

After review and publication authorization (including a request to synchronize the local plugin with its published version), commit, push to the canonical repository, tag the reviewed commit and attach the ZIP/checksums to its GitHub release. Record the full commit ID. Do not move published tags. Verify the downloaded release bytes and supported marketplace installation before calling remote recovery tested.

CI runs the same local verification command on Windows and Linux. Check both operating-system jobs on the exact release commit before publishing. CI does not install plugins, use API keys, or run model evaluations. Keep raw transcripts, account configuration, credentials and temporary packets out of source control.

The canonical repository is public. Keep private fixtures, raw transcripts and local configuration out of commits and release assets; publish reviewed summaries only. Use the exact merged commit for the release tag and verify both OS jobs on that commit before publishing.

Casebook rendering changes also require `node --test tests/casebook/renderer.test.cjs` with the pinned fixture dependencies and Chromium installed. CI runs this browser check on Linux, separately from the Windows/Linux package verification.

The release fixture is a publication blocker for any plugin version after 1.1.23. Run `npm test` in `tests/release-fixture` with its lockfile and Chromium installed. CI runs that job on Linux. Do not publish unless it is green on the exact release commit, alongside the Windows and Linux package jobs. Corrected must be 29 of 29 on White, Gray 100, and a 390px width. Missed must fail every check. Do not edit the assertions or the Missed pattern to force a pass. A green run is not a model evaluation, not an assistive-technology certification, and not a change to the frozen 1.1.23 bytes.

The keyboard gate is a second publication blocker for any plugin version after 1.1.23. Run `npm test` in `tests/behavior-fixture` with its lockfile and Chromium installed. CI runs that job on Linux. Do not publish unless it is green on the exact release commit, alongside the release fixture and the Windows and Linux package jobs. Corrected must be 13 of 13 on White and on Gray 100. Missed must fail every check. The checks send real keys. They cover the menu, search, table filter, long cell, label, failed submit, a 320px frame, and right-to-left. Do not edit the assertions or the Missed pattern to force a pass. A green run is not a screen-reader certification and does not change the frozen 1.1.23 bytes.

The Next.js shell is an additional publication gate for 1.1.24 and later. Prepare
it with `python -B scripts/prepare_shell_fixture.py`, build the pinned production
fixture, and run `npm test` in `.verification/nextjs-shell`. The dedicated Linux
CI job must pass on the exact release commit. It checks committed heading focus,
same-route focus, separate skip-to-main behavior, fallback and route history as
well as the existing shell behavior. Do not remove the skip-fragment regression
to hide a failure. Targeted CUA observations do not replace this complete gate.

## Delivery verification

Verify the claims made in documentation and the final handoff as well as the
changed artifacts. Apply the checks relevant to the task; report inaccessible
or unrun checks as unverified, with the reason.

- Record the reviewed commit and package version from `plugin.json`. Confirm
  that the validator's `CURRENT`, release manifest and source agree.
- For publication claims, confirm the GitHub release exists and resolve its
  immutable tag to the intended full commit. Package preparation notes and a
  passing local validator do not prove publication.
- Check README, installation, recovery and history guidance for the same
  published version, release URL, commit and checksum where stated. Explicitly
  distinguish any newer unpublished source. Preserve frozen preparation notes,
  ZIPs, manifests and historical evidence; explain historical wording in current
  companion documentation instead of rewriting frozen bytes.
- Check applicable CI results on the exact commit being delivered. Prior-release
  CI is historical evidence, not a passing result for a new PR. Report an open
  PR, merged change, published release and installed copy as separate states.
- For release assets, verify downloaded bytes against the manifest and checksum
  before claiming artifact verification. A release page alone proves neither
  downloaded-byte integrity nor destination installation.
- For installation or synchronization claims, inspect the destination version,
  marketplace commit, enabled state, file-hash parity and fresh skill discovery
  using [Recovery](RECOVERY.md). If the destination is unavailable, say so;
  never infer its state from a GitHub release.
- Summarize the checks actually performed, their commit/version and evidence
  links, plus failures, reused evidence and remaining limitations. Do not turn
  synthetic or fixture results into generated-product or accessibility claims.

After publication, reconcile current companion documentation against the release
record before reporting the documentation current. This can be a documentation-only
follow-up under the applicable authorization; it requires no package version bump,
retagging or rewriting of the published archive.

## Automated documentation checks

Run `python -B scripts/verify_release_docs.py` to compare the current release
identity in `docs/RECOVERY.md` with README, installation, history and maintenance
claims, the source/validator versions and the recorded ZIP checksum. This offline
check establishes consistency only. Keep the explicit current-version sentences
and identity fields when editing these documents; missing or ambiguous fields
fail with the affected document named. README's package entry must include a
versioned archive reference, and HISTORY's current `Version` paragraph must
include the release URL and full commit ID. Older version entries, frozen
release notes and rollback entries are excluded from current-version checks.

Add `--github` to require a live check of the latest stable GitHub release and its
resolved tag commit. The command uses the standard library and optionally reads
`GITHUB_TOKEN`; CI supplies its read-only token. Network/API failures fail the
check instead of silently downgrading to offline success. Neither mode verifies
downloaded release assets, installed-copy parity or generated-product quality.
Continue running the package verifier and applicable browser/installation gates.

The `Verify release documentation` workflow runs on push, pull request, release
publication and manual dispatch. On publication it checks the default branch's
current companion documentation, not frozen preparation wording at the tag. A
publication-triggered failure reports drift after publication; correct current
companion docs in a follow-up and confirm the new push run. The workflow does not
rewrite documentation or make itself a required branch-protection check.

A newer unpublished source can coexist with the current published package. Keep
recovery and installation pinned to the published version, set the validator and
maintenance `CURRENT` to the candidate, and state both in README. Use
`The working source is **VERSION, an unpublished combined candidate**` and
`the unpublished VERSION working source` in its package contents entry. Once
published, reconcile these with the published-source wording and release commit.
Do not rewrite frozen notes or hashes merely to satisfy documentation checks.

Regression command: `python -B -m unittest discover -s tests -p test_release_docs.py`.

## Authorization and documentation scope

Distinguish three kinds of work:

- **Using the plugin on a product:** follow the user's task and that project's rules. Review-only requests stay read-only; local implementation does not independently authorize commits, pushes, PRs, merges, deployment, or production changes. The companion prompt pack defaults to local work.
- **Maintaining the packaged plugin:** the owner's synchronization directive below covers authorized changes to `plugins/ibm-design-language/` and their scoped release/install verification, unless explicitly limited to local or unpublished work. It does not authorize unrelated changes or override an explicit approval boundary in the current task.
- **Editing companion repository documentation:** README, installation/recovery guidance, history, and prompts outside the package can change without a plugin version bump, regenerated release artifacts, or reinstallation. Commit, push, PR, and merge still need authorization for the documentation task. A documentation-only update does not require a new plugin release.

Preserve frozen package bytes and historical evidence in all three cases. Report the actual delivery state; local documentation edits are not published documentation.

## Local and published synchronization

Owner directive, 2026-09-25: keep the installed personal plugin and its published
GitHub version in sync. An authorized update to this plugin includes the release,
installation and verification work below unless the owner explicitly limits it to
a proposal, local experiment or unpublished change. This is not authority to publish
unrelated work or product changes.

1. Edit a source branch, not the installed cache. Preserve unrelated changes and
   frozen releases. Use a new version for each published package.
2. Review the intended diff, validate the skill, run `python -B scripts/verify.py`
   and `python -B -m unittest discover -s tests -p test_install_parity.py`.
3. Merge the reviewed change after required CI passes. Publish the release from
   the exact merged commit only after its Windows/Linux checks pass.
4. Verify downloaded release assets; advance only this plugin's personal
   marketplace SHA to that release commit and use the supported installer.
5. Run `python -B scripts/verify-install.py INSTALL_DIRECTORY` from the matching
   release checkout. Confirm enabled state and fresh skill discovery as described
   in [Recovery](RECOVERY.md). Report the release URL, installed version and result.

Do not call a cache-only edit synchronized. Do not overwrite unknown local changes,
publish unrelated changes, weaken checks, or move a release tag to hide drift.
Keep the operation incomplete and identify the specific blocker if any step fails.
Periodic reconciliation can install a newer verified published release when the
current installation matches its own manifest; unexpected drift requires review
before replacement. Periodic checks are eventual reconciliation, not continuous
or atomic synchronization across GitHub and an offline computer.
