import React from "react";
import AssignmentSteps from "./assignmentSteps";
import Details from "./details";
import FAQ from "./faq";
import Testimonials from "./testimonials";
import Banner from "./banner";
import Link from "next/link";
import { MdEmail } from "react-icons/md";

export default function HomeScreen() {
  return (
    <>
      <Banner />
      <AssignmentSteps />
      <Details />
      <FAQ />
      <Testimonials />
      <Link href="mailto:info@contentlywriters.com">
        <div className="rounded-full fixed w-12 h-12 transition-colors duration-200 text-white hover:text-[#5646ea] bg-[#5646ea] hover:bg-white bottom-6 right-16  flex justify-center items-center shadow-xl">
          <MdEmail className="text-3xl " />
        </div>
      </Link>
    </>
  );
}
