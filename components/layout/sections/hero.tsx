"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Award,
  Bug,
  Home as HomeIcon,
  Leaf,
  MessageCircle,
  Phone,
  ShieldCheck,
  Star,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";

const stats = [
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: Leaf, label: "Family & Pet Safe" },
  { icon: Star, label: "4.9/5 Customer Rating" },
  { icon: Award, label: "35+ Years of Experience" },
];

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const HeroSection = () => {
  return (
    <section className="container w-full relative overflow-hidden">
      <div
        className="absolute top-10 -left-16 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-blob pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute top-32 right-0 w-72 h-72 bg-lime-400/20 rounded-full blur-3xl animate-blob animation-delay-2000 pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute bottom-0 left-1/3 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-blob animation-delay-4000 pointer-events-none"
        aria-hidden
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32 relative"
      >
        <div className="text-center space-y-8">
          <motion.div variants={item}>
            <Badge variant="outline" className="text-sm py-2">
              <span className="mr-2 text-primary">
                <Badge>Welcome to</Badge>
              </span>
              <span> SwiftFix Pest Control </span>
            </Badge>
          </motion.div>

          <motion.div
            variants={item}
            className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold"
          >
            <h1>
              Treating Customers
              <span className="text-transparent px-2 bg-gradient-to-r from-lime-400 to-primary bg-clip-text">
                Like Family
              </span>
            </h1>
          </motion.div>

          <motion.p
            variants={item}
            className="max-w-screen-sm mx-auto text-xl text-muted-foreground"
          >
            {`Licensed pest control and termite protection for homes and businesses
            across the UAE — trusted by residents and some of Dubai's biggest
            landmarks since 1991.`}
          </motion.p>

          <motion.div
            variants={item}
            className="space-y-4 md:space-y-0 md:space-x-4"
          >
            <motion.span whileTap={{ scale: 0.97 }} className="inline-block">
              <Button asChild className="w-5/6 md:w-auto font-bold">
                <Link
                  href="https://wa.me/971569835921"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="size-4 mr-2" />
                  WhatsApp
                </Link>
              </Button>
            </motion.span>

            <motion.span whileTap={{ scale: 0.97 }} className="inline-block">
              <Button
                asChild
                variant="secondary"
                className="w-5/6 md:w-auto font-bold"
              >
                <Link href="tel:+971569835921">
                  <Phone className="size-4 mr-2" />
                  Call
                </Link>
              </Button>
            </motion.span>
          </motion.div>
        </div>

        <motion.div variants={item} className="relative group mt-14 w-full">
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>

          <div className="relative w-full md:w-[1000px] mx-auto rounded-2xl border border-t-2 border-secondary border-t-primary/30 bg-gradient-to-br from-secondary/60 to-background p-8 md:p-12 overflow-hidden">
            <Bug
              className="absolute -top-4 -left-4 size-20 text-primary/10 animate-float"
              aria-hidden
            />
            <Leaf
              className="absolute bottom-4 right-8 size-16 text-primary/10 animate-float animation-delay-2000"
              aria-hidden
            />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {stats.map(({ icon: Icon, label }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  whileHover={{ y: -4 }}
                  className="flex flex-col items-center justify-center text-center gap-3 bg-card rounded-xl p-4 md:p-6 border border-secondary shadow-sm"
                >
                  <div className="bg-primary/15 p-3 rounded-full">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{label}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center justify-center gap-2 mt-8 text-muted-foreground text-sm">
              <HomeIcon className="size-4" />
              Residential & Commercial Pest Control Across the UAE
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="hidden md:block absolute -left-6 top-6 bg-card border border-secondary rounded-xl px-4 py-2 shadow-lg animate-float"
          >
            <div className="flex items-center gap-2 text-sm font-semibold">
              <ShieldCheck className="size-4 text-primary" />
              24/7 Emergency Service
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
