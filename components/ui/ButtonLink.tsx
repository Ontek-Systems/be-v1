import Link from "next/link";
import type { ReactNode } from "react";
import {
  buttonBase,
  buttonFocus,
  buttonLabelHover,
  buttonSweepTone,
  buttonVariants,
  type ButtonFocusTone,
  type ButtonVariant,
} from "@/components/ui/buttonStyles";
import { ButtonSweep } from "@/components/ui/ButtonSweep";

export interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  focusTone?: ButtonFocusTone;
  fullWidthOnMobile?: boolean;
  className?: string;
}

/** A link that reads as a button. Same styling contract as <Button>. */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  focusTone = "default",
  fullWidthOnMobile = false,
  className = "",
}: Readonly<ButtonLinkProps>) {
  const width = fullWidthOnMobile ? "w-full sm:w-auto" : "";
  const sweepTone = buttonSweepTone[variant];

  return (
    <Link
      href={href}
      className={`${buttonBase} ${buttonVariants[variant]} ${buttonFocus[focusTone]} ${width} ${className}`}
    >
      {sweepTone && <ButtonSweep tone={sweepTone} />}
      <span
        className={`relative z-10 transition-colors duration-300 ease-in-out ${buttonLabelHover[variant]}`}
      >
        {children}
      </span>
    </Link>
  );
}
