"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/portfolio";

export function WorkArchive({ projects }: { projects: Project[] }) {
  const [activeSlug, setActiveSlug] = useState(projects[0]?.slug ?? "");
  const active = projects.find((project) => project.slug === activeSlug) ?? projects[0];

  return (
    <div className="work-archive">
      <div className="work-archive__list">
        {projects.map((project) => (
          <a
            key={project.slug}
            className={`work-archive__row${activeSlug === project.slug ? " is-active" : ""}`}
            href={`/work/${project.slug}`}
            data-cursor="OPEN"
            onMouseEnter={() => setActiveSlug(project.slug)}
            onFocus={() => setActiveSlug(project.slug)}
          >
            <span className="work-archive__number">{project.number}</span>
            <div className="work-archive__title">
              <small>{project.category}</small>
              <h2>{project.title}</h2>
            </div>
            <span className="work-archive__status">{project.status}</span>
            <ArrowUpRight className="work-archive__arrow" strokeWidth={1.2} />
          </a>
        ))}
      </div>

      {active ? (
        <aside className="work-preview" aria-live="polite">
          <div className="work-preview__meta">
            <span>SYSTEM PREVIEW</span>
            <span>{active.number} / 04</span>
          </div>

          <div className={`work-preview__visual work-preview__visual--${active.slug}`} aria-hidden="true">
            <div className="work-preview__ring work-preview__ring--one" />
            <div className="work-preview__ring work-preview__ring--two" />
            <div className="work-preview__core">{active.number}</div>
            <span className="work-preview__node work-preview__node--a" />
            <span className="work-preview__node work-preview__node--b" />
            <span className="work-preview__node work-preview__node--c" />
          </div>

          <div className="work-preview__copy">
            <p>{active.description}</p>
            <div className="work-preview__stack">
              {active.stack.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>

          <a className="work-preview__open" href={`/work/${active.slug}`} data-cursor="OPEN">
            OPEN CASE STUDY <ArrowUpRight size={16} />
          </a>
        </aside>
      ) : null}
    </div>
  );
}
