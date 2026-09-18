import Image from "next/image";
import type { Accreditation } from "@/lib/accreditations";

export interface AccreditationLogoProps {
  accreditation: Accreditation;
  /** "bar" is the top of page treatment, "footer" the full size one. */
  size?: "bar" | "footer";
}

/**
 * Height is fixed and width follows the artwork, so marks as different as the
 * square ATOL roundel and the wide ABTA lockup sit on one optical line.
 */
export function AccreditationLogo({ accreditation, size = "footer" }: Readonly<AccreditationLogoProps>) {
  /* The bar is a single line now, so these sit beside the social icons
     rather than owning a row of their own. */
  const heightClass = size === "bar" ? "h-[1.275rem] w-auto sm:h-[1.4875rem]" : "h-10 w-auto sm:h-12 lg:h-14";

  return (
    <Image
      src={accreditation.src}
      alt={accreditation.alt}
      width={accreditation.width}
      height={accreditation.height}
      className={`shrink-0 object-contain ${heightClass}`}
    />
  );
}
