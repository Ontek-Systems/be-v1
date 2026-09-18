"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { ParallaxImage } from "@/components/common/ParallaxImage";
import { DURATION, EASE, LEAD_IN, VIEWPORT, stagger } from "@/lib/motion";

export interface ExperiencePanelProps {
  index: number;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  align: "left" | "right";
}

export function ExperiencePanel({
  index,
  title,
  description,
  imageSrc,
  imageAlt,
  align,
}: Readonly<ExperiencePanelProps>) {
  const alignSelf = align === "right" ? "sm:ml-auto sm:text-right sm:items-end" : "";
  /*
    Below sm the text spans the full width, so a horizontal gradient leaves
    half of it over a barely dimmed photo. Mobile uses a bottom anchored
    vertical gradient; sm and up keeps the directional one.
  */
  const gradient =
    align === "right"
      ? "bg-gradient-to-t from-black/90 via-black/50 via-45% to-transparent"
      : "bg-gradient-to-t from-black/90 via-black/50 via-45% to-transparent";

  return (
    <section className="relative flex h-dvh min-h-150 items-end overflow-hidden">
      <ParallaxImage src={imageSrc} alt={imageAlt} strength={16} />
      <div className={`absolute inset-0 ${gradient}`} />

      <Container className="relative pb-14 sm:pb-20 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className={`hero-text-shadow flex max-w-xl flex-col ${alignSelf}`}
        >
          <span className="text-5xl font-display font-bold leading-none text-primary-gold xs:text-6xl sm:text-7xl lg:text-8xl">
            {String(index).padStart(2, "0")}
            <span className="text-white">.</span>
          </span>
          <h3 className="mt-5 font-display text-2xl font-bold leading-tight text-white xs:text-3xl sm:mt-6 sm:text-4xl lg:text-5xl">
            {title}
          </h3>
          <p className="mt-4 text-base leading-relaxed text-primary-cream xs:text-lg sm:mt-5 sm:text-xl">{description}</p>
        </motion.div>
      </Container>
    </section>
  );
}
