import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "SDR Outsourcing",
    description:
      "Trained SDRs working remotely under your brand for lead generation and qualification.",
    href: "/services/sdr",
  },
  {
    title: "SPD Alliances",
    description:
      "Microsoft partnership & program support including CO-OP, MCI, CPOR, and Certification-as-a-Service.",
    href: "/services/spd",
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
    href: "/services/managed",
  },
];

export default function ServicesOverview() {
  return (
    <section className="bg-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          What We Offer
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto text-base">
          We deliver specialized solutions through white-label staffing,
          strategic programs, and agile tech development.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {services.map((service, idx) => (
          <Card
            key={idx}
            className="hover:shadow-xl transition-shadow h-full flex flex-col justify-between"
          >
            <CardContent className="p-6 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
              <div className="mt-6">
                <Button asChild variant="outline" className="w-full">
                  <a href={service.href}>Learn More</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
