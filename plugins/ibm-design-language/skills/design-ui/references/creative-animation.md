# Creative animation and motion storytelling

Use for an animated illustration, branded arrival, explanatory sequence or ambient artwork. The storyboard recipe and corrections are **local craft guidance**, separate from the productive interface contracts in [motion](motion.md). A branded animation embedded beside a form does not change the form's keyboard, submission or feedback requirements.

## Source anchors, reviewed 2026-10-24

- IDL [Overview](https://www.ibm.com/design/language/animation/overview/) describes purposeful, concise, simple and engineered animation, with productive/expressive tone serving the communication.
- [Classic principles](https://www.ibm.com/design/language/animation/classic-principles/) adapts staging, anticipation, overlapping action, timing and physicality toward precision. It cautions against exaggerated deformation, bounce and competing actions.
- [Techniques](https://www.ibm.com/design/language/animation/tips-and-techniques/) connects focal attention, controlled cameras, visual complexity, rhythm, sequential versus looped structure and readable undistorted type. More complex artwork calls for more restrained motion.
- Carbon [Motion overview](https://www.carbondesignsystem.com/building-blocks/foundations/motion/overview) covers interface motion. Built-in component microinteractions and occasional expressive UI moments do not specify a brand film's complete choreography.

Prose was reviewed; videos, playback timing, generator output and final animation behavior were not. Do not infer a production duration, frame budget, engine/API or reduced-motion pass from these sources. The creative page's frame-rate advice is not proof of browser performance.

## Choose the format — local heuristic

| Intended outcome | Starting structure | Acceptance question |
|---|---|---|
| Explain cause, process or transformation | Sequential: premise → change → consequence → readable rest | Can the person understand the relationship, including in a static equivalent? |
| Convey one continuing concept | Simple loop with a coherent return to its starting state | Does each cycle communicate the same idea without repeatedly stealing attention? |
| Introduce an important product moment | Brief arrival that resolves into a usable resting composition | Is the task available immediately, with the meaningful result still visible afterward? |
| Confirm input or disclose live UI | Preserve the applicable Carbon component motion | Are feedback, focus and open/closed semantics correct under repeated input? |

Do not infer a loading state from ambient motion. If an animation represents actual progress, its state must come from the operation and remain understandable without the movement.

## Storyboard before timing — local craft recipe

For a fictional system explanation, start with **source → transformation → result**. Sketch these key poses and the resting frame before adding intermediate movement. Keep the label for the result available even when the animation is not playing.

| Storyboard field | Decide explicitly |
|---|---|
| Meaning | What changes, why it changes, and what the viewer should understand |
| Attention | One principal focal event per beat; name the handoff to the next event |
| Geometry | Stable alignments, silhouette and deliberate paths; camera motion only when it explains something |
| Rhythm | Order, pauses and time to read the actual text; avoid simultaneous competing reveals |
| Completion | End state, replay policy and behavior on return to the page |
| Accessible alternative | Static explanation/poster, reduced-motion treatment and pause/stop controls where the criteria below apply |

Use the project's supported delivery format and installed motion tooling. Timing belongs to the content and event; do not apply a UI token's duration to an entire narrative merely because both use the word expressive. Product actions and essential information must remain available without waiting for decorative choreography.

## Correction pairs — local heuristics

| Candidate | Correction |
|---|---|
| Every element enters at once | Stage the focal change, then its consequence; remove motion with no explanatory role |
| Dense isometric scene plus moving camera and labels | Hold the camera, isolate the relevant change and retain readable labels |
| Elastic deformation added to make a technical diagram lively | Use precise timing, alignment and a meaningful reveal; preserve the depicted objects |
| Repeated loop competing with an adjacent work table | Reduce its prominence, use a resting frame, or confine it to the arrival where it helps |
| Headline readable only during a moving interval | Keep a readable resting state and an equivalent text explanation |
| Animation treated as the only success confirmation | Show the actual result and status independently of animation |

For runnable work, verify interruption, rapid retriggering, return/replay, actual loading/failure and reduced-motion behavior. Apply [WCAG Pause, Stop, Hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html): automatically moving, blinking or scrolling content that lasts more than five seconds alongside other content needs a pause, stop or hide mechanism unless essential. Automatic updates alongside other content need pause, stop, hide or update-frequency controls unless essential, with no five-second exemption. Check [Three Flashes or Below Threshold](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html) separately; a pause control or reduced-motion option does not itself establish safe flashing. Use [accessibility](accessibility.md) for control names, keyboard/focus and evidence standards. This reference supplies a design plan and review questions, not executed runtime, performance or assistive-technology evidence.
