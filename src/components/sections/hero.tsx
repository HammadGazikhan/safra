// src/components/sections/Hero.tsx
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="py-24 bg-gray-900 text-white text-center">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Empowering Microsoft Partners through Smart Staffing, Strategic
          Alliances & 24/7 Managed Services
        </h1>
        <p className="text-sm text-gray-400 italic mt-4">
          You maintain the client, we quietly deliver the project.
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <Button className="bg-blue-600 hover:bg-blue-700">
            Get in Touch
          </Button>
          <Button
            variant="outline"
            className=" border-white hover:bg-white text-black hover:text-blue-600"
          >
            Explore Services
          </Button>
        </div>
      </div>
    </section>
  );
}
