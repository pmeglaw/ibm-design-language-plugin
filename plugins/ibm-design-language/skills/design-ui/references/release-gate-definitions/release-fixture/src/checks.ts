export type ReleaseCheck = {
  id: string;
  group: "Header" | "Table" | "Search" | "Form";
  title: string;
  verdict: "pass" | "fail";
  detail: string;
};

const HEIGHTS = [24, 32, 40, 48];
const ROW_HEIGHTS = [32, 40];

function check(id: string, group: ReleaseCheck["group"], title: string, ok: boolean, detail: string): ReleaseCheck {
  return { id, group, title, verdict: ok ? "pass" : "fail", detail };
}

function box(el: Element) {
  return el.getBoundingClientRect();
}

function near(value: number, targets: number[], slack: number) {
  return targets.some((target) => Math.abs(value - target) <= slack);
}

function missing(id: string, group: ReleaseCheck["group"], title: string, name: string): ReleaseCheck {
  return check(id, group, title, false, `${name} is missing from the candidate.`);
}

export function judgeRelease(root: HTMLElement): ReleaseCheck[] {
  return [...headerChecks(root), ...tableChecks(root), ...searchChecks(root), ...formChecks(root)];
}

function headerChecks(root: HTMLElement): ReleaseCheck[] {
  const stage = root.querySelector("[data-release-stage]");
  const header = root.querySelector("[data-release-header]");
  const action = root.querySelector("[data-release-page-action]");
  if (!stage || !header || !action) {
    return [
      missing("header-compact", "Header", "Compact shell", "Header"),
      missing("header-rule", "Header", "Hairline rule", "Header"),
      missing("header-full", "Header", "Full-width shell", "Header"),
      missing("header-identity", "Header", "Name beside navigation", "Name"),
      missing("header-utilities", "Header", "Contiguous utilities", "Utilities"),
      missing("header-action", "Header", "Page action outside the shell", "Page action"),
    ];
  }
  const headerBox = box(header);
  const stageBox = box(stage);
  const style = getComputedStyle(header);
  const shadow = style.boxShadow;
  const utilities = [...header.querySelectorAll("[data-release-utility]")].map(box).sort((a, b) => a.left - b.left);
  const gaps: number[] = [];
  for (let i = 1; i < utilities.length; i += 1) gaps.push(utilities[i].left - utilities[i - 1].right);
  const contiguous = utilities.length >= 2 && gaps.every((gap) => gap <= 8);
  const trailing = utilities.length >= 2 && utilities[0].left >= headerBox.left + headerBox.width * 0.55;
  const compact = near(headerBox.height, [48], 2) && (shadow === "none" || shadow === "");
  const full = Math.abs(headerBox.width - stageBox.width) <= 2 && Math.abs(headerBox.left - stageBox.left) <= 2;
  const inside = header.contains(action);
  const rule = hairline(header);
  const identity = headerIdentity(header);
  return [
    check(
      "header-compact",
      "Header",
      "Compact shell",
      compact,
      compact
        ? `Header is ${Math.round(headerBox.height)}px with no drop shadow.`
        : `Header is ${Math.round(headerBox.height)}px${shadow && shadow !== "none" ? " and casts a shadow" : ""}. A shell is 48px and flat.`,
    ),
    check("header-rule", "Header", "Hairline rule", rule.ok, rule.detail),
    check(
      "header-full",
      "Header",
      "Full-width shell",
      full,
      full
        ? "Header meets both edges of the stage."
        : `Header is ${Math.round(headerBox.width)}px inside a ${Math.round(stageBox.width)}px stage.`,
    ),
    check("header-identity", "Header", "Name beside navigation", identity.ok, identity.detail),
    check(
      "header-utilities",
      "Header",
      "Contiguous utilities",
      contiguous && trailing,
      contiguous && trailing
        ? "Notifications and account sit together at the end of the shell."
        : "Utility controls are split, or they are not grouped at the trailing edge.",
    ),
    check(
      "header-action",
      "Header",
      "Page action outside the shell",
      !inside && box(action).top >= headerBox.bottom - 1,
      inside
        ? "Publish release sits inside the shell. The shell navigates; the page owns the task."
        : "Publish release is in the page, under the shell.",
    ),
  ];
}

