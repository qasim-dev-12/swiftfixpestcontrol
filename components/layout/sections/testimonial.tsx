"use client";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Award, Building2, MapPin, Star } from "lucide-react";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const stats = [
  { icon: Award, value: "35+", label: "Years Experience" },
  { icon: MapPin, value: "7", label: "Emirates Covered" },
  { icon: Building2, value: "52+", label: "Trusted Businesses" },
  { icon: Star, value: "5", label: "Certifications & Approvals" },
];

const reviewList: ReviewProps[] = [
  {
    image: "https://i.pravatar.cc/150?img=11",
    name: "Rachelle Hage",
    userName: "Verified Customer",
    comment:
      "Great service from everyone I dealt with. The team was very professional and comforting - they asked me all the questions I already had in mind and did the job perfectly. They made sure every corner is covered and never saw an insect ever since! Would recommend 100%.",
    rating: 5.0,
  },
  {
    image: "https://i.pravatar.cc/150?img=32",
    name: "Zunair Akram",
    userName: "Verified Customer",
    comment:
      "SwiftFix Pest Control is providing very good & quality services, and the main benefit is they cover the whole UAE and are approved by all municipalities.",
    rating: 5.0,
  },
  {
    image: "https://i.pravatar.cc/150?img=45",
    name: "Aisha Al Bahri",
    userName: "Verified Customer",
    comment: "Great service, it was so quick and convenient, very professional staff.",
    rating: 5.0,
  },
  {
    image: "https://i.pravatar.cc/150?img=22",
    name: "Goli Prashanth",
    userName: "Verified Customer",
    comment: "Highly professional services.",
    rating: 5.0,
  },
  {
    image: "https://i.pravatar.cc/150?img=48",
    name: "Tara Baban",
    userName: "Verified Customer",
    comment:
      "I've used many companies before but never solved my big black ants issue. The team were very professional inspecting where the ants are coming from and how to get rid of them. They were also great with following up. Definitely recommended for all pest control issues.",
    rating: 5.0,
  },
  {
    image: "https://i.pravatar.cc/150?img=15",
    name: "Mira Almazrooei",
    userName: "Verified Customer",
    comment:
      "I had a great experience with SwiftFix. They were incredibly professional, arrived right on time, and even managed to come on very short notice. The team was thorough and efficient, addressing the issue quickly. I highly recommend their services!",
    rating: 5.0,
  },
  {
    image: "https://i.pravatar.cc/150?img=12",
    name: "Sudip Sarkar",
    userName: "Verified Customer",
    comment:
      "We've been taking the service from SwiftFix for the last 7 to 8 years, fabulous service. Job done on time without any delay. Great, keep going, all the best.",
    rating: 5.0,
  },
  {
    image: "https://i.pravatar.cc/150?img=25",
    name: "Reem Noori",
    userName: "Verified Customer",
    comment:
      "They came in and did it well and clean. Also, they explained and advised me on what to do with my pets, which was very helpful.",
    rating: 5.0,
  },
  {
    image: "https://i.pravatar.cc/150?img=52",
    name: "Rakesh Parappalliyalil",
    userName: "Verified Customer",
    comment:
      "Responsible employees and good service. Recommendable for pest control activities.",
    rating: 5.0,
  },
  {
    image: "https://i.pravatar.cc/150?img=60",
    name: "Edric Nelson Cate",
    userName: "Verified Customer",
    comment:
      "Excellent service and very professional. Customer service called to ask when is convenient for booking, and the team arrived promptly on time and did a great job cleaning the apartment. Highly recommended!",
    rating: 5.0,
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <Reveal>
        <div className="text-center mb-8">
          <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
            Testimonials
          </h2>

          <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
            Customer Reviews
          </h2>
        </div>
      </Reveal>

      <RevealGroup className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-screen-lg mx-auto mb-12">
        {stats.map(({ icon: Icon, value, label }) => (
          <RevealItem key={label}>
            <Card className="bg-muted/50 dark:bg-card text-center h-full">
              <CardHeader className="flex flex-col items-center gap-2">
                <Icon className="size-6 text-primary" />
                <CardTitle className="text-3xl">{value}</CardTitle>
                <CardDescription>{label}</CardDescription>
              </CardHeader>
            </Card>
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal>
        <div className="flex flex-col items-center gap-2 mb-8">
          <div className="flex gap-1">
            <Star className="size-5 fill-primary text-primary" />
            <Star className="size-5 fill-primary text-primary" />
            <Star className="size-5 fill-primary text-primary" />
            <Star className="size-5 fill-primary text-primary" />
            <Star className="size-5 fill-primary text-primary" />
          </div>
          <p className="text-muted-foreground">
            Don&apos;t take our word for it. Take theirs.
          </p>
        </div>
      </Reveal>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage src={review.image} alt={review.name} />
                      <AvatarFallback>
                        {review.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
