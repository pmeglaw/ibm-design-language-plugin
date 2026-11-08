# IBM Design Language plugin

An independently maintained Codex plugin for designing, implementing, and reviewing interfaces with IBM Design Language and Carbon. It provides reusable workflows, source-linked references, visual benchmarks, examples, and checking tools. It is not an official IBM product.

The current published package is **1.1.52**. [Source](https://github.com/pmeglaw/ibm-design-language-plugin) · [Release](https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.1.52) · [Install](docs/INSTALLATION.md)

The working source is **1.1.53, an unpublished release candidate**: a concise opening craft checklist in `taste.md`, with direct failure/retry recovery guidance. Its new archive and manifest are in `releases/1.1.53/`. Publication and installation remain unverified until their delivery checks complete; published 1.1.52 remains the recovery target.

Published **1.1.52** was released from commit `ea8b1534b37757359037263bd8fb9bea3b366d88`. Evaluator hashing rejects special files before reading them and verifies the opened descriptor, with bounded POSIX FIFO and replacement-race regressions. Repository CI runs evaluator tests independently on Linux and Windows while preserving release-integrity checks.

All four downloaded release assets match the 178-file frozen package. Required CI passed on the exact release commit. See the [publication receipt](docs/RELEASE-1.1.52-PUBLICATION-2026-11-06.md). Frozen candidate notes retain their preparation-time wording; this later publication does not rewrite them. Installation was excluded from publication and completed later under separate authorization. The retained "Created by you" account plugin is verified at 1.1.52: complete 179-file account/installed parity and all three enabled skills discovered in 0.986 seconds. The duplicate "JP Personal Plugins" installation was removed after verification; the retained identity and settings were preserved. See the [installation receipt](docs/INSTALLATION-1.1.52-VERIFICATION-2026-11-06.md).

In published 1.1.52, the functional change is limited to the evaluator helper and its regression tests; release metadata and notes identify that package. Dependencies, product code, browser fixture assertions, earlier frozen releases and historical evidence remain unchanged. The helper does not impose a universal deadline on growing regular files or cover every filesystem race. The earlier [research-step routing evaluation](docs/ROUTING-EVALUATION-1.1.50-2026-11-04.md) is separate evidence; no new model evaluation ran for this fix, and generated-product improvement or AT certification is not claimed. Existing desktop-conversation refresh and automatic selection remain unverified.

## Install

Install the plugin using [first-time installation](docs/INSTALLATION.md), then open the intended project and select the skill offered by your host. Ask the agent to identify the guidance it loaded; autocomplete syntax varies by host.

### Claude Code

The published package installs in Claude Code through the repository's `.claude-plugin/marketplace.json` catalog. The command below pins the immutable published release tag verified in [Installation](docs/INSTALLATION.md). The catalog loads `plugins/ibm-design-language/` from that release, not a newer unpublished source branch:

```text
/plugin marketplace add pmeglaw/ibm-design-language-plugin#v1.1.52
/plugin install ibm-design-language@jp-personal
```

The `#ref` syntax is documented in [Claude Code's marketplace instructions](https://code.claude.com/docs/en/discover-plugins#add-a-marketplace). On Windows, enable long paths before cloning (`git config --global core.longpaths true`); some repository paths exceed the default limit. Claude Code installation is a separate destination with its own verification state; historical Codex installation receipts do not cover it.

## Quick start

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
evidence and uninspected states, and deliver the requested design comparison and
any requested visual proposal. Track discovered bugs separately against that direction.
```

Replace bracketed placeholders. For fuller implementation, screenshot, cross-view audit, and repair prompts, use the [prompt pack](docs/prompt-pack/README.md). Its Seat Planner examples are project-specific; general work does not inherit that project's branding or rules.

## Skills

| Skill | Use it for |
|---|---|
| `ibm-design-language:design-ui` | Design, implementation, or focused critique: layout, typography, component selection, semantic color, approved branding, accessibility, and interactions. |
| `ibm-design-language:review-product-experience` | Information architecture, navigation, task-flow, cross-view, and responsive reviews. Implementation follows only when requested. |
| `ibm-design-language:seat-planner-ui-ux` | Dedicated Bench/Seat Planner UI/UX run; defaults to read-only review and follows current project contracts. |

Codex sees each skill's name and description, then loads its instructions when the task matches or you explicitly select it. The instructions route to relevant references rather than requiring every reference for every task. They ask the agent to inspect the actual project, installed Carbon version, and approved brand before making decisions, and to verify the affected rendered behavior afterward.

The package supplies guidance and optional assets; edits and browser checks use the tools available in your Codex environment. It does not automatically add Carbon to your application or certify generated results. See the [design skill](plugins/ibm-design-language/skills/design-ui/SKILL.md) and [review skill](plugins/ibm-design-language/skills/review-product-experience/SKILL.md) for the workflows.

Earlier 1.1.44 verification is preserved in its [publication](docs/RELEASE-1.1.44-PUBLICATION-2026-10-29.md) and [installation](docs/INSTALLATION-1.1.44-VERIFICATION-2026-10-29.md) receipts.

## Documentation

[First-time installation](docs/INSTALLATION.md) · [Recovery and rollback](docs/RECOVERY.md) · [Maintaining releases](docs/RELEASING.md) · [Release history and evidence](docs/HISTORY.md)

Using the plugin on a product follows that task's authorization and project rules. A review does not authorize edits; local implementation does not authorize publication or production changes. Maintaining this plugin has a separate owner-specific release/install workflow in [release maintenance](docs/RELEASING.md#authorization-and-documentation-scope).

Guidance and model-free fixtures do not certify generated-product quality, usability or accessibility. Historical failures, incomplete evaluations and installation limits remain in [release history and evidence](docs/HISTORY.md#release-narrative-moved-from-readme).

### Verify and maintain

Codex maintenance follows the verify, context and orchestrator rules in [AGENTS.md](AGENTS.md). Before reporting delivery, use the [delivery verification checklist](docs/RELEASING.md#delivery-verification) to reconcile documentation and release state as well as the artifact checks.

Requires Python 3.11 or later with only the standard library:

```sh
python -B scripts/verify.py
```

Reports are written under ignored `.verification/`. This verifies package and synthetic checks; it does not run all browser gates. Later plugin releases must also pass the release, keyboard, and Next.js shell fixtures on the exact release commit, as specified in [release maintenance](docs/RELEASING.md).

Run `python -B scripts/verify_release_docs.py` for offline consistency of current release claims, or add `--github` to verify the latest published release and tag commit. The separate release-documentation CI workflow runs on pushes, pull requests, release publication and manual dispatch. It reports documentation drift; it does not verify destination installation or downloaded release assets. See [automated documentation checks](docs/RELEASING.md#automated-documentation-checks) for scope and candidate handling.

Preserve exact bytes through `.gitattributes`; do not normalize frozen plugin or release files. Repository-only documentation edits do not change the installed plugin version. Bundled IBM Plex fonts retain their license and provenance files; no new blanket license is assigned to third-party material.

## Repository contents

- `plugins/ibm-design-language/`: the unpublished 1.1.53 working source, with its candidate archive in `releases/1.1.53/`; the published package's frozen archive remains in `releases/1.1.52/`.
- `.agents/plugins/marketplace.json`: repository marketplace catalog named `jp-personal`; paths resolve from the repository root.
- `.claude-plugin/marketplace.json`: Claude Code catalog for the same package, also named `jp-personal`.
- `docs/`: companion installation, recovery, maintenance, history, and prompt documentation, outside the plugin release ZIP.
- `releases/`: current and preserved earlier ZIPs, manifests, and checksums for recovery.
- `evidence/`: selected package, installation, casebook, and comparison receipts. Historical absolute paths are provenance, not dependencies. Full model transcripts and screenshot archives are not included.
- `tests/`: repository fixtures and regression checks; see maintenance for applicable publication gates.
- `scripts/verify.py`: offline package, release, source, marketplace, and synthetic evaluator checks. No model calls.
