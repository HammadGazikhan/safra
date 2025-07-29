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
            We provide full-cycle software development services tailored for
            startups, enterprises, and IT vendors — from planning and UI/UX to
            development, testing, deployment, and ongoing support.
          </p>

          <ul className="list-disc ml-5 space-y-2 text-gray-600 text-sm">
            <li>Web application development (React, Angular, Next.js)</li>
            <li>
              Mobile app development (iOS, Android, Flutter, React Native)
            </li>
            <li>Custom enterprise solutions (.NET, Java, Python)</li>
            <li>Cloud-native applications (Azure, AWS, GCP)</li>
            <li>
              API development & 3rd-party integrations (REST, GraphQL, SOAP)
            </li>
            <li>
              Microservices architecture & containerization (Docker, Kubernetes)
            </li>
            <li>
              DevOps & CI/CD automation (GitHub Actions, Azure DevOps, Jenkins)
            </li>
            <li>Database engineering (SQL Server, MongoDB, PostgreSQL)</li>
            <li>Quality assurance & automated testing (Cypress, Selenium)</li>
            <li>
              Agile product delivery with dedicated teams or staff augmentation
            </li>
          </ul>

          <Link
            href="/contact"
            className="mt-6 inline-block text-blue-600 underline text-sm hover:text-blue-800"
          >
            Let’s talk about your project →
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
