"use client";

import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <main>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">TS.</div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          href="https://github.com/thetarunsahu"
          target="_blank"
          className="nav-github"
        >
          GitHub <ArrowUpRight size={15} />
        </a>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-meta">
          <span>PORTFOLIO / 2026</span>
          <span>PUNE, INDIA</span>
        </div>

        <div className="hero-content">
          <p className="hero-label">SOFTWARE ENGINEER</p>

          <h1>
            TARUN
            <span>KUMAR SAHU</span>
          </h1>

          <div className="hero-bottom">
            <p className="hero-description">
              Building intelligent software, AI systems and connected hardware
              that move ideas beyond the screen.
            </p>

            <div className="hero-roles">
              <span>AI</span>
              <span>BACKEND</span>
              <span>ROBOTICS</span>
              <span>IoT</span>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <span>SCROLL TO EXPLORE</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* ABOUT */}
      <section className="section" id="about">
        <div className="section-number">001</div>

        <div className="section-content">
          <p className="section-label">ABOUT</p>

          <h2>
            I build systems,
            <span>not just interfaces.</span>
          </h2>

          <p className="large-copy">
            I&apos;m a Computer Science Engineering student focused on
            software engineering, artificial intelligence, backend systems,
            computer vision and embedded technology.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects-section" id="projects">
        <div className="section-number">002</div>

        <div className="section-content">
          <p className="section-label">SELECTED SYSTEMS</p>

          <h2>
            Work in
            <span>motion.</span>
          </h2>

          <div className="project-list">
            <Project
              number="01"
              category="PERSONAL AI SYSTEM"
              title="JARVIS OS"
              status="ALPHA"
            />

            <Project
              number="02"
              category="AI × AGRICULTURAL ROBOTICS"
              title="AGRIBOT"
              status="IN DEVELOPMENT"
            />

            <Project
              number="03"
              category="AI × IoT"
              title="FRESHFUSION"
              status="PROTOTYPE"
            />

            <Project
              number="04"
              category="CONNECTED SAFETY SYSTEM"
              title="SMART SAFETY WRISTBAND"
              status="PROTOTYPE"
            />
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section dark-section" id="skills">
        <div className="section-number">003</div>

        <div className="section-content">
          <p className="section-label">ENGINEERING STACK</p>

          <h2>
            Where code
            <span>meets hardware.</span>
          </h2>

          <div className="skills-grid">
            <Skill title="Languages" items="Java · C++ · Python · SQL" />

            <Skill
              title="Software"
              items="Backend · APIs · Databases · Git · Linux"
            />

            <Skill
              title="Intelligence"
              items="AI · Computer Vision · LLM Systems"
            />

            <Skill
              title="Hardware"
              items="ESP32 · IoT · Sensors · Embedded Systems"
            />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section" id="contact">
        <p className="section-label">004 / OPEN CHANNEL</p>

        <h2>
          LET&apos;S BUILD
          <span>SOMETHING AMBITIOUS.</span>
        </h2>

        <div className="contact-links">
          <a href="https://github.com/thetarunsahu" target="_blank">
            GITHUB <ArrowUpRight />
          </a>

          <a
            href="https://www.linkedin.com/in/tarunnsahuu/"
            target="_blank"
          >
            LINKEDIN <ArrowUpRight />
          </a>
        </div>
      </section>
    </main>
  );
}

function Project({
  number,
  category,
  title,
  status,
}: {
  number: string;
  category: string;
  title: string;
  status: string;
}) {
  return (
    <article className="project-row">
      <span className="project-number">{number}</span>

      <div>
        <p>{category}</p>
        <h3>{title}</h3>
      </div>

      <span className="project-status">{status}</span>

      <ArrowUpRight className="project-arrow" />
    </article>
  );
}

function Skill({ title, items }: { title: string; items: string }) {
  return (
    <div className="skill-card">
      <p>{title}</p>
      <h3>{items}</h3>
    </div>
  );
}