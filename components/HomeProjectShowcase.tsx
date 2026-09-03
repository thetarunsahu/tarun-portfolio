"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";
import { projects } from "@/data/portfolio";

function PreviewGraphic({ slug }: { slug: string }) {
  if (slug === "jarvis-os") {
    return (
      <div className="project-preview-graphic project-preview-graphic--jarvis">
        <span className="preview-chip">VOICE</span>
        <span className="preview-chip">MEMORY</span>
        <span className="preview-chip">AGENTS</span>
        <span className="preview-chip">TOOLS</span>
        <div className="preview-core">J</div>
        <i className="preview-link preview-link--a" />
        <i className="preview-link preview-link--b" />
        <i className="preview-link preview-link--c" />
      </div>
    );
  }

  if (slug === "weed-removal-robot") {
    return (
      <div className="project-preview-graphic project-preview-graphic--robot">
        <div className="field-row field-row--1" />
        <div className="field-row field-row--2" />
        <div className="field-row field-row--3" />
        <div className="robot-body"><span>CV</span></div>
        <i className="crop-safe crop-safe--1" />
        <i className="crop-safe crop-safe--2" />
        <i className="weed-target" />
      </div>
    );
  }

  if (slug === "freshfusion") {
    return (
      <div className="project-preview-graphic project-preview-graphic--fresh">
        <div className="fruit-scan">FRUIT</div>
        <span className="sensor-node sensor-node--gas">GAS</span>
        <span className="sensor-node sensor-node--env">TEMP</span>
        <span className="sensor-node sensor-node--vision">VISION</span>
        <div className="fusion-output">FUSION</div>
      </div>
    );
  }

  return (
    <div className="project-preview-graphic project-preview-graphic--safety">
      <div className="wristband-ring"><span>SOS</span></div>
      <i className="signal-ring signal-ring--1" />
      <i className="signal-ring signal-ring--2" />
      <i className="signal-ring signal-ring--3" />
      <span className="location-ping">LOCATION</span>
    </div>
  );
}

export function HomeProjectShowcase() {
  const rootRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const active = projects[activeIndex];

  const { scrollYProgress } = useScroll({
    target: rootRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (reducedMotion) return;
    const next = Math.min(projects.length - 1, Math.floor(value * projects.length));
    setActiveIndex((current) => (current === next ? current : next));
  });

  function jumpTo(index: number) {
    const root = rootRef.current;
    if (!root) return;

    const rect = root.getBoundingClientRect();
    const top = window.scrollY + rect.top;
    const scrollable = root.offsetHeight - window.innerHeight;
    const destination = top + scrollable * (index / (projects.length - 1));

    window.scrollTo({
      top: destination,
      behavior: reducedMotion ? "auto" : "smooth",
    });
  }

  return (
    <div className="scroll-work" ref={rootRef}>
      <div className="scroll-work__sticky">
        <div className="scroll-work__topline">
          <span>SCROLL TO INSPECT</span>
          <span>{String(activeIndex + 1).padStart(2, "0")} / 04</span>
        </div>

        <div className="scroll-work__stage">
          <div className="scroll-work__copy">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.slug}
                initial={{ opacity: 0, y: 34, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -28, filter: "blur(8px)" }}
                transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="scroll-work__category">{active.category}</span>
                <h3>{active.title}</h3>
                <p>{active.description}</p>

                <div className="scroll-work__stack">
                  {active.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <a href={`/work/${active.slug}`} data-cursor="OPEN">
                  ENTER CASE STUDY <ArrowUpRight size={17} strokeWidth={1.35} />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="scroll-work__visual" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.slug}
                className={`scroll-work__visual-card scroll-work__visual-card--${active.slug}`}
                initial={{ opacity: 0, scale: 0.92, rotate: -1.5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 1.04, rotate: 1.5 }}
                transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="scroll-work__visual-meta">
                  <span>{active.number} / SYSTEM</span>
                  <span>{active.status}</span>
                </div>
                <PreviewGraphic slug={active.slug} />
                <div className="scroll-work__visual-caption">
                  <span>LIVE SYSTEM PREVIEW</span>
                  <strong>{active.title}</strong>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="scroll-work__chapters" aria-label="Project chapters">
          {projects.map((project, index) => (
            <button
              key={project.slug}
              type="button"
              className={index === activeIndex ? "is-active" : ""}
              onClick={() => jumpTo(index)}
              onMouseEnter={() => reducedMotion && setActiveIndex(index)}
              onFocus={() => reducedMotion && setActiveIndex(index)}
            >
              <span>{project.number}</span>
              <strong>{project.title}</strong>
              <i aria-hidden="true" />
            </button>
          ))}
        </div>

        <motion.div
          className="scroll-work__progress"
          style={{ scaleX: scrollYProgress }}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
