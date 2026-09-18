import type { Metadata } from "next";
import { pageMetadata } from "@/lib/pageMetadata";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { PageMain } from "@/components/layout/PageMain";
import { LegalDocumentSection } from "@/components/sections/LegalDocumentSection";
import { termsOfUse } from "@/lib/legal";

export const metadata: Metadata = pageMetadata({
  title: termsOfUse.title,
  description:
    "The terms that apply to using the Blissful Escapes site and to the travel we plan and arrange for you, including ABTA and ATOL protection.",
  path: "/terms/",
});

export default function TermsPage() {
  return (
    <>
      <Header solid />
      <PageMain>
        <LegalDocumentSection document={termsOfUse} />
      </PageMain>
      <Footer />
    </>
  );
}
