# IBM Design Language plugin

Permanent source package for `ibm-design-language@jp-personal`, version 1.1.13. Canonical public repository: https://github.com/pmeglaw/ibm-design-language-plugin. Use the reviewed release commit and checksums for recovery; release publication and CI status are recorded on GitHub.

## Contents

- `plugins/ibm-design-language/`: the 1.1.13 plugin, including the visual casebook, sources, evaluator and tests.
- `.agents/plugins/marketplace.json`: portable Codex marketplace. Plugin paths resolve from this repository root.
- `releases/`: the 1.1.13 ZIP plus preserved earlier ZIPs, file manifests and checksums for recovery.
- `evidence/`: selected existing package, installation, casebook and comparison receipts. Historical absolute paths identify the original machine; they are not dependencies. Full model transcripts and screenshot archives remain in the original task workspace and are not included here.
- `scripts/verify.py`: offline release, source and marketplace checks plus synthetic evaluator tests. No model calls.

## Verify

Requires Python 3.11 or later, with only the standard library:

```sh
python -B scripts/verify.py
```

Reports are written under ignored `.verification/`. Git preserves exact bytes through `.gitattributes`; do not normalize the frozen plugin or release files.

[Recovery and installation](docs/RECOVERY.md) | [Maintaining releases](docs/RELEASING.md)

## Reusable prompts

Use the [prompt pack](docs/prompt-pack/README.md) for new implementation and review sessions. It includes five general workflows and Seat Planner-specific prompts. These companion documents do not change the frozen plugin package or release version.

This package preserves verified work so restoration does not require repeating model evaluations. The 1.1.6 guidance passed 9/9 on one known screenshot regression. This author-graded case does not establish general improvement or repeatability; host skill-description truncation warnings are disclosed in the evidence. Earlier composition comparisons had two tied pairs, one incomplete pair and host configuration drift. Synthetic tests check evaluator mechanics, not design taste.

This is an independently maintained plugin, not an official IBM product. Bundled IBM Plex fonts retain their license and provenance files. No new blanket license is assigned to third-party material.

See [reviewed intake](docs/REVIEWED-INTAKE.md) for the target correction, adopted changes and evidence limits. The [earlier targeted report](evidence/1.1.8-targeted/REPORT.md) preserves the 1.1.7/1.1.8 failures. The [1.1.9 completion report](evidence/1.1.9-completion/REPORT.md) records the final targeted checks, unchanged status criterion and evidence limitations. Passing targeted cases is not a full-suite or general-quality certification.

The [1.1.10 candidate report](evidence/1.1.10-candidate/REPORT.md) records its local checks and one text-only design critique evaluation. It is not a rendered design validation.

## Release validation

See the [1.1.12 candidate evidence](evidence/1.1.12-candidate/REPORT.md) and [reproducible shell fixture](tests/nextjs-shell/README.md). The evidence report records the state before publication; current publication identity belongs to the [GitHub release](https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.1.13). Follow [recovery](docs/RECOVERY.md) for checksum and destination-installation checks.

Version 1.1.13 replaces HTML-string rendering in the offline casebook with DOM construction and strict control-value checks. See the [casebook regression tests](tests/casebook/README.md) for all 20 supported combinations and hostile-input/recovery coverage.