function tableChecks(root: HTMLElement): ReleaseCheck[] {
  const stage = root.querySelector("[data-release-stage]");
  const table = root.querySelector("[data-release-table]");
  const toolbar = root.querySelector("[data-release-toolbar]");
  const row = table?.querySelector("tbody tr");
  if (!stage || !table || !toolbar || !row) {
    return [
      missing("table-density", "Table", "Deliberate density", "Table"),
      missing("table-type", "Table", "One type size", "Table text"),
      missing("table-pad", "Table", "16px cell padding", "Cells"),
      missing("table-edges", "Table", "Shared column edges", "Columns"),
      missing("table-borders", "Table", "Restrained boundaries", "Cells"),
      missing("table-toolbar", "Table", "Toolbar with the table", "Toolbar"),
      missing("table-long", "Table", "Long content stays in the table", "Long cell"),
      missing("table-clip", "Table", "Long content ellipsizes", "Long cell"),
    ];
  }
  const rowHeight = box(row).height;
  const density = near(rowHeight, ROW_HEIGHTS, 2);
  const edges = aligned(table, "name", "left") && aligned(table, "count", "right");
  const cells = [...table.querySelectorAll("tbody td")];
  const boxed = cells.filter((cell) => {
    const style = getComputedStyle(cell);
    const sides = [style.borderTopWidth, style.borderRightWidth, style.borderBottomWidth, style.borderLeftWidth].map((value) => Number.parseFloat(value) || 0);
    return sides.filter((side) => side >= 1).length >= 3;
  }).length;
  const tableBox = box(table);
  const stageBox = box(stage);
  const toolbarBox = box(toolbar);
  const withTable = Math.abs(toolbarBox.left - tableBox.left) <= 8;
  const contained = tableBox.right <= stageBox.right + 1 && tableBox.left >= stageBox.left - 1;
  const type = tableType(table);
  const pad = cellPad(table);
  const clip = tableClip(table);
  return [
    check(
      "table-density",
      "Table",
      "Deliberate density",
      density,
      density
        ? `Body rows are ${Math.round(rowHeight)}px, a sm or md Carbon row.`
        : `Body rows are ${Math.round(rowHeight)}px. This collection wants 32 or 40.`,
    ),
    check("table-type", "Table", "One type size", type.ok, type.detail),
    check("table-pad", "Table", "16px cell padding", pad.ok, pad.detail),
    check(
      "table-edges",
      "Table",
      "Shared column edges",
      edges,
      edges
        ? "Name starts on one edge. Counts end on one edge."
        : "A header and its cells do not share a reading edge.",
    ),
    check(
      "table-borders",
      "Table",
      "Restrained boundaries",
      boxed === 0,
      boxed === 0 ? "Rows separate on the baseline only." : `${boxed} cells are boxed on three or more sides.`,
    ),
    check(
      "table-toolbar",
      "Table",
      "Toolbar with the table",
      withTable,
      withTable
        ? "The table action shares the table’s start edge."
        : `The action starts ${Math.round(Math.abs(toolbarBox.left - tableBox.left))}px away from the table.`,
    ),
    check(
      "table-long",
      "Table",
      "Long content stays in the table",
      contained,
      contained
        ? "The long statement stays inside the stage."
        : "The long statement pushes the table past the stage.",
    ),
    check("table-clip", "Table", "Long content ellipsizes", clip.ok, clip.detail),
  ];
}

function aligned(table: Element, column: string, edge: "left" | "right") {
  const texts = [...table.querySelectorAll(`[data-release-col="${column}"] [data-release-text]`)];
  if (texts.length < 2) return false;
  const values = texts.map((text) => box(text)[edge]);
  return Math.max(...values) - Math.min(...values) <= 8;
}

