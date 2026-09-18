import { basePath } from "@/lib/siteConfig";

export interface Testimonial {
  id: string;
  /** As the reviewer signs it, or their Google name where they don't. */
  name: string;
  /** Where they went, or who planned it when the review doesn't say. */
  destination: string;
  consultant: "Emma" | "Sylvia";
  /**
   * Roughly when the review went up, as YYYY-MM. Google only gives "2 months
   * ago", so these were worked back from screenshots taken on 13 Sept 2026.
   * Only used to keep the list newest first.
   */
  reviewed: string;
  /** A passage lifted word for word from the Google review. Never tidied, only emoji left out. */
  quote: string;
  /**
   * The client's own photograph where they posted one with their review,
   * otherwise the site photograph that best suits the trip.
   */
  imageSrc: string;
  imageAlt: string;
  /** Tailwind object position, for wide banners whose subject is off centre. */
  imagePosition?: string;
}

const PHOTOS = `${basePath}/assets/images/testimonials`;
const STOCK = `${basePath}/assets/images/ALL-IMAGES/Full%20Images`;
const HOLIDAY = `${basePath}/assets/images/holiday-types/misc`;
const DEST = `${basePath}/assets/images/destinations`;
const HERO = `${basePath}/assets/images/hero`;

/**
 * Every Google review bar Bethany Flynn's (Emma's son's partner, left off at
 * Emma's request). Written in any order: the export sorts newest first.
 */
