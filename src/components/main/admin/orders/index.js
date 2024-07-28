"use client";

import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import axios from "axios";
import AdminOrderDetailScreen from "./orderDetails"

async function fetchOrders() {
  try {
    const response = await axios.get("https://contentlywriters.com:8088/order/getAll", {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJlZXdAc3Nkc2RkYWFzcyIsImlhdCI6MTcyMjA3OTk3NSwiZXhwIjoxNzIyMTg3OTc1fQ.BZ1Hz3SZ373BOJa-Z3dpp1o_CC-gl7gq2Kj6gsxlB6vAZWsdmBtwjBb1JiivRGY0cAMkPG6QUlS1zr6Qg1bNdw`,
      },
    });
    console.log(response.data.data)
    return response.data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default function AdminOrderScreen() {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState({})
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleIconClick = (order) => {
    setSelectedOrder(order);
    setIsDialogOpen(true);
  };

  useEffect(() => {
    const getOrders = async () => {
      const data = await fetchOrders();
      setOrders(data);
    };

    getOrders();
    console.log({orders})
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#3C46D5]">
    <div className="flex justify-between w-full max-w-[90%] sm:w-[1000px] mb-4">
      <div className="flex space-x-4">
        <Button className="bg-green-100 border-2 rounded-lg text-[#000000] hover:bg-green-200">
          Get Fresh Order
        </Button>
        {/* <Button className="bg-green-100 border-2 rounded-lg text-[#000000] hover:bg-green-200">
          Home
        </Button> */}
      </div>
      <Link href="/">
      <Button className="bg-green-100 border-2 rounded-lg text-[#000000] hover:bg-green-200">
        Home
      </Button>
      </Link>
    </div>

    <div className="border-2 rounded-lg sm:w-[1000px] p-4 sm:p-8 bg-green-100 w-full max-w-[90%]">
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
        {orders.map((order,index) => (
          <TableRow key={index} className="hover:bg-green-200" 
          onClick={() => handleIconClick(order)}
          >
            <TableCell className="font-medium">{order.orderId}</TableCell>
            <TableCell>{order.status}</TableCell>
            <TableCell>{order.email}</TableCell>
            <TableCell className="text-right">{order.amount}</TableCell>
          </TableRow>
          ))}
        </TableBody>
      </Table>
      {selectedOrder && (
        <AdminOrderDetailScreen
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          orderDetail={selectedOrder}
        />
      )}
    </div>
  </div>
  );
}
