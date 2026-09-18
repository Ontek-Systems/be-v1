import { basePath } from "@/lib/siteConfig";
import type { Faq } from "@/lib/faqs";
import type { PlanningNote } from "@/lib/planningNote";

export interface DestinationExperience {
  title: string;
  description: string;
}

export interface DestinationHighlight {
  label: string;
  value: string;
}

export interface DestinationGalleryImage {
  src: string;
  alt: string;
}

export interface DestinationDetail {
  slug: string;
  name: string;
  /** Short evocative line shown under the name on the home card and hero */
  tagline: string;
  heroImage: string;
  heroImageAlt: string;
  /** Region descriptor, e.g. "Indian Ocean and Asia" */
  region: string;
  /** Countries we plan across in this region, shown as a quiet list */
  countries: string[];
  bestTime: string;
  /**
   * True where the hero image is a stand in rather than a picture of the
   * region itself. Grep this flag to find what still needs sourcing.
   */
  needsImage?: boolean;

  /** The lead image on the region page, paired with the intro copy. */
  introImage: string;
  introImageAlt: string;
  /**
   * The search result description, 140 to 160 characters. Separate from
   * `intro` because a body paragraph runs to 450 and Google shows about 160,
   * so the page's own lead read as a sentence cut off mid clause.
   */
  metaDescription: string;
  /** Two paragraph editorial intro, 90 to 140 words in total. */
  intro: string[];
  /** Three facts, shown as a row under the intro. Same three labels everywhere. */
  highlights: DestinationHighlight[];
  /** Three things worth doing, each with its own image on the region page. */
  experiences: DestinationExperience[];
  gallery: DestinationGalleryImage[];
  /** Three practical notes on timing, getting there and shaping the trip. */
  planning: PlanningNote[];
  /** Four region specific questions, shown above the other regions. */
  faqs: Faq[];
}

const HERO = `${basePath}/assets/images/hero`;
const IMAGES = `${basePath}/assets/images/ALL-IMAGES/Full%20Images`;
const DEST = `${basePath}/assets/images/destinations`;

/**
 * The nine regions from COPYWRITING.md §5: by continent rather than by
 * country, with the Americas split in two and the Indian Ocean standing on its
 * own. The list is not a limit on what we will book, and the copy on the index
 * page says so explicitly.
 */
