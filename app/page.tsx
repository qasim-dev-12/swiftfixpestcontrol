import { BenefitsSection } from "@/components/layout/sections/benefits";
import { CommunitySection } from "@/components/layout/sections/community";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { PricingSection } from "@/components/layout/sections/pricing";
import { ServicesSection } from "@/components/layout/sections/services";
import { TestimonialSection } from "@/components/layout/sections/testimonial";
import { TrustBarSection } from "@/components/layout/sections/trust-bar";

export const metadata = {
  title: "SwiftFix Pest Control | Licensed Pest & Termite Control in the UAE",
  description:
    "Licensed pest control and termite protection for homes and businesses across the UAE — trusted by residents and some of Dubai's biggest landmarks since 2019.",
  openGraph: {
    type: "website",
    title: "SwiftFix Pest Control | Licensed Pest & Termite Control in the UAE",
    description:
      "Licensed pest control and termite protection for homes and businesses across the UAE since 2019.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SwiftFix Pest Control | Licensed Pest & Termite Control in the UAE",
    description:
      "Licensed pest control and termite protection for homes and businesses across the UAE since 2019.",
  },
};

export default function Home() {
  return (
    <>
      <TrustBarSection />
      <ServicesSection />
      <BenefitsSection />
      <FeaturesSection />
      <TestimonialSection />
      <CommunitySection />
      <PricingSection />
      <ContactSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}
