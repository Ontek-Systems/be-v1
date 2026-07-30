import type { Metadata } from "next";
import "./globals.css";
import { LoadingScreen } from "@/components/common/LoadingScreen";
import { PageScrollbar } from "@/components/common/PageScrollbar";
import { inter, woodland } from "@/lib/fonts";
import { TripPlanProvider } from "@/lib/TripPlanContext";

export const metadata: Metadata = {
  title: "Blissful Escapes | Luxury Travel, Personally Planned",
  description:
    "Boutique travel planning with a single point of contact. Tell us when and where you want to go, and we'll take it from there.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${woodland.variable} ${inter.variable}`}>
      <body className="min-h-full flex flex-col font-sans">
        <TripPlanProvider>
          <LoadingScreen />
          {children}
          <PageScrollbar />
        </TripPlanProvider>
      </body>
    </html>
  );
}
