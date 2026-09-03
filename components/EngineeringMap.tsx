"use client";

import { useState } from "react";

const domains = [
  { key: "software", label: "SOFTWARE", note: "Backend · APIs · Databases", items: ["JAVA", "BACKEND", "APIs", "SQL", "GIT"] },
  { key: "ai", label: "AI", note: "Vision · Agents · LLM systems", items: ["VISION", "AGENTS", "LLMs", "PYTHON"] },
  { key: "hardware", label: "HARDWARE", note: "ESP32 · Sensors · Embedded", items: ["ESP32", "IoT", "SENSORS", "EMBEDDED"] },
] as const;

export function EngineeringMap() {
  const [active, setActive] = useState<(typeof domains)[number]["key"]>("software");
  const current = domains.find((domain) => domain.key === active) ?? domains[0];

  return (
    <div className="engineering-map" data-cursor="EXPLORE">
      <div className="engineering-map__canvas">
        <svg className="engineering-map__lines" viewBox="0 0 100 100" aria-hidden="true">
          <line x1="50" y1="50" x2="17" y2="23" />
          <line x1="50" y1="50" x2="84" y2="25" />
          <line x1="50" y1="50" x2="50" y2="84" />
        </svg>

        <div className="engineering-map__core">
          <small>SYSTEM</small>
          <strong>TS</strong>
          <span>BUILDER</span>
        </div>

        {domains.map((domain, index) => (
          <button
            key={domain.key}
            type="button"
            className={`engineering-map__domain engineering-map__domain--${index + 1} ${active === domain.key ? "is-active" : ""}`}
            onMouseEnter={() => setActive(domain.key)}
            onFocus={() => setActive(domain.key)}
            onClick={() => setActive(domain.key)}
          >
            <span>{domain.label}</span>
            <small>{domain.note}</small>
          </button>
        ))}
      </div>

      <div className="engineering-map__readout" aria-live="polite">
        <div>
          <span>ACTIVE DOMAIN</span>
          <strong>{current.label}</strong>
        </div>
        <div className="engineering-map__skills">
          {current.items.map((item) => <span key={item}>{item}</span>)}
        </div>
      </div>
    </div>
  );
}
