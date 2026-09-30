# Status indicators and data visualization

## Status indicators

Four variant families, with numbered and unnumbered badge subtypes. Pick by space and by how much attention the information deserves.

| Variant | Use when | Typically found in |
|---|---|---|
| **Icon indicator** | Ample space and the content needs maximum attention. Requires icon, shape, meaningful color, and a descriptive inline label. | Notifications, progress indicators, data tables, task lists, dashboard widgets |
| **Shape indicator** | Small spaces, or scanning large amounts of data. Shape + color + label, no symbol. | Lists, dashboards, tables, data viz, network diagrams |
| **Badge with number** | A count of new items matters. Max three digits, last character becomes "+". **Only on the 48px large icon button in the UI shell header.** | Notification panes |
| **Badge without number** | Something is new but the count is unknown or irrelevant. More discreet. | Header icons, toolbar icon buttons |
| **Differential indicator** | Tracking deltas in dense statistics, where anything more would be obtrusive. Needs a "+"/"−", caret, or arrow. Color optional. | Financial dashboards, data viz |

**Icon indicators reflect system health** — did the thing succeed or fail. **Shape indicators are a secondary set** whose meaning the product defines: priority, lifecycle phase, activation. They don't necessarily imply urgency.

### The rules that bite

- **Carbon recommends at least two of color, shape and symbol in a status mark**, with a descriptive label for scanning. Distinct symbols inside a constant circular carrier can preserve a requested dot layout. This pattern recommendation is not a blanket WCAG failure for decorative dots paired with complete, persistently visible text labels. A requested circular dot fixes the carrier geometry, not necessarily its contents: keep the requested size and circle, and put a distinct approved status symbol inside each carrier in the recommended implementation. For CSS/code requests, provide the usable markup/styles, not merely a suggestion to add icons later. If the user explicitly requires plain dots with no symbols, honor that constraint with complete visible labels and disclose the departure from Carbon’s independent mark-recognition pattern; do not claim identical decorative dots are distinguishable marks.
- **Measure essential graphical information against its adjacent surfaces**, including default and hover hosts; non-text contrast requires at least 3:1 where applicable. Do not require every nonadjacent status color or decorative internal part to contrast with every other color. Use resolved theme values and report actual pair results. `scripts/check_contrast.py --preset status-light status-dark` is a palette diagnostic, not acceptance evidence for a proposed implementation. See [WCAG non-text contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html) for the applicable boundary; Carbon’s broad wording about between-color contrast should not be interpreted as an all-pairs test.
- Shape indicators use descriptive labels and the appropriate outline treatment, especially for low-contrast orange/yellow fills. Prefer distinct shapes when marks must be recognized independently. Inspect the approved asset's optical/stroke details and actual adjacent contrast rather than inventing a universal 1px stroke. An icon symbol can supply recognition but its contrast still needs verification. Keep a coherent legend; the reviewed source does not prohibit every combination of icon and shape families.
- The source cautions that more than five or six indicators can overwhelm, but explicitly sets no strict limit. Use significance and scannability to decide; do not hide important status data to meet a fabricated five-item quota.
- Prefer distinct shapes or symbols when users need to recognize marks independently of labels. For a spatial map with fixed seat geometry, add domain symbols or textures without changing physical coordinates. State whether a supplied implementation meets this Carbon pattern or only provides labeled decorative marks; do not claim the two are equivalent.
- When several statuses roll up into one, **the group takes the highest-attention color of its members** — green, yellow and red underneath means red on top.
- Place indicators before labels; left-align icons with text when stacked so the column scans. Don't let variable label lengths push icons out of alignment.
- Don't use a status indicator where no action is needed and the information isn't significant — plain text is better than visual noise.
- All status icons should come from the approved icon library, not be invented locally.

### The status palette

