"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const items = [
  { number: "01", title: "MOTION CONTROLLER", meta: "WEARABLE / IMU / ESP32", note: "Using movement itself as an input surface." },
  { number: "02", title: "PLAY WITH YOUR MIND", meta: "COMPUTER VISION", note: "A small experiment in camera-driven interaction." },
  { number: "03", title: "RAMADAN PEN", meta: "MOTION INTERACTION", note: "A playful study in gesture, object and response." },
  { number: "04", title: "EMBEDDED LAB", meta: "ESP32 / SENSORS", note: "Tiny hardware tests used to understand bigger systems." },
] as const;

export function LabScene() {
  const [active, setActive] = useState(0);
  const current = items[active];

  return (
    <section className="lab-scene" id="lab">
      <div className="lab-scene__head">
        <div>
          <span>006 / THE LAB</span>
          <h2>
            SMALL IDEAS.
            <em>STRANGE TESTS.</em>
          </h2>
        </div>
        <p>Not everything needs to become a product. Some things are built just to understand what happens.</p>
      </div>

      <div className="lab-scene__grid">
        <div className="lab-scene__ledger" role="list">
          {items.map((item, index) => (
            <button
              type="button"
              key={item.number}
              className={active === index ? "is-active" : ""}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              onClick={() => setActive(index)}
              data-cursor="EXPLORE"
            >
              <span>{item.number}</span>
              <strong>{item.title}</strong>
              <small>{item.meta}</small>
              <i>↗</i>
            </button>
          ))}
        </div>

        <div className="lab-scene__preview" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.number}
              className="lab-scene__preview-card"
              initial={{ opacity: 0, rotate: -2, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, rotate: 0, scale: 1, y: 0 }}
              exit={{ opacity: 0, rotate: 2, scale: 1.03, y: -16 }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="lab-scene__preview-no">{current.number}</div>
              <div className="lab-scene__preview-lines" aria-hidden="true"><i /><i /><i /><i /></div>
              <div className="lab-scene__preview-copy">
                <span>EXPERIMENT / {current.meta}</span>
                <h3>{current.title}</h3>
                <p>{current.note}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <a className="lab-scene__link" href="/lab" data-cursor="OPEN">OPEN THE FULL LAB ↗</a>
    </section>
  );
}
