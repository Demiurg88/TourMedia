import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tourmedia.pro"),
  title: {
    default: "TourMedia | Лейбл & Производство Hi-End Акустики",
    template: "%s | TourMedia",
  },
  description:
    "TourMedia — музыкальный лейбл, букинг-агентство и производитель премиальных акустических систем для клубов и концертных площадок.",
  keywords: [
    "TourMedia",
    "музыкальный лейбл",
    "букинг агентство",
    "диджеи",
    "акустические системы",
    "Hi-End аудио",
    "клубный звук",
    "концертное оборудование",
  ],
  openGraph: {
    title: "TourMedia | Лейбл & Производство Hi-End Акустики",
    description: "Эксклюзивные диджеи и производство премиальных акустических систем для клубов и концертных площадок.",
    url: "https://tourmedia.pro",
    siteName: "TourMedia",
    images: [
      {
        url: "/og-image.jpg", // Fallback or design assets placeholder
        width: 1200,
        height: 630,
        alt: "TourMedia — Sound Architecture",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TourMedia | Лейбл & Производство Hi-End Акустики",
    description: "Эксклюзивные диджеи и производство премиальных акустических систем для клубов и концертных площадок.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${outfit.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
