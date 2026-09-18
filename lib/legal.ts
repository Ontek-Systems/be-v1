import { contactEmail, contactPhoneDisplay } from "@/lib/contactDetails";

export interface LegalSection {
  heading: string;
  paragraphs: string[];
  /** Optional bullet list, shown after the paragraphs. */
  list?: string[];
}

export interface LegalDocument {
  title: string;
  intro: string;
  /** Shown under the title. Change it whenever the wording changes. */
  lastUpdated: string;
  sections: LegalSection[];
}

const company =
  "Blissfulescapes Limited, a company registered in England and Wales under company number 14089700";

/*
  Written from what the site and the business actually do: the enquiry form,
  phone, email and WhatsApp, and passing details to suppliers once a trip goes
  ahead. The site sets no cookies and runs no analytics. Retention periods and
  the booking terms are sensible defaults and should be checked by Emma and a
  solicitor before launch.
*/

export const privacyPolicy: LegalDocument = {
  title: "Privacy policy",
  intro:
    "How Blissful Escapes collects, uses and looks after your personal information when you enquire about a trip, talk to us or travel with us.",
  lastUpdated: "17 September 2026",
  sections: [
    {
      heading: "Who we are",
      paragraphs: [
        `Blissful Escapes is a trading name of ${company}. We plan luxury travel from Ormskirk, Lancashire, and we are the controller of the personal information described here.`,
        `If you have any question about this policy or your information, email ${contactEmail} or call ${contactPhoneDisplay}.`,
      ],
    },
    {
      heading: "What we collect",
      paragraphs: ["When you fill in the enquiry form on this site we receive:"],
      list: [
        "your name and email address, and your phone number if you give it",
        "the airport you would fly from, where and when you would like to go, and how long for",
        "anything you tell us about the trip in the message box",
        "the page you sent the form from, the site that referred you, your browser language and time zone",
        "your browser, device and operating system, and an approximate location worked out from your internet connection",
      ],
    },
    {
      heading: "When you plan and travel with us",
      paragraphs: [
        "Once we are planning a trip together we will also hold what you share with us by phone, email or WhatsApp, and what a supplier needs before you travel. That usually means the names, dates of birth and passport details of everyone travelling, contact details, payment records, and any dietary, medical or accessibility needs you ask us to pass on.",
        "Health information is special category data. We only record it when you give it to us so that a supplier can look after you, and we only share it with the suppliers who need it.",
      ],
    },
    {
      heading: "How we use it",
      paragraphs: ["We use your information to:"],
      list: [
        "reply to your enquiry and plan the trip you ask about",
        "make the arrangements you agree to with airlines, hotels, tour operators and other suppliers",
        "send you travel documents, updates and anything you need while you are away",
        "keep the records the law, ABTA and the ATOL scheme require of us",
        "understand how people find the site, from the page and referral details sent with the form",
      ],
    },
    {
      heading: "Our lawful basis",
      paragraphs: [
        "We handle your information because you have asked us to plan a trip and it is needed to do that (contract), because the law requires us to keep certain records (legal obligation), and because it is in our legitimate interests to answer enquiries and run the business well. Where we hold health information, we do so with your explicit consent, which you can withdraw at any time.",
        "We will only send you news or offers if you have asked us to, and you can stop them whenever you like.",
      ],
    },
    {
      heading: "Who we share it with",
      paragraphs: [
        "We share your details with the suppliers who provide your trip, such as airlines, hotels, transfer companies and tour operators including Azure Indies, and with ABTA, the Civil Aviation Authority or our insurers where the protection schemes require it. We also use trusted providers for email, messaging and the hosting of our enquiry system, who only process your information on our instructions.",
        "We never sell your information.",
      ],
    },
    {
      heading: "Travel outside the UK",
      paragraphs: [
        "A trip abroad means sharing your details with suppliers in the countries you visit, some of which do not have the same data protection laws as the UK. We only share what each supplier needs to provide your arrangements, and where the law allows, we rely on it being necessary to deliver the trip you have asked for.",
      ],
    },
    {
      heading: "How long we keep it",
      paragraphs: [
        "If an enquiry does not go any further, we delete it within two years. Records of trips we have arranged are kept for seven years after you travel, so that we can meet our accounting, legal and protection scheme obligations, and then deleted.",
      ],
    },
    {
      heading: "Cookies",
      paragraphs: [
        "This site does not set cookies, does not run analytics and does not track you from one site to another. The fonts are served from our own site, so loading a page does not share your details with anyone else.",
      ],
    },
    {
      heading: "Your rights",
      paragraphs: ["Under UK data protection law you can ask us to:"],
      list: [
        "give you a copy of the information we hold about you",
        "correct anything that is wrong or incomplete",
        "delete your information, where we no longer need it",
        "restrict or object to how we use it",
        "send it to you or to another organisation in a usable format",
      ],
    },
    {
      heading: "Making a request or a complaint",
      paragraphs: [
        `Email ${contactEmail} and we will reply within one month. If you are unhappy with how we have handled your information, please tell us first so we can put it right. You can also complain to the Information Commissioner's Office at ico.org.uk or on 0303 123 1113.`,
      ],
    },
    {
      heading: "Changes to this policy",
      paragraphs: [
        "If we change how we handle your information we will update this page and the date at the top of it.",
      ],
    },
  ],
};

