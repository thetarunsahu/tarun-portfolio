"use client";

import { ArrowUpRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";

const items = [
  ["INDEX", "/"],
  ["WORK", "/work"],
  ["LAB", "/lab"],
  ["ABOUT", "/about"],
];

export function SiteNav() {
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    if (!contactOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setContactOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [contactOpen]);

  return (
    <>
      <header className="site-nav">
        <a className="site-nav__brand" href="/" aria-label="Back to index">
          TS<span>/26</span>
        </a>

        <nav className="site-nav__links" aria-label="Primary navigation">
          {items.map(([label, href]) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="site-nav__contact"
          onClick={() => setContactOpen(true)}
          aria-expanded={contactOpen}
          aria-controls="contact-overlay"
        >
          CONTACT <ArrowUpRight size={13} strokeWidth={1.5} />
        </button>
      </header>

      <div
        className={`contact-overlay ${contactOpen ? "contact-overlay--open" : ""}`}
        id="contact-overlay"
        aria-hidden={!contactOpen}
      >
        <div className="contact-overlay__top">
          <span>OPEN CHANNEL / TS26</span>
          <button type="button" onClick={() => setContactOpen(false)} aria-label="Close contact overlay">
            CLOSE <X size={14} strokeWidth={1.4} />
          </button>
        </div>

        <div className="contact-overlay__body">
          <span className="contact-overlay__index">008 / CONTACT</span>
          <h2>
            HAVE AN IDEA?
            <em>let&apos;s talk.</em>
          </h2>
          <p>
            Open to collaborations, technical conversations and interesting engineering problems.
          </p>
        </div>

        <div className="contact-overlay__links">
          <a href={profile.links.github} target="_blank" rel="noreferrer" data-cursor="OPEN">
            GITHUB <ArrowUpRight size={17} />
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" data-cursor="OPEN">
            LINKEDIN <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="contact-overlay__foot">
          <span>{profile.location}</span>
          <span>ESC TO CLOSE</span>
        </div>
      </div>
    </>
  );
}
