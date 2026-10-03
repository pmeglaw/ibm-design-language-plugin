export function activeMatches(selector: string): boolean {
  const el = document.querySelector(selector);
  return !!el && document.activeElement === el;
}

export function attr(selector: string, name: string): string | null {
  return document.querySelector(selector)?.getAttribute(name) ?? null;
}

export function valueOf(selector: string): string {
  const el = document.querySelector(selector);
  return el instanceof HTMLInputElement ? el.value : "";
}

export function visible(selector: string): boolean {
  const el = document.querySelector<HTMLElement>(selector);
  if (!el || el.hidden) return false;
  const style = getComputedStyle(el);
  if (style.display === "none" || style.visibility === "hidden") return false;
  const rect = el.getBoundingClientRect();
  return rect.width > 1 && rect.height > 1;
}

export function longEndVisible(): boolean {
  const scroller = document.querySelector<HTMLElement>("[data-behavior-scroll]");
  const text = document.querySelector<HTMLElement>("[data-behavior-long]");
  if (!scroller || !text || !scroller.contains(text)) return false;
  const box = scroller.getBoundingClientRect();
  const end = text.getBoundingClientRect();
  return end.right <= box.right + 2 && end.right >= box.left + 1;
}

export function fieldLabeled(): boolean {
  const input = document.querySelector<HTMLInputElement>("[data-behavior-field]");
  if (!input) return false;
  const labels = input.labels ? Array.from(input.labels) : [];
  return labels.some((label) => /Project name/.test(label.textContent || ""));
}

export function operableOutside(): string[] {
  const root = document.querySelector<HTMLElement>("[data-behavior-root]");
  if (!root) return ["The candidate is missing."];
  const box = root.getBoundingClientRect();
  const offenders: string[] = [];
  for (const el of root.querySelectorAll<HTMLElement>("button, a[href], input, textarea, select, [tabindex='0']")) {
    const style = getComputedStyle(el);
    if (style.display === "none" || style.visibility === "hidden" || el.hidden) continue;
    const rect = el.getBoundingClientRect();
    if (rect.width < 1 || rect.height < 1) continue;
    const outside = rect.left < box.left - 1 || rect.right > box.right + 1;
    if (!outside) continue;
    const name = el.getAttribute("aria-label") || el.innerText.trim().replace(/\s+/g, " ").slice(0, 40) || el.tagName.toLowerCase();
    offenders.push(name);
    if (offenders.length >= 4) break;
  }
  return offenders;
}

export function rootLang(): string {
  return document.querySelector("[data-behavior-root]")?.getAttribute("lang") ?? "";
}

export function rootDir(): string {
  return document.querySelector("[data-behavior-root]")?.getAttribute("dir") ?? "";
}

export function rootWidth(): number {
  const root = document.querySelector<HTMLElement>("[data-behavior-root]");
  return root ? Math.round(root.getBoundingClientRect().width) : 0;
}

export function englishCopy(): boolean {
  return /October release/.test(document.querySelector("[data-behavior-root]")?.textContent || "");
}

declare global {
  interface Window {
    __behavior: {
      activeMatches: typeof activeMatches;
      attr: typeof attr;
      valueOf: typeof valueOf;
      visible: typeof visible;
      longEndVisible: typeof longEndVisible;
      fieldLabeled: typeof fieldLabeled;
      operableOutside: typeof operableOutside;
      rootLang: typeof rootLang;
      rootDir: typeof rootDir;
      rootWidth: typeof rootWidth;
      englishCopy: typeof englishCopy;
    };
  }
}

export function installBehaviorDom() {
  window.__behavior = {
    activeMatches,
    attr,
    valueOf,
    visible,
    longEndVisible,
    fieldLabeled,
    operableOutside,
    rootLang,
    rootDir,
    rootWidth,
    englishCopy,
  };
}
