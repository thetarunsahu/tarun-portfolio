import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { CustomCursor } from "@/components/CustomCursor";
import { SiteNav } from "@/components/SiteNav";
import { projects } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Work — Tarun Kumar Sahu",
  description: "Selected systems across AI, backend, robotics, IoT and connected hardware.",
};

export default function WorkPage() {
  return (
    <main className="subpage">
      <CustomCursor />
      <SiteNav />

      <section className="subpage-hero">
        <div className="subpage-hero__meta">
          <span>WORK / 2026</span>
          <span>SELECTED SYSTEMS · 04</span>
        </div>

        <h1>
          SELECTED
          <em>systems.</em>
        </h1>

        <div className="subpage-hero__bottom">
          <p>
            A working archive of software, intelligence and connected hardware —
            documented by what exists now, not by pretending unfinished work is complete.
          </p>
          <span>AI · BACKEND · ROBOTICS · IOT</span>
        </div>
      </section>

      <section className="projects-section" aria-label="Selected work">
        <div className="section-index section-index-light">
          <span>001</span>
          <span>ARCHIVE</span>
        </div>

        <div className="section-body">
          <div className="project-ledger">
            {projects.map((project) => (
              <a
                key={project.slug}
                className="project-row"
                href={`/work/${project.slug}`}
                data-cursor="OPEN"
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
                    {project.stack.map((item) => <small key={item}>{item}</small>)}
                  </div>
                </div>
                <ArrowUpRight className="project-arrow" strokeWidth={1.2} />
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
