import type { Driver } from "./driver";

export type Verdict = "pass" | "fail";

export type BehaviorCheck = {
  id: string;
  group: "Header" | "Search" | "Table" | "Form" | "Frame";
  title: string;
  detail: string;
  verdict: Verdict;
};

export const BEHAVIOR_IDS = [
  "header-tab",
  "header-open",
  "header-close",
  "header-return",
  "search-type",
  "search-clear",
  "search-focus",
  "table-tab",
  "table-long",
  "form-label",
  "form-submit",
  "frame-320",
  "frame-rtl",
] as const;

const TITLES: Record<(typeof BEHAVIOR_IDS)[number], BehaviorCheck["title"]> = {
  "header-tab": "Menu button is the first stop",
  "header-open": "Enter opens the menu",
  "header-close": "Escape closes the menu",
  "header-return": "Focus returns to the menu button",
  "search-type": "Typing enters the query",
  "search-clear": "The clear control empties the field",
  "search-focus": "Focus stays in the search field",
  "table-tab": "The table filter is in the tab order",
  "table-long": "The long cell can be reached with the keyboard",
  "form-label": "The label belongs to its field",
  "form-submit": "A failed submit focuses the first invalid field",
  "frame-320": "Operable controls stay inside 320px",
  "frame-rtl": "Right to left keeps English and stays inside",
};

function item(id: (typeof BEHAVIOR_IDS)[number], ok: boolean, detail: string): BehaviorCheck {
  const group = id.startsWith("header")
    ? "Header"
    : id.startsWith("search")
      ? "Search"
      : id.startsWith("table")
        ? "Table"
        : id.startsWith("form")
          ? "Form"
          : "Frame";
  return { id, group, title: TITLES[id], verdict: ok ? "pass" : "fail", detail };
}

async function tabUntil(driver: Driver, selector: string, max: number): Promise<boolean> {
  for (let i = 0; i < max; i += 1) {
    if (await driver.activeMatches(selector)) return true;
    await driver.tab();
  }
  return driver.activeMatches(selector);
}

