# Verify a runnable Carbon implementation

Use alongside the applicable component contracts when building a runnable example or product interaction. These are local engineering checks informed by author-reviewed Carbon React 1.117.0 fixtures, not extra upstream design rules or a passing certification. Establish acceptance from the task before building.

## Before coding: write the observable contracts

List each ancestor destination, action target, independent disclosure, state transition and delivery dependency. Distinguish an authored intent from a verified outcome. The default installed component can require composition to satisfy the page's acceptance conditions; its export or source scan does not establish those conditions.

For an ancestor breadcrumb, choose a real route/view or a meaningful existing section and implement it. Assert that destination content exists and navigation actually reaches it. Do not leave `#program`/`#docs` in a fixture whose only destination is `#release`, and do not add empty hidden IDs merely to pass an existence assertion.

### Heading containing the accordion trigger

Carbon React 1.117.0's default AccordionItem toggle is a button directly under its list item. A heading in panel content does not supply trigger heading semantics. Its supported `renderToggle` receives the children, className, disabled, type, click handler and ARIA control/expanded/name props. Forward them onto the button, with a heading appropriate to the surrounding outline:

```jsx
function SectionToggle({ children, ...buttonProps }) {
  return (
    <h3 className="accordion-section-heading">
      <button {...buttonProps}>{children}</button>
    </h3>
  );
}

<AccordionItem title="Scope notes" renderToggle={SectionToggle}>
  <p>Optional section content.</p>
</AccordionItem>
```

Keep wrapper margins consistent with the composition (for example a locally scoped zero margin), rather than globally restyling every heading. Do not place a heading inside the button or discard the provided children/handler/ARIA props. An installed-version SSR probe verified heading/button nesting, button type, collapsed state, matching panel ID and forwarded title/chevron for this recipe. That structural proof does not establish browser keyboard, animation, focus exclusion or assistive-technology behavior; inspect those separately after composition.

### Fence every pending action and late completion

A React state variable alone can leave a gap before the rendered disabled state catches up. Use a synchronously updated request lock/ref for duplicate launches. Also track a request generation/identity so reset, cancellation, navigation/unmount or a superseding task invalidates obsolete UI completions. Both success/error and final cleanup must check that identity before updating feedback, selections, pending state or focus.

Choose an explicit pending-control contract: disable conflicting edits/reset/removal until completion, or implement cancellation/invalidation. Do not set the page back to idle from Reset while an old callback can still overwrite that state. For a local fake request, cancel its timer or invalidate its completion; for a real server mutation, ignoring a stale response does not undo the server operation. Preserve the repository's actual concurrency and reconciliation contracts.

A useful acceptance sequence is Apply → observe pending → Reset or cancel → begin a new operation → let the earlier operation settle. The earlier result must not replace newer feedback or clear the newer pending lock. Also test immediate duplicate activation, edit/removal during pending where allowed, ordinary first failure and retry, and focus recovery. A passing ordinary retry is insufficient: the reviewed fixture passed that path while Reset re-enabled Apply and the older failure stole focus and overwrote reset feedback.

### Deliver the configured font assets

In the inspected Carbon stack, configure its public Sass `$font-path` before loading modules that use config:

```scss
@use '@carbon/react/scss/config' with (
  $font-path: '/fonts/plex'
);
@use '@carbon/react';
```

This changes emitted URLs; it does not copy fonts or create a server route. Deliver the corresponding installed `@ibm/plex` files under that public path through the supported build/static pipeline, preserving their relative family/font paths, or reuse the project's established vendored-font pipeline. If the project already owns font faces, check the installed configuration for suppressing duplicate generated faces without removing typography styles. Do not blindly add a second font-loading system.

A Sass probe with React 1.117.0's installed dependencies emitted 90 configured URLs, no unresolved `~@ibm/plex` paths, and each referenced asset existed in the installed Plex package. No served/loaded font pass is implied. In the actual application, verify font response MIME/content and loaded faces for the used weights/scripts; a computed family stack can still render a fallback. Keep remote font acquisition out of reproducible builds when the project requires local assets.

