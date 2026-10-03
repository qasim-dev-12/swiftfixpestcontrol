"use client";

import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Clock, Leaf, ShieldCheck } from "lucide-react";

interface TrustPointProps {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
}

const trustPoints: TrustPointProps[] = [
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

export const TrustBarSection = () => {
  return (
    <section id="trust-bar" className="container py-8">
      <Reveal>
        <RevealGroup className="grid gap-4 sm:grid-cols-3">
          {trustPoints.map(({ icon: Icon, text }) => (
            <RevealItem key={text}>
              <div className="flex items-center gap-4 bg-muted/50 dark:bg-card border border-secondary rounded-xl p-5 h-full">
                <div className="bg-primary/15 p-3 rounded-full shrink-0">
                  <Icon className="size-6 text-primary" />
                </div>
                <p className="font-medium">{text}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Reveal>
    </section>
  );
};
