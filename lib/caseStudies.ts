import { testimonials } from "@/lib/testimonials";
import { basePath } from "@/lib/siteConfig";

export interface CaseStudyPhoto {
  src: string;
  alt: string;
  /** Tailwind object position, e.g. "object-[50%_80%]", when the centre of the frame is not the subject. */
  position?: string;
}

export interface CaseStudy {
  /** Matches the review's id in lib/testimonials, so the carousel can leave it out. */
  id: string;
  name: string;
  destination: string;
  title: string;
  /** Who travelled and what the trip was, one line. */
  occasion: string;
  /** What they asked for, in their own words where the review gives them. */
  brief: string;
  /** What Emma or Sylvia actually did. Only facts the review or the photographs support. */
  arranged: string;
  /** The full review as left on Google, verbatim. Never tidy it. Blank lines (\\n\\n) keep the reviewer's own paragraph breaks. */
  review: string;
  consultant: string;
  /** Photographs the client posted with their review. The first one leads. */
  photos: CaseStudyPhoto[];
}

const MATT = `${basePath}/assets/images/case_studies/matt_carrigan`;
const CLIENTS = `${basePath}/assets/images/testimonials`;

export const caseStudies: CaseStudy[] = [
  {
    id: "matt-carrigan-tanzania",
    name: "Matt Carrigan",
    destination: "Tanzania and Zanzibar",
    title: "Two days on safari, then the Zanzibar coast",
    occasion: "A multi stop trip for two through Tanzania and on to Zanzibar, planned to a set budget.",
    brief:
      "Matt wanted “the perfect itinerary which suited our budget”, with time on safari and time on the beach, and a route that made sense of both.",
    arranged:
      "Emma planned the route end to end, from the two day safari to four hotel stays and five separate flights, including an internal flight by light aircraft, and she stayed on hand throughout the trip to answer questions as they came up.",
    review:
      "Thank you to Emma at Blissful Escapes for organising our amazing trip to Tanzania and Zanzibar. Emma meticulously planned our multi-stop trip which involved a 2-day safari, 4 hotel stays and 5 different flights. Emma helped us pick out the perfect itinerary which suited our budget, leading to a seamless travelling experience and unforgettable memories! Emma remained on hand throughout the trip to assist with any questions we had, and her bespoke service and travel agent experience really did prove useful. 10/10, would highly recommend!",
    consultant: "Emma",
    photos: [
      { src: `${MATT}/matt-carrigan-safari-guide-viewpoint.webp`, alt: "Matt with their safari guide at a viewpoint high above the Tanzanian plains" },
      {
        src: `${MATT}/matt-carrigan-lions.webp`,
        alt: "Lions feeding in the long grass, seen over the roof of a safari vehicle in Tanzania",
        position: "object-[50%_78%]",
      },
      { src: `${MATT}/matt-carrigan-buffalo.webp`, alt: "A large herd of buffalo grazing across open plains in Tanzania" },
      { src: `${MATT}/matt-carrigan-land-cruisers.webp`, alt: "Safari Land Cruisers parked at a lodge in the green Tanzanian hills" },
      { src: `${MATT}/matt-carrigan-light-aircraft.webp`, alt: "A light aircraft on the apron at dusk, ready for an internal flight in Tanzania" },
      { src: `${MATT}/matt-carrigan-hotel-window.webp`, alt: "Matt at the window of his hotel room in Tanzania, green hills beyond the glass" },
      { src: `${MATT}/matt-carrigan-grassland.webp`, alt: "Wildflowers and open grassland under a heavy sky on safari" },
      { src: `${MATT}/matt-carrigan-safari-vehicle-roof.webp`, alt: "Standing up through the open roof of a safari vehicle between game drives" },
      { src: `${MATT}/matt-carrigan-mountains-evening.webp`, alt: "Evening cloud gathering over the mountains in northern Tanzania" },
      { src: `${MATT}/matt-carrigan-zanzibar-palms.webp`, alt: "Tall palms against a clear blue sky in Zanzibar" },
    ],
  },
  {
    id: "donna-brown-thailand",
    name: "Donna Brown",
    destination: "Phuket, Elephant Hills and Krabi",
    title: "Christmas in Thailand with the children",
    occasion:
      "Christmas in Thailand for Donna, her husband and their two children, aged 12 and 9. It was also a special birthday for her husband, and the children's first long haul flight.",
    brief:
      "Donna had priced Thailand over Christmas herself and found it “extortionate”. She wanted Phuket, Elephant Hills and Krabi with a tour of the Phi Phi Islands, and a first hotel with “a bit of luxury”, close to the beach and town but far enough away to feel peaceful.",
    arranged:
      "Emma came in cheaper, chose Amari Phuket and arranged a two bedroom suite there for the birthday, set up every transfer through Destination Asia, and finished the trip in a private villa near Ao Nang Beach. She kept in touch throughout, rang a few weeks before they left to confirm the itinerary, and gave a family new to long haul travel the confidence to go.",
    review:
      "Honestly don’t know where to start. I knew I wanted to go to Thailand over Christmas (2 adults, 2 children ages 12 and 9) but prices were extortionate. A work colleague recommended getting in touch with Emma so we did. Not only was the quote cheaper, the care and attention that went into personalising our requests was above all expectations. We wanted to go to Phuket, Elephant Hills and Krabi (including a tour of the Phi Phi Islands). Emma kept in touch throughout the booking process and when we finally got to within a few weeks of going Emma rang to confirm our itinerary. Everything was spot on.\n\nTransfer from the airport to the hotel was exactly where it was supposed to be. They even waited around for us after an hours delay.\n\nFirst hotel in Phuket was just as we asked - a bit of luxury, close enough to the beach and main town but far enough away to feel the peace and tranquillity. Amari Phuket was just that. Felt like Emma hand picked it to tick all our boxes for us. As it was a special birthday for my husband Emma also arranged for an amazing 2 bedroom suite which was beyond any form of luxury we have ever experienced!\n\nTransfers were all arranged by Emma through Destination Asia. Every trip and journey was on time and comfortable.\n\nElephant Hills was a phenomenal experience that I don’t think we’ll ever top. So much more than ‘just’ the elephant experience.\n\nFinal stay was in a private villa, close enough to Ao Nang Beach but far enough away for peace and quiet. Host was lovely and very attentive.\n\nAs we were travelling with kids for the first time on a long haul flight we didn’t really know how it would go but Emma gave us every reassurance to give us the confidence to just do it. We’ve all now got the buzz for the next tropical holiday (including my holiday grinch of a husband) and we will be booking again through Emma. She made us all feel extremely special and if we were the most important people in the moment. Loved this experience",
    consultant: "Emma",
    photos: [
      { src: `${CLIENTS}/donna-brown-elephant-hills-thailand.webp`, alt: "Three elephants leaning on the rail at Elephant Hills, limestone cliffs and jungle behind" },
      { src: `${CLIENTS}/donna-brown-thailand-christmas-dinner.webp`, alt: "Christmas dinner laid out under palms and fairy lights beside the sea in Phuket" },
      { src: `${CLIENTS}/donna-brown-phuket-amari-beach.webp`, alt: "Donna's son running along the beach below Amari Phuket" },
      { src: `${CLIENTS}/donna-brown-krabi-longtail-boats.webp`, alt: "Longtail boats pulled up on a Krabi beach at sunset below limestone cliffs" },
    ],
  },
  {
    id: "howa308-tenerife",
    name: "Howa308 varmint",
    destination: "Costa Adeje, Tenerife",
    title: "A surprise fiftieth in Tenerife",
    occasion:
      "A surprise 50th birthday holiday in Costa Adeje, planned by a husband who had not been abroad for over 25 years.",
    brief:
      "He wanted the surprise to go right for his wife, and after so long away he wanted someone to take care of every part of it and give him good advice along the way.",
    arranged:
      "Sylvia planned the holiday with him from start to finish, took care of every arrangement, advised him on the choices and made sure it all went smoothly, which he says it did. They stayed high above the coast, in a resort of palms and terraced pools looking out to sea.",
    review:
      "Planned this holiday with Sylvia as a surprise 50th Birthday for my Wife. I hadn't been abroad for over 25 years Sylvia was amazing and couldn't do enough for me, took care everything, offered great advice, and made sure it all went very smoothly, which it did. We had a great holiday in tenerife, Costa Adeje. Thankyou Sylvia, everything you did was very much appreciated!",
    consultant: "Sylvia",
    photos: [
      { src: `${CLIENTS}/howard-tenerife-resort-sunset.webp`, alt: "Sunset over the pool, palms and rooftops of the resort in Costa Adeje" },
      { src: `${CLIENTS}/howard-tenerife-pool-daytime.webp`, alt: "Terraced pools and palms stepping down towards the sea in Costa Adeje" },
    ],
  },
  {
    id: "clair-blackhurst-iceland",
    name: "Clair Blackhurst",
    destination: "Iceland",
    title: "Gullfoss, the Blue Lagoon and the northern lights",
    occasion: "A winter trip to Iceland, with time in Reykjavik and days out into the snow.",
    brief:
      "Clair wanted the whole trip taken off her hands, with the excursions, the transport and the hotel chosen around her party rather than bought off the shelf.",
    arranged:
      "Emma booked the hotel, the transport and the excursions. Clair's photographs show where they went: Gullfoss half frozen in its canyon, a day out on the snowfields in helmets and snowsuits, the Blue Lagoon, the view over Reykjavik from Hallgrímskirkja, and a night under the northern lights.",
    review:
      "Huge Thank you to Emma, from blissful escapes, Emma could not have done enough for our trip, Emma took care of absolutely everything, nothing was to much trouble. Booking the best excursions, transport and a beautiful hotel. Emma made the whole trip person centred to us. It was absolutely amazing. We can’t thank you enough.",
    consultant: "Emma",
    photos: [
      { src: `${CLIENTS}/clair-blackhurst-gullfoss-waterfall-iceland.webp`, alt: "Gullfoss half frozen in its canyon under winter snow" },
      { src: `${CLIENTS}/clair-blackhurst-snowmobile-iceland.webp`, alt: "Clair in a helmet and snowsuit out on an open snowfield in Iceland" },
      { src: `${CLIENTS}/clair-blackhurst-northern-lights-iceland.webp`, alt: "The northern lights glowing green over dark trees" },
      { src: `${CLIENTS}/clair-blackhurst-blue-lagoon-restaurant.webp`, alt: "A restaurant with tall windows looking straight out onto the Blue Lagoon" },
      { src: `${CLIENTS}/clair-blackhurst-hallgrimskirkja-church.webp`, alt: "Hallgrímskirkja church in Reykjavik under a bright sky" },
      { src: `${CLIENTS}/clair-blackhurst-reykjavik-aerial.webp`, alt: "Coloured rooftops of Reykjavik running down to the harbour" },
      { src: `${CLIENTS}/clair-blackhurst-blue-lagoon-sign.webp`, alt: "The Blue Lagoon sign standing in a lava field" },
      { src: `${CLIENTS}/clair-blackhurst-reykjavik-street.webp`, alt: "Shops lit up along a Reykjavik street at dusk" },
    ],
  },
];

const caseStudyIds = new Set(caseStudies.map((caseStudy) => caseStudy.id));

/** Every review that is not already told in full as a case study. */
export const carouselTestimonials = testimonials.filter((testimonial) => !caseStudyIds.has(testimonial.id));

/**
 * Case studies alternate cream and white starting on cream, so the reviews band
 * after them takes whichever ground the last study did not, and the two never
 * run together into one block.
 */
export const reviewsBandTone = caseStudies.length % 2 === 1 ? "bg-white" : "bg-primary-cream";
