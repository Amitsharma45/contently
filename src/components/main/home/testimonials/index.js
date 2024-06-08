"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import img from "@/assets/image/Screenshot 2024-04-10 165307.png";
import ReactStars from "react-stars";
export default function Testimonials() {
  function scrollToSection() {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 10);
  }
  return (
    <>
      <div id="faq" className="px-4 sm:!px-10 lg:!px-[50px] bg-[#f8f9fa]">
        <div className="max-w-[1280px] mx-auto py-16">
          <div className="mx-auto ">
            <div className="text-[26px] text-center font-bold py-4 underline underline-offset-2">
              Testimonials
            </div>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
              className="mx-auto !w-full sm:!w-full !px-4 sm:!px-16 lg:!px-[150px]"
            >
              <CarouselContent>
                {testimonialItems.map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="sm:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1">
                      <Card className="min-h-[400px]">
                        <CardHeader className="flex justify-center items-center">
                          <Image
                            src={img}
                            alt="image"
                            className="w-[100px] h-[100px]"
                          />
                        </CardHeader>
                        <CardContent className="grid justify-center items-center ">
                          <div className="text-center">{item.name}</div>
                          <ReactStars
                            className="flex justify-center items-center my-4"
                            count={5}
                            value={item.stars}
                            edit={false}
                            size={24}
                            color2={"#ffd700"}
                          />
                          <div className="mt-1 text-sm  font-normal ">
                            {item.message}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {/* <CarouselPrevious className="" />
              <CarouselNext /> */}
            </Carousel>
          </div>
        </div>
      </div>
      <div id="faq" className="px-4 sm:!px-10 lg:!px-[50px] bg-[#050c44]">
        <div className="max-w-[1280px] mx-auto py-10 lg:py-32 flex lg:flex-row flex-col justify-center items-center lg:gap-10 gap-5">
          <p className="text-white text-3xl text-center">
            Get your assignment done in just a few clicks
          </p>

          <Button
            onClick={scrollToSection}
            type="button"
            className="p-8 bg-[#000] text-xl hover:bg-white hover:text-black"
          >
            Write my assignment
          </Button>
        </div>
      </div>
    </>
  );
}

const testimonialItems = [
  {
    name: "Sarah M., California, USA",
    stars: 5,
    message:
      "Absolutely fantastic service! They helped me with my research paper, and the quality was top-notch. Highly recommend for any student in need of writing assistance.",
    image: "image/Screenshot 2024-04-10 165307.png",
  },
  {
    name: "James K., New York, USA",
    stars: 4,
    message:
      "Great experience from start to finish. My essay was well-written and delivered on time. I couldn't have asked for more.",
    image: "image/Screenshot 2024-04-10 165307.png",
  },
  {
    name: "Emily W., Sydney, Australia",
    stars: 5,
    message:
      "Exceptional service! The team really understood my requirements and delivered a perfectly written assignment. It's definitely my go-to for future projects.",
    image: "image/Screenshot 2024-04-10 165307.png",
  },
  {
    name: "Liam H., Melbourne, Australia",
    stars: 4,
    message:
      "Highly professional and reliable. They saved me so much time, and my grades have never been better. Thank you!",
    image: "image/Screenshot 2024-04-10 165307.png",
  },
  {
    name: "Charlotte R., London, UK",
    stars: 4,
    message:
      "I was struggling with my dissertation, but their expert writers came to the rescue. The quality and attention to detail were impressive. Highly recommended!",
    image: "image/Screenshot 2024-04-10 165307.png",
  },
  {
    name: "Oliver B., Manchester, UK",
    stars: 5,
    message:
      "Top-class service! The writers are knowledgeable and friendly. My essay exceeded all expectations. Will be using them again for sure.",
    image: "image/Screenshot 2024-04-10 165307.png",
  },
  {
    name: "Henry Brown, Toronto, Canada ",
    stars: 4,
    message:
      "My assignments were delivered on time and met all of the requirements. This service has been extremely useful during my hectic semester.",
    image: "image/Screenshot 2024-04-10 165307.png",
  },
  {
    name: "Arlo Smith, St. John's, Canada ",
    stars: 5,
    message:
      "The writer assigned to my project was extremely knowledgeable and produced detailed, well-argued information. The entire process went smoothly and stress-free. I strongly suggest it to any student looking for high-quality academic writing.",
    image: "image/Screenshot 2024-04-10 165307.png",
  },
  // Add more testimonials as needed
];
