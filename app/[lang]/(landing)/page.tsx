import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "@/get-dictionary";
import Navbar from "./_components/Navbar";
import ScrollProgress from "./_components/ScrollProgress";

export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <ScrollProgress />
      <Navbar />
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start bg-blue-100">
        <h1 className="text-blue-500">{dict.products.cart}</h1>
        <h1 className="text-blue-500">{dict.products.cart}</h1>
        <h1 className="text-blue-500">{dict.products.cart}</h1>
        <h1 className="text-blue-500">{dict.products.cart}</h1>
        <h1 className="text-blue-500">{dict.products.cart}</h1>
        <h1 className="text-blue-500">{dict.products.cart}</h1>
        <h1 className="text-blue-500">{dict.products.cart}</h1>
        <h1 className="text-blue-500">{dict.products.cart}</h1>
        <h1 className="text-blue-500">{dict.products.cart}</h1>
        <h1 className="text-blue-500">{dict.products.cart}</h1>
        <h1 className="text-blue-500">{dict.products.cart}</h1>
        <h1 className="text-blue-500">{dict.products.cart}</h1>
        <h1 className="text-blue-500">{dict.products.cart}</h1>
        <h1 className="text-blue-500">{dict.products.cart}</h1>
        <h1 className="text-blue-500">{dict.products.cart}</h1>
        <h1 className="text-blue-500">{dict.products.cart}</h1>
        <h1 className="text-blue-500">{dict.products.cart}</h1>
        <h1 className="text-blue-500">{dict.products.cart}</h1>
        <h1 className="text-blue-500">{dict.products.cart}</h1>
        <h1 className="text-blue-500">{dict.products.cart}</h1>
        <h1 className="text-blue-500">{dict.products.cart}</h1>
        <h1 className="text-blue-500">{dict.products.cart}</h1>
        <h1 className="text-blue-500">{dict.products.cart}</h1>
        <h1 className="text-blue-500">{dict.products.cart}</h1>
        <h1 className="text-blue-500">{dict.products.cart}</h1>
        <h1 className="text-blue-500">{dict.products.cart}</h1>
        <h1 className="text-blue-500">{dict.products.cart}</h1>
        <h1 className="text-blue-500">{dict.products.cart}</h1>
        <h1 className="text-blue-500">{dict.products.cart}</h1>
        <h1 className="text-blue-500">{dict.products.cart}</h1>
        <h1 className="text-blue-500">{dict.products.cart}</h1>
        <h1 className="text-blue-500">{dict.products.cart}</h1>
        <h1 className="text-blue-500">{dict.products.cart}</h1>
        <h1 className="text-blue-500">{dict.products.cart}</h1>
        <h1 className="text-blue-500">{dict.products.cart}</h1>
        <h1 className="text-blue-500">{dict.products.cart}</h1>
      </main>
    </div>
  );
}
