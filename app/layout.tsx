import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tour-media-alpha.vercel.app"),
  title: {
    default: "Продюсер Александр Турло | TourMedia DJ Agency",
    template: "%s | Александр Турло",
  },
  description:
    "Продюсерский центр Александра Турло: постоянный штат профессиональных диджеев, музыкальный консалтинг, контроль персонала и поддержка 24/7.",
  keywords: [
    "Александр Турло",
    "TourMedia",
    "букинг диджеев",
    "заказать диджея",
    "продюсерский центр",
    "диджей на мероприятие",
    "электронная музыка",
  ],
  openGraph: {
    title: "Продюсер Александр Турло | TourMedia DJ Agency",
    description: "Постоянный штат проверенных диджеев, трепетное отношение к музыке и вашему мероприятию. Связь 24/7.",
    url: "https://tour-media-alpha.vercel.app",
    siteName: "Александр Турло DJ Agency",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Продюсер Александр Турло",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Продюсер Александр Турло | TourMedia DJ Agency",
    description: "Постоянный штат проверенных диджеев, трепетное отношение к музыке и вашему мероприятию. Связь 24/7.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen flex flex-col bg-[#0a0a0f] text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
