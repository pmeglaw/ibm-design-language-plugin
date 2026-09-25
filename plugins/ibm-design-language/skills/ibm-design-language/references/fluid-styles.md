# Fluid styles: selection and implementation

Reviewed 2026-09-25 against the public Carbon pages linked below. This is design
guidance, not proof of an installed API or an application's accessibility.

## Choose the style separately from responsive width

[Carbon's fluid-styles pattern](https://carbondesignsystem.com/patterns/fluid-styles/)
distinguishes responsive sizing from visual treatment. A default control can resize
with its grid; that alone does not make it fluid-styled. Fluid typography is another
separate choice.

Fluid styling joins a control to a larger structure at a container edge. Choose it
for spacious, simple, attention-worthy tasks; use default styling for dense work,
complex forms, or layouts requiring gaps. Avoid fluid edges competing with accordion
dividers. Related controls join without horizontal or vertical gaps, using condensed
or narrow gutters and separators with 3:1 contrast. Width follows container proportions
or column spans across breakpoints.

Inputs use internal labels and a nominal 64px height. Buttons occupy container
fractions such as 25%, 50%, or 100%; if more actions follow below, choose default
buttons. Containers can themselves resize with the grid. A valid hybrid combines
default inputs and attached fluid footer actions in a dialog or panel.

## Apply the component-specific qualifications

### Forms and field assistance

[Form usage](https://carbondesignsystem.com/components/form/usage/) makes the
general gutter guidance more specific: prefer condensed fluid forms, with a 1px
separation between columns; narrow gutters are usually unsuitable for forms because
text can enter the gutter. Default forms typically use wide gutters and 32px spacing.
Do not turn the pattern's zero-gap rule into removal of the dividing border.

When a two-column row gains validation content, both fields grow together. The
nominal height is not permission to clip errors or translated content.

Fluid inputs provide assistance through tooltips rather than the persistent helper
region used by default inputs. Carbon explicitly permits essential assistance there
for this variant. Preserve the real label; placeholder text cannot replace it.
If continuously visible instructions are necessary for this task, prefer a default
input. Verify keyboard access and the input's programmatic relationship to help and
errors; a visual tooltip is not evidence of accessibility.

### Buttons and attached action groups

[Button usage](https://carbondesignsystem.com/components/button/usage/) distinguishes
grid-sized default buttons from attached fluid groups. Related default buttons
generally share widths; they can have spacing and remain default-styled.

For attached groups the button page specifies bleeding to two or more edges,
right alignment or full container width, and no tertiary variant. This is stricter
than the pattern's general one-edge minimum. A tertiary button may have responsive
width in an ordinary page layout; that does not permit an attached tertiary footer.

Use the theme's `button-separator` role for the 1px division and check the resulting
3:1 distinction. Ghost buttons can join an appropriate contained group; their hover
surface must reach its edges too. Preserve label alignment (mirrored in RTL) and
wrap long button labels instead of truncating them. Some arrangements, including
stacked fluid actions, are documented as requiring implementation overrides; confirm
support in the actual package before prescribing code.

## Implement and assess the actual task

These are local workflow recommendations, not additional Carbon specifications:

1. Identify the enclosing structure, task complexity, assistance needs and intended
   emphasis. State why this region benefits from the chosen treatment.
2. Inspect installed exports, props, styles and component documentation. Do not
   assume every control has a fluid variant, invent a `fluid` prop, or confuse
   width utilities with a supported variant. Preserve approved semantic brand roles.
3. Inspect normal, focused, invalid, loading, disabled and read-only states where
   supported. Check help access, error association, focus visibility and keyboard
   order. Styling must preserve the underlying interaction contract.
4. At narrow and wide viewports, inspect joins, border contrast, long labels,
   validation growth and action placement in each supported theme. Measure actual
   adjacent colors; source token names alone do not prove contrast.

### Decision exercises (author-created, not executed evaluations)

| Request | Reasoned starting choice |
|---|---|
| Make a dense settings form responsive | Default inputs with responsive widths; responsive sizing does not require expressive styling. |
| Feature a short sign-in form with one completion action | Consider a cohesive fluid composition if help and container constraints fit. |
| Keep spaced default fields inside a modal, but attach its actions | The hybrid is valid; inspect the footer with button-specific rules. |
| Put a bordered tertiary action in an attached footer | Select a supported fluid action variant, or retain default spacing around the tertiary button. |

## Coverage limits

The pattern's text sections and the relevant form/button passages were reviewed.
Illustrations, live demos, package APIs and rendered/assistive-technology behavior
were not tested in this documentation update. Follow each input's own documentation
for its anatomy and states. Recheck dated guidance when the target version differs.
