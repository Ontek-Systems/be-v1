import type { Metadata } from "next";
import { pageMetadata } from "@/lib/pageMetadata";
import { notFound } from "next/navigation";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { PageMain } from "@/components/layout/PageMain";
import { BreadcrumbJsonLd } from "@/components/common/BreadcrumbJsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { DestinationIntroSection } from "@/components/sections/destinations/DestinationIntroSection";
import { DestinationExperiencesSection } from "@/components/sections/destinations/DestinationExperiencesSection";
import { PlanningNotesSection } from "@/components/sections/PlanningNotesSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { OtherDestinationsSection } from "@/components/sections/destinations/OtherDestinationsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { destinationDetails, getDestinationDetail } from "@/lib/destinationDetails";

interface DestinationPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return destinationDetails.map((destination) => ({ slug: destination.slug }));
}

export async function generateMetadata({ params }: DestinationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestinationDetail(slug);

  if (!destination) return { title: "Not found" };

  return pageMetadata({
    title: destination.name,
    description: destination.metaDescription,
    path: `/destinations/${destination.slug}/`,
    image: destination.heroImage,
    imageAlt: destination.heroImageAlt,
  });
}

export default async function DestinationPage({ params }: DestinationPageProps) {
  const { slug } = await params;
  const destination = getDestinationDetail(slug);

  if (!destination) notFound();

  return (
    <>
      <BreadcrumbJsonLd
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Destinations", path: "/destinations/" },
          { name: destination.name, path: `/destinations/${destination.slug}/` },
        ]}
      />
      <Header />
      <PageMain>
        <PageHero
          eyebrow="Destinations"
          title={destination.name}
          intro={destination.tagline}
          imageSrc={destination.heroImage}
          imageAlt={destination.heroImageAlt}
          footnote={destination.countries.slice(0, 4).join(", ")}
        />

        <DestinationIntroSection
          name={destination.name}
          intro={destination.intro}
          highlights={destination.highlights}
          countries={destination.countries}
          imageSrc={destination.introImage}
          imageAlt={destination.introImageAlt}
        />

        <DestinationExperiencesSection
          experiences={destination.experiences}
          images={destination.gallery}
        />

        <PlanningNotesSection
          eyebrow="Planning notes"
          title="Before you decide"
          intro="The practical detail that shapes how a trip here feels, and the things we talk through before anything is confirmed."
          notes={destination.planning}
        />

        <FaqSection
          faqs={destination.faqs}
          idPrefix={`destination-${destination.slug}`}
          eyebrow={destination.name}
          title="Common questions"
        />

        <OtherDestinationsSection slug={destination.slug} />

        <ContactSection idPrefix="destination-contact" />
      </PageMain>
      <Footer />
    </>
  );
}