export const destinationDetails: DestinationDetail[] = [
  {
    slug: "europe",
    name: "Europe",
    tagline: "Long lunches, warm stone and a coastline for every mood",
    heroImage: `${DEST}/europe/positano-amalfi-coast.webp`,
    heroImageAlt: "Positano stacked above the sea on the Amalfi Coast",
    region: "Europe and the Mediterranean",
    countries: ["Italy", "Greece", "Croatia", "Spain", "Portugal", "Malta"],
    bestTime: "May to September, for long light and warm seas",
    introImage: `${DEST}/europe/venice-rialto-bridge.webp`,
    introImageAlt: "The Rialto Bridge over the Grand Canal in Venice",
    metaDescription:
      "The Amalfi Coast in late September, Puglia for the food, Croatia from Split through the islands, or Santorini for the view from the terrace.",
    intro: [
      "Europe is the one you can do properly in a week, and the range sitting inside three hours of flying is what makes it worth planning properly rather than picking a hotel from a list. The Amalfi Coast in late September, once the day visitors have gone and the sea is still warm. Puglia, where the food is the reason to go. Croatia from Split down through the islands, or Santorini and the caldera if the point of the trip is the view from the terrace.",
      "We know which side of each island the good beaches are on, which coastal towns are difficult to reach by car, and which hotels are worth the extra hundred pounds a night, and that is usually the difference between a good week and a week you talk about afterwards.",
    ],
    highlights: [
      { label: "Best time", value: "May to September, and late September for the quietest Mediterranean" },
      { label: "Flight time", value: "Two to four hours from Manchester" },
      { label: "Asked for most", value: "Italy, Greece, Croatia, Portugal" },
    ],
    experiences: [
      {
        title: "The Amalfi Coast and Capri",
        description:
          "Positano is beautiful and very steep, so where you stay matters more than the address suggests. We tend to put people in Ravello or on the Sorrento side and run the coast by boat, which is quicker than the road and considerably better looking.",
      },
      {
        title: "The Greek islands",
        description:
          "Santorini for the caldera and two nights at most, then somewhere with a beach. Crete, Kefalonia and Naxos all reward a longer stay, and the ferry timetables are the part worth getting right before anything else is confirmed.",
      },
      {
        title: "Puglia and the Italian countryside",
        description:
          "Masserias out in the olive groves, the trulli at Alberobello, and Ostuni for the evening. A hire car is essential here, though the drives between towns are short enough that you never lose a day to one.",
      },
    ],
    gallery: [
      { src: `${IMAGES}/blissful-escapes-travel-agent-image-22.webp`, alt: "Clifftop terrace overlooking the Bay of Naples in Capri" },
      { src: `${DEST}/europe/zakynthos-navagio-beach.webp`, alt: "Navagio Beach below white cliffs on Zakynthos" },
      { src: `${DEST}/europe/hillside-vineyards-tower.webp`, alt: "Vineyards and an old stone tower on an Italian hillside" },
    ],
    planning: [
      {
        title: "Timing the Mediterranean",
        description:
          "June to August is hot and busy on every coast, and prices rise to match. May and late September give you warm seas, long evenings and room on the beach, which is why we steer most couples towards the shoulder months. Families tied to the school holidays do better on islands with a breeze, the Cyclades or the Balearics, or up in the hills where the evenings cool off. Winter belongs to the cities, Rome, Seville and Lisbon, once the queues have gone.",
      },
      {
        title: "Flying into the right airport",
        description:
          "The obvious airport is not always the closest to the hotel, and choosing well saves you half a day. Naples for the Amalfi Coast, Bari or Brindisi for Puglia, Dubrovnik for the southern Croatian islands, Chania rather than Heraklion for western Crete. We line the flight up with a private transfer, so the first afternoon is spent by the water rather than on a motorway with the luggage.",
      },
      {
        title: "Two centres rather than one",
        description:
          "A week in one place suits a proper rest. Ten days or more usually works better split between two, a city and a coast, or two islands with a ferry between them: Rome then Amalfi, Split then Hvar, Lisbon then the Algarve. We keep the transfer day short and put the slower stop second, so the holiday winds down as it goes rather than up.",
      },
    ],
    faqs: [
      {
        question: "Why use a planner for a week in Europe",
        answer:
          "Because the week is short, so every choice carries more weight. The hotel on the right side of the island, the ferry that connects with your flight, the terrace table at sunset. We arrange all of it with ABTA protection, and there are no planning fees or admin charges.",
      },
      {
        question: "When is the sea warm enough to swim",
        answer:
          "From June to October across most of the Mediterranean, and the water is often at its warmest in September after a full summer of sun. The Greek islands and southern Spain stay swimmable well into October, while northern Italy and Croatia cool off sooner.",
      },
      {
        question: "Can one trip cover more than one country",
        answer:
          "Yes, and many of the best ones do. Croatia pairs with Montenegro along the coast, Italy with Malta by a short flight, and Portugal with Spain by train or car. We join the pieces up so the transfers, luggage and timings are arranged before you leave.",
      },
      {
        question: "Do you plan European city breaks as well",
        answer:
          "Yes. Rome, Venice, Seville, Lisbon and Prague all work in three or four nights, and we plan them as carefully as a fortnight, with the hotel in the right quarter and the tables and tickets that go early reserved in advance.",
      },
    ],
  },
  {
    slug: "caribbean",
    name: "Caribbean",
    tagline: "Water you can see your feet through, and islands that feel nothing alike",
    heroImage: `${DEST}/caribbean/palm-island-lagoon.webp`,
    heroImageAlt: "A small island of palms in clear Caribbean water",
    region: "The Caribbean",
    countries: ["Barbados", "Antigua", "St Lucia", "Grenada", "Jamaica", "Cuba"],
    bestTime: "December to April, outside the hurricane season",
    introImage: `${DEST}/caribbean/harbour-bay-golden-hour.webp`,
    introImageAlt: "Boats moored in a sheltered Caribbean bay at golden hour",
    metaDescription:
      "Barbados for the restaurants, Antigua for the sailing, St Lucia for the Pitons and Grenada for the quiet. We start with how you want the week to feel.",
    intro: [
      "The islands are far less alike than the brochures suggest, which is why the first question is what you want the week to feel like rather than which beach you have seen a photograph of. Barbados has the restaurants and the west coast hotels. Antigua has the sailing and a beach for every week of the year. St Lucia is the dramatic one, rainforest and the Pitons rising straight out of the sea, and Grenada is the quiet one that people come home from surprised by.",
      "Travel between December and April and you are outside the hurricane season, which is the single most important thing to get right on this side of the Atlantic.",
    ],
    highlights: [
      { label: "Best time", value: "December to April, outside the hurricane season" },
      { label: "Flight time", value: "Eight to nine hours from Gatwick or Manchester" },
      { label: "Asked for most", value: "Barbados, Antigua, St Lucia, Grenada" },
    ],
    experiences: [
      {
        title: "The west coast of Barbados",
        description:
          "Calm water, the best of the hotels, and Oistins on a Friday night for the fish fry. The Atlantic side is spectacular and not for swimming, which is worth knowing before you choose which coast to stay on.",
      },
      {
        title: "Sailing out of Antigua",
        description:
          "English Harbour, Nelson's Dockyard and a day across to Green Island with lunch on board. The island is small enough to circle in a day and the leeward beaches stay flat almost whatever the wind is doing.",
      },
      {
        title: "St Lucia and the Pitons",
        description:
          "The sulphur springs, the rainforest above Soufriere and a room with the mountains in the window. It is the island for a honeymoon, and the drive from the airport is long, so we arrange the helicopter transfer where it earns its money.",
      },
    ],
    gallery: [
      { src: `${DEST}/caribbean/horses-swimming-shallows.webp`, alt: "Horses swimming in the shallows off a Barbados beach" },
      { src: `${DEST}/caribbean/yacht-harbour.webp`, alt: "Yachts moored in a green Caribbean harbour" },
      { src: `${IMAGES}/blissful-escapes-travel-agent-image-31.webp`, alt: "Infinity pool framing the Piton mountains in St Lucia" },
    ],
    planning: [
      {
        title: "Choosing the island",
        description:
          "Start with what you want to do between breakfast and dinner. Barbados suits people who like to eat out and move between beach bars. Antigua suits anyone who wants to be on the water. St Lucia suits couples and walkers, with the rainforest right behind the hotel, and Grenada suits people who want quiet, spice estates and a beach with nobody on it. The right hotel on the wrong island is the mistake worth avoiding.",
      },
      {
        title: "The hurricane season",
        description:
          "The Atlantic season runs from June to November, with the greatest risk from August to October. December to April is dry, warm and the most reliable, which is why prices peak over Christmas and the February half term. May and early June can be very good value with fewer people about, and we talk through how the risk looks for your island if your dates are fixed.",
      },
      {
        title: "Combining islands",
        description:
          "Two islands in a fortnight is easy once the flights line up. St Lucia and Barbados pair well, the mountains first and the restaurants second, and Antigua connects by a short hop to Barbuda and its empty pink sand. A few nights in New York on the way out also works and breaks up the flight. We match the island connections to the long haul times, which is where most trips planned alone come unstuck.",
      },
    ],
    faqs: [
      {
        question: "Which island is best for a honeymoon",
        answer:
          "St Lucia is the one most couples ask about, with the Pitons, the rainforest and rooms open to the view. Antigua and Barbados suit couples who want more choice of beaches and restaurants, and Grenada suits those who want it quiet. We ask how you want to spend the days before recommending any of them.",
      },
      {
        question: "Is the Caribbean good for families",
        answer:
          "Very much so. Barbados and Antigua have calm western and leeward coasts, strong family resorts and flight times that work with children. We look for kids clubs that are genuinely good, family rooms that fit everyone and beaches where the water stays shallow.",
      },
      {
        question: "Are there direct flights from the UK",
        answer:
          "Yes, to the main islands, from Gatwick and Heathrow and, depending on the season, from Manchester, in around eight to nine hours. The smaller islands usually connect through one of the larger ones, and we time those connections so there is room for a late arrival.",
      },
      {
        question: "Can I travel during the hurricane season",
        answer:
          "You can, and May, June and November often bring good value and quieter beaches. The risk is highest from August to October. We explain the picture for your island and dates, and recommend travel insurance that covers disruption before anything is confirmed.",
      },
    ],
  },
  {
    slug: "indian-ocean",
    name: "Indian Ocean",
    tagline: "Overwater villas, house reefs and absolute quiet",
    heroImage: `${DEST}/indian-ocean/maldives-jetty.webp`,
    heroImageAlt: "A long wooden jetty over the lagoon in the Maldives",
    region: "The Indian Ocean",
    countries: ["Maldives", "Mauritius", "Seychelles", "Zanzibar", "Sri Lanka", "India"],
    bestTime: "November to April for the Maldives, May to December for Mauritius",
    introImage: `${DEST}/indian-ocean/overwater-villas-heron.webp`,
    introImageAlt: "A heron in the shallows below overwater villas at sunset",
    metaDescription:
      "In the Maldives the island matters more than the villa, because a house reef you can swim to changes the week. Also Mauritius, the Seychelles and Sri Lanka.",
    intro: [
      "The Maldives is the one everybody pictures, and the choice that actually matters is the island rather than the villa, because a house reef you can swim to from the beach is the difference between snorkelling every day and taking a boat out to do it. Seaplane islands sit further out and stay quieter. Speedboat islands are closer and cheaper to reach.",
      "Mauritius suits a longer stay and has a whole country behind the beach, with the Black River Gorges, the Sunday market in Port Louis and a genuinely good food scene. The Seychelles is the wildest looking of the three, granite boulders and forest running down to the sand, and it pairs neatly with a few days in Dubai on the way out.",
    ],
    highlights: [
      { label: "Best time", value: "November to April for the Maldives, May to December for Mauritius" },
      { label: "Flight time", value: "Ten to twelve hours, usually through the Gulf" },
      { label: "Asked for most", value: "Maldives, Mauritius, Seychelles, Sri Lanka" },
    ],
    experiences: [
      {
        title: "Choosing the right Maldivian island",
        description:
          "There are more than 150 resorts out there and they are not interchangeable. We match you on the house reef, the transfer, whether children are welcome and how far the restaurants stretch across a fortnight.",
      },
      {
        title: "Sri Lanka before the beach",
        description:
          "Spectacular train journeys climb to the hill stations, leopards and sloth bears make the game drives at Yala and Udawalawe worth the early start, and the golden beaches along the southern shore are waiting at the end of it.",
      },
      {
        title: "Mauritius and the Seychelles",
        description:
          "Mauritius rewards a hire car and a fortnight. The Seychelles rewards island hopping, Mahe to Praslin to La Digue by ferry, with bicycles at the far end and Anse Source d'Argent at low tide.",
      },
    ],
    gallery: [
      { src: `${DEST}/indian-ocean/atoll-aerial.webp`, alt: "Aerial view of a Maldivian atoll, reef and lagoon" },
      { src: `${IMAGES}/blissful-escapes-travel-agent-image-81.webp`, alt: "Tea plantation hills rolling across the mountainside in Sri Lanka" },
      { src: `${IMAGES}/blissful-escapes-travel-agent-image-80.webp`, alt: "Secluded beach in the Seychelles with granite boulders" },
    ],
    planning: [
      {
        title: "Seaplane or speedboat",
        description:
          "The transfer shapes a Maldives stay more than most people expect. Seaplanes fly in daylight only, so a late landing can mean a night in Male before you reach the island. Speedboat resorts close to the airport avoid that and suit shorter stays, and domestic flights reach the far atolls. We match the resort to your flight times so the first day is spent in the lagoon rather than in a lounge.",
      },
      {
        title: "The two monsoons",
        description:
          "The Indian Ocean has two monsoon seasons and each island feels them differently. The Maldives is at its driest from November to April. Mauritius is best from May to December, when it is cooler and drier. Sri Lanka takes its rain on the southwest coast from May to September and on the east coast from October to January, so there is nearly always a good beach somewhere on the island.",
      },
      {
        title: "Breaking the flight",
        description:
          "Most routes run through Dubai, Doha or Abu Dhabi, which makes a stopover easy to add. Two or three nights on the way out breaks up the flying and gives you a city before the sand. On the way home, a stop in the Gulf means you land back in Manchester rested rather than straight off a long night flight.",
      },
    ],
    faqs: [
      {
        question: "Which is better, the Maldives or Mauritius",
        answer:
          "They suit different trips. The Maldives is about the water, the reef and the villa, with very little else to do, and that is the point. Mauritius has more going on, with food, walking, golf and a whole island to explore, so it suits longer stays and families. Plenty of people end up doing both in different years.",
      },
      {
        question: "Is the Maldives good for children",
        answer:
          "Some resorts are excellent for families, with kids clubs, family villas and shallow lagoons. Others are adults only or restrict young children in the overwater villas. We check each resort's policy before recommending it, so there are no surprises on arrival.",
      },
      {
        question: "Can Sri Lanka and the Maldives go together",
        answer:
          "Yes, and it is one of the best pairings in the region. A week or so in Sri Lanka, the hill country, the tea estates and the wildlife parks, followed by a week on a Maldivian island. The flight from Colombo to Male takes around an hour and a half.",
      },
      {
        question: "Where do Zanzibar and the Seychelles fit",
        answer:
          "Both pair well with a safari, and Zanzibar in particular is an easy hop from Tanzania. The Seychelles suits island hopping between Mahe, Praslin and La Digue, and combines neatly with a few nights in Dubai on the way.",
      },
    ],
  },
  {
    slug: "middle-east",
    name: "Dubai and the Middle East",
    tagline: "Desert nights and skylines that did not exist a generation ago",
    heroImage: `${DEST}/middle-east/burj-al-arab-coast.webp`,
    heroImageAlt: "The Burj Al Arab rising from the sea off Jumeirah Beach",
    region: "The Middle East",
    countries: ["United Arab Emirates", "Oman", "Qatar", "Jordan", "Saudi Arabia"],
    bestTime: "November to March, before the heat arrives",
    introImage: `${DEST}/middle-east/palm-jumeirah-aerial.webp`,
    introImageAlt: "The Palm Jumeirah and its beaches from the air",
    metaDescription:
      "Dubai as a week of its own or as three nights on a long haul route, with a desert camp at dusk and the gold souk in Deira. Oman, Qatar and Jordan too.",
    intro: [
      "Dubai works as a week on its own and it works even better as three or four nights attached to a long haul flight, which is how many people actually use it. The hotels are enormous and the service is genuinely good, but the trip is made by what happens between the beach and the pool: a desert camp at dusk, the old creek and the gold souk over in Deira, dinner somewhere sixty floors up.",
      "Abu Dhabi is the calmer one, with the Sheikh Zayed Grand Mosque and the Louvre. Oman is where to go for mountains, wadis and empty coastline, and Jordan has Petra and the Wadi Rum.",
    ],
    highlights: [
      { label: "Best time", value: "November to March, before the heat arrives" },
      { label: "Flight time", value: "Seven hours direct from Manchester" },
      { label: "Asked for most", value: "Dubai, Abu Dhabi, Oman, Jordan" },
    ],
    experiences: [
      {
        title: "A night in the desert",
        description:
          "Out past the last roundabout into the dunes of the Al Marmoom reserve, a camp and dinner under the sky. It is the part of a Dubai week people describe afterwards, so we arrange it before you travel rather than in resort.",
      },
      {
        title: "Old Dubai in half a day",
        description:
          "The creek, the abra across to Deira for a pound, the spice and gold souks, and breakfast in Al Fahidi where the wind towers still stand. It puts the rest of the city in context.",
      },
      {
        title: "Stopping over on the way somewhere",
        description:
          "Three nights here on the way to the Maldives or Australia breaks the flight and gives you a second holiday inside the first. We build it into the same ticket rather than treating it as a separate trip.",
      },
    ],
    gallery: [
      { src: `${DEST}/middle-east/desert-resort-pool-night.webp`, alt: "A pool beneath a shaded pavilion at night" },
      { src: `${DEST}/middle-east/dubai-fountain-dhows.webp`, alt: "Dhows on the water below the Dubai Fountain at night" },
      { src: `${DEST}/middle-east/dubai-marina-sunset.webp`, alt: "Looking out over Dubai Marina from a boat at sunset" },
    ],
    planning: [
      {
        title: "Working around the heat",
        description:
          "From November to March the days are warm rather than hot, and that is when the desert, the souks and the beaches are at their best. From June to September temperatures pass 40 degrees, which suits a hotel stay built around the pool and little else, though prices fall to match. Ramadan moves each year, and we explain what it means for your dates before anything is confirmed.",
      },
      {
        title: "Dubai or Abu Dhabi",
        description:
          "Dubai is busier, with more restaurants, beach clubs and nightlife, and it suits a first visit or a short stop. Abu Dhabi is calmer and more spacious, with the Louvre, the Grand Mosque, Yas Island for families and long, quiet beaches on Saadiyat. The two are about an hour and a half apart by road, so a few nights in each is easy to arrange.",
      },
      {
        title: "Beyond the Emirates",
        description:
          "Oman feels entirely different, with the Hajar Mountains, wadis you can swim in and nesting turtles on the beach at Ras al Jinz. Jordan needs three or four nights at least: Petra over two days, a night at a camp in Wadi Rum and a float in the Dead Sea to finish. Qatar works well as a short stop on the way further east.",
      },
    ],
    faqs: [
      {
        question: "Is Dubai good for families",
        answer:
          "Very. The beaches are calm, the hotels are built with families in mind, and the water parks, the aquarium and the desert fill the days. The seven hour direct flight from Manchester keeps it manageable with children, and the winter sun is reliable.",
      },
      {
        question: "What should I wear",
        answer:
          "Beachwear is fine at the hotel pool and beach. In malls, the old town and other public places, covering shoulders and knees is respectful, and at the Grand Mosque in Abu Dhabi it is required, with women also covering their hair. We talk you through it before you travel.",
      },
      {
        question: "Can Dubai be added to a longer trip",
        answer:
          "Yes, and many people use it exactly that way. Three or four nights on the way to the Maldives, Mauritius, Thailand or Australia breaks up the flying and gives you a city before the beach. We arrange it as part of the same itinerary.",
      },
      {
        question: "Is Jordan worth adding",
        answer:
          "Yes, if you have the days. Petra deserves two, Wadi Rum a night and the Dead Sea a morning, so Jordan works best as a trip of its own or joined to a few days on the Red Sea at Aqaba.",
      },
    ],
  },
  {
    slug: "southeast-asia",
    name: "Southeast Asia",
    tagline: "Temple mornings, longtail boats and two coasts to choose between",
    heroImage: `${DEST}/southeast-asia/longtail-boat-limestone.webp`,
    heroImageAlt: "A longtail boat on the sand below a limestone stack in Krabi",
    region: "Southeast Asia",
    countries: ["Thailand", "Vietnam", "Cambodia", "Singapore", "Indonesia", "Malaysia"],
    bestTime: "November to April, for dry, warm days",
    introImage: `${DEST}/southeast-asia/vietnam-valley-sunrise.webp`,
    introImageAlt: "Sunrise over rice fields and karst peaks in northern Vietnam",
    metaDescription:
      "Thailand has two coastlines and 1400 islands, so the month you travel decides the coast. Vietnam, Cambodia, Singapore and Indonesia planned the same way.",
    intro: [
      "From the rural heartland away from the cities to the rice paddies and the tropical forest, Thailand is where most people start, and with two coastlines and 1400 islands you can spend a fortnight there and still be choosing. The Andaman side around Krabi and Phuket is the dramatic one and the busier one. The gulf side is calmer and runs on a different monsoon, which is why the month you travel decides the coast rather than the other way round.",
      "Vietnam rewards a route rather than a resort, Hanoi down through Hoi An to the Mekong, and Cambodia is worth three days for Angkor on its own.",
    ],
    highlights: [
      { label: "Best time", value: "November to April, for dry, warm days" },
      { label: "Flight time", value: "Twelve to thirteen hours through the Gulf or Singapore" },
      { label: "Asked for most", value: "Thailand, Vietnam, Singapore, Bali" },
    ],
    experiences: [
      {
        title: "Bangkok, then the coast",
        description:
          "Two nights in the city for the Grand Palace, the river and the food, then an hour in the air to the beach. It is the shape almost every Thailand trip takes, and it works because the city is exhausting in the best way.",
      },
      {
        title: "Krabi and the Andaman islands",
        description:
          "Railay by longtail, the limestone stacks around Phang Nga Bay, and Koh Yao Noi for the same water without the crowds. The boats run to the tide rather than to a timetable, so the hours matter.",
      },
      {
        title: "Vietnam end to end",
        description:
          "Hanoi and the old quarter, a night out on Halong Bay, tailors and lanterns in Hoi An, then down into the Mekong Delta. Internal flights keep it inside a fortnight without it becoming a coach tour.",
      },
    ],
    gallery: [
      { src: `${DEST}/southeast-asia/bangkok-night.webp`, alt: "Bangkok lit up at night from above" },
      { src: `${DEST}/southeast-asia/railay-beach-krabi.webp`, alt: "Swimmers below the limestone cliffs at Railay, Krabi" },
      { src: `${DEST}/southeast-asia/fishing-harbour-bay.webp`, alt: "Fishing boats in a bay below green hills in Vietnam" },
    ],
    planning: [
      {
        title: "Two coasts, two seasons",
        description:
          "Thailand's Andaman coast, Phuket, Krabi and Koh Lanta, is at its best from November to April. The gulf islands, Koh Samui, Koh Phangan and Koh Tao, take their heaviest rain from October to December and are usually good from January through the summer. So a July trip goes to Samui, and a February trip can go either way. Vietnam has three climates from north to south, which is why the route matters as much as the month.",
      },
      {
        title: "Pacing the route",
        description:
          "Distances look small on the map and take longer on the ground, so we plan fewer stops and longer stays. Two or three nights in each city, internal flights rather than long drives, and a proper beach stay of five nights or more at the end. That is the difference between a trip that feels like a tour and one that feels like a holiday.",
      },
      {
        title: "Bali and Singapore",
        description:
          "Bali suits a split stay: Ubud in the hills for the rice terraces and temples, then the coast at Seminyak, Uluwatu or Nusa Dua. Singapore works as a two or three night stop, with the hawker centres, Gardens by the Bay and some of the best hotels in Asia, and it connects easily to almost everywhere else in the region.",
      },
    ],
    faqs: [
      {
        question: "When is the best time to visit Thailand",
        answer:
          "November to April is the classic window for Bangkok, the north and the Andaman coast. The gulf islands around Koh Samui follow a different pattern and are good for much of the summer, so there is a Thai beach worth visiting in most months if you choose the coast to match.",
      },
      {
        question: "How long do I need for Vietnam",
        answer:
          "Two weeks is comfortable for the length of the country, from Hanoi and Halong Bay through Hoi An to Ho Chi Minh City and the Mekong. Ten days works if you focus on the north and the centre. Add a few days on the beach at the end if you can.",
      },
      {
        question: "Can several countries go in one trip",
        answer:
          "Yes. Vietnam and Cambodia sit naturally together, with Angkor a short flight from Ho Chi Minh City, and Thailand pairs well with Laos, Bali or Singapore. We plan the flights between them so the connections work and the travel days stay short.",
      },
      {
        question: "Is Southeast Asia good for families",
        answer:
          "Yes, Thailand especially, where the resorts are family friendly, the food is easy and the beaches are calm in season. Singapore is excellent with children too. We keep the travel days short and the hotel changes few.",
      },
    ],
  },
  {
    slug: "africa",
    name: "Africa",
    tagline: "Twice daily game drives, and the coast an hour from the bush",
    heroImage: `${DEST}/africa/acacia-sunset.webp`,
    heroImageAlt: "An acacia silhouetted against a blazing sunset on the savannah",
    region: "Africa and the Indian Ocean coast",
    countries: ["Tanzania", "Kenya", "South Africa", "Botswana", "Zanzibar", "Zimbabwe"],
    bestTime: "June to October for game viewing, August and September for the river crossings",
    introImage: `${DEST}/africa/bush-breakfast.webp`,
    introImageAlt: "Breakfast in the bush at sunrise, chairs set out beneath a tree",
    metaDescription:
      "Twice daily game drives in the Mara, the Serengeti and the Sabi Sands, the migration river crossings in August and September, and Zanzibar after the bush.",
    intro: [
      "The beauty of a safari is the chance to fall into the rhythm of the bush, twice daily wildlife activities either side of a long siesta through the worst of the heat, and it is the trip people come home from changed by. The Mara and the Serengeti carry the migration, roughly 1.5 million animals moving north, with the river crossings in August and September. Southern Africa is the year round option, and the Sabi Sands alongside the Kruger is about as reliable as leopard sightings get.",
      "Most of the safaris we plan finish on a beach, either Zanzibar an hour from Kilimanjaro or the Cape and the winelands after the Kruger.",
    ],
    highlights: [
      { label: "Best time", value: "June to October, and August for the Mara River crossings" },
      { label: "Flight time", value: "Eleven hours to Nairobi or Johannesburg" },
      { label: "Asked for most", value: "Tanzania, Kenya, South Africa, Zanzibar" },
    ],
    experiences: [
      {
        title: "The migration in East Africa",
        description:
          "Herds roughly 1.5 million strong moving between the Serengeti and the Masai Mara, with the crossings at the Mara River in August and September. The camps here go a year ahead, so the date sets everything else.",
      },
      {
        title: "The Big 5 in Southern Africa",
        description:
          "Sabi Sands for leopard, the Okavango once the flood arrives down from Angola, and walking safaris in Mana Pools for anyone who would rather be out of the vehicle than in it.",
      },
      {
        title: "Bush, then beach",
        description:
          "Land in Zanzibar and the drive to the coast takes an hour, so by late afternoon you are in the water. Three nights on the sand after six in the bush is the pairing that works.",
      },
    ],
    gallery: [
      { src: `${DEST}/africa/elephants-savannah.webp`, alt: "An elephant and her calf in the long grass of the Mara" },
      { src: `${DEST}/africa/giraffes-zebra.webp`, alt: "Giraffes and zebra grazing together in the bush" },
      { src: `${DEST}/indian-ocean/zanzibar-beach.webp`, alt: "A white sand beach in Zanzibar at low tide" },
    ],
    planning: [
      {
        title: "Timing the wildlife",
        description:
          "June to October is the dry season across most of East and Southern Africa, when the grass is short, the animals gather at the water and the game viewing is at its most reliable. The migration reaches the Mara River from around July to September. Calving season in the southern Serengeti, from January to March, is a quieter alternative, and the Okavango floods peak in the dry winter months, which surprises most people.",
      },
      {
        title: "Choosing the camp",
        description:
          "Where the camp sits matters more than how it looks. A private concession means fewer vehicles at a sighting and the chance of night drives and walking safaris, which many national parks do not allow. Small camps with experienced guides make the biggest difference to what you see, so we look at location, guiding and group size first and the furnishings second.",
      },
      {
        title: "Moving between camps",
        description:
          "Most safaris use light aircraft between camps, with soft bags and strict weight limits, and we give you the exact allowance before you pack. Flying saves long days on rough roads and turns each transfer into part of the trip, with the plains laid out below you. From the last camp, the beach is a short flight away.",
      },
    ],
    faqs: [
      {
        question: "Is a safari suitable for children",
        answer:
          "Yes, with the right choices. Many camps set a minimum age for game drives, often six or older, while lodges in the malaria free reserves of South Africa, such as Madikwe and the Eastern Cape, welcome younger children and run programmes for them. We check every camp's policy before recommending it.",
      },
      {
        question: "Do I need to think about malaria",
        answer:
          "Many of the best safari areas are in malaria zones, so speak to your GP or a travel clinic well before you travel. If you would rather avoid antimalarials altogether, there are excellent malaria free reserves in South Africa, and we can plan the trip around those.",
      },
      {
        question: "Which country is best for a first safari",
        answer:
          "Kenya and Tanzania are the classic choice, with open plains and huge herds. South Africa is the easiest, with short transfers, excellent lodges and Cape Town to add on. Botswana is the most remote and exclusive. We recommend on your dates, who is travelling and what you most want to see.",
      },
      {
        question: "How long should a safari be",
        answer:
          "Six to eight nights across two or three camps works well for most people, long enough to see different landscapes without too many moves. Add three or four nights on the beach in Zanzibar or Mauritius to finish.",
      },
    ],
  },
  {
    slug: "north-america",
    name: "North America",
    tagline: "Road trips, big cities and national parks on a scale that surprises",
    heroImage: `${DEST}/north-america/horseshoe-bend.webp`,
    heroImageAlt: "The Colorado River curling around Horseshoe Bend at sunrise",
    region: "North America",
    countries: ["United States", "Canada", "Mexico"],
    bestTime: "Year round, depending which corner you are heading for",
    introImage: `${DEST}/north-america/golden-gate-bridge.webp`,
    introImageAlt: "The Golden Gate Bridge and San Francisco across the bay",
    metaDescription:
      "Las Vegas through Zion, Bryce and the Grand Canyon in ten days, New York in four nights, or the Pacific Coast Highway in a week. Planned stop by stop.",
    intro: [
      "This is the region where the trip is usually a route rather than a hotel, and the distances catch people out, so most of the planning goes on how many nights each stop actually deserves. The loop from Las Vegas through Zion, Bryce and the Grand Canyon takes ten days and every one of them earns its place. New York works in four nights, San Francisco and the Pacific Coast Highway in a week, and Florida still does the family fortnight better than anywhere else.",
      "Canada is the quieter half of it, with the Rockies between Banff and Jasper, the Rocky Mountaineer if the train is the point, and bears along the rivers in the autumn.",
    ],
    highlights: [
      { label: "Best time", value: "Year round, depending which corner you are heading for" },
      { label: "Flight time", value: "Eight hours to New York, eleven to the west coast" },
      { label: "Asked for most", value: "New York, Florida, California, Canada" },
    ],
    experiences: [
      {
        title: "The southwest by road",
        description:
          "Las Vegas, Zion, Bryce, Monument Valley and the Grand Canyon, with the driving broken into three hour legs. We secure the lodges inside the parks, which go about a year out and are the whole reason to plan early.",
      },
      {
        title: "New York in four nights",
        description:
          "Long enough for the Met, a show, the High Line and a morning over in Brooklyn, and short enough to sit either side of a beach week in the Caribbean.",
      },
      {
        title: "The Canadian Rockies",
        description:
          "Banff, Lake Louise and the Icefields Parkway up to Jasper, then the Rocky Mountaineer through to Vancouver. September is quieter than August and the light through the valleys is better.",
      },
    ],
    gallery: [
      { src: `${DEST}/north-america/route-66.webp`, alt: "An empty stretch of Route 66 across the desert" },
      { src: `${DEST}/north-america/statue-of-liberty-skyline.webp`, alt: "The Statue of Liberty and the Manhattan skyline" },
      { src: `${DEST}/north-america/peyto-lake-rockies.webp`, alt: "Peyto Lake below the Canadian Rockies" },
    ],
    planning: [
      {
        title: "Distances and driving",
        description:
          "The United States is vast, and a route that looks simple on the map can mean six hours in the car. We keep most driving days to three or four hours, with stops worth making in between, and give each place two nights wherever we can. The hire car comes with the right insurance included, and any one way drop fees are flagged before you settle on a route.",
      },
      {
        title: "Seasons across the continent",
        description:
          "New York is at its best in spring, autumn and December, when the lights go up. Florida and Mexico's Caribbean coast are winter sun. The national parks of the southwest are ideal in spring and autumn, when the heat is manageable, and the Canadian Rockies are a summer and early autumn trip. Alaska runs from May to September and suits a cruise or a lodge stay.",
      },
      {
        title: "Cities and the open road",
        description:
          "The best trips here often mix the two. A few nights in New York or Boston, then New England in the autumn colour. San Francisco, then the Pacific Coast Highway down to Los Angeles. New Orleans, then Memphis and Nashville for the music. Vancouver, then the Rockies by train or car. Each city gives the drive a proper start or finish.",
      },
    ],
    faqs: [
      {
        question: "Do I need a visa for the United States",
        answer:
          "Most British passport holders on holiday need an ESTA, applied for online before travel, rather than a full visa. Canada has its own eTA for air arrivals. The rules can change, so check the official government sites before you go.",
      },
      {
        question: "When is the best time to visit Florida",
        answer:
          "Florida is warm all year. November to May is drier and more comfortable, and the summer months are hot, humid and busy, with the hurricane season running from June to November. For the theme parks, dates outside the school holidays mean shorter queues.",
      },
      {
        question: "Can you plan a road trip for us",
        answer:
          "Yes. We set the route, the hotels and the driving times, arrange the hire car, and secure the park lodges and experiences that need reserving well ahead, so all you do on the day is drive.",
      },
      {
        question: "Is Mexico part of this region",
        answer:
          "Yes. The Riviera Maya around Cancun and Tulum is the best known, with beach resorts, cenotes to swim in and the Mayan ruins at Chichen Itza and Tulum. Mexico City and Oaxaca suit anyone who travels for food and culture.",
      },
    ],
  },
  {
    slug: "south-america",
    name: "South America",
    tagline: "Andean altitude, salt flats and the trip people save years for",
    heroImage: `${DEST}/south-america/copacabana-aerial.webp`,
    heroImageAlt: "Copacabana Beach curving along Rio de Janeiro from the air",
    region: "South America and the Galapagos",
    countries: ["Peru", "Ecuador", "Argentina", "Chile", "Brazil", "Costa Rica"],
    bestTime: "May to September for Peru, October to March for Patagonia",
    introImage: `${DEST}/south-america/rainbow-mountain-peru.webp`,
    introImageAlt: "The striped slopes of Rainbow Mountain in Peru",
    metaDescription:
      "Peru and the Galapagos, the largest trip we have planned at about £36,000. Machu Picchu first thing, and the Sacred Valley beforehand for the altitude.",
    intro: [
      "This is where the largest trip we have planned went, roughly £36,000 through Peru and the Galapagos, and the reason it costs what it does is that the good version is a chain of small flights, boats and dated permits that all have to line up. Machu Picchu first thing in the morning, the Sacred Valley for a few days beforehand so the altitude stops being a problem, and Lake Titicaca if there are days for it.",
      "The Galapagos is done properly by small boat rather than from a hotel, Argentina and Chile are the ones for Patagonia and the wine, and Brazil is a country most people end up visiting twice.",
    ],
    highlights: [
      { label: "Best time", value: "May to September for Peru, October to March for Patagonia" },
      { label: "Flight time", value: "Fourteen hours to Lima through Madrid or Amsterdam" },
      { label: "Asked for most", value: "Peru, Galapagos, Argentina, Chile" },
    ],
    experiences: [
      {
        title: "Peru and Machu Picchu",
        description:
          "Cusco, then down into the Sacred Valley to acclimatise, the train through to Aguas Calientes and the citadel first thing before the day visitors arrive. Permits are limited and dated, which is the whole reason to plan early.",
      },
      {
        title: "The Galapagos by small boat",
        description:
          "Sixteen berths rather than a hundred, a naturalist on board and two landings a day. Land based trips see a fraction of the islands, and the difference is obvious inside a day.",
      },
      {
        title: "Patagonia and the wine country",
        description:
          "Torres del Paine, the Perito Moreno glacier, then Mendoza or the Uco Valley to finish. It is a long way south, so it belongs in a three week trip rather than a two.",
      },
    ],
    gallery: [
      { src: `${DEST}/south-america/machu-picchu.webp`, alt: "Machu Picchu and Huayna Picchu above the terraces" },
      { src: `${DEST}/south-america/galapagos-blue-footed-booby.webp`, alt: "A blue footed booby on the rocks in the Galapagos" },
      { src: `${DEST}/south-america/patagonia-lake-mountains.webp`, alt: "A lake below snowy peaks in Patagonia" },
    ],
    planning: [
      {
        title: "Altitude and pacing",
        description:
          "Cusco sits at around 3,400 metres, and the altitude catches out even fit travellers. We start most Peru routes in the Sacred Valley, which is lower, and keep the first day slow. The same care applies in Bolivia and northern Chile. This is a region where the extra night pays for itself, so we plan fewer stops and give each one the time it needs.",
      },
      {
        title: "Seasons north and south",
        description:
          "The seasons are reversed and the continent is long. Peru and the Andes are driest from May to September. Patagonia is really only open from October to March. The Galapagos works all year, with warmer, calmer seas from December to May and more marine life in the cooler months. Brazil's beaches are at their best from September to March.",
      },
      {
        title: "Planning ahead",
        description:
          "Machu Picchu entry is released in timed slots, Inca Trail permits go months in advance, and the best Galapagos boats fill a year ahead for popular dates. That is why trips here reward early planning. We secure the parts that go first and build the rest of the itinerary around them.",
      },
    ],
    faqs: [
      {
        question: "How far ahead should I plan Peru",
        answer:
          "Six to twelve months is ideal, particularly if you want to walk the Inca Trail, which has a limited number of permits each day. Machu Picchu entry, the best hotels in the Sacred Valley and the Galapagos boats also go early for peak dates.",
      },
      {
        question: "Is the Galapagos suitable for families",
        answer:
          "Yes, for children old enough to enjoy snorkelling and walking. Some boats and island based trips are designed for families, with naturalist guides who are good with younger travellers. We check age policies and cabin layouts before recommending a boat.",
      },
      {
        question: "Can one trip cover several countries",
        answer:
          "Yes, and many trips here do. Peru with the Galapagos, Argentina with Chile across Patagonia, or Brazil with the Iguazu Falls on the Argentine border. Internal flights make it possible, and we plan the connections to fit the route rather than the other way round.",
      },
      {
        question: "Where does the Amazon fit in",
        answer:
          "The Amazon is easiest to reach from Peru, through Puerto Maldonado or Iquitos, or from Ecuador before the Galapagos, and three nights at a jungle lodge is enough for most people. The Brazilian side is larger and more remote, with river lodges near Manaus.",
      },
    ],
  },
  {
    slug: "oceania",
    name: "Australia and New Zealand",
    tagline: "The long way round, and worth every hour of it",
    heroImage: `${DEST}/oceania/queenstown-lake-wakatipu.webp`,
    heroImageAlt: "Queenstown and Lake Wakatipu below the Remarkables",
    region: "Oceania",
    countries: ["Australia", "New Zealand", "Fiji"],
    bestTime: "October to April, their spring through autumn",
    introImage: `${DEST}/oceania/overwater-bungalow-walkway.webp`,
    introImageAlt: "A boardwalk out to overwater bungalows in the South Pacific",
    metaDescription:
      "Australia is a three week trip. Sydney for the harbour, Cairns for the Great Barrier Reef, then Uluru or the Whitsundays. New Zealand and Fiji alongside.",
    intro: [
      "Australia is a three week trip, and trying to do it in two is the most common thing we talk people out of. Sydney for the harbour and the coastal walk from Bondi, Cairns for the Great Barrier Reef, then either Uluru or the Whitsundays depending on whether the point is the desert or the sailing. Melbourne and the Great Ocean Road as well, if the days are there.",
      "New Zealand is best driven, the South Island in particular, Queenstown and the fiords and the road over the Southern Alps, and Fiji sits neatly on the way home for anyone who wants a week of doing nothing at the end of it.",
    ],
    highlights: [
      { label: "Best time", value: "October to April, their spring through autumn" },
      { label: "Flight time", value: "Twenty two hours with one stop, usually Dubai or Singapore" },
      { label: "Asked for most", value: "Australia, New Zealand, Fiji" },
    ],
    experiences: [
      {
        title: "Sydney and the east coast",
        description:
          "The harbour, the Bondi to Coogee walk and a day up in the Blue Mountains, then north to Cairns for the reef, where a liveaboard or an outer reef pontoon beats the day trips out of the marina.",
      },
      {
        title: "Driving the South Island",
        description:
          "Christchurch to Queenstown by way of the lakes, Milford Sound early in the morning before the coaches arrive, and the glaciers along the west coast. The roads are slow and beautiful, so the days stay short.",
      },
      {
        title: "Breaking the flight",
        description:
          "Twenty two hours is a great deal to do in one go, so we build in three nights in Singapore or Dubai on the way out and Fiji on the way back, which turns the travelling into part of the holiday.",
      },
    ],
    gallery: [
      { src: `${DEST}/oceania/sydney-opera-house.webp`, alt: "Sydney Opera House and the Harbour Bridge from the air" },
      { src: `${DEST}/oceania/south-island-mountains.webp`, alt: "Mountains rising over farmland on New Zealand's South Island" },
      { src: `${DEST}/oceania/palm-island-lagoon.webp`, alt: "A palm fringed island in a turquoise Pacific lagoon" },
    ],
    planning: [
      {
        title: "Three weeks, not two",
        description:
          "Australia is roughly the size of Europe, and some of the flights between its main stops take as long as Manchester to the Canaries. With three weeks you can give Sydney, the reef and the red centre the time they deserve and still have a few days to unwind. Two weeks means choosing, and we help you choose well.",
      },
      {
        title: "Reversed seasons",
        description:
          "Their summer is our winter, which makes Australia a natural escape from December to March, although the tropical north has its wet season then. Sydney and Melbourne are pleasant most of the year. New Zealand is best from November to April for walking and driving, and from June to September for skiing around Queenstown. Fiji is at its driest from May to October.",
      },
      {
        title: "Making the stopover count",
        description:
          "Every route to this side of the world stops somewhere, so we make the stop part of the holiday. Singapore, Dubai or Hong Kong on the way out, then Fiji, the Cook Islands or the west coast of the United States on the way home. The long flights become two short ones, and you arrive ready to enjoy it.",
      },
    ],
    faqs: [
      {
        question: "Can Australia and New Zealand go together",
        answer:
          "Yes, and it is a natural pairing. The flight across the Tasman takes around three hours, so a week or more in New Zealand fits well after Australia. Allow at least four weeks in total to do both justice.",
      },
      {
        question: "What is the best way to see the reef",
        answer:
          "From Cairns or Port Douglas, on a boat out to the outer reef rather than a trip that stays close to shore. For more time on the water, a liveaboard or an island stay in the Whitsundays or on Lizard Island gives you the reef at quieter times of day.",
      },
      {
        question: "Do I need a visa for Australia",
        answer:
          "Yes. British passport holders apply online for an eVisitor or an ETA before travel, and New Zealand requires an NZeTA. The rules can change, so check the official government sites before you go.",
      },
      {
        question: "Is a campervan a good idea in New Zealand",
        answer:
          "It can be, particularly on the South Island, where the campsites are well run and the scenery changes by the hour. Many people prefer a hire car and a mix of lodges and small hotels, which is more comfortable and just as flexible. We can arrange either.",
      },
    ],
  },
];

export function getDestinationDetail(slug: string): DestinationDetail | undefined {
  return destinationDetails.find((destination) => destination.slug === slug);
}

/** Every region other than the one given, for the "other regions" band. */
export function getOtherDestinations(slug: string, limit = 4): DestinationDetail[] {
  const index = destinationDetails.findIndex((destination) => destination.slug === slug);
  if (index === -1) return destinationDetails.slice(0, limit);

  return [...destinationDetails.slice(index + 1), ...destinationDetails.slice(0, index)].slice(
    0,
    limit,
  );
}
