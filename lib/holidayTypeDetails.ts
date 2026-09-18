import { basePath } from "@/lib/siteConfig";
import type { Faq } from "@/lib/faqs";
import type { PlanningNote } from "@/lib/planningNote";

export interface HolidayTypeFeature {
  title: string;
  description: string;
}

export interface HolidayGalleryImage {
  src: string;
  alt: string;
  title: string;
}

export interface HolidayTypeDetail {
  slug: string;
  name: string;
  /** Short evocative line shown under the name on the hero */
  tagline: string;
  watermark: string;
  heroImage: string;
  heroImageAlt: string;
  /** Tailwind object position class for the homepage card crop, when the subject is off centre */
  heroImagePosition?: string;
  secondaryImage: string;
  secondaryImageAlt: string;
  galleryImages: HolidayGalleryImage[];
  /**
   * The search result description, 140 to 160 characters. Optional: most of
   * these leads already sit near that length, so only the ones that run long
   * carry an override. See DestinationDetail.metaDescription.
   */
  metaDescription?: string;
  /** Three paragraph editorial intro, first paragraph is the lead */
  intro: string[];
  /** Three quiet features describing how we plan this kind of trip */
  features: HolidayTypeFeature[];
  /** Short phrases describing who this style of holiday suits */
  idealFor: string[];
  /** Three practical notes on where, when and how this kind of trip works. */
  planning: PlanningNote[];
  /** Four questions specific to this kind of trip. */
  faqs: Faq[];
}

