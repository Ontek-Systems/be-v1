"use client";

import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { FaqItem } from "@/components/common/FaqItem";
import { FaqJsonLd } from "@/components/common/FaqJsonLd";
import type { Faq } from "@/lib/faqs";

export interface FaqSectionProps {
  faqs: Faq[];
  /** Prefix for the panel ids, unique per page. */
  idPrefix: string;
  eyebrow?: string;
  title: string;
  intro?: string;
}

export function FaqSection({
  faqs,
  idPrefix,
  eyebrow = "Questions",
  title,
  intro,
}: Readonly<FaqSectionProps>) {
  return (
    <section id="faqs" className="relative overflow-hidden bg-white section-y">
      {/* Marked up alongside the visible questions, so the two never drift apart. */}
      <FaqJsonLd faqs={faqs} />
      <Container>
        <SectionHeader layout="centered" eyebrow={eyebrow} title={title} intro={intro} />

        {/* One column on a phone, two from lg. The gap does the separating,
            since nothing on the public site carries a border. */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5 lg:items-start">
          {faqs.map((faq, index) => (
            <FaqItem
              key={faq.question}
              faq={faq}
              index={index}
              panelId={`${idPrefix}-faq-${index}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
