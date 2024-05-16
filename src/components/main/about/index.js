import React from "react";
import blogImage from '@/assets/image/Blog post-amico.svg'
import IssueImage from '@/assets/image/Maintenance-bro.svg'
import AccountImage from '@/assets/image/Safe-bro.svg'
import PaymentImage from '@/assets/image/Refund-bro.svg'

function About() {
    const data = [
        {
            title:"Blog",
            about:"Contently writers as a brand is in its initial stage of development, so even if we have all our services online and functional it’s still far from perfect. We have planned many updates for overall development and will start deploying them soon, for any queries in this matter or to stay up to date with our services please refer to our blogs",
            image:""
        },
        {
            title:"Issues and remarks",
            about:"We have an active and responsive system built around users needs when interacting with the website, so if you are facing any technical difficulty or any issue regarding the website please inform us as we would certainly get in touch with you as soon as possible.",
            image:""
        },
        {
            title:"Accounts",
            about:"Any information of any accounts used for sign up , payment, review are completely protected and will not be shared with any third party which might cause you inconvenience .",
            image:""
        },
        {
            title:"Payments and refunds",
            about:"We offer many different policies regarding money refunds, discounts, payment methods, to check out any information you might need do check out our policies page",
            image:""
        }

    ]
  return (
    <div>
      <div className="bg-[#020035] py-8">
        <p className="text-[#FFFFFF] sm:text-[50px] lg:text-[80px] text-[40px] text-center pt-20 mx-auto font-semibold">
          Contently Connect
        </p>
        <p className="text-[#FFFFFF] text-[25px] text-center pt-10 mb-8 mx-auto ">
          Let's explore and deepen our connection.
        </p>
        <div className="h-[7px] w-[150px] bg-[#1A0C87] mx-auto"></div>
      </div>
      <div className="pt-8">
        <p className="text-center text-[60px] font-semibold mx-auto">Writers and AI writers</p>
        <p className="text-center mx-auto text-[15px]">Writers at contently are more than capable of solving any issue one might face and for those looking for quick assignment with not much emphasis on quality we also provide AI content writing and its review services.</p>
      </div>
    </div>
  );
}

export default About;
