"use client";

import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/common/Reveal";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { TripEnquiryForm } from "@/components/common/TripEnquiryForm";
import { ContactMethodPanel } from "@/components/common/ContactMethodPanel";

export function ContactFormSection() {
  return (
    <section id="contact-form" className="relative overflow-hidden bg-primary-cream section-y">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.6fr_1fr] lg:items-start lg:gap-16">
          <Reveal className="text-center lg:text-left">
            <SectionEyebrow>Enquiries</SectionEyebrow>
            <Heading as="h2" size="lg">
              Tell us what you have in mind
            </Heading>
            <Text size="lg" className="mx-auto mt-[13px] max-w-2xl text-primary-navy lg:mx-0">
              Fill in as much or as little as you like, because a rough idea of when and roughly
              where is enough to start with, and we will come back to you within two working days
              with some initial thoughts.
            </Text>

            {/* White card on the cream ground, matching the homepage contact
                block, with the gold rule sitting on the top edge. */}
            <div className="relative mt-10 bg-white p-7 text-left shadow-xl sm:p-10">
              <span className="absolute inset-x-0 top-0 h-1 bg-primary-gold" aria-hidden="true" />
              <TripEnquiryForm
                idPrefix="contact-page"
                tone="onWhite"
                successBody="We have got your message and will come back to you within two working days. If anything changes, or you would rather just talk it through, you can reach us on"
              />
            </div>
          </Reveal>

          <ContactMethodPanel />
        </div>
      </Container>
    </section>
  );
}
