# Date and time entry

Reviewed 2026-09-29 against public Carbon Date picker Usage, Style, Code and Accessibility source text at website commit `d8783ad2ae3b5e59c58f58311491f8a2c4e62631`. This is a documented contract; the target package, calendar runtime, images and screen-reader operation remain unverified. Follow linked framework documentation and installed declarations before coding.

## Choose by the date question

| Question | Documented choice |
|---|---|
| A remembered or approximate past date | Simple text date input; month/year can be sufficient if the domain allows approximation |
| Scheduling with weekday/nearby-date context | Single calendar picker with manual text entry |
| An interval | Range calendar with separately named start/end fields and manual entry |
| A specific time | Time input, plus AM/PM for 12-hour mode and a meaningful timezone |
| Relative timing such as now/in one hour | A suitable select rather than pretending an absolute calendar supplies this variant |

Do not force calendar navigation through decades for a memorable date. Separate month/day/year fields are also acceptable with clear labels, particularly when format localization is unavailable.

## Content, parsing and validation

- Label what the date means: Arrival/Departure or Start/End, not two indistinguishable Date fields. Keep the format visible in the label or helper text; placeholder-only instructions disappear during entry.
- The calendar uses flatpickr underneath; public guidance names `dateFormat` and `locale`. Check the Carbon wrapper's supported prop types and value/events for the installed release. A design description is not permission to pass arbitrary flatpickr options through every framework.
- Localize display, calendar language and static dates consistently. Decide the persisted meaning: a civil date is different from an instant in a timezone. Avoid silently converting date-only input into a UTC instant that shifts the calendar day.
- For 12-hour time, provide AM/PM; 24-hour input does not need that selector. Show timezone where a specific time's meaning depends on it. A zone changes date/time interpretation; it is not just a suffix label.
- Validate actual dates, bounds and range ordering. Calendar min/max constraints aid selection but manual input and server/domain validation must also enforce the allowed values. Mark the specific invalid factor and associate a useful error; do not turn both fields red without identifying which needs correction.
- Distinguish error (must correct) from warning (attention required). Preserve readable read-only values and review access. The Usage page's claim that disabled controls are not read by screen readers is too absolute; use [control-state guidance](accessibility.md#control-states).

## Calendar interaction

- Keep a manual-entry route in calendar variants. Docs describe opening from the calendar icon or field focus; inspect the supported trigger behavior rather than inventing a separate modal on top of it.
- Single selection requires day/month/year. For a range, choose start then end, through text entry or calendar selection. Arrow navigation with Enter selects a date; the specific calendar keyboard model still needs installed-version inspection and testing.
- Month arrows navigate nearby months; the year field can be changed directly. Default opening is near today, but a distant-date task may need a more useful starting view. Today, selected, range interior and disabled dates have distinct meanings.
- Selection of a single date or range end closes the calendar. Docs also describe outside click, leaving the picker and Escape. Verify dismissal, retained value and focus return; do not assume an Escape key handler alone establishes a usable calendar.
- Read-only/disabled host states must suppress unintended calendar/value edits while preserving the appropriate review semantics. If AI suggested the date, explanation remains separate from input interaction; manual override removes provenance styling and a real revert restores the saved original suggestion.

## Layout and style

Default inputs use external labels and heights 32/40/48px, medium by default. Fluid places label and value inside a 64px field, expanding for validation content. Calendar design dimensions are 288px wide by 336px high and independent of input size. Inputs can adapt to the grid, but date content must not horizontally scroll or overflow; calendar anchoring must fit the viewport, including RTL and zoom. Do not resize the calendar by compressing day targets.

Use code-02 for date field text and documented helper/label roles. Field, calendar, range and disabled/read-only roles differ; fluid read-only retains a field surface while default read-only can be transparent. The Style source includes a legacy `$link-01` reference for Today and a literal shadow example: resolve these through installed semantic tokens and approved product authority, not newly hardcoded values.

Time picker composes text and select controls. Its default sizes are 32/40/48px, fluid 64px; fluid group divisions use the documented proportions (time/clock 25% or 50%, timezone 50%) according to the actual fields present. Verify long timezone names and labels rather than forcing a percentage that clips meaning.

## Verify

Record locale, calendar system, timezone, parser/display format and persisted value contract. Test typed and calendar selection, invalid dates/leap days, bounds, incomplete/reversed ranges, AM/PM, relevant timezone transitions, initial calendar view, keyboard opening/navigation/selection/Escape, focus, read-only/disabled/AI explanation, responsive menu positioning and theme/zoom behavior. Carbon's short Accessibility tab links out to APG and IBM requirements; those links do not prove the application passed their contracts.

Sources: [Usage](https://carbondesignsystem.com/components/date-picker/usage/), [Style](https://carbondesignsystem.com/components/date-picker/style/), [Code](https://carbondesignsystem.com/components/date-picker/code/), [Accessibility](https://carbondesignsystem.com/components/date-picker/accessibility/).
