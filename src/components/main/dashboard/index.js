"use client";
import React, { useEffect, useState } from "react";
import img from "@/assets/image/undraw_loading_re_5axr.png";
import Link from "next/link";
import Image from "next/image";
import PendingOrder from "./pending-order";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import axios from "axios";
export default function DashBoard() {
  const [orders, setOrders] = useState([]);
  const [currentTab, setCurrentTab] = useState("Pending");
  const getOrders = async () => {
    try {
      const response = await axios.get(
        `https://contentlywriters.com:8088/order/getAll?status=${"Pending"}`,
        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        }
      );
      console.log({ response });
      if (response.data.data) {
        setOrders(response.data.data);
      } else {
        setOrders([]);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getOrders();
  }, [currentTab]);
  return (
    <>
      <div className="px-5 py-5 min-h-screen">
        <Tabs defaultValue="recent">
          <TabsList className="bg-transparent ">
            <TabsTrigger value="recent">Recent</TabsTrigger>
            <TabsTrigger value="finished">Finished</TabsTrigger>
            <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
          </TabsList>
          <TabsContent value="recent">
            <PendingOrder orders={orders} />
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