function searchChecks(root: HTMLElement): ReleaseCheck[] {
  const search = root.querySelector("[data-release-search]");
  const collection = root.querySelector("[data-release-collection]");
  const input = search?.querySelector("input");
  const icon = search?.querySelector(".cds--search-magnifier-icon");
  const clear = search?.querySelector(".cds--search-close");
  if (!search || !collection || !input || !icon || !clear) {
    return [
      missing("search-height", "Search", "Supported height", "Search"),
      missing("search-rule", "Search", "Fine bottom rule", "Search field"),
      missing("search-shape", "Search", "Quiet field", "Search field"),
      missing("search-glyph", "Search", "16px magnifier", "Magnifier"),
      missing("search-icon", "Search", "Icon and text aligned", "Magnifier"),
      missing("search-room", "Search", "Room for the clear control", "Clear"),
      missing("search-clear", "Search", "Clear control inside the field", "Clear"),
      missing("search-place", "Search", "Aligned to its collection", "Search"),
    ];
  }
  const field = search.querySelector(".cds--search") ?? search;
  const inputBox = box(input);
  const inputStyle = getComputedStyle(input);
  const radius = Number.parseFloat(inputStyle.borderTopLeftRadius) || 0;
  const quiet = radius <= 2 && (inputStyle.boxShadow === "none" || inputStyle.boxShadow === "");
  const heightOk = near(inputBox.height, HEIGHTS, 2);
  const iconBox = box(icon);
  const iconDelta = Math.abs(iconBox.top + iconBox.height / 2 - (inputBox.top + inputBox.height / 2));
  const clearBox = box(clear);
  const fieldBox = box(field);
  const hidden = clear.classList.contains("cds--search-close--hidden");
  const inside = !hidden && clearBox.right <= fieldBox.right + 1 && clearBox.left >= fieldBox.left - 1;
  const place = Math.abs(fieldBox.left - box(collection).left) <= 8;
  const rule = fineRule(inputStyle);
  const glyph = near(iconBox.width, [16], 2) && near(iconBox.height, [16], 2);
  const room = (Number.parseFloat(inputStyle.paddingInlineEnd) || 0) >= 32;
  return [
    check(
      "search-height",
      "Search",
      "Supported height",
      heightOk,
      heightOk
        ? `Field is ${Math.round(inputBox.height)}px, one of 24, 32, 40, or 48.`
        : `Field is ${Math.round(inputBox.height)}px. Supported heights are 24, 32, 40, and 48.`,
    ),
    check("search-rule", "Search", "Fine bottom rule", rule.ok, rule.detail),
    check(
      "search-shape",
      "Search",
      "Quiet field",
      quiet,
      quiet ? "Rectangular field, no drop shadow." : "The field is a pill or it casts a shadow.",
    ),
    check(
      "search-glyph",
      "Search",
      "16px magnifier",
      glyph,
      glyph
        ? `Magnifier is ${Math.round(iconBox.width)}px.`
        : `Magnifier is ${Math.round(iconBox.width)}×${Math.round(iconBox.height)}px. The glyph is 16px.`,
    ),
    check(
      "search-icon",
      "Search",
      "Icon and text aligned",
      iconDelta <= 3,
      iconDelta <= 3
        ? "Magnifier and text share a center line."
        : `Magnifier is ${Math.round(iconDelta)}px off the text center.`,
    ),
    check(
      "search-room",
      "Search",
      "Room for the clear control",
      room,
      room
        ? `The field keeps ${Math.round(Number.parseFloat(inputStyle.paddingInlineEnd))}px after the query.`
        : `Only ${Math.round(Number.parseFloat(inputStyle.paddingInlineEnd) || 0)}px is reserved after the query. The clear control needs 32px or more.`,
    ),
    check(
      "search-clear",
      "Search",
      "Clear control inside the field",
      inside,
      inside ? "Clear sits inside the field, with the query still readable." : "Clear is hidden or it hangs outside the field.",
    ),
    check(
      "search-place",
      "Search",
      "Aligned to its collection",
      place,
      place
        ? "Search shares a start edge with the list it filters."
        : `Search is ${Math.round(Math.abs(fieldBox.left - box(collection).left))}px off the list.`,
    ),
  ];
}

