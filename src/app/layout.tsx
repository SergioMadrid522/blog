import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Silent Beauty | Photography by Fabian",
    template: "%s | Fabian Photography",
  },
  description:
    "Explore Silent Beauty, Fabian's photography portfolio. A curated collection capturing the ethereal silence of natural landscapes and the vibrant pulse of urban life.",
  openGraph: {
    title: "Silent Beauty | Photography by Fabian",
    description:
      "Capturing the world's silent moments. A visual journey through light and shadow.",
    url: "https://fabian-photography.vercel.app",
    siteName: "Fabian Photography",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/src/assets/page-logo-website.webp",
        width: 1200,
        height: 630,
        alt: "Silent Beauty Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
