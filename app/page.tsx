"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "JARVIS OS",
    category: "PERSONAL AI OPERATING ENVIRONMENT",
    status: "ALPHA",
    description:
      "A voice-first personal AI system built around specialized agents, memory, tool routing and real computer-level actions.",
    stack: ["Python", "AI Agents", "LLMs", "Tool Routing"],
    href: "https://github.com/thetarunsahu/Jarvis-OS",
  },
  {
    number: "02",
    title: "WEED REMOVAL ROBOT",
    category: "AI × PRECISION AGRICULTURAL ROBOTICS",
    status: "IN DEVELOPMENT",
    description:
      "An autonomous agricultural rover for crop-safe weed detection, selective mechanical removal and field analytics.",
    stack: ["Computer Vision", "Robotics", "ESP32", "Embedded"],
    href: "https://github.com/thetarunsahu/smart-precision-weeding-robot",
  },
  {
    number: "03",
    title: "FRESHFUSION",
    category: "AI × IOT",
    status: "PROTOTYPE",
    description:
      "A non-destructive fruit freshness system combining computer vision, environmental sensing and real-time IoT data.",
    stack: ["ESP32", "IoT", "Computer Vision", "Sensors"],
    href: "https://github.com/thetarunsahu/Fresh-Fusion-",
  },
  {
    number: "04",
    title: "SMART SAFETY WRISTBAND",
    category: "CONNECTED SAFETY SYSTEM",
    status: "PROTOTYPE",
    description:
      "A connected wearable concept combining emergency workflows, sensors, location sharing and a software response layer.",
    stack: ["ESP32", "IoT", "Sensors", "Connected Systems"],
    href: "https://github.com/thetarunsahu/Smart-Safety-Wristband",
  },
];

