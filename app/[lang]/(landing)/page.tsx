import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "@/get-dictionary";
import {
  FloatingElements,
  HeroSection,
  Navbar,
  ScrollProgress,
} from "./_components";

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
      </main>
    </div>
  );
}
