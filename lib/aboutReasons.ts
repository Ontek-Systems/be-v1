import type { AboutFeatureSplitProps } from "@/components/common/AboutFeatureSplit";
import { basePath } from "@/lib/siteConfig";

const photo = (file: string) =>
  `${basePath}/assets/images/testimonials/${encodeURIComponent(`WhatsApp Image 2026-09-02 at ${file}.webp`)}`;

/**
 * The "Why book with us" argument on the About page, one reason per full
 * width split. Every photograph is one of Emma's own holiday pictures, and
 * every fact is from the table in COPYWRITING.md §11.
 */
export const aboutReasons: Omit<AboutFeatureSplitProps, "imageSide" | "tone">[] = [
  {
    number: "01",
    title: "A real person, seven days a week",
    paragraphs: [
      "Every enquiry is answered by Emma or Sylvia personally, by phone, email or WhatsApp, seven days a week.",
      "We stay in touch while you are away as well, so if a flight is delayed or a transfer does not arrive, you have a number to ring and someone who already knows your booking.",
    ],
    imageSrc: photo("16.57.18"),
    imageAlt: "Emma on the deck of a boat off the coast of Dubai",
    imageClassName: "object-[50%_35%]",
  },
  {
    number: "02",
    title: "Honeymoons, safaris and destination weddings",
    paragraphs: [
      "These are the trips we plan most often, along with proposals, family holidays and milestone birthdays, and they are the ones where the detail matters most, from the room with the view to the timing of a sunset dinner.",
      "Right now Emma is organising a wedding in Cyprus for 70 guests, and this month she flies out with the couple to look at venues together.",
      "We travel a lot ourselves, and recent trips have taken Emma to Sicily, Kefalonia, Dubai and Australia.",
    ],
    imageSrc: photo("16.45.47 (5)"),
    imageAlt: "Emma in the front seat of a light aircraft on a scenic flight in Australia",
    imageClassName: "object-[50%_45%]",
  },
  {
    number: "03",
    title: "Protected, and well connected",
    paragraphs: [
      "Every holiday we book is ABTA protected and ATOL bonded, under ABTA P8691 and ATOL 5790, so your money is safe from the moment you pay your deposit.",
      "We are also members of Azure Indies, a tour operator in its own right, which gives us access to over 600 suppliers and the kind of relationships that help when plans need to change at short notice.",
    ],
    imageSrc: photo("16.36.20"),
    imageAlt: "Emma in a wide brimmed sun hat on a terrace above the town",
    imageClassName: "object-[50%_30%]",
  },
  {
    number: "04",
    title: "Clear pricing, with no hidden fees",
    paragraphs: [
      "The price we quote you is the price you pay. There are no hidden fees or admin charges, and you pay nothing extra for the time we spend planning your trip.",
      "We are not tied to any hotel group or airline, so every recommendation we make is based on what suits you.",
    ],
    imageSrc: photo("16.47.10 (5)"),
    imageAlt: "Emma in a pink cap beside the water on a clear day",
    imageClassName: "object-[50%_30%]",
  },
];
