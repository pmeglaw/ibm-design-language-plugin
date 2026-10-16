# IBM Design Language plugin

An independently maintained Codex plugin for designing, implementing, and reviewing interfaces with IBM Design Language and Carbon. It provides reusable workflows, source-linked references, visual benchmarks, examples, and checking tools. It is not an official IBM product.

The current published package is **1.1.33**. [Source](https://github.com/pmeglaw/ibm-design-language-plugin) · [Release](https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.1.33) · [Install](https://github.com/pmeglaw/ibm-design-language-plugin/blob/main/docs/INSTALLATION.md)

Version 1.1.33 makes design-deliverable retention explicit: keep the requested critique or redesign, separate discovered bugs, and use the owner's scoped choice for a repair-only pivot while reusing valid prior authorization. See the [published release notes](https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.1.33) and [design-focus evaluation ledger](https://github.com/pmeglaw/ibm-design-language-plugin/blob/16a5e4a5845bc736aed9c116ded93f25bf1a1b3d/docs/DESIGN-FOCUS-EVALUATION-2026-10-15.md). Both baseline and candidate passed the known response-only samples; no behavioral advantage is established. Historical failures and incomplete coverage remain unchanged. All four downloaded release assets match the frozen target bytes; see the [publication verification](docs/RELEASE-1.1.33-PUBLICATION-2026-10-15.md). Offline/live post-publication documentation consistency checks passed locally. Follow the correction commit’s CI in the [documentation workflow](https://github.com/pmeglaw/ibm-design-language-plugin/actions/workflows/verify-release-docs.yml); the publication-triggered transition-window failure remains preserved.

The working package matches published **1.1.33**, released from commit `16a5e4a5845bc736aed9c116ded93f25bf1a1b3d`. Frozen preparation notes retain their original wording; dated delivery receipts and the GitHub release record establish later status. The existing owner installation was subsequently updated to **1.1.33**; account/installed-file parity and fresh native discovery of all three enabled skills passed. See the [dated installation verification](docs/INSTALLATION-1.1.33-VERIFICATION-2026-10-15.md) for the retained initial empty scan and evidence limits. Refresh of an existing desktop connection and automatic skill selection remain unverified.

## What it does

| Skill | Use it for |
|---|---|
| `ibm-design-language:design-ui` | Design, implementation, or focused critique: layout, typography, component selection, semantic color, approved branding, accessibility, and interactions. |
| `ibm-design-language:review-product-experience` | Information architecture, navigation, task-flow, cross-view, and responsive reviews. Implementation follows only when requested. |
| `ibm-design-language:seat-planner-ui-ux` | Dedicated Bench/Seat Planner UI/UX run; defaults to read-only review and follows current project contracts. |

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
evidence and uninspected states, and deliver the requested design comparison and
any requested visual proposal. Track discovered bugs separately against that direction.
```

Replace bracketed placeholders. For fuller implementation, screenshot, cross-view audit, and repair prompts, use the [prompt pack](docs/prompt-pack/README.md). Its Seat Planner examples are project-specific; general work does not inherit that project's branding or rules.

## Scope and evidence

Using the plugin on a product follows that task's authorization and project rules. A review does not authorize edits; local implementation does not authorize publication or production changes. Maintaining this plugin has a separate owner-specific release/install workflow in [release maintenance](docs/RELEASING.md#authorization-and-documentation-scope).

Source inspection, screenshots, keyboard checks, assistive-technology checks, and model evaluations establish different things. Report what was actually tested. Historical targeted results and model-free browser fixtures are not general design-quality, usability, or accessibility certifications. The published 1.1.17 practical generation passed 9 of 11 assertions and failed 320px containment/RTL checks; subsequent documentation and fixture work does not erase that result. See [release history and evidence](docs/HISTORY.md).

## Repository contents

- `plugins/ibm-design-language/`: the published 1.1.33 package source with its three skills, references, assets and evaluator; the frozen release archive and manifest are in `releases/1.1.33/`.
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

## Earlier release summary

Version 1.1.30 adds version-aware Context7 retrieval, official-source reconciliation, the dated Carbon/v12/DTCG reference refresh and release-derived review scenarios. It preserves all three skills, application dependencies, runtime assets and existing test gates; it does not enable v12 flags. The scenarios are guidance, not executed model or product tests. See the [published release notes](https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.1.30) for verification and limits. The earlier [1.1.27 provenance erratum](docs/1.1.27-PROVENANCE-ERRATUM.md) remains applicable to its frozen header evidence.

## Previous publication record

Version 1.1.32 improves Seat Planner contract discovery, scoped production-authorization reporting and the current all-width admin-editing baseline. See the [published release notes](https://github.com/pmeglaw/ibm-design-language-plugin/releases/tag/v1.1.32) and [consolidated evaluation closeout](https://github.com/pmeglaw/ibm-design-language-plugin/blob/08839a956be8f0f3829986a0c414e3f496545b4f/docs/SEAT-PLANNER-EVALUATION-CLOSEOUT-2026-10-14.md) for scope and limits. Original scenarios retain 24 passing and 12 not-tested criteria; later targeted results do not replace those scores. Downloaded release assets match the frozen target bytes; see the [publication verification](docs/RELEASE-1.1.32-PUBLICATION-2026-10-15.md). Post-publication documentation validation is tracked by the [release-documentation workflow](https://github.com/pmeglaw/ibm-design-language-plugin/actions/workflows/verify-release-docs.yml). The existing owner installation was subsequently updated to **1.1.32**; installed-file parity and fresh native-host discovery passed. See the [dated installation verification](docs/INSTALLATION-1.1.32-VERIFICATION-2026-10-15.md) for sanitized evidence, preserved failures and host/smoke limits.
