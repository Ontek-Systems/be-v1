"use client";

import { useState, type SubmitEvent } from "react";
import { FormField } from "@/components/common/FormField";
import { DatePicker } from "@/components/common/DatePicker";
import { Select } from "@/components/ui/Select";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { destinationOptions } from "@/lib/destinationOptions";
import { tripLengthOptions } from "@/lib/tripFormOptions";
import { useTripPlan } from "@/lib/TripPlanContext";
import { smoothScrollTo } from "@/lib/smoothScrollTo";

const labelClass = "text-[0.68rem] tracking-[0.18em] sm:text-[0.72rem]";

/* Travelling from and trip length are desktop only: on a phone they made the
   hero read as a booking engine, which this site deliberately is not, and
   Emma raises both in conversation anyway. */
const desktopOnlyField = "hidden lg:flex";

/**
 * The hero enquiry bar. Four fields across one row from lg up, and on smaller
 * screens the two an enquiry genuinely cannot start without.
 */
export function HeroContactForm() {
  const { submitPlan } = useTripPlan();
  const [from, setFrom] = useState("");
  const [where, setWhere] = useState("");
  const [when, setWhen] = useState("");
  const [flexibility, setFlexibility] = useState("");
  const [duration, setDuration] = useState("");
  const [showPrompt, setShowPrompt] = useState(false);

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!from.trim() && !where && !when.trim() && !flexibility && !duration) {
      setShowPrompt(true);
      return;
    }

    setShowPrompt(false);
    submitPlan({ from: from.trim(), where, when: when.trim(), flexibility, duration });
    smoothScrollTo("contact");
  };

  return (
    <div className="mx-auto max-w-5xl">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5 lg:items-end"
      >
        <FormField
          id="hero-from"
          label="Travelling from"
          tone="onImage"
          labelClassName={labelClass}
          className={desktopOnlyField}
        >
          <Input
            id="hero-from"
            name="from"
            type="text"
            tone="onImage"
            fieldSize="sm"
            autoComplete="address-level2"
            placeholder="Manchester"
            value={from}
            onChange={(event) => setFrom(event.target.value)}
          />
        </FormField>

        <FormField id="hero-where" label="Destination" tone="onImage" labelClassName={labelClass}>
          <Select
            id="hero-where"
            name="where"
            options={destinationOptions}
            value={where}
            onChange={(event) => setWhere(event.target.value)}
            tone="onImage"
            fieldSize="sm"
          />
        </FormField>

        <FormField id="hero-when" label="Departure date" tone="onImage" labelClassName={labelClass}>
          <DatePicker
            id="hero-when"
            name="when"
            placeholder="Pick a date"
            value={when}
            onChange={setWhen}
            flexibility={flexibility}
            onFlexibilityChange={setFlexibility}
            tone="onImage"
            fieldSize="sm"
          />
        </FormField>

        <FormField
          id="hero-duration"
          label="Trip length"
          tone="onImage"
          labelClassName={labelClass}
          className={desktopOnlyField}
        >
          <Select
            id="hero-duration"
            name="duration"
            options={tripLengthOptions}
            value={duration}
            onChange={(event) => setDuration(event.target.value)}
            tone="onImage"
            fieldSize="sm"
          />
        </FormField>

        <Button
          type="submit"
          variant="sky"
          focusTone="onDark"
          className="col-span-2 w-full lg:col-span-1"
        >
          Start planning
        </Button>
      </form>

      <p
        aria-live="polite"
        className={`mt-3 w-full text-center text-sm text-primary-cream transition-opacity duration-200 ${
          showPrompt ? "opacity-100" : "opacity-0"
        }`}
      >
        Let us know roughly where you are coming from, where you would like to go, and we will take it from there.
      </p>
    </div>
  );
}
