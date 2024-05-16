"use client"
import { list } from "postcss";
import React from "react";
import Link from "next/link";
import { FaCheck } from "react-icons/fa6";
import { FaCalculator } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { MdEngineering } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { VscLaw } from "react-icons/vsc";
import { FaChartBar } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";

function Subject() {

  function scrollToSection(id) {
    console.log({ id });
    setTimeout(() => {
      const section = document.getElementById(id); // Replace 'sectionId' with the ID of the section you want to scroll to
      section.scrollIntoView({ behavior: "smooth" });
    }, 10);
  }
  return (
    <>
      <div
        className="px-4 sm:!px-10 lg:!px-[50px] bg-black h-[300px]"
        style={{
          backgroundImage: `url(https://cdn.pixabay.com/photo/2015/11/04/09/28/banner-1022119_1280.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "fit",
        }}
      >
        <div className="max-w-[1280px] mx-auto py-16 text-[#b0ad9f] flex flex-col gap-4 justify-center items-center h-full ">
          <p className="text-center text-3xl font-semibold ">
            Welcome to our Subject Page
          </p>
          <p className="text-xl text-center">
            Explore our wide range of subjects and services
          </p>
        </div>
      </div>
      <div className="px-4 sm:!px-10 lg:!px-[50px]">
        <div className="max-w-[1280px] mx-auto py-16 ">
          <div className="flex gap-4 justify-center flex-wrap ">
            {listOFSubjects.map((subject) => (
              <button
                onClick={() => scrollToSection(subject.tag)}
                key={subject.id}
                className="hover:text-red-600 "
              >
                {subject.title}
              </button>
            ))}
          </div>
          <div className="grid gap-10 my-10 md:px-24 sm:px-16 px-2">
            {data.map((item, index) => (
              <div key={index} className="grid gap-6" id={item.tag}>
                <h1 className="text-4xl font-semibold flex gap-1">{item.logo} {item.title}</h1>
                <p className="text-[#555]">{item.about}</p>
                {item.points.length != 0 && (
                  <h1 className="text-3=2xl font-semibold">Services Offered</h1>
                )}
                {item.points.length != 0 && (
                  <ul className="list-none p-0 grid gap-3">
                    {item.points.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center relative text-[#555]"
                      >
                        <div className="bg-[#42b84a] w-5 h-5 rounded-full flex justify-center items-center mr-3 ">
                          <FaCheck className="text-white text-sm" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {item.manner.length != 0 && (
                  <h1 className="text-3=2xl font-semibold">
                    We offer services in the following manner
                  </h1>
                )}
                {item.manner.length != 0 && (
                  <ul className="list-none p-0 grid gap-3">
                    {item.manner.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center relative text-[#555]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                <ul className="list-none p-0 grid gap-3">
                  {item?.aboutPoints?.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center relative text-[#555]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <p className="text-xl font-semibold pb-3">
                The services we provide for any such subjects include:
              </p>
              <div className="text-[#555] text-md grid gap-3">
                <p>
                  Helping in an assignment or homework of any subject from the
                  above list
                </p>
                <p>
                  Performing a complete assignment of any of the subjects in the
                  above list
                </p>
                <p>
                  Selling pre-made assignments for a fair price or even on
                  offers
                </p>
              </div>
            </div>
            <div className="grid gap-4">
              <h1 className="text-5xl font-semibold">
                Other Subjects and Services
              </h1>
              <div className="text-[#555] gap-5 grid">
                <p>
                  If you are looking for a subject not mentioned on our page or
                  you have an assignment that does not fall under mainstream or
                  regular topics, we can still help.
                </p>
                <p>
                  Contact us via email or through our social media pages. If
                  your assignment falls within any of our writers expertise, it
                  will be done.
                </p>
                <p>
                  We deliver on our promise as all the assignments we do will be
                  devised with merit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Subject;

const data = [
  {
    title: "Management",
    tag: "#management",
    logo: <FaChartLine />,
    about:
      "Management (or managing) is the administration of organizations, whether they are a business, a nonprofit organization, or a government body through business administration, nonprofit management, or the political science sub-field of public administration respectively. It is the process of managing the resources of businesses, governments, and other organizations.",

    service: "Services Offered",
    points: [
      "Management assignment help",
      "Doing a Management assignment",
      "Offering pre-made Management assignments for sale",
    ],

    mannerHeading: "We offer services in the following manner",
    manner: [
      "Business Management",
      "Organizational Behavior",
      "Operations Management",
      "Change Management",
      "Risk Management",
      "Supply Chain Management",
      "Human Resource Management",
      "Project Management",
      "Strategic Management",
    ],
  },
  {
    tag: "#accounting",
    title: "Accounting",
    logo:  <FaCalculator />,
    about: `Accounting, also known as accountancy, is the process of recording and processing information about economic entities, such as businesses and corporations. Accounting measures the results of an organization's economic activities and conveys this information to a variety of stakeholders, including investors, creditors, management, and regulators. Practitioners of accounting are known as accountants. The terms "accounting" and "financial reporting" are often used interchangeably.`,
    service: "Services Offered",
    points: [
      "Accounting assignment help",
      "Doing an Accounting assignment",
      "Offering pre-made Accounting assignments for sale",
    ],
    mannerHeading: "We offer services in the following manner",
    manner: [
      "Auditing",
      "Finance",
      "Taxation Accounting",
      "MYOB",
      "Corporate Accounting",
      "Management Accounting",
      "Cost Accounting",
      "Accounting Information Systems",
      "International Accounting",
      "Accounting Society",
    ],
  },
  {
    tag: "#engineering",
    title: "Engineering Studies",
    logo: <MdEngineering />,
    about:
      "Engineering studies is an interdisciplinary branch of social sciences and humanities devoted to the study of engineers and their activities, often considered a part of science and technology studies (STS), and intersecting with and drawing from engineering education research. Studying engineers refers among other to the history and the sociology of their profession, its institutionalization and organization, the social composition and structure of the population of engineers, their training, their trajectory, etc. A subfield is for instance Women in engineering. Studying engineering refers to the study of engineering activities and practices, their knowledge and ontologies, their role into the society, their engagement.",
    service: "Services Offered",
    points: [
      "Engineering assignment help",
      "Doing an Engineering assignment",
      "Offering pre-made Engineering assignments for sale",
    ],
    mannerHeading: "We offer services in the following manner",
    manner: [
      "Mechanical Engineering",
      "Civil Engineering",
      "Software Engineering",
      "Chemical Engineering",
      "Biomedical Engineering",
      "Electronic Engineering",
      "Aerospace Engineering",
      "Computer Engineering",
      "Electrical Engineering",
      "Engineering Mathematics",
    ],
  },
  {
    tag: "#it",
    title: "Information Technology",
    logo: <FaLaptopCode />,
    about:
      "Information technology (IT) is a set of related fields that encompass computer systems, software, programming languages and data and information processing and storage. IT forms part of information and communications technology (ICT). An information technology system (IT system) is generally an information system, a communications system, or, more specifically speaking, a computer system — including all hardware, software, and peripheral equipment — operated by a limited group of IT users, and an IT project usually refers to the commissioning and implementation of an IT system.",
    service: "Services Offered",
    points: [
      "IT assignment help",
      "Doing an IT assignment",
      "Offering pre-made IT assignments for sale",
    ],
    mannerHeading: "We offer services in the following manner",
    manner: [
      "Networking",
      "Programming",
      "R Programming",
      "C Programming",
      "Linear Programming",
      "Java",
      "JavaScript Assignment",
      "Python Assignment",
      "Ruby Assignment",
      "IT Security",
    ],
  },
  {
    tag: "#law",
    title: "Law",
    logo: <VscLaw />,
    about:
      "Legal education is the education of individuals in the principles, practices, and theory of law. It may be undertaken for several reasons, including to provide the knowledge and skills necessary for admission to legal practice in a particular jurisdiction, to provide a greater breadth of knowledge to those working in other professions such as politics or business, to provide current lawyers with advanced training or greater specialization, or to update lawyers on recent developments in the law.",
    service: "Services Offered",
    points: [
      "Law assignment help",
      "Doing a law assignment",
      "Offering pre-made law assignments for sale",
    ],
    mannerHeading: "We offer services in the following manner",
    manner: [
      "Taxation Law",
      "Commercial Law",
      "Business Law",
      "Criminal Law",
      "Employment Law",
      "Constitutional Law",
      "Civil Law",
      "Property Law",
      "Corporate Law",
      "Tort Law",
    ],
  },
  {
    tag: "#statistics",
    title: "Statistics",
    logo: <FaChartBar />,
    about: `Statistics (from German: Statistik, orig. "description of a state, a country") is the discipline that concerns the collection, organization, analysis, interpretation, and presentation of data. In applying statistics to a scientific, industrial, or social problem, it is conventional to begin with a statistical population or a statistical model to be studied. Populations can be diverse groups of people or objects such as "all people living in a country" or "every atom composing a crystal". Statistics deals with every aspect of data, including the planning of data collection in terms of the design of surveys and experiments.`,
    service: "Services Offered",
    points: [
      "Statistics assignment help",
      "Doing a Statistics assignment",
      "Offering pre-made Statistics assignments for sale",
    ],
    mannerHeading: "We offer services in the following manner",
    manner: [
      "Statistics",
      "STATA",
      "Econometrics",
      "R Studio",
      "Data Analysis",
      "Data Mining",
      "Business Statistics",
      "Financial Statistics",
      "Descriptive Statistics",
      "Statistics Management Accounting",
    ],
  },
  {
    tag: "#general",
    title: "General Subjects",
    logo: <FaBook />,
    about:
      "We offer services for a variety of academic stages from the basic topics in schools to dissertations of exceptional merit. Here are some non-branch specific subjects that might be of some help:",
    aboutPoints: [
      "Political Science",
      "Social Science",
      "Geography",
      "Psychology",
      "Education Plan",
      "Humanities",
      "Anthropology",
      "Philosophy",
      "Physics",
      "Probability",
    ],
    service: "",
    points: [],
    mannerHeading: "",
    manner: [],
  },
];

const listOFSubjects = [
  {
    id: 1,
    title: "Management",
    tag: "#management",
  },
  {
    id: 2,
    title: "Accounting",
    tag: "#accounting",
  },
  {
    id: 3,
    title: "Engineering",
    tag: "#engineering",
  },
  {
    id: 4,
    title: "Information Technology",
    tag: "#it",
  },
  {
    id: 5,
    title: "Law",
    tag: "#law",
  },
  {
    id: 6,
    title: "Statistics",
    tag: "#statistics",
  },
  {
    id: 7,
    title: "General Subjects",
    tag: "#general",
  },
];
