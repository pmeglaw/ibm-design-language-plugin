# IBM Design Language 1.1.9 completion

Final targeted acceptance passed **37/37 assertions across six cases**. The unchanged strict status criterion now passes: the recommended generated code puts distinct Carbon symbols inside the requested circular carriers. The dashboard criterion also passes after resolving contradictory always-one-primary guidance. This is targeted single-run acceptance on known cases, not a full-suite or general improvement claim.

## Runs and immutable evidence

This completion performed 12 model calls: six on an initial candidate and six on the final frozen skill. The initial candidate scored 35/37; its two failed criteria remain failed. The earlier nine calls and 1.1.7/1.1.8 results remain in the [previous report](../1.1.8-targeted/REPORT.md).

| Snapshot | Case | Assertions passed | Verdict |
| --- | --- | --- | --- |
| Initial 1.1.9 candidate | 4 | 6/7 | fail |
| Initial 1.1.9 candidate | 2 | 7/8 | fail |
| Initial 1.1.9 candidate | 7 | 7/7 | pass |
| Initial 1.1.9 candidate | 22 | 6/6 | pass |
| Initial 1.1.9 candidate | 23 | 6/6 | pass |
| Initial 1.1.9 candidate | 24 | 3/3 | pass |
| Final 1.1.9 | 2 | 8/8 | pass |
| Final 1.1.9 | 4 | 7/7 | pass |
| Final 1.1.9 | 7 | 7/7 | pass |
| Final 1.1.9 | 22 | 6/6 | pass |
| Final 1.1.9 | 23 | 6/6 | pass |
| Final 1.1.9 | 24 | 3/3 | pass |

The final skill snapshot SHA-256 is `9f906f7586ff05de2bbde014ac25c4a185596ce109bedba3f0d48bc50d5ae393`. The initial candidate is `8073e65a6968411569c27a57e27540c2d1d8525437e7045dd8e57d1719f8a8ee`. The release's skill bytes exactly match the final evaluated snapshot. The strict status/dashboard/modal criteria did not change during this completion. Case 24's guidance-plan wording was clarified before either run; older archives retain its old wording and scores are not silently compared across that clarification.

[Results and reviews](results.json) preserve criteria, per-case judgments, original evidence hashes and local raw-archive checksums. Raw packets, transcripts, original outputs, calculations and full identities are in ignored `.verification/behavior/` ZIPs. Public summaries omit host-configuration fingerprints and redact local absolute paths. Raw archives must be retained separately for full replay; do not rewrite frozen inputs or generated outputs. Public status deliverables are under [status-output](status-output/README.md) as evaluation evidence, not a new supported component library.

## Verification

- Python 3.14.7, Codex CLI 0.156.1, gpt-6-astra, medium reasoning, 600-second per-case ceiling. Task-scoped ephemeral workspace-write runs. The temporary Python runtime was verified against the upstream asset SHA-256. No global runtime installation was needed.
- A separate version-aware agent graded outputs it did not generate. Initial and final grading was not blind. All final cases have no critical findings; source contrast calculations were independently reproduced.
- Generated status JSX compiled with React 19.3.0 and @carbon/icons-react 11.88.0. Chrome 154.0.8037.58 rendered the unchanged generated component/CSS with the plugin's bundled light token/font fixtures at 1280px and 320px. Markers measured 16px, all symbols and labels remained visible, and the explicit host hover fixture computed #e8e8e8. No horizontal overflow; 28px/36px long headings wrapped without overlap.
- Both parent and independent reviewer inspected the [desktop](browser/status-1280.png), [narrow](browser/status-320.png) and [forced-colors](browser/status-320-forced-colors.png) screenshots. No material legibility issue; the warning glyph is denser than the others but distinguishable alongside its label. Browser measurements, dependency lock and independent observations are retained under `browser/`.
- [Local installation verification](installation.json) confirms 106 matching files and one enabled namespaced skill, `ibm-design-language:ibm-design-language`, owned by `ibm-design-language@jp-personal`. A fresh app-server reload was used. Models finished before installation to avoid changing their recorded host configuration mid-run.
- Offline release/source checks, all 41 synthetic evaluator tests, the 21-case/121-assertion regression schema and 3-case/15-assertion intake schema passed on Python 3.14. Earlier archives 1.1.4–1.1.8 remain unchanged. Skill frontmatter and relative links are validated separately. CI and final merged commit are recorded on the PR/release.

## Limits

The browser fixture uses server-rendered React, current Carbon icon exports and bundled theme/font tokens, with an explicit table hover host. It is not the actual product or Carbon DataTable integration. Dark themes, assistive technology and production behavior were not tested in this light-theme status request. Case 24 passes as a guidance plan; the separate rendered heading fixture is additional reviewer evidence, not an invented model-performed check.

Some generated descriptions claim casebook image inspection not independently substantiated by retained CLI events. Missing events do not prove that viewing never happened. Those claims received no independent visual-verification credit; the reviewer-operated status screenshots are separate evidence. All known limitations and earlier failures remain disclosed. No Seat Planner application files, private records or production dependencies changed in this completion.
