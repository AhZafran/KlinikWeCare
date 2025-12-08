import { HeroSection } from "@/components/HeroSection";
import { ContactUs } from "@/components/ContactUs";
import { OurServices } from "@/components/OurServices";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ContactUs />
      <OurServices />
      <WhyChooseUs />
      <Testimonials />
    </main>
  );
}
