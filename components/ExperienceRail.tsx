"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ExperienceRail() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 24,
    mass: 0.35,
  });

  return (
    <aside className="experience-rail" aria-hidden="true">
      <span>00</span>
      <div className="experience-rail__track">
        <motion.i style={{ scaleY: progress }} />
      </div>
      <span>END</span>
    </aside>
  );
}
