# Color and brand integration

Read this when choosing an accent, applying an approved brand palette to Carbon, auditing product color, or deciding whether generic IBM guidance or product governance wins.

## Contents

- Authority before palette
- Role mapping contract
- What a brand may and may not override
- Verification
- Governed example: Seat Planner

## Authority before palette

Resolve color authority in this order:

1. Current repository instructions, approved design records, and owner rulings for the product in scope.
2. The product's maintained brand token source or brand skill.
3. Carbon theme roles and defaults.
4. Generic IBM palette guidance.

Use Carbon Blue 60 for a generic Carbon product with no approved alternative. When an explicitly in-scope product has a governed palette, use that palette for the roles it actually overrides. Do not import a brand from memory, a different repository, a logo, or an illustrative asset.

Repository and owner decisions can override a generic value; they do not override Carbon's accessibility requirements, component state contracts, or the semantic meaning of warning, error, success, focus, and other roles.

## Role mapping contract

Keep three layers distinct:

```text
approved brand value -> product semantic token -> Carbon/component role -> painted selector
```

Use the project's existing semantic aliases when present. Override Carbon roles through its supported theme or component-token configuration only where the product authorizes a different value. For a generic standalone example with real token consumers, see [semantic token consumption](semantic-token-example.md).

The raw value belongs only in the approved brand or theme layer. Components consume semantic roles, not brand swatch names or raw values. A declaration is not proof of use: inspect the selector or component that paints each role.

Map a complete state family, not one resting swatch:

| Role family | Required coverage |
|---|---|
| Primary interaction | Rest, hover, active, selected, disabled, on-color text |
| Links | Rest, hover, visited if supported, focus host |
| Focus | Light and dark surfaces, inset geometry, nested/opposite-theme regions |
| Interactive borders and bars | Rest, hover, active, selected, dark/light hosts |
| Information | Accent, subtle background, icon/mark, text |
| Status | Error, warning, success, information, inactive, and governed product-only states |
| Surfaces | Background, layers, fields, hover, active, selected, overlay, skeleton |

## What a brand may and may not override

A governed brand may replace approved interaction, link, focus, information, border, or product-status values. Preserve the role names and interaction hierarchy so Carbon components continue to behave predictably.

Do not:

- turn a logo color into a button color without explicit approval;
- replace warning, error, or success merely to make the interface look more branded;
- map one accent to primary, information, focus, every status, and decoration;
- add IBM blue to a product whose authority explicitly replaces it;
- treat an unchanged palette declaration in a vendored asset as a painted-color violation;
- approve a new brand value because it appears in an illustration or historical mockup;
- change component CSS directly when a token or product alias should own the value.

Grays and layers should still dominate productive interfaces. Brand color guides action and meaning; it does not decorate every region.

## Verification

For a generic Carbon design, run `scripts/check_contrast.py --preset all` and name the tested surfaces and summary.

For a governed product, also use its current pair generator, resolved-token tests, and browser checks. Verify:

- forced light;
- forced dark;
- system light with no explicit theme attribute;
- system dark with no explicit theme attribute;
- rest, hover, active, selected, disabled, and focus states;
- nested layers and opposite-theme regions;
- both aliases and their painted consumers.

Text search is triage, not proof. A raw blue value in an unchanged vendor palette may never paint. Conversely, a safe-looking semantic declaration does nothing if an active selector still consumes a different token. Report automated contrast separately from rendered/browser evidence.

## Governed example: Seat Planner

Apply this section only when Seat Planner or its repository is explicitly in scope. Its current brand authority lives in the repository design records and brand token files; re-read those sources before changing application code.

### Approved role mappings

| Role | Light | Explicit and system dark |
|---|---|---|
| Primary fill / hover / active | `#B85C2E` / `#8F4521` / `#7A3A1C` | Same |
| Link / hover | `#8F4521` / `#7A3A1C` | `#E8A07A` / `#F5DDD1` |
| Interactive borders and theme-aware bars | `#B85C2E` | `#E8A07A` |
| Focus | `#B85C2E` | White |
| Tertiary base / hover / active | Terracotta family | Neutral dark host values with white text |
| Information accent / subtle background | Terracotta / `#FBE8DC` | Apricot / Gray 90 |
| Draft mark | Purple 60 | Purple 40 |

Seat Planner rules:

- Components consume semantic `--sp-*` aliases; do not spread firm colors through component CSS.
- Terracotta replaces IBM blue in painted product interaction roles.
- Logo orange `#EB7C35` is mark-only and never an interaction color.
- Preserve warning and error semantics; Draft is the governed purple product status.
- The constant-dark header Draft mark remains Purple 40, while theme-aware interactive bars use the governed terracotta/apricot mapping.
- Forced dark and system dark must resolve identically for governed roles.
- Preserve vendored Carbon CSS and runtime/documentation component-sheet parity unless a separately authorized migration changes that architecture.
- New brand colors require owner approval.

For implementation, defer to the current Seat Planner brand skill, repository instructions, design decisions, and token files when they differ from this example. Historical values here are routing context, not permission to modify the application.
