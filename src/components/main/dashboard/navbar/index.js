import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/image/Screenshot 2024-04-03 142353.png";

export default function NavbarDashBoard() {
  return (
    <div className="!px-6  py-5 bg-black">
      <div className="max-w-[1280px] mx-auto ">
        <Link href={"/"}>
        <Image 
            src={logo}
            alt="logo"
            width={100}
            height={100}
        />
        </Link>
        
        <div className="flex justify-between my-2">
          <div>
            <Link className="text-white" href={"#"}>
              My Orders
            </Link>
          </div>
          <div className="flex gap-5">
            <Link className="text-white" href={"#"}>
              New Order
            </Link>
            <Link className="text-white" href={"#"}>
              Free Inquiry
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