export const holidayTypeDetails: HolidayTypeDetail[] = [
  {
    slug: "adventure-touring",
    name: "Adventure & Touring",
    tagline: "Several countries in one trip, paced so nothing is rushed",
    watermark: "ADVENTURE",
    heroImage: `${basePath}/assets/images/holiday-types/Adventure%20%26%20Touring/pexels-mary-154780734-11056211.webp`,
    heroImageAlt: "Two people paragliding tandem above a lagoon and a long white beach",
    secondaryImage: `${basePath}/assets/images/holiday-types/Adventure%20%26%20Touring/pexels-mehmet-altintas-392989477-32863936.webp`,
    secondaryImageAlt: "Rafts lined up along a clear river under the trees",
    galleryImages: [
      { src: `${basePath}/assets/images/holiday-types/Adventure%20%26%20Touring/pexels-sam-clickx-24038849-33452256.webp`, alt: "A man on a zip line crossing a rushing waterfall", title: "Canyons and rivers" },
      { src: `${basePath}/assets/images/holiday-types/Adventure%20%26%20Touring/pexels-adempercem-35576326.webp`, alt: "A paraglider under a red canopy drifting above islands and open sea", title: "From the air" },
      { src: `${basePath}/assets/images/holiday-types/Adventure%20%26%20Touring/pexels-pavel-danilyuk-9065469.webp`, alt: "A woman on a jetty beside inflatable rafts in a green canyon pool", title: "Out on the water" },
    ],
    intro: [
      "Some holidays are about staying still. This one is about covering ground, seeing the places you have read about and coming home with stories.",
      "We build touring itineraries with breathing room. Long enough in each place to actually feel it, short enough that the momentum never fades, with the logistics handled quietly in the background.",
      "Whether it is a first big adventure or the next one on a long list, we shape the route around your pace rather than a coach timetable.",
    ],
    features: [
      {
        title: "A route that flows",
        description:
          "We sequence the stops so travel days feel like part of the trip, not a cost of it, with rest built in where you will want it.",
      },
      {
        title: "Guides worth listening to",
        description:
          "The right local guide changes a place. We choose the ones who tell the stories the plaques leave out.",
      },
      {
        title: "The details handled",
        description:
          "Transfers, permits, early starts and luggage. Everything arranged before you land, so you just travel.",
      },
    ],
    idealFor: ["First big trips", "Multi country routes", "Curious travellers"],
    planning: [
      {
        title: "Where touring works best",
        description:
          "Touring suits countries with a lot to see in a manageable space, and each one has a natural route. Sri Lanka from the cultural triangle up into the tea country. Vietnam from Hanoi down to the Mekong. Peru through the Sacred Valley to Machu Picchu. Jordan from Petra to Wadi Rum, and the national parks of the American southwest. We build the days around the route rather than forcing a route onto the days.",
      },
      {
        title: "Private or small group",
        description:
          "A private guide and driver gives you complete control of the pace, and in Asia and South America it often costs less than people expect. Small group tours, usually of twelve to sixteen people, suit solo travellers and anyone who enjoys the company. We explain how each would work on your route and recommend the one that suits you.",
      },
      {
        title: "How active it gets",
        description:
          "Adventure means different things to different people. For some it is a gentle walk to a viewpoint, for others a four day trek at altitude. We ask about fitness, experience and your appetite for early starts, then set the activities to match, with easier options alongside the harder days so nobody in the group is left behind or held back.",
      },
    ],
    faqs: [
      {
        question: "Do I need to be very fit",
        answer:
          "No. Most touring holidays involve light walking and plenty of time in a vehicle, boat or train. Where a trip includes something more demanding, such as the Inca Trail or a volcano climb, we tell you exactly what is involved and how to prepare.",
      },
      {
        question: "How many places should we visit",
        answer:
          "Fewer than you think. We suggest two or three nights in each place as a minimum, with a longer, slower stay in the middle or at the end. Moving every day wears people out quickly and leaves no time to enjoy where you are.",
      },
      {
        question: "Can a touring trip end on a beach",
        answer:
          "Yes, and it is one of the best shapes for a first big trip. Sri Lanka then the Maldives, Vietnam then Phu Quoc, Peru then the Galapagos, or Costa Rica's rainforest then its Pacific coast. The busy days come first and the rest comes after.",
      },
      {
        question: "Is adventure travel suitable for families",
        answer:
          "Very much so, with the right choices. Costa Rica, South Africa and Jordan all work well with children, and we adjust the pace, the activities and the driving days to suit their ages.",
      },
    ],
  },
  {
    slug: "all-inclusive",
    name: "All Inclusive",
    tagline: "Resorts where the price genuinely covers what it says",
    watermark: "INCLUSIVE",
    heroImage: `${basePath}/assets/images/holiday-types/All%20Inclusive/pexels-quang-nguyen-vinh-222549-14036446.webp`,
    heroImageAlt: "A long resort pool lined with loungers and palms under a blue sky",
    secondaryImage: `${basePath}/assets/images/holiday-types/All%20Inclusive/pexels-asadphoto-30037410.webp`,
    secondaryImageAlt: "Staff in white serving drinks at a beach bar beneath thatched parasols",
    galleryImages: [
      { src: `${basePath}/assets/images/holiday-types/All%20Inclusive/pexels-mikhail-nilov-8332803.webp`, alt: "A resort with pools, parasols and a sandy cove seen from above", title: "Pools and beach" },
      { src: `${basePath}/assets/images/holiday-types/All%20Inclusive/pexels-burakeroglu3-35495070.webp`, alt: "Copper dishes laid out along a lit restaurant counter", title: "Every meal included" },
      { src: `${basePath}/assets/images/holiday-types/All%20Inclusive/pexels-vika-glitter-392079-31181770.webp`, alt: "Thatched parasols and loungers on a beach beside the sea", title: "Beach days" },
    ],
    intro: [
      "The best all inclusive holidays feel effortless rather than excessive. You settle in on day one and the trip simply takes care of itself.",
      "The difference is in the resort. We only recommend the ones where the food stays interesting all week, the service stays warm and the small print stays small.",
      "Tell us what matters most, a quiet pool, great restaurants, things for the kids, and we will match you to the place that does it well.",
    ],
    features: [
      {
        title: "Resorts we would return to",
        description:
          "We separate the genuinely good from the merely big, and tell you honestly which is which.",
      },
      {
        title: "Everything counted in",
        description:
          "We check what the price really covers, so there are no surprises waiting on the final bill.",
      },
      {
        title: "The right room, not just a room",
        description:
          "Position, view and quiet matter more at a resort than anywhere. We ask for the rooms worth having.",
      },
    ],
    idealFor: ["Easy family weeks", "Switching off completely", "Fixed budgets"],
    planning: [
      {
        title: "What the price covers",
        description:
          "All inclusive ranges from buffet meals and local drinks to premium spirits, à la carte restaurants and activities at no extra charge. Some resorts still charge for their best restaurants, spa treatments or motorised water sports. We read the small print and set out exactly what is included, so you know before you arrive rather than at checkout.",
      },
      {
        title: "Where it works best",
        description:
          "Mexico's Riviera Maya, the Dominican Republic, Jamaica, Antigua, St Lucia, Mauritius, the Maldives and Turkey all have excellent all inclusive resorts. On a Maldivian island, where there is nowhere else to eat, it is often the best value way to stay. Elsewhere we weigh it honestly against half board and eating out locally.",
      },
      {
        title: "Choosing the resort",
        description:
          "Resorts range from large, lively complexes with several pools and evening entertainment to small adults only hideaways with a handful of restaurants. We ask who is travelling and how you like to spend your days, then recommend the resorts that fit, rather than simply the biggest names.",
      },
    ],
    faqs: [
      {
        question: "Is all inclusive good value",
        answer:
          "Often, particularly for families and anyone who enjoys a drink by the pool. Where eating out is expensive or limited, it saves a great deal. Where there are good restaurants on the doorstep, half board can be the better choice, and we will tell you which applies.",
      },
      {
        question: "Do the restaurants need reserving",
        answer:
          "At many resorts, yes, for the à la carte restaurants. Some let you reserve before you travel and others only on arrival. We find out how your resort works and make whatever requests we can in advance.",
      },
      {
        question: "Are there adults only resorts",
        answer:
          "Yes, particularly in the Caribbean, Mexico and the Maldives. They are quieter, often with better dining, and suit couples, honeymoons and anniversaries.",
      },
      {
        question: "Are tips included",
        answer:
          "It varies. Some resorts include gratuities and others leave them to you, and in the Caribbean and Mexico tipping is customary. We explain the practice at your resort so you can plan for it.",
      },
    ],
  },
  {
    slug: "beach-holidays",
    name: "Beach Holidays",
    tagline: "The right stretch of coast, and the right side of it",
    watermark: "BEACH",
    heroImage: `${basePath}/assets/images/holiday-types/Beach%20Holiday/pexels-orhan-badur-253753151-17938668.webp`,
    heroImageAlt: "Swimmers and parasols along a sandy shore seen from above",
    heroImagePosition: "object-[center_72%]",
    secondaryImage: `${basePath}/assets/images/holiday-types/Beach%20Holiday/pexels-asadphoto-1450353.webp`,
    secondaryImageAlt: "Palm fronds framing a white beach and turquoise water",
    galleryImages: [
      { src: `${basePath}/assets/images/holiday-types/Beach%20Holiday/pexels-mikhail-nilov-8158179.webp`, alt: "Two women sitting on a towel on a pale sandy beach", title: "Long slow days" },
      { src: `${basePath}/assets/images/holiday-types/Beach%20Holiday/pexels-eyupcan-timur-424989336-32814569.webp`, alt: "A row of loungers and yellow parasols at the water's edge", title: "Quiet stretches" },
      { src: `${basePath}/assets/images/holiday-types/Beach%20Holiday/pexels-balazsimon-11089419.webp`, alt: "Palm trees leaning over a wide sandy beach", title: "Palm lined shores" },
    ],
    intro: [
      "A beach holiday sounds simple, which is exactly why the details matter so much. The wrong beach is just sand. The right one is the whole holiday.",
      "We know which coasts stay calm in which months, which resorts sit on the quiet end of the bay and which sunsets are worth planning dinner around.",
      "From the Caribbean to the Indian Ocean to the Mediterranean, we match the beach to the mood you are after.",
    ],
    features: [
      {
        title: "The beach itself, checked",
        description:
          "Sand, swimming, shade and crowds. We recommend beaches we know, not ones that photograph well.",
      },
      {
        title: "Timed to the season",
        description:
          "Warm seas and clear skies move around the calendar. We put you in the right place for your dates.",
      },
      {
        title: "More than a sun lounger",
        description:
          "A boat day, a beach dinner, a slow morning walk to a bay nobody else found. Small additions that make the week.",
      },
    ],
    idealFor: ["Proper rest", "Winter sun", "Couples and families alike"],
    planning: [
      {
        title: "Reading the coast",
        description:
          "The same island can have a calm coast and a wild one. Barbados has flat water on the west and Atlantic breakers on the east. Mauritius has sheltered lagoons on one side and trade winds on the other, depending on the season. Before we recommend a hotel, we check which way its beach faces and what the sea does there in your month.",
      },
      {
        title: "Sun by the month",
        description:
          "For winter sun, the Caribbean, the Maldives, Sri Lanka's south coast, Thailand's Andaman coast and Dubai. For spring and autumn, the Canaries, Cyprus, southern Spain and the Greek islands. For summer, the whole of the Mediterranean, Bali, the Seychelles and the gulf side of Thailand. Getting the month right matters more than getting the resort right.",
      },
      {
        title: "More than the lounger",
        description:
          "Even the most restful beach week is better for a few things arranged. A private boat day, dinner on the sand, a morning snorkelling trip, an afternoon in the spa. We suggest a handful and leave the rest of the week free, so there is always something to look forward to and nothing to rush.",
      },
    ],
    faqs: [
      {
        question: "Where is warm in winter",
        answer:
          "The Caribbean, the Maldives, Sri Lanka's south coast, Thailand's Andaman coast and Dubai all have reliable sunshine between November and March. The Canaries are the warmest option within a short flight, though the sea is cooler than long haul.",
      },
      {
        question: "Which beaches suit young children",
        answer:
          "Look for shallow, calm water and soft sand. The west coast of Barbados, the Maldivian lagoons, the sheltered coves of the Algarve and many Greek island beaches are ideal. We look at the beach itself, not just the hotel, before recommending anywhere for a family.",
      },
      {
        question: "Where is good for a short flight",
        answer:
          "From Manchester, the Greek islands, Cyprus, the Algarve, Mallorca and the Canaries are all within about four and a half hours. Cyprus and the Canaries stretch the season well into the autumn and winter.",
      },
      {
        question: "Can a beach week include a city",
        answer:
          "Yes. Dubai with the Maldives, Singapore with Bali, New York with the Caribbean and Lisbon with the Algarve all work well, with a few nights in the city before a week or more on the sand.",
      },
    ],
  },
  {
    slug: "cities-short-breaks",
    name: "Cities & Short Breaks",
    tagline: "Three or four nights, planned as carefully as three weeks",
    watermark: "CITIES",
    heroImage: `${basePath}/assets/images/holiday-types/Cities%20%26%20Short%20Breaks/pexels-vishpix-25539608.webp`,
    heroImageAlt: "Liberty Bridge and the Danube in Budapest lit up at night",
    secondaryImage: `${basePath}/assets/images/holiday-types/Cities%20%26%20Short%20Breaks/pexels-peg1997-30351168.webp`,
    secondaryImageAlt: "Red rattan chairs outside a café on a city street",
    galleryImages: [
      { src: `${basePath}/assets/images/holiday-types/Cities%20%26%20Short%20Breaks/pexels-silverkblack-36729887.webp`, alt: "Friends raising a toast at a rooftop table above the city", title: "Rooftop evenings" },
      { src: `${basePath}/assets/images/holiday-types/Cities%20%26%20Short%20Breaks/pexels-mo-eid-1268975-17887485.webp`, alt: "The rooftops of Paris stretching towards the Eiffel Tower", title: "Iconic skylines" },
      { src: `${basePath}/assets/images/holiday-types/Cities%20%26%20Short%20Breaks/pexels-cannontaler-16716379.webp`, alt: "The painted houses and moored boats of Nyhavn in Copenhagen lit at dusk", title: "Vibrant evenings" },
    ],
    intro: [
      "A great city break is dense with good moments. The trick is fitting them into a few days without the trip feeling like a checklist.",
      "We plan short breaks the way locals would spend a perfect weekend. The neighbourhood worth staying in, the table worth reserving, the one museum actually worth queueing for.",
      "New York, Venice, Istanbul, Singapore or somewhere you have not considered yet. Tell us the dates and we will make them count.",
    ],
    features: [
      {
        title: "Stay in the right quarter",
        description:
          "In a city, location is the luxury. We put you where the evenings happen, not beside the ring road.",
      },
      {
        title: "Arranged before you land",
        description:
          "The restaurants, shows and viewpoints that sell out are arranged in advance, so your evenings are already sorted.",
      },
      {
        title: "Room to wander",
        description:
          "We plan the anchors and leave the gaps. The best city memories are usually the unplanned ones.",
      },
    ],
    idealFor: ["Long weekends", "Anniversaries", "A quick reset"],
    planning: [
      {
        title: "Choosing the neighbourhood",
        description:
          "Where you stay decides how the city feels. In Paris, Saint Germain or the Marais. In New York, the streets near Central Park or the West Village. In Rome, the lanes around the Pantheon. We choose hotels you can walk out of straight into the life of the city, with good restaurants close by, rather than somewhere that means a taxi every evening.",
      },
      {
        title: "What to reserve ahead",
        description:
          "The Vatican Museums, the Last Supper in Milan, the Alhambra in Granada, the Sagrada Familia, Broadway shows and the best tables in any city can all go weeks ahead. We secure the ones that matter to you before you travel and leave the rest of the time open, so there is room to wander.",
      },
      {
        title: "More than a weekend",
        description:
          "We suggest three nights for most European cities, four for New York, and five or more if you want a day trip, Florence to Siena or Seville to Cordoba. Two cities joined by train, such as Rome and Florence or Amsterdam and Paris, turn a short break into a small holiday of its own.",
      },
    ],
    faqs: [
      {
        question: "Which cities suit a long weekend",
        answer:
          "Rome, Barcelona, Paris, Amsterdam, Lisbon, Prague, Seville and Copenhagen are all short flights from Manchester with plenty to fill three or four nights. Venice and Florence are especially good for couples.",
      },
      {
        question: "Can you plan a Christmas market trip",
        answer:
          "Yes. Vienna, Prague, Salzburg, Cologne and Copenhagen are among the best, with markets usually open from late November until just before Christmas. Hotels near the old towns go early, so it pays to plan ahead.",
      },
      {
        question: "Do you plan long haul city breaks",
        answer:
          "Yes. New York is the classic, and Dubai, Singapore, Marrakech and Tokyo work well too, either on their own or as part of a longer trip.",
      },
      {
        question: "Can guides and restaurants be arranged",
        answer:
          "Yes. Private guides, timed entry tickets, dinner reservations, theatre seats and airport transfers can all be arranged before you leave, so the time in the city is yours to enjoy.",
      },
    ],
  },
  {
    slug: "cruise-holidays",
    name: "Cruise Holidays",
    tagline: "Unpack once, and wake somewhere different each morning",
    watermark: "CRUISE",
    heroImage: `${basePath}/assets/images/holiday-types/Cruise%20Holiday/cruise-ship-sunset-graded.webp`,
    heroImageAlt: "A cruise ship at anchor under a burning orange sunset",
    secondaryImage: `${basePath}/assets/images/holiday-types/Cruise%20Holiday/pexels-esrageziyor-45760220-12473550.webp`,
    secondaryImageAlt: "The stern deck of a ship strung with lights above its wake",
    galleryImages: [
      { src: `${basePath}/assets/images/holiday-types/Cruise%20Holiday/pexels-id23-1442770-2852124.webp`, alt: "Looking down the side of a ship to its pool deck and the wake below", title: "Days at sea" },
      { src: `${basePath}/assets/images/holiday-types/Cruise%20Holiday/pexels-igor-milicevic-1095449-6044244.webp`, alt: "A cruise ship in a bay below mountains and clouds", title: "Harbour towns" },
      { src: `${basePath}/assets/images/holiday-types/Cruise%20Holiday/pexels-jose-parra-325935170-34748745.webp`, alt: "A cruise ship lit up at sea after dark", title: "Evenings on board" },
    ],
    metaDescription:
      "A cruise done well is one of the easiest ways to see a lot of the world. The line, the ship and the cabin decide whether you get that or a floating queue.",
    intro: [
      "A cruise done well is one of the easiest ways to see a lot of the world in comfort. A cruise done badly is a floating queue. The line, the ship and the cabin decide which one you get.",
      "We match you to the style of cruising that fits you, from small ships that slip into harbours the big ones cannot reach, to family lines where the kids never want to come home.",
      "Ocean or river, first cruise or fifteenth, we handle the flights, the cabin choice and the shore days so the whole thing just works.",
    ],
    features: [
      {
        title: "The line that fits you",
        description:
          "Every cruise line has a personality. We make sure yours matches, before anything is confirmed.",
      },
      {
        title: "The cabin worth paying for",
        description:
          "Deck, position and balcony make a real difference at sea. We know which cabins to ask for by name.",
      },
      {
        title: "Shore days, done properly",
        description:
          "We plan the ports worth exploring independently and the ones where the right excursion earns its price.",
      },
    ],
    idealFor: ["Seeing several places in one trip", "Multi generation groups", "Effortless logistics"],
    planning: [
      {
        title: "Ocean, river or expedition",
        description:
          "Ocean cruises suit anyone who wants to see several countries without packing and unpacking, and the Mediterranean, the Caribbean and the Norwegian fjords are the classic routes. River cruises on the Danube, the Rhine and the Douro are smaller and quieter, with a new town most mornings. Expedition ships go further, to Antarctica, the Galapagos and the Arctic.",
      },
      {
        title: "Choosing the cabin",
        description:
          "A balcony earns its money on scenic routes such as the fjords and Alaska. Midships on a lower deck is the steadiest place for anyone who worries about the motion. Suites often bring priority boarding, better dining and a butler. We go through the deck plans with you and recommend specific cabins rather than a category.",
      },
      {
        title: "Flights and extra nights",
        description:
          "Most cruises leave from a port some distance from home, so we arrange the flights and transfers and usually suggest a night or two in the departure city first. Barcelona, Athens, Miami and Singapore all reward the extra time, and arriving early removes the risk of a delayed flight costing you the ship.",
      },
    ],
    faqs: [
      {
        question: "Is cruising good for a first timer",
        answer:
          "Yes, provided the ship suits you. Some lines are lively and built around families, others are quiet and adult in feel, and a week in the Mediterranean or the Caribbean is an easy way to try it.",
      },
      {
        question: "Do you plan river cruises",
        answer:
          "Yes. The Danube, the Rhine, the Douro and the Seine are the classic European rivers, and further afield the Nile and the Mekong are both remarkable. River ships are small, so the best cabins go early.",
      },
      {
        question: "What does the fare include",
        answer:
          "It depends on the line. Most include meals and entertainment. Some also include drinks, gratuities, wifi and excursions, while others charge for them. We compare what is included so you can see the real cost side by side.",
      },
      {
        question: "Can we cruise with young children",
        answer:
          "Yes. Several major lines have excellent kids clubs, family cabins and water parks on board. Most set a minimum age for infants, often six months, and we check the rules for your sailing.",
      },
    ],
  },
  {
    slug: "family-holidays",
    name: "Family Holidays",
    tagline: "Room for everyone, including the two of you",
    watermark: "FAMILY",
    heroImage: `${basePath}/assets/images/holiday-types/Family%20Holiday/pexels-pixabay-39691.webp`,
    heroImageAlt: "A family on a wooden pier silhouetted against a pink sunset",
    heroImagePosition: "object-[28%_center]",
    secondaryImage: `${basePath}/assets/images/holiday-types/Family%20Holiday/pexels-wal_-172619-2156618639-36090195.webp`,
    secondaryImageAlt: "A family paddling barefoot at the water's edge in low sun",
    galleryImages: [
      { src: `${basePath}/assets/images/holiday-types/Family%20Holiday/pexels-asadphoto-3155726.webp`, alt: "A family walking along a jetty between thatched island villas", title: "Island stays" },
      { src: `${basePath}/assets/images/holiday-types/Family%20Holiday/pexels-kampus-8623327.webp`, alt: "A family of five with beach bags and a rubber ring on a sunny beach", title: "Sunset walks" },
      { src: `${basePath}/assets/images/holiday-types/Family%20Holiday/pexels-murat-halici-294274529-13286863.webp`, alt: "A family by the shore at sunset over a calm sea", title: "Safe and calm beaches" },
    ],
    metaDescription:
      "A family holiday has to work for everyone at once. The right trip gives the children their best week of the year and still feels like a holiday for you.",
    intro: [
      "A family holiday has to work for everyone at once, which is harder than any brochure admits. The right trip gives the kids their best week of the year and still feels like a holiday for you.",
      "We plan around the ages you are travelling with now. Pools and kids clubs that are genuinely good, flight times that avoid meltdowns, rooms that actually fit everyone.",
      "From easy beach weeks to bigger adventures once the kids are older, we build trips the whole family talks about afterwards.",
    ],
    features: [
      {
        title: "Planned around the ages",
        description:
          "What works with a toddler fails with a teenager. We shape every trip around the family you are travelling as today.",
      },
      {
        title: "Rooms that fit real families",
        description:
          "Connecting rooms, real space and cots confirmed in writing, not promised at check in.",
      },
      {
        title: "Time off for the adults",
        description:
          "The best family resorts give parents an actual break too. We know which ones deliver it.",
      },
    ],
    idealFor: ["School holiday escapes", "First trips with young kids", "Teens who are hard to impress"],
    planning: [
      {
        title: "Flights that work",
        description:
          "With young children, a shorter flight or a daytime departure makes a real difference. The Mediterranean, the Canaries and Cyprus are all within about four and a half hours of Manchester. Further afield, Dubai, Florida and the Caribbean have direct flights, and we look for timings that fit around naps and bedtimes.",
      },
      {
        title: "Planning around the school holidays",
        description:
          "Prices peak in the school holidays and the best family rooms go first. Planning a year ahead for the summer, and six months ahead for Easter and the October half term, gives you the widest choice. We also suggest places where the weather is good in October and February, which families often overlook.",
      },
      {
        title: "As the children grow",
        description:
          "Toddlers need a shallow pool, a good kids club and a short transfer. School age children want water parks, beaches and animals. Teenagers want some independence and something they have not done before, a safari, a road trip or a week in New York. We plan around the ages you have now and suggest what might come next.",
      },
    ],
    faqs: [
      {
        question: "Where is best with young children",
        answer:
          "Cyprus, the Canaries, the Algarve, mainland Greece and Mallorca are ideal for younger children, with short flights and warm, calm seas. For long haul, Dubai, Mauritius and the Caribbean have excellent family resorts.",
      },
      {
        question: "Can you arrange connecting rooms",
        answer:
          "We request them and, where the hotel can guarantee them, confirm them in writing. For larger families we often suggest suites, villas or apartments, which give everyone more space.",
      },
      {
        question: "Do you plan trips for several generations",
        answer:
          "Yes. Villas, large family suites and cruises work particularly well for grandparents, parents and children travelling together. We balance the plan so everyone has time together and time to themselves.",
      },
      {
        question: "Are there safaris for families",
        answer:
          "Yes. South Africa's malaria free reserves, such as Madikwe and those in the Eastern Cape, welcome children and run family programmes. Kenya and Tanzania suit older children, usually from around eight.",
      },
    ],
  },
  {
    slug: "honeymoons",
    name: "Honeymoons",
    tagline: "Planned in detail while you are busy planning a wedding",
    watermark: "HONEYMOON",
    heroImage: `${basePath}/assets/images/holiday-types/Honeymoon/honeymoon-pavilion-pool-sunset-graded.webp`,
    heroImageAlt: "A couple in a thatched pavilion beside an infinity pool at sunset",
    secondaryImage: `${basePath}/assets/images/holiday-types/Honeymoon/pexels-asadphoto-9149366.webp`,
    secondaryImageAlt: "A couple walking hand in hand along a boardwalk over turquoise water",
    galleryImages: [
      { src: `${basePath}/assets/images/holiday-types/Honeymoon/pexels-asadphoto-1024981.webp`, alt: "A couple silhouetted between two palm trees at sunset", title: "Private moments" },
      { src: `${basePath}/assets/images/holiday-types/Honeymoon/pexels-bulent-demi-r-117221664-10054059.webp`, alt: "A bride and groom in a sea cave above clear blue water", title: "Weddings abroad" },
      { src: `${basePath}/assets/images/holiday-types/Honeymoon/pexels-luca-fazzolari-1184186214-22498670.webp`, alt: "A couple watching the sun set over the lagoon in Venice", title: "City romance" },
    ],
    intro: [
      "A honeymoon carries more expectation than any other holiday, and you are usually planning it in the busiest year of your life. That is where we come in.",
      "We take the time to understand the trip you two actually want, pure rest, a little adventure, or one of each, then plan every detail so nothing lands on your list.",
      "One island done beautifully, or two contrasting stops. Either way, we make sure the trip feels like yours and the small touches land at the right moments.",
    ],
    features: [
      {
        title: "Planned while you plan a wedding",
        description:
          "We carry the whole itinerary so the honeymoon never becomes another task on the spreadsheet.",
      },
      {
        title: "The touches that matter",
        description:
          "The room upgrade quietly requested, the private dinner on the sand, the late checkout on the last morning.",
      },
      {
        title: "Rest and adventure, balanced",
        description:
          "A few days of something memorable, then the beach. The classic honeymoon shape exists because it works.",
      },
    ],
    idealFor: ["Newlyweds", "Minimoons", "Vow renewals"],
    planning: [
      {
        title: "Timing it around the wedding",
        description:
          "Many couples leave a day or two after the wedding, while others wait for the right season. A few quiet nights close to home, then the main honeymoon in the best month for your destination, works well. We plan the dates around your wedding and make sure the names on the tickets match the passports you will be travelling on.",
      },
      {
        title: "Where couples go",
        description:
          "The Maldives, Mauritius, the Seychelles, St Lucia and Bali are the classic long haul choices. A safari followed by Zanzibar or Mauritius gives you a honeymoon with two very different halves. Closer to home, the Amalfi Coast, Santorini and the Italian lakes suit a shorter trip or a minimoon.",
      },
      {
        title: "Letting the hotels know",
        description:
          "Many hotels mark a honeymoon with something, from a bottle of champagne to an upgrade when one is free. We tell each hotel you are on honeymoon and pass on anything else worth knowing, a birthday during the stay, a private dinner you would like arranged or a surprise for your partner.",
      },
    ],
    faqs: [
      {
        question: "When should we start planning",
        answer:
          "Nine to twelve months ahead is ideal, especially for the Maldives, safaris and the Caribbean in peak season. Closer to the date is still possible, with a little more flexibility on the hotel.",
      },
      {
        question: "Should we combine two destinations",
        answer:
          "It depends on how long you have. Ten days suits one place done well. Two weeks or more allows a pairing, such as Dubai and the Maldives, a safari and Zanzibar, or Sri Lanka and the Maldives, with the slower stop second.",
      },
      {
        question: "What is a minimoon",
        answer:
          "A short honeymoon, usually three to five nights, taken soon after the wedding and often followed by a longer trip later in the year. Italy, Greece and Portugal all suit one well.",
      },
      {
        question: "Do you plan proposals and weddings too",
        answer:
          "Yes. Proposals and destination weddings are both part of what we do, and we can arrange the setting and the timing so the moment goes the way you imagined it.",
      },
    ],
  },
  {
    slug: "luxury-holidays",
    name: "Luxury Holidays",
    tagline: "Hotels chosen on merit rather than on commission",
    watermark: "LUXURY",
    heroImage: `${basePath}/assets/images/holiday-types/Luxury%20Holiday/pexels-tholaal-mohamed-44739834-7903879.webp`,
    heroImageAlt: "Overwater villas curving across a turquoise atoll from above",
    secondaryImage: `${basePath}/assets/images/holiday-types/Luxury%20Holiday/pexels-quang-nguyen-vinh-222549-12387908.webp`,
    secondaryImageAlt: "An infinity pool lined with palms and cabanas running out to the sea",
    galleryImages: [
      { src: `${basePath}/assets/images/holiday-types/Luxury%20Holiday/pexels-wewe-yang-2383099-4727702.webp`, alt: "A wooden walkway circling a turquoise lagoon beside overwater villas", title: "Overwater villas" },
      { src: `${basePath}/assets/images/holiday-types/Luxury%20Holiday/pexels-gursu-37625985.webp`, alt: "Parasols and loungers on a lawn above the sea", title: "Gardens and pools" },
      { src: `${basePath}/assets/images/holiday-types/Luxury%20Holiday/pexels-ahmetkurt-12665773.webp`, alt: "Yachts anchored in a clear bay below a pine covered headland", title: "Private yachts" },
    ],
    intro: [
      "Real luxury is rarely loud. It is the transfer already waiting, the suite with the right view, the restaurant that remembers how you take your coffee by day two.",
      "We know which hotels genuinely deliver at the top end and which are simply expensive, and we will always tell you the difference.",
      "From the Maldives to Dubai to the great hotels of Europe, we plan trips where every layer, flights, rooms, dining, feels considered.",
    ],
    features: [
      {
        title: "Honest recommendations",
        description:
          "At this level everything looks beautiful online. We recommend from experience, not photography.",
      },
      {
        title: "Access and upgrades",
        description:
          "Our relationships with hotels mean the requests that matter get made, and more often than not, met.",
      },
      {
        title: "Handled door to door",
        description:
          "Lounge access, private transfers and timings that never feel tight. The travel is part of the luxury.",
      },
    ],
    idealFor: ["Milestone trips", "Once a year escapes", "Travellers who value their time"],
    planning: [
      {
        title: "What luxury means to you",
        description:
          "For some people luxury is a private villa with its own chef. For others it is a quiet suite, a good spa and nobody asking questions. For others still, it is a guide who knows every corner of a city. We start by asking what you value most, then plan the whole trip around the answer.",
      },
      {
        title: "Flights and arrivals",
        description:
          "Luxury starts before you leave. Business or first class flights, lounge access, fast track security where it is offered, private transfers and hotels that let you check in early after an overnight flight. We arrange each of these, so the travel days feel as easy as the days in between.",
      },
      {
        title: "Choosing the hotel",
        description:
          "At the top end, the differences between hotels are subtle but they matter: the service, the setting, the size and outlook of the room. We compare the great hotel groups with the independent hotels that rival them, and recommend on fit rather than on name.",
      },
    ],
    faqs: [
      {
        question: "Is there a charge for planning",
        answer:
          "No. There are no planning fees, no admin charges and no premium for the service. We are paid by the hotels and suppliers, so the advice costs you nothing.",
      },
      {
        question: "Can you secure upgrades and extras",
        answer:
          "We ask on every trip, and many hotels add something, breakfast, a resort credit or an upgrade when one is free. Nothing is guaranteed, and we tell you what has been confirmed before you travel.",
      },
      {
        question: "Where suits a first luxury holiday",
        answer:
          "The Maldives, Dubai, Mauritius and the Amalfi Coast are all good starting points, with a wide choice of hotels and easy flights. For something different, a safari in Botswana or South Africa is hard to better.",
      },
      {
        question: "Can you arrange private experiences",
        answer:
          "Yes. Private guides, yacht charters, helicopter transfers, chef's tables and after hours museum visits can all be arranged. We plan them into the itinerary rather than leaving them to the day.",
      },
    ],
  },
  {
    slug: "rail-holidays",
    name: "Rail Holidays",
    tagline: "Scenic routes and sleeper trains, reserved seat by seat",
    watermark: "RAIL",
    heroImage: `${basePath}/assets/images/holiday-types/Rail%20Holiday/pexels-oleksandr-lutsenko-416967162-16418189.webp`,
    heroImageAlt: "A red alpine train curving through pine forest below snow covered peaks",
    secondaryImage: `${basePath}/assets/images/holiday-types/Rail%20Holiday/pexels-jean-paul-wettstein-677916508-37684287.webp`,
    secondaryImageAlt: "A red train crossing a stone viaduct through the forest",
    galleryImages: [
      { src: `${basePath}/assets/images/holiday-types/Rail%20Holiday/pexels-daria-nekipelova-112078039-9731899.webp`, alt: "A sleeper compartment with its window open onto green hills", title: "Sleeper cabins" },
      { src: `${basePath}/assets/images/holiday-types/Rail%20Holiday/pexels-ketut-subiyanto-4901971.webp`, alt: "Two travellers with rucksacks on a station platform beside a train", title: "Easy connections" },
      { src: `${basePath}/assets/images/holiday-types/Rail%20Holiday/pexels-george-pak-7968275.webp`, alt: "Two travellers talking in a sleeper cabin", title: "Life on board" },
    ],
    metaDescription:
      "There is a particular pleasure in watching a country go by from a train window. No airports and no motorways, just landscape at a pace you can take in.",
    intro: [
      "There is a particular pleasure in watching a country go by from a train window. No airports, no motorways, just landscape unspooling at a pace you can actually take in.",
      "From the great scenic lines of Europe to the slow train through Sri Lanka's tea country, we build holidays around the journeys worth taking for their own sake.",
      "We handle the seat reservations, the connections and the hotels at either end, so all you do is watch the view change.",
    ],
    features: [
      {
        title: "The routes worth riding",
        description:
          "Some famous lines earn their reputation and some do not. We plan around the ones that do.",
      },
      {
        title: "The right seats, reserved",
        description:
          "Window side, direction of travel, the scenic side of the carriage. Small details that make the whole day.",
      },
      {
        title: "Stops that earn their place",
        description:
          "We pair each leg with towns and hotels worth lingering in, so the trip breathes between journeys.",
      },
    ],
    idealFor: ["Unhurried travellers", "Scenery lovers", "Anyone tired of airports"],
    planning: [
      {
        title: "The great routes",
        description:
          "The Glacier Express and the Bernina Express in Switzerland, the Rocky Mountaineer in Canada, the Venice Simplon Orient Express across Europe, the Ghan in Australia, and the hill country line from Kandy to Ella in Sri Lanka. Each is a highlight in its own right, and we build the rest of the holiday around the day you spend on it.",
      },
      {
        title: "Europe by train",
        description:
          "Eurostar from London connects to Paris, Brussels and Amsterdam, and from there to the rest of the continent. A week or two by rail through Switzerland, Italy or the Alps avoids airports entirely and turns each travel day into sightseeing. We reserve the seats, arrange luggage transfers where they exist and choose hotels close to the stations.",
      },
      {
        title: "Luxury trains",
        description:
          "Some trains are the destination in themselves, with fine dining, sleeping cabins and attentive staff. The Belmond trains, GoldLeaf on the Rocky Mountaineer and the Eastern and Oriental Express in Southeast Asia are among the best. Cabins are limited, so these need planning well in advance.",
      },
    ],
    faqs: [
      {
        question: "Do seats need reserving in advance",
        answer:
          "On many scenic and high speed trains, yes, and on the most popular routes in summer they fill early. We reserve every leg, choosing the scenic side of the carriage where it makes a difference.",
      },
      {
        question: "Can rail be combined with flights",
        answer:
          "Yes. Plenty of rail holidays fly one way and take the train the other, and long haul trips often include one great train ride alongside flights and road transfers.",
      },
      {
        question: "How much luggage can I take",
        answer:
          "Usually more than on a plane, but you will need to lift it onto the train and into the rack yourself, so a medium case and a day bag is the practical limit. On the luxury trains, bags are handled for you.",
      },
      {
        question: "Is rail travel good for families",
        answer:
          "Yes. Children tend to love it, and Switzerland makes it especially easy, with family friendly trains, reduced children's fares and short hops between towns.",
      },
    ],
  },
  {
    slug: "safari-wildlife",
    name: "Safari & Wildlife",
    tagline: "Twice daily game drives, and camps chosen for where they sit",
    watermark: "SAFARI",
    heroImage: `${basePath}/assets/images/ALL-IMAGES/Full%20Images/blissful-escapes-travel-agent-image-9.webp`,
    heroImageAlt: "A herd of elephants crossing a wide river at sunset",
    secondaryImage: `${basePath}/assets/images/holiday-types/Safari/pexels-phinley-sperrer-2163513679-39554438.webp`,
    secondaryImageAlt: "An elephant grazing in tall golden grass",
    galleryImages: [
      { src: `${basePath}/assets/images/holiday-types/Safari/pexels-gsn-travel-28708299.webp`, alt: "Safari vehicles on a red track across a crater floor", title: "Game drives" },
      { src: `${basePath}/assets/images/holiday-types/Safari/pexels-garycohen-12339600.webp`, alt: "A herd of wildebeest crossing shallow water", title: "The great herds" },
      { src: `${basePath}/assets/images/holiday-types/Safari/pexels-dropshado-15585651.webp`, alt: "A safari vehicle in golden dust and low sun between the trees", title: "The bush at last light" },
    ],
    metaDescription:
      "Twice daily game drives, a siesta through the heat, and the first time an elephant crosses the track in front of you. Kenya, Tanzania, Botswana, South Africa.",
    intro: [
      "Nothing else in travel compares to the first time an elephant crosses the track in front of your vehicle. A safari is less a holiday than an experience that stays with you.",
      "The camp, the guide and the season decide everything. We plan around all three, putting you in the right reserve at the right time of year with people who know it intimately.",
      "Many of our safaris pair the bush with a beach, a few wild days followed by a few still ones. It is a combination that is hard to better.",
    ],
    features: [
      {
        title: "Guides who make the trip",
        description:
          "A great guide turns a game drive into a story. We choose camps where the guiding is the point of pride.",
      },
      {
        title: "Seasons, taken seriously",
        description:
          "Wildlife moves with the water. We time your trip to where the animals actually are in your month.",
      },
      {
        title: "Bush and beach, paired",
        description:
          "Safari first, ocean second. We arrange the connection so the contrast feels effortless.",
      },
    ],
    idealFor: ["Once in a lifetime trips", "Photographers", "Honeymoons with a wild side"],
    planning: [
      {
        title: "Where to go",
        description:
          "Kenya and Tanzania for the great plains and the migration. South Africa for the Big 5, excellent lodges and Cape Town at the end. Botswana for the Okavango Delta and small, exclusive camps. Zambia and Zimbabwe for walking safaris and Victoria Falls. Each has its own feel, and the right one depends on your dates and what you most want to see.",
      },
      {
        title: "How long to stay",
        description:
          "Three nights in each camp gives you around six game drives and time to settle in. Two or three camps over a week lets you see different landscapes without too much time in transit. Add Victoria Falls, Cape Town or a few days on the beach to finish, and the trip becomes a fortnight.",
      },
      {
        title: "How the day runs",
        description:
          "You wake before dawn to coffee by the fire, then head out on the morning drive while the animals are most active. Brunch back at camp, a siesta through the heat, then afternoon tea and the evening drive, with a stop for a drink as the sun goes down. Dinner is often outside, under the stars.",
      },
    ],
    faqs: [
      {
        question: "When is the best time for a safari",
        answer:
          "June to October is the dry season across most of Africa and the most reliable time for game viewing, and the migration reaches the Mara River from around July to September. The green season from November to March is quieter and better value, with newborn animals and dramatic skies.",
      },
      {
        question: "What should I pack",
        answer:
          "Neutral colours, layers for cold mornings and warm afternoons, a hat, sunscreen, binoculars and a camera with a good zoom. Light aircraft need soft bags, with weight limits usually around 15 to 20 kilograms including hand luggage.",
      },
      {
        question: "Can a safari end on a beach",
        answer:
          "Yes, and it is one of the best combinations in travel. Kenya and Tanzania pair with Zanzibar, South Africa with Mauritius or Mozambique, and Botswana with the Seychelles or Mauritius.",
      },
      {
        question: "Is a safari suitable for children",
        answer:
          "Yes, with the right camps. Many set a minimum age for game drives, while South Africa's malaria free reserves welcome younger children. We check every camp's policy before recommending it.",
      },
    ],
  },
  {
    slug: "ski-winter-sports",
    name: "Ski & Winter Sports",
    tagline: "Ski in, ski out, or a short walk and a better hotel",
    watermark: "WINTER",
    heroImage: `${basePath}/assets/images/holiday-types/Ski%20%26%20Winter%20Holiday/pexels-dani-mota-2147738523-33442540%20(1).webp`,
    heroImageAlt: "Wooden chalets deep in snow below bright white peaks",
    secondaryImage: `${basePath}/assets/images/holiday-types/Ski%20%26%20Winter%20Holiday/pexels-priscila-kirsner-swiss-xplorer-2148972399-30382205.webp`,
    secondaryImageAlt: "A snowy mountain village below two sharp peaks",
    galleryImages: [
      { src: `${basePath}/assets/images/holiday-types/Ski%20%26%20Winter%20Holiday/pexels-diogo-miranda-2044514-20529371.webp`, alt: "Children in helmets at ski school on a sunny slope", title: "Lessons and ski school" },
      { src: `${basePath}/assets/images/holiday-types/Ski%20%26%20Winter%20Holiday/pexels-jonastogo-3609082.webp`, alt: "Skis dangling from a chairlift above snowy slopes", title: "Up the mountain" },
      { src: `${basePath}/assets/images/holiday-types/Ski%20%26%20Winter%20Holiday/pexels-zafer-erdogan-49915050-8321864.webp`, alt: "Skiers and snowboarders on a sunny slope below snowy pines", title: "Mountain days" },
    ],
    intro: [
      "A ski holiday lives or dies on the details. The right resort for your level, a bed close to the lifts, and snow you can rely on in the week you can actually travel.",
      "We plan winter trips for everyone from first timers to families to groups chasing their annual week on the mountain, in the Alps and further afield.",
      "Passes, lessons, kit hire and transfers all arranged before you fly, so the first morning starts on the slope rather than in a queue.",
    ],
    features: [
      {
        title: "Matched to your level",
        description:
          "Gentle blues or long reds, lively resort or quiet village. We match the mountain to the group.",
      },
      {
        title: "Close to the lifts",
        description:
          "Nothing improves a ski week like a short walk to the gondola. We prioritise position over glossy brochures.",
      },
      {
        title: "Sorted before the snow",
        description:
          "Lift passes, ski school and equipment arranged in advance, usually for less than the resort window charges.",
      },
    ],
    idealFor: ["Family ski weeks", "Groups of friends", "First time skiers"],
    planning: [
      {
        title: "Choosing the resort",
        description:
          "Beginners do well in resorts with gentle nursery slopes and strong ski schools, such as Obergurgl or La Rosière. Confident skiers want a big linked area like the Three Valleys or the Arlberg. Families want a short walk to the lifts, and non skiers want a pretty village with plenty to do off the slopes. Most groups need a little of each.",
      },
      {
        title: "When to go",
        description:
          "Snow is most reliable from mid January to mid March. Christmas and New Year are festive but busy and expensive, and the February half term is the peak for families. Early December and April can be very good value, with high resorts such as Val Thorens and Tignes the safest choice at either end of the season.",
      },
      {
        title: "Chalet or hotel",
        description:
          "A catered chalet gives a group its own space, with breakfast, afternoon tea and dinner cooked for you. A hotel suits couples and families who want a spa, a pool and a choice of restaurants. Ski in, ski out saves time and legs every day, and we flag any walk or shuttle clearly before you decide.",
      },
    ],
    faqs: [
      {
        question: "Where should beginners learn",
        answer:
          "Resorts with wide, gentle nursery slopes and good ski schools, such as Obergurgl in Austria, La Rosière in France or the resorts of Andorra. We arrange lessons, kit hire and lift passes before you arrive.",
      },
      {
        question: "Do you plan ski trips outside Europe",
        answer:
          "Yes. Whistler and Banff in Canada, and Colorado and Utah in the United States, offer excellent snow, wide runs and very good service. Japan is known for its deep, dry powder.",
      },
      {
        question: "Is ski school worth it for children",
        answer:
          "Yes. Children pick it up quickly with good teaching, and most resorts have English speaking instructors from around age four. Lessons usually run in the mornings, which leaves the afternoons for skiing together.",
      },
      {
        question: "What about non skiers in the group",
        answer:
          "Many resorts have plenty off the slopes, from spas and winter walks to snowshoeing, sledging and good restaurants. We choose resorts with a lively village and easy lift access to the mountain restaurants, so everyone can meet for lunch.",
      },
    ],
  },
  {
    slug: "solos",
    name: "Solos",
    tagline: "Solo holidays, planned around you",
    watermark: "SOLOS",
    heroImage: `${basePath}/assets/images/holiday-types/Solo%20Holiday/pexels-riciardus-871060.webp`,
    heroImageAlt: "A woman in a white hat sitting on the rocks looking out to sea",
    secondaryImage: `${basePath}/assets/images/holiday-types/Solo%20Holiday/pexels-kelly-37844512.webp`,
    secondaryImageAlt: "A woman alone on a bench looking out over a caldera",
    galleryImages: [
      { src: `${basePath}/assets/images/holiday-types/Solo%20Holiday/pexels-pavel-danilyuk-9064214.webp`, alt: "A woman in a sun hat walking a boardwalk across the beach", title: "Beach weeks" },
      { src: `${basePath}/assets/images/holiday-types/Solo%20Holiday/pexels-olly-4862500.webp`, alt: "A woman leaning on a bridge rail above a river at golden hour", title: "City stays" },
      { src: `${basePath}/assets/images/holiday-types/Solo%20Holiday/pexels-lazarevkirill-8956186.webp`, alt: "A woman sunbathing at the edge of a pool from above", title: "Time for yourself" },
    ],
    metaDescription:
      "Solo holidays planned by Emma Carrigan in Ormskirk, Lancashire. Fairly priced rooms, airport transfers and help seven days a week while you are away.",
    intro: [
      "Solo holidays are some of the most rewarding trips we plan. You set the pace, choose what to do each day and spend as long as you like in the places you love.",
      "Some destinations and hotels suit people travelling alone better than others, and we know which ones. We also plan the details that make the trip easy: a driver to meet you at the airport, a hotel in a central, safe area and restaurants where eating alone is comfortable.",
      "If you would like company along the way, we can add guided days or a small group tour. While you are away, you can reach Emma or Sylvia seven days a week.",
    ],
    features: [
      {
        title: "Fair prices for one",
        description:
          "Most hotels price rooms for two people, so travelling alone can cost more. We look for rooms designed for one and dates when the extra charge is dropped.",
      },
      {
        title: "Met on arrival",
        description:
          "A driver meets you at the airport and takes you straight to your hotel, so the holiday starts calmly.",
      },
      {
        title: "Company if you want it",
        description:
          "Add a guided tour, a cookery class or a few days with a small group, and keep the rest of the trip to yourself.",
      },
    ],
    idealFor: ["A first trip alone", "Experienced solo travellers", "Small group touring"],
    planning: [
      {
        title: "Where to go",
        description:
          "Japan, Singapore, Portugal and New Zealand are safe, well organised and easy to get around on your own. Small group tours in Peru, Vietnam and Jordan take care of the logistics and give you company for the days you want it. River cruises and wellness retreats are also popular with people travelling alone.",
      },
      {
        title: "Choosing the hotel",
        description:
          "We choose hotels in central, well lit areas close to the things you want to see, with friendly staff and a relaxed bar or restaurant for the evenings you would rather stay in. Where it suits the trip, we pick smaller hotels where the team soon know you by name.",
      },
      {
        title: "Eating out",
        description:
          "Many people ask us about eating alone. We recommend restaurants with counter seating or a chef's table, where dining on your own is completely normal, and food tours or cookery classes where you share the meal with others.",
      },
    ],
    faqs: [
      {
        question: "Will I pay more travelling alone",
        answer:
          "Often a little, because most rooms are priced for two people sharing. Some hotels, tour operators and cruise lines have rooms for one or drop the extra charge on certain dates, so we check before we quote and show you the options.",
      },
      {
        question: "Is a small group tour right for me",
        answer:
          "If you enjoy company and like the logistics taken care of, it often is. Groups are small, with a tour leader and a mix of people travelling alone and in pairs. If you prefer your own pace, a private itinerary with a few guided days is the alternative.",
      },
      {
        question: "Where suits a first solo trip",
        answer:
          "Japan, Singapore, New Zealand, Portugal and Canada all work well, with easy transport and a strong reputation for safety. A river cruise or a small group tour is also a relaxed way to start.",
      },
      {
        question: "Can I reach you while I am away",
        answer:
          "Yes. Call or message us on WhatsApp seven days a week, wherever you are.",
      },
    ],
  },
  {
    slug: "spa-wellness",
    name: "Spa & Wellness",
    tagline: "Retreats where the treatment programme is the reason to go",
    watermark: "WELLNESS",
    heroImage: `${basePath}/assets/images/holiday-types/Ski%20%26%20Winter%20Holiday/pexels-mikhail-nilov-8158591.webp`,
    heroImageAlt: "A woman sunbathing on the edge of a pool among tropical plants",
    secondaryImage: `${basePath}/assets/images/holiday-types/Ski%20%26%20Winter%20Holiday/pexels-cottonbro-7222177.webp`,
    secondaryImageAlt: "A woman stepping into a bright indoor spa pool",
    galleryImages: [
      { src: `${basePath}/assets/images/holiday-types/Ski%20%26%20Winter%20Holiday/pexels-tommaso-38407791.webp`, alt: "A back massage in progress on a treatment bed", title: "Treatments" },
      { src: `${basePath}/assets/images/holiday-types/Ski%20%26%20Winter%20Holiday/pexels-sergey-torbik-42706484-7365403.webp`, alt: "Two swimmers floating in a turquoise pool from above", title: "Hydrotherapy pools" },
      { src: `${basePath}/assets/images/holiday-types/Ski%20%26%20Winter%20Holiday/pexels-jonathanborba-19737856.webp`, alt: "A hot tub on a wooden deck above hills at sunset", title: "Slow afternoons" },
    ],
    intro: [
      "Some trips are about seeing things. This one is about how you feel when you get home, lighter, clearer and properly rested.",
      "Wellness travel covers a wide spectrum, from a beautiful hotel with an exceptional spa to fully structured retreats with programmes built around you. We help you find the right point on that spectrum.",
      "Tell us what you need, deep rest, a reset, or simply quiet, and we will find the place designed to deliver it.",
    ],
    features: [
      {
        title: "Retreats vetted properly",
        description:
          "The word wellness gets attached to everything. We separate genuine expertise from a nice pool and a smoothie menu.",
      },
      {
        title: "As structured as you want",
        description:
          "Full programmes or simply space and silence. You choose the level, we build around it.",
      },
      {
        title: "Calm from the moment you leave",
        description:
          "Smooth flights and quiet transfers, because arriving frazzled defeats the purpose.",
      },
    ],
    idealFor: ["Recharging solo", "A reset with a friend", "Anyone running on empty"],
    planning: [
      {
        title: "Retreat or spa hotel",
        description:
          "A spa hotel gives you a beautiful setting with treatments as and when you want them. A retreat runs a structured programme of yoga, fitness, nutrition or sleep, with consultations and a daily timetable. Plenty of people want something in between, such as a beach resort with daily yoga and a few treatments included, and we find the right point on that scale.",
      },
      {
        title: "Where to go",
        description:
          "Thailand and Bali have some of the most respected retreats anywhere, Kamalaya on Koh Samui and COMO Shambhala Estate near Ubud among them. India and Sri Lanka offer Ayurvedic programmes rooted in centuries of practice. Closer to home, Austria, Italy and Portugal have excellent wellness hotels within easy reach for a long weekend.",
      },
      {
        title: "How long to stay",
        description:
          "A long weekend is enough to rest. A week is enough to reset, and most structured programmes start at five or seven nights. For anything focused on sleep, stress or fitness, longer is better, and a few days on a beach afterwards lets the benefits settle before you head home.",
      },
    ],
    faqs: [
      {
        question: "Are retreats good for solo travellers",
        answer:
          "Yes. Retreats are relaxed and sociable, with shared meals and classes, many guests come alone, and many retreats offer rooms for one.",
      },
      {
        question: "Do I have to follow a strict programme",
        answer:
          "Only if you want to. Many retreats are flexible, and spa hotels let you choose treatments as you go. We find the level of structure that suits you.",
      },
      {
        question: "Can I bring a partner who is not into spas",
        answer:
          "Yes. Many wellness resorts have good beaches, restaurants and activities, so one of you can follow a programme while the other relaxes or explores.",
      },
      {
        question: "Where is good for a short wellness break",
        answer:
          "Portugal, Spain, Italy and Austria have excellent spa hotels within a few hours of Manchester, and a long weekend is enough to feel the difference.",
      },
    ],
  },
  {
    slug: "tailor-made-bespoke",
    name: "Tailor Made & Bespoke Holidays",
    tagline: "Built from a blank page around the trip you describe",
    watermark: "BESPOKE",
    heroImage: `${basePath}/assets/images/holiday-types/Bespoke%20Holiday/pexels-nickkwanhk-2745261.webp`,
    heroImageAlt: "A bungee bridge over a turquoise river gorge",
    secondaryImage: `${basePath}/assets/images/holiday-types/Bespoke%20Holiday/pexels-dico-baskoro-693731013-18070631.webp`,
    secondaryImageAlt: "A wooden motorboat pulling away from a grand lakeside hotel in Italy",
    galleryImages: [
      { src: `${basePath}/assets/images/holiday-types/Bespoke%20Holiday/pexels-asadphoto-28843908.webp`, alt: "A chef making fresh pasta at a beach restaurant at sunset", title: "A private chef" },
      { src: `${basePath}/assets/images/holiday-types/Bespoke%20Holiday/pexels-katie-cerami-110690626-9770701.webp`, alt: "A skipper at the wheel of a sailing yacht", title: "Your own skipper" },
      { src: `${basePath}/assets/images/holiday-types/Bespoke%20Holiday/pexels-asadphoto-3319961.webp`, alt: "A couple on a jetty over turquoise water framed by palm fronds", title: "Something different" },
    ],
    metaDescription:
      "Sometimes the trip you want is not in any brochure. A milestone birthday across three countries, or a route built around one passion, planned from nothing.",
    intro: [
      "Sometimes the trip you want does not exist in any brochure. A milestone birthday across three countries, a route built around a passion, a once in a lifetime trip with no template to follow.",
      "This is the work we enjoy most. We start with a conversation about what you want the trip to feel like, then design it from scratch, every flight, stay and moment chosen deliberately.",
      "Nothing is fixed until it is right. You will see the itinerary evolve with your feedback until it reads like the trip you imagined, then better.",
    ],
    features: [
      {
        title: "A blank page, not a package",
        description:
          "No template underneath. The itinerary starts from your dates, your interests and your pace.",
      },
      {
        title: "Refined until it is right",
        description:
          "We iterate the plan with you as many times as it takes. The final version should feel inevitable.",
      },
      {
        title: "One person, start to finish",
        description:
          "The person who designs your trip is the person you call while you are on it.",
      },
    ],
    idealFor: ["Milestone celebrations", "Trips across several countries", "Ideas that do not fit a brochure"],
    planning: [
      {
        title: "Starting the conversation",
        description:
          "The first conversation is about you rather than the destination. Who is travelling, what the trip is for, how you like to spend your days, what you loved about past holidays and what you would rather avoid. From there we suggest a shape for the trip and a few options, and build on what you tell us.",
      },
      {
        title: "Putting it together",
        description:
          "With over 600 suppliers to draw on, we can join flights, hotels, guides, trains, boats and private experiences into a single itinerary, however many countries it covers. Everything is arranged by us with ABTA and ATOL protection, so there is one point of contact from the first idea to the flight home.",
      },
      {
        title: "While you are away",
        description:
          "A trip built from scratch has more moving parts, which is why the support matters. You have a number to ring seven days a week, and with over 600 suppliers behind us there is always someone to call if a flight changes or plans need to shift.",
      },
    ],
    faqs: [
      {
        question: "How long does planning take",
        answer:
          "It depends on the trip. A straightforward two centre holiday comes together quickly. An itinerary across several countries takes longer, with a few rounds of changes. We move at whatever pace suits you.",
      },
      {
        question: "Is tailor made more expensive",
        answer:
          "Not necessarily. There is no premium for the service and we plan to your budget. Tailor made simply means the money goes on the parts that matter most to you.",
      },
      {
        question: "Can you plan around a special occasion",
        answer:
          "Yes. Milestone birthdays, anniversaries, proposals, honeymoons and destination weddings are all part of what we do, and we add the touches that make the occasion feel like one.",
      },
      {
        question: "What is the largest trip you have planned",
        answer:
          "A trip through Peru and the Galapagos, including Machu Picchu, of about £36,000. It needed small flights, boats and dated permits to line up, which is exactly the kind of planning a tailor made trip involves.",
      },
    ],
  },
  {
    slug: "villa-holidays",
    name: "Villa Holidays",
    tagline: "Your own pool, your own kitchen, your own front door",
    watermark: "VILLAS",
    heroImage: `${basePath}/assets/images/holiday-types/Villa%20Holiday/pexels-mralexphotography-32608010.webp`,
    heroImageAlt: "Villas on a wooded hillside above Lake Como",
    secondaryImage: `${basePath}/assets/images/holiday-types/Villa%20Holiday/pexels-ahmetcotur-20975734.webp`,
    secondaryImageAlt: "A draped daybed beside a villa pool in the mountains",
    galleryImages: [
      { src: `${basePath}/assets/images/holiday-types/Villa%20Holiday/pexels-mikhail-nilov-8332961.webp`, alt: "A private pool and loungers inside a walled garden from above", title: "Your own pool" },
      { src: `${basePath}/assets/images/holiday-types/Villa%20Holiday/pexels-asadphoto-3319699.webp`, alt: "An overwater villa with its own pool above a clear reef", title: "Overwater villas" },
      { src: `${basePath}/assets/images/holiday-types/Villa%20Holiday/pexels-ahmetcotur-35069531.webp`, alt: "A stone villa with a curved pool on a green hillside", title: "Lakeside settings" },
    ],
    metaDescription:
      "A villa gives you what no hotel can, a place that is yours for the week. Breakfast when you like, the music you chose, and a pool with nobody else in it.",
    intro: [
      "A villa gives you the one thing no hotel can, a place that is entirely yours for the week. Breakfast when you like, music you chose, and a pool with nobody else in it.",
      "The catch is that villas are hard to judge from photographs. We recommend properties we know, with the pool, the view and the distances exactly as described.",
      "For families, groups of friends or several generations travelling together, it is often the most relaxed way to holiday, and frequently the best value too.",
    ],
    features: [
      {
        title: "Villas we can vouch for",
        description:
          "Photographs flatter. We recommend properties where the reality matches or beats the listing.",
      },
      {
        title: "The location, checked",
        description:
          "Walking distance to a town or gloriously remote, we make sure you know exactly which you are getting.",
      },
      {
        title: "Help on hand if you want it",
        description:
          "Chefs, housekeeping, boat days and babysitting can all be arranged, as much or as little as suits you.",
      },
    ],
    idealFor: ["Groups of friends", "Big family gatherings", "Travellers who like their own space"],
    planning: [
      {
        title: "Where villas work best",
        description:
          "The Algarve, Mallorca, Tuscany, Puglia, Provence, Crete, Corfu and Cyprus all have excellent villas within a short flight. Further afield, Barbados, Bali, Florida and Mexico's Caribbean coast offer villas with staff, large pools and room for big groups, which suits a milestone birthday or a family gathering.",
      },
      {
        title: "Getting there and around",
        description:
          "Most villas need a hire car, and some sit down narrow lanes or up steep drives. We tell you plainly how far the villa is from the nearest town, shop and beach, and arrange a car that suits the roads and the size of the group. For larger parties, a private transfer on arrival makes the first day much easier.",
      },
      {
        title: "Services and extras",
        description:
          "Many villas can arrange a welcome pack of groceries, a private chef for one night or the whole week, daily housekeeping, babysitting and boat days. We find out what each villa offers and arrange the extras before you arrive, so the week runs as smoothly as a hotel stay.",
      },
    ],
    faqs: [
      {
        question: "Is a villa good value for a group",
        answer:
          "Often, yes. Sharing a villa can cost less per person than several hotel rooms, and you gain a private pool, a kitchen and space to be together. It works particularly well for families and groups of friends.",
      },
      {
        question: "Are villas safe for young children",
        answer:
          "Many are, and the pool is the main thing to check. We find out whether it has a fence, a cover or an alarm, and recommend villas that suit toddlers.",
      },
      {
        question: "Can we have a private chef",
        answer:
          "Yes. Most villas can arrange a chef for one special meal or every evening, cooking with local produce, and some include a cook as standard.",
      },
      {
        question: "What is included in the price",
        answer:
          "Usually the villa, pool cleaning, linen and towels. Extra cleaning, pool heating, air conditioning and a security deposit can be charged separately. We check what applies so the final cost holds no surprises.",
      },
    ],
  },
];

export function getHolidayTypeDetail(slug: string): HolidayTypeDetail | undefined {
  return holidayTypeDetails.find((holidayType) => holidayType.slug === slug);
}

/** Every type other than the one given, for the "other types" band. */
export function getOtherHolidayTypes(slug: string, limit = 4): HolidayTypeDetail[] {
  const index = holidayTypeDetails.findIndex((holidayType) => holidayType.slug === slug);
  if (index === -1) return holidayTypeDetails.slice(0, limit);

  return [...holidayTypeDetails.slice(index + 1), ...holidayTypeDetails.slice(0, index)].slice(
    0,
    limit,
  );
}
