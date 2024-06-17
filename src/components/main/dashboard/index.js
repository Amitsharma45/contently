"use client";
import React from "react";
import img from "@/assets/image/undraw_loading_re_5axr.png";
import Link from "next/link";
import Image from "next/image";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
export default function DashBoard() {
  return (
    <>
      <div className="px-5 py-5 h-screen">
        <Tabs defaultValue="recent" className="">
          <TabsList className="bg-transparent ">
            <TabsTrigger value="recent">Recent</TabsTrigger>
            <TabsTrigger value="finished">Finished</TabsTrigger>
            <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
          </TabsList>
          <TabsContent value="recent">
            <div className="flex items-center  flex-col justify-center gap-2 py-4">
              <Image src={img} alt="loading" width={200} height={200} />
              <p>There are no orders yet</p>
              <Link href={"/"} className="grid justify-center items-center">
                <Button className="bg-[#0040ff] hover:bg-red-600">
                  New Order
                </Button>
              </Link>
            </div>
          </TabsContent>
          <TabsContent value="finished">
            <div className="grid justify-center items-center gap-2 py-4">
              <Image src={img} alt="loading" width={200} height={200} />
              <p>There are no finished orders</p>
              <Link href={"/"} className="grid justify-center items-center">
                <Button className="bg-[#0040ff] hover:bg-red-600">
                  New Order
                </Button>
              </Link>
            </div>
          </TabsContent>
          <TabsContent value="cancelled">
            <div className="grid justify-center items-center gap-2 py-4">
              <Image src={img} alt="loading" width={200} height={200} />
              <p>There are no cancelled orders</p>
              <Link href={"/"} className="grid justify-center items-center">
                <Button className="bg-[#0040ff] hover:bg-red-600">
                  New Order
                </Button>
              </Link>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
