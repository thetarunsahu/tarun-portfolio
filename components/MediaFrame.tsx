"use client";

import { motion } from "framer-motion";

type MediaFrameProps = {
  src: string;
  index: string;
  label: string;
  caption: string;
  className?: string;
  cursor?: string;
};

export function MediaFrame({
  src,
  index,
  label,
  caption,
  className = "",
  cursor = "LOOK",
}: MediaFrameProps) {
  return (
    <motion.figure
      className={`media-frame ${className}`}
      data-cursor={cursor}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="media-frame__image"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(8,8,8,0.02), rgba(8,8,8,0.18)), url(${src})`,
        }}
        role="img"
        aria-label={caption}
      />

      <figcaption>
        <span>{index}</span>
        <strong>{label}</strong>
        <p>{caption}</p>
      </figcaption>
    </motion.figure>
  );
}
