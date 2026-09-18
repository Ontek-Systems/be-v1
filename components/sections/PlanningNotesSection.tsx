"use client";

import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/common/Reveal";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import type { PlanningNote } from "@/lib/planningNote";

export interface PlanningNotesSectionProps {
  eyebrow: string;
  title: string;
  intro: string;
  notes: PlanningNote[];
}

/**
 * The practical detail on a region or holiday type page, set as a long read on
 * navy: the heading holds its place on the left while the notes run down the
 * right, separated by space rather than rules.
 */
export function PlanningNotesSection({
  eyebrow,
  title,
  intro,
  notes,
}: Readonly<PlanningNotesSectionProps>) {
  return (
    <section className="relative bg-primary-navy section-y-lg">
      <Container>
        <div className="grid grid-cols-1 gap-12 sm:gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          {/* Holds the heading in the middle of the space left below the fixed header. */}
          <div className="lg:sticky lg:top-[var(--header-total)] lg:flex lg:h-[calc(100dvh-var(--header-total))] lg:items-center lg:self-start">
            <Reveal className="text-center lg:text-left">
              <SectionEyebrow dark>{eyebrow}</SectionEyebrow>
              <Heading as="h2" size="lg" className="text-white">
                {title}
              </Heading>
              <Text size="lg" className="mx-auto mt-[13px] max-w-md text-primary-cream/85 lg:mx-0">
                {intro}
              </Text>
            </Reveal>
          </div>

          {/* Below lg the notes read as one numbered list under the centred
              heading, numeral in its own gutter, rather than three more
              underlined headings that each looked like a new section. */}
          <ol className="mx-auto w-full max-w-2xl space-y-10 sm:space-y-12 lg:max-w-none lg:space-y-16">
            {notes.map((note, index) => (
              <Reveal
                key={note.title}
                as="li"
                index={index}
                className="grid grid-cols-[2.5rem_1fr] gap-x-4 sm:grid-cols-[4rem_1fr] sm:gap-x-6 lg:block"
              >
                <span
                  aria-hidden="true"
                  className="font-display text-3xl font-bold leading-none text-primary-gold sm:text-5xl lg:hidden"
                >
                  {String(index + 1).padStart(2, "0")}
                  <span className="text-white">.</span>
                </span>

                <div>
                  <Heading
                    as="h3"
                    size="sm"
                    className="text-white lg:underline lg:decoration-primary-gold lg:decoration-2 lg:underline-offset-[0.4em]"
                  >
                    {note.title}
                  </Heading>
                  <Text size="lg" className="mt-3 max-w-2xl text-primary-cream/85 sm:mt-4 lg:mt-6">
                    {note.description}
                  </Text>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
