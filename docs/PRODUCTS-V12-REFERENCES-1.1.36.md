# 1.1.36 IBM Products/v12 reference candidate

Unpublished local source candidate based on `af33df6a1aae6a337c022e8776b14dfc6fe91ec8`.
Published and installed 1.1.35 remain unchanged. No release tag, publication,
installation, Bench change or application migration is part of this preparation.

## Scope and sources

Promote the independently reviewed external r2 reference text into exactly three
supporting files: `carbon-next.md`, `composition.md` and `source-map.json`.
The first adds a dated migration snapshot; the second qualifies component/API
choices; the third appends one limited-coverage source entry. All three SKILL.md
entrypoints, runtime assets, dependency manifests, evaluator criteria and gate
assertions remain unchanged. The 67 earlier source entries and global coverage
metadata remain intact.

Sources are the official [IBM Products 2.101.0 release](https://github.com/carbon-design-system/ibm-products/releases/tag/v2.101.0)
and [migration overview at 98ae41eaf299c34c31791548eb153ea1f99263d7](https://github.com/carbon-design-system/ibm-products/blob/98ae41eaf299c34c31791548eb153ea1f99263d7/packages/ibm-products/.storybook/MigrationToCarbon/MigrationToCarbon.mdx).
The PageHeader row at line 109 distinguishes an existing composable preview in
IBM Products from planned stable Carbon-core delivery at v12. SidePanel retains
its existing API on the documented migration path; preview-to-stable components
can require an API change as well as an import change. Target-package exports,
Web Components delivery and codemod availability require separate verification.
Roadmap documentation is not authorization to migrate a consuming application.

The r2 reference bytes were independently reviewed with no actionable findings.
Their three SHA-256 values are:

- `carbon-next.md`: `629a8faab09d97bfd90030d2c51939abb976c3cad570e1de62dcf066e0b0b100`
- `composition.md`: `ac34f32326060ec136eb9c6d8819c90a0f7331a3c52cf35b6ef08561cf679f3b`
- `source-map.json`: `2fb6a2cf4ee32877db759161e5cc8c73e5f96d5eadc40dab44b850554d696d77`

Reference growth versus frozen 1.1.35 is 3,321 UTF-8 bytes; entrypoint growth is
zero. This is static artifact measurement, not provider context or behavior proof.

## Candidate bookkeeping

The 171-file candidate adds only version 1.1.36 and a release-note prefix beyond
the three reference changes. The earlier note bytes remain an exact suffix.
Candidate [manifest](../releases/1.1.36/files.json), [ZIP](../releases/1.1.36/plugin.zip)
and [checksum](../releases/1.1.36/SHA256SUMS) describe local unpublished preparation.
Validator CURRENT advances to 1.1.36 while retaining explicit verification of
1.1.35 and every earlier release. Recovery, installation and published-version
claims stay on 1.1.35. Existing releases, evidence and external packets stay frozen.

## Verification status and limits

Local Windows verification used Python 3.12.14, Node 24.21.0, Playwright 1.63.0
and the existing pinned Chromium revision 1243. Existing locked dependencies were
copied into this fresh worktree; no dependency installation or upgrade occurred.
The three fixture manifests and lockfiles match their donor copies byte-for-byte.

| Check | Result |
| --- | --- |
| Package verifier | PASS: 171 payload files, 337 local links, all 33 archives from 1.1.4 through 1.1.36, and 55 model-free evaluator tests |
| Repository Python suite | PASS: 38 run, 36 passed, two symlink checks skipped because host symlink creation was unavailable |
| Skill structural validator | PASS for all three unchanged entrypoints |
| Release documentation | PASS offline consistency and live published 1.1.35 release/tag identity |
| Evaluation adapter | PASS: all five model-free tests; ten prepared model cases remain not run |
| Candidate manifest | PASS: all 171 files match the new 1.1.36 manifest |
| Existing installed 1.1.35 | PASS: 172-file parity using the matching 1.1.35 checker, including recognized host metadata |
| Release fixture | PASS: four tests with the unchanged Corrected/Missed controls and 29-check gate |
| Keyboard fixture | PASS: three tests with the unchanged Corrected/Missed controls and 13-check gate |
| Casebook | PASS: all 25 browser tests |
| Production Next.js shell fixture | PASS build and all 20 browser tests |
| Scoped preservation | PASS: exact r2 reference bytes, all three entrypoints, old release-note suffix, 107 older release files, 51 evidence files and installed hashes |
| Raw full tracked diff whitespace | FAIL: exit 2, the same 19 CRLF-at-EOL source-map diagnostics retained from r2 |
| Raw other changed tracked files | PASS: no whitespace diagnostics; this scope excludes only the byte-preserved source-map file |

The source candidate is uncommitted. Exact-commit remote CI and fresh independent
review of this versioned preparation are NOT RUN. The earlier r2 review applies
to reference content only; it does not review new version/package bookkeeping.

Initial attempts are retained separately. The sandbox live-documentation check
failed DNS; the unchanged host retry passed. Initial sandbox release/keyboard
runs stalled before assertions and were stopped after verifying task ownership;
fresh host runs passed. The sandbox Next.js build and first host retry failed
at loader child-process IPC; retaining that generated output and building fresh
in host execution passed. An initial adapter run skipped Python integration;
the run with its documented Python setting passed all five checks. No gate,
assertion, retry setting, dependency, security policy or account setting changed.

The raw whitespace failure is kept separate from logical horizontal-whitespace
validation: added lines contain no trailing spaces/tabs. Source-map CRLF bytes
match r2 and are deliberately preserved. The narrower PASS does not turn the
full-diff raw check into a PASS. No historical record or grade was rewritten.

No new model experiment, historical regrading, migration execution, generated-
product verification, assistive-technology testing or loading experiment is
authorized or established. The loading experiment remains parked. Publication
and installation require separate authorization and their documented checks.
