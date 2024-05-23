import React, { useState, useEffect } from "react";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useUserContext } from '@/context/auth';

 

export default function LargeNavbar({ items }) {
  // const isAuthenticated = false;
  const { isLoading, isAuthenticated ,setIsAuthenticated} = useUserContext();

  const handleLogout = () => {
    try {
      localStorage.removeItem("token");
      setIsAuthenticated(false);
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
            {/* <button onClick={handleLogout}  className="menu-block">Logout</button> */}
            <Button onClick={handleLogout} variant="outline" className="hover:bg-[#3c46d5] hover:text-[#ffffff] border-[#3c46d5] border-opacity-100">Logout</Button>

            <Link href="/dashboard">
            <Button variant="outline" className="hover:bg-[#3c46d5] hover:text-[#ffffff] border-[#3c46d5] border-opacity-100">Dashboard</Button>

            </Link>
            
          </>
        ) : (
          <>
            <Link href="/sign-up">
            <Button variant="outline" className="hover:bg-[#3c46d5] hover:text-[#ffffff] border-[#3c46d5] border-opacity-100">Sign up</Button>
            </Link>
            <Link href="/login">
            <Button variant="outline" className="hover:bg-[#3c46d5] hover:text-[#ffffff] border-[#3c46d5] border-opacity-100">Sign in</Button>
            </Link>
          </>
        )}
      </div>
    </>
  );
}
