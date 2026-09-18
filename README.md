# IBM Design Language plugin

Permanent source package for `ibm-design-language@jp-personal`, starting with stable 1.1.5. Private source repository: https://github.com/pmeglaw/ibm-design-language-plugin. The initial release is `v1.1.5`; use its resolved commit and release checksums for recovery.

## Contents

- `plugins/ibm-design-language/`: the exact 103-file approved 1.1.5 plugin, including the visual casebook, sources, evaluator and tests.
- `.agents/plugins/marketplace.json`: portable Codex marketplace. Plugin paths resolve from this repository root.
- `releases/`: exact 1.1.5 and 1.1.4 ZIPs, file manifests and checksums for recovery.
- `evidence/`: selected existing package, installation, casebook and comparison receipts. Historical absolute paths identify the original machine; they are not dependencies. Full model transcripts and screenshot archives remain in the original task workspace and are not included here.
- `scripts/verify.py`: offline release, source and marketplace checks plus synthetic evaluator tests. No model calls.

## Verify

Requires Python 3.11 or later, with only the standard library:

```sh
python -B scripts/verify.py
```

Reports are written under ignored `.verification/`. Git preserves exact bytes through `.gitattributes`; do not normalize the frozen plugin or release files.

[Recovery and installation](docs/RECOVERY.md) | [Maintaining releases](docs/RELEASING.md)

This package preserves verified work so restoration does not require repeating model evaluations. Measured design improvement remains unproven: the last comparison had two tied pairs, one incomplete pair and host configuration drift. Synthetic tests check evaluator mechanics, not design taste.

This is an independently maintained plugin, not an official IBM product. Bundled IBM Plex fonts retain their license and provenance files. No new blanket license is assigned to third-party material.
