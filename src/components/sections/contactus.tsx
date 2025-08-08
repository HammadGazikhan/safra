"use client";
import { useState } from "react";
import { Button } from "../ui/button";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
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
        <label className="block text-sm font-medium text-gray-700">Email</label>
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
  );
}
