"use client";

import Link from "next/link";
import { Mail, Linkedin } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Grid Layout for md+ */}
        <div className="hidden md:grid gap-8 grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold">Safra Consulting</h2>
            <p className="text-sm mt-2 text-gray-400">
              Empowering Microsoft Partners through Smart Staffing, Strategic
              Alliances & Managed Services.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/teams">Teams</Link>
              </li>
              <li>
                <Link href="/careers">Careers</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@safraconsulting.com">
                  info@safraconsulting.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm text-gray-400 mb-2">
              Get the latest updates and insights.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-2"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 w-full rounded-md bg-gray-800 text-white placeholder-gray-500 text-sm focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Accordion for mobile */}
        <div className="block md:hidden">
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="company">
              <AccordionTrigger className="text-white">
                Company
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-sm text-gray-300 pl-2">
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/services">Services</Link>
                  </li>
                  <li>
                    <Link href="/teams">Teams</Link>
                  </li>
                  <li>
                    <Link href="/careers">Careers</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="contact">
              <AccordionTrigger className="text-white">
                Contact
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-sm text-gray-300 pl-2">
                  <li className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <a href="mailto:info@safraconsulting.com">
                      info@safraconsulting.com
                    </a>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="newsletter">
              <AccordionTrigger className="text-white">
                Stay Updated
              </AccordionTrigger>
              <AccordionContent>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="flex flex-col gap-2 mt-2"
                >
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-2 w-full rounded-md bg-gray-800 text-white placeholder-gray-500 text-sm focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700"
                  >
                    Subscribe
                  </button>
                </form>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Bottom Line */}
        <div className="mt-12 border-t border-gray-700 pt-4 text-sm text-center text-gray-400">
          © {new Date().getFullYear()} Safra Consulting. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
