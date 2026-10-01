"use client";

import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Clock, Leaf, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface AboutPointProps {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
}

const aboutPoints: AboutPointProps[] = [
  {
    icon: ShieldCheck,
    text: "Licensed & insured technicians across all 7 emirates",
  },
  {
    icon: Leaf,
    text: "Low-odour treatments, safe around kids, pets and food",
  },
  {
    icon: Clock,
    text: "Same-day emergency response, seven days a week",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <Reveal className="w-full justify-self-stretch">
          <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-secondary">
            <Image
              src="/images/technician-homeowner-consultation.jpg"
              alt="SwiftFix technician reviewing a home treatment plan with a homeowner"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div className="flex flex-col gap-8 w-full">
          <Reveal>
            <div>
              <h2 className="text-lg text-primary mb-2 tracking-wider">
                About SwiftFix Pest Control
              </h2>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Trusted Pest Control Partner Since 1991
              </h2>
              <p className="text-xl text-muted-foreground">
                SwiftFix Pest Control has grown from a single Dubai office
                into a licensed pest management team trusted by homeowners,
                hotels and landmark towers across every emirate. Whatever is
                crossing the line — from bedbugs to rodents, birds or
                unwanted wildlife — our technicians handle it with the same
                care they&apos;d bring to their own home.
              </p>

              <Button asChild className="mt-6 font-bold">
                <Link href="#services">Find Services</Link>
              </Button>
            </div>
          </Reveal>

          <RevealGroup className="flex flex-col gap-4 w-full">
            {aboutPoints.map(({ icon: Icon, text }) => (
              <RevealItem key={text}>
                <div className="flex items-center gap-4 bg-muted/50 dark:bg-card border border-secondary rounded-xl p-5">
                  <div className="bg-primary/15 p-3 rounded-full shrink-0">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <p className="font-medium">{text}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
};
