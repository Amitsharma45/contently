"use client";
import { Input } from "@/components/ui/input";
import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { FiMinus } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { TbMailStar } from "react-icons/tb";
import axios from "axios";
import InputError from "@/components/ui/input-error";

export default function Banner() {
  const [isClient, setIsClient] = useState(false);

  const [formValues, setFormValues] = useState({
    subject: "Accounting",
    topic: "",
    paragraph: "",
    comment: "",
    deadline: "14 days",
    orderFile: "",
    temp: "Passage",
  });

  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(0);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const [error, setError] = useState({
    subject: "",
    topic: "",
    paragraph: "",
    comment: "",
    deadline: "",
    orderFile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (!value) {
      setError({
        ...error,
        [name]: `Please enter ${name
          .split(/(?=[A-Z])/)
          .map((data) => data.toLowerCase())
          .join(" ")}`,
      });
    } else {
      setError({ ...error, [name]: "" });
    }
    if (name === "orderFile") {
      const maxSizeInBytes = 10 * 1024 * 1024;

      const file = e.target.files[0];
      console.log({ file: file.size, maxSizeInBytes });
      if (file.size > maxSizeInBytes) {
        setError({ ...error, [name]: "File is too large. Max size is 10MB" });
        return;
      } else {
        setError({ ...error, [name]: "" });
        setFormValues({ ...formValues, [name]: file });
      }
    } else {
      setFormValues({ ...formValues, [name]: value });
    }
  };

  function scrollToSection() {
    setTimeout(() => {
      const section = document.getElementById("faq"); // Replace 'sectionId' with the ID of the section you want to scroll to
      section.scrollIntoView({ behavior: "smooth" });
    }, 10);
  }

  function updatePrice() {
    var subject = subjectOptions.find(
      (item) => item.name === formValues.subject
    ).value;
    var deadline = deadlineOptions.find(
      (item) => item.name === formValues.deadline
    ).value;
    var price = 0;

    if (deadline === "136502") {
      if (
        subject === "121" ||
        subject === "122" ||
        subject === "133" ||
        subject === "124"
      ) {
        price = 14;
      } else if (subject === "125" || subject === "126" || subject === "127") {
        price = 15;
      } else if (
        subject === "129" ||
        subject === "130" ||
        subject === "131" ||
        subject === "128"
      ) {
        price = 21;
      } else if (subject === "123" || subject === "132") {
        price = 16;
      }
    } else if (deadline === "136501") {
      // 7 days
      if (
        subject === "121" ||
        subject === "122" ||
        subject === "133" ||
        subject === "124"
      ) {
        price = 16;
      } else if (subject === "125" || subject === "126" || subject === "127") {
        price = 17;
      } else if (
        subject === "129" ||
        subject === "130" ||
        subject === "131" ||
        subject === "128"
      ) {
        price = 24;
      } else if (subject === "123" || subject === "132") {
        price = 18;
      }
    } else if (deadline === "136500") {
      // 3 days
      if (
        subject === "121" ||
        subject === "122" ||
        subject === "133" ||
        subject === "124"
      ) {
        price = 20;
      } else if (subject === "125" || subject === "126" || subject === "127") {
        price = 21;
      } else if (
        subject === "129" ||
        subject === "130" ||
        subject === "131" ||
        subject === "128"
      ) {
        price = 30;
      } else if (subject === "123" || subject === "132") {
        price = 22;
      }
    } else if (deadline === "136499") {
      // 1 day
      if (
        subject === "121" ||
        subject === "122" ||
        subject === "133" ||
        subject === "124"
      ) {
        price = 25;
      } else if (subject === "125" || subject === "126" || subject === "127") {
        price = 26;
      } else if (
        subject === "129" ||
        subject === "130" ||
        subject === "131" ||
        subject === "128"
      ) {
        price = "N/A";
      } else if (subject === "123" || subject === "132") {
        price = 27;
      }
    }

    price *= count;
    setPrice(price);
  }

  useEffect(() => {
    updatePrice();
  }, [formValues, count]);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const error = {};
      if (!formValues.topic) error.topic = "Please enter topic";
      if (!formValues.orderFile) error.orderFile = "Select  enter File";
      if (!formValues.comment) error.comment = "Please enter comment";
      if (!formValues.deadline) error.deadline = "Please enter deadline";
      if (!formValues.subject) error.subject = "Please enter subject";
      setError(error);
      console.log(error);
      if (Object.keys(error).length > 0) return;

      const data = {
        count,
        ...formValues,
        amount: price,
      };
      if (localStorage.getItem("token") === null) {
        alert("Please login to continue");
        return;
      }
      let formData = new FormData();
      formData.append("subject", formValues.subject);
      formData.append("topic", formValues.topic);
      // formData.append("paragraph", formValues.paragraph);
      formData.append("comment", formValues.comment);
      let parts = formValues.deadline.split(" "); // Split the string by spaces
      let number = parseInt(parts[0]);
      formData.append("deadline", number);
      formData.append("pages", count);
      formData.append("amount", price);
      formData.append(
        "orderFile",
        document.querySelector('input[type="file"]').files[0]
      );

      // console.log("Form Submitted", formData);
      if (localStorage.getItem("token") === null) {
        alert("Please login to continue");
        return;
      }
      const response = await axios.post(
        "https://contentlywriters.com:8088/order/add",
        formData,
        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const [selectedFileName, setSelectedFileName] = useState("");

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setSelectedFileName(event.target.files[0].name);
    } else {
      setSelectedFileName("");
    }
    handleChange(event); // Call the passed-in handleChange function
  };

  return (
    <div className="px-4 sm:!px-10 lg:!px-[50px] ">
      <div className="max-w-[1280px] mx-auto  flex lg:flex-row flex-col gap-10">
        <div className="w-full grid  mt-20 pr-10">
          <p className="md:text-7xl sm:text-5xl text-5xl min-h-[300px]  sm:min-h-[200px] leading-[80px]">
            {isClient && (
              <Typewriter
                skipAddStyles={true}
                options={{
                  strings: [
                    "Contently Writers Devised with Merit",
                    "Assignments done in few clicks",
                    "We're here to lighten your workload",
                    "When there is too much to write!",
                    "Pushing it for Tomorrow? Don't worry, we got you",
                    "Get work done from the experts",
                    "Contently Writers Devised with Merit",
                  ],
                  autoStart: true,
                  loop: true,
                  pauseFor: 2000,
                  deleteSpeed: 50,
                }}
              />
            )}
          </p>
          <div className="flex  justify-between ">
            <Button type="button" variant="icon" onClick={scrollToSection}>
              <TbMailStar className="text-5xl" />
            </Button>
            <Link href="https://www.instagram.com/contentlywriters/">
              <FaInstagram className="text-5xl" />
            </Link>
            <Link href="https://www.linkedin.com/company/facio-contently-writers/">
              <FaLinkedin className="text-5xl" />
            </Link>
          </div>
        </div>
        <div className="z-30   lg:w-[550px] bg-[#3c46d5] lg:p-4 p-10 lg:mx-1 sm:mx-20 mx-4 mt-10  ">
          <form className="w-full bg-white p-6 grid gap-3 ">
            <h1 className="text-2xl font-semibold">Place new order</h1>
            <SelectTab
              title="Subject"
              name="subject"
              data={subjectOptions}
              value={formValues.subject}
              handleChange={handleChange}
            />
            <InputError message={error.subject} />
            <Input
              className="w-full"
              name="topic"
              value={formValues.topic}
              onChange={handleChange}
              placeholder="Topic"
            />
            <InputError message={error.topic} />

            <SelectTab
              title="Subject"
              name="temp"
              data={[
                { value: "Passage", name: "Passage" },
                { value: "Brief Points", name: "Brief Points" },
              ]}
              value={formValues.temp}
              handleChange={handleChange}
            />
            <InputError message={error.temp} />
            {/* <SelectTab
              title="Highlight"
              name="highlight"
              data={[
                { value: "Highlight", name: "Highlight" },
                { value: "Writer Choice", name: "Writer Choice" },
              ]}
              value={formValues.highlight}
              handleChange={handleChange}
            /> */}
            <div className="relative w-full">
              <label
                htmlFor="orderFile"
                className="cursor-pointer inline-block"
              >
                <Button>Choose file</Button>
              </label>
              <Input
                type="file"
                id="orderFile"
                name="orderFile"
                className="absolute inset-0 opacity-0 w-full cursor-pointer"
                accept=".pdf, .docx, .png, .jpeg, .jpg, .txt"
                onChange={handleFileChange}
              />
              {selectedFileName && (
                <div className="mt-2 text-sm text-gray-600">
                  {selectedFileName}
                </div>
              )}
              {error.orderFile && <InputError message={error.orderFile} />}
            </div>

            <Textarea
              value={formValues.comment}
              onChange={handleChange}
              placeholder="Enter your comment here..."
              name="comment"
              id="comment"
            />
            <InputError message={error.comment} />
            <div className="grid gap-1.5">
              <Label className="font-normal ">Deadline</Label>
              <SelectTab
                title="Deadline"
                name="deadline"
                data={deadlineOptions}
                value={formValues.deadline}
                handleChange={handleChange}
              />
              <InputError message={error.deadline} />
            </div>
            <div>
              <div className="text-md">{250 * count} words</div>
              <div className="flex  justify-center items-center">
                <Button
                  size="icon"
                  className="rounded-none  text-xl font-normal w-16 h-12   bg-black text-white"
                  type="button"
                  disabled={count === 1}
                  onClick={() => setCount(count - 1)}
                >
                  <FiMinus />
                </Button>
                <h1 className=" tex-2xl font-medium h-12 w-full border-2 border-black text-center leading-10">
                  {count}
                </h1>
                <Button
                  size="icon"
                  className="rounded-none text-xl font-normal w-16 h-12  bg-black text-white"
                  type="button"
                  onClick={() => setCount(count + 1)}
                >
                  <IoMdAdd />
                </Button>
              </div>
            </div>
            <div className="text-center text-2xl">
              Estimated Price: {price}$
            </div>
            <Button
              type="button"
              className="w-full h-12  bg-[#000] "
              onClick={handleSubmit}
            >
              Write my assignment
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

const SelectTab = ({ title, name, value, data, handleChange }) => {
  return (
    <div className="flex flex-col gap-1.5">
      <Select
        id={name}
        name=""
        value={value}
        onValueChange={(value) => handleChange({ target: { name, value } })}
      >
        <SelectTrigger className="h-9">
          <SelectValue placeholder={`Select ${title.toLowerCase()}`} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup className="max-h-[250px]">
            {data.map((value) => {
              return (
                <SelectItem key={value.name} value={value.name}>
                  {value.name}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

const subjectOptions = [
  { name: "Accounting", value: "132" },
  { name: "Dissertation", value: "131" },
  { name: "Engineering Department", value: "127" },
  { name: "Essay Writing", value: "122" },
  { name: "Finance Department", value: "125" },
  { name: "General Subject", value: "133" },
  { name: "IT Department", value: "123" },
  { name: "Law Department", value: "130" },
  { name: "Management Department", value: "124" },
  { name: "Power Point Presentation", value: "129" },
  { name: "Statistics Department", value: "126" },
  { name: "Thesis", value: "128" },
];

const deadlineOptions = [
  { name: "1 day", value: "136499" },
  { name: "3 days", value: "136500" },
  { name: "7 days", value: "136501" },
  { name: "14 days", value: "136502" },
];
