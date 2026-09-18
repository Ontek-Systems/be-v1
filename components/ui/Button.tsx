import type { ButtonHTMLAttributes, ReactNode } from "react";
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

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  focusTone?: ButtonFocusTone;
  fullWidthOnMobile?: boolean;
}

export function Button({
  children,
  variant = "primary",
  focusTone = "default",
  fullWidthOnMobile = false,
  className = "",
  ...rest
}: Readonly<ButtonProps>) {
  const width = fullWidthOnMobile ? "w-full sm:w-auto" : "";
  const classes = `${buttonBase} ${buttonVariants[variant]} ${buttonFocus[focusTone]} ${width} ${className}`;
  const sweepTone = buttonSweepTone[variant];

  if (!sweepTone) {
    return (
      <button type="button" className={classes} {...rest}>
        {children}
      </button>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      <ButtonSweep tone={sweepTone} />
      <span
        className={`relative z-10 transition-colors duration-300 ease-in-out ${buttonLabelHover[variant]}`}
      >
        {children}
      </span>
    </button>
  );
}
