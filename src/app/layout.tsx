import type { Metadata } from "next";
import { Anek_Latin } from "next/font/google";
import "./globals.css";
import Navbar from "@/section/Navbar";
import Footer from "@/section/Footer";
import StructuredData from "@/components/SEO/StructuredData";

const anek = Anek_Latin({
  subsets: ["latin"],
  variable: "--font-anek",
});

export const metadata: Metadata = {
  title: "Bazaar Digital | Bihar's Leading Digital Marketing Agency",
  description: "Bazaar Digital is Bihar's premier digital marketing agency offering web development, social media management, content marketing, and comprehensive digital solutions.",
  keywords: "digital marketing, web development, social media management, Bihar digital agency, SEO services, content marketing, digital solutions",
  robots: "index, follow",
  authors: [{ name: "Bazaar Digital" }],
  openGraph: {
    type: "website",
    url: "https://bazaardigital.in",
    title: "Bazaar Digital | Bihar's Leading Digital Marketing Agency",
    description: "Comprehensive digital marketing solutions for businesses in Bihar and beyond. Transform your online presence with our expert team.",
    siteName: "Bazaar Digital",
    images: [
      {
        url: "/blue-logo.png",
        width: 1200,
        height: 630,
        alt: "Bazaar Digital - Digital Marketing Agency"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Bazaar Digital | Bihar's Leading Digital Marketing Agency",
    description: "Comprehensive digital marketing solutions for businesses in Bihar and beyond.",
    images: ["/twitter-image.jpg"]
  },
  icons: {
    icon: "/bg-logo.png",
    apple: "/apple-icon.png",
  },
  metadataBase: new URL("https://bazaardigital.in"),
  alternates: {
    canonical: "/",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anek.variable} font-sans antialiased`}>
        <StructuredData />
        <Navbar />
        <div className="pt-16 md:pt-20">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
