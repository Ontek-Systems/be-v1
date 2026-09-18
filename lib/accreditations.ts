import { basePath } from "@/lib/siteConfig";

export interface Accreditation {
  alt: string;
  /** White artwork on transparent, for dark grounds. */
  src: string;
  /** Intrinsic size, so each mark keeps its own proportions. */
  width: number;
  height: number;
}

const WHITE = `${basePath}/assets/images/legals/white`;

export const accreditations: Accreditation[] = [
  { alt: "ABTA, travel with confidence", src: `${WHITE}/abta.webp`, width: 700, height: 280 },
  { alt: "ATOL Protected", src: `${WHITE}/atol.webp`, width: 700, height: 700 },
  { alt: "IATA", src: `${WHITE}/iata.webp`, width: 960, height: 630 },
  { alt: "Azure Indies", src: `${WHITE}/azure-indies.webp`, width: 600, height: 250 },
  {
    alt: "Advantage Travel Partnership Global Member",
    src: `${WHITE}/advantage.webp`,
    width: 732,
    height: 349,
  },
];
