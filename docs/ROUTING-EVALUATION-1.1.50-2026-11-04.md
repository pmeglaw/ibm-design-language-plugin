# Reference-routing evaluation: 1.1.48, 1.1.49 and the 1.1.50 candidate (4 November 2026)

This page records a research-step routing comparison. It tests which reference
files the `design-ui` skill leads a model to read. It does not measure the
quality of generated UI, and it does not certify assistive-technology use or a
host installation.

## Setup

- **Packages tested:**
  - The published 1.1.48 and 1.1.49 `plugin.zip` archives. 1.1.49 was released
    from commit `bd615db6a6ebc4650bd1103cf8fe60cbb742e270`.
  - The 1.1.50 candidate archive. Its `plugin.zip` SHA-256 is
    `a0755cfba04a87fe67d1612801185b58f7a5a58d485f13602b8a3a62bc4f76cb`.
- **Blinding:** `RELEASE_NOTES.md` and `plugin.json` were removed from each copy,
  and the copies were given neutral directory names.
- **Host and model:** Claude Code `claude -p`, model claude-opus-5-5, default
  effort.
- **Isolation:** each run could use only Read, Glob and Grep, in `--restricted`
  mode (file access limited to its package copy), with no skills, MCP servers or
  repository instructions.
- **Prompt:** the model was told that `design-ui` had been invoked and asked to
  read `SKILL.md` and whatever it routes to. It wrote no files and finished with
  JSON naming the references, visual benchmark and acceptance checks it would
  use.
- **Scoring:** based on the logged tool calls, not on what the model reported.
  - A benchmark counts as reached only if a Read call covered the line holding its
    heading.
  - The acceptance checks count as reached only if a Read call covered `## Geometry`
    in `references/release-gates.md`.
- **Tasks:**
  - Benchmark tasks: header, data table, search, form, and form critique.
  - Other tasks: semantic tokens, date range, overflow menu with a toggletip,
    chart, and expressive hero.
- **Runs:**
  - 1.1.48 and 1.1.49: all ten tasks, three runs each.
  - 1.1.50 candidate: header, table and date only, three runs each.
  - All 69 runs completed with valid JSON. Raw transcripts are kept out of this
    repository.

## Results

| Measure | 1.1.48 | 1.1.49 | 1.1.50 candidate |
|---|---|---|---|
| Benchmark tasks: benchmark section read | 15/15 | 15/15 | 6/6 (header, table) |
| Benchmark tasks: acceptance checks read | 15/15 | 15/15 | 6/6 |
| Header: saved header images index opened | 3/3 | **0/3** | **3/3** |
| Header: 29 October observation record opened | 3/3 | 2/3 | 3/3 |
| Other tasks: expected reference opened | 15/15 | 15/15 | 3/3 (date) |
| Other tasks: `release-gates.md` opened | 3/15 | 11/15 | 3/3 (date) |
| Header: mean reads, cost per run | 8.7, $0.45 | 7.3, $0.43 | 10.3, $0.57 |

## Interpretation

- **1.1.49 routing still works.** Every composition benchmark and the acceptance
  checks were reached through `release-gates.md` in every run.
- **1.1.49 skipped the header images.** Moving the header links one step away
  meant no header run opened the saved image index. The candidate links that index
  and the observation record from the entry point again, and both were opened in
  every candidate header run.
- **Extra release-gates reads are harmless.** On tasks without a benchmark, 1.1.49
  and the candidate open `release-gates.md` more often than 1.1.48 did. In those
  runs the model then stated that no benchmark covered the task, and none applied
  a wrong benchmark.
- **Header research now costs a little more.** Candidate header runs read more
  files, which raises the header research cost slightly.

## Limits

- Three runs per task, on one model and one host. Small differences are noise.
- Codex hosts, the installed plugin, skill selection, and generated-product
  quality were not tested.
- This evaluation does not establish publication or installation of 1.1.50.
