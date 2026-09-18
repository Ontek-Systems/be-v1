"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "@/components/common/Reveal";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { ContactPersonLink } from "@/components/common/ContactPersonLink";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { PersonIcon } from "@/components/ui/PersonIcon";
import { reachableContactPeople } from "@/lib/contactDetails";
import { DURATION, EASE, stagger } from "@/lib/motion";
import type { Person } from "@/lib/people";

export interface AboutPersonPanelProps {
  person: Person;
  index: number;
}

/**
 * One half of the About hero, a full screen tall portrait with the bio on a
 * black scrim at the foot of it. Without a photograph the panel stays plain
 * navy with a small figure, until the holiday picture arrives.
 */
export function AboutPersonPanel({ person, index }: Readonly<AboutPersonPanelProps>) {
  const { name, role, bio, imageSrc, imageAlt, imageClassName = "object-center" } = person;
  const contact = reachableContactPeople.find((entry) => name.startsWith(entry.name));

  return (
    <article className="group relative flex min-h-svh flex-col justify-end overflow-hidden bg-primary-navy lg:h-full lg:min-h-0">
      {imageSrc ? (
        <motion.div
          data-motion-entrance=""
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: DURATION.hero, delay: stagger(index, 0.15), ease: EASE }}
          className="absolute inset-0"
        >
          <Image
            src={imageSrc}
            alt={imageAlt ?? name}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className={`object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03] ${imageClassName}`}
          />
        </motion.div>
      ) : (
        <PersonIcon className="absolute left-1/2 top-[34%] h-24 w-24 -translate-x-1/2 -translate-y-1/2 text-primary-cream/25 sm:h-28 sm:w-28" />
      )}

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/65 via-45% to-transparent to-85%"
      />

      {/* The scrim alone does not carry white type over a bright sea, so the
          whole block also carries the shared hero shadow, the same one as every
          other hero. */}
      <Reveal
        index={index + 1}
        className="hero-text-shadow relative mx-auto max-w-xl px-6 text-center lg:mx-0 lg:text-left pb-14 xs:px-8 sm:px-12 sm:pb-16 lg:px-14 lg:pb-20 xl:px-20 xl:pb-24"
      >
        <SectionEyebrow dark underlineColor="gold">
          {role}
        </SectionEyebrow>

        <Heading as="h2" size="lg" className="text-white">
          {name}
        </Heading>

        <div className="mt-6 space-y-4">
          {bio.map((paragraph) => (
            <Text key={paragraph.slice(0, 32)} size="lg" className="text-white">
              {paragraph}
            </Text>
          ))}
        </div>

        {contact && (
          <ContactPersonLink
            person={contact}
            className="mt-8 inline-flex items-center gap-2.5 text-base font-semibold text-white transition-colors duration-300 hover:text-primary-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-gold"
          />
        )}
      </Reveal>
    </article>
  );
}
