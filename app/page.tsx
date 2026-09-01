"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { CustomCursor } from "@/components/CustomCursor";
import { IntroLoader } from "@/components/IntroLoader";
import { MediaFrame } from "@/components/MediaFrame";
import { SiteNav } from "@/components/SiteNav";
import { now, profile, projects, stackGroups } from "@/data/portfolio";

const reveal = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] as const },
};

const labItems = [
  ["01", "MOTION CONTROLLER", "WEARABLE / IMU / ESP32"],
  ["02", "PLAY WITH YOUR MIND", "COMPUTER VISION"],
  ["03", "RAMADAN PEN", "MOTION INTERACTION"],
  ["04", "EMBEDDED LAB", "ESP32 / SENSORS / PROTOTYPES"],
];

export default function Home() {
  return (
    <main>
      <IntroLoader />
      <CustomCursor />
      <SiteNav />

      <section className="hero hero-v2" id="top">
        <div className="hero-grid-lines" aria-hidden="true" />

        <div className="hero-topline">
          <span>PORTFOLIO / 2026</span>
          <span>SOFTWARE · AI · SYSTEMS</span>
          <span>{profile.location}</span>
        </div>

        <div className="hero-v2__main">
          <div className="hero-v2__copy">
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
                initial={{ opacity: 0, y: 68 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                TARUN
              </motion.span>
              <motion.em
                initial={{ opacity: 0, y: 68 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.14, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
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
          </div>

          <motion.div
            className="system-core-shell"
            data-cursor="EXPLORE"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            aria-label="System Core visual placeholder"
          >
            <div className="system-core-orbit system-core-orbit--one" />
            <div className="system-core-orbit system-core-orbit--two" />
            <div className="system-core-orbit system-core-orbit--three" />
            <div className="system-core-center">
              <span>CORE</span>
              <strong>TS</strong>
              <small>ONLINE</small>
            </div>
            <span className="system-node node-a" />
            <span className="system-node node-b" />
            <span className="system-node node-c" />
            <span className="system-node node-d" />
            <span className="system-node node-e" />
            <span className="system-core-label label-a">AI</span>
            <span className="system-core-label label-b">BACKEND</span>
            <span className="system-core-label label-c">ROBOTICS</span>
            <span className="system-core-label label-d">IOT</span>
          </motion.div>
        </div>

        <div className="hero-footer hero-footer-v2">
          <div className="current-build current-build-v2">
            <div className="status-line">
              <span className="status-dot" />
              CURRENT SYSTEM
            </div>
            <strong>JARVIS OS</strong>
            <p>Personal AI operating environment</p>
          </div>

          <a className="scroll-cue" href="#manifesto" data-cursor="ENTER">
            <span>SCROLL TO ENTER</span>
            <ArrowDown size={17} strokeWidth={1.4} />
          </a>
        </div>
      </section>

      <section className="manifesto-section" id="manifesto">
        <div className="manifesto-index">
          <span>001</span>
          <span>MANIFESTO</span>
        </div>
        <motion.div className="manifesto-copy" {...reveal}>
          <p>I&apos;M INTERESTED IN THE POINT WHERE</p>
          <h2>
            SOFTWARE STOPS BEING
            <em>just software.</em>
          </h2>
          <div className="manifesto-foot">
            <span>CODE</span>
            <span>INTELLIGENCE</span>
            <span>HARDWARE</span>
            <span>SYSTEMS</span>
          </div>
        </motion.div>
      </section>

      <section className="identity-interlude" aria-label="Identity portrait">
        <div className="identity-interlude__head">
          <span>02 / IDENTITY</span>
          <motion.h2 {...reveal}>
            ENGINEERING
            <em>with a point of view.</em>
          </motion.h2>
        </div>

        <MediaFrame
          src="/media/tarun-sunglasses.webp"
          index="FRAME 01"
          label="IDENTITY / EDITORIAL"
          caption="A deliberate portrait break between the system manifesto and the person building it."
          className="media-frame--identity"
          cursor="LOOK"
        />
      </section>

      <section className="editorial-section about-section" id="about">
        <motion.div className="section-index" {...reveal}>
          <span>002</span>
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
                The goal is to understand architecture deeply enough to turn
                ambitious ideas into working, explainable systems.
              </p>
            </div>
          </motion.div>

          <motion.div className="education-strip" {...reveal}>
            <span>EDUCATION</span>
            <strong>{profile.education.degree}</strong>
            <span>
              {profile.education.institution} · Class of {profile.education.classOf}
            </span>
          </motion.div>
        </div>
      </section>

      <section className="projects-section" id="projects">
        <motion.div className="section-index section-index-light" {...reveal}>
          <span>003</span>
          <span>SELECTED SYSTEMS</span>
        </motion.div>

        <div className="section-body">
          <motion.div className="project-heading-row" {...reveal}>
            <h2 className="display-heading light-heading">
              Work in
              <em>motion.</em>
            </h2>
            <p>Four major systems currently being built, tested or evolved.</p>
          </motion.div>

          <div className="project-ledger">
            {projects.map((project, index) => (
              <motion.a
                key={project.number}
                className="project-row"
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                data-cursor="VIEW"
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

      <section className="motion-interlude" aria-label="In motion portrait">
        <MediaFrame
          src="/media/tarun-crosswalk.webp"
          index="FRAME 02"
          label="IN MOTION"
          caption="A visual bridge from shipped work into the current process — movement, experimentation and unfinished systems."
          className="media-frame--motion"
          cursor="LOOK"
        />

        <motion.div className="motion-interlude__copy" {...reveal}>
          <span>PROCESS / 2026</span>
          <h2>
            STILL
            <em>building.</em>
          </h2>
          <p>
            The portfolio is not an archive of finished objects. It is a record
            of systems moving from idea to architecture to prototype.
          </p>
        </motion.div>
      </section>

      <section className="now-section">
        <motion.div className="now-heading" {...reveal}>
          <span>004</span>
          <h2>NOW</h2>
          <p>{now.label}</p>
        </motion.div>

        <div className="now-ledger">
          {now.items.map(([label, value], index) => (
            <motion.div
              className="now-row"
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.5 }}
            >
              <span>{label}</span>
              <strong>{value}</strong>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="lab-section" id="lab">
        <div className="section-index section-index-light">
          <span>005</span>
          <span>THE LAB</span>
        </div>

        <div className="section-body">
          <motion.div className="lab-heading" {...reveal}>
            <p>SMALL EXPERIMENTS · STRANGE IDEAS · THINGS BUILT TO LEARN</p>
            <h2>THE LAB</h2>
          </motion.div>

          <div className="lab-creative-stage">
            <div className="lab-creative-stage__copy">
              <span>CREATIVE PROCESS</span>
              <h3>Not everything needs to become a product.</h3>
              <p>
                Some experiments exist to learn a sensor, test an interaction,
                understand a visual system or simply make an idea tangible.
              </p>
            </div>

            <MediaFrame
              src="/media/lab-focus.webp"
              index="FRAME 03"
              label="CREATIVE SELF-STUDY"
              caption="A deliberately playful image reserved for the Lab, where experimentation is the point."
              className="media-frame--lab"
              cursor="EXPLORE"
            />
          </div>

          <div className="lab-ledger">
            {labItems.map(([number, title, meta], index) => (
              <motion.div
                className="lab-row"
                key={title}
                data-cursor="EXPLORE"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.55 }}
              >
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{meta}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="editorial-section stack-section" id="stack">
        <motion.div className="section-index" {...reveal}>
          <span>006</span>
          <span>ENGINEERING MAP</span>
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
          <span>007</span>
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
            <a href={profile.links.github} target="_blank" rel="noreferrer" data-cursor="OPEN">
              <span aria-hidden="true">GH</span>
              GITHUB
              <ArrowUpRight size={15} />
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" data-cursor="OPEN">
              <span aria-hidden="true">IN</span>
              LINKEDIN
              <ArrowUpRight size={15} />
            </a>
          </div>
        </motion.div>

        <div className="site-footer">
          <span>© 2026 {profile.name.toUpperCase()}</span>
          <span>DESIGNED AS A LIVING SYSTEM</span>
        </div>
      </section>
    </main>
  );
}
