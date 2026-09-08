"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";
import { InteractiveSystemCore } from "@/components/InteractiveSystemCore";
import { profile } from "@/data/portfolio";

export function HeroScene() {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const titleY = useTransform(scrollYProgress, [0, 0.72, 1], [0, -26, -74]);
  const titleScale = useTransform(scrollYProgress, [0, 0.72, 1], [1, 0.98, 0.92]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.84, 1], [1, 1, 0]);
  const coreScale = useTransform(scrollYProgress, [0, 0.68, 1], [1, 1.04, 0.82]);
  const coreX = useTransform(scrollYProgress, [0, 1], [0, 44]);
  const footerOpacity = useTransform(scrollYProgress, [0, 0.35, 0.72], [1, 1, 0]);
  const gridOpacity = useTransform(scrollYProgress, [0, 1], [0.34, 0.08]);

  return (
    <section ref={ref} className="home-hero" id="top">
      <div className="home-hero__sticky">
        <motion.div
          className="hero-grid-lines"
          aria-hidden="true"
          style={reducedMotion ? undefined : { opacity: gridOpacity }}
        />
        <div className="hero-v3__signal" aria-hidden="true">SYSTEM / 2026</div>

        <div className="hero-topline">
          <span>PORTFOLIO / 2026</span>
          <span>SOFTWARE · AI · SYSTEMS</span>
          <span>{profile.location}</span>
        </div>

        <div className="home-hero__stage">
          <motion.div
            className="home-hero__copy"
            style={reducedMotion ? undefined : { y: titleY, scale: titleScale, opacity: titleOpacity }}
          >
            <motion.p
              className="eyebrow"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.55 }}
            >
              {profile.role}
            </motion.p>

            <h1 className="hero-title hero-title-v2" aria-label={profile.name}>
              <motion.span
                initial={{ opacity: 0, y: 70 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.04, duration: 0.92, ease: [0.22, 1, 0.36, 1] }}
              >
                TARUN
              </motion.span>
              <motion.em
                initial={{ opacity: 0, y: 70 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.14, duration: 0.92, ease: [0.22, 1, 0.36, 1] }}
              >
                KUMAR SAHU
              </motion.em>
            </h1>

            <motion.p
              className="hero-v2__manifesto"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.48, duration: 0.65 }}
            >
              I BUILD SYSTEMS THAT
              <span>THINK, CONNECT AND ACT.</span>
            </motion.p>
          </motion.div>

          <motion.div
            className="home-hero__core"
            style={reducedMotion ? undefined : { scale: coreScale, x: coreX }}
          >
            <InteractiveSystemCore />
          </motion.div>
        </div>

        <motion.div
          className="hero-footer hero-footer-v2"
          style={reducedMotion ? undefined : { opacity: footerOpacity }}
        >
          <div className="current-build current-build-v2">
            <div className="status-line"><span className="status-dot" /> CURRENT SYSTEM</div>
            <strong>JARVIS OS</strong>
            <p>Personal AI operating environment</p>
          </div>

          <a className="scroll-cue" href="#manifesto" data-cursor="ENTER">
            <span>SCROLL TO ENTER</span>
            <ArrowDown size={17} strokeWidth={1.4} />
          </a>
        </motion.div>

        <motion.div
          className="home-hero__chapter"
          style={reducedMotion ? undefined : { opacity: footerOpacity }}
          aria-hidden="true"
        >
          <span>WHO IS TARUN?</span>
          <i />
          <span>THE ANSWER UNFOLDS BELOW</span>
        </motion.div>
      </div>
    </section>
  );
}
