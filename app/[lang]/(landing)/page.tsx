import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "@/get-dictionary";
import {
  FeaturesSection,
  FloatingElements,
  Footer,
  HeroSection,
  HowItWorksSection,
  Navbar,
  ScrollProgress,
} from "./_components";
import { CTASection } from "./_components/CTASection";

export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <div className="min-h-screen">
      <FloatingElements />
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
