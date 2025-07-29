import Breadcrumb from "@/components/ui/breadcrumb";
import Image from "next/image";
import Link from "next/link";

export default function SoftwareDevPage() {
  return (
    <section className="px-4 md:px-8 py-20 max-w-5xl mx-auto">
      <Breadcrumb
        paths={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "Software Development" },
        ]}
      />

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Software Development
          </h1>
          <p className="text-gray-700 mb-6">
            We offer full-cycle software services from planning to deployment —
            backed by proven Microsoft expertise.
          </p>
          <ul className="list-disc ml-5 space-y-2 text-gray-600">
            <li>Web & mobile app development</li>
            <li>API integration, microservices</li>
            <li>DevOps & CI/CD enablement</li>
            <li>Tech stack: React, .NET, Node.js, Azure, Flutter, and more</li>
          </ul>
          <Link
            href="/contact"
            className="mt-6 inline-block text-blue-600 underline text-sm hover:text-blue-800"
          >
            Let's talk about your project →
          </Link>
        </div>

        <div className="rounded-lg overflow-hidden shadow-md">
          <Image
            src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=870&q=80"
            alt="Software Development"
            width={700}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
