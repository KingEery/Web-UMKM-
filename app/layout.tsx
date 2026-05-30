import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Kedai Sunshine88 | Cafe Hangat di Magelang",
  description:
    "Kedai Sunshine88 adalah tempat makan modern di Kota Magelang dengan suasana hangat, nyaman, dan cocok untuk nongkrong.",
  keywords: [
    "Kedai Sunshine88",
    "Cafe Magelang",
    "Tempat makan Magelang",
    "Kedai modern",
    "Nongkrong Magelang"
  ],
  openGraph: {
    title: "Kedai Sunshine88",
    description: "Hangatnya Rasa, Cerahnya Suasana",
    type: "website",
    locale: "id_ID"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${outfit.variable} bg-sunshine-dark font-sans text-white`}>
        {children}
      </body>
    </html>
  );
}
