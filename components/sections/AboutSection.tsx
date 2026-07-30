"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { TrustBadges } from "@/components/ui/TrustBadges";

interface CredentialItem {
  value: string;
  label: string;
}

const credentials: CredentialItem[] = [
  { value: "4+", label: "Years in travel" },
  { value: "600+", label: "Trusted suppliers" },
  { value: "7 days", label: "A week, always available" },
];

export function AboutSection() {
  return (
    <section id="about" className="section-y">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center">
          {/* Text, left on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <SectionEyebrow>About Us</SectionEyebrow>
            <Heading as="h2" size="lg">
              We plan the holidays we would want to take ourselves.
            </Heading>

            <div className="mt-[22px] space-y-5">
              <Text size="base" className="text-primary-navy leading-relaxed">
                Blissful Escapes is run out of Ormskirk, Lancashire, right between Liverpool and Manchester, by someone who has spent the last four years doing one thing properly: planning proper holidays for people who deserve better than a brochure. No call centre, no script, just straight talking and a lot of graft behind the scenes.
              </Text>
              <Text size="base" className="text-primary-navy leading-relaxed">
                The speciality is honeymoons, safaris, and the big milestone trips, the ones where the details actually matter. Over 600 trusted suppliers across luxury, adventure, wellbeing and fully inclusive stays mean you get matched to the right hotel, the right route and the right price, not whichever package pays the best commission.
              </Text>
              <Text size="base" className="text-primary-navy leading-relaxed">
                The best bit of the job is hearing how a trip actually went, not just how it was booked. Tell me what matters to you, and I will sort the rest.
              </Text>
            </div>

            {/* Credentials row */}
            <div className="mt-10 flex flex-wrap gap-8">
              {credentials.map((cred) => (
                <div key={cred.label}>
                  <p className="font-display text-3xl font-bold text-primary-navy">{cred.value}</p>
                  <p className="mt-1 text-sm text-primary-sky">{cred.label}</p>
                </div>
              ))}
            </div>

            <TrustBadges className="mt-8" />
          </motion.div>

          {/* Image, right on desktop, video ready slot */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="relative"
          >
            {/*
              Video-ready slot: swap the inner <Image> for a <video> element
              and this wrapper stays the same. The aspect-[3/4] wrapper
              constrains both equally.
            */}
            <div className="relative aspect-[3/4] w-full overflow-hidden sm:aspect-[4/5] lg:aspect-[3/4]">
              <Image
                src="/be-v1/assets/images/emma.jpg"
                alt="Emma, founder of Blissful Escapes"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
