# 1.1.47 existing-plugin synchronization — 2 November 2026

The existing private USER-scoped account plugin was updated through Plugin
Creator's supported guarded update flow, preserving its identity and audience.
No duplicate Git marketplace installation or manual cache edit was made.

## Release and repository identity

- Published [v1.1.47](https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.1.47)
  resolves to `d469633cfa77c3652d111cb05da5c46f8e3c52fd` by fetched tag and live remote ref.
- Downloaded ZIP SHA-256:
  `006aac5e6f4f3b3184355eca79cd7499ae9362c5825e55b02d1e62348ef41b40`.
- All four freshly downloaded assets are byte-identical to the immutable tag's
  frozen assets. All 178 ZIP files match `releases/1.1.47/files.json`.
- Initial checkout: clean `main` at `3e5a768e22702cf56400d91dbbd0328b85f5d43a`.
  It was fast-forwarded to `58cc052aaa144939c7cdaf25eb8b992e32d7bbf8`,
  then a task branch was created for this companion documentation only.
  Source version, validator CURRENT and frozen manifest agree on 1.1.47.

## Destination checks

Before replacement, the complete 1.1.46 account archive and local cache each
passed `python -B scripts/verify-install.py INSTALL_DIRECTORY`: 179 files,
zero missing, extra or changed. Recovery archive and private raw evidence are
retained outside tracked source in the ignored verification directory.
No unexpected drift was discarded. The marketplace listing contained no
`jp-personal` entry; this destination uses the existing uploaded account flow.

After the update:

- Fresh complete account archive: matching 1.1.47 release, private USER scope;
  179 files pass the matching-source installation verifier.
- Local `created-by-me-remote/ibm-design-language/1.1.47` cache: 179 files pass
  the same verifier, zero missing, extra or changed. Both checks cover 178
  release files and the exact separately validated host compatibility wrapper.
- Native forced `plugin/list`: exact existing remote identity, version and
  localVersion 1.1.47, installed and enabled true.
- Native forced `skills/list`: all three enabled qualified skills with the
  expected plugin ID and 1.1.47 destination paths: `ibm-design-language:design-ui`,
  `ibm-design-language:review-product-experience`, and
  `ibm-design-language:seat-planner-ui-ux`.
- Fresh discovery passed in **4.814 seconds** using CLI 0.165.0. One monotonic
  five-second deadline covered initialize, forced catalog refresh and discovery;
  no deadline reset, extra roots or policy/trust changes were used.

## Verification and limitations

`python -B scripts/verify.py` passed from the extracted immutable release source.
`python -B -m unittest discover -s tests -p 'test_*.py'` passed on the current
matching package checkout: 38 tests, two skipped. The first sandboxed run failed
with temporary-directory permission errors; rerunning outside that restriction
passed. The initial sandboxed CLI catalog request also failed network access;
the later native catalog read above succeeded. Neither initial attempt counts
as a pass.

Reused remote evidence: the [exact-release CI run](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/41248870118)
has six successful jobs: Windows/Linux verification, release fixture, behavior
fixture, casebook and Next.js shell. Publication-time documentation failures
remain preserved: [run](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/41248870345)
reported latest-release/documented-version drift. The later
[companion documentation run](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/41256328315)
passed at `58cc052aaa144939c7cdaf25eb8b992e32d7bbf8`.

Final local companion edits passed `python -B scripts/verify.py`, offline and
live `python -B scripts/verify_release_docs.py --github` identity checks,
`python -B -m unittest discover -s tests -p 'test_release_docs.py'` (22 tests),
and `git diff --check`. The documentation verifier reports assets/installation
as unverified by its own scope; the separate archive, parity and native checks
above establish those destination results. At receipt preparation, these edits
had no commit or CI run; subsequent documentation delivery is recorded in the
repository's Git and pull-request history.

This verifies the recorded account destination and fresh native session only.
Existing-chat refresh, automatic selection, other hosts/installations,
model-generated product quality and assistive-technology behavior remain
unverified. Frozen releases and historical receipts are unchanged. Publication
of this receipt and current companion guidance is a documentation-only follow-up;
no new package release or tag is required.
