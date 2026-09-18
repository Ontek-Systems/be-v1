import { AccreditationLogo } from "@/components/common/AccreditationLogo";
import { accreditations } from "@/lib/accreditations";

export interface AccreditationLogoRowProps {
  size?: "bar" | "footer";
  className?: string;
}

export function AccreditationLogoRow({ size = "footer", className = "" }: Readonly<AccreditationLogoRowProps>) {
  const gapClass =
    size === "bar"
      ? "gap-x-[0.64rem] gap-y-[0.425rem] xs:gap-x-[0.85rem] sm:gap-x-[1.0625rem]"
      : "gap-8 sm:gap-10 lg:gap-12";

  return (
    <div className={`flex flex-wrap items-center justify-center ${gapClass} ${className}`}>
      {accreditations.map((accreditation) => (
        <AccreditationLogo key={accreditation.alt} accreditation={accreditation} size={size} />
      ))}
    </div>
  );
}
