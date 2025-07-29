import ContactSection from "@/components/sections/contact";
import Hero from "@/components/sections/hero";
import Intro from "@/components/sections/intro";
import ServicesOverview from "@/components/sections/service-overview";
import Testimonials from "@/components/sections/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <ServicesOverview />
      {/* <Testimonials /> */}
      <ContactSection />
    </>
  );
}
