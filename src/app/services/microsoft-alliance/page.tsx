import Breadcrumb from "@/components/ui/breadcrumb";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Microsoft Alliance & Partner Support | Safra IT Consulting",
  description:
    "Helping Microsoft Partners transition to new Solution Partner Designations, manage CO-OP funds, and optimize MPN.",
  openGraph: {
    title: "Microsoft Alliance & Partner Support",
    description:
      "Safra helps Microsoft Partners with designations, CO-OP, CPOR/DPOR, and program optimization.",
    url: "https://www.safraconsulting.com/services/microsoft-alliance",
    siteName: "Safra IT Consulting",
    images: [{ url: "/og-services.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Microsoft Alliance & Partner Support",
    description:
      "Safra helps Microsoft Partners with designations, CO-OP, CPOR/DPOR, and program optimization.",
    images: ["/og-services.png"],
  },
};

export default function SPDPage() {
  return (
    <section className="px-4 md:px-8 py-20 max-w-5xl mx-auto">
      <Breadcrumb
        paths={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "Microsoft Alliances" },
        ]}
      />

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Microsoft Alliance
          </h1>
          <p className="text-gray-700 mb-6">
            We help you align strategically with Microsoft to unlock partner
            benefits, certifications, and co-sell growth.
          </p>
          <ul className="list-disc ml-5 space-y-2 text-gray-600">
            {/* <li>
              Transition from Silver/Gold to Microsoft Solutions Partner
              Designation
            </li>
            <li>MCI Engagements</li>
            <li>Helping Navigate MAICPP Program</li>
            <li>MPN audits & optimization</li>
            <li>Managing CPOR / DPOR points</li> */}
            <li> Helping Navigate MAICPP Program</li>
            <li>
              {" "}
              Transition from legacy Silver/Gold competency to the new Microsoft
              Solutions Partner Designation
            </li>
            <li>
              Proactive Assistance for Solutions Partner Designation Achievement{" "}
            </li>
            <li>Skilling Metrics Gap Analysis & Solution </li>
            <li> CO-OP Funds Management and MCI Engagement </li>
            <li> MPN Audits and Optimization </li>
            <li> CPOR/DPOR Strategy & Reporting </li>
            <li> Go-to-market Strategy</li>
          </ul>

          <Link
            href="/contact"
            className="mt-6 inline-block text-blue-600 underline text-sm hover:text-blue-800"
          >
            Talk to us about Microsoft Alliances →
          </Link>
        </div>

        <div className="rounded-lg overflow-hidden shadow-md">
          <Image
            src="https://images.unsplash.com/photo-1580894908361-967195033215?auto=format&fit=crop&w=870&q=80"
            alt="Microsoft Alliances"
            width={700}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
