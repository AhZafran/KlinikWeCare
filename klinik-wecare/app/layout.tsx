import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StructuredData } from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://klinikwecare.com"),
  title: "Klinik WeCare Desa Melawati | Professional Healthcare Services",
  description: "Professional healthcare clinic in Desa Melawati offering general consultation, chronic disease management, health screening, vaccination, and family medicine. Walk-in or book via WhatsApp.",
  keywords: [
    "clinic Desa Melawati",
    "klinik kesihatan",
    "health clinic Malaysia",
    "medical services Selangor",
    "family doctor",
    "vaccination services",
    "health screening",
    "panel clinic",
    "chronic disease management",
    "general practitioner Desa Melawati",
  ],
  authors: [{ name: "Klinik WeCare Desa Melawati" }],
  openGraph: {
    title: "Klinik WeCare Desa Melawati | Professional Healthcare Services",
    description: "Professional healthcare clinic in Desa Melawati offering comprehensive medical services. Walk-in or book via WhatsApp.",
    url: "https://klinikwecare.com",
    siteName: "Klinik WeCare Desa Melawati",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Klinik WeCare Desa Melawati",
      },
    ],
    locale: "en_MY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Klinik WeCare Desa Melawati | Professional Healthcare Services",
    description: "Professional healthcare clinic in Desa Melawati offering comprehensive medical services.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification-token", // To be replaced with actual token
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StructuredData />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
