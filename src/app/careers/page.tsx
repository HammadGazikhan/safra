import Breadcrumb from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers at Safra IT Consulting",
  description:
    "Join Safra IT Consulting — work with global clients on cutting-edge Microsoft, cybersecurity, and development projects.",
  openGraph: {
    title: "Careers at Safra IT Consulting",
    description:
      "Work remotely with global clients and top-tier tech teams. Explore open roles at Safra IT Consulting.",
    url: "https://www.safraconsulting.com/careers",
    siteName: "Safra IT Consulting",
    images: [{ url: "/og-careers.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at Safra IT Consulting",
    description:
      "Work remotely with global clients and top-tier tech teams. Explore open roles at Safra IT Consulting.",
    images: ["/og-careers.png"],
  },
};
export default function CareersPage() {
  return (
    <section className="px-4 md:px-8 py-20 max-w-4xl mx-auto">
      <Breadcrumb paths={[{ name: "Home", href: "/" }, { name: "Careers" }]} />

      <h1 className="text-4xl font-bold mb-4 text-gray-900">Join Our Team</h1>

      <p className="text-gray-700 text-lg mb-10">
        At <strong>Safra IT Consulting</strong>, we believe in building global
        teams that thrive on trust, flexibility, and growth. We're always
        looking for passionate developers, Microsoft consultants, and IT experts
        who love working in dynamic, remote-first environments.
      </p>

      <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
        <div className="rounded-lg overflow-hidden shadow-md">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=870&q=80"
            alt="Remote Culture"
            className="object-cover w-full h-full"
            width={700}
            height={500}
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Why Work With Us?
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>100% Remote work from anywhere</li>
            <li>Flexible working hours</li>
            <li>Project-based consulting roles</li>
            <li>Global client exposure</li>
            <li>Career Growth Opportunities</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-10">
        <h3 className="text-xl text-gray-800 mb-4 font-medium">
          Think you'd be a great fit?
        </h3>
        <p className="text-gray-600 mb-4">
          Send us your resume and a short intro at
          <br />
          <a
            href="mailto:careers@safraconsulting.com"
            className="text-blue-600 underline font-medium"
          >
            careers@safraconsulting.com
          </a>
        </p>

        <Link href="/contact">
          <Button>Contact Us Instead</Button>
        </Link>
      </div>
    </section>
  );
}
