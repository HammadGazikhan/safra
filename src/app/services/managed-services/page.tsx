import Breadcrumb from "@/components/ui/breadcrumb";
import Image from "next/image";
import Link from "next/link";

export default function ManagedPage() {
  return (
    <section className="px-4 md:px-8 py-20 max-w-5xl mx-auto">
      <Breadcrumb
        paths={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "Managed Services" },
        ]}
      />

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            24/7 Managed Services & Support
          </h1>
          <p className="text-gray-700 mb-6">
            Our team operates as your white-labeled MSP/MSSP delivering secure,
            scalable IT management and infrastructure support.
          </p>
          <ul className="list-disc ml-5 space-y-2 text-gray-600">
            <li>24/7 operations with SLA-driven delivery</li>
            <li>RMM, PSA, and SIEM stack support</li>
            <li>Real-time monitoring & incident response</li>
            <li>Flexible engagement models, global coverage</li>
          </ul>
          <Link
            href="/contact"
            className="mt-6 inline-block text-blue-600 underline text-sm hover:text-blue-800"
          >
            Start a managed services engagement →
          </Link>
        </div>

        <div className="rounded-lg overflow-hidden shadow-md">
          <Image
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=870&q=80"
            alt="24/7 Managed Services"
            width={700}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
