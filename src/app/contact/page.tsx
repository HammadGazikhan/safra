"use client";

import { useState } from "react";
import Breadcrumb from "@/components/ui/breadcrumb";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

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
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="px-4 md:px-8 py-20 max-w-4xl mx-auto">
      <Breadcrumb paths={[{ name: "Home", href: "/" }, { name: "Contact" }]} />

      <h1 className="text-4xl font-bold mb-4 text-gray-900">Get in Touch</h1>
      <p className="text-gray-700 mb-8">
        Looking forward to helping you grow faster.
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
        className="space-y-2"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            required
            className="mt-1 h-10 md:h-12 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            required
            className="mt-1 h-10 md:h-12 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Company
          </label>
          <input
            type="text"
            className="mt-1 h-10 md:h-12 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            rows={4}
            required
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <Button type="submit">Submit</Button>

        {submitted && (
          <p className="text-green-600 font-medium pt-2">
            ✅ Thank you! We'll get back to you shortly.
          </p>
        )}
      </form>

      <div className="mt-10 text-center">
        <p className="text-gray-600 mb-3">Prefer to speak directly?</p>
        <Link
          href=""
          // target="_blank"
          className="inline-block text-sm text-[#06c6ef] hover:underline font-medium"
        >
          📅 Book a Call →
        </Link>
      </div>
    </section>
  );
}
