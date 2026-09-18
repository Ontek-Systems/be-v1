import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/common/Reveal";
import { CaseStudyFeature } from "@/components/common/CaseStudyFeature";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Heading } from "@/components/ui/Heading";
import { caseStudies } from "@/lib/caseStudies";

/**
 * Built the same way as "Why book with us" on the About page: a centred
 * heading in its own band, then one full width split per case study with the
 * photographs swapping sides and the ground alternating cream and white.
 */
export function CaseStudiesSection() {
  return (
    <>
      <section className="section-y-sm bg-white">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <SectionEyebrow align="centered">Case studies</SectionEyebrow>
            <Heading as="h2" size="lg">
              The trips behind the reviews
            </Heading>
          </Reveal>
        </Container>
      </section>

      {caseStudies.map((caseStudy, index) => (
        <CaseStudyFeature key={caseStudy.id} caseStudy={caseStudy} index={index} />
      ))}
    </>
  );
}
