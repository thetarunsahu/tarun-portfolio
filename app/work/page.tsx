import type { Metadata } from "next";
import { CustomCursor } from "@/components/CustomCursor";
import { SiteNav } from "@/components/SiteNav";
import { WorkArchive } from "@/components/WorkArchive";
import { projects } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Work — Tarun Kumar Sahu",
  description: "Selected systems across AI, backend, robotics, IoT and connected hardware.",
};

export default function WorkPage() {
  return (
    <main className="subpage work-page">
      <CustomCursor />
      <SiteNav />

      <section className="subpage-hero work-page__hero">
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

      <section className="work-page__archive" aria-label="Selected work">
        <div className="section-index section-index-light">
          <span>001</span>
          <span>ARCHIVE</span>
        </div>

        <div className="section-body">
          <WorkArchive projects={projects} />
        </div>
      </section>
    </main>
  );
}