| Color | Meaning |
|---|---|
| Red 60 `#da1e28` | Danger, error |
| Orange 40 `#ff832b` (outline Orange 60 `#ba4e00`) | Serious warning |
| Yellow 30 `#f1c21b` (outline Yellow 60 `#8e6a00`) | Warning |
| Green 50 `#24a148` | Normal, success |
| Blue 70 `#0043ce` | Passive notification, information, in progress |
| Purple 60 `#8a3ffc` | Outlier, undefined status |
| Gray 60 `#6f6f6f` | **Draft, not started** — use the palette grade, not `$icon-secondary` (gray 70) or `$text-helper`; those are text/icon tokens, not the status colour |

Gray-for-draft and purple-for-undefined are Carbon reference meanings, not a universal decision for every product. Approved owner brand/state mappings govern; never override a sanctioned Draft-purple role merely because Carbon suggests gray.

The extended yellow and orange ramps exist purely so those hues can reach accessible contrast. They are **not part of the IBM brand palette** and are reserved for data visualization and status indicators. Don't use them in layout.

### Sizing

| Variant | Icon | Type |
|---|---|---|
| Icon indicator | 20px | 16pt |
| Icon indicator | 16px | 14pt |
| Shape indicator | 16px | 14pt or 12pt |

Severity tiers are for the product to define: **high attention** when immediate action is required (alerts, exceptions, errors); **medium** when no immediate action is needed or it's feedback on an action; **low** when something is ready to view or has changed.

---

## Data visualization

Five criteria: **understandable** at a glance, **essential** (the model that best conveys the message, nothing gratuitous), **impactful** through real interaction, **consistent** so visual quantity always matches numerical quantity, **contextual** to the audience and its constraints.

Craft:
- Titles state the insight the data reveals, not the subject.
- Put labels directly on the chart wherever they can replace a legend.
- Tune grid and tick density down until it stops competing with the data.
- Grays keep data points visible without pulling focus; reserve color for the metric carrying the story. Absence of color is information too.
- Categorical palettes maximize distinction between unrelated series; sequential and diverging palettes express relationship and quantity.
- Where color can't be used, patterns, markers, line weights and element density carry the information instead.
- Interaction: overview first, zoom and filter, then details on demand. Never hide something important behind an interaction.
- Motion should make change explicit — entrance and exit that reinforce hierarchy and axis orientation. Never let a transition imply a relationship that isn't there.
- Charts in the same product should be designed as a set that works together, not independently.

### Categorical palettes

**Light themes** (white, g10), 14-color order:
`#6929c4` `#1192e8` `#005d5d` `#9f1853` `#fa4d56` `#520408` `#198038` `#002d9c` `#ee5396` `#b28600` `#009d9a` `#012749` `#8a3800` `#a56eff`

**Dark themes** (g90, g100) — genuinely different, not the same list re-shaded:
`#8a3ffc` `#33b1ff` `#007d79` `#ff7eb6` `#fa4d56` `#fff1f1` `#6fdc8c` `#4589ff` `#d02670` `#d2a106` `#08bdba` `#bae6ff` `#ba4e00` `#d4bbff`

Smaller palettes exist for 1–5 series and are not simply the first N of the 14; when you have five or fewer series use the dedicated set. Light-theme examples: 2-color `#6929c4` + `#009d9a`; 3-color `#ee5396` `#1192e8` `#6929c4`; 5-color `#6929c4` `#1192e8` `#005d5d` `#9f1853` `#520408`.

**Sequential** palettes run one family across 11 stops from white through grade 100 (purple, blue, cyan and teal ramps are provided); dark themes reverse the direction.

**Diverging** palettes use 17 stops with white at the centre — red↔cyan and purple↔teal.

Hover for any chart color is that color darkened by 7% lightness.

### Technical diagrams

Nodes come in three sizes — bullet, small (always with an icon), large (with or without). All built on an **8px grid**, default height **48px**, 1px outline, 24px icons, 8px corner radius, 8px text margins for bullet and small nodes and 16px for large. Connectors default to orthogonal routing with straight or rounded elbows.