export async function runKeyboard(driver: Driver): Promise<BehaviorCheck[]> {
  const checks: BehaviorCheck[] = [];
  await driver.focus("[data-behavior-root]");
  await driver.tab();
  const onMenu = await driver.activeMatches("[data-behavior-menu]");
  checks.push(
    item(
      "header-tab",
      onMenu,
      onMenu ? "The first Tab from the candidate lands on Open menu." : "The first Tab did not land on the menu button.",
    ),
  );

  if (!onMenu) await driver.focus("[data-behavior-menu]");
  await driver.press("Enter");
  await driver.settle();
  const expanded = (await driver.attr("[data-behavior-menu]", "aria-expanded")) === "true";
  const panel = await driver.visible("[data-behavior-panel]");
  checks.push(
    item(
      "header-open",
      expanded && panel,
      expanded && panel ? "Enter sets the menu expanded and shows Releases." : "Enter left the menu closed.",
    ),
  );

  await driver.press("Escape");
  await driver.settle();
  const stillOpen = (await driver.attr("[data-behavior-menu]", "aria-expanded")) === "true" || (await driver.visible("[data-behavior-panel]"));
  const closed = expanded && !stillOpen;
  checks.push(
    item(
      "header-close",
      closed,
      closed ? "Escape hides the menu." : expanded ? "Escape left the menu open." : "The menu never opened, so Escape had nothing to close.",
    ),
  );
  const returned = await driver.activeMatches("[data-behavior-menu]");
  checks.push(
    item(
      "header-return",
      closed && returned,
      closed && returned ? "Focus is back on the menu button." : "Focus did not return to the menu button.",
    ),
  );

  const foundSearch = await tabUntil(driver, "[data-behavior-search] input", 24);
  if (foundSearch) await driver.type("tax");
  await driver.settle();
  const typed = (await driver.valueOf("[data-behavior-search] input")) === "tax";
  checks.push(
    item(
      "search-type",
      foundSearch && typed,
      foundSearch && typed ? "The field accepted tax." : foundSearch ? "The field ignored the keystrokes." : "Tab never reached the search field.",
    ),
  );

  const foundClear = foundSearch ? await tabUntil(driver, "[data-behavior-search] button", 4) : false;
  if (foundClear) await driver.press("Enter");
  await driver.settle();
  const cleared = (await driver.valueOf("[data-behavior-search] input")) === "";
  checks.push(
    item(
      "search-clear",
      foundClear && cleared,
      foundClear && cleared ? "Enter on the clear control emptied the field." : "The clear control did not empty the field.",
    ),
  );
  const backInField = await driver.activeMatches("[data-behavior-search] input");
  checks.push(
    item(
      "search-focus",
      foundClear && cleared && backInField,
      foundClear && cleared && backInField ? "Focus is in the emptied search field." : "Focus left the search field.",
    ),
  );

  const foundToolbar = await tabUntil(driver, "[data-behavior-toolbar] input", 16);
  checks.push(
    item(
      "table-tab",
      foundToolbar,
      foundToolbar ? "Tab reaches the table filter." : "The table filter is not in the tab order.",
    ),
  );

  const foundScroll = await tabUntil(driver, "[data-behavior-scroll]", 12);
  if (foundScroll) {
    for (let i = 0; i < 40; i += 1) await driver.press("ArrowRight");
    await driver.settle();
  }
  const endVisible = await driver.longEndVisible();
  checks.push(
    item(
      "table-long",
      foundScroll && endVisible,
      foundScroll && endVisible
        ? "Arrow keys bring the end of the long cell into view."
        : foundScroll
          ? "The end of the long cell stayed out of view."
          : "The long cell has no keyboard scroll owner.",
    ),
  );

  const foundField = await tabUntil(driver, "[data-behavior-field]", 12);
  const labeled = await driver.fieldLabeled();
  checks.push(
    item(
      "form-label",
      foundField && labeled,
      foundField && labeled
        ? "Tab lands on Project name, and that label is attached to the field."
        : foundField
          ? "The field is reachable, but Project name is not its label."
          : "Tab never reached the project name field.",
    ),
  );

  const foundSubmit = await tabUntil(driver, "[data-behavior-submit]", 8);
  if (foundSubmit) await driver.press("Enter");
  await driver.settle();
  const onField = await driver.activeMatches("[data-behavior-field]");
  checks.push(
    item(
      "form-submit",
      foundSubmit && onField,
      foundSubmit && onField
        ? "Enter on Save note focused the empty project name."
        : "A failed submit did not focus the first invalid field.",
    ),
  );

  return checks;
}

export async function runNarrow(driver: Driver): Promise<BehaviorCheck> {
  const width = await driver.rootWidth();
  const outside = await driver.operableOutside();
  const ok = width >= 300 && width <= 340 && (await driver.rootDir()) === "ltr" && outside.length === 0;
  return item(
    "frame-320",
    ok,
    ok
      ? `Every operable control is inside the ${width}px frame.`
      : outside.length
        ? `Outside the ${width}px frame: ${outside.join("; ")}.`
        : `The frame measured ${width}px in dir=${await driver.rootDir()}.`,
  );
}

export async function runRtl(driver: Driver): Promise<BehaviorCheck> {
  const width = await driver.rootWidth();
  const outside = await driver.operableOutside();
  const lang = await driver.rootLang();
  const dir = await driver.rootDir();
  const english = await driver.englishCopy();
  const ok = dir === "rtl" && lang === "en" && english && outside.length === 0 && width >= 300 && width <= 340;
  return item(
    "frame-rtl",
    ok,
    ok
      ? "English stays lang=en, and operable controls stay inside the right-to-left frame."
      : outside.length
        ? `Right to left pushed controls outside: ${outside.join("; ")}.`
        : `lang=${lang} dir=${dir} on the English candidate.`,
  );
}
