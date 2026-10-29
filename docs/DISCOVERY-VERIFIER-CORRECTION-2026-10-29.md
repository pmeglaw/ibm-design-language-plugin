# 1.1.39 discovery verifier correction — 29 October 2026

## Corrected result

The reported native discovery failure was a verifier false negative. Native
`skills/list` returned all three enabled 1.1.39 skills, but the probe expected
bare names and rejected the valid plugin-qualified names:

- `ibm-design-language:design-ui`
- `ibm-design-language:review-product-experience`
- `ibm-design-language:seat-planner-ui-ux`

The earlier probe continued polling after the complete result was available and
reported its eventual readiness/transport deadline as a failure. Reanalysis of
both original logs found all three enabled skills at the correct destination on
completed scan 2. Inspecting only the initial scan had missed those later results.
The original failure verdicts describe the faulty probe, not missing native skills.

## Reused diagnostic evidence

These observations were obtained in the earlier diagnostic phase on 29 October,
before this documentation correction. They are reused evidence, not new runs
performed while editing documentation.

| Independent fresh session | Shared elapsed time | Result |
|---|---:|---|
| CLI 0.165.0, instrumented | 1.020 s | PASS before five seconds |
| Desktop native 0.165.0-alpha.1.2, instrumented | 1.005 s | PASS before five seconds |
| CLI, strict five-second probe | 0.966 s | PASS |
| Desktop native, strict five-second probe | 0.914 s | PASS |

The corrected matcher requires the three exact qualified names, enabled state,
exact plugin identity and the existing 1.1.39 destination. Initialization, forced
catalog read and forced skill reload are included in the shared measured interval.
The instrumented sessions allowed up to 20 seconds for diagnosis but passed around
one second. The separate strict probes retained the original shared five-second
transport deadline; no extended deadline was used to turn a failure into a pass.

Six matcher controls passed: the actual complete set is accepted; bare names,
a missing skill, disabled state, another plugin identity and another version are
rejected. Matching-source installation verification passed for 178 files: all
177 release-owned files plus the validated host wrapper, with zero missing,
extra or changed files.

## Original evidence and retention limit

The [installation record](INSTALLATION-1.1.39-VERIFICATION-2026-10-29.md) and
[publication record](RELEASE-1.1.39-PUBLICATION-2026-10-29.md) retain their complete
original bodies beneath explicit correction notices. Their reported transport
and readiness outcomes are preserved as verifier false negatives; they are not
silently replaced by passing results. The original preparation record, frozen
archives, manifests, checksums and earlier receipts are unchanged.

The original helper and original CLI raw log are retained privately. Original
desktop findings were extracted during reanalysis, but its full old raw log was
inadvertently overwritten during the diagnostic phase when an output-label
change failed to apply. That original raw file is unavailable; the extracted
findings and independently saved fresh instrumented/strict records remain.
This evidence-retention limitation is not repaired or hidden by the correction.
Existing private diagnostic files are preserved during this documentation task.
Raw responses, account identifiers and local configuration are not published.

## Delivery and scope

The package remains [v1.1.39](https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.1.39)
at `d34cb0621b636fcc72d4971eb411d79cddd16c84`. No package version bump, changed
release asset, retagging, account update, reinstall or configuration/policy repair
is needed. This correction changes companion documentation and release-description
wording only. Publication-time documentation CI failure remains separate preserved
evidence; this discovery correction does not reclassify that genuine transition.

Fresh native discovery is verified for these sessions and this destination.
Automatic selection, running-conversation refresh, generated-product quality,
assistive-technology behavior and other installations remain unverified.

## References

The [official app-server API](https://learn.chatgpt.com/docs/app-server) defines
catalog and skill-list reads. The [versioned native regression test](https://github.com/openai/codex/blob/rust-v0.165.0/codex-rs/app-server/tests/suite/v2/skills_list.rs#L485)
expects plugin-qualified names and allows an initial empty scan before background
installed-plugin refresh completes. These sources support the API/probe distinction;
the destination results and timings above come from the local diagnostic records.
