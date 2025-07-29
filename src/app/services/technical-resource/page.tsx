import Breadcrumb from "@/components/ui/breadcrumb";
import Image from "next/image";
import Link from "next/link";

export default function TechnicalResourcePage() {
  return (
    <section className="px-4 md:px-8 py-20 max-w-5xl mx-auto">
      <Breadcrumb
        paths={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "Technical Resource Outsourcing" },
        ]}
      />

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Technical Resource Outsourcing
          </h1>
          <p className="text-gray-700 mb-6">
            Get skilled technical experts deployed remotely under your brand.
            Fully scalable, cost-effective, and white-labeled.
          </p>
          <ul className="list-disc ml-5 space-y-2 text-gray-600">
            <li>Remote L1, L2, L3 engineers & solution architect</li>
            <li>Region-specific pools for timezone alignment</li>
            <li>Offshore, white-labeled delivery model</li>
            <li>Fast onboarding, no long-term hiring</li>
          </ul>
          <Link
            href="/contact"
            className="mt-6 inline-block text-blue-600 underline text-sm hover:text-blue-800"
          >
            Talk to us about outsourcing your tech team →
          </Link>
        </div>

        <div className="rounded-lg overflow-hidden shadow-md">
          <Image
            src="https://images.unsplash.com/photo-1580894908361-967195033215?auto=format&fit=crop&w=870&q=80"
            alt="Technical Resource Outsourcing"
            width={700}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
