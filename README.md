# IBM Design Language plugin

An independently maintained Codex plugin for designing, implementing, and reviewing interfaces with IBM Design Language and Carbon. It provides reusable workflows, source-linked references, visual benchmarks, examples, and checking tools. It is not an official IBM product.

The current published package is **1.1.26**. [Source](https://github.com/pmeglaw/ibm-design-language-plugin) · [Release](https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.1.26) · [Install](docs/INSTALLATION.md)

Version 1.1.26 corrects the 1.1.24 release-note history, routes composition reviews to packaged release-gate definitions, includes both sibling skills in evaluation packets and fingerprints, and fixes escaped Markdown link handling. See the [published release notes](https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.1.26) for completed verification and evidence limits.

The working source is **1.1.27, an unpublished header-reference candidate**, based on repository commit `60a4ed0`. Published 1.1.26 remains the recovery/install target, released from commit `85368ab8927a375889292a112d58df75495eac9d`. The frozen [preparation notes](releases/1.1.26/NOTES.md) and packaged notes retain candidate wording; the GitHub release is the authoritative publication record. Earlier archives, manifests and checksums remain unchanged. Publication does not establish marketplace or installed-copy parity; installation and fresh skill discovery remain unverified in that release record.

## What it does

| Skill | Use it for |
|---|---|
| `ibm-design-language:design-ui` | Design, implementation, or focused critique: layout, typography, component selection, semantic color, approved branding, accessibility, and interactions. |
| `ibm-design-language:review-product-experience` | Information architecture, navigation, task-flow, cross-view, and responsive reviews. Implementation follows only when requested. |

Codex sees each skill's name and description, then loads its instructions when the task matches or you explicitly select it. The instructions route to relevant references rather than requiring every reference for every task. They ask the agent to inspect the actual project, installed Carbon version, and approved brand before making decisions, and to verify the affected rendered behavior afterward.

The package supplies guidance and optional assets; edits and browser checks use the tools available in your Codex environment. It does not automatically add Carbon to your application or certify generated results. See the [design skill](plugins/ibm-design-language/skills/design-ui/SKILL.md) and [review skill](plugins/ibm-design-language/skills/review-product-experience/SKILL.md) for the workflows.

## Quick start

Install the plugin using [first-time installation](docs/INSTALLATION.md), then open the intended project and select the skill offered by your host. Ask the agent to identify the guidance it loaded; autocomplete syntax varies by host.

For design or implementation:

```text
Use ibm-design-language:design-ui to improve [form or screen] in [repository/route].
Outcome: [what the person should be able to do].
Read project instructions and inspect the installed Carbon version first.
Preserve approved branding and existing behavior. Implement and validate locally,
including the affected narrow layout and keyboard flow. Report evidence and
untested states. Do not commit, push, open a PR, merge, or deploy.
```

For a read-only review:

```text
Use ibm-design-language:review-product-experience to review [flow and listed views]
in [repository/route]. Keep the review read-only. Inspect source and the rendered
interface where available. Rank findings by task impact, identify supporting
evidence and uninspected states, and propose the smallest coherent repairs.
```

Replace bracketed placeholders. For fuller implementation, screenshot, cross-view audit, and repair prompts, use the [prompt pack](docs/prompt-pack/README.md). Its Seat Planner examples are project-specific; general work does not inherit that project's branding or rules.

## Scope and evidence

Using the plugin on a product follows that task's authorization and project rules. A review does not authorize edits; local implementation does not authorize publication or production changes. Maintaining this plugin has a separate owner-specific release/install workflow in [release maintenance](docs/RELEASING.md#authorization-and-documentation-scope).

Source inspection, screenshots, keyboard checks, assistive-technology checks, and model evaluations establish different things. Report what was actually tested. Historical targeted results and model-free browser fixtures are not general design-quality, usability, or accessibility certifications. The published 1.1.17 practical generation passed 9 of 11 assertions and failed 320px containment/RTL checks; subsequent documentation and fixture work does not erase that result. See [release history and evidence](docs/HISTORY.md).

## Repository contents

- `plugins/ibm-design-language/`: the unpublished 1.1.27 working source with its two skills, references, visual casebook, assets, evaluator, and tests; the published frozen archive is in `releases/1.1.26/` and the unpublished candidate archive is in `releases/1.1.27/`.
- `.agents/plugins/marketplace.json`: repository marketplace catalog named `jp-personal`; paths resolve from the repository root.
- `docs/`: companion installation, recovery, maintenance, history, and prompt documentation, outside the plugin release ZIP.
- `releases/`: current and preserved earlier ZIPs, manifests, and checksums for recovery.
- `evidence/`: selected package, installation, casebook, and comparison receipts. Historical absolute paths are provenance, not dependencies. Full model transcripts and screenshot archives are not included.
- `tests/`: repository fixtures and regression checks; see maintenance for applicable publication gates.
- `scripts/verify.py`: offline package, release, source, marketplace, and synthetic evaluator checks. No model calls.

## Verify and maintain

Codex maintenance follows the verify, context and orchestrator rules in [AGENTS.md](AGENTS.md). Before reporting delivery, use the [delivery verification checklist](docs/RELEASING.md#delivery-verification) to reconcile documentation and release state as well as the artifact checks.

Requires Python 3.11 or later with only the standard library:

```sh
python -B scripts/verify.py
```

Reports are written under ignored `.verification/`. This verifies package and synthetic checks; it does not run all browser gates. Later plugin releases must also pass the release, keyboard, and Next.js shell fixtures on the exact release commit, as specified in [release maintenance](docs/RELEASING.md).

Run `python -B scripts/verify_release_docs.py` for offline consistency of current release claims, or add `--github` to verify the latest published release and tag commit. The separate release-documentation CI workflow runs on pushes, pull requests, release publication and manual dispatch. It reports documentation drift; it does not verify destination installation or downloaded release assets. See [automated documentation checks](docs/RELEASING.md#automated-documentation-checks) for scope and candidate handling.

Preserve exact bytes through `.gitattributes`; do not normalize frozen plugin or release files. Repository-only documentation edits do not change the installed plugin version. Bundled IBM Plex fonts retain their license and provenance files; no new blanket license is assigned to third-party material.

[First-time installation](docs/INSTALLATION.md) · [Recovery and rollback](docs/RECOVERY.md) · [Maintaining releases](docs/RELEASING.md) · [Release history and evidence](docs/HISTORY.md)