## Verify outcomes, not component presence

For each visible action, record its intended state or navigation outcome and exercise it. A breadcrumb with a nonempty fragment is still broken if the destination does not exist. Supply real fixture ancestor views or existing meaningful sections; do not invent fragment targets solely to satisfy a selector. Removal must visibly remove or mark the target removed according to the task's recovery contract. Resetting submission feedback does not implement Remove. Preserve actual native link/button behavior and required confirmation/undo.

Exercise both independent accordion controls by Enter/Space, then inspect settled expanded state, unique panel relationships, heading containing trigger, collapsed focus exclusion and focus recovery. Forward all supported trigger props when using renderToggle. Merely supplying a heading as the title can create the opposite nesting.

## CodeSnippet row limits and copy

In inspected @carbon/react 1.117.0, ResizeObserver resets expandedCode when measured inner-code height is at or below minExpandedNumberOfRows × 16px. An eleven-line example with maxCollapsedNumberOfRows 9 and minExpandedNumberOfRows 12 repeatedly returns to collapsed. For that fixed content, an expanded minimum below the actual eleven rows (for example 10) was verified to settle at Show less in the later eleven-line fixture. It is not a universal remedy for arbitrary content or versions. Avoid fixing it by padding the source string or globally overriding Carbon internals. Reconcile all supported row limits with actual measured content and dynamic changes.

Require Enter and pointer activation to reach a settled Show less state with more visible content, then require collapse to restore Show more and focus. Test keyboard scrolling separately. Keep command text LTR within an RTL page when that is its syntax direction.

Copy must preserve the original string, newlines and whitespace, and report unavailable/denied access honestly. A source catch block establishes an error path, not a tested denial. If browser UI says copied but the available clipboard inspection channel returns empty or another earlier fixture's text, report the unresolved channel mismatch; neither certify exact payload nor infer that the actual write failed. Use a suitable authorized browser test environment to establish the real payload and denial behavior.

## Normal viewport and fonts

At each required width, compare document scrollWidth with document clientWidth, not only innerWidth. On Windows, a classic vertical scrollbar can reduce a 320px viewport to 305px of content width. A 320px min-width then overflows in LTR and can start at negative x in RTL. Keep layouts able to shrink to the available inline size; avoid an unconditional viewport-sized minimum. Check section bounds, long labels, code scroll containers, focus, both directions and required themes.

Measure the regular viewport before full-page capture. The inspected browser's full-page screenshot temporarily suppressed scrollbars, which concealed this overflow. A clean full-page picture does not replace normal viewport geometry or scrolling checks.

Inspect emitted font URLs and their actual response content. Sass can successfully emit unresolved ~@ibm/plex paths. A static SPA fallback can return 200 HTML for a missing font: status 200 and declared font-family are insufficient. Serve or bundle the intended font assets through the project's supported pipeline, then verify font content/loading. Do not introduce remote build-time font downloads to bypass a project's vendored-font contract.

## Preview and reproducibility

Check the exact documented preview URL, including / and intended asset paths when supported. On Windows, normalize('/') can produce a backslash; do not classify the root request by comparing that result to '/'. A server that streams a directory can crash with EISDIR even while /index.html works. Verify paths stay inside the intended root, distinguish directories from files, handle stream errors and use correct response types. Keep loopback binding and a preflighted port; do not expose a fixture externally merely to inspect it.

Independently rebuild frozen sources into a separate output folder when grading. Preserve the generated deliverable and recorded hashes. Matching JS/CSS demonstrates reproducible compilation, not functioning routes, loaded fonts, accessibility or responsive behavior.

## Separate domain state from request history

