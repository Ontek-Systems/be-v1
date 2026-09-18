import { Container } from "@/components/layout/Container";
import { ContactPersonLink } from "@/components/common/ContactPersonLink";
import { AccreditationLogo } from "@/components/common/AccreditationLogo";
import { AccreditationLogoRow } from "@/components/common/AccreditationLogoRow";
import { SocialLinks } from "@/components/common/SocialLinks";
import { ContactBarTicker, type ContactBarTickerItem } from "@/components/common/ContactBarTicker";
import { BarDivider } from "@/components/ui/BarDivider";
import { accreditations } from "@/lib/accreditations";
import { contactEmail, reachableContactPeople } from "@/lib/contactDetails";

/* Everything in the band runs 15% under its original size so the full static
   layout, names included, fits on one line at xl. */
const linkClasses =
  "min-h-[2.125rem] items-center gap-[0.425rem] px-[0.2125rem] text-[0.74rem] font-medium tracking-wide text-white transition-colors duration-150 hover:text-primary-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

const tickerLinkClasses =
  "inline-flex h-[1.9125rem] items-center gap-[0.425rem] text-[0.663rem] font-medium tracking-wide text-white transition-colors duration-150 hover:text-primary-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

/**
 * The banner above the header: social accounts, the ways to reach Emma and
 * Sylvia, and the accreditations. Below xl there is not room for all of that at
 * once, and wrapping it produced two full width rows that ate the top of the
 * hero, so the same content runs as one drifting line instead. From xl up it
 * all fits, and the static split layout is the better read.
 */
export interface TopContactBarProps {
  /** Transparent over the hero, solid once the page has moved. */
  isScrolled?: boolean;
}

function buildTickerItems(): ContactBarTickerItem[] {
  const divider = (key: string) => ({ key, node: <BarDivider /> });
  return [
    { key: "social", node: <SocialLinks size="banner" /> },
    divider("divider-social"),
    ...reachableContactPeople.map((person) => ({
      key: `phone-${person.name}`,
      node: (
        <ContactPersonLink
          person={person}
          showName
          showIcon={false}
          numberClassName="font-bold"
          className={tickerLinkClasses}
        />
      ),
    })),
    divider("divider-phones"),
    {
      key: "email",
      node: (
        <a href={`mailto:${contactEmail}`} className={tickerLinkClasses}>
          <span className="font-bold">{contactEmail}</span>
        </a>
      ),
    },
    divider("divider-email"),
    ...accreditations.map((accreditation) => ({
      key: accreditation.alt,
      node: <AccreditationLogo accreditation={accreditation} size="bar" />,
    })),
    divider("divider-logos"),
  ];
}

export function TopContactBar({ isScrolled = true }: Readonly<TopContactBarProps>) {
  return (
    <div
      className={`relative py-[0.2125rem] transition-colors duration-300 ease-out sm:py-[0.32rem] ${
        isScrolled ? "bg-primary-band" : "bg-transparent"
      }`}
    >
      {/* Over the hero, a hairline keeps the band readable as its own strip. */}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/25 transition-opacity duration-300 ease-out ${
          isScrolled ? "opacity-0" : "opacity-100"
        }`}
      />

      <Container className="relative">
        <ContactBarTicker items={buildTickerItems()} className="xl:hidden" />

        {/* One flat row rather than a left group pushed against a right group:
            justify-between then spaces every item identically, instead of
            leaving one wide hole between the email and the accreditations. */}
        <div className="hidden items-center justify-between gap-x-[1.0625rem] xl:flex">
          <SocialLinks size="banner" />

          <BarDivider />

          {reachableContactPeople.map((person) => (
            <ContactPersonLink
              key={person.name}
              person={person}
              showName
              showIcon={false}
              numberClassName="font-bold"
              className={`inline-flex ${linkClasses}`}
            />
          ))}

          <BarDivider />

          <a href={`mailto:${contactEmail}`} className={`inline-flex ${linkClasses}`}>
            <span className="font-bold">{contactEmail}</span>
          </a>

          <BarDivider />

          <AccreditationLogoRow size="bar" />
        </div>
      </Container>
    </div>
  );
}
