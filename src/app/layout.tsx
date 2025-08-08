import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Footer from "@/components/layouts/footer";
import { Navbar } from "@/components/layouts/navbar";

export const metadata: Metadata = {
  title: {
    default: "Safra IT Consulting",
    template: "%s | Safra IT Consulting",
  },
  description:
    "Offshore IT services delivered remotely — SDRs, Microsoft tech, and more.",

  metadataBase: new URL("https://www.safraconsulting.com"), // change to real domain

  // ✅ For Facebook, LinkedIn, WhatsApp
  openGraph: {
    title: "Safra IT Consulting",
    description: "Scalable white-label IT delivery under your brand.",
    url: "https://www.safraconsulting.com",
    siteName: "Safra IT Consulting",
    images: [
      {
        url: "/og-image.png", // Public image in /public
        width: 1200,
        height: 630,
        alt: "Safra IT Consulting Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // ✅ For Twitter/X
  twitter: {
    card: "summary_large_image",
    title: "Safra IT Consulting",
    description: "Remote-first IT delivery solutions, built to scale.",
    images: ["/og-about.png"], // Same image
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-red-text">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
