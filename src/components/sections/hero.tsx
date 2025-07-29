// src/components/sections/Hero.tsx
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="py-24 bg-gray-900 text-white text-center">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-[27px] md:text-5xl  font-bold mb-6">
          Empowering Microsoft Partners through Staff Augmentation, Strategic
          Microsoft Alliance and 24/7 Managed Services & Support.
        </h1>
        <p className="text-sm text-gray-400 italic mt-4">
          You maintain the client, we quietly deliver the project.
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <Link href="/contact" className="text-blue-600 hover:underline">
            <Button>Get in Touch</Button>
          </Link>
          <Link href="/services" className="text-blue-600 hover:underline">
            {" "}
            <Button variant="secondary">Explore Services</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
