# Maintaining releases

Keep frozen release ZIPs and their manifests unchanged. Make new work on a task branch. Change the source plugin and increment its version only for an intentional release; the validator deliberately rejects drift from the current locally prepared snapshot (1.1.14) until a new release is prepared.

For a new release, review the source diff, run relevant local checks, write accurate release notes, build a fresh ZIP and file manifest, and update the validator's current release version. Never regenerate hashes merely to hide an unexpected difference. Preserve older versions for rollback.

Run `python -B scripts/verify.py`. This invokes synthetic tests only. Behavioral or visual changes may need targeted evaluation with separate authorization; routine restoration does not. Record what was tested, reused, failed or untested. Preserve known evidence limitations.

After review and publication authorization (including a request to synchronize the local plugin with its published version), commit, push to the canonical repository, tag the reviewed commit and attach the ZIP/checksums to its GitHub release. Record the full commit ID. Do not move published tags. Verify the downloaded release bytes and supported marketplace installation before calling remote recovery tested.

CI runs the same local verification command on Windows and Linux. Check both operating-system jobs on the exact release commit before publishing. CI does not install plugins, use API keys, or run model evaluations. Keep raw transcripts, account configuration, credentials and temporary packets out of source control.

The canonical repository is public. Keep private fixtures, raw transcripts and local configuration out of commits and release assets; publish reviewed summaries only. Use the exact merged commit for the release tag and verify both OS jobs on that commit before publishing.

Casebook rendering changes also require `node --test tests/casebook/renderer.test.cjs` with the pinned fixture dependencies and Chromium installed. CI runs this browser check on Linux, separately from the Windows/Linux package verification.

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
