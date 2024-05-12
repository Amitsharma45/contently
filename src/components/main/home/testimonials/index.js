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
                    className="sm:basis-1/2 lg:basis-1/3 "
                  >
                    <div className="p-1">
                      <Card className="min-h-[350px]">
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
          <Link href="/">
            <Button
              type="button"
              className="p-8 bg-[#000] text-xl hover:bg-white hover:text-black"
            >
              Write my assignment
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

const testimonialItems = [
  {
    name: "Kunal",
    stars: 5,
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis diam eu mass.",
    image: "image/Screenshot 2024-04-10 165307.png",
  },
  {
    name: "Akshat",
    stars: 4,
    message:
      "Vestibulum id sapien at ligula feugiat hendrerit. Mauris dapibus, justo vitae ve.",
    image: "image/Screenshot 2024-04-10 165307.png",
  },
  {
    name: "Arun",
    stars: 5,
    message:
      "Nullam consequat tincidunt velit, nec eleifend arcu mattis id. Donec bi.",
    image: "image/Screenshot 2024-04-10 165307.png",
  },
  {
    name: "Mohit",
    stars: 4,
    message:
      "Sed pretium sit amet sem at aliquet. Nullam eget ex at enim luctus lacinia.",
    image: "image/Screenshot 2024-04-10 165307.png",
  },
  {
    name: "Manish",
    stars: 4,
    message:
      "In ut orci nec libero scelerisque rhoncus. Proin eu sollicitudin ipsum Aliquam .",
    image: "image/Screenshot 2024-04-10 165307.png",
  },
  {
    name: "Ashish",
    stars: 5,
    message:
      "Maecenas fermentum mi at vestibulum varius. In nec erat ac arcu pretium vestibulum.",
    image: "image/Screenshot 2024-04-10 165307.png",
  },
  {
    name: "Sahil",
    stars: 4,
    message:
      "Suspendisse potenti. Curabitur sodales libero vitae felis fermentum, at tincidunt quam.",
    image: "image/Screenshot 2024-04-10 165307.png",
  },
  {
    name: "Rinku",
    stars: 5,
    message:
      "Morbi quis lorem nec nisi accumsan finibus. Aliquam erat volutpat. Cras vel elit nec libero.",
    image: "image/Screenshot 2024-04-10 165307.png",
  },
  {
    name: "Chinku",
    stars: 4,
    message:
      "Donec finibus elit vel neque posuere, ac fermentum nisi scelerisque. Nulla facilisi. Nulla facilisi.",
    image: "image/Screenshot 2024-04-10 165307.png",
  },
  {
    name: "Ashish",
    stars: 5,
    message:
      "Pellentesque vel orci sit amet sem rhoncus varius nec et risus. Fusce vitae tristique turpis.",
    image: "image/Screenshot 2024-04-10 165307.png",
  },
  // Add more testimonials as needed
];
