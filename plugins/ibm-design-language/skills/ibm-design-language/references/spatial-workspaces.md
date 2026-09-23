# Spatial workspaces: maps, seating plans and node canvases

Use this alongside `ui-shell.md`, `composition.md` and `status-and-dataviz.md`.
These are design heuristics distilled from the supplied prototypes and shell
comparisons, not new Carbon component APIs. Approved product geometry, status
semantics and editing contracts take precedence.

## Begin with the task and preserve the space

For a viewer, the primary task may be finding a person or location. For an editor,
it may be inspecting and changing an assignment. Keep the canvas dominant;
introduce detail where it helps that task. A floor plan represents physical
relationships: apply the UI grid to chrome and panels, not to rearranging saved
seat coordinates. A tidy synthetic grid can test marker vocabulary, but cannot
establish that markers or labels fit on a real plan.

Separate control scopes:

| Scope | Typical controls | Placement principle |
| --- | --- | --- |
| Product/system | Navigation, account, help | Persistent shell; avoid repeating the same navigation in multiple desktop regions |
| Current view | Floor/zone, search, filters, result count | Map toolbar; distinguish searching this view from searching all locations |
| Canvas | Zoom, fit/reset view, labels | Near the canvas; keep reset with zoom rather than hiding it in an unrelated menu |
| Selected object | Inspect, assign, move, copy reference | Inspector or contextual region, with the selected object still identifiable |
| Shared draft | Undo/redo, review/publish, discard | Clearly named draft controls; distinguish local edits from publication |

An overflow menu can group infrequent secondary actions, then separate a
consequential discard action. Placement does not replace consequence review,
confirmation or undo. Whether publication is destructive depends on the actual
recovery contract, not on a prototype's button color or confirmation copy.

## Measure the inspector and canvas together

Choose a panel by task and remaining usable canvas area, not by memorizing a
single width. Measure the actual browser viewport, both width and height, after
shell, toolbar, margins and open panels. For candidate panel sizes:

1. Render the real plan and markers with the inspector closed and open.
2. Measure the nearest hit-region gaps and label collisions at relevant zooms;
   distinguish the visible glyph from its interactive target.
3. Check that selection and focus remain visible, including near panel edges.
4. Test the intended narrow/coarse-pointer fallback. A smaller glyph alone is
   not a touch-accessibility solution; avoid overlapping invisible targets.
5. Record the chosen size, rejected alternative, measurements and what would
   reopen the decision. A supplied mockup's measurements are historical evidence
   until reproduced on the current plan and viewport.

A persistent inspector that leaves the canvas usable is non-modal. A focused
modal task must contain focus and prevent background interaction. Do not infer
modality from which edge the panel occupies. When several tools share a panel
slot, define replacement, re-entry and unsaved-work behavior; preserve the
selected object's identity when its inspector is temporarily displaced.

## Keep status, selection, focus and search distinct

A seat's domain status, selection, keyboard focus and search match are separate
states. Layer their signals so selecting a seat does not erase whether it is
available, assigned or unavailable. Use the approved vocabulary consistently
in marks, legend, inspector and accessible names. Do not add invented states
such as held/conflict merely because a prototype demonstrates them.

At lower zoom or higher density, reduce label detail before losing status
identity. Initials can become an approved symbol; full identity remains
available through an accessible name and inspection. Evaluate collisions on
real content and preserve coordinate integrity. A name toggle is not permission
to introduce a new product-wide density selector.

Use symbols, patterns or distinct shapes to retain meaning in grayscale.
Check resolved contrast on actual plan backgrounds, hover, selected and search
hosts in both themes; a token preset is not a check of every painted surface.
If filtering dims nonmatches, define whether they remain navigable and
inspectable. Display the matching count, including zero, and a clear-filter
path. Keep clear selection and clear filters separate unless the control
explicitly names both effects.

## Keyboard, orientation and truthful inspection

For a roving-tabindex map, exactly one eligible marker is in the Tab sequence;
arrow keys move focus without changing assignments. Choose navigation that
matches rendered spatial relationships, including irregular zones, rather than
blindly stepping through array order at boundaries. Reconcile the focus anchor
after filtering, removal and rerendering. Keep focus visible through pan/zoom.
A native semantic table has its own keyboard contract; do not impose a map's
roving pattern on every list.

Enter/Space can select or inspect. Inspection must not mutate data unless the
user has explicitly entered an action mode that explains that behavior. A
blocked/unavailable seat may still need inspection: disable the unavailable
action rather than making the information unreachable. Offer a keyboard path
for supported multi-selection; modifier-click alone is insufficient.

Escape dismisses the innermost transient surface first, then clears selection
when appropriate. Closing an inspector returns focus to its marker or a logical
fallback. Shortcuts must not hijack typing in inputs, selects, contenteditable
regions or existing modifier-key commands.

Preserve safe location/view state across navigation when useful. Put only
approved, non-sensitive identifiers and view parameters in URLs; never put
private notes, credentials or unsaved person data there. A shared link still
requires authorization and must not bypass draft/published boundaries.

## Verification sequence

Exercise find → focus → inspect → close → return to the same context, then
filter → zero results → clear, and keyboard-only traversal. For editing, check
explicit mutation → correct draft state → undo/redo → actual persistence or
clearly labeled simulation. Verify publication separately from draft saving.
Test light/dark, long labels, dense real geometry, open panels, narrow viewport,
coarse pointers and reduced motion. Report which checks actually ran.
