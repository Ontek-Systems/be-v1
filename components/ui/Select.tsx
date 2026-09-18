import type { SelectHTMLAttributes } from "react";
import {
  fieldSizeClasses,
  fieldToneClasses,
  type FieldSize,
  type FieldTone,
} from "@/components/ui/fieldStyles";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  options: SelectOption[];
  tone?: FieldTone;
  fieldSize?: FieldSize;
}

export function Select({
  options,
  tone = "default",
  fieldSize = "md",
  className = "",
  ...rest
}: Readonly<SelectProps>) {
  const arrowClasses = tone === "onImage" ? "text-primary-sky" : "text-primary-navy";

  return (
    <div className="relative">
      <select
        className={`w-full cursor-pointer appearance-none pl-4 pr-10 outline-none transition-shadow duration-200 ${fieldSizeClasses[fieldSize]} ${fieldToneClasses[tone]} ${className}`}
        {...rest}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value} className="bg-white">
            {option.label}
          </option>
        ))}
      </select>
      <svg
        aria-hidden="true"
        viewBox="0 0 12 8"
        className={`pointer-events-none absolute right-4 top-1/2 h-2 w-3 -translate-y-1/2 ${arrowClasses}`}
      >
        <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
}
