"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
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
  const [active, setActive] = useState(projects[0]);

  return (
    <div className="home-project-showcase">
      <div className="home-project-showcase__ledger">
        {projects.map((project, index) => (
          <motion.a
            key={project.slug}
            href={`/work/${project.slug}`}
            className={`home-project-row ${active.slug === project.slug ? "home-project-row--active" : ""}`}
            data-cursor="OPEN"
            onMouseEnter={() => setActive(project)}
            onFocus={() => setActive(project)}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: index * 0.06, duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="home-project-row__number">{project.number}</span>
            <div className="home-project-row__title">
              <small>{project.category}</small>
              <h3>{project.title}</h3>
            </div>
            <span className="home-project-row__status">{project.status}</span>
            <ArrowUpRight size={22} strokeWidth={1.2} />
          </motion.a>
        ))}
      </div>

      <div className="home-project-showcase__preview" aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.slug}
            className={`home-project-preview home-project-preview--${active.slug}`}
            initial={{ opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.02, y: -12 }}
            transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="home-project-preview__meta">
              <span>{active.number} / SYSTEM</span>
              <span>{active.status}</span>
            </div>
            <PreviewGraphic slug={active.slug} />
            <div className="home-project-preview__copy">
              <h4>{active.title}</h4>
              <p>{active.description}</p>
              <span>OPEN CASE STUDY ↗</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
