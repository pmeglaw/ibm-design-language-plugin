# 1.1.32 release brief and documentation transition plan

Draft for owner review, 15 October 2026.

The 1.1.32 package and required CI gates are ready for a scoped guidance release.
The proposed release improves Bench review instructions and their handling of
project evidence and production authority. It does not certify generated product
quality. Publication, documentation publication and installation remain separate
actions; this draft authorizes none of them.

The current published and installed version remains **1.1.30**. Only this new
companion document is prepared locally. Existing source, frozen assets, results,
current publication guidance, account configuration and production stay unchanged.

## Release identity

| Item | Proposed or verified value |
| --- | --- |
| Version and proposed tag | 1.1.32; `v1.1.32` does not yet exist |
| Proposed tag target | `08839a956be8f0f3829986a0c414e3f496545b4f`, merged [PR 47](https://github.com/pmeglaw/ibm-design-language-plugin/pull/47) |
| Reviewed PR head | `17de38a74820ad74eabed518c62fa6d89e2cf230`; merge and reviewed head have identical file trees |
| Frozen archive | [plugin.zip](../releases/1.1.32/plugin.zip), 170 files |
| Archive SHA-256 | `08f7eb0ae3f0e8ddeb1ef3cf8fc8a11fe900b11403a228dc9cb912fca89cc224` |
| Release assets to reuse unchanged | `plugin.zip`, [SHA256SUMS](../releases/1.1.32/SHA256SUMS), [files.json](../releases/1.1.32/files.json), [NOTES.md](../releases/1.1.32/NOTES.md) |
| Evaluated bundle | `3568c439e1b695453afed63658bc5d4bb825f05e9ebaa1cc01ca42c52eadbd6c`; 168 skill files plus one evaluation-only routing catalog |
| Preserved published baseline | 1.1.30, tag `v1.1.30`, commit `cd2ad7c5af0fd7e77079e60b674a57d681d9c0d7` |
| Preserved 1.1.30 archive SHA-256 | `b98c087822c5f840158b36bf344d8a731d6781405b4c9926b8f168bcaca80b36` |

The evaluation catalog is absent from the release package. The proposed release
uses the already-reviewed archive; do not rebuild it to change preparation wording.
Prepared 1.1.31 remains unpublished and frozen.

## Proposed GitHub release text

The following text is a draft for a future release record. Its publication claim
becomes valid only after the authorized tag and release are created and verified.

### 1.1.32 Seat Planner contract discovery and production safeguards

Version 1.1.32 improves the Seat Planner UI/UX workflow:

- Discover current project contracts through supplied document readers or
  repository paths before treating a blocked shell or empty workspace as missing
  evidence. Respect declared read bounds and current project authority.
- Explain the scope and consequences of requested production-data actions,
  including refusals and deferrals. Require applicable owner authority and current
  safeguards, reuse valid scoped approval, and clarify ambiguous assent.
- Follow the approved admin-editing policy at every viewport width, including
  200% zoom, while preserving viewer read-only behavior and server/database,
  draft, concurrency, protected-seat and confirmation boundaries.

The release preserves the three skill identities, general IBM companion guidance,
application dependencies, runtime assets, evaluator assertions and existing gates.
The repository-only evaluation adapter and sanitized evidence ledgers are outside
the plugin ZIP. Production-data actions still require their own authority.

Release commit: `08839a956be8f0f3829986a0c414e3f496545b4f`.
The 170-file package matches its frozen manifest. Its ZIP SHA-256 is
`08f7eb0ae3f0e8ddeb1ef3cf8fc8a11fe900b11403a228dc9cb912fca89cc224`.

Verification and limits:

- All nine package, fixture, shell, adapter and release-documentation CI jobs
  pass on the release commit before publication. Three additional code-analysis
  jobs also pass. Post-publication documentation validation is pending; record
  its actual outcome and link its receipt after that check completes.
- The original ten scenarios all executed: **3 PASS / 7 INCOMPLETE**, with
  **24 pass / 0 fail / 12 not tested** criteria. Separate targeted evidence
  contributes **12 known passing cases / 70 criteria across two packets**;
  those results are reused, not new invocations at publication.
- Later fixture, continuation and reader investigations have separate records.
  They do not replace original scores. Historical failures, incomplete attempts
  and configuration limitations remain preserved in the
  [consolidated closeout](https://github.com/pmeglaw/ibm-design-language-plugin/blob/08839a956be8f0f3829986a0c414e3f496545b4f/docs/SEAT-PLANNER-EVALUATION-CLOSEOUT-2026-10-14.md).
- Model evidence uses `gpt-6.1-sol`, reasoning `medium`, tier `default`, under
  the recorded `paired-2026-10-14-A` controls. Known, unblinded samples do not
  establish causality, repeatability or general design quality.
- Synthetic SQL uses disposable data and emulated Auth. Real Auth/action/database
  integration, complete browser and assistive-technology coverage, production
  behavior and native installed discovery of 1.1.32 remain unverified.

Frozen preparation notes retain the state when the archive was prepared,
including earlier NOT RUN and unpublished wording. Later dated ledgers establish
subsequent execution and the GitHub release record establishes publication.
Downloaded release assets and destination installation require separate receipts;
local archive integrity alone proves neither.

## Evidence supporting the review

The candidate source and archive match all 170 manifest entries. The 168 skill
files match the evaluated bundle. Exact-commit CI is available in
[plugin verification](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/38769441243),
[adapter integration](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/38769441434),
[release documentation](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/38769441849)
and [code analysis](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/38769441557).
These checks establish package and fixture properties, not live Bench behavior.

The 15 October local Python regression run finished with 36 passes and two
expected Windows symlink-capability skips. Its clean run used a child-process
environment containing `PYTHONUTF8=1`, inherited by test subprocesses. An earlier
parent-only UTF-8 invocation reported OK but emitted a decoding-thread exception;
it is qualified rather than counted as a clean pass. No persistent environment
or security setting changed.

The default whitespace PASS for the original three closeout documents and the
later one-document clarification remains scoped to those diffs. Whole-PR default
checking flags the two preserved CRLF endings in the skill entrypoint. The
[documented process-only CRLF recognition](SEAT-PLANNER-SOURCE-1.1.32-2026-10-14.md#preservation-and-validation)
passes while retaining the evaluated bytes and normal space/tab checks.

The [original-suite ledger](SEAT-PLANNER-SOURCE-1.1.32-ORIGINALS-2026-10-14.md)
and [source-integration ledger](SEAT-PLANNER-SOURCE-1.1.32-2026-10-14.md)
provide the distinct cohort and reuse identities. Their dated PR status is
historical; PR 47 subsequently merged on 15 October. Preserve those records.

## Documentation transition after publication

Apply these changes only after the actual `v1.1.32` release and tag have been
verified. Until then, active README, Recovery, Installation and History claims
must continue to identify published 1.1.30. This plan is outside the package
and does not require a version bump, new archive or installation.

| File | Exact transition to prepare | What stays unchanged |
| --- | --- | --- |
| [README.md](../README.md) | Replace all three introductory release paragraphs (current published version, Version 1.1.30 summary and unpublished source) with the three proposed paragraphs below. Replace the package entry with the exact published 1.1.32 entry below. Move the old 1.1.30 summary unchanged into a historical section after the first `##` heading, outside the checked introduction; retain its provenance-erratum link. | Earlier release evidence, provenance errata, usage contracts and explicit installed-version distinction. |
| [RECOVERY.md](RECOVERY.md) | Set the current identity to version/tag 1.1.32, commit `08839a956be8f0f3829986a0c414e3f496545b4f`, archive SHA-256 `08f7eb0ae3f0e8ddeb1ef3cf8fc8a11fe900b11403a228dc9cb912fca89cc224`, manifest `releases/1.1.32/files.json` and the actual release URL. Update current tag/manifest references in verification steps. Add 1.1.30 as the previous published rollback identity using the preserved values above. | Existing rollback history, immutable tags, uploaded-account instructions and credential/privacy safeguards. Do not describe 1.1.31 as a published rollback. |
| [INSTALLATION.md](INSTALLATION.md) | Point new installations to the actual 1.1.32 release, `v1.1.32^{commit}`, its manifest and expected version. Continue to pin an immutable release commit. | Existing installations, marketplace entries and account configuration. An uploaded account plugin uses its supported update flow and identity, rather than a duplicate Git marketplace installation. |
| [HISTORY.md](HISTORY.md) | Change the opening current-published statement and current publication link to 1.1.32. Add a new Version 1.1.32 paragraph with the actual release URL, full commit, scope and evidence limits. Record downloaded-byte and installation outcomes only when their receipts exist. | Every earlier version paragraph and result; add rather than rewrite history. |
| [RELEASING.md](RELEASING.md) and `scripts/verify.py` | Review for consistency; `CURRENT` already equals 1.1.32 and needs no change for this release. | All verification requirements, retained archive checks and authorization boundaries. |
| `plugins/ibm-design-language/`, `releases/`, existing evaluation ledgers | No edit. Explain historical preparation wording in current companion guidance and the release record. | All frozen bytes, prior grades, raw private evidence and earlier archive identities. |
| `.agents/plugins/marketplace.json` and installed account plugin | No edit as part of a publication-only transition. | Existing catalog identity, sharing, permissions, installed 1.1.30 and unrelated configuration. |

### Proposed README wording after verified publication

Replace the current published-version paragraph with:

> The current published package is **1.1.32**. [Source](https://github.com/pmeglaw/ibm-design-language-plugin) · [Release](https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.1.32) · [Install](https://github.com/pmeglaw/ibm-design-language-plugin/blob/main/docs/INSTALLATION.md)

Move the existing Version 1.1.30 summary paragraph unchanged to a historical
section after the first `##` heading, outside the checked README introduction.
Keep its release-notes and provenance-erratum links there. In its former position,
insert this current-release summary:

> Version 1.1.32 improves Seat Planner contract discovery, scoped production-authorization reporting and the current all-width admin-editing baseline. See the [published release notes](https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.1.32) and [consolidated evaluation closeout](https://github.com/pmeglaw/ibm-design-language-plugin/blob/08839a956be8f0f3829986a0c414e3f496545b4f/docs/SEAT-PLANNER-EVALUATION-CLOSEOUT-2026-10-14.md) for scope and limits. Original scenarios retain 24 passing and 12 not-tested criteria; later targeted results do not replace those scores. Downloaded release-asset verification, post-publication documentation validation, destination installation and fresh discovery are pending; record each actual outcome and receipt when its separately authorized check completes.

Replace the current unpublished-source paragraph with:

> The working package matches published **1.1.32**, released from commit `08839a956be8f0f3829986a0c414e3f496545b4f`. Frozen preparation notes retain their original candidate wording; later evaluation ledgers and the GitHub release record establish subsequent execution and publication. The existing owner installation remains **1.1.30**; this publication does not update it. Destination installation and fresh discovery are separate checks.

Use that installed-version sentence only while the owner installation is still
verified as 1.1.30. A later authorized update must reconcile the statement with
the actual destination receipt rather than infer installation from publication.

In `## Repository contents`, replace the complete package entry with:

> - `plugins/ibm-design-language/`: the published 1.1.32 package source with its three skills, references, assets and evaluator; the frozen release archive and manifest are in `releases/1.1.32/`.

The current package entry must reference only the 1.1.32 archive. Preserve older
release identities in History, Recovery rollback entries and the historical README
section. Check every release URL in the introduction points to `v1.1.32`; changing
only the published-version and source paragraphs leaves a stale 1.1.30 release link
and fails the existing documentation checker.

### Proposed History paragraph after verified publication

> Version 1.1.32 improves Seat Planner contract discovery, scoped production-authorization reporting and the current all-width admin-editing baseline. The [published release](https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.1.32) is from `08839a956be8f0f3829986a0c414e3f496545b4f`. All nine required CI jobs and three additional code-analysis jobs passed on that commit. Original scenarios retain 24 passing and 12 not-tested criteria; separate known targeted and follow-up samples do not backfill those scores. Frozen preparation notes and prior failures remain unchanged. Downloaded release-asset verification, post-publication documentation validation, destination installation and fresh discovery are pending; record each actual outcome and receipt when its separately authorized check completes.

In each proposed public paragraph, replace only the completed check's pending
state with its actual outcome and receipt link. Preserve the other pending states;
one completed check does not establish the others. Installation remains outside
the current authority.

## Execution sequence for a later authorized task

1. **Confirm the approved scope.** Record whether authority covers publication
   and the companion-documentation commit/push/PR/merge. Preserve the current
   prohibition on installation unless the owner separately changes that boundary.
   Approval of this draft's wording alone is not action authorization.
2. **Recheck the exact release inputs.** Confirm tag target
   `08839a956be8f0f3829986a0c414e3f496545b4f`, manifest/source/ZIP identity and
   required exact-commit CI. If the intended target changes, stop and reassess
   its diff and CI; do not silently retarget this brief to the latest main.
3. **Publish only if explicitly authorized.** Create `v1.1.32` at that exact
   commit and attach the four unchanged assets. Use the approved release text
   with links resolved to actual public evidence. Never move an existing tag or
   replace an asset to conceal unexpected drift.
4. **Verify remote publication.** Resolve the tag to the intended full commit;
   download all four assets into a fresh external location. Compare each to the
   committed bytes, verify the ZIP checksum and every manifest entry, and record
   the actual outcome. A release page or successful upload is insufficient.
5. **Reconcile current companion documentation.** Apply the reviewed transitions
   on a documentation branch, with Git publication only inside its authorized
   scope. Review the diff and links; run release-documentation regressions,
   offline validation and `python -B scripts/verify_release_docs.py --github`.
   The release-triggered check may report drift while current docs still say
   1.1.30. Preserve that failure and confirm the correction's exact-head CI;
   do not bypass the check or claim documentation is current during that window.
6. **Verify the actual destination only under separate authority.** For the
   existing uploaded account plugin, use its supported update flow with the same
   verified plugin identity; preserve sharing and unrelated files. For an actual
   Git-marketplace destination, follow its existing pinned-commit procedure.
   Verify destination version, enabled state, release-file parity and fresh
   discovery of all three intended skills using [Recovery](RECOVERY.md).
   Publication-only work leaves the existing installation at 1.1.30 and reports
   1.1.32 destination verification as pending.

The final handoff must distinguish the published release, downloaded bytes,
current documentation and destination installation. A partial outcome remains
partial even when every earlier package gate passed. None of these steps permits
Bench production-data actions or a security-policy change.

## Stop conditions and recovery

- A candidate hash mismatch, unexpected source change, missing required CI pass,
  or an existing `v1.1.32` pointing elsewhere stops publication. Investigate without
  regenerating frozen hashes, moving tags or overwriting unrelated work.
- An access or installer refusal is a blocker for that operation. Use the
  supported route; do not copy credentials, relax security policy or replace
  account configuration to bypass it.
- If publication succeeds but documentation or destination checks fail, report
  the exact partial state. Keep 1.1.30 available as the verified rollback anchor.
  Do not delete the release, retag it or change an installation as automatic
  cleanup; any corrective or rollback action needs its own applicable authority.

## Owner review decisions

- [ ] Accept the scoped release text and its separation of original, reused and
  later follow-up evidence, including the remaining unverified behavior.
- [ ] Confirm the proposed immutable tag target and four frozen assets.
- [ ] Accept the documentation transition and its temporary post-publication
  drift check, while preserving preparation notes and historical results.
- [ ] Keep publication, documentation publication and destination installation
  scopes explicit in any later action request. Current status remains draft
  review only; no release, tag, commit, push, merge or installation is approved
  by these unchecked items.
