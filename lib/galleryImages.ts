import { basePath } from "@/lib/siteConfig";

export interface GalleryImage {
  src: string;
  alt: string;
  aspectRatio: "tall" | "wide" | "square";
  /**
   * Where the photograph actually came from. COPYWRITING.md §12 is explicit
   * that stock destination photography must never be presented as a client
   * picture, so the gallery filter reads this rather than guessing from the path.
   */
  source: "client" | "destination";
}

const DESTINATIONS = `${basePath}/assets/images/ALL-IMAGES/Full%20Images`;
const CLIENTS = `${basePath}/assets/images/testimonials`;

export const galleryImages: GalleryImage[] = [
  { src: `${DESTINATIONS}/blissful-escapes-travel-agent-image-22.webp`, alt: "Clifftop terrace overlooking the Bay of Naples in Capri", aspectRatio: "wide", source: "destination" },
  { src: `${CLIENTS}/donna-brown-phuket-amari-beach.webp`, alt: "A client walking the shoreline at the Amari beach in Phuket", aspectRatio: "tall", source: "client" },
  { src: `${DESTINATIONS}/blissful-escapes-travel-agent-image-11.webp`, alt: "Aerial view of a Maldives atoll, turquoise lagoon and reef", aspectRatio: "square", source: "destination" },
  { src: `${CLIENTS}/clair-blackhurst-snowmobile-iceland.webp`, alt: "A client in a snowsuit on a glacier snowmobile trip in Iceland", aspectRatio: "tall", source: "client" },
  { src: `${DESTINATIONS}/blissful-escapes-travel-agent-image-113.webp`, alt: "Santorini windmill and whitewashed village at golden hour", aspectRatio: "wide", source: "destination" },
  { src: `${CLIENTS}/donna-brown-thailand-christmas-dinner.webp`, alt: "Clients at a beachside Christmas dinner in Thailand, tables laid under the palms", aspectRatio: "wide", source: "client" },
  { src: `${DESTINATIONS}/blissful-escapes-travel-agent-image-31.webp`, alt: "Infinity pool framing the Piton mountains in St Lucia", aspectRatio: "square", source: "destination" },
  { src: `${CLIENTS}/matt-carrigan-hotel-view.webp`, alt: "A client at the window of his hotel room in Tanzania, hills beyond the glass", aspectRatio: "tall", source: "client" },
  { src: `${DESTINATIONS}/blissful-escapes-travel-agent-image-59.webp`, alt: "Hot air balloons drifting over the rock formations of Cappadocia at sunrise", aspectRatio: "tall", source: "destination" },
  { src: `${CLIENTS}/bethany-flynn-greece-seafood-lunch.webp`, alt: "A shared seafood lunch on a table in Greece, mussels and calamari between two people", aspectRatio: "tall", source: "client" },
  { src: `${DESTINATIONS}/blissful-escapes-travel-agent-image-9.webp`, alt: "Herd of elephants crossing a wide river at sunset", aspectRatio: "wide", source: "destination" },
  { src: `${CLIENTS}/clair-blackhurst-blue-lagoon-restaurant.webp`, alt: "Clients at the Blue Lagoon restaurant in Iceland, windows onto the water", aspectRatio: "wide", source: "client" },
  { src: `${DESTINATIONS}/blissful-escapes-travel-agent-image-7.webp`, alt: "Aerial view of a coastal village with terracotta rooftops in Croatia", aspectRatio: "square", source: "destination" },
  { src: `${CLIENTS}/helen-flynn-cefalu-cathedral-square.webp`, alt: "The cathedral square at Cefalu in Sicily, photographed by a client", aspectRatio: "tall", source: "client" },
  { src: `${DESTINATIONS}/blissful-escapes-travel-agent-image-26.webp`, alt: "Palm Jumeirah from above at dusk, Dubai", aspectRatio: "square", source: "destination" },
  { src: `${CLIENTS}/claire-torr-switzerland-alpine-terrace.webp`, alt: "A drink on a chalet terrace in the Swiss Alps, mountains across the valley", aspectRatio: "tall", source: "client" },
  { src: `${DESTINATIONS}/blissful-escapes-travel-agent-image-46.webp`, alt: "Machu Picchu citadel at sunrise with mist rising from the valley", aspectRatio: "square", source: "destination" },
  { src: `${CLIENTS}/matt-carrigan-lions-safari.webp`, alt: "Lions resting in the grass on a game drive in Tanzania, photographed by a client", aspectRatio: "tall", source: "client" },
  { src: `${DESTINATIONS}/blissful-escapes-travel-agent-image-82.webp`, alt: "Aerial view of Venice canals and historic buildings", aspectRatio: "tall", source: "destination" },
  { src: `${CLIENTS}/donna-brown-krabi-longtail-boats.webp`, alt: "Longtail boats moored at dusk in Krabi, Thailand", aspectRatio: "wide", source: "client" },
  { src: `${DESTINATIONS}/blissful-escapes-travel-agent-image-44.webp`, alt: "Aerial view of the coral formations of the Great Barrier Reef", aspectRatio: "wide", source: "destination" },
  { src: `${CLIENTS}/clair-blackhurst-northern-lights-iceland.webp`, alt: "The northern lights over Iceland, photographed by a client", aspectRatio: "tall", source: "client" },
  { src: `${DESTINATIONS}/blissful-escapes-travel-agent-image-16.webp`, alt: "Paraglider soaring above the turquoise Antalya coast, Turkey", aspectRatio: "square", source: "destination" },
  { src: `${CLIENTS}/claire-torr-switzerland-cable-car.webp`, alt: "A cable car climbing above alpine meadows and chalets in Switzerland", aspectRatio: "tall", source: "client" },
  { src: `${DESTINATIONS}/blissful-escapes-travel-agent-image-112.webp`, alt: "Lake Voulismeni in Agios Nikolaos, Crete, with colourful waterfront buildings", aspectRatio: "tall", source: "destination" },
  { src: `${CLIENTS}/howard-tenerife-resort-sunset.webp`, alt: "Sunset over the pool and rooftops of a resort in Tenerife", aspectRatio: "wide", source: "client" },
  { src: `${DESTINATIONS}/blissful-escapes-travel-agent-image-33.webp`, alt: "Pristine palm fringed beach in the Seychelles", aspectRatio: "square", source: "destination" },
  { src: `${CLIENTS}/bethany-flynn-greece-boat-cove.webp`, alt: "A boat anchored in a clear green cove in Greece", aspectRatio: "tall", source: "client" },
  { src: `${DESTINATIONS}/blissful-escapes-travel-agent-image-18.webp`, alt: "Singapore skyline and Marina Bay Sands at night", aspectRatio: "wide", source: "destination" },
  { src: `${CLIENTS}/helen-flynn-sicily-marina-harbor.webp`, alt: "Yachts at anchor in a Sicilian harbour, seen from the coast path", aspectRatio: "tall", source: "client" },
  { src: `${DESTINATIONS}/blissful-escapes-travel-agent-image-72.webp`, alt: "Golden Gate Bridge at sunset, San Francisco", aspectRatio: "square", source: "destination" },
  { src: `${CLIENTS}/matt-carrigan-zanzibar-beach.webp`, alt: "Palms along the beach in Zanzibar, photographed by a client", aspectRatio: "tall", source: "client" },
  { src: `${DESTINATIONS}/blissful-escapes-travel-agent-image-2.webp`, alt: "Aerial view of Antigua harbour with yachts at anchor", aspectRatio: "square", source: "destination" },
  { src: `${CLIENTS}/ruby-munro-barcelona-sagrada-familia.webp`, alt: "The Sagrada Familia in Barcelona, photographed by a client", aspectRatio: "tall", source: "client" },
];

