"use client";

import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TeamProps {
  firstName: string;
  lastName: string;
  positions: string[];
  experience: string;
}

export const TeamSection = () => {
  const teamList: TeamProps[] = [
    {
      firstName: "Rashid",
      lastName: "Al Mansoori",
      positions: ["Senior Termite Specialist", "Operations Lead"],
      experience: "18 yrs experience",
    },
    {
      firstName: "Layla",
      lastName: "Haddad",
      positions: ["Residential Pest Control Technician"],
      experience: "9 yrs experience",
    },
    {
      firstName: "David",
      lastName: "Fernandes",
      positions: ["Rodent & Wildlife Control Specialist"],
      experience: "11 yrs experience",
    },
    {
      firstName: "Sarah",
      lastName: "Robinson",
      positions: ["Commercial Accounts Manager"],
      experience: "7 yrs experience",
    },
    {
      firstName: "Michael",
      lastName: "Holland",
      positions: ["Fumigation & Commercial Technician"],
      experience: "14 yrs experience",
    },
    {
      firstName: "Zoe",
      lastName: "Carter",
      positions: ["Bed Bug & Heat Treatment Specialist"],
      experience: "6 yrs experience",
    },
    {
      firstName: "Evan",
      lastName: "James",
      positions: ["General Pest Control Technician"],
      experience: "5 yrs experience",
    },
    {
      firstName: "Pam",
      lastName: "Taylor",
      positions: ["Customer Success & Scheduling"],
      experience: "8 yrs experience",
    },
  ];

  return (
    <section id="team" className="container lg:w-[75%] py-24 sm:py-32">
      <Reveal>
        <div className="text-center mb-8">
          <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
            Our Team
          </h2>

          <h2 className="text-3xl md:text-4xl text-center font-bold">
            Meet Our Licensed Technicians
          </h2>
        </div>
      </Reveal>

      <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {teamList.map(
          ({ firstName, lastName, positions, experience }, index) => (
            <RevealItem key={index}>
              <Card className="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden">
                <CardHeader className="p-0 gap-0">
                  <CardTitle className="py-6 pb-4 px-6">
                    {firstName}
                    <span className="text-primary ml-2">{lastName}</span>
                  </CardTitle>
                </CardHeader>
                {positions.map((position, index) => (
                  <CardContent
                    key={index}
                    className={`pb-0 text-muted-foreground ${
                      index === positions.length - 1 && "pb-4"
                    }`}
                  >
                    {position}
                    {index < positions.length - 1 && <span>,</span>}
                  </CardContent>
                ))}

                <div className="px-6 pb-6 mt-auto pt-2">
                  <Badge variant="secondary">{experience}</Badge>
                </div>
              </Card>
            </RevealItem>
          )
        )}
      </RevealGroup>
    </section>
  );
};
