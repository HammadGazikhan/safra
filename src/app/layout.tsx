import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Safra IT Consulting",
    template: "%s | Safra IT Consulting",
  },
  description:
    "Offshore IT services delivered remotely — SDRs, Microsoft tech, and more.",
  metadataBase: new URL("https://yourdomain.com"), // change this to your real domain
  openGraph: {
    title: "Safra IT Consulting",
    description: "Scalable white-label IT delivery under your brand.",
    url: "https://yourdomain.com",
    siteName: "Safra IT Consulting",
    images: [
      {
        url: "/og-image.png", // 👈 your PNG goes here
        width: 1200,
        height: 630,
        alt: "Safra IT Consulting - OG Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Safra IT Consulting",
    description: "Remote-first IT delivery solutions, built to scale.",
    images: ["/og-image.png"],
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
