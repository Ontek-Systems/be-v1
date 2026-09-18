export interface Faq {
  question: string;
  answer: string;
}

/**
 * Every answer here is evidenced by the facts table in COPYWRITING.md.
 * Opening hours, in person appointments and response time guarantees are not
 * in that table, so they are deliberately absent rather than guessed at.
 */

const costFaq: Faq = {
  question: "Does it cost anything to plan a trip",
  answer:
    "No. There are no planning fees and no admin charges, and you do not pay a premium for the service. We are paid by the supplier once you book, so the advice costs you nothing and you are under no obligation to take it.",
};

export const homeFaqs: Faq[] = [
  {
    question: "Where can you plan a trip to",
    answer:
      "Anywhere you would like to go. The destinations on this site are the places our clients ask for most, but with over 600 suppliers behind us we plan well beyond them, from Africa and the Caribbean to North and South America.",
  },
  {
    question: "What kinds of trips do you plan",
    answer:
      "Honeymoons, safaris, proposals, destination weddings and milestone trips, as well as family holidays, trips for couples, adventure, wellbeing and solo travel. Each one starts from who is going and what the trip is for, rather than from a brochure.",
  },
  {
    question: "Where are you based",
    answer:
      "Ormskirk, Lancashire, between Liverpool and Manchester. Emma and Sylvia plan trips by phone, email and WhatsApp seven days a week, so you can talk to us at a time that suits you.",
  },
  costFaq,
  {
    question: "Is my money protected",
    answer:
      "Yes. We are ABTA protected under P8691 and flight inclusive packages are ATOL bonded under 5790, with Azure Indies behind us as a tour operator, so your money is covered before you travel and there is someone to call while you are away.",
  },
  {
    question: "How do I get started",
    answer:
      "Send us a few lines through the form below, or ring or message us on WhatsApp. Roughly where, roughly when and who is travelling is plenty to begin with.",
  },
];

export const aboutFaqs: Faq[] = [
  {
    question: "Who will actually plan my trip",
    answer:
      "Emma Carrigan or Sylvia. They each look after their own clients, so whichever of them you start with plans the trip and is the one who answers when you ring about it.",
  },
  {
    question: "How long have you been doing this",
    answer:
      "Blissful Escapes has been trading for four years. Before that Emma was a general manager at B&Q, running large retail teams, and Sylvia works alongside her with her own clients around Wigan.",
  },
  {
    question: "Who are Azure Indies",
    answer:
      "Azure Indies stand behind us, and because they are also a tour operator they bring commercial benefits to the trips we put together as well as another layer of protection for your money.",
  },
  {
    question: "What happens if something goes wrong while I am away",
    answer:
      "You ring us. We work with over 600 suppliers, so when a flight is cancelled or a transfer does not turn up there is someone we can call, and it is Emma or Sylvia who makes that call rather than you.",
  },
  {
    question: "Can I reach you at weekends",
    answer:
      "Yes. We are available seven days a week by phone, email and WhatsApp, and Emma and Sylvia each have their own number.",
  },
  costFaq,
];

export const testimonialsFaqs: Faq[] = [
  {
    question: "Where do these reviews come from",
    answer:
      "All 29 are five star reviews left on Google by clients who travelled with us. The case studies on this page take a handful of them and set out what the trip behind each review involved.",
  },
  {
    question: "Can you plan a trip like one of these",
    answer:
      "Yes, although no two trips here were the same, because each was planned around the people taking it. Tell us which one caught your eye and what would be different for you, and we will start from there.",
  },
  {
    question: "What is the largest trip you have planned",
    answer:
      "Peru and the Galapagos for Helen Jones, taking in Machu Picchu, which came to about £36,000. A week in Europe gets the same attention, because the detail matters just as much.",
  },
  {
    question: "Do you plan proposals and weddings",
    answer:
      "Yes. Eddie and Sarah's proposal in Halkidiki is one of the trips on this page, and next year we are planning a destination wedding in Cyprus for 70 guests.",
  },
  {
    question: "Will I pay more for a trip planned this way",
    answer:
      "No. There are no hidden fees, no admin charges and no premium for the service, because we are paid by the supplier rather than by you.",
  },
  {
    question: "How do I start planning a trip like these",
    answer:
      "Use the form below, or ring Emma or Sylvia directly. Roughly where, roughly when and who is travelling is enough for a first conversation.",
  },
];

