# IBM Design Language 1.1.24 - published

Published from commit `ee7dbf087bffc69fc78b08e6b6dd7bd7ca53fd73` via
[PR #26](https://github.com/pmeglaw/ibm-design-language-plugin/pull/26).
The [GitHub release](https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.1.24)
is the authoritative publication record. The old "unpublished" and "shell gate
pending" sentences were preparation wording retained at publication; this
repository note corrects that wording without changing the published package.

The maintained Next.js shell focuses the visible destination H1 after committed
route navigation and same-route selection, with main as the no-heading fallback.
Skip-to-main and Escape restoration retain separate focus contracts. Ordinary
skip activation uses Next.js-integrated history entries so Back does not restore
a fragment URL over stale route content. Repeated skip preserves query state
without duplicate fragment entries; modified clicks retain native behavior.

The repository adds a production-build shell gate covering heading focus,
fallback, Back/Forward and repeated skip. The release-fixture Node types setup
was corrected without changing runtime dependency versions, assertions or the
Missed pattern.

[Exact-commit CI](https://github.com/pmeglaw/ibm-design-language-plugin/actions/runs/37066829246)
passed Windows/Linux package/parity verification, casebook, release fixture,
keyboard fixture and all 20 shell tests before publication. Local package
verification, 42 synthetic tests and six install-parity unit tests also passed.
These checks are maintained-example and fixture evidence, not a fresh
model-generation result or a screen-reader certification. Delayed or streaming
headings remain the product's focus manager; multiple-heading selection and a
dedicated modified-click browser regression remain outside the demonstrated
scope. The frozen 1.1.23 practical verdict remains 9 pass, 2 fail.

The published package contains 135 files. `plugin.zip` SHA-256:
`e751ce210bfbdc91f0b99e167560a30cc2e02f576aa51c1a2ceafd968306a0f7`.
The published ZIP, `files.json`, `SHA256SUMS`, tag and GitHub release are unchanged.
Marketplace registration and installation are separate from publication.
