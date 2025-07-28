// src/components/layout/Navbar.tsx
"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Teams", href: "/teams" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
          Safra
        </Link>
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-700 hover:text-blue-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden">
          <Menu />
        </button>
      </div>

      {open && (
        <div className="md:hidden px-4 py-2 space-y-2 bg-white shadow-md">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block text-gray-700 hover:text-blue-600"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
