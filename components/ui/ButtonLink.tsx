import Link from "next/link";
import type { ReactNode } from "react";
import {
  buttonBase,
  buttonFocus,
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

  return (
    <Link
      href={href}
      className={`${buttonBase} ${buttonVariants[variant]} ${buttonFocus[focusTone]} ${width} ${className}`}
    >
      {variant === "primary" && <ButtonSweep />}
      <span className="relative z-10 transition-colors duration-300 ease-in-out group-hover:text-white">
        {children}
      </span>
    </Link>
  );
}
