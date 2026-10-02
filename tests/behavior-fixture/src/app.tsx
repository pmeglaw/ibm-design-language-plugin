import { useEffect, useState } from "react";
import { Candidate, type BehaviorDirection, type BehaviorPattern, type BehaviorTheme } from "./candidate";
import { installBehaviorDom } from "./dom";

export function App() {
  const [pattern, setPattern] = useState<BehaviorPattern>("corrected");
  const [theme, setTheme] = useState<BehaviorTheme>("white");
  const [frame, setFrame] = useState(960);
  const [direction, setDirection] = useState<BehaviorDirection>("ltr");

  useEffect(() => {
    installBehaviorDom();
  }, []);

  return (
    <main>
      <div className="behavior-controls">
        <button type="button" onClick={() => setPattern("corrected")}>Corrected</button>
        <button type="button" onClick={() => setPattern("miss")}>Missed</button>
        <button type="button" onClick={() => setTheme("white")}>White</button>
        <button type="button" onClick={() => setTheme("g100")}>Gray 100</button>
        <button type="button" onClick={() => setFrame(960)}>Wide</button>
        <button type="button" onClick={() => setFrame(320)}>320</button>
        <button type="button" onClick={() => setDirection("ltr")}>Left to right</button>
        <button type="button" onClick={() => setDirection("rtl")}>Right to left</button>
      </div>
      <div className="behavior-frame" style={{ ["--frame" as string]: `${frame}px` }}>
        <Candidate key={`${pattern}-${theme}-${direction}`} pattern={pattern} theme={theme} direction={direction} />
      </div>
    </main>
  );
}
