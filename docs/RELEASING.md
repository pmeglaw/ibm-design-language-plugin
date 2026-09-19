# Maintaining releases

Keep frozen release ZIPs and their manifests unchanged. Make new work on a task branch. Change the source plugin and increment its version only for an intentional release; the validator deliberately rejects drift from the current 1.1.6 snapshot until a new release is prepared.

For a new release, review the source diff, run relevant local checks, write accurate release notes, build a fresh ZIP and file manifest, and update the validator's current release version. Never regenerate hashes merely to hide an unexpected difference. Preserve older versions for rollback.

Run `python -B scripts/verify.py`. This invokes synthetic tests only. Behavioral or visual changes may need targeted evaluation with separate authorization; routine restoration does not. Record what was tested, reused, failed or untested. Preserve known evidence limitations.

After review and explicit approval, commit, push to a private repository, tag the reviewed commit and attach the ZIP/checksums to its GitHub release. Record the full commit ID. Do not move published tags. Verify the downloaded release bytes and supported marketplace installation before calling remote recovery tested.

CI runs the same local verification command on Windows and Linux. Check both operating-system jobs on the exact release commit before publishing. CI does not install plugins, use API keys, or run model evaluations. Keep raw transcripts, account configuration, credentials and temporary packets out of source control.
