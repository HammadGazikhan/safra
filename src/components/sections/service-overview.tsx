"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "SDR Outsourcing",
    description:
      "Trained SDRs working remotely under your brand for lead generation and qualification.",
    href: "/services/sdr",
  },
  {
    title: "Microsoft Alliances",
    description:
      "Microsoft partnership & program support including CO-OP, MCI, CPOR, and Certification assistance.",
    href: "/services/microsoft-alliances",
  },
  {
    title: "Technical Resource Outsourcing",
    description:
      "Remote L1–L3 engineers and architects deployed offshore, under your brand. Fully scalable, on-demand.",
    href: "/services/technical-resource",
  },
  {
    title: "Software Development",
    description:
      "Agile development teams for modern web, mobile, API, and DevOps. React, .NET, Azure, and more.",
    href: "/services/software-development",
  },
  {
    title: "24/7 Managed Services & Support",
    description:
      "RMM/SIEM stack-based IT support with SLAs, reporting, and continuous monitoring under white-label delivery.",
    href: "/services/managed-services",
  },
];

export default function ServicesOverview() {
  return (
    <section className="bg-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          What We Offer
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-base">
          Safra delivers specialized solutions through white-label staffing,
          Microsoft programs, and agile tech development all remote, all under
          your brand.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="p-6 border border-gray-200 rounded-xl hover:shadow-md transition-all duration-200 flex flex-col justify-between h-full"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
            <div className="mt-6">
              <Link
                href={service.href}
                className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline group"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
