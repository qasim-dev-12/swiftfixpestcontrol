"use client";

import { useState } from "react";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import {
  AirVent,
  ArrowRight,
  BugOff,
  ChevronDown,
  ChevronUp,
  Container,
  PaintRoller,
  Rat,
  ShieldCheck,
  SprayCan,
  TreeDeciduous,
  Webhook,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface ServiceProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  href: string;
}

const visibleCount = 4;

const allServices: ServiceProps[] = [
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
  {
    icon: SprayCan,
    title: "Building Cleaning Services",
    description:
      "From handover cleans to scheduled janitorial contracts, we keep residential towers, offices and retail units looking their best inside and out.",
    href: "/services#building-cleaning",
  },
  {
    icon: AirVent,
    title: "AC, Ventilation & Air Filtration",
    description:
      "Installation and maintenance of air conditioning, ventilation and air filtration systems, so indoor air stays clean and systems run efficiently.",
    href: "/services#ac-ventilation",
  },
  {
    icon: Container,
    title: "Tanks & Containers Cleaning",
    description:
      "Water tanks and storage containers cleaned and disinfected to municipality standards, with a compliance certificate on completion.",
    href: "/services#tanks-containers",
  },
  {
    icon: PaintRoller,
    title: "Painting Contracting",
    description:
      "Interior and exterior painting for homes and businesses, from a single room touch-up to a full building repaint by licensed contractors.",
    href: "/services#painting-contracting",
  },
  {
    icon: ShieldCheck,
    title: "Public Health Pests Control",
    description:
      "Licensed public health pest control for premises that answer to municipality and food-safety inspectors, run on a documented schedule.",
    href: "/services#public-health-pest-control",
  },
];

export const ServicesSection = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleServices = showAll
    ? allServices
    : allServices.slice(0, visibleCount);

  return (
    <section id="services" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24 mb-12">
        <Reveal>
          <div>
            <h2 className="text-lg text-primary mb-2 tracking-wider">
              Services
            </h2>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              All Our Services
            </h2>
            <h3 className="text-xl text-muted-foreground">
              One licensed team for pest control, building cleaning, AC
              maintenance, tank cleaning and painting contracting across the
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

      <div className="grid sm:grid-cols-2 gap-6">
        {visibleServices.map(({ icon: Icon, title, description, href }) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -6 }}
          >
            <Link href={href} className="block h-full">
              <Card className="bg-muted/60 dark:bg-card h-full flex flex-col sm:flex-row gap-4 p-6 transition-colors hover:border-primary/50">
                <div className="bg-primary/15 p-2 rounded-full size-fit shrink-0">
                  <Icon className="size-6 text-primary" />
                </div>
                <div className="flex flex-col">
                  <CardTitle className="text-lg mb-2">{title}</CardTitle>
                  <CardDescription>{description}</CardDescription>
                  <div className="mt-auto pt-4">
                    <span className="flex items-center px-0 font-semibold text-primary group/arrow">
                      Learn More
                      <ArrowRight className="size-4 ml-1 group-hover/arrow:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>

      <Reveal>
        <div className="flex justify-center mt-10">
          <Button
            size="lg"
            variant="secondary"
            className="font-bold"
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? (
              <>
                View Less
                <ChevronUp className="size-4 ml-2" />
              </>
            ) : (
              <>
                View More Services
                <ChevronDown className="size-4 ml-2" />
              </>
            )}
          </Button>
        </div>
      </Reveal>
    </section>
  );
};
