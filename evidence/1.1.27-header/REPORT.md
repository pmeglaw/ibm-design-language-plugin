# Header reference refresh - 1.1.27 preparation evidence

Reviewed 6 October 2026 from repository base
`60a4ed08496e3a195bfdfa1861c4cc5adcd0ba56`.

## Delivered source

Refresh `design-ui` header routing, `references/ui-shell.md` and the header
source-map entry from the live Carbon Guidelines, Specifications, Code and
Accessibility pages marked updated 2 October 2026. Bundle 21 original
header-specific images (8 Guidelines, 8 Specifications, 5 Accessibility),
including the animated skip-link file and static fallback, with attribution,
an index, dimensions, byte lengths, URLs and SHA-256 hashes.

The reference maps current header variants to React Storybook compositions and
records geometry, typography, semantic state roles, content and responsive rules,
and consumer-owned accessible labeling and skip-link composition. Historical
receipts, evaluation verdicts, fixture assertions and previous release bytes are
preserved. No product runtime or component dependency changes are included.

## Source and browser inspection

- [Guidelines](https://www.carbondesignsystem.com/building-blocks/core/components/ui-shell-header/guidelines)
- [Specifications](https://www.carbondesignsystem.com/building-blocks/core/components/ui-shell-header/specifications)
- [Code](https://www.carbondesignsystem.com/building-blocks/core/components/ui-shell-header/code)
- [Accessibility](https://www.carbondesignsystem.com/building-blocks/core/components/ui-shell-header/accessibility)
- [React overview](https://react.carbondesignsystem.com/?path=/docs/components-ui-shell-header--overview), labeled `@carbon/react@1.117.0`

All four documentation contracts were read. Six selected overview API tabs and
three White desktop compositions were inspected: Navigation and Actions,
Navigation/Actions/Side Nav, and Actions/Right Panel. The first preview measured
48px header height and 48 by 48px visible utilities at a 1219px iframe width.
Original asset signatures, decoding and hashes passed; contact sheets were
visually reviewed. Only the GIF's first frame was visually inspected.

Storybook placeholders, demo arguments and the experimental badge do not establish
product destinations or stable component APIs. Reading accessibility guidance is
not a manual screen-reader test. No model generation, generated-product evaluation,
full Storybook theme/RTL/reflow/zoom matrix or manual assistive-technology check ran.

## Local gates on the prepared candidate

| Command | Result |
|---|---|
| `python -B scripts/verify.py` | Pass: 166 files, 324 local links, 54 synthetic tests; prior archives preserved |
| Skill `quick_validate.py` | Pass |
| `python -B -m unittest discover -s tests -p test_install_parity.py` | 6 passed |
| `python -B -m unittest discover -s tests -p test_release_docs.py` | 22 passed |
| `python -B scripts/verify_release_docs.py --github` | Pass: published 1.1.26 distinguished from candidate 1.1.27 |
| `npm test` in `tests/release-fixture` | 4 passed: all 29 Corrected checks on White, Gray 100 and 390px; Missed fails all; search negative control passes |
| `npm test` in `tests/behavior-fixture` | 3 passed: all 13 Corrected checks on White and Gray 100; Missed fails all |
| Production `npm run build` and `npm test` in prepared Next.js shell | Build passed; 20 tests passed |
| `node --test tests/casebook/renderer.test.cjs` | 25 passed in normal host context |
| `git diff --check` | Pass |

The casebook's initial restricted-shell attempt failed before browser startup
because its temporary directory was inaccessible. That infrastructure failure was
retained in the task receipts; the host-context run passed without changing the
fixture. Restricted-shell GitHub authentication also differed from the authenticated
host context. Neither infrastructure result was represented as product failure.

These fixtures are model-free regression gates, not product acceptance or
screen-reader certification. Pinned fixture dependencies and assertions remain
unchanged. Publication, exact-merged-commit CI, downloaded release bytes, supported
installation and fresh discovery are separate delivery checks recorded by the
published release and final delivery report when they finish.
