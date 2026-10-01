"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/motion/reveal";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Are your treatments safe for children and pets?",
    answer:
      "Yes. We use low-toxicity, EPA-registered products applied by certified technicians, and we'll always advise on any precautions needed before and after treatment.",
    value: "item-1",
  },
  {
    question: "How often should I schedule pest control?",
    answer:
      "For most homes, a quarterly treatment is enough to prevent infestations. Restaurants and commercial properties typically need monthly visits to stay compliant.",
    value: "item-2",
  },
  {
    question: "Do you offer a warranty on termite treatments?",
    answer:
      "Yes, our termite control plans include a written warranty with free re-treatment if termites return within the coverage period.",
    value: "item-3",
  },
  {
    question: "Can you come out the same day for an emergency?",
    answer:
      "In most cases, yes. We offer 24/7 emergency service for urgent infestations and same-day appointments for standard bookings across Dubai and the wider UAE.",
    value: "item-4",
  },
  {
    question: "Is SwiftFix licensed to operate in the UAE?",
    answer:
      "SwiftFix is fully licensed by Dubai Municipality and our technicians are certified and insured for both residential and commercial pest control work.",
    value: "item-5",
  },
  {
    question: "Do I need to prepare my home before treatment?",
    answer:
      "Light preparation such as clearing countertops and storing food is usually enough. Your technician will confirm any specific steps when your appointment is booked.",
    value: "item-6",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <Reveal>
        <div className="text-center mb-8">
          <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
            FAQS
          </h2>

          <h2 className="text-3xl md:text-4xl text-center font-bold">
            Common Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="AccordionRoot">
          {FAQList.map(({ question, answer, value }) => (
            <AccordionItem key={value} value={value}>
              <AccordionTrigger className="text-left">
                {question}
              </AccordionTrigger>

              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </section>
  );
};
