"use client";

import { motion } from "framer-motion";
import { useState } from "react";

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
  const [failed, setFailed] = useState(false);

  return (
    <motion.figure
      className={`media-frame ${className} ${failed ? "media-frame--offline" : ""}`}
      data-cursor={cursor}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="media-frame__image" role="img" aria-label={caption}>
        {!failed ? (
          <img src={src} alt="" loading="lazy" onError={() => setFailed(true)} />
        ) : (
          <div className="media-frame__fallback" aria-hidden="true">
            <span>{index}</span>
            <strong>{label}</strong>
            <small>MEDIA / READY FOR ASSET</small>
          </div>
        )}
      </div>

      <figcaption>
        <span>{index}</span>
        <strong>{label}</strong>
        <p>{caption}</p>
      </figcaption>
    </motion.figure>
  );
}
