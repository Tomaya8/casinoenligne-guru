import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://casinoenligne.guru"),
  alternates: {
    canonical: "./",
  },
  title: {
    default: "casinoenligne.guru — Le Guide Ultime du Casino en Ligne",
    template: "%s | casinoenligne.guru",
  },
  description:
    "Le guide ultime du casino en ligne pour les joueurs francophones. Comparatif casinos, bonus, jeux, stratégies et actualités iGaming. Expert, indépendant et fiable.",
  authors: [{ name: "casinoenligne.guru" }],
  creator: "casinoenligne.guru",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "casinoenligne.guru",
    title: "casinoenligne.guru — Le Guide Ultime du Casino en Ligne",
    description:
      "Comparatif casinos en ligne, bonus, jeux, stratégies et actualités. Le guide expert pour les joueurs francophones.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "casinoenligne.guru — Le Guide Ultime du Casino en Ligne",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-accent-primary focus:text-white focus:text-sm focus:font-medium"
        >
          Aller au contenu principal
        </a>
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
