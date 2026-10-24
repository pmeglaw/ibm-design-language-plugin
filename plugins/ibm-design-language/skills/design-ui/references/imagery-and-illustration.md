# Imagery and illustration selection

Use for hero/spot artwork, educational empty states, product explanations and photography. The selection recipes and correction pairs are **local craft heuristics**. Source summaries below were reviewed 2026-10-24; they are not a complete illustration production manual. Start with the [surface register](expressive-surfaces.md) and [brand authority](color-and-brand.md).

## Decide what the image contributes — local recipe

Write one sentence naming the information the image adds. Choose real-world evidence (photography), explanation (illustration/diagram), or identity ([mark/app icon](brand-marks-and-app-icons.md)). If the image repeats the heading without adding meaning, try removing it. Select the final display context before adding detail; a large campaign illustration and a small no-data spot have different jobs.

IDL [illustration overview](https://www.ibm.com/design/language/illustration/overview/) connects illustration to explanation and clarity. Its [techniques](https://www.ibm.com/design/language/illustration/tips-and-techniques/) distinguish abstract/literal and micro/macro viewpoints, as well as more involved featured imagery versus simplified supportive spots. Select the viewpoint that explains this concept; neither maximum fidelity nor abstraction is automatically better.

## Illustration branches

The middle column summarizes official prose. The final column is local selection/craft guidance. Numeric construction grids describe artwork, not live component spacing or touch targets.

| Branch and official source | Source anchor | Local choice and correction |
|---|---|---|
| [Line Design](https://www.ibm.com/design/language/illustration/line-style/design/) | 4px construction grid, deliberate line-weight distinctions and regular geometry; gradients can follow strokes | Choose for precise explanatory relationships. If lines merge at display scale, reduce detail and restore separation rather than making the whole scene darker |
| [Flat Design](https://www.ibm.com/design/language/illustration/flat-style/design/) | Basic geometric shapes, 8px grid and minimum shape/space guidance; tone separates overlapping shapes | Choose for a bold, quickly read concept. Replace arbitrary blobs and tiny fragments with a coherent geometric idea |
| [Isometric Design](https://www.ibm.com/design/language/illustration/isometric-style/design/) | Consistent isometric projection, aligned volumes and a coherent light/shadow system | Choose when space, assembly or dimensional relationships explain the subject. Flatten the proposal if depth adds complexity without information |
| [Hybrid UI Design](https://www.ibm.com/design/language/illustration/hybrid-ui-style/design/) | Conceptual product UI fragments, tuned fidelity, an 8px artwork grid and meaningful connectors | Choose to explain a workflow or benefit. Keep the causal sequence visible; overlapping fragments should not cover the part that explains the outcome |
| [People](https://www.ibm.com/design/language/illustration/people/) | Simplified realistic anatomy, respectful representation and inclusion; people palettes have a restricted skin/hair/nails role | Reflect the actual audience without caricature. Review the ensemble and each person's role, not just the number of characters |

Detailed Usage tabs, isometric Production instructions, source kits and complete visual examples remain outside this pass. Follow those branches when producing finished artwork; a Design-page summary is not complete production coverage.

### Hybrid UI artwork is not a working interface

The official Hybrid UI page permits simplifying or greeking nonessential text according to illustration scale and purpose. Its shadows distinguish UI fragments; expressive pictograms do not inherit those shadows. It recommends simple light backgrounds and discusses product-theme fragments within them. These are illustration contracts, not permission to replace live labels with rectangles, add shadows to every product card, or drop support for a product's dark theme.

**Local craft guidance:** name whether the image is conceptual or an accurate screenshot. Keep meaningful workflow labels readable or provide a nearby text explanation. If the purpose is to prove the product's actual appearance, use an authorized current capture with realistic permitted content; conceptual artwork cannot establish that claim. A live hybrid page uses real components for its real actions.

## Photography

IDL [Photography overview](https://www.ibm.com/design/language/photography/overview/) separates working-world reportage, portraiture and still life. [Techniques](https://www.ibm.com/design/language/photography/tips-and-techniques/) favors natural observation, controlled focal points, grid-aware framing, common aspect ratios and natural-looking light, while warning against artificial grading, effects and clichés.

| Communication need | Local selection heuristic | Correction when weak |
|---|---|---|
| Show work in context | Reportage with a specific activity and environment | Replace an interchangeable handshake or abstract technology cliché with a relevant real subject |
| Introduce a person/team | Portraiture with consistent care across the set | Harmonize crop, scale and treatment so hierarchy follows the content rather than photographic quality |
| Explain or celebrate an object | Still life with useful material or functional detail | Find a view that reveals what matters; remove effects that obscure it |

**Local crop review:** inspect the image at its actual desktop frame, not only as a full-resolution original. Keep the subject, action and important context visible. Choose a focal area and reserve separate space for text when the image is busy. If the only way to make text readable is a strong wash or filter, try a different crop or an adjacent text region first. Do not treat an image's apparent darkness as measured text contrast. A crop that removes the action can change the story even when it fills the frame neatly.

## Correction pairs — local heuristics

| Candidate | Better-supported direction |
|---|---|
| Elaborate hero illustration inside a small empty-state slot | A simplified spot with one clear concept, explanation and useful next action |
| Line, flat and isometric assets mixed without a narrative reason | A deliberate family and consistent construction across related images |
| A generic decorative chart pretending to show actual results | A labeled conceptual pictogram, or a real [data encoding](infographics-and-chart-selection.md) with source and units |
| Colorful artwork whose colors become button and status overrides | Keep artwork palette choices scoped; map live roles through the governed brand layer |
| Text embedded in an image is the only explanation | Supply accessible equivalent content and keep live text outside the image when practical |

## Handoff and review — local craft guidance

Record purpose, source/asset rights, branch, fidelity, intended crop/display size, host theme, focal point and the intended alternative treatment. Use the [WAI image decision tree](https://www.w3.org/WAI/tutorials/images/decision-tree/) for `img` alternatives: decorative or redundant images use empty `alt`; informative images convey their meaning; functional images convey the action/destination; complex graphics need equivalent information elsewhere on the page. Follow [accessibility](accessibility.md) for control names, operation and evidence standards. Inspect legibility, contrast where applicable and image loading/failure in the actual product before claiming a pass.

Limits: branch prose informed routing; this pass did not visually audit illustration/photo examples, inspect licensed libraries/kits, create/export artwork or validate a consuming product. The only new source-image observations are the three [Gallery studies](expressive-surfaces.md#gallery-studies-observed-choices-and-transferable-heuristics).