function formChecks(root: HTMLElement): ReleaseCheck[] {
  const form = root.querySelector("[data-release-form]");
  const pair = form?.querySelector("[data-release-pair]");
  const fields = form ? [...form.querySelectorAll("[data-release-field]")] : [];
  if (!form || !pair || fields.length < 2) {
    return [
      missing("form-label", "Form", "Visible labels", "Form"),
      missing("form-anatomy", "Form", "8px label, 4px help", "Fields"),
      missing("form-edge", "Form", "Shared reading edge", "Fields"),
      missing("form-cards", "Form", "No field cards", "Fields"),
      missing("form-gutter", "Form", "32px field gutter", "Field pair"),
      missing("form-stack", "Form", "32px between groups", "Next question"),
      missing("form-action", "Form", "One action after the questions", "Submit"),
    ];
  }
  const labeled = fields.filter((field) => visibleLabel(field)).length === fields.length;
  const edges = fields.every((field) => sharedEdge(field));
  const cards = fields.reduce((count, field) => count + boxedAncestors(field, form), 0);
  const gutter = pairGutter(pair);
  const primaries = form.querySelectorAll(".cds--btn--primary");
  const primary = form.querySelector("[data-release-primary]");
  const lastBottom = Math.max(...fields.map((field) => box(field).bottom));
  const after = Boolean(primary) && box(primary!).top >= lastBottom - 1 && primaries.length === 1;
  const anatomy = formAnatomy(fields);
  const stack = formStack(form, pair);
  return [
    check(
      "form-label",
      "Form",
      "Visible labels",
      labeled,
      labeled ? "Every field has a visible label. Placeholder is not the name." : "A field hides its label and leaves the placeholder to carry the question.",
    ),
    check("form-anatomy", "Form", "8px label, 4px help", anatomy.ok, anatomy.detail),
    check(
      "form-edge",
      "Form",
      "Shared reading edge",
      edges,
      edges ? "Label, input, and help start on one edge." : "Label, input, and help do not share a start edge.",
    ),
    check(
      "form-cards",
      "Form",
      "No field cards",
      cards === 0,
      cards === 0 ? "Spacing groups the questions. Fields are not each in a card." : `${cards} wrappers box a field that Carbon already frames.`,
    ),
    check(
      "form-gutter",
      "Form",
      "32px field gutter",
      gutter.ok,
      gutter.detail,
    ),
    check("form-stack", "Form", "32px between groups", stack.ok, stack.detail),
    check(
      "form-action",
      "Form",
      "One action after the questions",
      after,
      after
        ? "Create project is the only primary, and it follows the fields."
        : primaries.length !== 1
          ? `${primaries.length} primary buttons compete in the form.`
          : "The task action sits above the questions.",
    ),
  ];
}

function hairline(header: Element) {
  const style = getComputedStyle(header);
  const top = Number.parseFloat(style.borderTopWidth) || 0;
  const right = Number.parseFloat(style.borderRightWidth) || 0;
  const bottom = Number.parseFloat(style.borderBottomWidth) || 0;
  const left = Number.parseFloat(style.borderLeftWidth) || 0;
  const ok = Math.abs(bottom - 1) <= 0.5 && top <= 0.5 && right <= 0.5 && left <= 0.5;
  return {
    ok,
    detail: ok
      ? "The shell closes with a 1px bottom rule."
      : `Borders are ${top}/${right}/${bottom}/${left}px. A shell uses a 1px bottom rule and nothing else.`,
  };
}

