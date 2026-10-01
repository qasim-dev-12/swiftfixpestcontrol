"use client";

import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { Bug, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";

export const CommunitySection = () => {
  return (
    <section id="community" className="py-12 ">
      <hr className="border-secondary" />
      <div className="container py-20 sm:py-20">
        <Reveal>
          <div className="lg:w-[60%] mx-auto">
            <Card className="bg-background border-none shadow-none text-center flex flex-col items-center justify-center">
              <CardHeader>
                <CardTitle className="text-4xl md:text-5xl font-bold flex flex-col items-center">
                  <motion.div
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                    className="bg-primary/15 p-4 rounded-full mb-4"
                  >
                    <Bug className="size-10 text-primary" />
                  </motion.div>
                  <div>
                    Got Pests? Get a
                    <span className="text-transparent pl-2 bg-gradient-to-r from-lime-400 to-primary bg-clip-text">
                      Free Inspection
                    </span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="lg:w-[80%] text-xl text-muted-foreground">
                Book a free, no-obligation inspection and get a same-day
                quote. Our licensed technicians will identify the problem and
                recommend the right treatment for your home or business.
              </CardContent>

              <CardFooter className="gap-4">
                <Button asChild size="lg" className="font-bold">
                  <Link
                    href="https://wa.me/971569835921"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="size-4 mr-2" />
                    WhatsApp
                  </Link>
                </Button>
                <Button asChild size="lg" variant="secondary" className="font-bold">
                  <Link href="tel:+971569835921">
                    <Phone className="size-4 mr-2" />
                    Call Now
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </Reveal>
      </div>
      <hr className="border-secondary" />
    </section>
  );
};
