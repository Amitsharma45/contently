import Image from "next/image";
import Link from "next/link";
import img from "@/assets/image/Essential-Minimal-Payment-Icons-removebg-preview copy.png";
import { Separator } from "@/components/ui/separator";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="!px-6 sm:!px-10 lg:!px-[80px] py-5">
      <div className="max-w-[1280px] mx-auto ">
        <div className="flex py-4 items-start flex-col md:flex-row gap-4">
          <div className="flex md:gap-[150px] gap-10 w-full  md:flex-row flex-col">
          <ul className="grid gap-2">
            <li className="text-[#03024f] font-semibold ">Company</li>
            <li>
              <Link
                className="text-md hover:text-[#03024f] hover:underline "
                href="/about"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className="text-md hover:text-[#03024f] hover:underline"
                href="#faq"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                className="text-md hover:text-[#03024f] hover:underline"
                href="/contact"
              >
                Contacts
              </Link>
            </li>
            <li>
              <Link
                className="text-md hover:text-[#03024f] hover:underline"
                href="/blog"
              >
                Blog
              </Link>
            </li>
          </ul>
          <ul className="grid gap-2">
            <li className="text-[#03024f] font-semibold ">Terms</li>
            <li>
              <Link
                className="text-md hover:text-[#03024f] hover:underline"
                href="/terms-and-conditions"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                className="text-md hover:text-[#03024f] hover:underline"
                href="/privacy-policy"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                className="text-md hover:text-[#03024f] hover:underline"
                href="/refund-policy"
              >
                Refund Policy
              </Link>
            </li>
            <li>
              <Link
                className="text-md hover:text-[#03024f] hover:underline"
                href="/revision-policy"
              >
                Revision Policy
              </Link>
            </li>
            <li>
              <Link
                className="text-md hover:text-[#03024f] hover:underline"
                href="/plagiarism-policy"
              >
                Plagiarism Policy
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-start  md:items-end flex-col gap-1 w-full ">
          <ul className="grid gap-2">
            <li className="text-[#03024f] font-semibold ">We Accept</li>
            <li>
              <Image src={img} alt="payment" className="w-full" />
            </li>
            <li className="text-[#03024f] font-semibold ">
              Facio Contently Writers Private Limited
            </li>
            <li className="text-md">
              <p>Address: Kiran Path Mansarovar,</p>
              <p>Rajasthan, Jaipur, 302020</p>
            </li>
          </ul>
        </div>
        </div>

        <Separator className="my-4" />

        <div className="my-10">
          <h1 className="font-semibold pb-4">Disclaimer</h1>
          <p className="font-normal opacity-80">
            Our materials are intended to assist you in conducting research
            while completing
          </p>
          <p className="font-normal opacity-80">
            your own assignments. It is important to utilize them only with
            appropriate
          </p>
          <p className="font-normal opacity-80">
            references and citations to maintain academic integrity.
          </p>
        </div>
        <div className="flex justify-between lg:flex-row flex-col gap-5">
          <p className="text-[#03024f] ">
            Copyright © 2024 Facio Contently Writers Private Limited. All Rights
            Reserved.
          </p>
          <div className="flex gap-10">
            <Link href="mailto:info@contentlywriters.com">
              <MdOutlineMail />
            </Link>

            <Link href="https://www.facebook.com/profile.php?id=61558643577094">
              <FaFacebookF />
            </Link>

            <Link href="https://www.instagram.com/contentlywriters/">
              <FaInstagram />
            </Link>

            <Link href="https://twitter.com/ContentlyW">
              <FaXTwitter />
            </Link>
            <Link href="https://www.linkedin.com/company/facio-contently-writers/">
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
