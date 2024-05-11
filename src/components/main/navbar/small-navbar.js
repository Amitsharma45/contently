import React, {useEffect} from "react";
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { BiMenu } from "react-icons/bi";
import Link from "next/link";
export default function SmallNavbar({ items, item2 }) {



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
                pangram
              </span>
              <span className="font-semibold text-[#595B64] opacity-80 sm:text-xl">
                labs
              </span>
            </SheetTitle>
          </SheetHeader>
          <SheetClose asChild>
            <Link href="/solution" className="w-full ">
              <Button size="sm" variant="link" className="text-sm">
                Solution
              </Button>
            </Link>
          </SheetClose>
          <Accordion type="single" collapsible className="w-full">
            {/* Attraction menu data */}
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-sm p-2 ">
                Resources
              </AccordionTrigger>
              <AccordionContent className="flex flex-col">
                {item2.map(({ id, name, path }) => {
                  return (
                    <Link href={path} key={id} target="_blank">
                      <SheetClose asChild>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="w-full justify-start p-2 pl-4"
                        >
                          {name}
                        </Button>
                      </SheetClose>
                    </Link>
                  );
                })}
                <Link href="/pricing">
                  <SheetClose asChild>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="w-full justify-start p-2 pl-4"
                    >
                      Pricing
                    </Button>
                  </SheetClose>
                </Link>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-sm p-2 underline-offset-0">
                Solution
              </AccordionTrigger>
              <AccordionContent className="flex flex-col">
                {items.map(({ id, name, path }) => {
                  return (
                    <Link href={`http://localhost:3000/${path}`} key={id}>
                      <SheetClose asChild>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="w-full justify-start p-2 pl-4"
                        >
                          {name}
                        </Button>
                      </SheetClose>
                    </Link>
                  );
                })}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <SheetClose asChild>
            <Link href="/blog" className="block w-full my-1 text-lef">
              <Button size="sm" variant="link" className="text-sm">
                {" "}
                Blogs
              </Button>
            </Link>
          </SheetClose>

          {isAuthenticated ? (
            <>
              <SheetClose asChild>
                <Button
                  size=""
                  className="text-sm bg-[#FFFFFF] text-[#212630] hover:bg-transparent"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/dashboard">
                  <Button size="" className="text-sm" >
                    Dashboard
                  </Button>
                </Link>
              </SheetClose>
            </>
          ) : (
            <>
              <SheetClose asChild>
                <Link href="/login" className="block mb-3">
                  <Button variant="outline">Login</Button>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/signup">
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
