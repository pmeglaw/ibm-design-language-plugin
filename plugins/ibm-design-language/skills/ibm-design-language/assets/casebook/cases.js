window.CASEBOOK = [
  {
    "id": "table",
    "title": "Make the comparison easy",
    "type": "Data table",
    "task": "An administrator needs to identify expired service accounts and compare ownership before taking action.",
    "before": "Strong borders, centered columns and equally prominent actions give every item the same weight.",
    "after": "A shared reading edge, restrained row boundaries and a task-specific summary make the records easier to compare.",
    "annotations": [
      {
        "title": "Establish the task before the controls",
        "why": "The short expiry summary tells the administrator why this list needs attention. New account keeps primary emphasis; Export and Refresh remain available with less weight.",
        "tradeoff": "A summary uses vertical space. Omit it when no reliable or useful status summary exists.",
        "alternative": "For an audit workflow, put review or export emphasis first; creation need not dominate every table."
      },
      {
        "title": "Align by the information being compared",
        "why": "Names and owners share left edges. Stable column positions let the eye compare rows without re-reading the structure. Font weight distinguishes identity from supporting detail.",
        "tradeoff": "The table reserves width for comparison and scrolls locally on a narrow screen.",
        "alternative": "Use a record list with disclosure when mobile reading of individual records matters more than cross-row comparison."
      },
      {
        "title": "Use density deliberately",
        "why": "A 40px desktop row supports scanning this short text. Mobile rows grow to 48px. Text remains paired with the status marker, so the state does not depend on hue.",
        "tradeoff": "Denser rows leave less room for descriptions and secondary actions.",
        "alternative": "Choose a larger row size for multiline information; keep header and row heights coherent."
      }
    ],
    "sources": [
      [
        "Carbon data tables",
        "https://carbondesignsystem.com/components/data-table/usage/"
      ]
    ],
    "exercise": "The owner column now contains team names twice as long. Decide what wraps, what receives more width, and whether the page still needs all five columns.",
    "scope": "Author-created static composition study with fictional content. Local craft judgment; not an official IBM exemplar or a model-evaluation result."
  },
  {
    "id": "form",
    "title": "Give each decision a place",
    "type": "Form",
    "task": "A developer must create a production deployment while understanding its target and capacity.",
    "before": "A uniform multi-column grid gives naming, placement and capacity equal treatment and makes the reading order harder to predict.",
    "after": "A single main reading path groups related decisions; a compact review region keeps the consequence of the choice visible.",
    "annotations": [
      {
        "title": "Group by the user's decision",
        "why": "Name and image establish what will run. Region and environment establish where. Replicas and capacity describe how much. The sequence follows those questions.",
        "tradeoff": "A clearer sequence can make a short form taller.",
        "alternative": "For a familiar repeated task, a compact two-column layout may work if labels, grouping and keyboard order remain predictable."
      },
      {
        "title": "Keep help beside the choice it explains",
        "why": "Image and production guidance sits under the relevant value instead of in a detached notice. Label, value and explanation stay visually connected.",
        "tradeoff": "Persistent helper text increases reading load when the instruction is already familiar.",
        "alternative": "Reserve always-visible help for consequential choices; use disclosure for optional explanations."
      },
      {
        "title": "Separate entry from review",
        "why": "The review region summarizes the same visible choices and marks the production target. The primary action names the operation; draft and cancellation have less emphasis.",
        "tradeoff": "The summary duplicates information and must remain synchronized in a real application.",
        "alternative": "A short low-risk form can use a single column without a review region. A long consequential task may warrant a separate review step."
      }
    ],
    "sources": [
      [
        "Carbon forms",
        "https://carbondesignsystem.com/patterns/forms-pattern/"
      ]
    ],
    "exercise": "Add an invalid image tag and a server failure. Place the field error and recovery action without losing the user's entered values.",
    "scope": "Author-created static composition study with fictional content. Local craft judgment; not an official IBM exemplar or a model-evaluation result."
  },
  {
    "id": "dashboard",
    "title": "Make the exception visible",
    "type": "Dashboard",
    "task": "An on-call engineer has five minutes to decide which service needs investigation.",
    "before": "Four similar metric cards compete, while the latency exception is separated from the service comparison that explains it.",
    "after": "The active exception leads. Supporting metrics remain available, and one consistent scale makes the affected service identifiable.",
    "annotations": [
      {
        "title": "Lead with the actionable exception",
        "why": "Checkout latency above the stated 200ms target is the reason to act. The issue summary connects the metric to an investigation rather than leaving the engineer to infer urgency.",
        "tradeoff": "An exception-first page is less balanced as an executive overview.",
        "alternative": "Use a neutral overview when the task is periodic reporting, with explicit drill-down to exceptions."
      },
      {
        "title": "Make the encoding carry the comparison",
        "why": "The service bars share a zero baseline and a 400ms scale. Values and a labeled target make the comparison readable without relying on color.",
        "tradeoff": "A single current value cannot explain a transient spike or trend.",
        "alternative": "Use aligned time-series panels when the question is when degradation began; preserve comparable axes."
      },
      {
        "title": "Keep supporting context available",
        "why": "Availability, errors and request volume remain readable but use smaller type and less enclosure. Space, type and alignment establish importance.",
        "tradeoff": "A supporting metric may become primary during another incident.",
        "alternative": "Let the task or active incident determine hierarchy; do not permanently equate visual size with business importance."
      }
    ],
    "sources": [
      [
        "IBM type scale",
        "https://www.ibm.com/design/language/typography/type-scale/"
      ],
      [
        "IBM layout",
        "https://www.ibm.com/design/language/layout/overview/"
      ]
    ],
    "exercise": "Latency is healthy but the error rate rises sharply. Redesign the hierarchy without introducing a different visual grammar.",
    "scope": "Author-created static composition study with fictional content. Local craft judgment; not an official IBM exemplar or a model-evaluation result."
  },
  {
    "id": "settings",
    "title": "Expose scope and save behavior",
    "type": "Settings",
    "task": "An operations lead adjusts incident notifications for one workspace without disabling required alerts.",
    "before": "Repeated boxed sections and repeated Save labels make it difficult to infer which changes belong together.",
    "after": "Workspace scope appears first. Closely related preferences share a region, and one explicit save area describes the scope of the change.",
    "annotations": [
      {
        "title": "Put the scope at the reading entry",
        "why": "The workspace name and delivery destination explain who is affected before the options. The page uses that same scope in its save summary.",
        "tradeoff": "Scope controls can take valuable space on a very short preference page.",
        "alternative": "A personal preference page can use concise account context; avoid unnecessary workspace chrome."
      },
      {
        "title": "Distinguish required from editable",
        "why": "Critical incidents stay readable and are labeled Required. Optional warnings and summaries show their current states in words as well as visual controls.",
        "tradeoff": "Static required settings are visible but cannot be adjusted here.",
        "alternative": "When a value can be changed elsewhere, provide an explicit route and reason. Do not imitate an editable control if no edit is possible."
      },
      {
        "title": "Make the persistence model coherent",
        "why": "A single save area represents a draft of related changes. Grouping and labels communicate the intended atomic update.",
        "tradeoff": "A real implementation must retain a draft, expose unsaved changes and handle failed saves.",
        "alternative": "Immediate-save toggles are valid for independent reversible preferences; show saving/failure feedback and remove the global Save button."
      }
    ],
    "sources": [
      [
        "Carbon forms",
        "https://carbondesignsystem.com/patterns/forms-pattern/"
      ]
    ],
    "exercise": "Switch this page to immediate save. Identify every label, state and recovery behavior that must change—not just the button.",
    "scope": "Author-created static composition study with fictional content. Local craft judgment; not an official IBM exemplar or a model-evaluation result."
  },
  {
    "id": "expressive",
    "title": "Match the page to the moment",
    "type": "Expressive page",
    "task": "A first-time visitor needs to understand a fictional observability product and choose whether to explore it.",
    "before": "Compact type, centered stacking and equal action emphasis make the introduction harder to distinguish from its supporting detail.",
    "after": "A larger, fluid headline and a concept diagram explain the offer, with a clear next action and a quieter route for more detail.",
    "annotations": [
      {
        "title": "Give the main idea enough scale",
        "why": "The headline is the starting point for a visitor deciding whether this product is relevant. Larger type and a restrained text measure establish an expressive arrival region.",
        "tradeoff": "A large headline gives fewer facts above the fold.",
        "alternative": "Use a compact title in an established working tool, where repeated access and dense content matter more than introduction."
      },
      {
        "title": "Use imagery to explain something",
        "why": "The original diagram shows logs, metrics and traces converging into one investigation. It reinforces the product idea without using decorative stock imagery or an IBM mark.",
        "tradeoff": "The diagram simplifies the workflow and cannot replace documentation.",
        "alternative": "Use a product screenshot when concrete capability is the deciding factor; use a domain image when human context matters more."
      },
      {
        "title": "Carry the hierarchy into the next step",
        "why": "Explore the product is visually distinct from Read the overview. Supporting proof points sit below the introduction instead of competing with it.",
        "tradeoff": "A single emphasized path may underserve visitors with a different intent.",
        "alternative": "Two equally important audiences can justify an explicit audience choice before either call to action."
      }
    ],
    "sources": [
      [
        "IBM type scale",
        "https://www.ibm.com/design/language/typography/type-scale/"
      ],
      [
        "IBM layout",
        "https://www.ibm.com/design/language/layout/overview/"
      ]
    ],
    "exercise": "Adapt this arrival region for a returning signed-in user. Keep the visual identity while prioritizing continuation of their work.",
    "scope": "Author-created static composition study with fictional content. Local craft judgment; not an official IBM exemplar or a model-evaluation result."
  }
];
