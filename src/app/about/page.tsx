import Breadcrumb from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Linkedin } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Safra IT Consulting",
  description:
    "Learn more about Safra IT Consulting, our mission, and our leadership team.",
  openGraph: {
    title: "About Us - Safra IT Consulting",
    description:
      "Meet the team behind Safra IT Consulting and our mission to deliver excellence.",
    url: "https://www.safraconsulting.com/about",
    siteName: "Safra IT Consulting",
    images: ["/og-about.png"], // Optional different image
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Safra IT Consulting",
    description:
      "Meet the team behind Safra IT Consulting and our mission to deliver excellence.",
    images: ["/og-about.png"],
  },
};
export default function AboutPage() {
  return (
    <section className="px-4 md:px-8 py-20 max-w-6xl mx-auto">
      <Breadcrumb paths={[{ name: "Home", href: "/" }, { name: "About Us" }]} />

      {/* Section 1: Who We Are */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
        <div>
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Who We Are</h1>
          <p className="text-gray-700 text-lg">
            At <strong>Safra IT Consulting</strong>, we specialize in delivering
            flexible and scalable IT outsourcing models to help global clients
            grow faster.
            <br />
            <br />
            From certified Microsoft consultants to cybersecurity engineers and
            full-stack developers, our remote team integrates quietly under your
            brand, ensuring you deliver with confidence and scale without
            overhead.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden shadow-md">
          <Image
            src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg"
            alt="Safra IT Team"
            width={700}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Section 2: Mission + Vision */}
      <div className="grid md:grid-cols-2 gap-10 mb-16">
        <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Our Mission
          </h2>
          <p className="text-gray-700">
            To empower IT service providers with access to certified, dependable
            offshore talent delivered quietly, professionally, and with
            long-term partnership in mind.
          </p>
        </div>
        <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Our Vision
          </h2>
          <p className="text-gray-700">
            To become a globally trusted partner for IT outsourcing and managed
            service delivery, enabling clients to grow, scale, and innovate
            faster.
          </p>
        </div>
      </div>

      {/* Section 3: Team Overview */}
      <div className="text-center mb-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Global Talent, Unified Purpose
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Our extended team is trained on global standards and aligned to your
          brand — acting as a seamless extension of your delivery or support
          arm.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Built on Trust. Powered by Talent.
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We operate fully remotely with a global mindset. No matter the time
            zone or location, our consultants are aligned with our delivery
            values: commitment, quality, and collaboration.
            <br />
            <br />
            Each project is powered by certified specialists — not just coders,
            but people who care about outcomes.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden shadow-md">
          <Image
            src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg"
            alt="Our Global Team"
            width={700}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Section 4: Leadership */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Leadership Team
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* CEO */}
          <div className="flex flex-col items-center text-center">
            {/* <Image
              src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg"
              alt="CEO"
              width={300}
              height={300}
              className="rounded-sm object-cover mb-4 shadow-md"
            /> */}
            <h3 className="text-xl font-semibold text-gray-800">⁠Ali Shaikh</h3>
            <p className="text-sm text-gray-500 mb-2">
              Chief Executive Officer
            </p>
            <p className="text-sm text-gray-600 max-w-xs">
              A strategic thinker with 15+ years of experience in global IT
              delivery, Ali is focused on scaling Safra through smart
              partnerships and people-first solutions.
            </p>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center text-blue-600 hover:underline text-sm"
            >
              <Linkedin className="w-4 h-4 mr-1" />
              LinkedIn Profile
            </a>
          </div>

          {/* CTO */}
          <div className="flex flex-col items-center text-center">
            {/* <Image
              src="https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg"
              alt="CTO"
              width={300}
              height={300}
              className="rounded-sm object-cover mb-4 shadow-md"
            /> */}
            <h3 className="text-xl font-semibold text-gray-800">
              Fazal Shaikh
            </h3>
            <p className="text-sm text-gray-500 mb-2">
              Chief Technology Officer
            </p>
            <p className="text-sm text-gray-600 max-w-xs">
              With deep expertise in Microsoft technologies and enterprise
              architecture, Fazal leads Safra's technical direction with
              innovation and precision.
            </p>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center text-blue-600 hover:underline text-sm"
            >
              <Linkedin className="w-4 h-4 mr-1" />
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>

      {/* Section 5: Final CTA */}
      <div className="bg-blue-50 p-10 rounded-lg text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Looking forward to helping you grow faster.
        </h2>
        <Link href="/contact">
          <Button>Book a Consultation</Button>
        </Link>
      </div>
    </section>
  );
}
