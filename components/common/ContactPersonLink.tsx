import { PhoneIcon } from "@/components/ui/PhoneIcon";
import type { ContactPerson } from "@/lib/contactDetails";

export interface ContactPersonLinkProps {
  person: ContactPerson;
  className?: string;
  /** Show the first name beside the number, where both numbers sit side by side. */
  showName?: boolean;
  iconClassName?: string;
  /** The banner runs without icons: the name is the label there. */
  showIcon?: boolean;
  /** Extra classes on the number itself, e.g. to weight it above the name. */
  numberClassName?: string;
}

/** The number, with either a phone icon or the first name as its label. */
export function ContactPersonLink({
  person,
  className = "",
  showName = false,
  iconClassName = "h-4 w-4",
  showIcon = true,
  numberClassName = "",
}: Readonly<ContactPersonLinkProps>) {
  return (
    <a href={`tel:+${person.phoneHref}`} aria-label={`Call ${person.name}`} className={className}>
      {showIcon && <PhoneIcon className={`${iconClassName} shrink-0`} />}
      {showName && <span>{person.name}</span>}
      <span className={numberClassName}>{person.phone}</span>
    </a>
  );
}