const stackGroups = [
  {
    number: "01",
    title: "Languages",
    items: ["Java", "C++", "Python", "SQL"],
  },
  {
    number: "02",
    title: "Software",
    items: ["Backend", "APIs", "Databases", "Git", "Linux"],
  },
  {
    number: "03",
    title: "Intelligence",
    items: ["AI Systems", "Computer Vision", "LLMs", "AI Agents"],
  },
  {
    number: "04",
    title: "Hardware",
    items: ["ESP32", "IoT", "Sensors", "Embedded Systems"],
  },
];

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Back to top">
          <span>TS</span>
          <small>/26</small>
        </a>

        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#stack">Stack</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          className="external-link header-github"
          href="https://github.com/thetarunsahu"
          target="_blank"
          rel="noreferrer"
        >
          GitHub <ArrowUpRight size={14} strokeWidth={1.7} />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid-lines" aria-hidden="true" />
        <div className="hero-orb" aria-hidden="true" />

        <div className="hero-topline">
          <span>PORTFOLIO / 2026</span>
          <span>SOFTWARE · AI · SYSTEMS</span>
          <span>INDIA</span>
        </div>

        <div className="hero-main">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            SOFTWARE ENGINEER · AI &amp; BACKEND DEVELOPER
          </motion.p>

          <h1 className="hero-title" aria-label="Tarun Kumar Sahu">
            <motion.span
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              TARUN
            </motion.span>
            <motion.em
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.14, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              KUMAR SAHU
            </motion.em>
          </h1>

          <div className="hero-lower">
            <motion.p
              className="hero-statement"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
            >
              Building intelligent software, AI systems and connected hardware
              that move ideas <i>beyond the screen.</i>
            </motion.p>

            <motion.div
              className="current-build"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65, duration: 0.7 }}
            >
              <div className="status-line">
                <span className="status-dot" />
                CURRENTLY BUILDING
              </div>
              <strong>JARVIS OS</strong>
              <p>Personal AI operating environment</p>
            </motion.div>
          </div>
        </div>

        <div className="hero-footer">
          <div className="hero-tags">
            <span>AI</span>
            <span>BACKEND</span>
            <span>ROBOTICS</span>
            <span>IoT</span>
          </div>

          <a className="scroll-cue" href="#about">
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown size={17} strokeWidth={1.4} />
          </a>
        </div>
      </section>

      <section className="editorial-section about-section" id="about">
        <motion.div className="section-index" {...reveal}>
          <span>001</span>
          <span>ABOUT</span>
        </motion.div>

        <div className="section-body">
          <motion.h2 className="display-heading" {...reveal}>
            I build systems,
            <em>not just interfaces.</em>
          </motion.h2>

          <motion.div className="about-copy-grid" {...reveal}>
            <p className="about-lead">
              I&apos;m a Computer Science Engineering student exploring how
              software, intelligence and hardware can work as one connected
              system.
            </p>
            <div className="about-detail">
              <p>
                My work currently lives at the intersection of backend
                engineering, applied AI, computer vision, embedded systems and
                product experimentation.
              </p>
              <p>
                The goal is simple: understand the architecture deeply enough
                to turn ambitious ideas into working, explainable prototypes.
              </p>
            </div>
          </motion.div>

          <motion.div className="education-strip" {...reveal}>
            <span>EDUCATION</span>
            <strong>B.Tech · Computer Science &amp; Engineering</strong>
            <span>MIT ADT University · Class of 2029</span>
          </motion.div>
        </div>
      </section>

      <section className="projects-section" id="projects">
        <motion.div className="section-index section-index-light" {...reveal}>
          <span>002</span>
          <span>SELECTED SYSTEMS</span>
        </motion.div>

        <div className="section-body">
          <motion.div className="project-heading-row" {...reveal}>
            <h2 className="display-heading light-heading">
              Work in
              <em>motion.</em>
            </h2>
            <p>
              Major systems I&apos;m actively building, testing or evolving.
            </p>
          </motion.div>

          <div className="project-ledger">
            {projects.map((project, index) => (
              <motion.a
                key={project.number}
                className="project-row"
                href={project.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  delay: index * 0.06,
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <span className="project-number">{project.number}</span>

                <div className="project-title-block">
                  <small>{project.category}</small>
                  <h3>{project.title}</h3>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-meta">
                  <span>{project.status}</span>
                  <div className="project-stack">
                    {project.stack.map((item) => (
                      <small key={item}>{item}</small>
                    ))}
                  </div>
                </div>

                <ArrowUpRight className="project-arrow" strokeWidth={1.2} />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="editorial-section stack-section" id="stack">
        <motion.div className="section-index" {...reveal}>
          <span>003</span>
          <span>ENGINEERING STACK</span>
        </motion.div>

        <div className="section-body">
          <motion.h2 className="display-heading" {...reveal}>
            Where code
            <em>meets hardware.</em>
          </motion.h2>

          <div className="stack-grid">
            {stackGroups.map((group, index) => (
              <motion.article
                className="stack-card"
                key={group.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
              >
                <div className="stack-card-head">
                  <span>{group.number}</span>
                  <p>{group.title}</p>
                </div>
                <h3>{group.items.join(" · ")}</h3>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <motion.div className="contact-kicker" {...reveal}>
          <span>004</span>
          <span>OPEN CHANNEL</span>
        </motion.div>

        <motion.h2 {...reveal}>
          LET&apos;S BUILD
          <em>SOMETHING AMBITIOUS.</em>
        </motion.h2>

        <motion.div className="contact-bottom" {...reveal}>
          <p>
            Open to collaborations, technical conversations and interesting
            engineering problems.
          </p>

          <div className="contact-links">
            <a
              href="https://github.com/thetarunsahu"
              target="_blank"
              rel="noreferrer"
            >
              <span aria-hidden="true">GH</span>
              GITHUB
              <ArrowUpRight size={15} />
            </a>
            <a
              href="https://www.linkedin.com/in/tarunnsahuu/"
              target="_blank"
              rel="noreferrer"
            >
              <span aria-hidden="true">IN</span>
              LINKEDIN
              <ArrowUpRight size={15} />
            </a>
          </div>
        </motion.div>

        <div className="site-footer">
          <span>© 2026 TARUN KUMAR SAHU</span>
          <span>DESIGNED AS A LIVING SYSTEM</span>
        </div>
      </section>
    </main>
  );
}
