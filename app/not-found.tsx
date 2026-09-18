import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { PageMain } from "@/components/layout/PageMain";
import { Container } from "@/components/layout/Container";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { contactPhoneDisplay, contactPhoneHref } from "@/lib/contactDetails";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

/**
 * Replaces the stock Next.js 404, which arrived unstyled and unbranded and,
 * because GitHub Pages serves 404.html for every unmatched path, was the page a
 * mistyped URL landed on.
 */
export default function NotFound() {
  return (
    <>
      <Header solid />
      <PageMain>
        <section className="section-y-lg pt-[calc(var(--header-total)+4rem)]">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <SectionEyebrow align="centered">404</SectionEyebrow>
              <Heading as="h1" size="lg" className="mt-6">
                This page has moved or gone
              </Heading>
              <Text size="lg" className="mx-auto mt-6 max-w-xl text-primary-navy">
                Whatever you were after is not at this address, though the destinations we plan,
                the types of trips we specialise in and our contact details are all still here. If
                it is quicker to ask, Emma is on{" "}
                <a
                  href={`tel:+${contactPhoneHref}`}
                  className="font-semibold underline-offset-2 hover:underline"
                >
                  {contactPhoneDisplay}
                </a>{" "}
                seven days a week.
              </Text>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                <ButtonLink href="/" fullWidthOnMobile>
                  Back to the homepage
                </ButtonLink>
                <ButtonLink href="/contact" variant="ghost" fullWidthOnMobile>
                  Start planning a trip
                </ButtonLink>
              </div>
            </div>
          </Container>
        </section>
      </PageMain>
      <Footer />
    </>
  );
}
