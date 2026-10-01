"use client";

import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, ShieldCheck, Star, Truck } from "lucide-react";
import Image from "next/image";

interface BenefitsProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: Star,
    title: "Top Rated Services",
    description:
      "Rated by residents and businesses across the UAE for fast, effective treatments.",
  },
  {
    icon: Truck,
    title: "Fully Equipped",
    description:
      "Every van carries the sprayers, bait and monitoring gear a job needs in one visit.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    description:
      "Fully licensed by Dubai Municipality with certified technicians and comprehensive insurance on every job we do.",
  },
  {
    icon: Award,
    title: "35+ Years of Experience",
    description:
      "Since 1991 we've protected homes, restaurants, and landmark properties across the UAE from pests and termites.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <Reveal>
        <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden border border-secondary mb-16">
          <Image
            src="/images/pest-control-team.jpg"
            alt="SwiftFix technician team treating a home together"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </Reveal>

      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <Reveal>
          <div>
            <h2 className="text-lg text-primary mb-2 tracking-wider">
              Why Choose Us
            </h2>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              We Treat Your Home Like It&apos;s Our Own
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Every job follows the same disciplined process, whether
              it&apos;s a studio apartment or a Burj Khalifa-scale tower:
              inspect first, treat with the right method, then monitor until
              the problem is actually gone — not just masked for a few weeks.
            </p>
          </div>
        </Reveal>

        <RevealGroup className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon: Icon, title, description }, index) => (
            <RevealItem key={title}>
              <Card className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number h-full">
                <CardHeader>
                  <div className="flex justify-between">
                    <div className="bg-primary/15 p-2 rounded-full mb-6">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                      0{index + 1}
                    </span>
                  </div>

                  <CardTitle>{title}</CardTitle>
                </CardHeader>

                <CardContent className="text-muted-foreground">
                  {description}
                </CardContent>
              </Card>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
};
