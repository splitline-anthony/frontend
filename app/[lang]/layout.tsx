import { Outfit } from "next/font/google";
import "../globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

import { getDictionary, type Locale, locales } from "@/get-dictionary";

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale };
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
  };
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

export default async function Root(props: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const params = await props.params;

  const { children } = props;

  return (
    <html lang={params.lang}>
      <body className={`${outfit.variable} antialiased`}>{children}</body>
    </html>
  );
}
