import Image from "next/image";
import Breadcrumb from "@/components/ui/breadcrumb";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";

export default function TeamsPage() {
  return (
    <section className="px-4 md:px-8 py-20 max-w-5xl mx-auto">
      <Breadcrumb paths={[{ name: "Home", href: "/" }, { name: "Our Team" }]} />

      <h1 className="text-4xl font-bold mb-6 text-gray-900 text-center">
        The People Behind Safra
      </h1>

      <p className="text-gray-700 text-lg text-center mb-16 max-w-3xl mx-auto">
        Our team is a collective of passionate professionals, each bringing
        unique expertise in Microsoft technologies, software development,
        cybersecurity, and managed services. We believe in working together, not
        in the same room, but toward the same goal.
      </p>

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
            Each project is powered by certified specialists—not just coders,
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

      {/* Leadership Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Leadership Team
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* CEO */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg"
              alt="CEO"
              width={250}
              height={250}
              className="rounded-full object-cover mb-4 shadow-md"
            />
            <h3 className="text-xl font-semibold text-gray-800">⁠Ali Shaikh</h3>
            <p className="text-sm text-gray-500 mb-2">
              Chief Executive Officer
            </p>
            <p className="text-sm text-gray-600 max-w-xs">
              A strategic thinker with 15+ years of experience in global IT
              delivery, Ayaan is focused on scaling Safra through smart
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
            <Image
              src="https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg"
              alt="CTO"
              width={250}
              height={250}
              className="rounded-full object-cover mb-4 shadow-md"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Fazal Shaikh
            </h3>
            <p className="text-sm text-gray-500 mb-2">
              Chief Technology Officer
            </p>
            <p className="text-sm text-gray-600 max-w-xs">
              With deep expertise in Microsoft technologies and enterprise
              architecture, Zara leads Safra's technical direction with
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

      {/* Careers CTA */}
      <div className="mt-16 text-center">
        <h3 className="text-xl text-gray-800 font-medium mb-2">
          Want to be part of our journey?
        </h3>
        <p className="text-gray-600 mb-4">
          Check open roles or send us your profile.
        </p>
        <Link href="/careers">
          <Button>View Careers</Button>
        </Link>
      </div>
    </section>
  );
}