export const contactFaqs: Faq[] = [
  {
    question: "What happens after I send an enquiry",
    answer:
      "Emma or Sylvia reads it and comes back to you within two working days, usually with a couple of options and a question or two, because the first reply is the start of a conversation rather than a quote.",
  },
  costFaq,
  {
    question: "Is my money protected",
    answer:
      "Yes. Bookings are ABTA protected and flight inclusive packages are ATOL bonded, with Azure Indies behind us as a tour operator, so your money is covered before you travel and there is someone to call while you are away.",
  },
  {
    question: "Can I book online",
    answer:
      "Not through this site, and that is deliberate. Everything is arranged over the phone, by email or on WhatsApp, so the trip is put together by someone who has heard what you actually want from it.",
  },
  {
    question: "Should I speak to Emma or to Sylvia",
    answer:
      "Either. They each look after their own clients, so whichever of them you start with is the one who plans your trip and the one who answers when you ring about it.",
  },
  {
    question: "How far ahead should I get in touch",
    answer:
      "Earlier is easier for honeymoons, safaris and school holidays, where the rooms and the flights that matter go first, but there is no cut off and short notice trips are worth asking about.",
  },
];

export const holidaysFaqs: Faq[] = [
  {
    question: "What if my trip fits more than one type",
    answer:
      "Most do. A honeymoon that ends on safari or a family trip with a few nights in a city is planned as one holiday, and the types on this page are only a place to start the conversation.",
  },
  {
    question: "Do you plan trips for people travelling alone",
    answer:
      "Yes. Solo trips are one of our specialisms, and we choose hotels, tours and transfers with one traveller in mind rather than adding a single supplement to a trip built for two.",
  },
  {
    question: "Can you plan proposals and destination weddings",
    answer:
      "Yes. We plan proposals down to the table and the timing, and destination weddings for large groups, including one for 70 guests in Cyprus next year.",
  },
  costFaq,
  {
    question: "How do I get started",
    answer:
      "Tell us who is travelling, roughly when and what the trip is for, through the form below, by phone or on WhatsApp, and Emma or Sylvia will take it from there.",
  },
];

export const destinationsFaqs: Faq[] = [
  {
    question: "Can you plan a trip somewhere not listed here",
    answer:
      "Yes. These nine regions are where clients ask us to plan most often, but with over 600 suppliers behind us we plan trips well beyond them, so just ask.",
  },
  {
    question: "Can I combine two regions in one trip",
    answer:
      "Often, and it can work well. A few nights in Dubai on the way to the Maldives is the usual pairing, and we line up the flights so the stopover adds to the trip rather than eating into it.",
  },
  {
    question: "Which airport will I fly from",
    answer:
      "Usually Manchester or Liverpool, since we are based in Ormskirk, Lancashire, between the two, but we plan from whichever airport suits you and tell you when another one saves time or money.",
  },
  costFaq,
  {
    question: "Is my money protected",
    answer:
      "Yes. We are ABTA protected under P8691 and flight inclusive packages are ATOL bonded under 5790, so your money is covered before you travel and there is someone to call while you are away.",
  },
];

export const galleryFaqs: Faq[] = [
  {
    question: "Can you plan a trip like one of these",
    answer:
      "Yes. Tell us which photograph caught your eye and we will build a trip around the place, the hotel or the moment in it, shaped to who is travelling and when.",
  },
  {
    question: "Where can you plan a trip to",
    answer:
      "Anywhere you would like to go. The places pictured here are only a sample, and with over 600 suppliers behind us we plan well beyond them.",
  },
  costFaq,
  {
    question: "How do I get started",
    answer:
      "Send us a few lines through the form below, or ring or message us on WhatsApp. Roughly where, roughly when and who is travelling is plenty to begin with.",
  },
];
