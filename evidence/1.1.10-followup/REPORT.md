# 1.1.10 baseline-adoption follow-up — 2026-09-24

## Verified

The audited release remains commit `16ffacdb1c4761a0bc5add45325b256ff2b57a0b`. The frozen plugin and all historical release assets are unchanged by this follow-up.

- Repository verifier passes: 106 source files, 171 local links, archives 1.1.4 through 1.1.10, suite schemas and 41 synthetic tests. No model success is inferred from these checks.
- A supported Git marketplace installation pinned to the full release commit succeeded in this Linux audit environment with Codex CLI 0.154.0-alpha.3. The marketplace checkout resolves to the exact commit; all 106 installed file hashes match `releases/1.1.10/files.json`.
- A fresh app-server `skills/list` with `forceReload: true` found one enabled canonical plugin entry, `ibm-design-language:ibm-design-language`, owned by `ibm-design-language@jp-personal`. See [installation receipt](installation.json).
- A pre-existing enabled standalone IBM skill was also discovered. It was preserved. Canonical discovery passes; a single unambiguous IBM entrypoint does not. This receipt does not verify the user's desktop installation or change its baseline.

## Controlled comparison: blocked, not passed

The separate [frozen transfer case](outcome-evidence-suite.json) tests the new outcome-evidence behavior through a synthetic service-request triage prototype. It has 11 assertions and five visual dimensions; it does not modify the bundled regression suite. Baseline and candidate packets used the same case, model (`gpt-6-astra`), high reasoning, 600-second ceiling, preview port and host configuration.

The 1.1.9 baseline attempt failed before model work because the CLI filesystem sandbox could not create a NETLINK_ROUTE socket. The failed attempt is retained; the candidate is prepared but unrun. No generated prototype, browser result, assertion pass or quality comparison exists. See [comparison status](comparison-status.json). No sandbox bypass was attempted.

The host also exposes the installed candidate and an older standalone skill. Future valid runs must control competing entrypoints; exact snapshot delivery alone does not prove exclusive reliance. Preserve this failed attempt and use fresh packets on a functioning supported host.

## Adoption status

Package integrity and canonical installation/discovery pass in the audit environment. Current recovery documentation is corrected to pin the exact 1.1.10 commit and use its matching manifest. The repository release-maintenance version is corrected. These are documentation/evidence changes, not a new plugin release.

Unconditional baseline adoption remains on hold. Outcome-specific behavior, rendered improvement, actual product/Carbon DataTable integration, dark-theme production behavior, representative-user success and assistive-technology integration remain unverified. The existing candidate's reported dashboard 8/8 is not regraded or promoted to broader evidence here.

The GitHub release description still needs its explicit recovery-identity addendum. Available GitHub connector operations do not edit releases, and the browser session is signed out. [Prepared addendum](release-record-addendum.md) contains only verified claims. No published tag or asset should be moved or replaced.

## Next execution

Use a supported host whose normal workspace-write sandbox works. Resolve or explicitly control competing IBM entrypoints before freezing both packets. Extract each unchanged release ZIP into its own staging directory; use its `skills/ibm-design-language` directory as `--skill-root`.

For each version, use the unchanged `scripts/evaluate.py prepare` with this external suite, a new `--results-root`, identical model/reasoning/context, `--ids 25`, `--timeout-seconds 600` and `--preview-port 49401`. Run sequentially with the same CLI and `run --timeout 600 --ids 25`. Do not reuse attempted packet directories.

Independently inspect each output, render at matching desktop/narrow viewports and themes, exercise search/filter/assignment/failure/retry and keyboard paths, and score every assertion and visual dimension with evidence. A missing or failed execution never counts as a pass. This single pair still cannot establish repeatability or real-user/AT success.
