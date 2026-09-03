"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const clues = [
  ["01", "NOT ONE ROLE."],
  ["02", "CODE → SYSTEMS"],
  ["03", "AI → MACHINES"],
  ["04", "IDEAS → PROTOTYPES"],
  ["05", "STILL BECOMING."],
] as const;

export function HeroIdentity() {
  const reducedMotion = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reducedMotion) return;
    const timer = window.setInterval(() => {
      setActive((value) => (value + 1) % clues.length);
    }, 1800);
    return () => window.clearInterval(timer);
  }, [reducedMotion]);

  return (
    <div className="hero-identity" aria-label="Identity clues">
      <div className="hero-identity__topline">
        <span>WHO IS TARUN?</span>
        <span>IDENTITY / UNRESOLVED</span>
      </div>

      <div className="hero-identity__answer">
        <span>{clues[active][0]}</span>
        <AnimatePresence mode="wait">
          <motion.strong
            key={clues[active][1]}
            initial={reducedMotion ? false : { opacity: 0, y: 12, filter: "blur(7px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={reducedMotion ? undefined : { opacity: 0, y: -12, filter: "blur(7px)" }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          >
            {clues[active][1]}
          </motion.strong>
        </AnimatePresence>
      </div>

      <div className="hero-identity__rail" aria-hidden="true">
        {clues.map((clue, index) => (
          <i key={clue[0]} className={active === index ? "is-active" : ""} />
        ))}
      </div>
    </div>
  );
}
