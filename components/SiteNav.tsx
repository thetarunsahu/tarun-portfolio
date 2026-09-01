"use client";

import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/portfolio";

const items = [
  ["INDEX", "/"],
  ["WORK", "/work"],
  ["LAB", "/lab"],
  ["ABOUT", "/about"],
];

export function SiteNav() {
  return (
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

      <a
        className="site-nav__contact"
        href={profile.links.linkedin}
        target="_blank"
        rel="noreferrer"
      >
        CONTACT <ArrowUpRight size={13} strokeWidth={1.5} />
      </a>
    </header>
  );
}
