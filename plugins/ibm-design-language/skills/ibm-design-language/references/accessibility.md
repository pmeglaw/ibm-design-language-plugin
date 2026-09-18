# Accessibility: semantics and evidence

Read this with the component's current accessibility documentation. These distinctions replace older universal claims about disabled controls.

## Control states

| State | Appropriate treatment |
|---|---|
| Native disabled | Unavailable control; generally excluded from sequential focus and normal activation. It can remain perceivable to assistive technology. Use the native element's semantics. |
| ARIA disabled | Announces unavailability; does not itself block activation or remove focusability. Implement suppression and use the widget's focus contract. |
| Read-only | A supported control whose value remains readable but cannot be edited. Native read-only inputs generally remain focusable; a static value does not need an artificial tab stop. |
| Hidden | Content absent from the relevant presentation. Disabled and hidden are different states; do not hide useful information merely because editing is restricted. |

For visible plan-gated values, prefer read-only or static labeled content and an external explanation/upgrade action. For a temporary prerequisite, disabled may be appropriate with an explanation. Do not promise identical announcements across browser and assistive-technology combinations.

Sources: [ARIA disabled](https://www.w3.org/TR/wai-aria-1.2/#aria-disabled), [keyboard interface and disabled controls](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/).

## Names and operation

A search field needs an accessible name even when its visual design omits the label. Use the component's label API or correctly associated markup. A placeholder or magnifier alone is insufficient. Name an icon-only button once; its redundant nested SVG should be decorative. [Carbon search accessibility](https://preview.carbondesignsystem.com/building-blocks/core/components/search/accessibility)

Use native buttons and links. Follow the actual widget's activation and keyboard contract; do not globally replace click with mousedown or add arrow navigation to ordinary lists. Test modal focus containment and return; nonmodal panels have a different contract. CSS transforms alone do not make a closed panel inaccessible.

## Contrast and readability

For normal text, require at least 4.5:1; large text uses 3:1 (24 CSS px regular or approximately 18.67 CSS px bold). Inactive controls have an exception, which means contrast is not required under that criterion, not that every disabled control necessarily fails. Keep values that users need to read legible. [WCAG contrast guidance](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)

Use the relevant component/graphic criterion for icons, boundaries, and marks; Carbon may prescribe a stricter icon target. Resolve foreground/background pairs on actual resting, hover, selected, and focus surfaces. Test both layers and themes that the product supports. A preset's failure is a diagnostic clue, not proof that the component uses that pair.

## Verification record

For implemented work, capture applicable keyboard/focus paths, names and state changes, long text, narrow layouts, zoom, reduced motion, and theme behavior. Separate automated checks from browser and assistive-technology observations. Record environment and unresolved checks. A component library reduces repeated work but does not validate the composition or the application's state management.
