import { AboutPersonPanel } from "@/components/common/AboutPersonPanel";
import { people } from "@/lib/people";

/**
 * The About page opens on the two people rather than a destination photograph.
 * Exactly one screen tall from lg up, each panel a full screen when stacked,
 * so this section carries no rhythm token.
 */
export function AboutPeopleHero() {
  return (
    <section aria-labelledby="about-heading" className="relative grid grid-cols-1 lg:h-svh lg:grid-cols-2">
      <h1 id="about-heading" className="sr-only">
        About us, Emma Carrigan and Sylvia
      </h1>

      {people.map((person, index) => (
        <AboutPersonPanel key={person.name} person={person} index={index} />
      ))}

      {/* A gold hairline where the two portraits meet, desktop only. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px bg-primary-gold/60 lg:block"
      />
    </section>
  );
}
