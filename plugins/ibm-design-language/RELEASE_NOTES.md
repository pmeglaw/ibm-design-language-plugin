# IBM Design Language 1.1.13

Hardens the offline casebook renderer associated with CodeQL alert #1
(`js/xss-through-dom`). The shipped viewer used fixed local options, so the
review did not establish an external attacker input. This release removes the
unsafe HTML reinterpretation primitive as preventive hardening.

- Constructs elements and text nodes instead of dynamic HTML strings.
- Allows only the supported study IDs, themes and capture sizes. Invalid
  selections show a recoverable error rather than becoming markup or paths.
- Reference links require absolute HTTPS URLs without embedded credentials;
  unsupported references remain readable as explicitly unavailable text.
- Preserves all five studies, captions, annotations, images, study links,
  themes and direct offline opening. No additional runtime dependency.
- Adds 25 Chromium regression tests and a Linux browser CI job. The old
  renderer failed the controlled hostile-option probe; the revised renderer
  passed all 20 supported combinations and five hardening/recovery checks.

JavaScript syntax checks and the existing package/evaluator checks pass.
Previous release archives remain unchanged. No broader security audit,
screen-reader certification or new model-quality evaluation is implied.