function headerIdentity(header: Element) {
  const name = header.querySelector(".cds--header__name, .release-miss-name");
  if (!name) return { ok: false, detail: "The shell has no product name." };
  const nameStyle = getComputedStyle(name);
  const weight = Number.parseInt(nameStyle.fontWeight, 10) || 400;
  const namePx = Number.parseFloat(nameStyle.fontSize) || 0;
  const nav = header.querySelector(".cds--header__nav");
  const navVisible = Boolean(nav && box(nav).width > 8 && getComputedStyle(nav).display !== "none");
  if (!navVisible) {
    const menu = header.querySelector(".cds--header__menu-toggle");
    const menuVisible = Boolean(menu && box(menu).width > 8 && getComputedStyle(menu).display !== "none");
    if (!menuVisible) return { ok: false, detail: "Navigation is missing. The name should sit beside it, or a menu button should hold it." };
    const ok = weight >= 600 && namePx >= 13.5;
    return {
      ok,
      detail: ok
        ? `Name is ${Math.round(namePx)}px semibold. Navigation is behind the menu button.`
        : `Name is ${Math.round(namePx)}px at weight ${weight}. The identity is 14px semibold.`,
    };
  }
  const item = nav?.querySelector("a");
  if (!item) return { ok: false, detail: "Navigation is empty." };
  const itemPx = Number.parseFloat(getComputedStyle(item).fontSize) || 0;
  const gap = box(item).left - box(name).right;
  const ok = weight >= 600 && namePx + 0.5 >= itemPx && gap >= 0 && gap <= 32;
  return {
    ok,
    detail: ok
      ? `Name is ${Math.round(namePx)}px semibold, ${Math.round(gap)}px from Releases.`
      : `Name is ${Math.round(namePx)}px at weight ${weight}, ${Math.round(gap)}px from the first nav item.`,
  };
}

function tableType(table: Element) {
  const header = table.querySelector("th [data-release-text]");
  const body = table.querySelector("td [data-release-text]");
  if (!header || !body) return { ok: false, detail: "Table text is missing." };
  const headerPx = Number.parseFloat(getComputedStyle(header).fontSize) || 0;
  const bodyPx = Number.parseFloat(getComputedStyle(body).fontSize) || 0;
  const ok = Math.abs(headerPx - bodyPx) <= 0.5 && near(bodyPx, [14], 1);
  return {
    ok,
    detail: ok
      ? `Header and body are both ${Math.round(bodyPx)}px.`
      : `Header is ${Math.round(headerPx)}px and body is ${Math.round(bodyPx)}px. This table uses 14px for both.`,
  };
}

function cellPad(table: Element) {
  const cell = table.querySelector("tbody td");
  if (!cell) return { ok: false, detail: "A body cell is missing." };
  const pad = Number.parseFloat(getComputedStyle(cell).paddingInlineStart) || 0;
  const ok = Math.abs(pad - 16) <= 2;
  return {
    ok,
    detail: ok ? `Cells inset the text ${Math.round(pad)}px.` : `Cells inset the text ${Math.round(pad)}px. The spacing token is 16px.`,
  };
}

function tableClip(table: Element) {
  const cell = table.querySelector("[data-release-long]");
  if (!cell) return { ok: false, detail: "The long cell is missing." };
  const style = getComputedStyle(cell);
  const ok = style.overflowX === "hidden" && style.textOverflow === "ellipsis";
  return {
    ok,
    detail: ok ? "The long statement ellipsizes inside the cell." : "The long statement is not clipped with an ellipsis.",
  };
}

