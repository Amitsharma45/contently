import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { BiMenu } from "react-icons/bi";
import Link from "next/link";
import { useUserContext } from '@/context/auth';

export default function SmallNavbar({ items, item2 }) {

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
      <Sheet>
        <SheetTrigger asChild className="grid lg:hidden ">
          <Button variant="icon">
            <BiMenu className="text-2xl" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="text-start mb-4">
              <span className="font-semibold text-[#212630] sm:text-xl">
                Contently Writers
              </span>
            </SheetTitle>
          </SheetHeader>

          {items.map((item) => (
            <SheetClose asChild key={item.id}>
              <Link href={item.path} className="w-full block">
                <Button
                  size="sm"
                  variant="link"
                  className="text-md font-normal hover:text-red-500 transition-colors ease-in-out duration-300 text-left"
                >
                  {item.name}
                </Button>
              </Link>
            </SheetClose>
          ))}

          {isAuthenticated ? (
            <>
              <SheetClose asChild>
                <Button
                  size="sm"
                  variant="link"
                  className="text-md font-normal hover:text-red-500 transition-colors ease-in-out duration-300 text-left"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
                <Link href="/dashboard">
                  <Button className="mb-4">Dashboard</Button>
                </Link>
              </SheetClose>
            </>
          ) : (
            <>
              <SheetClose asChild>
                <Link href="/sign-up">
                  <Button className="mb-4">Sign In</Button>
                </Link>
              </SheetClose>
            </>
          )}
        </SheetContent>
      </Sheet>
    </>
  );
}
