# Reviewing research and prototypes for reuse

Read this when supplied reports, HTML examples or mockups are proposed as skill
inputs. Extract reusable decisions; do not promote the entire artifact to design
authority. Product-approved decisions outrank historical proposals, and installed
package contracts outrank an undated report's API claims.

## Adoption procedure

- Identify what the artifact demonstrates: foundations, composition, visual
  vocabulary, interaction or a product-specific proposal. Compare against the
  existing references before adding more prose.
- Read source and render visual artifacts. A static PDF can establish hierarchy
  and comparison, not keyboard behavior, coordinate accuracy or live data safety.
- For each claimed interaction, distinguish implemented, simulated and proposed.
  Test state changes, not only button labels: undo must restore state; an empty
  result must reflect the query; inspection must not perform an implicit edit.
- Validate accessibility behavior independently of attributes. CSS, `role=dialog`
  and `aria-modal` do not themselves implement focus containment or background
  inertness. Hidden/transformed panels must not leave unreachable Tab stops.
- Keep a short disposition: adopted principle and destination; existing coverage;
  rejected/conflicting claims; evidence and remaining checks. Do not copy private
  office data, contact details or floor images into a reusable skill fixture.
- Carry only the minimum new guidance, with scenario evaluations that exercise
  judgment. A passing JSON/schema check is not a model behavioral evaluation.
