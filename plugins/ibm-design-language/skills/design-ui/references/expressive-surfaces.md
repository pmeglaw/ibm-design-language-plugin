# Expressive surfaces and hybrid pages

Use for an arrival, editorial page, campaign, educational empty state, or a product page containing one of those regions. This is **local craft guidance**, grounded in the sources below; it adds no official component specification. Read [color authority](color-and-brand.md) before choosing a palette and [composition](composition.md) for the live product structure.

## Source baseline and limits

Reviewed 2026-10-24: IDL [layout overview](https://www.ibm.com/design/language/layout/overview/) and [techniques](https://www.ibm.com/design/language/layout/tips-and-techniques/) describe hierarchy, systematic proportions, negative space, repetition with variation, and balanced asymmetry. They do not require every composition to express every characteristic equally. Carbon's [motion overview](https://www.carbondesignsystem.com/building-blocks/foundations/motion/overview) reserves expressive interface motion for occasional important moments.

The [Gallery](https://www.ibm.com/design/language/gallery/) is a source of examples across media, not a component API or a product acceptance test. Three selected static image assets were visually inspected below. The full gallery, animations, live sites, fonts, theme behavior, keyboard and assistive technology were not inspected. No IBM artwork is bundled by this reference.

## Choose the register by region — local heuristic

| Region and task | Starting treatment | Boundary to preserve |
|---|---|---|
| Repeated lookup, comparison, editing | Productive: stable controls, named UI type styles, useful data density | Component anatomy, semantics and states govern |
| First arrival or editorial explanation | Expressive: a clear message, purposeful imagery, a larger type relationship and breathing room | Reading order, legibility and an obvious next step |
| Product shell plus welcome or educational no-data region | Hybrid: retain orientation; give the explanation a bounded expressive region | Controls remain live Carbon controls with normal behavior |
| Filtered no-results, failure or conflict | Task-focused explanation and recovery; modest imagery only if it clarifies | Retain query/context, inputs and the actual recovery action |
| Marketing page outside the tool | Page masthead and editorial composition suited to the brief | Product shell chrome is not implied by using Carbon |

A hybrid **page** combines live regions. IDL **Hybrid UI illustration** is conceptual artwork made from UI fragments; see [imagery](imagery-and-illustration.md). Its simplified text, shadows and illustrated controls do not specify how the live product should work.

## Compose the expressive region — local craft recipe

1. Write the message and the next useful action before selecting an image. Name whether the image explains a concept, shows real work, identifies an offering, or supplies supporting evidence.
2. Establish a shared grid with the surrounding content. Pick a few repeated alignments and proportions; use negative space to emphasize the focal subject. Asymmetry should guide a reading sequence, not obscure the task.
3. Establish a type relationship: message first, explanation second, action where that explanation leads. Keep compact utility labels and controls on their own UI scale. Use [typography](typography.md) for supported productive/expressive styles instead of enlarging every label.
4. Allocate visual weight deliberately. If type carries the idea, imagery can be small or absent. If the image carries the explanation, reduce competing type and color emphasis. An image is not mandatory for an empty state.
5. Plan the handoff into work. A first-run explanation can give way to a compact title and collection after data exists. Preserve orientation and place the task action with its scope; do not repeat a large welcome treatment on every result update.
6. Check meaning without the artwork or animation. Keep essential explanation and actions available as text and controls. Apply [accessibility](accessibility.md), [imagery handoff](imagery-and-illustration.md#handoff-and-review--local-craft-guidance), and [creative animation](creative-animation.md) as applicable.

## Gallery studies: observed choices and transferable heuristics

These are observations of the linked source images, followed by local interpretations. No pixel geometry, rendered website behavior or measured usability is claimed.

| Inspected source asset | Visible observation | Local craft lesson and limit |
|---|---|---|
| [IBM Developer posters](https://www.ibm.com/design/language/static/a8d8bc7ab3d41b6fa84015e21cf83fb6/3cbba/2406_81_IDL_gallery.png) | Related posters use different color fields, geometric drawings and type-led layouts; the framed set still feels related | Repeat construction and typographic logic while varying the focal idea. A poster series does not justify making every product card a different color |
| [IBM Security newsprint ad](https://www.ibm.com/design/language/static/dceacd6f71ef24d9f3d17e86b182174e/3cbba/2306_85_IDL_gallery.png) | A large question dominates; a small prose column and image strips support it; substantial blank space separates the sign-off | Contrast scale and occupied area to make an entry point. Adapt the hierarchy, not the ad's very large type or print spacing, to a working screen |
| [Think event laptop still](https://www.ibm.com/design/language/static/be258ae1f3cedf5dc05c3e747515db73/3cbba/2405_102_IDL_gallery.png) | A large curved shape and color field balance a compact text group and small event identity | One dominant visual idea can carry an arrival. This single still establishes no scrolling, animation or interaction behavior |

## Correction pairs — local heuristics

| If the candidate shows | Try this correction | Inspect the consequence |
|---|---|---|
| A large hero above an everyday work table | Bound the expressive treatment to the actual arrival; restore compact task context for repeat use | Can a returning user reach the table and its controls promptly? |
| Several equal illustrations, oversized headings and colored panels | Choose one focal message; subordinate or remove elements that repeat it | Is there a clear first, second and next step? |
| A centered slogan disconnected from a left-aligned task | Relate the message, explanation and action through the same grid | Does the person understand what the action affects? |
| Brand decoration obscures field, focus or error distinctions | Keep artwork roles separate from interactive/state roles | Are states recognizable on their actual hosts? |
| A cheerful first-run image reused for a failed operation | Explain the failure, preserve work and emphasize recovery | Does the tone match the consequence? |

For a governed override or a mixed-brand region, use the [brand decision path](color-and-brand.md#hybrid-and-expressive-brand-decisions--local-guidance). For table/form/header/search relationships, use [composition craft](composition-craft.md). Record the chosen register, authority, focal idea, action scope and evidence still needed; a plausible composition is not a runtime pass.
