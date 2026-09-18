/**
 * Everything between a hero photograph and its type, homepage and inner pages
 * alike, so the two can never drift apart: a light wash over the whole image
 * and the floor gradient under the words. The matching top gradient lives on
 * the Header, and the matching text shadow is the `hero-text-shadow` utility.
 *
 * The floor is deliberately short, a fall through the bottom third and nothing
 * across the middle, so the photograph keeps its brightness where the eye
 * lands. It once ran the whole height at black/40 halfway up and flattened
 * every hero into a dull grey picture, which is why the wash over the image is
 * only 10%: enough to take the glare off a bright sky, not enough to grey the
 * photograph. Do not raise it far without looking at the Cuba and Maldives
 * slides, which are the ones that suffered.
 *
 * Black rather than navy is a documented exception (CLAUDE.md §3).
 */
export function HeroScrim() {
  return (
    <>
      <div aria-hidden="true" className="absolute inset-0 bg-black/10" />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-black/94 via-black/35 via-45% to-transparent"
      />
    </>
  );
}
