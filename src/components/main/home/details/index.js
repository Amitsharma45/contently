import Image from "next/image";
import React from "react";
import image1 from "@/assets/image/5484597.jpg";
import image2 from "@/assets/image/5150721.jpg";
import image3 from "@/assets/image/5150721.jpg";
import image4 from "@/assets/image/19197293.jpg";
import image5 from "@/assets/image/5138237.jpg";
import image6 from "@/assets/image/5024147.jpg";
import image7 from "@/assets/image/4931505.jpg";


export default function Details() {
  return (
    <div className="px-4 sm:!px-10 lg:!px-[50px] ">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid sm:!gap-1 gap-10" >
          {data.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col  
              justify-center items-center 
       
              ${Number(index) % 2== 0 ? "md:flex-row-reverse" : "md:flex-row"
              } `}
            >
              <div className={`flex justify-center flex-col md:w-[50%] `}>
                <p className="lg:text-5xl sm:text-3xl text-3xl font-bold pb-5 md:text-start text-center">{item.title}</p>
                <p className="lg:text-4xl sm:text-3xl text-2xl leading-[50px] md:text-start text-center">{item.description}</p>
              </div>
              <div className="flex justify-center items-center md:w-[50%] p-5">
                <Image src={item.image} alt="Image" className="m-w-[500px]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    id: 1,
    title: "EXPERTISE",
    description:
      "Assignments done carefully With expects of the field with years of experience",
    image: image6,
  },
  {
    id: 2,
    title: "Covered Topics",
    description:
      "We provide services for vast amount of subjects and topics from regular school subjects to writing a research paper on certain topics.",
    image: image1,
  },
  {
    id: 3,
    title: "SIGN IN / LOG IN ",
    description:
      "Keep tabs on your Assignments Through profile page",
    image: image3,
  },
  {
    id: 4,
    title: "IN YOUR BUDGET!",
    description:
      "We offer services in variety Of formats to fit any budget",
    image: image4,
  },
  {
    id: 4,
    title: "COMMUNITY",
    description:
      "Responsible and responsive Network To help whenever necessary",
    image: image5,
  },
  {
    id: 4,
    title: "ALWAYS ON TIME !",
    description:
      "Your assignments will be done in time all the time check out our policies",
    image: image7,
  },
];
