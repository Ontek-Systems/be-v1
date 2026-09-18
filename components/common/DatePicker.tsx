"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CalendarDay } from "@/components/ui/CalendarDay";
import { IconButton } from "@/components/ui/IconButton";
import { dateFlexibilityOptions, flexibilityLabel } from "@/lib/tripFormOptions";
import {
  fieldSizeClasses,
  fieldToneClasses,
  type FieldSize,
  type FieldTone,
} from "@/components/ui/fieldStyles";

export interface DatePickerProps {
  id: string;
  name?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  tone?: FieldTone;
  fieldSize?: FieldSize;
  /** How much give there is around the date. Lives here so it is one field, not two. */
  flexibility?: string;
  onFlexibilityChange?: (value: string) => void;
}

const WEEKDAY_LABELS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
const YEAR_RANGE = 6;

function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function formatDate(date: Date) {
  return date.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

function getCalendarDays(viewMonth: Date) {
  const year = viewMonth.getFullYear();
  const month = viewMonth.getMonth();
  const startOffset = (new Date(year, month, 1).getDay() + 6) % 7;
  const start = new Date(year, month, 1 - startOffset);

  return Array.from({ length: 42 }, (_, i) => new Date(start.getFullYear(), start.getMonth(), start.getDate() + i));
}

export function DatePicker({
  id,
  name,
  value,
  onChange,
  placeholder,
  tone = "default",
  fieldSize = "md",
  flexibility = "",
  onFlexibilityChange,
}: Readonly<DatePickerProps>) {
  const [isOpen, setIsOpen] = useState(false);
  const [viewMonth, setViewMonth] = useState(() => startOfDay(new Date()));
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const today = startOfDay(new Date());
  const isOnImage = tone === "onImage";

  const yearOptions = Array.from({ length: YEAR_RANGE }, (_, i) => today.getFullYear() + i);
  const isPrevMonthDisabled = viewMonth.getFullYear() === today.getFullYear() && viewMonth.getMonth() === today.getMonth();

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }
    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  /* The field reads back as one phrase, e.g. "12 June 2027, give or take 2 days". */
  const applySelection = (date: Date | null, flex: string) => {
    if (!date) {
      onChange("");
      return;
    }
    const suffix = flex && flex !== "exact" ? `, ${flexibilityLabel(flex).toLowerCase()}` : "";
    onChange(`${formatDate(date)}${suffix}`);
  };

  const handleSelect = (date: Date) => {
    setSelectedDate(date);
    applySelection(date, flexibility);
    setIsOpen(false);
  };

  const handleFlexibility = (value: string) => {
    const next = value === flexibility ? "" : value;
    onFlexibilityChange?.(next);
    if (next === "flexible") {
      setSelectedDate(null);
      onChange("Fully flexible");
      setIsOpen(false);
      return;
    }
    applySelection(selectedDate, next);
  };

  const handleNotSure = () => {
    setSelectedDate(null);
    onFlexibilityChange?.("");
    onChange("Not sure yet");
    setIsOpen(false);
  };

  const changeMonth = (delta: number) => {
    setViewMonth((current) => {
      const next = new Date(current.getFullYear(), current.getMonth() + delta, 1);
      const minMonth = new Date(today.getFullYear(), today.getMonth(), 1);
      return next < minMonth ? minMonth : next;
    });
  };

  const changeYear = (year: number) => {
    setViewMonth((current) => {
      const next = new Date(year, current.getMonth(), 1);
      const minMonth = new Date(today.getFullYear(), today.getMonth(), 1);
      return next < minMonth ? minMonth : next;
    });
  };

  return (
    <div ref={containerRef} className="relative">
      <div className="relative">
        <input
          id={id}
          name={name}
          type="text"
          autoComplete="off"
          placeholder={placeholder}
          value={value}
          /* Click, not focus. The calendar is a full screen overlay, so opening
             it on focus meant tabbing through the form took the whole page over
             before the reader had asked for anything. Clicking the field still
             opens it, because a click focuses too. */
          onClick={() => setIsOpen(true)}
          onChange={(event) => {
            onChange(event.target.value);
            setSelectedDate(null);
          }}
          className={`w-full pl-4 pr-11 outline-none transition-shadow duration-200 ${fieldSizeClasses[fieldSize]} ${fieldToneClasses[tone]}`}
        />
        <button
          type="button"
          aria-label={isOpen ? "Close calendar" : "Open calendar"}
          onClick={() => setIsOpen((current) => !current)}
          className={`absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer transition-colors duration-150 ${
            isOnImage ? "text-primary-sky hover:text-white" : "text-primary-navy/60 hover:text-primary-navy"
          }`}
        >
          <svg viewBox="0 0 20 20" aria-hidden="true" className="h-5 w-5 fill-none stroke-current">
            <rect x="2.5" y="4" width="15" height="14" strokeWidth="1.5" />
            <path d="M2.5 8H17.5M6.5 2V5.5M13.5 2V5.5" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            onClick={() => setIsOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Choose a departure date"
            className="fixed inset-0 z-50 flex items-center justify-center bg-primary-sky px-4"
          >
            <motion.div
              onClick={(event) => event.stopPropagation()}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12, scale: shouldReduceMotion ? 1 : 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: shouldReduceMotion ? 0 : 12, scale: shouldReduceMotion ? 1 : 0.97 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="w-72 max-w-[calc(100vw-2rem)] bg-white p-5 shadow-[0_20px_60px_rgba(39,73,87,0.28)]"
            >
              <div className="flex items-center justify-between gap-2">
                <IconButton
                  label="Previous month"
                  tone="dark"
                  onClick={() => changeMonth(-1)}
                  disabled={isPrevMonthDisabled}
                  className={`h-8 w-8 ${isPrevMonthDisabled ? "cursor-not-allowed opacity-30" : ""}`}
                >
                  <svg viewBox="0 0 16 16" aria-hidden="true" className="h-3.5 w-3.5 fill-none stroke-current">
                    <path d="M10 3L5 8L10 13" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </IconButton>

                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-semibold text-primary-navy">
                    {viewMonth.toLocaleDateString("en-GB", { month: "long" })}
                  </span>
                  <select
                    aria-label="Select year"
                    value={viewMonth.getFullYear()}
                    onChange={(event) => changeYear(Number(event.target.value))}
                    className="cursor-pointer bg-transparent text-sm font-semibold text-primary-navy outline-none"
                  >
                    {yearOptions.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>

                <IconButton label="Next month" tone="dark" onClick={() => changeMonth(1)} className="h-8 w-8">
                  <svg viewBox="0 0 16 16" aria-hidden="true" className="h-3.5 w-3.5 fill-none stroke-current">
                    <path d="M6 3L11 8L6 13" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </IconButton>
              </div>

              <div className="mt-4 grid grid-cols-7 place-items-center gap-y-1">
                {WEEKDAY_LABELS.map((label) => (
                  <span key={label} className="text-xs font-semibold uppercase tracking-wide text-primary-sky">
                    {label}
                  </span>
                ))}

                {getCalendarDays(viewMonth).map((date) => (
                  <CalendarDay
                    key={date.toISOString()}
                    date={date}
                    label={date.getDate()}
                    isOutsideMonth={date.getMonth() !== viewMonth.getMonth()}
                    isSelected={selectedDate !== null && isSameDay(date, selectedDate)}
                    isToday={isSameDay(date, today)}
                    isDisabled={date < today}
                    onSelect={handleSelect}
                  />
                ))}
              </div>

              {onFlexibilityChange && (
                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary-sky">
                    How flexible are you?
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {dateFlexibilityOptions.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        aria-pressed={flexibility === option.value}
                        onClick={() => handleFlexibility(option.value)}
                        className={`cursor-pointer px-2.5 py-1.5 text-xs font-semibold transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-navy ${
                          flexibility === option.value
                            ? "bg-primary-navy text-white"
                            : "bg-primary-cream text-primary-navy hover:bg-primary-sky hover:text-white"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <button
                type="button"
                onClick={handleNotSure}
                className="mt-4 w-full cursor-pointer py-2 text-center text-sm font-semibold text-primary-sky transition-colors duration-150 hover:text-primary-navy"
              >
                Not sure yet
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
