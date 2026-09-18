import type { Faq } from "@/lib/faqs";
import { jsonLdScript } from "@/lib/jsonLd";

export interface FaqJsonLdProps {
  faqs: Faq[];
}

/**
 * FAQPage markup for the questions already rendered on the page.
 *
 * Only ever emit this where the same questions and answers are visible to a
 * reader: marking up content that is not on the page is what turns a rich
 * result into a manual action.
 */
export function FaqJsonLd({ faqs }: Readonly<FaqJsonLdProps>) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      /* The visible headings drop the question mark as a house style choice;
         structured data is read by a parser, not a designer. */
      name: faq.question.endsWith("?") ? faq.question : `${faq.question}?`,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(data) }} />
  );
}
