import Breadcrumb from "@/components/ui/breadcrumb";
import Link from "next/link";
import { Metadata } from "next";
import { ContactSection } from "@/components/sections/contactus";

export const metadata: Metadata = {
  title: "Contact Safra IT Consulting",
  description:
    "Get in touch with Safra IT Consulting for IT outsourcing, managed services, and Microsoft technology solutions.",
  openGraph: {
    title: "Contact Safra IT Consulting",
    description:
      "Let's discuss how we can help your business scale through IT outsourcing and Microsoft technology services.",
    url: "https://www.safraconsulting.com/contact",
    siteName: "Safra IT Consulting",
    images: [{ url: "/og-contact.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Safra IT Consulting",
    description:
      "Let's discuss how we can help your business scale through IT outsourcing and Microsoft technology services.",
    images: ["/og-contact.png"],
  },
};
export default function ContactPage() {
  return (
    <section className="px-4 md:px-8 py-20 max-w-4xl mx-auto">
      <Breadcrumb paths={[{ name: "Home", href: "/" }, { name: "Contact" }]} />

      <h1 className="text-4xl font-bold mb-4 text-gray-900">Get in Touch</h1>
      <p className="text-gray-700 mb-8">
        Looking forward to helping you grow faster.
      </p>

      <ContactSection />

      <div className="mt-10 text-center">
        <p className="text-gray-600 mb-3">Prefer to speak directly?</p>
        <Link
          href="https://outlook.office365.com/owa/calendar/SafraITConsulting1@safraconsulting.com/bookings/"
          target="_blank"
          className="inline-block text-sm text-[#06c6ef] hover:underline font-medium"
        >
          📅 Book a Call →
        </Link>
      </div>
    </section>
  );
}
