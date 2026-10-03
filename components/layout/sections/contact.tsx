"use client";
import { Button } from "@/components/ui/button";
import { Building2, Clock, Mail, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";

interface ContactCardProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  lines: string[];
  href?: string;
}

const contactCards: ContactCardProps[] = [
  {
    icon: Building2,
    label: "Find us",
    lines: ["Office 1204, Al Moosa Tower 2,", "Sheikh Zayed Road, Dubai, UAE"],
  },
  {
    icon: Phone,
    label: "Call us",
    lines: ["+971 56 983 5921"],
    href: "tel:+971569835921",
  },
  {
    icon: Mail,
    label: "Mail us",
    lines: ["swiftfixae@gmail.com"],
    href: "mailto:swiftfixae@gmail.com",
  },
  {
    icon: Clock,
    label: "Visit us",
    lines: ["Saturday - Thursday", "8AM - 8PM · 24/7 Emergency Service"],
  },
];

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="container py-24 sm:py-32 relative overflow-hidden"
    >
      <div
        className="absolute top-0 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-blob pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute bottom-0 right-0 w-72 h-72 bg-lime-400/20 rounded-full blur-3xl animate-blob animation-delay-2000 pointer-events-none"
        aria-hidden
      />

      <Reveal>
        <div className="md:w-2/3 lg:w-1/2 mx-auto text-center mb-14 relative">
          <h2 className="text-lg text-primary mb-2 tracking-wider">
            Contact
          </h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In Touch
          </h2>

          <p className="text-muted-foreground">
            Have a pest problem or want a free inspection? Reach out and one
            of our licensed technicians will get back to you shortly.
          </p>
        </div>
      </Reveal>

      <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-screen-lg mx-auto mb-12">
        {contactCards.map(({ icon: Icon, label, lines, href }) => {
          const cardContent = (
            <div className="group h-full rounded-2xl border border-secondary bg-muted/50 dark:bg-card p-6 text-center transition-all hover:border-primary/50 hover:shadow-lg">
              <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-primary/15 transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary/25">
                <Icon className="size-6 text-primary" />
              </div>
              <div className="font-bold mb-1">{label}</div>
              {lines.map((line) => (
                <div key={line} className="text-sm text-muted-foreground">
                  {line}
                </div>
              ))}
            </div>
          );

          return (
            <RevealItem key={label}>
              {href ? (
                <Link href={href} className="block h-full">
                  {cardContent}
                </Link>
              ) : (
                cardContent
              )}
            </RevealItem>
          );
        })}
      </RevealGroup>

      <Reveal delay={0.1}>
        <div className="flex justify-center gap-4">
          <motion.span
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Button asChild size="lg" className="font-bold shadow-md">
              <Link
                href="https://wa.me/971569835921"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.span
                  animate={{ rotate: [0, -12, 12, -8, 8, 0] }}
                  transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    repeatDelay: 2.5,
                    ease: "easeInOut",
                  }}
                  className="inline-flex mr-2"
                >
                  <MessageCircle className="size-4" />
                </motion.span>
                WhatsApp
              </Link>
            </Button>
          </motion.span>

          <motion.span
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Button asChild size="lg" variant="secondary" className="font-bold">
              <Link href="tel:+971569835921">
                <Phone className="size-4 mr-2" />
                Call
              </Link>
            </Button>
          </motion.span>
        </div>
      </Reveal>
    </section>
  );
};
