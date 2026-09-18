import type { SocialIconProps } from "@/components/ui/FacebookIcon";

export function TikTokIcon({ className = "" }: Readonly<SocialIconProps>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={`fill-current ${className}`}>
      <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.59 2.59 0 1 1 .74-5.07v-3.14a5.67 5.67 0 0 0-.74-.05A5.68 5.68 0 1 0 15.54 15.4V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3a4.29 4.29 0 0 1-3.24-1.48z" />
    </svg>
  );
}
