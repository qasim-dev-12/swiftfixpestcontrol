import { AboutSection } from "@/components/layout/sections/about";
import { BenefitsSection } from "@/components/layout/sections/benefits";
import { CommunitySection } from "@/components/layout/sections/community";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { PricingSection } from "@/components/layout/sections/pricing";
import { ServicesSection } from "@/components/layout/sections/services";
import { TeamSection } from "@/components/layout/sections/team";
import { TestimonialSection } from "@/components/layout/sections/testimonial";

export const metadata = {
  title: "SwiftFix Pest Control | Licensed Pest & Termite Control in the UAE",
  description:
    "Licensed pest control and termite protection for homes and businesses across the UAE — trusted by residents and some of Dubai's biggest landmarks since 1991.",
  openGraph: {
    type: "website",
    title: "SwiftFix Pest Control | Licensed Pest & Termite Control in the UAE",
    description:
      "Licensed pest control and termite protection for homes and businesses across the UAE since 1991.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SwiftFix Pest Control | Licensed Pest & Termite Control in the UAE",
    description:
      "Licensed pest control and termite protection for homes and businesses across the UAE since 1991.",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <FeaturesSection />
      <ServicesSection />
      <TestimonialSection />
      <TeamSection />
      <CommunitySection />
      <PricingSection />
      <ContactSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}
