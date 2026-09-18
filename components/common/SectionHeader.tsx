"use client";

import { Reveal } from "@/components/common/Reveal";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

export interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  intro?: string;
  /** "stacked" is the homepage header: centred on a phone, left aligned from lg.
   *  There is deliberately no split variant. Heading on one side and intro on
   *  the other broke one thought into two blocks and matched nothing else. */
  layout?: "stacked" | "centered";
  dark?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  intro,
  layout = "stacked",
  dark = false,
  className = "",
}: Readonly<SectionHeaderProps>) {
  const headingTone = dark ? "text-white" : "";
  const introTone = dark ? "text-primary-cream" : "text-primary-navy";
  const isCentered = layout === "centered";

  return (
    <Reveal
      className={`mb-12 sm:mb-16 ${isCentered ? "mx-auto max-w-3xl text-center" : "text-center lg:text-left"} ${className}`}
    >
      <SectionEyebrow dark={dark} align={isCentered ? "centered" : "left"}>
        {eyebrow}
      </SectionEyebrow>
      <Heading as="h2" size="lg" className={`${headingTone} ${isCentered ? "" : "lg:max-w-4xl"}`}>
        {title}
      </Heading>
      {intro && (
        <Text size="lg" className={`mx-auto mt-[13px] max-w-2xl ${introTone} ${isCentered ? "" : "lg:mx-0"}`}>
          {intro}
        </Text>
      )}
    </Reveal>
  );
}
