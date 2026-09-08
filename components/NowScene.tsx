"use client";

import { motion, useReducedMotion } from "framer-motion";
import { now } from "@/data/portfolio";

export function NowScene() {
  const reducedMotion = useReducedMotion();
  const ticker = ["BUILDING", "LEARNING", "RESEARCHING", "EXPERIMENTING", "ITERATING", "BUILDING"];

  return (
    <section className="now-scene" id="now">
      <div className="now-scene__top">
        <span>005 / NOW</span>
        <span>{now.label}</span>
      </div>

      <div className="now-scene__ticker" aria-hidden="true">
        <motion.div
          animate={reducedMotion ? undefined : { x: ["0%", "-50%"] }}
          transition={reducedMotion ? undefined : { duration: 18, ease: "linear", repeat: Infinity }}
        >
          {[...ticker, ...ticker].map((item, index) => (
            <span key={`${item}-${index}`}>{item}<i>•</i></span>
          ))}
        </motion.div>
      </div>

      <div className="now-scene__ledger">
        {now.items.map(([label, value], index) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, x: index % 2 === 0 ? -26 : 26 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.55, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <span>{label}</span>
            <strong>{value}</strong>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
