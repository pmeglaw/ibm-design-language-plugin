# 1.1.53 publication verification — 8 November 2026 UTC

PR [#116](https://github.com/pmeglaw/ibm-design-language-plugin/pull/116) merged
the reviewed quick craft pass and direct failure/retry recovery link. The
[published release](https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.1.53) is non-draft and non-prerelease. Its immutable tag
`v1.1.53` resolves to `73891e8088c21049c27631b943f31b52e6d27eb1`.

## Artifact and exact-commit evidence

- PASS: all four freshly downloaded assets (`plugin.zip`, `files.json`,
  `SHA256SUMS`, `NOTES.md`) are byte-identical to `releases/1.1.53/`.
- PASS: ZIP integrity, unique entries, checksum and the 178-file manifest.
  ZIP SHA-256: `0e8f75d0e455294117a0e57c7f9f69c927b906bd68037fe6353d5b0669fd8290`.
- PASS: exact merged-commit [package/evaluator and browser CI](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/42428804460),
  including Windows/Linux verification, casebook, release fixture, keyboard
  fixture and Next.js shell.
- PASS: exact merged-commit [adapter checks](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/42428804444),
  [table guidance](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/42428804412)
  and [pre-publication live documentation check](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/42428804498).

Local gates ran on the candidate tree committed as
`17f7b9b6977895a8332fd0e4754cf316d0c113b2`; the merged commit has the same tree.
`python -B scripts/verify.py` passed, including 58 evaluator tests with two
Windows-only skips. The repository unit suite ran 51 tests with two Windows
symlink skips. The live documentation check passed before publication. Local
release fixture (8), keyboard fixture (3), production-built shell (20), and
casebook renderer (25) tests passed. Existing taste content is byte-identical
outside the inserted checklist. Package changes are limited to taste guidance,
version metadata and release notes. Older frozen releases are unchanged.

## Preserved failures and documentation transition

The source-only head `f7563234b689e2fd0da64de944ab6220cc99921d` failed package
integrity because it differed from frozen 1.1.52. The new version resolves that
mismatch without changing the old manifest or weakening assertions. A staged
whitespace check caught a trailing blank line in the new external notes; it was
corrected before the candidate commit, without changing packaged bytes.

Publication made the existing 1.1.52 current-document claims stale. The
[release-event check](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/42428957236)
and [tag-push check](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/42428956798)
failed during that transition. This companion-document closeout updates current
claims while preserving the immutable tag, package notes and failure history.
Successful default-branch verification and a release-event rerun must identify
the later documentation commit; tag-push checks cannot validate later docs.

## Evidence limits

Faster retrieval remains an editorial objective. No model evaluation, measured
design-quality improvement, new product runtime review or assistive-technology
certification is claimed. Destination verification is separate and recorded in
the [installation receipt](INSTALLATION-1.1.53-VERIFICATION-2026-11-08.md). Private account archives and raw
host records are not part of this public receipt or release assets.
