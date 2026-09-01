import type { Metadata } from "next";
import { CustomCursor } from "@/components/CustomCursor";
import { MediaFrame } from "@/components/MediaFrame";
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
    <main className="subpage lab-page">
      <CustomCursor />
      <SiteNav />

      <section className="subpage-hero">
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

      <section className="lab-page-stage">
        <div className="lab-page-stage__copy">
          <span>01 / CREATIVE PROCESS</span>
          <h2>Learning can look strange.</h2>
          <p>
            The Lab is intentionally less polished than Work. It holds tests,
            prototypes, visual experiments and ideas that helped me learn a new
            system or interaction.
          </p>
        </div>

        <div className="lab-page-stage__media">
          <MediaFrame
            src="/media/lab-focus.webp"
            index="STUDY 01"
            label="FOCUS / CREATE / REPEAT"
            caption="A playful self-study used here because the Lab is where experimentation is allowed to feel personal."
            cursor="EXPLORE"
          />
          <MediaFrame
            src="/media/lab-ai.webp"
            index="STUDY 02"
            label="AI / VISUAL EXPLORATION"
            caption="A generative visual study placed with creative experiments rather than presented as a real engineering result."
            cursor="EXPLORE"
          />
        </div>
      </section>

      <section className="lab-page-ledger">
        {labItems.map(([number, title, meta]) => (
          <div className="lab-page-ledger__row" key={title} data-cursor="EXPLORE">
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{meta}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
