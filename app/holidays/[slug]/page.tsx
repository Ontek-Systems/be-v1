import type { Metadata } from "next";
import { pageMetadata } from "@/lib/pageMetadata";
import { notFound } from "next/navigation";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { PageMain } from "@/components/layout/PageMain";
import { BreadcrumbJsonLd } from "@/components/common/BreadcrumbJsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { HolidayTypeIntroSection } from "@/components/sections/holidays/HolidayTypeIntroSection";
import { HolidayTypeFeaturesSection } from "@/components/sections/holidays/HolidayTypeFeaturesSection";
import { HolidayTypeGallerySection } from "@/components/sections/holidays/HolidayTypeGallerySection";
import { PlanningNotesSection } from "@/components/sections/PlanningNotesSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { OtherHolidayTypesSection } from "@/components/sections/holidays/OtherHolidayTypesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { getHolidayTypeDetail, holidayTypeDetails } from "@/lib/holidayTypeDetails";

interface HolidayTypePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return holidayTypeDetails.map((holidayType) => ({ slug: holidayType.slug }));
}

export async function generateMetadata({ params }: HolidayTypePageProps): Promise<Metadata> {
  const { slug } = await params;
  const holidayType = getHolidayTypeDetail(slug);

  if (!holidayType) return { title: "Not found" };

  return pageMetadata({
    title: holidayType.name,
    description: holidayType.metaDescription ?? holidayType.intro[0],
    path: `/holidays/${holidayType.slug}/`,
    image: holidayType.heroImage,
    imageAlt: holidayType.heroImageAlt,
  });
}

export default async function HolidayTypePage({ params }: HolidayTypePageProps) {
  const { slug } = await params;
  const holidayType = getHolidayTypeDetail(slug);

  if (!holidayType) notFound();

  return (
    <>
      <BreadcrumbJsonLd
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Types of trips", path: "/holidays/" },
          { name: holidayType.name, path: `/holidays/${holidayType.slug}/` },
        ]}
      />
      <Header />
      <PageMain>
        <PageHero
          eyebrow="Types of trips"
          title={holidayType.name}
          intro={holidayType.intro[0]}
          imageSrc={holidayType.heroImage}
          imageAlt={holidayType.heroImageAlt}
          imageClassName={holidayType.heroImagePosition}
          footnote="Over 600 suppliers. ABTA protected"
        />

        <HolidayTypeIntroSection
          name={holidayType.name}
          intro={holidayType.intro}
          idealFor={holidayType.idealFor}
          imageSrc={holidayType.secondaryImage}
          imageAlt={holidayType.secondaryImageAlt}
          secondaryImageSrc={holidayType.galleryImages[0].src}
          secondaryImageAlt={holidayType.galleryImages[0].alt}
        />

        <HolidayTypeFeaturesSection
          features={holidayType.features}
          imageSrc={holidayType.galleryImages[2].src}
          imageAlt={holidayType.galleryImages[2].alt}
        />

        <HolidayTypeGallerySection images={holidayType.galleryImages} />

        <PlanningNotesSection
          eyebrow="Planning notes"
          title="Getting the detail right"
          intro="Where it works, when to go and how we shape it: the things worth settling before anything is confirmed."
          notes={holidayType.planning}
        />

        <FaqSection
          faqs={holidayType.faqs}
          idPrefix={`holiday-${holidayType.slug}`}
          eyebrow={holidayType.name}
          title="Common questions"
        />

        <OtherHolidayTypesSection slug={holidayType.slug} />

        <ContactSection idPrefix="holiday-type-contact" />
      </PageMain>
      <Footer />
    </>
  );
}
