import type { Metadata } from "next";
import { CustomCursor } from "@/components/CustomCursor";
import { SiteNav } from "@/components/SiteNav";

export const metadata: Metadata = {
  title: "The Lab — Tarun Kumar Sahu",
  description:
    "Experiments, prototypes and side builds across computer vision, interaction, embedded systems and software.",
};

const labItems = [
  ["01", "MOTION CONTROLLER", "WEARABLE / IMU / ESP32"],
  ["02", "PLAY WITH YOUR MIND", "COMPUTER VISION"],
  ["03", "RAMADAN PEN", "MOTION INTERACTION"],
  ["04", "EMBEDDED LAB", "ESP32 / SENSORS / PROTOTYPES"],
  ["05", "ALGORITHM WORK", "DSA / PROBLEM SOLVING"],
  ["06", "VISUAL STUDIES", "GENERATIVE / CREATIVE AI"],
];

export default function LabPage() {
  return (
    <main className="subpage lab-page lab-page--final">
      <CustomCursor />
      <SiteNav />

      <section className="subpage-hero lab-page-hero">
        <div className="subpage-hero__meta">
          <span>LAB / ACTIVE ARCHIVE</span>
          <span>EXPERIMENTS · PROTOTYPES · STUDIES</span>
        </div>

        <h1>
          THE
          <em>lab.</em>
        </h1>

        <div className="subpage-hero__bottom">
          <p>
            Small experiments. Strange ideas. Things built to understand
            something before deciding whether they should become anything more.
          </p>
          <span>
            COMPUTER VISION · EMBEDDED
            <br />
            INTERACTION · ALGORITHMS
          </span>
        </div>
      </section>

      <section className="lab-page-stage lab-page-stage--photo">
        <div className="lab-page-stage__copy">
          <span>01 / CREATIVE PROCESS</span>
          <h2>
            LEARNING CAN
            <em>look strange.</em>
          </h2>
          <p>
            The Lab is intentionally less polished than Work. It holds tests,
            prototypes, visual experiments and ideas that helped me learn a new
            system or interaction.
          </p>
        </div>

        <div className="lab-page-art" data-cursor="EXPLORE">
          <div className="lab-page-art__photo" role="img" aria-label="Creative portrait of Tarun" />
          <div className="lab-page-art__slice lab-page-art__slice--one" aria-hidden="true" />
          <div className="lab-page-art__slice lab-page-art__slice--two" aria-hidden="true" />
          <div className="lab-page-art__note lab-page-art__note--a">TRY / BREAK / LEARN</div>
          <div className="lab-page-art__note lab-page-art__note--b">NOT EVERYTHING NEEDS A ROADMAP.</div>
          <div className="lab-page-art__stamp">EXPERIMENT / 01</div>
        </div>
      </section>

      <section className="lab-page-ledger lab-page-ledger--final">
        <div className="lab-page-ledger__intro">
          <span>02 / OPEN DRAWER</span>
          <p>Each item is a test of an input, an idea, a system or a way of seeing.</p>
        </div>
        {labItems.map(([number, title, meta]) => (
          <div className="lab-page-ledger__row" key={title} data-cursor="EXPLORE">
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{meta}</p>
            <i aria-hidden="true">↗</i>
          </div>
        ))}
      </section>
    </main>
  );
}
