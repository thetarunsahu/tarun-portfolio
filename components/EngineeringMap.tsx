"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const domains = [
  { number: "01", title: "CODE", note: "Languages used to build", items: ["Java", "C++", "Python", "SQL"] },
  { number: "02", title: "SYSTEMS", note: "Software beneath the interface", items: ["Backend", "APIs", "Databases", "Git", "Linux"] },
  { number: "03", title: "AI", note: "Intelligence applied to systems", items: ["Computer Vision", "LLMs", "AI Agents"] },
  { number: "04", title: "MACHINES", note: "Software leaving the screen", items: ["ESP32", "IoT", "Sensors", "Embedded"] },
  { number: "05", title: "INTERACTION", note: "Ways humans steer the system", items: ["Motion Control", "Camera Interfaces", "Web Experiments"] },
  { number: "06", title: "EXPERIMENTS", note: "Ideas allowed to stay strange", items: ["JARVIS OS", "Motion Controller", "Ramadan Pen", "Play With Your Mind"] },
] as const;

export function EngineeringMap() {
  const [active, setActive] = useState(1);
  const current = domains[active];

  return (
    <div className="tarun-protocol" data-cursor="EXPLORE">
      <div className="tarun-protocol__topline">
        <span>THE TARUN PROTOCOL / 2026</span>
        <span>NOT A SKILL CHART. A WORKING MAP.</span>
      </div>

      <div className="tarun-protocol__body">
        <div className="tarun-protocol__manifest">
          <span>WHO IS TARUN?</span>
          <h3>
            NOT ONE
            <em>discipline.</em>
          </h3>
          <p>
            Code becomes systems. Systems gain intelligence. Intelligence reaches machines. Experiments connect the layers.
          </p>
        </div>

        <div className="tarun-protocol__domains" role="tablist" aria-label="Tarun capability domains">
          {domains.map((domain, index) => (
            <button
              key={domain.number}
              type="button"
              role="tab"
              aria-selected={active === index}
              className={`tarun-protocol__domain ${active === index ? "is-active" : ""}`}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              onClick={() => setActive(index)}
            >
              <span>{domain.number}</span>
              <strong>{domain.title}</strong>
              <small>{domain.note}</small>
              <i aria-hidden="true">↗</i>
            </button>
          ))}
        </div>

        <div className="tarun-protocol__readout" aria-live="polite">
          <div className="tarun-protocol__readout-head">
            <span>{current.number} / ACTIVE LAYER</span>
            <span>INSPECT</span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.title}
              className="tarun-protocol__readout-content"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
            >
              <strong>{current.title}</strong>
              <p>{current.note}</p>
              <div>
                {current.items.map((item, index) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.045, duration: 0.3 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="tarun-protocol__ticker" aria-hidden="true">
        <span>SOFTWARE</span><i>×</i><span>INTELLIGENCE</span><i>×</i><span>MACHINES</span><i>×</i><span>EXPERIMENTS</span>
      </div>
    </div>
  );
}
