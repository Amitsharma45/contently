import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/image/Screenshot 2024-04-03 142353.png";

export default function NavbarDashBoard() {
  return (
    <div className="!px-6 py-5 bg-black">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between">
        <Link href={"/"}>
          <Image 
            src={logo}
            alt="logo"
            width={120}
            height={120}
          />
        </Link>
        
        <div className="flex items-center gap-10">
          <Link className="text-white" href={"/dashboard"}>
            My Orders
          </Link>
         
            <Link className="text-white" href={"/"}>
              New Order
            </Link>
            <Link className="text-white" href="/contact">
              Free Inquiry
            </Link>
          </div>
        
      </div>
    </div>
  );
}
