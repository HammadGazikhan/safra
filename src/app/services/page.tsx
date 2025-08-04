import Link from "next/link";
import Breadcrumb from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "SDR Outsourcing",
    description:
      "Build and scale your sales development efforts with trained SDRs who work remotely under your brand.",
    href: "/services/sdr",
  },
  {
    title: "Technical Resource Outsourcing",
    description:
      "Access certified Microsoft consultants, cloud engineers, and developers to extend your delivery capacity.",
    href: "/services/technical-resource",
  },
  {
    title: "Software Development",
    description:
      "From MVPs to enterprise platforms we help you ship high-quality software products faster.",
    href: "/services/software-development",
  },
  {
    title: "Managed Services",
    description:
      "Our 24/7 support teams help you monitor, manage, and secure client environments with confidence.",
    href: "/services/managed-services",
  },
  {
    title: "Microsoft Alliances",
    description:
      "We support Microsoft partners with certification-as-a-service, audits, CO-OP claims, and more.",
    href: "/services/microsoft-alliances",
  },
];

export default function ServicesOverviewPage() {
  return (
    <section className="px-4 md:px-8 py-20 max-w-6xl mx-auto">
      <Breadcrumb paths={[{ name: "Home", href: "/" }, { name: "Services" }]} />

      <h1 className="text-4xl font-bold mb-4 text-gray-900">Our Services</h1>
      <p className="text-gray-700 text-lg mb-12 max-w-3xl">
        Safra IT Consulting delivers flexible, scalable IT solutions designed to
        help your business grow faster. From Microsoft-certified engineers to
        24/7 support teams, we help you extend your delivery quietly and
        efficiently.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-20">
        {services.map((service) => (
          <div
            key={service.title}
            className="p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {service.title}
            </h2>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <Link
              href={service.href}
              className="text-blue-600 font-medium hover:underline text-sm"
            >
              Learn More →
            </Link>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 p-10 rounded-lg text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Not sure which service fits your needs?
        </h2>
        <p className="text-gray-700 mb-5">
          We're here to guide you through every step.
        </p>
        <Link href="/contact">
          <Button>Talk to Us</Button>
        </Link>
      </div>
    </section>
  );
}
