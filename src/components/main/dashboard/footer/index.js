import React from "react";
import Link from "next/link";
export default function DashBoardFooter() {
  return (
    <div className="!px-6 sm:!px-10 lg:!px-[80px] py-5 bg-black">
      <div className="max-w-[1280px] mx-auto ">
        <div>
          <ul className="flex flex-nowrap gap-4 text-white justify-center">
            <li>
              <Link href={"#"} className="hover:underline">
                Cookie Policy
              </Link>
            </li>
            <li>
              <Link href={"#"} className="hover:underline">
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link href={"#"} className="hover:underline">
                Money Back Guarantee
              </Link>
            </li>
            <li>
              <Link href={"#"} className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href={"#"} className="hover:underline">
                Social Responsibility Policy
              </Link>
            </li>
          </ul>
          <div className="text-white text-center" >
            © Facio Contently Writers Private Limited. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