const reviews: Testimonial[] = [
  {
    id: "sheryl-sharratt-cyprus",
    name: "Sheryl Sharratt",
    destination: "Paphos, Cyprus",
    consultant: "Sylvia",
    reviewed: "2026-08",
    quote:
      "The booking was effortless our travel agentt sylvia broxston was amazing she went above and beyond to make sure our holiday was percect.",
    imageSrc: `${HOLIDAY}/all-inclusive-resort-pool-cabanas.webp`,
    imageAlt: "Loungers and parasols beside a wide resort pool",
  },
  {
    id: "jess-rodden",
    name: "Jess Rodden",
    destination: "Planned by Sylvia",
    consultant: "Sylvia",
    reviewed: "2026-08",
    quote:
      "It was the little touches that meant a lot such as giving us a wallet for our passports and organising for us to have a bottle of bubbly in our hotel room for when we arrived.",
    imageSrc: `${HOLIDAY}/villa-poolside-loungers-wine.webp`,
    imageAlt: "Loungers, towels and two glasses of wine at the pool edge",
  },
  {
    id: "matt-carrigan-tanzania",
    name: "Matt Carrigan",
    destination: "Tanzania and Zanzibar",
    consultant: "Emma",
    reviewed: "2026-07",
    quote:
      "Emma meticulously planned our multi-stop trip which involved a 2-day safari, 4 hotel stays and 5 different flights.",
    imageSrc: `${basePath}/assets/images/case_studies/matt_carrigan/matt-carrigan-safari-guide-viewpoint.webp`,
    imageAlt: "Matt with their safari guide at a viewpoint high above the Tanzanian plains",
  },
  {
    id: "kathleen-bell",
    name: "Kathleen Bell",
    destination: "Planned by Sylvia",
    consultant: "Sylvia",
    reviewed: "2026-06",
    quote:
      "There was four adults & two children in our group & Sylvia found the perfect hotel that had everything we wanted & also in a great location.",
    imageSrc: `${HOLIDAY}/family-walking-beach-together.webp`,
    imageAlt: "Three generations walking together across a sunlit beach",
  },
  {
    id: "julia-porter-australia",
    name: "Julia Porter",
    destination: "Australia",
    consultant: "Emma",
    reviewed: "2026-03",
    quote:
      "When our tickets were ready she personally came to our house & we all got on so well & everything was in paper copy & every question was answered such a lovely easy to deal with lady !",
    imageSrc: `${STOCK}/blissful-escapes-travel-agent-image-44.webp`,
    imageAlt: "Aerial view of the coral formations of the Great Barrier Reef",
  },
  {
    id: "donna-brown-thailand",
    name: "Donna Brown",
    destination: "Phuket, Elephant Hills and Krabi",
    consultant: "Emma",
    reviewed: "2026-02",
    quote:
      "Not only was the quote cheaper, the care and attention that went into personalising our requests was above all expectations.",
    imageSrc: `${PHOTOS}/donna-brown-elephant-hills-thailand.webp`,
    imageAlt: "Three elephants at the rail at Elephant Hills, limestone cliffs behind",
  },
  {
    id: "howa308-tenerife",
    name: "Howa308 varmint",
    destination: "Costa Adeje, Tenerife",
    consultant: "Sylvia",
    reviewed: "2026-02",
    quote:
      "Planned this holiday with Sylvia as a surprise 50th Birthday for my Wife. We had a great holiday in tenerife, Costa Adeje.",
    imageSrc: `${PHOTOS}/howard-tenerife-resort-sunset.webp`,
    imageAlt: "Sunset over the pool and palms of the resort in Costa Adeje",
  },
  {
    id: "grant-poppy-mauritius",
    name: "Grant and Poppy",
    destination: "Honeymoon in Mauritius",
    consultant: "Emma",
    reviewed: "2025-11",
    quote:
      "Emma is professional, kind and genuinely cares about you as both a customer and a person. You are not just “another booking” in her diary, she will go above and beyond.",
    imageSrc: `${HOLIDAY}/beach-couple-walking-shoreline.webp`,
    imageAlt: "Two people walking barefoot along the shoreline",
  },
  {
    id: "neil-warnock",
    name: "Neil Warnock",
    destination: "Planned by Emma",
    consultant: "Emma",
    reviewed: "2025-09",
    quote:
      "From the moment I reached out, she went above and beyond to create the perfect trip, tailored exactly to my needs.",
    imageSrc: `${STOCK}/blissful-escapes-travel-agent-image-40.webp`,
    imageAlt: "The shadow of a plane passing over a white beach and clear water",
    imagePosition: "object-[15%_50%]",
  },
  {
    id: "ethan-robson-maldives",
    name: "Ethan Robson",
    destination: "Honeymoon in the Maldives",
    consultant: "Emma",
    reviewed: "2025-09",
    quote:
      "Emma has constantly dealt with our barage of questions and always found answers for us with absolutely 0 complaints. Made us feel at ease and we cannot wait for our dream holiday all thanks to her.",
    imageSrc: `${DEST}/indian-ocean/overwater-villas-heron.webp`,
    imageAlt: "A heron in the shallows below overwater villas in the Maldives at sunset",
  },
  {
    id: "eddie-smith-paris",
    name: "Eddie Smith",
    destination: "A weekend in Paris",
    consultant: "Emma",
    reviewed: "2025-09",
    quote:
      "Everything was seamless, from the travel and accommodation to the little touches that made the trip for us, extra special.",
    imageSrc: `${STOCK}/blissful-escapes-travel-agent-image-99.webp`,
    imageAlt: "A couple at a candlelit dinner table for two",
  },
  {
    id: "jordan-king-peru-costa-rica",
    name: "Jordan King",
    destination: "Peru and Costa Rica",
    consultant: "Emma",
    reviewed: "2025-09",
    quote:
      "Emma was fantastic in arranging all the various bits of the trip and even included many recommendations which was appreciated.",
    imageSrc: `${STOCK}/blissful-escapes-travel-agent-image-107.webp`,
    imageAlt: "Rafters paddling through white water in a rocky river gorge",
  },
  {
    id: "mel-shaw",
    name: "Mel Shaw",
    destination: "Planned by Emma",
    consultant: "Emma",
    reviewed: "2025-09",
    quote: "Let her know my budget and ideal location and she found exactly what we were looking for.",
    imageSrc: `${HOLIDAY}/beach-palms-sand-sunset.webp`,
    imageAlt: "Palm trees above rippled sand in the last of the light",
  },
  {
    id: "jeremy-simm-australia-dubai",
    name: "Jeremy Simm",
    destination: "Australia and Dubai",
    consultant: "Emma",
    reviewed: "2025-09",
    quote:
      "The unique detail of my trip could not have been accommodated by a regular travel agent/consultant and no stone was left unturned.",
    imageSrc: `${HERO}/dubai-palm-jumeirah-aerial.webp`,
    imageAlt: "Aerial view of the Palm Jumeirah in Dubai",
  },
  {
    id: "jayne-wilkinson",
    name: "Jayne Wilkinson",
    destination: "Planned by Emma",
    consultant: "Emma",
    reviewed: "2025-09",
    quote:
      "Excellent service. Emma is professional and so helpful. She listened to our requirements and found us a holiday that was just right. Thank you Emma",
    imageSrc: `${STOCK}/blissful-escapes-travel-agent-image-30.webp`,
    imageAlt: "Clear turquoise water framed by palm fronds",
  },
  {
    id: "james",
    name: "James",
    destination: "Planned by Emma",
    consultant: "Emma",
    reviewed: "2025-09",
    quote:
      "Fantastic service, went above and beyond to find us our dream holiday, nothing was to much trouble and will definitely be using Emma for all our future holidays",
    imageSrc: `${HOLIDAY}/villa-private-pool-garden.webp`,
    imageAlt: "A private villa pool and shaded dining terrace in the sun",
  },
  {
    id: "clair-blackhurst-iceland",
    name: "Clair Blackhurst",
    destination: "Iceland",
    consultant: "Emma",
    reviewed: "2024-09",
    quote:
      "Emma could not have done enough for our trip, Emma took care of absolutely everything, nothing was to much trouble.",
    imageSrc: `${PHOTOS}/clair-blackhurst-gullfoss-waterfall-iceland.webp`,
    imageAlt: "Gullfoss half frozen in its canyon under winter snow",
  },
  {
    id: "helen-flynn-sicily",
    name: "Helen Flynn",
    destination: "Sicily",
    consultant: "Emma",
    reviewed: "2024-09",
    quote:
      "Amazing is all I can say , a volcano erupted 1 days before our flight, emma was there to find everything our for us.",
    imageSrc: `${PHOTOS}/helen-flynn-cefalu-cathedral-square.webp`,
    imageAlt: "Cefalù Cathedral and its square in the evening sun",
  },
  {
    id: "kelsey-wright",
    name: "Kelsey Wright",
    destination: "Planned by Emma",
    consultant: "Emma",
    reviewed: "2024-09",
    quote:
      "She was able to guide me with where to go and the best places to stay that met our holiday needs!",
    imageSrc: `${HOLIDAY}/beach-parasols-turquoise-aerial.webp`,
    imageAlt: "White parasols lined along the sand beside clear turquoise water",
  },
  {
    id: "mike-gall",
    name: "Mike Gall",
    destination: "Planned by Emma",
    consultant: "Emma",
    reviewed: "2024-09",
    quote:
      "I had a quote direct with the holiday/travel company and Emma has gone above and beyond and not only got back to me on a Sunday, has beaten the price too.",
    imageSrc: `${HOLIDAY}/all-inclusive-poolside-drink.webp`,
    imageAlt: "A cold drink held up beside a bright blue pool",
  },
  {
    id: "helen-jones-south-america",
    name: "Helen Jones",
    destination: "Machu Picchu, Galápagos and Costa Rica",
    consultant: "Emma",
    reviewed: "2024-09",
    quote:
      "Thank you Emma for really listening to and fulfilling our needs whilst carefully planning our trip to South America, in 2025, trekking Machu Pichu then onto the Galápagos Islands and Costa Rica.",
    imageSrc: `${STOCK}/blissful-escapes-travel-agent-image-46.webp`,
    imageAlt: "The Machu Picchu citadel with mountains rising behind",
  },
  {
    id: "siobhan-p",
    name: "Siobhan P",
    destination: "Planned by Emma",
    consultant: "Emma",
    reviewed: "2024-09",
    quote:
      "emma can’t do enough for you she’s there what ever time of the day or night to answer any questions goes above and beyond to make sure everything is perfect!",
    imageSrc: `${HOLIDAY}/solo-looking-out-to-sea.webp`,
    imageAlt: "A woman in a sun hat looking out across bright turquoise sea",
  },
  {
    id: "claire-torr-switzerland",
    name: "Claire Torr",
    destination: "Italian lakes and Switzerland",
    consultant: "Emma",
    reviewed: "2023-09",
    quote:
      "We wanted to do a two centre holiday in the Italian lakes and Switzerland and the advice and information she gave and her genuine help which went above and beyond was so needed.",
    imageSrc: `${PHOTOS}/claire-torr-switzerland-alpine-terrace.webp`,
    imageAlt: "A sun terrace looking out to snow capped Alpine peaks",
  },
  {
    id: "julie-scotland",
    name: "Julie Scotland",
    destination: "Planned by Emma",
    consultant: "Emma",
    reviewed: "2023-09",
    quote:
      "She found a couple of brilliant options and I'm booked. Her knowledge, experience & guidance was just what I needed and I couldn't recommend her highly enough!",
    imageSrc: `${HOLIDAY}/solo-poolside-sun-hat.webp`,
    imageAlt: "A woman in a wide straw hat resting at the edge of a pool",
  },
  {
    id: "paul-cleland",
    name: "Paul Cleland",
    destination: "Planned by Emma",
    consultant: "Emma",
    reviewed: "2023-09",
    quote:
      "Wonderful personal service from Emma. Understood exactly what we wanted, and delivered a holiday way above my expectation at a price the usual suspects could not get near. Thanks Emma",
    imageSrc: `${HOLIDAY}/villa-clifftop-pools-aerial.webp`,
    imageAlt: "Villas and private pools set along a rocky coastline",
  },
  {
    id: "mark-robson-egypt",
    name: "Mark Robson",
    destination: "Family holiday to Egypt",
    consultant: "Emma",
    reviewed: "2023-09",
    quote:
      "Emma was understanding and listened to everything we had on our wish list and has exceeded what we wanted",
    imageSrc: `${STOCK}/blissful-escapes-travel-agent-image-73.webp`,
    imageAlt: "Camels crossing desert dunes at sunset",
  },
  {
    id: "ruby-munro-barcelona",
    name: "Ruby Munro",
    destination: "Barcelona",
    consultant: "Emma",
    reviewed: "2023-09",
    quote: "Amazing service. Extremely helpful and very knowledgeable about our destination.. 5star plus..",
    imageSrc: `${PHOTOS}/ruby-munro-barcelona-sagrada-familia.webp`,
    imageAlt: "The spires of the Sagrada Família against a blue sky",
  },
];

/** Newest first. The sort is stable, so reviews from the same month keep Google's order. */
export const testimonials = [...reviews].sort((a, b) => b.reviewed.localeCompare(a.reviewed));
