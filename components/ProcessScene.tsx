"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MediaFrame } from "@/components/MediaFrame";

const phases = ["IDEA", "ARCHITECTURE", "PROTOTYPE", "ITERATION"];

export function ProcessScene() {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const mediaY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const wordX = useTransform(scrollYProgress, [0.15, 0.85], ["-7%", "5%"]);
  const italicX = useTransform(scrollYProgress, [0.15, 0.85], ["8%", "-6%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.82, 1], [0.4, 1, 1, 0.45]);

  return (
    <section ref={ref} className="process-scene" id="process">
      <div className="process-scene__media-wrap">
        <motion.div style={reducedMotion ? undefined : { y: mediaY }}>
          <MediaFrame
            src="/media/tarun-crosswalk.webp"
            index="FRAME 02"
            label="PROCESS / IN MOTION"
            caption="A project is rarely finished in one move. It keeps changing as the system becomes real."
            className="media-frame--motion"
            cursor="LOOK"
          />
        </motion.div>
      </div>

      <motion.div className="process-scene__copy" style={reducedMotion ? undefined : { opacity }}>
        <span>004 / PROCESS</span>
        <h2>
          <motion.strong style={reducedMotion ? undefined : { x: wordX }}>STILL</motion.strong>
          <motion.em style={reducedMotion ? undefined : { x: italicX }}>building.</motion.em>
        </h2>
        <p>
          The work here is not a museum of finished objects. It is a record of ideas becoming architecture, prototypes and better questions.
        </p>
      </motion.div>

      <div className="process-scene__phases">
        {phases.map((phase, index) => (
          <div key={phase}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{phase}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}