export const termsOfUse: LegalDocument = {
  title: "Terms",
  intro:
    "The terms that apply when you use this site and when we plan and arrange travel for you. The supplier's own terms also apply to each part of your trip, and we will send you those before you commit.",
  lastUpdated: "17 September 2026",
  sections: [
    {
      heading: "About us",
      paragraphs: [
        `Blissful Escapes is a trading name of ${company}. We are members of ABTA under P8691, hold ATOL licence 5790 and are IATA accredited under 91200734. In these terms, "we" and "us" means Blissful Escapes and "you" means the person using the site or arranging travel with us.`,
      ],
    },
    {
      heading: "Using this site",
      paragraphs: [
        "This site describes the trips we plan and lets you send us an enquiry. Sending an enquiry does not commit you to anything and does not reserve a holiday, a price or a place.",
        "We keep the information on the site accurate and up to date, but destination details, flight times and seasons are a general guide and can change. The photographs show the kind of places we send people and are not always of a specific hotel or trip. We will confirm the details that matter in writing before you commit.",
      ],
    },
    {
      heading: "Our role",
      paragraphs: [
        "For most arrangements we act as an agent for the suppliers who provide your travel, such as airlines, hotels, cruise lines and tour operators. Your contract for those services is with the supplier, on their terms, and we will tell you who the supplier is.",
        "Where we put together a flight inclusive package ourselves, we do so under our own ATOL and we are responsible for it under the Package Travel and Linked Travel Arrangements Regulations 2018. We will make clear which applies before you commit.",
      ],
    },
    {
      heading: "Quotes and prices",
      paragraphs: [
        "Quotes are based on availability and prices at the time we give them, and are not held until you confirm and pay a deposit. There are no planning fees and no admin charges: we are paid by the supplier. Any change a supplier makes to a price after you confirm is governed by that supplier's terms.",
      ],
    },
    {
      heading: "Payment",
      paragraphs: [
        "Deposits and balances, and when they are due, depend on the supplier and will be set out in your confirmation. If a balance is not paid on time, the supplier may cancel the arrangement and apply its cancellation charges.",
      ],
    },
    {
      heading: "Changes and cancellations",
      paragraphs: [
        "If you want to change or cancel your arrangements, tell us in writing as soon as you can. Charges are set by the supplier's terms and usually rise closer to departure. If a supplier changes or cancels your arrangements, we will tell you as soon as we know and help you with the options available.",
      ],
    },
    {
      heading: "Your financial protection",
      paragraphs: [
        "When you buy an ATOL protected flight or flight inclusive holiday from us you will receive an ATOL Certificate, which lists what is financially protected, where you can get information on what this means for you and who to contact if things go wrong.",
        "Our ABTA membership means that, for arrangements not covered by ATOL, you benefit from ABTA's assistance and its Code of Conduct, and from protection if a supplier we have paid on your behalf fails.",
      ],
    },
    {
      heading: "Passports, visas, health and insurance",
      paragraphs: [
        "You are responsible for making sure everyone travelling has a valid passport, any visas or entry permits, and the vaccinations the destination requires. We will point you to the current guidance, and the Foreign, Commonwealth and Development Office publishes advice for every country at gov.uk/foreign-travel-advice.",
        "We strongly recommend travel insurance that covers cancellation, medical expenses and repatriation, taken out as soon as you confirm your trip.",
      ],
    },
    {
      heading: "Our responsibility",
      paragraphs: [
        "We will plan and arrange your travel with reasonable skill and care. Where we act as an agent, we are not responsible for how the supplier provides its services, but we will help you raise any problem with them. Nothing in these terms limits our liability where the law does not allow it to be limited, including for death or personal injury caused by our negligence.",
      ],
    },
    {
      heading: "Problems and complaints",
      paragraphs: [
        `If something goes wrong while you are away, tell the supplier and us straight away so it can be put right there and then. If you want to complain afterwards, email ${contactEmail} within 28 days of coming home and we will respond promptly.`,
        "If we cannot resolve it, ABTA offers an independent dispute resolution scheme, which you can find at abta.com.",
      ],
    },
    {
      heading: "Law",
      paragraphs: [
        "These terms are governed by the law of England and Wales, and the courts of England and Wales can deal with any dispute. If you live in Scotland or Northern Ireland, you can also bring a claim in your local courts.",
      ],
    },
  ],
};
