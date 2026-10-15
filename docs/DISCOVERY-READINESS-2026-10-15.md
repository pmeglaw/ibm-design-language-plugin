# Discovery readiness investigation — 15 October 2026

This sanitized addendum supplements the unchanged
[installation receipt](INSTALLATION-1.1.32-VERIFICATION-2026-10-15.md).
It records later discovery investigation, not a new installation, plugin version
or regrade of earlier model results.

## Observed sequence

After the 1.1.32 installation was verified, two immediate fresh standalone
app-server probes returned no IBM skills. Changing only the process working
directory did not resolve that immediate result. Both failed probes remain
preserved separately from the earlier successful discovery record.

Two instrumented fresh sessions using different client identities then showed the
same sequence: an immediate scan lacked the IBM entries; a later scan in the same
process returned the three expected enabled skills at the installed 1.1.32 paths.
The relevant runtime features were already enabled. No feature setting was
changed to obtain that result.

Three further fresh sessions isolated waiting from the extra diagnostic reads.
They used only `initialize`, `initialized`, `plugin/list` and repeated
`skills/list`, without model-list or feature queries. All three immediate scans
again lacked the IBM skills. A bounded readiness check, polling every 200 ms,
then found all three expected enabled skills in each session:

| Session | Immediate scan | Later scan | Time from process start |
| --- | --- | --- | ---: |
| 1 | No IBM entries | Three expected enabled skills at 1.1.32 paths | 0.812 s |
| 2 | No IBM entries | Three expected enabled skills at 1.1.32 paths | 1.031 s |
| 3 | No IBM entries | Three expected enabled skills at 1.1.32 paths | 0.766 s |

The later sample followed the initial scan by about 0.3 seconds. The observed
recovery needed neither installation actions nor permission, feature, trust or
security-policy changes. No extra skill roots, thread creation or model execution
were used.

## Interpretation and limits

The immediate probes sampled fresh-host startup before remote-plugin discovery
was ready. The bounded checks establish that observed readiness behavior; they
do not establish a general host reliability guarantee, a maximum startup time or
an internal host source-code diagnosis. Three successful sessions are a small
known sample.

Use the active [bounded readiness procedure](RECOVERY.md#bounded-discovery-readiness)
rather than treating the first empty scan as definitive or adding a fixed sleep.
A missing, partial, disabled or wrong-version result at the deadline remains a
failed discovery check. Do not change installation or security state to force
a pass. A transport timeout remains distinct from a completed but incomplete scan.

The existing desktop control-socket connection previously timed out and was not
retested by these standalone probes. Native standalone discovery is not proof
that an existing desktop conversation refreshed its catalog or automatically
selected the intended skill.

## Preserved records and delivery

The earlier discovery PASS, the two failed immediate rechecks and all first/final
smoke results remain unchanged. The first smoke retains incomplete intake and
11/12 response criteria, including the refusal failure; the final response-only
smoke retains its separate 3/3 cases and 12/12 criteria. None of these scores is
replaced by the readiness observations.

The existing release description was corrected separately to distinguish
publication-time 1.1.30 history from the later authorized 1.1.32 installation and
these readiness results. Its release identity and four asset IDs, digests and
sizes were unchanged. See [v1.1.32](https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.1.32).

Hash comparisons confirmed frozen/package bytes, earlier results, installed
1.1.32, product HEAD/status and selected configuration/security-policy files
unchanged during the investigation. Raw transcripts, account identifiers,
configuration and private archives remain outside this public repository.
This summary is not independently replayable from public transcripts.

This documentation follow-up changes no packaged skill, release asset or
installer. It authorizes no release, reinstall, deployment, product edit or
production-data action. The observations establish no generated-product,
browser, assistive-technology, database-integration or production-runtime pass.

Official API reference: [OpenAI app-server documentation](https://learn.chatgpt.com/docs/app-server)
defines catalog and skill-list reads and `forceReload`. The timing interpretation
above comes from local measurements, not a documented readiness guarantee.
