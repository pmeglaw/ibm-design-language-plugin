import { useEffect, useRef, useState } from "react";
import { Button, Tag, Theme } from "@carbon/react";
import { judgeRelease, type ReleaseCheck } from "./checks";
import { Candidate, type ReleasePattern, type ReleaseTheme } from "./candidate";

const ORDER = [
  "header-compact",
  "header-rule",
  "header-full",
  "header-identity",
  "header-utilities",
  "header-action",
  "table-density",
  "table-type",
  "table-pad",
  "table-edges",
  "table-borders",
  "table-toolbar",
  "table-long",
  "table-clip",
  "search-height",
  "search-rule",
  "search-shape",
  "search-glyph",
  "search-icon",
  "search-room",
  "search-clear",
  "search-place",
  "form-label",
  "form-anatomy",
  "form-edge",
  "form-cards",
  "form-gutter",
  "form-stack",
  "form-action",
] as const;

function loadLocalPlex() {
  const faces = [
    new FontFace("IBM Plex Sans", "url(/fonts/IBMPlexSans-Regular.woff2)", { weight: "400", style: "normal" }),
    new FontFace("IBM Plex Sans", "url(/fonts/IBMPlexSans-SemiBold.woff2)", { weight: "600", style: "normal" }),
    new FontFace("IBM Plex Mono", "url(/fonts/IBMPlexMono-Regular.woff2)", { weight: "400", style: "normal" }),
  ];
  for (const face of faces) {
    face.load().then((loaded) => document.fonts.add(loaded)).catch(() => undefined);
  }
}

export function Desk() {
  const [pattern, setPattern] = useState<ReleasePattern>("corrected");
  const [theme, setTheme] = useState<ReleaseTheme>("white");
  const [checks, setChecks] = useState<ReleaseCheck[] | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadLocalPlex();
  }, []);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;
    let cancel = false;
    let timer = 0;
    const run = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        if (!cancel) setChecks(judgeRelease(node));
      }, 80);
    };
    setChecks(null);
    run();
    const observer = new ResizeObserver(run);
    observer.observe(node);
    return () => {
      cancel = true;
      observer.disconnect();
      window.clearTimeout(timer);
    };
  }, [pattern, theme]);

  const passed = checks?.filter((item) => item.verdict === "pass").length ?? 0;
  const total = ORDER.length;
  const verdict = checks ? (passed === total ? "pass" : "fail") : "pending";
  const groups = ["Header", "Table", "Search", "Form"] as const;

  return (
    <Theme theme="g10" className="gate-app">
      <header className="gate-mast">
        <p className="gate-kicker">Carbon React 1.117.0 · release</p>
        <h1>Release fixture</h1>
        <p className="gate-lede">
          Header, table, search, and form, measured down to the rule, the glyph, and the label gap. A release passes only when every check passes. The form gutter is the 32px guideline, not the 16px story measurement.
        </p>
        <div className="gate-choices" aria-label="Candidate">
          <Button kind={pattern === "corrected" ? "secondary" : "ghost"} size="sm" onClick={() => setPattern("corrected")}>
            Corrected
          </Button>
          <Button kind={pattern === "miss" ? "secondary" : "ghost"} size="sm" onClick={() => setPattern("miss")}>
            Missed
          </Button>
        </div>
        <div className="gate-choices" aria-label="Theme">
          <Button kind={theme === "white" ? "secondary" : "ghost"} size="sm" onClick={() => setTheme("white")}>
            White
          </Button>
          <Button kind={theme === "g100" ? "secondary" : "ghost"} size="sm" onClick={() => setTheme("g100")}>
            Gray 100
          </Button>
        </div>
      </header>
      <div className="release-layout">
        <div ref={rootRef} data-release-root={pattern}>
          <Candidate key={`${pattern}-${theme}`} pattern={pattern} theme={theme} />
        </div>
        <section className="gate-panel" aria-label="Release meter" aria-busy={checks === null}>
          <h2>Release meter</h2>
          <p className="gate-summary" data-release-summary data-release-verdict={verdict}>
            {checks ? `${pattern === "corrected" ? "Corrected" : "Missed"} ${passed} of ${total}.` : "Reading the candidate…"}
          </p>
          {groups.map((group) => (
            <div key={group} className="release-group">
              <h3>{group}</h3>
              <ol className="gate-results">
                {ORDER.filter((id) => (checks ?? []).find((item) => item.id === id)?.group === group || (!checks && groupFor(id) === group)).map((id) => {
                  const item = checks?.find((check) => check.id === id);
                  return (
                    <li key={id} className="gate-result" data-check={id} data-verdict={item?.verdict ?? "pending"}>
                      <Tag size="sm" type={!item ? "gray" : item.verdict === "pass" ? "green" : "red"}>
                        {!item ? "Run" : item.verdict === "pass" ? "Pass" : "Fail"}
                      </Tag>
                      <div>
                        <strong>{item?.title ?? id}</strong>
                        <p>{item?.detail ?? "Not read yet."}</p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          ))}
        </section>
      </div>
      <footer className="gate-foot">
        <p>The meter reads geometry. It does not ask a model, and it does not certify keyboard behavior or a screen reader.</p>
      </footer>
    </Theme>
  );
}

function groupFor(id: string): ReleaseCheck["group"] {
  if (id.startsWith("header")) return "Header";
  if (id.startsWith("table")) return "Table";
  if (id.startsWith("search")) return "Search";
  return "Form";
}