/**
 * The homepage collage opens on the first twelve gallery images, plus a few
 * square client photos to close the gaps the grid leaves at the bottom right.
 * `only` limits a tile to the breakpoints where it's needed to square the grid off.
 */
export interface CollageTile extends GalleryImage {
  only?: "sm" | "not-sm";
}

export const homepageCollage: CollageTile[] = [
  ...galleryImages.slice(0, 12),
  { src: `${CLIENTS}/bethany-flynn-greece-emerald-water.webp`, alt: "Clear emerald water below a wooded headland in Greece, photographed by a client", aspectRatio: "square", source: "client" },
  { src: `${CLIENTS}/claire-torr-switzerland-chalet-river.webp`, alt: "A mountain river running between chalets in the Swiss Alps", aspectRatio: "square", source: "client" },
  { src: `${CLIENTS}/helen-flynn-sicily-balcony-view.webp`, alt: "A terrace looking out over the sea on the Sicilian coast", aspectRatio: "square", source: "client", only: "not-sm" },
  { src: `${CLIENTS}/sheryl-sharratt-cyprus-paphos-resort.webp`, alt: "The resort in Paphos lit up at night, sunloungers along the path", aspectRatio: "square", source: "client", only: "sm" },
  { src: `${CLIENTS}/bethany-flynn-greece-fine-dining.webp`, alt: "Scallops and a glass of white wine at dinner in Greece", aspectRatio: "square", source: "client", only: "sm" },
];
