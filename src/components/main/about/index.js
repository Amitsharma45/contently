import React from "react";
import image1 from "@/assets/image/Blog post-amico.svg";
import image2 from "@/assets/image/Maintenance-bro.svg";
import image3 from "@/assets/image/Safe-bro.svg";
import image4 from "@/assets/image/Refund-bro.svg";

import Image from "next/image";

function About() {
  return (
    <div>
      <div className="bg-[#020035] py-8">
        <p className="text-[#FFFFFF] sm:text-[50px] lg:text-[80px] text-[40px] text-center pt-20 mx-auto font-semibold">
          Contently Connect
        </p>
        <p className="text-[#FFFFFF] text-[25px] text-center pt-10 mb-8 mx-auto ">
          Let&#39;s explore and deepen our connection.
        </p>
        <div className="h-[7px] w-[150px] bg-[#1A0C87] mx-auto"></div>
      </div>
      <div className="px-4 sm:!px-10 lg:!px-[50px] ">
        <div className="max-w-[1280px] mx-auto">
          <div className="pt-8">
            <p className="text-center text-[60px] font-semibold mx-auto">
              Writers and AI writers
            </p>
            <p className="text-center mx-auto text-[15px]">
              Writers at contently are more than capable of solving any issue
              one might face and for those looking for quick assignment with not
              much emphasis on quality we also provide AI content writing and
              its review services.
            </p>
          </div>
          <div className="my-10">
            <div className="grid sm:!gap-1 gap-10">
              {data.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col  
              justify-center items-center 
       
              ${
                Number(index) % 2 != 0 ? "md:flex-row-reverse" : "md:flex-row"
              } `}
                >
                  <div className={`flex justify-center flex-col md:w-[50%] `}>
                    <p className="lg:text-4xl sm:text-2xl text-2xl font-bold pb-5 md:text-start text-center">
                      {item.title}
                    </p>
                    <p className=" md:text-start text-center opacity-90">
                      {item.about}
                    </p>
                  </div>
                  <div className="flex justify-center items-center md:w-[50%] p-5">
                    <Image
                      src={item.image}
                      alt="Image"
                      className="m-w-[500px]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 sm:!px-10 lg:!px-[50px] bg-[#000000] py-10">
        <div className="max-w-[1280px] mx-auto">
          <p className="text-[#FFFFFF] sm:text-[30px] lg:text-[50px] text-[30px] text-center  mx-auto font-[450]">
            About our Writers
          </p>
          <p className="text-[#FFFFFF] sm:text-[20px] text-center pt-5 mx-auto ">
            We are lucky to have Writers from different educational backgrounds
            from many different renowned universities and combined work
            experience of decades. Get in touch with them through our lined in
            page.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

const data = [
  {
    title: "Blog",
    about:
      "Contently writers as a brand is in its initial stage of development, so even if we have all our services online and functional it’s still far from perfect. We have planned many updates for overall development and will start deploying them soon, for any queries in this matter or to stay up to date with our services please refer to our blogs",
    image: image1,
  },
  {
    title: "Issues and remarks",
    about:
      "We have an active and responsive system built around users needs when interacting with the website, so if you are facing any technical difficulty or any issue regarding the website please inform us as we would certainly get in touch with you as soon as possible.",
    image: image2,
  },
  {
    title: "Accounts",
    about:
      "Any information of any accounts used for sign up , payment, review are completely protected and will not be shared with any third party which might cause you inconvenience .",
    image: image3,
  },
  {
    title: "Payments and refunds",
    about:
      "We offer many different policies regarding money refunds, discounts, payment methods, to check out any information you might need do check out our policies page",
    image: image4,
  },
];
