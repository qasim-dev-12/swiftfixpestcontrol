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
import { Check } from "lucide-react";
import Link from "next/link";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const plans: PlanProps[] = [
  {
    title: "Basic Pest Control",
    popular: 0,
    price: 199,
    description: "One-time treatment for a single, specific pest problem.",
    buttonText: "Get Started",
    benefitList: [
      "1 treatment visit",
      "General pest inspection",
      "Ants, spiders & silverfish",
      "30-day service guarantee",
      "Email support",
    ],
  },
  {
    title: "Complete Protection Plan",
    popular: 1,
    price: 499,
    description: "Our most popular plan for year-round protection.",
    buttonText: "Get Started",
    benefitList: [
      "Quarterly scheduled visits",
      "Termite inspection & warranty",
      "Free re-treatment between visits",
      "Priority scheduling",
      "Phone & WhatsApp support",
    ],
  },
  {
    title: "Commercial Plan",
    popular: 0,
    price: 1299,
    description: "Ongoing pest management for restaurants & businesses.",
    buttonText: "Contact Us",
    benefitList: [
      "Monthly scheduled visits",
      "Full compliance documentation",
      "Dedicated account manager",
      "24/7 emergency call-outs",
      "Multi-site discounts available",
    ],
  },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="container py-24 sm:py-32">
      <Reveal>
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Pricing
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Service Plans for Every Property
        </h2>

        <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
          Simple, transparent pricing with no hidden fees. All plans include
          licensed technicians and a satisfaction guarantee.
        </h3>
      </Reveal>

      <RevealGroup className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
        {plans.map(
          ({ title, popular, price, description, buttonText, benefitList }) => (
            <RevealItem key={title} className="h-full">
              <Card
                className={
                  "h-full " +
                  (popular === PopularPlan?.YES
                    ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]"
                    : "")
                }
              >
                <CardHeader>
                  <CardTitle className="pb-2">{title}</CardTitle>

                  <CardDescription className="pb-4">
                    {description}
                  </CardDescription>

                  <div>
                    <span className="text-3xl font-bold">AED {price}</span>
                    <span className="text-muted-foreground"> /visit</span>
                  </div>
                </CardHeader>

                <CardContent className="flex">
                  <div className="space-y-4">
                    {benefitList.map((benefit) => (
                      <span key={benefit} className="flex">
                        <Check className="text-primary mr-2" />
                        <h3>{benefit}</h3>
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter>
                  <Button
                    asChild
                    variant={
                      popular === PopularPlan?.YES ? "default" : "secondary"
                    }
                    className="w-full"
                  >
                    <Link href="#contact">{buttonText}</Link>
                  </Button>
                </CardFooter>
              </Card>
            </RevealItem>
          )
        )}
      </RevealGroup>
    </section>
  );
};
