import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/ui/Heading";
import { HeroCarousel } from "@/components/sections/HeroCarousel";
import { HeroContactForm } from "@/components/sections/HeroContactForm";
import { HeroCallToAction } from "@/components/common/HeroCallToAction";

function GoldStars() {
  return (
    <div
      className="flex items-center justify-center gap-1"
      aria-hidden="true"
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <svg key={index} viewBox="0 0 20 20" className="h-4 w-4 fill-primary-gold">
          <path d="M10 1.5L12.5 7.2L18.8 7.9L14.1 12.1L15.5 18.3L10 15L4.5 18.3L5.9 12.1L1.2 7.9L7.5 7.2L10 1.5Z" />
        </svg>
      ))}
    </div>
  );
}

export function HeroSection() {
  return (
    <section id="home" className="relative">
      <div className="relative min-h-dvh overflow-hidden">
        <HeroCarousel />

        <div className="relative z-10 flex h-full min-h-dvh flex-col">
          <div className="flex flex-1 flex-col items-center justify-center px-0 pb-4 pt-[calc(var(--header-total)+1rem)]">
            <Container>
              <div className="mx-auto max-w-3xl text-center">
                {/* Each line carries its own shadow rather than the block, because
                    nested filters stack. The small type takes the heavier one. */}
                <div className="translate-y-[5px]">
                  <div className="hero-text-shadow">
                    <GoldStars />
                  </div>
                  <p className="hero-text-shadow-strong mt-3 text-xs font-[690] uppercase tracking-[0.207em] text-white">
                    Five star rated on Google
                  </p>
                  <Heading
                    as="h1"
                    className="hero-title-shadow mt-[1.15rem] text-[2.36rem] leading-[0.99]! text-white xs:text-[2.831rem] sm:text-[3.775rem] lg:text-[3.63rem]"
                  >
                    Boutique luxury travel, planned personally
                  </Heading>
                  <p className="hero-text-shadow-strong mx-auto mt-5 max-w-xl text-base font-[506] leading-relaxed text-white sm:mt-[1.2rem] lg:max-w-3xl lg:text-lg">
                    Honeymoons, safaris and the once in a lifetime trips, planned end to end by Emma
                    and Sylvia, who handle everything themselves.
                  </p>
                </div>
                {/* Below lg the hero is a single action and a phone call,
                    not a form: a booking bar undersold a personal service. */}
                <div className="mt-10 lg:hidden">
                  <HeroCallToAction />
                </div>
              </div>
            </Container>
          </div>

          {/* No gradient of its own. This band used to carry a second, heavier
              one behind the enquiry form, which is what made the homepage floor
              read darker than every other hero. The shared HeroScrim covers it. */}
          <div className="relative hidden pb-12 pt-10 lg:block">
            <Container className="relative">
              <HeroContactForm />
            </Container>
          </div>
        </div>
      </div>
    </section>
  );
}
