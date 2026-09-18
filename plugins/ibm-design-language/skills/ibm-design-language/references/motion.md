# Motion

Read this for motion style, easing, duration, choreography, sequencing, adaptive behavior, or `@carbon/motion` implementation. It reflects Carbon's Overview, Choreography, and Code pages last updated 9 September 2026 (React Components `^1.115.0`).

## Carbon in motion

Carbon components already provide their microinteractions. Product teams own the larger choreography between components and the entrance or exit of page regions. Motion must guide, preserve context, give feedback, or clarify hierarchy—not decorate.

## Style

| Style | Use | Examples |
|---|---|---|
| Productive | Frequent, task-focused, efficient interaction | Button/toggle states, dropdowns, progressive disclosure, table sorting and rendering |
| Expressive | Occasional, important, high-attention moments | A new page, a primary-action consequence, meaningful transition, system alert or notification arrival |

Reserve expressive motion so it retains meaning.

### Productive motion

Use subtle, efficient motion while users complete tasks: state changes, disclosure, sorting, data updates, and other frequent interactions.

### Expressive motion

Use highly visible motion for a significant arrival, primary-action consequence, system alert, or transition whose movement itself communicates meaning.

## Easing

| Easing | When | Productive | Expressive |
|---|---|---|---|
| Standard | Element remains visible for the whole movement | `cubic-bezier(0.2, 0, 0.38, 0.9)` | `cubic-bezier(0.4, 0.14, 0.3, 1)` |
| Entrance | Element appears or responds directly to input | `cubic-bezier(0, 0, 0.38, 0.9)` | `cubic-bezier(0, 0, 0.3, 1)` |
| Exit | Element leaves permanently | `cubic-bezier(0.2, 0, 1, 0.9)` | `cubic-bezier(0.4, 0.14, 1, 1)` |

A panel that leaves the viewport but remains nearby and ready to return uses standard easing, not exit. Never introduce bounce, stretch, sudden stops, or ornamental easing.

### Standard easing

Use when the element is visible at both the beginning and end, such as an expanding tile or sorted table rows.

### Entrance easing

Use when an element appears or reacts directly to input, such as a modal, toast, dropdown, or toggle state.

### Exit easing

Use when an element departs permanently. Use standard easing for a nearby off-canvas panel that is expected to return.

Prefer `motion(standard|entrance|exit, productive|expressive)` from the package so future updates propagate; use raw cubic-bezier values only when the package is unavailable.

## Duration

Duration grows nonlinearly with travel distance and size. Use IBM's Motion Generator when a custom duration is justified; static Carbon tokens remain the current built-in option.

### Duration tokens

| Token | Typical use | Value |
|---|---|---:|
| `$duration-fast-01` | Button/toggle microinteraction | 70ms |
| `$duration-fast-02` | Fade and similar microinteraction | 110ms |
| `$duration-moderate-01` | Small expansion or short travel | 150ms |
| `$duration-moderate-02` | Expansion, system communication, toast | 240ms |
| `$duration-slow-01` | Large expansion or important notification | 400ms |
| `$duration-slow-02` | Background dimming | 700ms |

## Implementation

### Motion design strategy

Before animating:

1. State the product goal and information hierarchy.
2. Map the user journey and the moments needing feedback, progressive disclosure, or guidance.
3. Choose productive or expressive motion.
4. Prototype and test across screen sizes and rapid/repeated input.

### Evaluation checklist

Ask what problem the motion solves, whether feedback is immediate, whether related movements form a coherent system, and whether frequent users notice it unnecessarily.

### Adaptive interface motion design

Always provide a static way to perceive the state change. Honor `prefers-reduced-motion`, simplify movement on constrained mobile/tablet experiences, and do not assume every device can render complex choreography smoothly.

## Choreography

### Paths

Motion follows the 2x Grid and avoids direct diagonal travel. Stagger horizontal and vertical movement slightly to form a rounded-corner path. Use similarly organized paths when sorting or shuffling; criss-cross trajectories make the result difficult to follow.

When removing an item from a tiled grid, let edge thumbnails leave and re-enter their container in a continuous path rather than cutting diagonally across neighbors.

### Composition

Coordinate multiple animated elements to provide wayfinding and focus.

#### Consistency

#### Semantic consistency

The same meaning or function uses the same motion language. For example, a table-row expansion and a dropdown both reveal content from a seam, so both use productive motion and related easing; their durations can differ with size.

#### Spatial consistency

- Content on a higher layer slides with its panel; dim the lower layer.
- Content introduced on the same layer pushes existing content and reveals through a mask.

#### Intentional inconsistency

Use a deliberate difference to express a different outcome. Continuing in the entrance direction can signal affirmation; reversing it can signal cancellation.

### Continuity

Carry shared elements across screens to preserve location in a layered journey. Continuous elements guide; they must not become the focal point. End the sequence on the important page content.

### Sequence and stagger

Staggering can reduce the cognitive load of simultaneous entrance. Carbon illustrates 20ms between table rows; adjust the interval to keep the entire sequence within 500ms.

Recommended entrance order:

| Sequence | Category | Examples |
|---:|---|---|
| 1 | Static chrome | UI shell, top and side navigation |
| 2 | Static body | Headers, prose, images |
| 3 | Dynamic content | Table data, query results |
| 4 | Primary action | Primary button |
| 5 | Animated content | Data visualization |

Delay visualization until it is relevant to the user's progression; do not delay interaction merely to complete choreography.

## Code

### Usage

`@carbon/react` normally supplies what its components need. For custom Sass motion:

```scss
@use '@carbon/motion';

.selector {
  transition: opacity motion.motion(standard, productive)
    motion.$duration-fast-02;
}
```

### API

The package exports six duration variables, `$easings`, a `motion` mixin, and a `motion` function.

### JavaScript

In JavaScript:

```js
import { easings, motion } from '@carbon/motion';

motion('standard', 'productive');
```

### Configuration

The Sass `$prefix` defaults to `'cds'` and can be configured with `@use ... with` when the project already has a deliberate custom prefix.

## Review checks

- The motion has a stated task, feedback, hierarchy, or continuity purpose.
- Style, easing, and duration match the event semantics.
- Travel follows organized grid paths; simultaneous motion remains coherent.
- Staggered sequences finish within 500ms and do not block interaction.
- Rapid retriggering and resize do not cause jumps or restarts.
- Reduced-motion and static state communication are present.
