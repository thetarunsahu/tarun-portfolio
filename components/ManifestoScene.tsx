"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function ManifestoScene() {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const lineOneX = useTransform(scrollYProgress, [0.18, 0.5, 0.82], ["-10%", "0%", "5%"]);
  const lineTwoX = useTransform(scrollYProgress, [0.18, 0.5, 0.82], ["14%", "0%", "-8%"]);
  const italicY = useTransform(scrollYProgress, [0.28, 0.58, 0.86], [70, 0, -34]);
  const italicScale = useTransform(scrollYProgress, [0.28, 0.58, 0.86], [0.82, 1, 1.06]);
  const opacity = useTransform(scrollYProgress, [0.08, 0.28, 0.85, 0.98], [0.22, 1, 1, 0.45]);

  return (
    <section ref={ref} className="manifesto-section manifesto-section-v2 manifesto-scene" id="manifesto">
      <div className="manifesto-index">
        <span>001</span>
        <span>MANIFESTO</span>
      </div>

      <motion.div className="manifesto-copy manifesto-scene__copy" style={reducedMotion ? undefined : { opacity }}>
        <p>I&apos;M INTERESTED IN THE POINT WHERE</p>
        <h2 aria-label="Software stops being just software">
          <motion.span style={reducedMotion ? undefined : { x: lineOneX }}>SOFTWARE STOPS</motion.span>
          <motion.span style={reducedMotion ? undefined : { x: lineTwoX }}>BEING</motion.span>
          <motion.em style={reducedMotion ? undefined : { y: italicY, scale: italicScale }}>just software.</motion.em>
        </h2>

        <div className="manifesto-scene__signal">
          <span>CODE</span><i />
          <span>INTELLIGENCE</span><i />
          <span>HARDWARE</span><i />
          <span>SYSTEMS</span>
        </div>
      </motion.div>
    </section>
  );
}
