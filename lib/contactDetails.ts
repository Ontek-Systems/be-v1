export interface ContactPerson {
  /** First name only, shown next to the number. */
  name: string;
  /** Display form of the number. Leave empty until the real number is known. */
  phone: string;
  /** Digits only, international format, for the tel: href. */
  phoneHref: string;
}

export const contactPeople: ContactPerson[] = [
  { name: "Emma", phone: "07789 652 136", phoneHref: "447789652136" },
  { name: "Sylvia", phone: "07985 101 315", phoneHref: "447985101315" },
];

export const sylviaEmail = "sylvia@blissfulescapes.co.uk";

export const contactEmail = "emma@blissfulescapes.co.uk";

/** The main number, used wherever a single contact number is shown. */
export const contactPhoneDisplay = contactPeople[0].phone;
export const contactPhoneHref = contactPeople[0].phoneHref;

/** International format, digits only, used for the wa.me link. */
export const whatsappNumber = "447789652136";

export const whatsappMessage =
  "Hi Emma, I found you through the Blissful Escapes website and I would love to talk about a trip.";

export const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

/** People with a number on file, in the order they should be displayed. */
export const reachableContactPeople = contactPeople.filter((person) => person.phone !== "");
