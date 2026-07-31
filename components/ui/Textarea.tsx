import type { TextareaHTMLAttributes } from "react";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  tone?: "default" | "onCream";
}

export function Textarea({ tone = "default", className = "", ...rest }: Readonly<TextareaProps>) {
  const toneClasses = tone === "onCream" ? "bg-white" : "bg-primary-cream/50";

  return (
    <textarea
      className={`w-full resize-none px-4 py-3.5 text-base text-primary-navy outline-none transition-shadow duration-200 placeholder:text-primary-navy/50 shadow-[inset_0_-2px_0_0_var(--color-primary-navy)] focus:shadow-[inset_0_-2px_0_0_var(--color-primary-navy)] ${toneClasses} ${className}`}
      {...rest}
    />
  );
}
