import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    
    <div id="faq" className="px-4 sm:!px-10 lg:!px-[50px] bg-black">
      <div className="max-w-[1280px] mx-auto py-16">
        <h1 className="text-white lg:text-5xl sm:text-3xl text-2xl  font-semibold">
          Frequently asked{"  "}
          <span className="text-[#003cff]">Zero Plagiarism</span>
        </h1>
        <Accordion
          type="single"
          collapsible
          className="w-full grid gap-5 pt-10 md:px-20 sm:px-10 "
        >
          {data.map((item) => (
            <AccordionItem
              key={item.id}
              value={`item-${item.id}`}
              className="bg-white px-2 sm:px-8 rounded-xl "
            >
              <AccordionTrigger className="sm:text-xl text-md">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="text-md sm:pr-10 px-2">
                {item.description}
              </AccordionContent>
            </AccordionItem>
          ))}
          <AccordionItem
            value={`item-6`}
            className="bg-white px-2 sm:px-8 rounded-xl"
          >
            <AccordionTrigger className="sm:text-xl text-md">
              What subject/department/academic stream does contently writers
              provide service for?
            </AccordionTrigger>
            <AccordionContent className="text-md sm:pr-10 px-2">
              <p className="mb-3" > 
                1. Regular coursework, homework or exam work is done for all
                basic subjects including social studies, mathematics, science
                and many more.
              </p>
              <p>
                2. Collage work, university work or university preparations work
                done for Engineering, Law, Management, Finance, IT, Accounting
                and statistics. For any query regarding any subject services or
                questions about its processes please contact us through mail or
                whatsapp
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

const data = [
  {
    id: 1,
    title: "How to get your assignments completed?",
    description:
      "Our website works on pay to work system, basically you pay us to do your assignments. We provide any such service in minimal prices. When filling up the form on home page you will be asked to upload a file regarding your assignment this file will be delivered to the writer who will then complete the assignment and send it back if you have any instructions regarding your assignment please place them in the file to be uploaded in the first form. If you have any instructions regarding the process however we kindly suggest that you put them through remarks box on the same form.",
  },
  {
    id: 2,
    title: "How will you receive your completed assignments?",
    description:
      "All orders are delivered through the customer's account on the website via the orders page.",
  },
  {
    id: 3,
    title: "What are the upload file requirements?",
    description:
      "The file you will be uploading when filling the form should be a single zip file containing all other files you find necessary for your assignments and a proper explained file format to be followed by writer.",
  },
  {
    id: 4,
    title: "How to stay updated with the progress on your order?",
    description:
      "You will see a profile dashboard on the home page when you place an order or sign in. There is a my order option in the profile dashboard please refer to this option to keep tabs on your assignments.",
  },
  {
    id: 5,
    title:
      "If you face any technical issue on the platform how to get human support as soon as possible?",
    description:
      "Please contact us through mail or whatsapp no. shown on the website",
  },
];
