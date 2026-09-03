"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { stackGroups } from "@/data/portfolio";

const positions = [
  { left: "8%", top: "18%" },
  { left: "70%", top: "14%" },
  { left: "72%", top: "67%" },
  { left: "7%", top: "70%" },
];

export function EngineeringMap() {
  const [active, setActive] = useState(1);
  const current = stackGroups[active];

  return (
    <div className="engineering-map" data-cursor="EXPLORE">
      <div className="engineering-map__topline">
        <span>SYSTEM / CAPABILITY MAP</span>
        <span>HOVER OR TAP A DOMAIN</span>
      </div>

      <div className="engineering-map__canvas">
        <svg className="engineering-map__lines" viewBox="0 0 100 100" aria-hidden="true">
          <line x1="50" y1="50" x2="21" y2="28" />
          <line x1="50" y1="50" x2="76" y2="25" />
          <line x1="50" y1="50" x2="78" y2="75" />
          <line x1="50" y1="50" x2="20" y2="77" />
          <circle cx="50" cy="50" r="34" />
        </svg>

        <motion.div
          className="engineering-map__core"
          animate={{ scale: [1, 1.025, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <small>BUILDER</small>
          <strong>TS</strong>
          <span>SOFTWARE × AI × HARDWARE</span>
        </motion.div>

        {stackGroups.map((group, index) => (
          <button
            key={group.number}
            type="button"
            className={`engineering-map__domain ${active === index ? "is-active" : ""}`}
            style={positions[index]}
            onMouseEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
            onClick={() => setActive(index)}
          >
            <span>{group.number}</span>
            <strong>{group.title}</strong>
            <i aria-hidden="true" />
          </button>
        ))}

        <AnimatePresence mode="wait">
          <motion.div
            className="engineering-map__readout"
            key={current.number}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.26 }}
            aria-live="polite"
          >
            <div>
              <span>{current.number} / DOMAIN</span>
              <strong>{current.title}</strong>
            </div>
            <div className="engineering-map__skills">
              {current.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
