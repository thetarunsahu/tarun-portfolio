"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const bootLines = [
  ["CORE", "ONLINE"],
  ["WORK", "04 SYSTEMS"],
  ["LAB", "READY"],
];

export function IntroLoader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hasBooted = sessionStorage.getItem("tarun-portfolio-booted");

    if (hasBooted) return;

    setVisible(true);
    const timer = window.setTimeout(() => {
      sessionStorage.setItem("tarun-portfolio-booted", "true");
      setVisible(false);
    }, 1550);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="intro-loader"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.72, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="intro-loader__top">
            <span className="intro-loader__mark">T/26</span>
            <span>PERSONAL SYSTEM</span>
          </div>

          <div className="intro-loader__center">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              INITIALIZING
            </motion.p>

            <div className="intro-loader__status">
              {bootLines.map(([label, value], index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.14 }}
                >
                  <span>{label}</span>
                  <span>{value}</span>
                </motion.div>
              ))}
            </div>

            <div className="intro-loader__progress" aria-hidden="true">
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>

          <motion.div
            className="intro-loader__bottom"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.08, duration: 0.25 }}
          >
            <span className="status-pulse" />
            SYSTEM ONLINE
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
