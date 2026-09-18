import { holidayTypeDetails } from "@/lib/holidayTypeDetails";

export interface HolidayType {
  slug: string;
  label: string;
  tagline: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: string;
}

export const holidayTypes: HolidayType[] = holidayTypeDetails.map((detail) => ({
  slug: detail.slug,
  label: detail.name,
  tagline: detail.tagline,
  imageSrc: detail.heroImage,
  imageAlt: detail.heroImageAlt,
  imagePosition: detail.heroImagePosition,
}));
