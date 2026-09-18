"use client";

import { Reveal } from "@/components/common/Reveal";
import { CaseStudyPhotoPanel } from "@/components/common/CaseStudyPhotoPanel";
import { CaseStudyStoryCarousel } from "@/components/common/CaseStudyStoryCarousel";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Heading } from "@/components/ui/Heading";
import type { CaseStudy } from "@/lib/caseStudies";

export interface CaseStudyFeatureProps {
  caseStudy: CaseStudy;
  index: number;
}

/**
 * One case study as a full width split: the story on one half, the client's
 * photographs edge to edge on the other. From lg the whole thing is held to a
 * single screen, which is why the story is a carousel rather than one long
 * column. Photographs lead below lg, and each study swaps sides and alternates
 * the ground. The id makes each study linkable.
 */
export function CaseStudyFeature({ caseStudy, index }: Readonly<CaseStudyFeatureProps>) {
  const imageOnRight = index % 2 === 0;
  const tone = index % 2 === 0 ? "bg-primary-cream" : "bg-white";

  return (
    <section
      id={caseStudy.id}
      className={`grid scroll-mt-28 grid-cols-1 overflow-hidden lg:min-h-[calc(100svh-var(--header-total))] lg:grid-cols-2 ${tone}`}
    >
      <CaseStudyPhotoPanel
        photos={caseStudy.photos}
        className={`h-64 sm:h-80 md:h-[26rem] lg:h-auto ${imageOnRight ? "lg:order-2" : ""}`}
      />

      <div className="flex items-center justify-center px-5 py-12 sm:px-8 sm:py-14 md:px-12 lg:justify-start lg:px-14 lg:py-12 xl:px-20 2xl:px-24">
        <Reveal x={imageOnRight ? -28 : 28} y={0} className="w-full max-w-xl text-center lg:text-left">
          <SectionEyebrow>{caseStudy.destination}</SectionEyebrow>

          <Heading as="h3" size="md">
            {caseStudy.title}
          </Heading>

          <CaseStudyStoryCarousel caseStudy={caseStudy} className="mt-8" />
        </Reveal>
      </div>
    </section>
  );
}
