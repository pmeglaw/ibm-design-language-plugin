# Design engineering

Use the installed component API and the maintained [motion guidance](motion.md) before generic tuning advice.

## Implementation

Inspect the existing stack first. Prefer supported Carbon components and named token/type/theme APIs. Read [asset scope](asset-scope.md) before choosing the standalone CSS. Add product semantic aliases where they express governed roles; avoid an unnecessary parallel styling system.

Prototype in code when interaction quality is uncertain. Preserve the approved direction and architecture. A runnable demo establishes only the states it implements.

## Motion and input

- Preserve useful Carbon productive microinteractions for frequent and keyboard-driven actions. Feedback should be immediate.
- Choose entrance, standard, or exit by event semantics. Nearby off-canvas panels expected to return close with productive standard easing.
- Use supported component animation rather than blanket scale, spring, or mousedown behavior. Profile custom animation if layout or paint work causes visible problems.
- Test interruption and rapid input while panels open or requests remain pending.
- Honor reduced motion across authored transitions and animation, preserving static state feedback.
- Use native activation and the actual widget's keyboard contract. Do not add roving focus to ordinary lists or pointer-only activation shortcuts to menus.

## Layout and states

Use grid mini-unit geometry and finer Carbon component spacing tokens where appropriate. Keep heights, corners, and focus consistent with documented component variants. Reserve asynchronous-content dimensions when needed.

Use named type roles. Approved raw values belong in the token/theme layer; the fallback's font shorthands are a limited baseline, not additional official roles.

Use optimistic updates only where consequences and reliable rollback justify them. Preserve entered data on failure. Distinguish initial loading, no data, no matches, partial failure, and completion.

## Accessibility and themes

Read [accessibility](accessibility.md) for names, control states, focus, and evidence. Explain prerequisites outside controls; a tooltip must not be the only explanation.

Tokens help consistency but do not make dark mode automatically correct. Verify supported themes, layers, borders, marks, focus, overlays, and preference behavior against actual rendered surfaces.

## Review

Inspect the primary flow and recovery, rapid input, responsive reflow, realistic text, keyboard/focus, reduced motion, supported themes, and relevant contrast pairs. Keep source inspection, automated results, and browser observations separate. Fix demonstrated regressions and report unverified behavior.

## Source review for authored color

Use this review when implementing or changing color rules. It complements the rendered review; screenshots cannot show whether a state bypasses the theme.

1. Locate the authoritative token definitions and the authored consumers affected by the change. Include local stylesheets, embedded HTML styles, CSS-in-JS, inline styles, and SVG paint attributes where used. Keep unchanged vendor palettes, artwork, data values, and examples distinct from application UI rules.
2. Trace each affected painted property through its semantic token or governed alias to the active theme. Check shorthand declarations, gradients, shadows, `fill`/`stroke`, and pseudo-elements as well as `color` and `background-color`. Follow `currentColor` to its inherited foreground. A palette variable such as `--blue-60` still names a swatch, not a role.
3. Search can locate candidates: raw hex, RGB/HSL or other color functions, named colors, and literal `var()` fallbacks. Classify each result by context. Raw values are legitimate in approved theme definitions; `transparent` and `currentColor` can be intentional. A component-local alias that simply hides a raw swatch does not supply theme semantics. Do not use a zero-hex count as an acceptance test.
4. Inspect the winning rules for the changed state family: rest, hover, active, selected when applicable, focus, and disabled. Confirm the tokens exist in the supported package/theme and resolve where consumed. An unused declaration, unresolved variable, inherited alias bound at the wrong theme scope, or later hard-coded override can defeat a correct-looking mapping. See the [worked example](semantic-token-example.md).
5. Verify affected states in the supported themes. Compare computed paint to the intended role and inspect contrast on the actual surface. A temporary token change in an isolated fixture can demonstrate that the consumer follows its role; restore it afterward. Raw CSS pixels used for geometry are a separate concern from literal colors.

Record a concise evidence row for material findings: `file:line | selector/property | state/theme | token chain or bypass | observed result`. Separate source findings, computed-style checks, and visual/contrast results. A plausible screenshot or a successful token lookup alone does not establish all three.
