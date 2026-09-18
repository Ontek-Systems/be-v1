import { basePath } from "@/lib/siteConfig";
import { caseStudies } from "@/lib/caseStudies";
import { galleryImages } from "@/lib/galleryImages";

export interface ClientPhoto {
  src: string;
  alt: string;
}

const CLIENTS = `${basePath}/assets/images/testimonials`;

/** Photographs clients sent with reviews that aren't already in a case study or the gallery. */
const extras: ClientPhoto[] = [
  { src: `${CLIENTS}/bethany-flynn-greece-emerald-water.webp`, alt: "Clear emerald water below a wooded headland in Greece, photographed by a client" },
  { src: `${CLIENTS}/bethany-flynn-greece-fine-dining.webp`, alt: "Scallops and a glass of white wine at dinner in Greece" },
  { src: `${CLIENTS}/claire-torr-switzerland-chalet-river.webp`, alt: "A mountain river running between chalets in the Swiss Alps" },
  { src: `${CLIENTS}/helen-flynn-sicily-balcony-view.webp`, alt: "A terrace looking out over the sea on the Sicilian coast" },
  { src: `${CLIENTS}/sheryl-sharratt-cyprus-paphos-resort.webp`, alt: "The resort in Paphos lit up at night, sunloungers along the path" },
  { src: `${CLIENTS}/matt-carrigan-mount-kilimanjaro.webp`, alt: "Cloud clearing over the mountains above a town in Tanzania" },
  { src: `${CLIENTS}/matt-carrigan-ngorongoro-crater.webp`, alt: "Wildflowers and grassland under a big sky at the Ngorongoro Crater" },
];

/** Every review and testimonial photograph we hold, deduplicated. Only ever real client pictures. */
export const clientPhotos: ClientPhoto[] = Array.from(
  new Map(
    [
      ...galleryImages.filter((image) => image.source === "client"),
      ...caseStudies.flatMap((study) => study.photos),
      ...extras,
    ].map((photo) => [photo.src, { src: photo.src, alt: photo.alt }]),
  ).values(),
);
