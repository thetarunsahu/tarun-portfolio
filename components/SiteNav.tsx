"use client";

import { ArrowUpRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";

const items = [
  ["01", "INDEX", "/"],
  ["02", "WORK", "/work"],
  ["03", "LAB", "/lab"],
  ["04", "ABOUT", "/about"],
] as const;

export function SiteNav() {
  const [contactOpen, setContactOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const overlayOpen = contactOpen || menuOpen;

  useEffect(() => {
    if (!overlayOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setContactOpen(false);
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [overlayOpen]);

  return (
    <>
      <header className="site-nav">
        <a className="site-nav__brand" href="/" aria-label="Back to index">
          TS<span>/26</span>
        </a>

        <nav className="site-nav__links" aria-label="Primary navigation">
          {items.map(([, label, href]) => (
            <a key={label} href={href}>{label}</a>
          ))}
        </nav>

        <div className="site-nav__actions">
          <button
            type="button"
            className="site-nav__menu"
            onClick={() => setMenuOpen(true)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu-overlay"
          >
            MENU
          </button>
          <button
            type="button"
            className="site-nav__contact"
            onClick={() => setContactOpen(true)}
            aria-expanded={contactOpen}
            aria-controls="contact-overlay"
          >
            CONTACT <ArrowUpRight size={13} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      <div
        className={`mobile-menu-overlay ${menuOpen ? "mobile-menu-overlay--open" : ""}`}
        id="mobile-menu-overlay"
        aria-hidden={!menuOpen}
      >
        <div className="mobile-menu-overlay__top">
          <span>TS/26 · NAVIGATION</span>
          <button type="button" onClick={() => setMenuOpen(false)} aria-label="Close navigation">
            CLOSE <X size={14} strokeWidth={1.4} />
          </button>
        </div>

        <nav className="mobile-menu-overlay__links" aria-label="Mobile navigation">
          {items.map(([number, label, href]) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)}>
              <span>{number}</span>
              <strong>{label}</strong>
              <i>↗</i>
            </a>
          ))}
        </nav>

        <div className="mobile-menu-overlay__foot">
          <span>SOFTWARE · AI · SYSTEMS</span>
          <span>{profile.location}</span>
        </div>
      </div>

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
          <p>Open to collaborations, technical conversations and interesting engineering problems.</p>
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
