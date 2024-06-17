import React from "react";
import Link from "next/link";
export default function DashBoardFooter() {
  return (
    <div className="!px-6 sm:!px-10 lg:!px-[80px] py-5 bg-black  min-h-[100px]">
      <div className="max-w-[1280px] mx-auto ">
        <div className='grid gap-6'>
          <ul className="flex flex-wrap gap-4 whitespace-nowrap  text-white justify-between ">
            <li>
              <Link href={"/revision-policy"} className="hover:underline">
              Revision Policy
              </Link>
            </li>
            <li>
              <Link href={"/terms-and-conditions"} className="hover:underline">
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link href={"/plagiarism-policy"} className="hover:underline">
                Plagiarism Policy
              </Link>
            </li>
            <li>
              <Link href={"/privacy-policy"} className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href={"/refund-policy"} className="hover:underline">
              Refund Policy
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
