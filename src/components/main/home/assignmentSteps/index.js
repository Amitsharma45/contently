"use client";
import React from "react";
import Image from "next/image";
import logo from "@/assets/image/Consulting-rafiki.svg";
import { Button } from "@/components/ui/button";

export default function AssignmentSteps() {

  function scrollToSection() {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
  }, 10);
  }
  return (
    <>
      <div className="px-4 sm:!px-10 lg:!px-[50px] ">
        <div className="max-w-[1280px] mx-auto">
          <h1 className="md:text-4xl text-3xl text-center">Assignment Steps</h1>
          <Image src={logo} alt="Image" className="mx-auto" />
          <div className="grid md:grid-cols-3 sm:grid-cols-2  rounded-lg bg-[#f8f8f8] my-10">
            {data.map((item, index) => (
              <div
                key={item.title}
                className={`sm:p-8 px-4 py-6 ${
                  index === data.length - 1 &&
                  " md:col-span-1 sm:col-span-2 col-span-1"
                }`}
              >
                <p className="text-center font-semibold">{item.title}</p>
                <p className="text-sm opacity-80 pt-4 text-center">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="px-4 sm:!px-10 lg:!px-[50px] bg-black">
        <div className="max-w-[1280px] mx-auto p-16 flex justify-center sm:flex-row flex-col">
          <div className="text-white text-center p-5">
            <h1 className="text-[#003cff] text-3xl leading-10 font-semibold">
              Zero Plagiarism
            </h1>
            <p className="leading-8">Your writer checks the essay </p>
            <p className="leading-8">for plagiarism before </p>
            <p className="leading-8"> delivering it to you.</p>
          </div>
          <div className="text-white text-center p-5">
            <h1 className="text-[#003cff] text-3xl leading-10 font-semibold">
              Money-back
            </h1>
            <p className="leading-8"> You get your money back to</p>
            <p className="leading-8">your card if anything goes</p>
            <p className="leading-8">wrong with your order.</p>
          </div>
        </div>
      </div>

      <div className="px-4 sm:!px-10 lg:!px-[50px] ">
        <div className="max-w-[1280px] mx-auto bg-[#f8f8f8] my-10 p-10 text-lg rounded-lg">
          <p>
            Here at{" "}
            <span className="text-[#003cff] text-4xl font-semibold">
              Contently Writers
            </span>
            , we provide a platform for users looking to get their essays,
            homework, assignments, or projects completed by paying minimal
            charges. We suggest trying our services for our efficiency and
            quality of work done, keeping users best interests in mind. Our
            writers are experienced in such tasks and are masters of their
            craft. You will be giving your important tasks into responsible
            hands.
          </p>
          <Button onClick={scrollToSection}  className="uppercase rounded-full mt-5" size="lg" type="button" >
            Get Started Now
          </Button>
        </div>
      </div>
    </>
  );
}

const data = [
  {
    title: "Step 1",
    description:
      "Fill out the details in the form above adjust the format of your assignment according to your needs Upload the 'file' containing the assignment in text form and references if there are any After completion of the above two steps proceed using 'Place order' button given below the form.",
  },
  {
    title: "Step 2",
    description:
      "You will be redirected to the payment portal Once you fill out the information, you can proceed to make payment and confirm the order If you face any issues regarding payment/s, kindly refer to the Services page.",
  },
  {
    title: "Step 3",
    description:
      "Any orders you place will be placed in your profile and/or will be sent to your mail address If you have any issues regarding the assignment after its completion, kindly refer to the Services If you have any questions regarding the website or the process of assignment completion, kindly refer to FAQ page.",
  },
];
