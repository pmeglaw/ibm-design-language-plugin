# 1.1.26 combined candidate - unpublished

This candidate integrates three separately reviewed components from main
`b63641855c241a7fbbabde15144405c4e1613131`. Existing notes-only PR #30 and routing
PR #29 remain available as review history; this draft does not merge or close them.

## Package history correction

Restore the missing 1.1.24 entry between 1.1.25 and 1.1.23, preserving all existing
release-note entries. Correct `releases/1.1.24/NOTES.md` using the authoritative
[published GitHub release](https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.1.24),
published from `ee7dbf087bffc69fc78b08e6b6dd7bd7ca53fd73` after its exact-commit
Windows/Linux, casebook, release, keyboard and 20-test shell gates passed.
Preparation wording retained at publication did not mean those gates were pending.

## Installed release-gate routing

Include PR #29's composition routing from
`b644bc4e064f557be25ba55e53642aa55dffb31f`. Bundle unchanged copies of the canonical
29 geometry and 13 keyboard check definitions, specifications and DOM conditions,
with byte parity enforced by package verification. Installed guidance can read
them offline without the repository's tests directory. These are definitions,
not a bundled runnable fixture app. The keyboard fixture starts from its candidate
root; a product shell retains its first-focusable skip link. Candidate-frame
containment and no-op demonstration actions do not establish whole-page reflow
or product readiness. Fixture assertions and Missed controls are unchanged.

## Dependency-complete evaluator packets

New plugin evaluation packets copy `design-ui` and `review-product-experience`
as siblings, fingerprint both trees and validate local reference dependencies.
Missing dependencies fail clearly. The selected entrypoint path and its separate
file hash are recorded. Old packets remain bound to their archived harness;
historical manifests, scores and evaluation suites are not rewritten.
No prior evaluator patch was available for transfer; this narrow fix was
implemented from the recovered requirements and verified with fresh regressions.
Contrast-checker empty-batch work is excluded.

## Preservation and evidence limits

Published archives, manifests and checksums are unchanged:

- 1.1.24 ZIP SHA-256:
  `e751ce210bfbdc91f0b99e167560a30cc2e02f576aa51c1a2ceafd968306a0f7`.
- 1.1.25 ZIP SHA-256:
  `c111bd17d1ef24719d606bc62b533d68b33ed275808f323f5946c6d574af7ea9`.

Shell examples, frozen evaluation suites and evidence are unchanged. Synthetic
evaluator tests and maintained-example/fixture checks are not fresh model-generation
results or screen-reader certification. Frozen 1.1.23 remains 9 pass, 2 fail.

Required package/parity, evaluator and browser gates must pass on this candidate's
exact commit before any separately authorized publication. This is an unpublished
draft: no merge, tag, GitHub release, marketplace update or installation is authorized.
