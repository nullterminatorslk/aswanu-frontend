import Pricing from "@/components/Pricing";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import FAQSection from "@/components/sections/FAQSection";
import HeroSection from "@/components/sections/HeroSection";
export default function Home() {
  return (
    <main className=" relative overflow-x-hidden space-y-32 mb-16">
      <HeroSection />
      <AboutSection />

      <FAQSection />

      <Pricing />

      <ContactSection />
    </main>
  );
}
