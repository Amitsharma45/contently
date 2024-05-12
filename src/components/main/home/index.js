import React from "react";
import AssignmentSteps from "./assignmentSteps";
import Details from "./details";
import FAQ from "./faq";
import Testimonials from "./testimonials";
import Banner from "./banner";
export default function HomeScreen() {
  return (
    <>
      <Banner />
      <AssignmentSteps />
      <Details />
      <FAQ />
      <Testimonials />
    </>
  );
}
