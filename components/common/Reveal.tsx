"use client";

import { motion } from "framer-motion";
import type { ElementType, ReactNode } from "react";
import { DURATION, EASE, LEAD_IN, VIEWPORT, stagger } from "@/lib/motion";

export interface RevealProps {
  children: ReactNode;
  /** Position in a staggered group. Adds STAGGER per step on top of the lead in. */
  index?: number;
  /** Extra delay in seconds, on top of the lead in and the stagger. */
  delay?: number;
  /** Distance travelled. Use 0 for a straight fade. */
  y?: number;
  /** Horizontal travel, for side by side blocks arriving from opposite edges. */
  x?: number;
  duration?: number;
  as?: ElementType;
  className?: string;
}

/**
 * The single scroll reveal used across the site. Before this, every section
 * carried its own initial/whileInView/viewport/transition block and they had
 * drifted into a dozen slightly different timings, which is a large part of why
 * the pages felt uneven.
 *
 * prefers-reduced-motion is honoured in CSS rather than here, through the
 * data-motion-entrance hook that globals.css keys off. It cannot be done in
 * JavaScript: Framer Motion writes the entrance state as an inline style during
 * server rendering, useReducedMotion is only true on the client, and React does
 * not patch a mismatched style attribute during hydration. Branching on it here
 * left every revealed block on the site stuck at opacity 0 for anyone browsing
 * with reduced motion turned on.
 */
export function Reveal({
  children,
  index = 0,
  delay = 0,
  y = 28,
  x = 0,
  duration = DURATION.reveal,
  as = "div",
  className = "",
}: Readonly<RevealProps>) {
  const Tag = motion[as as "div"] ?? motion.div;

  return (
    <Tag
      data-motion-entrance=""
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={VIEWPORT}
      transition={{ duration, delay: LEAD_IN + stagger(index) + delay, ease: EASE }}
      className={className}
    >
      {children}
    </Tag>
  );
}
