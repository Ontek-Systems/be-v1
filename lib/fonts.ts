import localFont from "next/font/local";
import { Inter } from "next/font/google";

/**
 * Woodland is the display face. It ships as two weights only, so it is
 * reserved for headings and the logo wordmark, never body copy.
 */
export const woodland = localFont({
  src: [
    {
      path: "../public/assets/fonts/woodland/PPWoodland-Ultralight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/woodland/PPWoodland-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-woodland",
  display: "swap",
});

/**
 * Inter is the text face: body copy, navigation, form labels, buttons.
 * Variable, so the full 100 to 900 range is genuinely available.
 */
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
