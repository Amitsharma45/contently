import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegFileLines } from "react-icons/fa6";
import { FaRegFilePdf } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa";
import { ImPen } from "react-icons/im";
import { FaFilePrescription } from "react-icons/fa6";
import { FaPenAlt } from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";
import { FaRegNoteSticky } from "react-icons/fa6";
function Service() {
  return (
    <div className="px-4 sm:!px-10 lg:!px-[50px] bg-[#FFFFFF]  !w-full ">
      <div className="max-w-[1280px] mx-auto py-2">
        <p className="text-2xl sm:text-5xl lg:text-6xl pt-10 font-semibold text-center">
          Services
        </p>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 sm:gap-10 lg:gap-16 my-8">
          {data.map((item, index) => (
            <div key={index}>
              <Card className="p-5 min-h-[380px] hover:translate-y-3 duration-200 ">
                <CardHeader className="text-5xl text-[#00052a] hover:text-yellow-300  !justify-center">
                  <div className="flex justify-center " >{item.logo}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-3xl pb-2 text-[#00052a] font-medium">
                    {item.title}
                  </p>
                  <p className="text-md opacity-80 font-normal">{item.about}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    logo: <FaShoppingCart className="max-auto " />,
    title: "Buy an assignment",
    about:
      "Although we offer service of completing any given assignment in given time we also offer some assignments done through years of experience for a fair price. We offer to do assignments for all basic, intermediate and advanced topics for almost all of academic levels",
  },
  {
    logo: <FaRegFileLines />,
    title: "Personal Statement",
    about:
      "May it be Formality or requirement a well thought out personal statement written by experienced writers can fulfill any need. We offer to write a personal statement, help in writing a personal statement*and much more",
  },
  {
    logo: <FaRegFilePdf />,
    title: "Buy a research paper",
    about:
      "Writing a research paper can be a daunting challenge especially when you’d rather spend your time more eficiently, we offer many services that can be useful for any onlookers. We offer to write a research paper, help in a research paper *, good quality research papers done by experts and much more",
  },
  {
    logo: <FaRegNoteSticky />,
    title: "Subject Notes",
    about:
      "It’s an eficient and very useful way of getting good quality study material of your choice. Our writers are experts in their individual fields and are aware of needs of students in different levels of academic merit good set of notes might just come in handy at the next surprise exam! We offer to write coursework notes, chapter notes, notes for exams and much more",
  },
  {
    logo: <FaListCheck />,
    title: "Specific Tasks/project",
    about:
      "Any kind of assignment or project that does not come through standard set of rules takes lot of research and improvisations we provide service to do such a project through our platform where you will get to connect with the person on the other side. You can provide inputs if you have any assuring that the project are going the way it is supposed to go.",
  },
  {
    logo: <FaPenAlt />,
    title: "Coursework Writing",
    about:
      "Coursework for students in any academic institutions is a very important part of their studies; our services are designed in a way to make such parts efficient and easy to access so any kind of coursework written on the platform will try to deliver on this promise. Our coursework writing services include mundane course work tasks such as chapter assignments to more advanced tasks such as experiments or practical writing.",
  },
  {
    logo: <FaFilePrescription />,
    title: "Disseration",
    about:
      "Our dissertation services include Doing a detailed study of any given topic and writing a well structured dissertation with user inputs along the way For any such requirement is not met through the form on the home page please visit community page",
  },
  {
    logo: <ImPen />,
    title: "Essay Services",
    about:
      "Applying for new institutions can be intimidating task, while preparing for such event is hectic it can also distract you from actually presenting yourself for candidacy through collage essays We offer to write well constructed and appealing collage essays that might lighten the workload.",
  },
  {
    logo: <FaBookOpen />,
    title: "Homework",
    about:
      "We do homework for students of all grades and we offer variety of different ways to have your homework done exactly how you want it We offer to do homework for all basic grade subjects to variety of different levels of academic experience",
  },
];

export default Service;
