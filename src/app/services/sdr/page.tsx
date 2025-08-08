import Breadcrumb from "@/components/ui/breadcrumb";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SDR Outsourcing | Safra IT Consulting",
  description:
    "Trained SDRs for lead generation and qualification, delivered remotely under your brand.",
  openGraph: {
    title: "SDR Outsourcing",
    description:
      "We provide white-label SDR outsourcing to boost lead generation and sales pipeline growth.",
    url: "https://www.safraconsulting.com/services/sdr",
    siteName: "Safra IT Consulting",
    images: [{ url: "/og-services.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SDR Outsourcing",
    description:
      "We provide white-label SDR outsourcing to boost lead generation and sales pipeline growth.",
    images: ["/og-services.png"],
  },
};

export default function SDRPage() {
  return (
    <section className="px-4 md:px-8 py-20 max-w-5xl mx-auto">
      <Breadcrumb
        paths={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "SDR Outsourcing" },
        ]}
      />

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            SDR Outsourcing
          </h1>
          <p className="text-gray-700 mb-6">
            Trained SDRs working under your brand to generate, qualify, and
            nurture outbound leads 100% white-labeled.
          </p>
          <ul className="list-disc ml-5 space-y-2 text-gray-600">
            <li>Outbound lead generation & qualification</li>
            <li>
              Trained SDR pool skilled in B2B outreach and sales automation
              tools.
            </li>
            <li>Remote delivery with full transparency</li>
            <li>White-label integration with your team</li>
          </ul>

          <Link
            href="/contact"
            className="mt-6 inline-block text-blue-600 underline text-sm hover:text-blue-800"
          >
            Talk to us about SDR Outsourcing →
          </Link>
        </div>

        <div className="rounded-lg overflow-hidden shadow-md">
          <Image
            src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=870&q=80"
            alt="SDR Outsourcing"
            width={700}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
