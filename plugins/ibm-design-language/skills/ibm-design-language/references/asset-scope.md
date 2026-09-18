# Optional standalone CSS assets

Prefer the project's installed Carbon components, theme APIs, and styles. These assets are for a standalone HTML prototype when a full component package is unavailable or inappropriate to the requested deliverable.

## Supported scope

- carbon-tokens.css provides generic White and Gray 100 values, system preference, and explicit theme selection. It does not implement Gray 10, Gray 90, or nested Theme/Layer behavior.
- carbon-components.css provides selected productive UI styling. Its document reset and global selectors assume a dedicated page. Do not inject it into an existing app alongside native Carbon styles.
- It supplies no JavaScript behavior, focus trap, state machine, request handling, or accessible-name markup. The author owns these behaviors and their tests.
- Use named type tokens/helpers from the installed package where available. The fallback's explicit font shorthand is a limited baseline; do not treat it as a source of additional official type roles.
- The square UI baseline has component exceptions. Preserve the component's documented anatomy; do not force all SVG artwork, imagery, charts, or diagrams to inherit a UI radius rule.

## Panels and controls

Select modal versus nonmodal behavior deliberately. The CSS catch layer is optional; it does not establish modality. Hide or make a closed panel inert, move focus appropriately when opening, and restore it on dismissal when relevant. For a modal, also implement the appropriate background and focus restrictions. ARIA-disabled styling does not prevent events; suppress activation in code.

The panel closing transition uses standard productive easing for a nearby surface expected to return. Reduced-motion overrides cover the authored fallback transitions and animation. Test the final markup and state logic in the browser.

## Contrast checking

scripts/check_contrast.py --preset all is a diagnostic palette exercise and intentionally includes failing combinations. It is not a release gate. Use individual pairs or the checker's CSV input to verify resolved application consumers and keep the foreground kind/threshold explicit. See the checker's --help and tokens.md.

Do not blindly replace official support fills with darker values: distinguish the fill from the border, icon, text, and current surface. A green 50 graphic on the bundled light hover surface fails 3:1, for example, while a different foreground/surface combination can be correct.
