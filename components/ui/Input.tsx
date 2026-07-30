import type { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  tone?: "default" | "onImage" | "onWhite";
}

export function Input({ tone = "default", className = "", ...rest }: Readonly<InputProps>) {
  const toneClasses =
    tone === "onImage"
      ? "bg-primary-navy/20 text-white placeholder:text-white shadow-[inset_0_-2px_0_0_var(--color-primary-navy)] focus:shadow-[inset_0_-2px_0_0_var(--color-white)]"
      : tone === "onWhite"
        ? "bg-white text-primary-navy placeholder:text-primary-sky shadow-[inset_0_-2px_0_0_var(--color-primary-sky)] focus:shadow-[inset_0_-2px_0_0_var(--color-primary-navy)]"
        : "bg-primary-cream text-primary-navy placeholder:text-primary-sky shadow-[inset_0_-2px_0_0_var(--color-primary-sky)] focus:shadow-[inset_0_-2px_0_0_var(--color-primary-navy)]";

  return (
    <input
      className={`w-full px-4 py-3.5 text-base outline-none transition-shadow duration-200 ${toneClasses} ${className}`}
      {...rest}
    />
  );
}
