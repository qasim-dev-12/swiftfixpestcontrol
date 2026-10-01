"use client";

import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, BugOff, Rat, TreeDeciduous, Webhook } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ServiceProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  href: string;
}

const serviceList: ServiceProps[] = [
  {
    icon: BugOff,
    title: "Cockroaches",
    description:
      "Cockroaches spread quickly in kitchens, drains and warm equipment voids, and are one of the most common call-outs we receive across the UAE. We use targeted gel baiting and residual treatments that break the breeding cycle, with a follow-up visit to confirm the infestation is fully cleared.",
    href: "/services#cockroaches",
  },
  {
    icon: Webhook,
    title: "Spiders",
    description:
      "Most spiders found around UAE homes are harmless and even helpful, but heavy webbing, egg sacs or a venomous species sighting is worth a professional look. We clear webs and egg sacs, treat the entry points and dark corners spiders shelter in, and identify the species on site.",
    href: "/services#spiders",
  },
  {
    icon: TreeDeciduous,
    title: "Termites",
    description:
      "Termites cause more structural damage in the region than any other pest, often working unseen inside timber and behind finishes for months. Our specialists run a full moisture and activity inspection, then install a baiting or chemical barrier system backed by a written warranty.",
    href: "/services#termites",
  },
  {
    icon: Rat,
    title: "Rodents",
    description:
      "Rats and mice contaminate food, gnaw through wiring and insulation, and multiply quickly once they find shelter and a food source indoors. We combine safe trapping and baiting with exclusion work — sealing the gaps they're getting in through — so the problem doesn't come back.",
    href: "/services#rodents",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24 mb-12">
        <Reveal>
          <div>
            <h2 className="text-lg text-primary mb-2 tracking-wider">
              Services
            </h2>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Common Pest Control
            </h2>
            <h3 className="text-xl text-muted-foreground">
              Six specialist services, one licensed team — here are four of
              the problems we&apos;re called out for most often across the
              UAE.
            </h3>
          </div>
        </Reveal>

        <Reveal className="w-full justify-self-stretch">
          <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-secondary">
            <Image
              src="/images/pest-control-treatment.jpg"
              alt="SwiftFix technician applying a targeted pest control treatment"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>

      <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {serviceList.map(({ icon: Icon, title, description, href }) => (
          <RevealItem key={title}>
            <Card className="bg-muted/60 dark:bg-card h-full flex flex-col">
              <CardHeader>
                <div className="bg-primary/15 p-2 rounded-full w-fit mb-4">
                  <Icon className="size-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto">
                <Button
                  asChild
                  variant="link"
                  className="px-0 font-semibold group/arrow"
                >
                  <Link href={href}>
                    Learn More
                    <ArrowRight className="size-4 ml-1 group-hover/arrow:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal>
        <div className="flex justify-center mt-10">
          <Button asChild size="lg" variant="secondary" className="font-bold">
            <Link href="/services">More Services</Link>
          </Button>
        </div>
      </Reveal>
    </section>
  );
};