Do not derive a draft's current state from a cumulative retry/attempt counter. That counter describes request history; reset, removal, undo and changed selections have independent meanings. Define the task's actual reset contract, update every visible summary and action consistently, and retain request history separately only when needed. Verify Apply success → Remove → Reset and Apply success → edit checks: the visible summary, feedback, enabled actions and stored fixture state must agree. In the latest reviewed fixture, Reset restored the checks and removed flag but still displayed Applied because attempts > 1 controlled the summary. Do not make copy promise an original state that the implementation does not restore.

## Keep language and direction independent

Set `lang` to the language of the actual content and `dir` to its base direction. A direction-only test toggle must not change English content to `lang="ar"`; English text can remain `lang="en"` while layout is tested with `dir="rtl"`. A real Arabic locale needs translated content and the appropriate language declaration. Use scoped language overrides for content in another language, and scoped `dir="ltr"` for commands where that is their syntax direction. Logical CSS properties help layouts adapt; they do not replace semantic direction or language. Inspect actual DOM attributes and content in each test state before claiming localization or assistive-technology behavior. [W3C direction and language guidance](https://www.w3.org/International/questions/qa-html-dir#language-tags).

## Recorded evaluation boundary

A known author-written practical case against frozen candidate 45a1163d4d5c244f5408d1bd34b31905564e736cd57e2393b655a5e123461f35 was reviewed 2026-09-29 with real Carbon 1.117.0 / React 19.3.0 / Sass 1.105.0 / esbuild 0.28.2. Independent rebuild matched both output files. Six of eleven assertions passed, four failed and one was not tested; the practical verdict failed. Heading/accordion, checkbox and async recovery checks passed. Dead breadcrumb destinations, misleading removal, classic-scrollbar overflow and broken snippet disclosure failed. Exact clipboard/denial, full contrast, zoom, burst races and screen reader remain unverified. This is a regression case graded by the author, not a blind holdout. Its frozen run predates this reference and does not evaluate these amendments.

## Later frozen practical regression

Frozen candidate `5e316597b1edd96088007405ef4a6cbdd8ba43415cc7104f42e86635099f6f6d` was evaluated with the same known case and pinned packages. It failed with 6/11 pass, 3 fail and 2 not tested; visual scores were 4/4/3/4/3. Independent rebuild reproduced JS/CSS, with the Sass CLI terminal newline explicitly matched and the initial API-only serialization difference retained. Snippet minExpanded 10, narrow layout, bulk/read-only controls and ordinary retry behaved correctly. Ancestor destinations and accordion trigger headings failed; Reset during pending allowed a stale completion to overwrite reset feedback and move focus. A Plex URL returned 404. Clipboard payload/channel equivalence and denial, full relevant contrast/matrix and assistive technology remain unverified. This is author-reviewed regression evidence, not a blind holdout or a practical pass. The heading/font recipes and request-fence guidance above were added after that snapshot; source/SSR/compile probes do not retroactively change its score.

The same frozen snapshot passed six criteria in a new author-written chart guidance case. That result supports the chart review guidance only, not rendered chart conformance or senior-engineer certification.

## Recipe snapshot evaluation

Frozen candidate `add261d63d7e9af095b925074b35a353cac151b3fd846b8b6696d91b48a44058` was evaluated against the same known author-written practical case. The author-agent review recorded 8/11 pass, 2 fail and 1 not tested; visual scores were 4/4/4/4/3, and the practical verdict remained failed. Independent JS/CSS compilation matched frozen outputs. Real ancestor views, heading-contained independent disclosures, selections, read-only protection, pending controls, first failure/retry, removal and narrow overflow behavior improved. Observed Plex Sans/Mono resources had font/woff2 MIME, WOFF2 magic and exact installed-package bytes. Native clipboard writing denied by browser Permissions-Policy produced explicit failure feedback. Reset's summary remained Applied, and RTL mislabeled English content as Arabic. Exact clipboard readback, complete code keyboard scrolling, full focus/state contrast, zoom, reduced motion and assistive technology were not established. Desktop RTL capture had a viewport/canvas mismatch and was not treated as an application clipping failure. The domain-state and language guidance above was added after that snapshot and is not covered by its score.
