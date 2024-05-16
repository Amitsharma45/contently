"use client";
import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
export default function DashBoard() {
  return (
    <>
      <div className="px-5 my-5">
        <Tabs defaultValue="account" className="">
          <TabsList className="bg-transparent ">
            <TabsTrigger value="recent">Recent</TabsTrigger>
            <TabsTrigger value="finished">Finished</TabsTrigger>
            <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
          </TabsList>
          <TabsContent value="recent">
            <div>recent</div>
          </TabsContent>
          <TabsContent value="finished">
            <div>finished</div>
          </TabsContent>
          <TabsContent value="cancelled">
            <div>cancelled</div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
