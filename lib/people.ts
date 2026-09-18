import { basePath } from "@/lib/siteConfig";

export interface Person {
  name: string;
  role: string;
  /**
   * Placeholder framing, built only from the facts table in COPYWRITING.md §11.
   *
   * TBC: Emma is supplying a first person bio for each of them, and §5 of the
   * copy guide is explicit that the site's job is to frame those rather than
   * write them. Replace `bio` with her words when they arrive, and switch the
   * card to first person at the same time.
   */
  bio: string[];
  /**
   * TBC: the brief calls for a casual holiday photograph of each of them, not a
   * corporate headshot. Until those exist the card renders its typographic
   * form rather than borrowing a stock destination image.
   */
  imageSrc?: string;
  imageAlt?: string;
  /** Tailwind object position class, to keep the face in frame on tall crops. */
  imageClassName?: string;
}

export const people: Person[] = [
  {
    name: "Emma",
    role: "Luxury travel planner, Ormskirk",
    bio: [
      "Emma founded Blissful Escapes four years ago and runs it from Ormskirk, Lancashire, after a career running large retail teams, latterly as a general manager at B&Q.",
      "She plans honeymoons, safaris and milestone trips, and you can reach her directly seven days a week.",
    ],
    imageSrc: `${basePath}/assets/images/testimonials/WhatsApp%20Image%202026-09-02%20at%2016.37.00.webp`,
    imageAlt: "Emma in a town square on holiday",
    imageClassName: "object-[50%_18%]",
  },
  {
    name: "Sylvia",
    role: "Luxury travel planner, Wigan",
    bio: [
      "Sylvia works alongside Emma and looks after her own clients in and around Wigan.",
      "She plans the same range of trips, from honeymoons and family holidays to destination weddings, and you can reach her directly on her own number.",
    ],
  },
];
