import type { Metadata } from "next";
import { pageMetadata } from "@/lib/pageMetadata";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { PageMain } from "@/components/layout/PageMain";
import { LegalDocumentSection } from "@/components/sections/LegalDocumentSection";
import { privacyPolicy } from "@/lib/legal";

export const metadata: Metadata = pageMetadata({
  title: privacyPolicy.title,
  description:
    "How Blissful Escapes collects, uses and protects the personal information you share when you enquire about or plan a trip.",
  path: "/privacy/",
});

export default function PrivacyPage() {
  return (
    <>
      <Header solid />
      <PageMain>
        <LegalDocumentSection document={privacyPolicy} />
      </PageMain>
      <Footer />
    </>
  );
}
