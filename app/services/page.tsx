import { FooterSection } from "@/components/layout/sections/footer";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import {
  AirVent,
  ArrowLeft,
  BedDouble,
  Building2,
  BugOff,
  Check,
  Container,
  Flame,
  MessageCircle,
  PaintRoller,
  Phone,
  Rat,
  ShieldCheck,
  SprayCan,
  TreeDeciduous,
  Webhook,
  Wind,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Pest Control & Facilities Services | SwiftFix Pest Control",
  description:
    "Licensed pest control and facilities services for homes and businesses across the UAE — cockroaches, spiders, termites, rodents, bed bugs, mosquitoes, commercial contracts, fumigation, building cleaning, AC maintenance, tank cleaning and painting contracting.",
};

interface ServiceDetail {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  summary: string;
  signs: string[];
  approach: string[];
}

const services: ServiceDetail[] = [
  {
    id: "cockroaches",
    icon: BugOff,
    title: "Cockroach Control",
    summary:
      "Cockroaches spread quickly in kitchens, drains and warm equipment voids, and are one of the most common call-outs we receive across the UAE.",
    signs: [
      "Droppings near sinks, stoves or appliance motors",
      "A musty odour in cupboards or drains",
      "Activity at night when the lights go off",
    ],
    approach: [
      "Gel baiting and residual treatment targeted at nesting sites",
      "Drain and void treatment where roaches breed unseen",
      "Follow-up visit to confirm the infestation is fully cleared",
    ],
  },
  {
    id: "spiders",
    icon: Webhook,
    title: "Spider Control",
    summary:
      "Most spiders found around UAE homes are harmless and even helpful, but heavy webbing, egg sacs or a venomous species sighting is worth a professional look.",
    signs: [
      "Webbing building up in corners, garages or gardens",
      "Egg sacs around windows, vents or storage areas",
      "A sighting of a species you don't recognise",
    ],
    approach: [
      "On-site species identification",
      "Removal of webs, egg sacs and shelter spots",
      "Perimeter treatment at entry points to stop re-entry",
    ],
  },
  {
    id: "termites",
    icon: TreeDeciduous,
    title: "Termite Control & Protection",
    summary:
      "Termites cause more structural damage in the region than any other pest, often working unseen inside timber and behind finishes for months.",
    signs: [
      "Mud tubes along walls, skirting or foundations",
      "Hollow-sounding or sagging timber",
      "Discarded wings near doors and windows",
    ],
    approach: [
      "Full moisture and activity inspection",
      "Baiting or chemical barrier system installation",
      "Written long-term protection warranty",
    ],
  },
  {
    id: "rodents",
    icon: Rat,
    title: "Rodent Control",
    summary:
      "Rats and mice contaminate food, gnaw through wiring and insulation, and multiply quickly once they find shelter and a food source indoors.",
    signs: [
      "Droppings in cupboards, roof voids or storage areas",
      "Gnaw marks on wiring, packaging or skirting",
      "Scratching noises at night",
    ],
    approach: [
      "Safe trapping and baiting",
      "Exclusion work to seal the gaps they're entering through",
      "Scheduled monitoring for commercial kitchens and warehouses",
    ],
  },
  {
    id: "bed-bugs",
    icon: BedDouble,
    title: "Bed Bug Treatment",
    summary:
      "Bed bugs travel in luggage and furniture and hide in seams and cracks, making them one of the hardest pests to clear without the right equipment.",
    signs: [
      "Small rust-coloured spots on sheets or mattress seams",
      "Itchy bite marks in a line or cluster",
      "A sweet, musty smell in the room",
    ],
    approach: [
      "Heat treatment that reaches eggs as well as adults",
      "Targeted chemical treatment for furniture and voids",
      "Follow-up inspection to confirm every life stage is gone",
    ],
  },
  {
    id: "mosquitoes-flies",
    icon: Wind,
    title: "Mosquito & Fly Control",
    summary:
      "Standing water and poor waste management around a property are all it takes for mosquitoes and flies to breed close to where people live and work.",
    signs: [
      "Rising mosquito bites in the evening",
      "Flies gathering around bins or drains",
      "Standing water in gardens, pots or drainage areas",
    ],
    approach: [
      "Outdoor misting treatment",
      "Breeding-site identification and removal",
      "Ongoing scheduled visits through peak season",
    ],
  },
  {
    id: "commercial",
    icon: Building2,
    title: "Commercial Pest Management",
    summary:
      "Restaurants, hotels, offices and retail spaces need pest control that runs on a schedule and stands up to audits, not a one-off visit.",
    signs: [
      "Upcoming food-safety or municipality audit",
      "Shared walls or waste areas with other tenants",
      "Previous activity that keeps recurring",
    ],
    approach: [
      "Scheduled pest management programs with written reporting",
      "HACCP-aligned documentation for audits",
      "A single point of contact across multiple sites",
    ],
  },
  {
    id: "fumigation",
    icon: Flame,
    title: "Fumigation Services",
    summary:
      "Severe infestations, warehouses and pre-shipment containers sometimes need whole-space fumigation rather than spot treatment.",
    signs: [
      "Infestation spread across multiple rooms or storage areas",
      "Pre-shipment container treatment requirements",
      "A previous treatment that didn't fully resolve the problem",
    ],
    approach: [
      "Whole-space fumigation by certified technicians",
      "Pre-shipment container certification where required",
      "Clearance testing before the space is handed back",
    ],
  },
  {
    id: "building-cleaning",
    icon: SprayCan,
    title: "Building Cleaning Services",
    summary:
      "From handover cleans to scheduled janitorial contracts, we keep residential towers, offices and retail units looking their best inside and out.",
    signs: [
      "Move-in or handover clean required before occupancy",
      "Common areas, facades or windows due for a deep clean",
      "A recurring janitorial contract with no reliable provider",
    ],
    approach: [
      "Deep cleaning for handovers, move-ins and post-construction",
      "Scheduled janitorial and housekeeping contracts",
      "Facade, window and common-area cleaning by trained crews",
    ],
  },
  {
    id: "ac-ventilation",
    icon: AirVent,
    title: "Air Conditioning, Ventilation & Air Filtration Systems",
    summary:
      "Poorly maintained AC and ventilation systems circulate dust, odours and allergens — we install and service the systems that keep indoor air clean.",
    signs: [
      "Weak airflow, odours or dust coming from vents",
      "Rising energy bills from an overworked system",
      "No record of recent filter or duct servicing",
    ],
    approach: [
      "Installation of AC, ventilation and air filtration systems",
      "Duct cleaning and filter replacement",
      "Scheduled preventive maintenance contracts",
    ],
  },
  {
    id: "tanks-containers",
    icon: Container,
    title: "Tanks & Containers Cleaning Services",
    summary:
      "Water tanks and storage containers need regular disinfection to stay compliant and safe — we clean, disinfect and certify to municipality standards.",
    signs: [
      "No cleaning record for the last 6 months",
      "Discoloured, cloudy or odd-smelling water",
      "An upcoming municipality inspection or audit",
    ],
    approach: [
      "Full drain-down, scrub and disinfection of tanks and containers",
      "Water quality checks before refill",
      "Municipality-compliant cleaning certificate on completion",
    ],
  },
  {
    id: "painting-contracting",
    icon: PaintRoller,
    title: "Painting Contracting",
    summary:
      "Interior and exterior painting for homes and businesses, from a single room touch-up to a full building repaint, finished by licensed contractors.",
    signs: [
      "Peeling, cracked or faded paintwork",
      "A unit due for repainting before handover or re-letting",
      "A full building or facility repaint on the schedule",
    ],
    approach: [
      "Surface preparation, filling and priming",
      "Interior and exterior painting with quality-checked finishes",
      "Project management for multi-unit and whole-building jobs",
    ],
  },
  {
    id: "public-health-pest-control",
    icon: ShieldCheck,
    title: "Public Health Pests Control Services",
    summary:
      "Licensed public health pest control for the premises that answer to municipality and food-safety inspectors, run on a documented schedule.",
    signs: [
      "An upcoming public health or municipality inspection",
      "A facility that needs documented, auditable pest control",
      "Shared premises requiring a licensed service provider",
    ],
    approach: [
      "Licensed public health pest control under UAE municipality regulations",
      "Scheduled visits with full documentation for audits",
      "Treatment plans aligned to food-safety and public health standards",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="container py-24 sm:py-32">
        <Reveal>
          <Button asChild variant="ghost" className="mb-6 -ml-4">
            <Link href="/">
              <ArrowLeft className="size-4 mr-2" />
              Back to Home
            </Link>
          </Button>

          <h1 className="text-lg text-primary mb-2 tracking-wider">
            Services
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            All Our Pest Control &amp; Facilities Services
          </h2>
          <p className="md:w-2/3 text-xl text-muted-foreground mb-8">
            One licensed team for pest control, building cleaning, AC
            maintenance, tank cleaning and painting contracting. Whatever
            your property needs, our technicians inspect first, treat with
            the right method, then monitor until the job is actually done.
          </p>
        </Reveal>

        <RevealGroup className="flex flex-col gap-6 mt-12">
          {services.map(({ id, icon: Icon, title, summary, signs, approach }) => (
            <RevealItem key={id}>
              <Card
                id={id}
                className="bg-muted/60 dark:bg-card scroll-mt-28 overflow-hidden"
              >
                <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-6 md:gap-10 p-6 md:p-10 items-start">
                  <div className="flex flex-col gap-4">
                    <div className="bg-primary/15 p-2 rounded-full w-fit">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{title}</CardTitle>
                    <p className="text-muted-foreground">{summary}</p>

                    <div className="flex gap-3 mt-2">
                      <Button asChild size="sm" className="font-bold">
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
                        asChild
                        size="sm"
                        variant="secondary"
                        className="font-bold"
                      >
                        <Link href="tel:+971569835921">
                          <Phone className="size-4 mr-2" />
                          Call
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <RevealGroup className="grid sm:grid-cols-2 gap-6 md:gap-8">
                    <div>
                      <h3 className="font-semibold mb-3">
                        Signs to watch for
                      </h3>
                      <div className="flex flex-col gap-2">
                        {signs.map((sign) => (
                          <RevealItem key={sign} className="flex items-start gap-2">
                            <Check className="size-4 text-primary shrink-0 mt-1" />
                            <span className="text-muted-foreground text-sm">
                              {sign}
                            </span>
                          </RevealItem>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3">Our approach</h3>
                      <div className="flex flex-col gap-2">
                        {approach.map((step) => (
                          <RevealItem key={step} className="flex items-start gap-2">
                            <Check className="size-4 text-primary shrink-0 mt-1" />
                            <span className="text-muted-foreground text-sm">
                              {step}
                            </span>
                          </RevealItem>
                        ))}
                      </div>
                    </div>
                  </RevealGroup>
                </div>
              </Card>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <FooterSection />
    </>
  );
}
