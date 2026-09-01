import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { CustomCursor } from "@/components/CustomCursor";
import { MediaFrame } from "@/components/MediaFrame";
import { SiteNav } from "@/components/SiteNav";
import { now, profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `About — ${profile.name}`,
  description:
    "About Tarun Kumar Sahu — software engineering, AI systems, backend development, robotics and connected hardware.",
};

export default function AboutPage() {
  return (
    <main className="subpage">
      <CustomCursor />
      <SiteNav />

      <section className="subpage-hero">
        <div className="subpage-hero__meta">
          <span>ABOUT / 2026</span>
          <span>THE BUILDER BEHIND THE SYSTEM</span>
        </div>

        <h1>
          ABOUT
          <em>the builder.</em>
        </h1>

        <div className="subpage-hero__bottom">
          <p>
            I&apos;m interested in the point where software stops being just
            software — and becomes a system that can sense, decide, connect and act.
          </p>
          <span>
            SOFTWARE · AI · BACKEND
            <br />
            COMPUTER VISION · EMBEDDED
          </span>
        </div>
      </section>

      <section className="about-portrait-stage">
        <div className="about-portrait-stage__copy">
          <span>01 / PERSON</span>
          <h2>
            Curious by default.
            <em>Building by choice.</em>
          </h2>
          <p>
            My work moves between code, AI, computer vision, hardware and
            product experiments. The common thread is learning how the whole
            system works instead of treating each layer as a black box.
          </p>
          <small>{profile.location}</small>
        </div>

        <div className="about-portrait-stage__media">
          <MediaFrame
            src="/media/tarun-rain.webp"
            index="PORTRAIT 01"
            label="GROUND / REAL"
            caption="A grounded personal portrait used here because About should feel human before it feels technical."
            cursor="LOOK"
          />
          <MediaFrame
            src="/media/tarun-mirror.webp"
            index="PORTRAIT 02"
            label="CREATE / OBSERVE"
            caption="A quieter creative frame for the person behind the projects and experiments."
            cursor="LOOK"
          />
        </div>
      </section>

      <section className="about-system-strip">
        <div className="about-system-strip__head">
          <span>02 / CURRENT SYSTEM</span>
          <h2>WHAT I&apos;M WORKING TOWARD.</h2>
        </div>

        <div className="about-system-list">
          <div>
            <span>EDUCATION</span>
            <strong>
              {profile.education.degree} · {profile.education.institution}
            </strong>
          </div>
          {now.items.map(([label, value]) => (
            <div key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="about-contact-portrait">
        <div>
          <span className="section-label">03 / OPEN CHANNEL</span>
          <h2>
            LET&apos;S TALK
            <em>systems.</em>
          </h2>
          <div className="contact-links" style={{ marginTop: 40 }}>
            <a href={profile.links.github} target="_blank" rel="noreferrer" data-cursor="OPEN">
              GITHUB <ArrowUpRight size={15} />
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" data-cursor="OPEN">
              LINKEDIN <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        <MediaFrame
          src="/media/tarun-contact.webp"
          index="PORTRAIT 03"
          label="PROFILE / CONTACT"
          caption="A polished portrait reserved for the closing impression instead of being forced into the homepage hero."
          cursor="OPEN"
        />
      </section>
    </main>
  );
}