function fineRule(style: CSSStyleDeclaration) {
  const bottom = Number.parseFloat(style.borderBottomWidth);
  const top = Number.parseFloat(style.borderTopWidth);
  const right = Number.parseFloat(style.borderRightWidth);
  const left = Number.parseFloat(style.borderLeftWidth);
  const ok = Math.abs(bottom - 1) <= 0.5 && top === 0 && right === 0 && left === 0;
  return {
    ok,
    detail: ok
      ? "The field keeps a 1px bottom rule."
      : `Borders are top ${top}px, right ${right}px, bottom ${bottom}px, left ${left}px. A default field uses only a 1px bottom rule.`,
  };
}

function formAnatomy(fields: Element[]) {
  for (const field of fields) {
    const label = field.querySelector("label");
    const input = field.querySelector("input, textarea");
    const help = field.querySelector(".cds--form__helper-text");
    if (!label || !input || !help || !visibleLabel(field)) {
      return { ok: false, detail: "Label, field, and help are not in the 8px / 4px stack." };
    }
    const labelGap = box(input).top - box(label).bottom;
    const helpGap = box(help).top - box(input).bottom;
    const height = box(input).height;
    const ok = Math.abs(labelGap - 8) <= 2 && Math.abs(helpGap - 4) <= 2 && near(height, [32, 40, 48], 2);
    if (!ok) {
      return {
        ok: false,
        detail: `Label gap is ${Math.round(labelGap)}px, help gap is ${Math.round(helpGap)}px, field is ${Math.round(height)}px. Default is 8, 4, and 32, 40, or 48.`,
      };
    }
  }
  return { ok: true, detail: "Label sits 8px above the field. Help sits 4px below. The field is a supported height." };
}

function formStack(form: Element, pair: Element) {
  const next = form.querySelector(":scope > [data-release-field]");
  if (!next) return { ok: false, detail: "The next question is missing." };
  const gap = box(next).top - box(pair).bottom;
  const ok = Math.abs(gap - 32) <= 4;
  return {
    ok,
    detail: ok
      ? `The next question is ${Math.round(gap)}px below the group.`
      : `The next question is ${Math.round(gap)}px below the group. Groups use 32px.`,
  };
}

function visibleLabel(field: Element) {
  const label = field.querySelector("label");
  if (!label) return false;
  if (label.classList.contains("cds--visually-hidden") || label.closest(".cds--visually-hidden")) return false;
  const style = getComputedStyle(label);
  const rect = box(label);
  return style.visibility !== "hidden" && rect.width > 8 && rect.height > 8;
}

function sharedEdge(field: Element) {
  const label = field.querySelector("label");
  const input = field.querySelector("input, textarea");
  const help = field.querySelector(".cds--form__helper-text");
  if (!label || !input || !help || !visibleLabel(field)) return false;
  const edges = [box(label).left, box(input).left, box(help).left];
  return Math.max(...edges) - Math.min(...edges) <= 8;
}

function boxedAncestors(field: Element, form: Element) {
  let count = 0;
  let node: Element | null = field;
  while (node && node !== form) {
    const style = getComputedStyle(node);
    const sides = [style.borderTopWidth, style.borderRightWidth, style.borderBottomWidth, style.borderLeftWidth].map((value) => Number.parseFloat(value) || 0);
    if (sides.every((side) => side >= 1)) count += 1;
    node = node.parentElement;
  }
  return count;
}

function pairGutter(pair: Element) {
  const fields = [...pair.querySelectorAll(":scope > [data-release-field]")];
  if (fields.length < 2) return { ok: false, detail: "The related pair is missing." };
  const first = box(fields[0]);
  const second = box(fields[1]);
  const stacked = second.top >= first.bottom - 1;
  const gap = stacked ? second.top - first.bottom : second.left - first.right;
  const ok = Math.abs(gap - 32) <= 4;
  const axis = stacked ? "vertical" : "horizontal";
  return {
    ok,
    detail: ok
      ? `Related fields keep a ${Math.round(gap)}px ${axis} gutter, the guideline rather than the 16px demo.`
      : `Related fields are ${Math.round(gap)}px apart. Authored default forms use 32px, not the measured demo pair.`,
  };
}
