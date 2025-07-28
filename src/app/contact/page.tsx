"use client";

import { useState } from "react";
import Breadcrumb from "@/components/ui/breadcrumb";
import Link from "next/link";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="px-4 md:px-8 py-20 max-w-4xl mx-auto">
      <Breadcrumb paths={[{ name: "Home", href: "/" }, { name: "Contact" }]} />

      <h1 className="text-4xl font-bold mb-4 text-gray-900">Get in Touch</h1>
      <p className="text-gray-700 mb-8">
        Looking forward to helping you grow faster — with less pain.
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
        className="space-y-6"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            required
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            required
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Company
          </label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
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

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
        >
          Submit
        </button>

        {submitted && (
          <p className="text-green-600 font-medium pt-2">
            ✅ Thank you! We'll get back to you shortly.
          </p>
        )}
      </form>

      <div className="mt-10 text-center">
        <p className="text-gray-600 mb-3">Prefer to speak directly?</p>
        <Link
          href="https://calendly.com/your-schedule-link"
          target="_blank"
          className="inline-block text-sm text-blue-600 hover:underline font-medium"
        >
          📅 Book a Call →
        </Link>
      </div>
    </section>
  );
}
