"use client";

import { Button } from "@/components/ui/Button";
import { reachableContactPeople } from "@/lib/contactDetails";
import { smoothScrollTo } from "@/lib/smoothScrollTo";

/**
 * The phone and tablet hero action: one outline button to the enquiry form,
 * then a call link for each of Emma and Sylvia.
 */
export function HeroCallToAction() {
  return (
    <div className="flex flex-col items-center">
      <Button
        variant="outline"
        focusTone="onDark"
        className="w-full max-w-xs"
        onClick={() => smoothScrollTo("contact")}
      >
        Plan your trip
      </Button>

      <div className="mt-7 flex items-center gap-8">
        {reachableContactPeople.map((person) => (
          <a
            key={person.name}
            href={`tel:+${person.phoneHref}`}
            className="hero-text-shadow-strong cursor-pointer text-base font-semibold text-white underline decoration-2 underline-offset-[10px] transition-colors duration-200 hover:text-primary-gold focus-visible:text-primary-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Call {person.name}
          </a>
        ))}
      </div>
    </div>
  );
}
