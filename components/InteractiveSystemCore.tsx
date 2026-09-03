"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import type { PointerEvent } from "react";
import { HeroIdentity } from "@/components/HeroIdentity";

const nodes = [
  ["AI", 50, 12],
  ["MEMORY", 83, 30],
  ["TOOLS", 88, 67],
  ["ROBOTICS", 59, 87],
  ["IOT", 20, 76],
  ["BACKEND", 11, 38],
  ["VISION", 31, 19],
] as const;

export function InteractiveSystemCore() {
  const reducedMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 120, damping: 18, mass: 0.55 });
  const springY = useSpring(pointerY, { stiffness: 120, damping: 18, mass: 0.55 });
  const rotateY = useTransform(springX, [-1, 1], [-10, 10]);
  const rotateX = useTransform(springY, [-1, 1], [9, -9]);
  const driftX = useTransform(springX, [-1, 1], [-13, 13]);
  const driftY = useTransform(springY, [-1, 1], [-10, 10]);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (reducedMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - rect.left) / rect.width - 0.5) * 2);
    pointerY.set(((event.clientY - rect.top) / rect.height - 0.5) * 2);
  }

  function resetPointer() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <div className="system-core-shell">
      <motion.div
        className="system-core-v3"
        data-cursor="EXPLORE"
        onPointerMove={handlePointerMove}
        onPointerLeave={resetPointer}
        initial={{ opacity: 0, scale: 0.86 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.28, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={reducedMotion ? undefined : { rotateX, rotateY }}
        aria-label="Interactive system map connecting AI, memory, tools, backend, robotics and IoT"
      >
        <div className="system-core-v3__grid" aria-hidden="true" />
        <div className="system-core-v3__halo system-core-v3__halo--outer" aria-hidden="true" />
        <div className="system-core-v3__halo system-core-v3__halo--inner" aria-hidden="true" />

        <svg className="system-core-v3__links" viewBox="0 0 100 100" aria-hidden="true">
          {nodes.map(([label, x, y]) => (
            <line key={label} x1="50" y1="50" x2={x} y2={y} />
          ))}
          <path d="M31 19 C48 4 72 12 83 30" />
          <path d="M83 30 C97 43 99 58 88 67" />
          <path d="M88 67 C77 88 67 91 59 87" />
          <path d="M20 76 C7 62 5 49 11 38" />
        </svg>

        <motion.div
          className="system-core-v3__engine"
          style={reducedMotion ? undefined : { x: driftX, y: driftY }}
        >
          <span>PERSONAL SYSTEM</span>
          <strong>TS</strong>
          <small>CORE ONLINE</small>
        </motion.div>

        {nodes.map(([label, x, y], index) => (
          <motion.div
            className={`system-core-v3__node system-core-v3__node--${index + 1}`}
            key={label}
            style={{ left: `${x}%`, top: `${y}%` }}
            animate={reducedMotion ? undefined : { scale: [1, 1.16, 1] }}
            transition={{ duration: 2.8 + index * 0.22, repeat: Infinity, delay: index * 0.15 }}
          >
            <i />
            <span>{label}</span>
          </motion.div>
        ))}

        <div className="system-core-v3__readout system-core-v3__readout--top">
          <span>SYSTEM MAP / 01</span>
          <span>07 NODES</span>
        </div>
        <div className="system-core-v3__readout system-core-v3__readout--bottom">
          <span>MOVE TO EXPLORE</span>
          <span>LIVE MODEL</span>
        </div>
      </motion.div>

      <HeroIdentity />
    </div>
  );
}
