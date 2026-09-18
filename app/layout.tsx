import type { Metadata } from "next";
import "./globals.css";
import { LoadingScreen } from "@/components/common/LoadingScreen";
import { PageScrollbar } from "@/components/common/PageScrollbar";
import { SkipToContent } from "@/components/common/SkipToContent";
import { SiteJsonLd } from "@/components/common/SiteJsonLd";
import { ContentSecurityPolicy } from "@/components/common/ContentSecurityPolicy";
import { inter, woodland } from "@/lib/fonts";
import { TripPlanProvider } from "@/lib/TripPlanContext";
import {
  absoluteUrl,
  defaultDescription,
  isPreviewDeployment,
  siteName,
  siteUrl,
} from "@/lib/siteConfig";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Blissful Escapes | Luxury Travel, Personally Planned",
    /* Pages set a bare name and pick the suffix up from here. */
    template: "%s | Blissful Escapes",
  },
  description: defaultDescription,
  applicationName: siteName,
  alternates: { canonical: "/" },
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  referrer: "strict-origin-when-cross-origin",
  formatDetection: { telephone: true, email: true, address: false },
  openGraph: {
    type: "website",
    siteName,
    locale: "en_GB",
    url: siteUrl,
    title: "Blissful Escapes | Luxury Travel, Personally Planned",
    description: defaultDescription,
    images: [
      {
        url: absoluteUrl("/assets/images/og-default.jpg"),
        width: 1200,
        height: 630,
        alt: "A clifftop terrace on Capri looking out over the sea",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blissful Escapes | Luxury Travel, Personally Planned",
    description: defaultDescription,
    images: [absoluteUrl("/assets/images/og-default.jpg")],
  },
  robots: isPreviewDeployment
    ? { index: false, follow: false }
    : {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
      },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    /* en-GB, not en. The copy is British English throughout and the prices,
       dates and phone numbers are all UK. */
    <html lang="en-GB" className={`h-full antialiased ${woodland.variable} ${inter.variable}`}>
      <head>
        <ContentSecurityPolicy />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <SkipToContent />
        <SiteJsonLd />
        <TripPlanProvider>
          <LoadingScreen />
          {children}
          <PageScrollbar />
        </TripPlanProvider>
      </body>
    </html>
  );
}
