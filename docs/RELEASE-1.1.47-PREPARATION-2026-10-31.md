# 1.1.47 reference spacing corrections preparation

Prepared 31 October 2026 from `f0f1b3b` (main after #94) on `release-1.1.47`.
Preparation is not publication.

Restores missing spaces between words and numbers in 19 shipped Markdown files
(for example `All17supplemental`, `with75nodes`, `React1.117.0`,
`September2026`). Each edited file differs from 1.1.46 only by inserted spaces:
removing all spaces from the old and new bytes gives identical content, and
carriage-return counts are unchanged. 175 spaces were added. Code spans, link
targets, hex values and identifiers (`Context7`, `Notification20`,
`HTTPError403`, `lg8`, `utf8`, `WOFF2`, `C27`, palette and token names) were
excluded and remain unchanged. `SKILL.md` files, dependencies, runtime assets,
fixture assertions and Seat Planner are unchanged.

## Local evidence

- `python -B scripts/verify.py`: PASS, 178 files; frozen releases 1.1.4–1.1.46
  plus candidate 1.1.47 verified.
- `python -B -m unittest discover -s tests -p 'test_*.py'`: PASS, 38 tests.
- `python -B scripts/verify_release_docs.py`: PASS offline; published 1.1.46
  distinguished from candidate 1.1.47.
- `git -c core.whitespace=cr-at-eol diff --check`: PASS. Plain `--check`
  reports the edited files' existing CRLF line endings, which were preserved.
- Space-only diff check (script comparison above): PASS.

Release, keyboard, Next.js shell and casebook browser gates were not run
locally; they run in CI and must pass on the exact release commit. Publication,
downloaded assets, installation, installed parity, enabled state and fresh
discovery remain separate delivery gates. No model-generated quality or
assistive-technology result is claimed.