Type: node primary label 14/18 semibold, secondary 14/18 regular, connector label 12/16, badge 12/16. Left-align except bullet and small nodes with type underneath, which center.

Color: light theme canvas white, primary colors grades 50–80 or black, secondary white or grade 10, text always black. Dark theme canvas gray 100, primary grades 30–50 or white, secondary gray 100 or grade 90, text always white. Primary colors are for outlines, side bars, blocks and connectors; secondary only for fills. Never rely on color alone — pair with labels, line styles or icons, and always include a legend.

Artboards: 1584, 1312 or 1080px wide, in 16:9, 4:3, 2:1 or 1:1.


## Status source audit amendment: 29 September 2026

The complete [Status indicator pattern](https://carbondesignsystem.com/patterns/status-indicator-pattern/) prose, StatusIndicatorTable/Row code, its YAML and status palettes were read at website commit d8783ad2ae3b5e59c58f58311491f8a2c4e62631. This source review does not establish rendered SVG appearance, installed React exports, actual AT support or an application's compliance.

### Data and source boundaries

The page injects 12 icon-status rows from YAML high and 11 shape-status rows from glyph. These are example taxonomies, not a severity engine: even the high table contains normal/informative/not-started states. Product teams define severity, urgency and rollup order. Unknown/Pending are not proof of failure/success; a high-priority summary must not erase underlying details. The same YAML also contains seven medium/two low legacy rows using severitylevel rather than statusname, whereas the renderer accepts statusname. Do not use that renderer as a generic application component or assume all YAML categories display identically.

The light palette has nine swatches including orange/yellow outlines; dark has seven with changed red/green/blue/purple/gray grades. The two extended ten-stop ramps are yellow and orange, despite container metadata naming them red and teal. Labels, values and roles need reconciliation before copying data. `$status-*` labels in this website table are not proof that a target `@carbon/themes` package exports those names. Use the inspected component/design token API and approved brand aliases; do not create a parallel hard-coded palette from an example table.

The typography table literally uses pt next to px icon sizes. Treat those as source notation requiring reconciliation with the installed type tokens, rather than turning a nominal14 into14pt CSS automatically. Keep logical icon/label alignment for localized content. The source's shape-cultural examples and indicator labels are explanatory examples, not global meanings to impose on a different audience. Source icons are loaded via website `/status-icons/...svg` object paths; rendered icon identity, optical outline and accessibility have not been inspected here.

### Accessibility and state contracts

The visual-guidance section claims three of symbol/shape/color/type are needed “for WCAG”; its later accessibility section recommends two of color/shape/symbol. Neither count is a universal WCAG test. [Use of Color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html) requires a visible alternative when color conveys meaning; an accessible name alone does not serve sighted people who cannot distinguish hues. [Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html) evaluates necessary graphical/control-state information against adjacent colors, with applicable exceptions. Distinguish these requirements from the stronger Carbon mark-recognition recommendation. Do not treat grayscale distinguishability or contrast between every pair of palette swatches as sufficient comprehensive compliance.

Give visible status labels meaningful text and expose that information programmatically. Decorative repeated icons beside complete labels should not produce duplicate announcements; an unlabeled icon carrying meaning needs an equivalent accessible name. A badge on a button must preserve the action's name and communicate meaningful unread/update status. The visual cap is three characters including a plus, not proof of an exact displayed count. Define actual count, zero, unknown count and acknowledgement/clearing behavior; opening a panel need not mark every notification read unless that is the product contract.

Differential marks need sign/direction and a contextual label. Positive/negative direction is not necessarily good/bad: decreasing latency or increasing failures has different meaning from rising revenue. Apply domain-specific semantics, show units and baseline/timeframe, and do not announce a number without its context. A status mark does not implement live updates, aria-live policy, sorting or read/unread persistence. Test change announcements, label/name, forced-colors visibility, actual icon/outline contrast, long/localized labels and badge overflow before claiming a practical pass.
