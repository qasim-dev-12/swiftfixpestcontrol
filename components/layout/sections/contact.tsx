"use client";
import { Button } from "@/components/ui/button";
import { Building2, Clock, Mail, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";

export const ContactSection = () => {
  return (
    <section id="contact" className="container py-24 sm:py-32">
      <Reveal>
        <div className="md:w-2/3 lg:w-1/2 mx-auto text-center">
          <div className="mb-4">
            <h2 className="text-lg text-primary mb-2 tracking-wider">
              Contact
            </h2>

            <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
          </div>
          <p className="mb-8 text-muted-foreground">
            Have a pest problem or want a free inspection? Reach out and
            one of our licensed technicians will get back to you shortly.
          </p>

          <div className="flex flex-col items-center gap-4 text-left max-w-xs mx-auto">
            <div>
              <div className="flex gap-2 mb-1">
                <Building2 />
                <div className="font-bold">Find us</div>
              </div>

              <div>Office 1204, Al Moosa Tower 2, Sheikh Zayed Road, Dubai, UAE</div>
            </div>

            <div>
              <div className="flex gap-2 mb-1">
                <Phone />
                <div className="font-bold">Call us</div>
              </div>

              <div>+971 56 983 5921</div>
            </div>

            <div>
              <div className="flex gap-2 mb-1">
                <Mail />
                <div className="font-bold">Mail us</div>
              </div>

              <div>info@swiftfixpestcontrol.ae</div>
            </div>

            <div>
              <div className="flex gap-2">
                <Clock />
                <div className="font-bold">Visit us</div>
              </div>

              <div>
                <div>Saturday - Thursday</div>
                <div>8AM - 8PM · 24/7 Emergency Service</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
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
                Call
              </Link>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
};
