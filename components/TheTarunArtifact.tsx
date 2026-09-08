"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import type { PointerEvent } from "react";

const clues = ["CODE", "INTELLIGENCE", "MACHINES", "EXPERIMENTS"];

export function TheTarunArtifact() {
  const reducedMotion = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 110, damping: 20, mass: 0.55 });
  const sy = useSpring(my, { stiffness: 110, damping: 20, mass: 0.55 });
  const rotateY = useTransform(sx, [-1, 1], [-5, 5]);
  const rotateX = useTransform(sy, [-1, 1], [4, -4]);
  const sliceX = useTransform(sx, [-1, 1], [-12, 12]);
  const orbitX = useTransform(sx, [-1, 1], [10, -10]);
  const orbitY = useTransform(sy, [-1, 1], [8, -8]);

  function onMove(event: PointerEvent<HTMLDivElement>) {
    if (reducedMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    mx.set(((event.clientX - rect.left) / rect.width - 0.5) * 2);
    my.set(((event.clientY - rect.top) / rect.height - 0.5) * 2);
  }

  function reset() {
    mx.set(0);
    my.set(0);
  }

  return (
    <motion.div
      className="tarun-artifact"
      data-cursor="EXPLORE"
      onPointerMove={onMove}
      onPointerLeave={reset}
      style={reducedMotion ? undefined : { rotateX, rotateY }}
      initial={{ opacity: 0, scale: 0.94, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.28, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      aria-label="Portrait of Tarun presented as an interactive identity artifact"
    >
      <div className="tarun-artifact__frame">
        <div className="tarun-artifact__portrait" aria-hidden="true" />

        <motion.div
          className="tarun-artifact__slice tarun-artifact__slice--a"
          style={reducedMotion ? undefined : { x: sliceX }}
          aria-hidden="true"
        />
        <motion.div
          className="tarun-artifact__slice tarun-artifact__slice--b"
          style={reducedMotion ? undefined : { x: orbitX }}
          aria-hidden="true"
        />
        <motion.div
          className="tarun-artifact__orbit"
          style={reducedMotion ? undefined : { x: orbitX, y: orbitY }}
          aria-hidden="true"
        >
          <i />
          <i />
          <i />
        </motion.div>

        <div className="tarun-artifact__scan" aria-hidden="true" />
        <div className="tarun-artifact__corner tarun-artifact__corner--tl" aria-hidden="true" />
        <div className="tarun-artifact__corner tarun-artifact__corner--br" aria-hidden="true" />

        <div className="tarun-artifact__meta tarun-artifact__meta--top">
          <span>ENTITY / TS-01</span>
          <span>IDENTITY / UNRESOLVED</span>
        </div>

        <div className="tarun-artifact__question">
          <span>WHO IS TARUN?</span>
          <strong>NOT ONE ROLE.</strong>
        </div>

        <div className="tarun-artifact__clues" aria-label="Identity clues">
          {clues.map((clue, index) => (
            <span key={clue}>
              <i>{String(index + 1).padStart(2, "0")}</i>
              {clue}
            </span>
          ))}
        </div>

        <div className="tarun-artifact__meta tarun-artifact__meta--bottom">
          <span>HUMAN / SYSTEM BUILDER</span>
          <span>STILL BECOMING</span>
        </div>
      </div>
    </motion.div>
  );
}
