import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import type { LegalDocument } from "@/lib/legal";

export interface LegalDocumentSectionProps {
  document: LegalDocument;
}

const linkClass =
  "cursor-pointer font-semibold underline decoration-primary-gold decoration-2 underline-offset-4 transition-colors duration-150 hover:text-primary-sky focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-navy";

/* Emails and the handful of public sites the documents mention. */
const linkPattern = /([\w.+]+@[\w-]+\.[\w.]+\w|(?:ico\.org\.uk|abta\.com|gov\.uk\/[\w-]+))/g;

function withLinks(text: string): ReactNode[] {
  return text.split(linkPattern).map((part, index) => {
    if (index % 2 === 0) return part;
    const href = part.includes("@") ? `mailto:${part}` : `https://www.${part}`;
    return (
      <a key={part + index} href={href} className={linkClass}>
        {part}
      </a>
    );
  });
}

/**
 * A long reading page: the privacy policy and the terms. A single narrow
 * column, numbered headings so a section can be referred to on the phone, and
 * nothing else competing for attention.
 */
export function LegalDocumentSection({ document }: Readonly<LegalDocumentSectionProps>) {
  return (
    <section className="section-y-lg pt-[calc(var(--header-total)+4rem)]">
      <Container>
        <div className="mx-auto max-w-3xl">
          <SectionEyebrow>Legal</SectionEyebrow>
          <Heading as="h1" size="lg" className="mt-6">
            {document.title}
          </Heading>
          <Text size="lg" className="mt-6 text-primary-navy">
            {document.intro}
          </Text>
          <p className="mt-6 text-[0.68rem] font-bold uppercase tracking-[0.207em] text-primary-sky">
            Last updated {document.lastUpdated}
          </p>

          <div className="mt-14 flex flex-col gap-12 sm:mt-16">
            {document.sections.map((section, index) => (
              <div key={section.heading} className="sm:grid sm:grid-cols-[4rem_1fr] sm:gap-4">
                <p
                  aria-hidden="true"
                  className="font-display text-2xl font-bold leading-tight text-primary-navy sm:text-3xl"
                >
                  {String(index + 1).padStart(2, "0")}
                  <span className="text-primary-gold">.</span>
                </p>
                <div>
                  <Heading as="h2" size="sm" className="mt-2 sm:mt-0">
                    {section.heading}
                  </Heading>
                  <div className="mt-4 flex flex-col gap-4 text-primary-navy">
                    {section.paragraphs.map((paragraph) => (
                      <Text key={paragraph}>{withLinks(paragraph)}</Text>
                    ))}
                    {section.list && (
                      <ul className="flex flex-col gap-2 pl-5 text-base leading-relaxed marker:text-primary-gold lg:text-lg list-disc">
                        {section.list.map((item) => (
                          <li key={item}>{withLinks(item)}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
