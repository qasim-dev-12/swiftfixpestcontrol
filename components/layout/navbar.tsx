"use client";
import {
  BedDouble,
  Building2,
  BugOff,
  ChevronDown,
  Flame,
  Menu,
  MessageCircle,
  Phone,
  Rat,
  ShieldCheck,
  TreeDeciduous,
  Webhook,
  Wind,
} from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import { ToggleTheme } from "./toogle-theme";

interface RouteProps {
  href: string;
  label: string;
}

interface ServiceLinkProps {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const serviceLinks: ServiceLinkProps[] = [
  { href: "/services#cockroaches", label: "Cockroaches", icon: BugOff },
  { href: "/services#spiders", label: "Spiders", icon: Webhook },
  { href: "/services#termites", label: "Termites", icon: TreeDeciduous },
  { href: "/services#rodents", label: "Rodents", icon: Rat },
  { href: "/services#bed-bugs", label: "Bed Bugs", icon: BedDouble },
  { href: "/services#mosquitoes-flies", label: "Mosquitoes & Flies", icon: Wind },
  { href: "/services#commercial", label: "Commercial", icon: Building2 },
  { href: "/services#fumigation", label: "Fumigation", icon: Flame },
];

const routeList: RouteProps[] = [
  {
    href: "#testimonials",
    label: "Testimonials",
  },
  {
    href: "#team",
    label: "Technicians",
  },
  {
    href: "#contact",
    label: "Contact",
  },
  {
    href: "#faq",
    label: "FAQ",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isServicesOpen, setIsServicesOpen] = React.useState(false);

  return (
    <header className="shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-card">
      <Link href="/" className="font-bold text-lg flex items-center">
        <ShieldCheck className="bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white p-1.5" />
        SwiftFix
      </Link>
      {/* <!-- Mobile --> */}
      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer lg:hidden"
            />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary overflow-y-auto"
          >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center">
                  <Link href="/" className="flex items-center">
                    <ShieldCheck className="bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white p-1.5" />
                    SwiftFix
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2">
                <Collapsible
                  open={isServicesOpen}
                  onOpenChange={setIsServicesOpen}
                >
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="ghost"
                      className="justify-between w-full text-base"
                    >
                      Services
                      <ChevronDown
                        className={`size-4 transition-transform ${
                          isServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="flex flex-col gap-1 pl-4">
                    {serviceLinks.map(({ href, label, icon: Icon }) => (
                      <Button
                        key={href}
                        onClick={() => setIsOpen(false)}
                        asChild
                        variant="ghost"
                        className="justify-start text-sm font-normal"
                      >
                        <Link href={href}>
                          <Icon className="size-4 mr-2 text-primary" />
                          {label}
                        </Link>
                      </Button>
                    ))}
                    <Button
                      onClick={() => setIsOpen(false)}
                      asChild
                      variant="ghost"
                      className="justify-start text-sm font-semibold text-primary"
                    >
                      <Link href="/services">View All Services</Link>
                    </Button>
                  </CollapsibleContent>
                </Collapsible>

                {routeList.map(({ href, label }) => (
                  <Button
                    key={href}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start text-base"
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                ))}
                <Button
                  onClick={() => setIsOpen(false)}
                  asChild
                  className="justify-start text-base mt-2"
                >
                  <Link
                    href="https://wa.me/971569835921"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="size-4 mr-2" />
                    WhatsApp
                  </Link>
                </Button>
                <Button
                  onClick={() => setIsOpen(false)}
                  asChild
                  variant="secondary"
                  className="justify-start text-base"
                >
                  <Link href="tel:+971569835921">
                    <Phone className="size-4 mr-2" />
                    Call
                  </Link>
                </Button>
              </div>
            </div>

            <SheetFooter className="flex-col sm:flex-col justify-start items-start">
              <Separator className="mb-2" />

              <ToggleTheme />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* <!-- Desktop --> */}
      <NavigationMenu className="hidden lg:block mx-auto">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-base bg-transparent">
              Services
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid grid-cols-2 gap-1 p-4 w-[420px]">
                {serviceLinks.map(({ href, label, icon: Icon }) => (
                  <NavigationMenuLink asChild key={href}>
                    <Link
                      href={href}
                      className="flex items-center gap-2 rounded-md p-2 text-sm hover:bg-accent hover:text-accent-foreground"
                    >
                      <Icon className="size-4 text-primary shrink-0" />
                      {label}
                    </Link>
                  </NavigationMenuLink>
                ))}
              </div>
              <div className="border-t px-4 py-3">
                <NavigationMenuLink asChild>
                  <Link
                    href="/services"
                    className="text-sm font-semibold text-primary hover:underline"
                  >
                    View All Services
                  </Link>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {routeList.map(({ href, label }) => (
            <NavigationMenuItem key={href}>
              <NavigationMenuLink asChild>
                <Link href={href} className="text-base px-2">
                  {label}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden lg:flex items-center gap-2">
        <ToggleTheme />

        <Button asChild size="sm" variant="ghost" aria-label="Call SwiftFix">
          <Link aria-label="Call SwiftFix" href="tel:+971569835921">
            <Phone className="size-4 mr-2" />
            +971 56 983 5921
          </Link>
        </Button>

        <Button asChild size="sm" className="font-bold">
          <Link
            href="https://wa.me/971569835921"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp SwiftFix"
          >
            <MessageCircle className="size-4 mr-2" />
            WhatsApp
          </Link>
        </Button>
      </div>
    </header>
  );
};
