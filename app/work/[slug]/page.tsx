import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import { CustomCursor } from "@/components/CustomCursor";
import { SiteNav } from "@/components/SiteNav";
import { projects } from "@/data/portfolio";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Tarun Kumar Sahu`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <main className="subpage">
      <CustomCursor />
      <SiteNav />

      <section className="subpage-hero">
        <div className="subpage-hero__meta">
          <span>{project.number} / 04</span>
          <span>{project.status}</span>
        </div>

        <h1>
          {project.title}
          <em>{project.category.toLowerCase()}.</em>
        </h1>

        <div className="subpage-hero__bottom">
          <p>{project.description}</p>
          <span>{project.stack.join(" · ")}</span>
        </div>
      </section>

      <section className="editorial-section">
        <div className="section-index">
          <span>001</span>
          <span>CURRENT STATE</span>
        </div>
        <div className="section-body">
          <h2 className="display-heading">
            Built in public,
            <em>documented honestly.</em>
          </h2>

          <div className="about-copy-grid">
            <p className="about-lead">
              This case study reflects the project at its current stage: {project.status.toLowerCase()}.
            </p>
            <div className="about-detail">
              <p>
                The page is intentionally structured around the system, its present scope and the engineering stack. Deeper architecture, media and verified milestones will be added as the project evolves.
              </p>
              <p>
                No completed capability is claimed here unless it is already represented by the project data or repository.
              </p>
            </div>
          </div>

          <div className="education-strip">
            <span>STACK</span>
            <strong>{project.stack.join(" · ")}</strong>
            <a href={project.repo} target="_blank" rel="noreferrer" data-cursor="OPEN">
              SOURCE <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-kicker">
          <span>NEXT</span>
          <span>RETURN TO ARCHIVE</span>
        </div>
        <h2>
          MORE
          <em>SYSTEMS.</em>
        </h2>
        <div className="contact-bottom">
          <p>Explore the rest of the work archive.</p>
          <div className="contact-links">
            <a href="/work" data-cursor="BACK">
              <ArrowLeft size={15} /> WORK
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
