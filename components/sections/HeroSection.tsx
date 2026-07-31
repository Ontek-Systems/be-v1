import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/ui/Heading";
import { HeroCarousel } from "@/components/sections/HeroCarousel";
import { HeroContactForm } from "@/components/sections/HeroContactForm";

function GoldStars() {
  return (
    <div className="flex items-center justify-center gap-1" aria-hidden="true">
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
      <div className="relative min-h-[86dvh] overflow-hidden sm:min-h-[90dvh] lg:min-h-[92dvh]">
        <HeroCarousel />

        <div className="relative z-10 flex h-full min-h-[86dvh] flex-col sm:min-h-[90dvh] lg:min-h-[92dvh]">
          <div className="flex flex-1 flex-col items-center justify-center">
            <Container>
              <div className="mx-auto max-w-3xl text-center">
                <div className="translate-y-[5px] drop-shadow-[0_2px_11px_rgba(0,0,0,0.94)]">
                  <GoldStars />
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.207em] text-white">
                    5-star Google-rated
                  </p>
                  <Heading
                    as="h1"
                    className="mt-4 text-[2.0625rem] leading-[0.99]! text-white xs:text-[2.475rem] sm:text-[3.3rem] lg:text-[4.125rem]"
                  >
                    Plan your next escape with us.
                  </Heading>
                </div>
              </div>
            </Container>
          </div>

          <div className="relative pb-8 sm:pb-10 lg:pb-12">
            <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[-10px] bg-gradient-to-t from-black/80 to-transparent" />
            <Container className="relative">
              <HeroContactForm />
            </Container>
          </div>
        </div>
      </div>
    </section>
  );
}
