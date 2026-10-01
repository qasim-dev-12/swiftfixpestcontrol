"use client";

import { Button } from "@/components/ui/button";
import { motion, type Transition } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import Link from "next/link";

const dangle = {
  rotate: [0, -4, 0, 4, 0],
  x: [0, -6, 0, 6, 0],
};

const dangleTransition: Transition = {
  duration: 2.2,
  repeat: Infinity,
  repeatDelay: 1.2,
  ease: "easeInOut",
};

export const StickyContactButtons = () => {
  return (
    <div className="fixed bottom-4 inset-x-4 z-50 flex gap-3 lg:hidden">
      <motion.div
        animate={dangle}
        transition={dangleTransition}
        style={{ transformOrigin: "top center" }}
        className="flex-1"
      >
        <Button
          asChild
          className="w-full h-14 rounded-full shadow-lg font-bold text-base"
        >
          <Link
            href="https://wa.me/971569835921"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="size-5 mr-2" />
            WhatsApp
          </Link>
        </Button>
      </motion.div>

      <motion.div
        animate={dangle}
        transition={{ ...dangleTransition, delay: 0.4 }}
        style={{ transformOrigin: "top center" }}
        className="flex-1"
      >
        <Button
          asChild
          className="w-full h-14 rounded-full shadow-lg font-bold text-base bg-lime-400 text-black hover:bg-lime-500"
        >
          <Link href="tel:+971569835921">
            <Phone className="size-5 mr-2" />
            Call
          </Link>
        </Button>
      </motion.div>
    </div>
  );
};
