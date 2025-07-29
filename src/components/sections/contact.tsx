"use client";

import { useState } from "react";
import { Button } from "../ui/button";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="bg-gray-100 py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Get in Touch
        </h2>
        <p className="text-gray-600 mb-6">
          Looking forward to helping you grow faster (with less pain).
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
            // Optional: integrate with API or Web3Forms
          }}
          className="space-y-4 text-left"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full h-9 md:h-12 px-4 py-2 rounded-md border border-gray-300 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full h-9 md:h-12 px-4 py-2 rounded-md border border-gray-300 focus:outline-none"
            />
          </div>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Your Message"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none"
          />
          <Button type="submit">
            {submitted ? "Submitted ✓" : "Send Message"}
          </Button>
        </form>

        <div className="mt-6">
          <a
            href="https://calendly.com/your-link" // replace with real link
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline text-sm hover:text-blue-800"
          >
            Or book a call with us →
          </a>
        </div>
      </div>
    </section>
  );
}
