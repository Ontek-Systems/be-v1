"use client";

import Image from "next/image";
import { Reveal } from "@/components/common/Reveal";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";

export interface DestinationExperienceRowProps {
  index: number;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

/**
 * One thing worth doing in a region, image one side and copy the other, with
 * the sides swapping on every other row.
 *
 * The alternation only exists from lg. Below that the image always leads,
 * because a reversed stack on a phone puts the copy above a picture it is
 * describing and reads as a mistake.
 */
export function DestinationExperienceRow({
  index,
  title,
  description,
  imageSrc,
  imageAlt,
}: Readonly<DestinationExperienceRowProps>) {
  const isReversed = index % 2 === 1;

  return (
    <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16 xl:gap-20">
      <Reveal
        x={isReversed ? 24 : -24}
        y={0}
        className={`relative ${isReversed ? "lg:order-2" : ""}`}
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden shadow-[0_40px_80px_-45px_rgba(39,73,87,0.75)] sm:aspect-[16/10]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </Reveal>

      <Reveal index={1} className={`text-center lg:text-left ${isReversed ? "lg:order-1" : ""}`}>
        <span className="font-display text-4xl font-bold leading-none text-primary-gold sm:text-5xl">
          {String(index + 1).padStart(2, "0")}
          <span className="text-primary-navy">.</span>
        </span>

        <Heading as="h3" size="md" className="mt-6">
          {title}
        </Heading>

        <Text size="lg" className="mx-auto mt-5 max-w-xl text-primary-navy/85 lg:mx-0">
          {description}
        </Text>
      </Reveal>
    </div>
  );
}
