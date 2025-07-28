import Breadcrumb from "@/components/ui/breadcrumb";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="px-4 md:px-8 py-20 max-w-6xl mx-auto">
      <Breadcrumb paths={[{ name: "Home", href: "/" }, { name: "About Us" }]} />

      {/* Section 1: Intro */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
        <div>
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Who We Are</h1>
          <p className="text-gray-700 text-lg">
            At <strong>Safra IT Consulting</strong>, we specialize in delivering
            flexible and scalable IT outsourcing models to help global clients
            grow faster — with less pain.
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
            src="https://images.unsplash.com/photo-1601933470928-c9a9a3bedb3a?auto=format&fit=crop&w=870&q=80"
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
            offshore talent — delivered quietly, professionally, and with
            long-term partnership in mind.
          </p>
        </div>
        <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Our Vision
          </h2>
          <p className="text-gray-700">
            To become a globally trusted partner for IT outsourcing and managed
            service delivery, enabling clients to grow, scale, and innovate —
            faster.
          </p>
        </div>
      </div>

      {/* Section 3: Team Concept */}
      <div className="text-center mb-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Global Talent, Unified Purpose
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Our extended team operates from multiple regions, trained on global
          standards and aligned to your brand — acting as a seamless extension
          of your delivery or support arm.
        </p>
      </div>

      {/* Section 4: Final CTA */}
      <div className="bg-blue-50 p-10 rounded-lg text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Looking forward to helping you grow faster — with less pain.
        </h2>
        <Link
          href="/contact"
          className="text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md text-sm font-medium"
        >
          Book a Consultation
        </Link>
      </div>
    </section>
  );
}
