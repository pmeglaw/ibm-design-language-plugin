# Table and action guidance correction

Baseline: main `a555015dacfdca25c6db445e86a69d13f4c76558` (PR #97).
The owner subsequently authorized release preparation, all checks, merge,
publication and installed-plugin synchronization. The working candidate is
1.1.48; published and installed 1.1.47 remain the baseline until delivery.
The following review history preserves the earlier source-only scope and failures.

## Review of draft PR #70

Reviewed head `4146b35ac6dba634590d0175e6fe430a5426213e` against current main.

| Proposed improvement | Current decision |
|---|---|
| Separate collection navigation and virtualization in three passages | Still necessary; adapt all three to current references. Preserve pagination and independently justify rendering optimization. |
| Retain frequent secondary actions in both disclosure shortcuts | Still necessary; carry forward and resolve the similar ambiguity in the newer composition-craft reference. |
| Add scoped product acceptance with explicit evidence limits | Adapt only table navigation, selection, rendering, action discovery and keyboard recovery into composition.md; link the worked example to it. |
| Reroute all four composition benchmarks and trace all 42 fixture checks | Defer; broad header/search/form routing is outside this correction. Existing release-gate routing and assertions remain intact. |
| Revise the creation-flow evaluation rubric | Defer; current entrypoint already allows appropriately scoped modal/panel/task primary actions. Changing the historical evaluator contract is outside table/action scope. |
| Move practical evaluation history and prepare 1.1.37 release bookkeeping | Exclude. Do not import old archives, manifests, versions, release notes or historical result changes. |

Reviewed related active Markdown references for virtualization and secondary
overflow shortcuts, including patterns, menu contracts, composition craft,
practical implementation review and core interaction contracts. Existing
pagination state and menu keyboard contracts remain useful and are preserved.

Current Carbon data-table, pagination and menu-button guidance was checked on
2026-11-03; source URLs are beside the new acceptance section. Carbon supports
pagination as collection navigation, bounded table-toolbar actions, inline row
actions for fewer than three commands, and keyboard menu interaction. Frequency
prioritization and rendering/recovery checks are explicitly local engineering
guidance, not a claim that every Carbon framework has a virtualization API.

## Verification and limits

Review follow-up: qualify action visibility by current mode, preserving disabled
conflicting row actions in batch mode; distinguish semantic-table Tab behavior
from a datagrid's supported traversal contract. Correct README's source identity
and installation wording. The documentation checker now recognizes explicitly
warned, unversioned source drift, verifies the retained baseline identity and
actual source/manifest difference, and reports `not release-ready`. The package
integrity checker remains unchanged and continues to fail on that drift.

PR #98 review also corrected the Claude Code install command: it now pins
`#v1.1.47` instead of following the default branch, matching the accompanying
published-release instruction and Claude Code's documented `#ref` syntax.
No Claude Code installation was performed.

Final follow-up validation: 49 repository tests ran, with 47 passing and two
skipped (seven table-guidance tests and four additional release-documentation
methods among them). Live `python -B scripts/verify_release_docs.py --github`
verification passed with the unpublished-source status, and `git diff --check`
passed. The results below retain the initial patch's
verification history; they are not new-head CI results.

- Before edits, `python -B scripts/verify.py` passed for 178 source files and
  frozen releases 1.1.4–1.1.47, including synthetic evaluator checks.
- After edits, `python -B -m unittest discover -s tests -p 'test_*.py'` passed:
  43 tests, including five new static guidance contracts.
- Three new regression methods tested against baseline reference copies rejected
  the old guidance (six failed assertions and one missing corrected entry).
- `python -B scripts/verify_release_docs.py` passed offline. It checks recorded
  release identities, not branch/source parity or installation.
- `git diff --check` passed.
- The unchanged `python -B scripts/verify.py` fails with
  `Plugin differs from frozen release`, as expected for this unpublished source
  patch. It checks all frozen archives before that source comparison. No manifest,
  archive, version, validator exception or release gate was changed to hide this.
- A separate CI guidance job runs the new tests independently of the deliberately
  strict package gate. Exact-head CI must be read from this PR's checks.

The initial focused run caught the still-uncorrected composition shortcut; that
passage was corrected and the full repository suite then passed. Static tests
guard instructional content and links, not generated-product quality. No browser,
model-generation or assistive-technology evaluation was performed for this prose
change; no new usability score or keyboard pass is claimed. Runtime assets,
fixture assertions, Seat Planner, frozen releases and installation are unchanged.

The original source-only review was not release-ready. The authorized 1.1.48
preparation adds version metadata, release notes, archive and manifest; all
existing gates must pass before merge/publication. Destination parity and fresh
discovery remain separate post-publication checks.
