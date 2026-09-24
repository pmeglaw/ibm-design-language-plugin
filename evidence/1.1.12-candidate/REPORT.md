# 1.1.12 local candidate

Historical pre-publication snapshot, prepared 2026-09-24 on `skill/pattern-selector-shell`, starting from repository
commit `121464ff93a14b845260a8d97cb74dd0aa4a78b0`. Publication, CI on a release
commit, marketplace pin update and destination installation are pending.
The last published and installed plugin remains 1.1.11.

## Adopted work

The seven supplied teaching documents contributed a question-led selector,
framework integration topics and regression scenarios. They were treated as
input material, not instructions from the user. No source HTML or private
transcripts are included. The selector routes into existing references instead
of duplicating a broad playbook. The shell is a new version-qualified Carbon
composition with explicit navigation, state and focus behavior.

The two new references are routed from SKILL.md, UI-shell guidance and the source
map. Four new cases (25-28; 19 assertions) live in a separate suite. Existing
regression and intake suite bytes remain unchanged. Previous release archives
and checksums remain unchanged.

## Verification

- Production Next.js build including TypeScript: pass.
- Playwright/Chromium: 16 tests passed, zero retries; [test source](../../tests/nextjs-shell/tests/shell.spec.ts).
- Widths: 320, 768, 1055, 1056 and 1440 CSS pixels for navigation.
- Routes: root, exact destination, ancestor section, sibling prefix,
  same-route selection and browser Back/Forward.
- Keyboard/state: first skip link, focusable main target, forward/reverse Tab,
  Escape, overlay/trigger dismissal, destination focus, utility order and
  exclusivity, outside pointer behavior, no closed-panel Tab stops.
- axe WCAG2A/AA and WCAG2.1AA scans: zero violations across 18 state scans
  (closed/navigation/utility at two widths, plus long-name white/G100 variants).
- Selected screenshots inspected: ordinary 320px shell, narrow navigation and
  notification panel, desktop navigation, long-name G100 at 320px, and G100
  desktop switcher. Compact names truncate without displacing the utility
  actions; full names remain accessible. Rendering checks are not a design
  quality comparison or a complete contrast matrix.
- Package, JSON, local links, frozen archive parity and synthetic evaluator
  tests: recorded in `validation.json` after running the offline verifier.
- Skill frontmatter/scaffold validation: recorded in `skill-validation.txt`.

Pinned dependencies and a fixture preparer are provided in
[fixture instructions](../../tests/nextjs-shell/README.md). The preparer copies
the current plugin assets, preventing a second implementation from drifting.
The actual run used an isolated sibling workspace with identical fixture and
asset hashes, recorded in `verification-receipt.json`. Dependency installation
scripts were not approved/run; the recorded build and test results still passed.

Initial browser runs found missing desktop trigger access, focusable collapsed
links, invalid nested lists, blur/overlay ordering, and Escape propagation
through a header tooltip. Those failures were corrected and the final run
rechecked the complete targeted test set. One sandbox run failed before browser
launch with a temporary-profile EPERM; it was not counted as product evidence.

## Skill behavior evidence

One independent subagent received realistic requests and the candidate skill
without the expected answers, rubric, prior report or diff. Its first response
combined scenarios 25-27; a follow-up addressed scenario 28. Author review found
all 19 criteria satisfied: contextual persistent recovery, nonblocking background
feedback, scrolling banner, task-based container judgment, accurate control
states, shell corrections, version-bound API judgment and honest evidence limits.

This is a targeted text guidance smoke check. It is not an immutable harness
packet, four isolated case runs, a held-out comparison, a repeatability study or
a claim that the full regression suite passed. The same subagent handled both
responses. Later code refinements were browser-tested separately. Fresh package
retrieval failed for the subagent; it explicitly attributed package facts to the
candidate reference. The implementing reviewer independently checked the
published exports and compiled the shell against pinned installed dependencies.

## Remaining boundaries

Untested: actual browser zoom, screen readers, G10/G90, all state/contrast pairs,
Firefox/WebKit, reduced-motion preferences, localized/base-path/rewritten routes,
auth, dirty forms, real notifications and external product destinations.
No Undo or search implementation was added, so their runtime semantics were not
tested; the skill guidance and scenarios explicitly require real state recovery
and real filtering before a product claims them. This is an illustrative
non-modal overlay shell, not a persistent rail or a universal application shell.

Repository release policy requires review and explicit approval before remote
publication. That approval was subsequently provided by the owner on 2026-09-24.
Installing the canonical remote source requires its reviewed commit to be
published and the marketplace pin advanced. The checks above remain the
pre-publication evidence; use the GitHub release and installation receipt for
subsequent publication and destination status.
