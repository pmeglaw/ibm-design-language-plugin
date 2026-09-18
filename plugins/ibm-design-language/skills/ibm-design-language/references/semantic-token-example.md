# Worked example: semantic token consumption

Read this when authoring custom color rules or reviewing a tokenized interface that may still contain hard-coded states. This is a local implementation example, not a replacement for Carbon components.

## Scope and decision

Use the installed Carbon component and supported theme APIs first. For custom regions, consume the project's existing semantic roles directly; add a product alias only when it expresses a useful product decision. Raw approved values belong in the maintained theme/brand layer.

The runnable fragment below uses this skill's optional [White / Gray 100 token asset](../assets/carbon-tokens.css). Load it before the CSS. Use `data-carbon-theme="white"` or `data-carbon-theme="g100"` on `html`, or omit the attribute to follow system preference. Read [asset scope](asset-scope.md): this example does not implement Gray 10, Gray 90, nested Carbon layers, or a complete export workflow.

For an installed library, verify the token names and imports against that package version. Button tokens may be provided by component styles rather than the global theme alone. Do not copy this custom button over a supported Carbon button.

## A plausible-looking bypass

```css
/* Rejected component rules: these freeze a palette value into one state. */
.example-action:disabled { background-color: #c6c6c6; color: #525252; }
.example-link:hover { color: #0043ce; }
```

Even if those colors resemble the intended theme, the selectors no longer follow its state roles. `var(--blue-70)` would still select a palette swatch; `var(--cds-link-primary-hover, #0043ce)` would conceal a missing semantic token behind a fixed fallback.

## Working fragment

```html
<section class="token-example" aria-labelledby="example-title">
  <h2 id="example-title">Export summary</h2>
  <p class="example-description">Preview the available export options.</p>
  <button type="button" class="example-action">Preview export</button>
  <button type="button" class="example-action" disabled>Export unavailable</button>
  <p><a class="example-link" href="#example-notes">Read export notes</a></p>
  <p id="example-notes" class="example-description">Export becomes available when processing finishes.</p>
</section>
```

```css
/* Theme definitions are loaded first. This rule consumes a semantic surface. */
.token-example {
  --example-surface: var(--cds-layer-01);
  background-color: var(--example-surface);
  color: var(--cds-text-primary);
  padding: var(--cds-spacing-05);
}
.example-description { color: var(--cds-text-secondary); }
.example-action {
  background-color: var(--cds-button-primary);
  color: var(--cds-text-on-color);
  border: 1px solid transparent;
  min-height: 3rem;
  padding: 0 var(--cds-spacing-05);
  font: inherit;
  cursor: pointer;
}
.example-action:not(:disabled):hover {
  background-color: var(--cds-button-primary-hover);
}
.example-action:not(:disabled):active {
  background-color: var(--cds-button-primary-active);
}
.example-action:focus-visible {
  outline: 2px solid var(--cds-focus);
  outline-offset: -2px;
  box-shadow: inset 0 0 0 3px var(--cds-focus-inset);
}
.example-action:disabled {
  background-color: var(--cds-button-disabled);
  color: var(--cds-text-on-color-disabled);
  cursor: not-allowed;
}
.example-link { color: var(--cds-link-primary); }
.example-link:hover { color: var(--cds-link-primary-hover); }
.example-link:focus-visible {
  outline: 2px solid var(--cds-focus);
  outline-offset: 2px;
}
```

The example demonstrates state colors. Its preview button has no application handler; an actual export flow must supply behavior and feedback. The link is a native in-page link. Native `disabled` prevents button activation; CSS does not supply that behavior. Do not copy disabled colors to a read-only field whose value people need to inspect or copy.

The surface alias is defined on the consuming region. CSS custom-property aliases resolve in the scope where declared: an alias inherited from `:root` can retain its outer value when a child changes its underlying theme token. Rebind useful aliases at the actual theme/layer boundary, or consume the installed contextual token directly. This numbered `layer-01` fragment is deliberately for a known first layer; reusable nested components should follow the installed contextual layering API.

## What to verify

| Consumer | Role to resolve | Required observation |
|---|---|---|
| Region surface and text | `layer-01`, `text-primary`, `text-secondary` | Change with the selected theme |
| Primary button | `button-primary`, `text-on-color` | Resting paint follows the roles |
| Enabled hover / press | `button-primary-hover`, `button-primary-active` | Each state reaches its own role |
| Disabled button | `button-disabled`, `text-on-color-disabled` | Hover and press do not replace the disabled paint |
| Focus | `focus`, `focus-inset` | Keyboard focus remains visible on the current host |
| Link | `link-primary`, `link-primary-hover` | Both foreground states follow the theme |

Read the [source-review guidance](design-engineering.md#source-review-for-authored-color). In a disposable fixture, changing `--cds-button-disabled` should change the disabled background while leaving the enabled button's resting fill alone. Also check explicit theme overrides and supported system preference. Measure relevant text/graphic contrast separately; token consumption does not prove accessibility. Browser privacy restrictions limit inspection of visited-link colors; this fragment does not customize that state.

## Source authority

- [Carbon button specifications](https://carbondesignsystem.com/components/button/style/) define the primary, hover, active, focus, and disabled roles used here.
- [Carbon color usage](https://carbondesignsystem.com/elements/color/usage/) explains numbered layering and contextual tokens.
- [Carbon Sass documentation](https://github.com/carbon-design-system/carbon/blob/main/packages/styles/docs/sass.md) describes theme and component-token configuration; check the installed version before using those APIs.

These routes were reviewed on 2026-09-15. The fragment and source-review procedure are local implementation guidance. Verification against the bundled fallback does not establish compatibility with every Carbon package release.
