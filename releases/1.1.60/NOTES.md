# 1.1.60 Retry context on narrow screens

For an action that sends a selected item to a destination, the design handoff now checks whether the user can see both names with the failure and Retry at 320 CSS pixels wide. The check uses a non-default selection and a distinctive edit, captures the view before any further interaction, and verifies that Retry uses the same item, destination and edit.
