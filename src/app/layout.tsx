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
  title: {
    default: "Casino en Ligne Guide | casinoenligne.guru - Le Guide Ultime",
    template: "%s | casinoenligne.guru",
  },
  description:
    "Le guide ultime du casino en ligne pour les joueurs francophones. Comparatif casinos, bonus, jeux, stratégies et actualités iGaming. Expert, indépendant et fiable.",
  keywords: [
    "casino en ligne",
    "meilleurs casinos",
    "jeux de casino",
    "bonus casino",
    "machines à sous",
    "blackjack",
    "roulette",
    "poker en ligne",
    "casino en ligne france",
    "casino légal",
  ],
  authors: [{ name: "casinoenligne.guru" }],
  creator: "casinoenligne.guru",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "casinoenligne.guru",
    title: "casinoenligne.guru - Le Guide Ultime du Casino en Ligne",
    description:
      "Comparatif casinos en ligne, bonus, jeux, stratégies et actualités. Le guide expert pour les joueurs francophones.",
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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
