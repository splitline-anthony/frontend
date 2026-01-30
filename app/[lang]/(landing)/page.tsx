import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "@/get-dictionary";

export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
        <h1>{dict.products.cart}</h1>
      </main>
    </div>
  );
}
