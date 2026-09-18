"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Text } from "@/components/ui/Text";
import { DURATION, EASE, LEAD_IN, VIEWPORT, stagger } from "@/lib/motion";
import type { Faq } from "@/lib/faqs";

export interface FaqItemProps {
  faq: Faq;
  index: number;
  panelId: string;
}

/** One question, opening in place. Separated by ground colour, never a rule. */
export function FaqItem({ faq, index, panelId }: Readonly<FaqItemProps>) {
  const [isOpen, setIsOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  /* Navy on hover and when open, with the text flipping to white to match. */
  const surface = isOpen
    ? "bg-primary-navy text-white shadow-[0_24px_60px_-30px_rgba(39,73,87,0.5)]"
    : "bg-primary-cream text-primary-navy hover:bg-primary-navy hover:text-white";

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: DURATION.reveal, delay: LEAD_IN + stagger(index, 0.07), ease: EASE }}
      className={`group relative transition-[background-color,color,box-shadow] duration-300 ease-out ${surface}`}
    >
      {/* Gold marker on the open item, so a long two column list still shows
          at a glance which one you expanded. */}
      <span
        aria-hidden="true"
        className={`absolute left-0 top-0 h-full w-1 origin-top bg-primary-gold transition-transform duration-500 ease-out ${
          isOpen ? "scale-y-100" : "scale-y-0"
        }`}
      />

      <h3>
        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="flex w-full cursor-pointer items-center justify-between gap-5 p-7 text-left font-display text-lg font-bold leading-snug tracking-tight text-inherit focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-gold sm:p-8 sm:text-xl"
        >
          {faq.question}
          <span
            aria-hidden="true"
            className={`relative h-4 w-4 shrink-0 text-primary-gold transition-transform duration-500 ease-out ${
              isOpen ? "rotate-135" : ""
            }`}
          >
            <span className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-current" />
            <span className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-current" />
          </span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            initial={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { height: "auto", opacity: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: DURATION.base, ease: EASE }}
            className="overflow-hidden"
          >
            <Text size="sm" className="px-7 pb-7 text-white/85 sm:px-8 sm:pb-8">
              {faq.answer}
            </Text>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
