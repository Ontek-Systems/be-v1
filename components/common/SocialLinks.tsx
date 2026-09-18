import type { ComponentType } from "react";
import { FacebookIcon, type SocialIconProps } from "@/components/ui/FacebookIcon";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { TikTokIcon } from "@/components/ui/TikTokIcon";
import { LinkedInIcon } from "@/components/ui/LinkedInIcon";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { whatsappHref } from "@/lib/contactDetails";

interface SocialAccount {
  name: string;
  /** Empty until Emma supplies the profile URL, at which point it appears. */
  href: string;
  Icon: ComponentType<SocialIconProps>;
}

/* All four profile URLs supplied by Emma and confirmed. */
const accounts: SocialAccount[] = [
  { name: "Facebook", href: "https://www.facebook.com/profile.php?id=100085571341284", Icon: FacebookIcon },
  { name: "Instagram", href: "https://www.instagram.com/blissfulescapesuk/", Icon: InstagramIcon },
  { name: "TikTok", href: "https://www.tiktok.com/@blissfulescapesuk", Icon: TikTokIcon },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/emma-carrigan-a6b47621/", Icon: LinkedInIcon },
  { name: "WhatsApp", href: whatsappHref, Icon: WhatsAppIcon },
];

export const knownSocialAccounts = accounts.filter((account) => account.href !== "");

export interface SocialLinksProps {
  /** "banner" is the top of page strip, "bar" the mobile menu, "footer" the larger one. */
  size?: "banner" | "bar" | "footer";
  className?: string;
}

/* The banner runs 15% smaller than "bar" so everything fits on one desktop line. */
const sizeClasses = {
  banner: {
    icon: "h-[1.0625rem] w-[1.0625rem] sm:h-[1.17rem] sm:w-[1.17rem]",
    tap: "inline-flex h-[2.125rem] w-[2.125rem] items-center justify-center",
    row: "-mx-[0.32rem] gap-[0.1rem] sm:gap-[0.2rem]",
  },
  bar: {
    icon: "h-5 w-5 sm:h-[1.375rem] sm:w-[1.375rem]",
    tap: "inline-flex h-10 w-10 items-center justify-center",
    row: "-mx-1.5 gap-0.5 sm:gap-1",
  },
  footer: {
    icon: "h-6 w-6",
    tap: "inline-flex h-11 w-11 items-center justify-center",
    row: "-mx-2 gap-1",
  },
};

/**
 * Icons are sized for a thumb, not a mouse: the tap area stays at 40px square
 * or more everywhere but the top banner, which trades a little of that for a
 * single line. The padding lives on the anchor and the negative margin pulls
 * the row back to its optical width.
 */
export function SocialLinks({ size = "footer", className = "" }: Readonly<SocialLinksProps>) {
  const { icon: iconClass, tap: tapClass, row: rowClass } = sizeClasses[size];

  return (
    <div className={`flex items-center ${rowClass} ${className}`}>
      {knownSocialAccounts.map(({ name, href, Icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Blissful Escapes on ${name}`}
          className={`${tapClass} text-white transition-colors duration-150 hover:text-primary-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`}
        >
          <Icon className={iconClass} />
        </a>
      ))}
    </div>
  );
}
