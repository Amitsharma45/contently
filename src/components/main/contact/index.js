import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";
import logo from "@/assets/image/contently-logo.png";

function ContactUs() {
  return (
    <>
      <div className="bg-[#020035] py-8">
        <p className="text-[#FFFFFF] sm:text-[50px] lg:text-[80px] text-[40px] text-center pt-20 mx-auto font-semibold">
          Contact us
        </p>
        <p className="text-[#FFFFFF] text-[25px] text-center pt-10 mx-auto ">
          If you have any issues regarding any matter or if you are just curious
          drop a mail so we can
        </p>
        <p className="text-[#FFFFFF] text-[25px] text-center pt-3 mx-auto lg:pb-10 pb-3">
          help you out!
        </p>
        <div className="h-[7px] w-[150px] bg-[#1A0C87] mx-auto"></div>
      </div>

      <div className="lg:px-32 lg:py-16">
        <div className="!px-6 sm:!px-10 lg:!px-[80px] py-20">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 ">
            <div className="grid gap-2">
              <p className="font-semibold">Phone</p>
              <div>
                <p>
                  Tel: <u>+91 7727851997</u>
                </p>
                <p>Contact us on WhatsApp at these hours:</p>
                <p> Monday 10:00 AM – Saturday 06:00 PM</p>
              </div>
            </div>
            <div className="grid gap-2">
              <p className="font-semibold">Location</p>
              <div>
                <p>Our company, Facio Contently Writers Pvt Ltd is based in</p>
                <p>Mansarovar, Jaipur 302020</p>
              </div>
              <p>CIN: U82990RJ2024PTC09328</p>
            </div>
            <Image src={logo} alt="Logo" className="h-[80px] w-[180px]" />
            <div className="grid gap-2">
              <p className="font-semibold">Email</p>
              <div>
                <p>If you have any issues regarding any matter or if you are</p>
                <p>just curious drop a mail so we can help you out!</p>
              </div>
              <a
                href="mailto:info@contentlywriters.com"
                className="hover:underline"
              >
                info@contentlywriters.com
              </a>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default ContactUs;
