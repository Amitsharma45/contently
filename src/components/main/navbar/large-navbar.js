import React, { useState, useEffect } from "react";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LargeNavbar({ items }) {
  const isAuthenticated = false;
  const handleLogout = () => {
    // Dispatch logout action
    try {
      dispatch(logout({ csrfToken }));
      console.log("Logout");
      router.replace("/logout-success");
    } catch (error) {
      alert("Try again later");
    }
  };

  return (
    <>
      <div className="hidden lg:flex justify-center items-center">
        {items.map((item) => (
          <Link  key={item.id} href={item.path} className="px-2">
            <Button size="sm" variant="link" className="text-lg font-normal hover:text-red-500 transition-colors ease-in-out duration-300">
              {item.name}
            </Button>
            
          </Link>
        ))}
      </div>
      <div className=" gap-4 hidden lg:flex ">
        {isAuthenticated ? (
          <>
            <Button
              size=""
              className="text-sm bg-[#FFFFFF] text-[#212630] hover:bg-transparent"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </>
        ) : (
          <>
            <Link href="/sign-up">
              <button  className="menu-block">sign-in</button>
            </Link>
            
          </>
        )}
      </div>
    </>
  );
}
