"use client";

import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BadgeCheck,
  ClipboardCheck,
  Leaf,
  PhoneCall,
  ShieldCheck,
  Wallet,
} from "lucide-react";

interface FeaturesProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: BadgeCheck,
    title: "Certified Technicians",
    description:
      "Every technician is trained, background-checked, and certified in the latest pest control techniques.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Solutions",
    description:
      "Low-toxicity, environmentally responsible treatments that are tough on pests and gentle on your home.",
  },
  {
    icon: ClipboardCheck,
    title: "Free Inspection",
    description:
      "We inspect your property and identify the source of the problem before recommending any treatment.",
  },
  {
    icon: Wallet,
    title: "Transparent Pricing",
    description:
      "No hidden fees or surprise charges — you get an upfront quote before any work begins.",
  },
  {
    icon: ShieldCheck,
    title: "Guaranteed Results",
    description:
      "If pests return between scheduled visits, we come back and re-treat your property at no extra cost.",
  },
  {
    icon: PhoneCall,
    title: "24/7 Emergency Response",
    description:
      "Pests don't wait for business hours, so neither do we — call anytime for urgent infestations.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <Reveal>
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Features
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          What Sets Us Apart
        </h2>

        <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
          From the first inspection to the final follow-up, every step is
          built around keeping your property pest-free and your family safe.
        </h3>
      </Reveal>

      <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon: Icon, title, description }) => (
          <RevealItem key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon className="size-6 text-primary" />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
};
