"use client";

import Link from "next/link";
import { Mail, Linkedin } from "lucide-react";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 px-4 md:px-8 pt-14 pb-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div>
          <h2 className="text-[27px]  font-bold text-white mb-3">
            Safra Consulting
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Empowering Microsoft Partners through Staff Augmentation, Microsoft
            Alliance and 24/7 Managed Services & Support.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
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
          <h3 className="text-lg font-semibold mb-3 text-white">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:info@safraconsulting.com">
                info@safraconsulting.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Linkedin className="w-4 h-4" />
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">
            Stay Updated
          </h3>
          <p className="text-sm text-gray-400 mb-3">
            Get the latest updates and insights.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col  gap-2"
          >
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 w-full h-10  rounded-md bg-gray-800 text-white placeholder-gray-500 text-sm focus:outline-none"
            />
            <Button className="!h-10" type="submit">
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 text-center text-sm text-gray-500 border-t border-gray-800 pt-4">
        © {new Date().getFullYear()} Safra Consulting. All rights reserved.
      </div>
    </footer>
  );
}
