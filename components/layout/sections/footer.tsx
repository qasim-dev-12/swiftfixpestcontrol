import { Separator } from "@/components/ui/separator";
import { ShieldCheck } from "lucide-react";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2">
            <Link href="#" className="flex font-bold items-center">
              <ShieldCheck className="w-9 h-9 mr-2 p-1.5 bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg border border-secondary text-white" />

              <h3 className="text-2xl">SwiftFix</h3>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Licensed pest control and termite protection for homes and
              businesses across the UAE since 1991.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Services</h3>
            <div>
              <Link
                href="/services#cockroaches"
                className="opacity-60 hover:opacity-100"
              >
                Cockroaches
              </Link>
            </div>

            <div>
              <Link
                href="/services#termites"
                className="opacity-60 hover:opacity-100"
              >
                Termites
              </Link>
            </div>

            <div>
              <Link
                href="/services#rodents"
                className="opacity-60 hover:opacity-100"
              >
                Rodents
              </Link>
            </div>

            <div>
              <Link href="/services" className="opacity-60 hover:opacity-100">
                More Services
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Company</h3>
            <div>
              <Link href="#benefits" className="opacity-60 hover:opacity-100">
                Why Us
              </Link>
            </div>

            <div>
              <Link href="#team" className="opacity-60 hover:opacity-100">
                Technicians
              </Link>
            </div>

            <div>
              <Link
                href="#testimonials"
                className="opacity-60 hover:opacity-100"
              >
                Testimonials
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Support</h3>
            <div>
              <Link href="#contact" className="opacity-60 hover:opacity-100">
                Contact Us
              </Link>
            </div>

            <div>
              <Link href="#faq" className="opacity-60 hover:opacity-100">
                FAQ
              </Link>
            </div>

            <div>
              <Link href="tel:+971569835921" className="opacity-60 hover:opacity-100">
                Emergency Service
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Legal</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Privacy Policy
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Terms of Service
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Licensing
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-6" />
        <section className="">
          <h3 className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} SwiftFix Pest Control. All
            rights reserved.
          </h3>
        </section>
      </div>
    </footer>
  );
};
