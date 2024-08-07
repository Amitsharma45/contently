import React from "react";
import img from "@/assets/image/undraw_loading_re_5axr.png";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";
export default function PendingOrder({ orders }) {
  return (
    <div className="">
      {orders.length == 0 && (
        <div className="flex items-center  flex-col justify-center gap-2 py-4">
          <Image src={img} alt="loading" width={200} height={200} />
          <p>There are no orders yet</p>
          <Link href={"/"} className="grid justify-center items-center">
            <Button className="bg-[#0040ff] hover:bg-red-600">New Order</Button>
          </Link>
        </div>
      )}
      {orders.length !== 0 && (
        <Table className="m-2">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead className="text-center">Topic</TableHead>
              <TableHead className="text-center">Comment</TableHead>
              <TableHead className="text-center">Deadline</TableHead>
              <TableHead className="text-center">Pages</TableHead>
              <TableHead className="text-center">Amount</TableHead>
              <TableHead className="text-center">Order Date</TableHead>
              <TableHead className="text-center">Order File</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order, index) => (
              <TableRow
                key={index}
                className="hover:bg-green-200"
                // onClick={() => handleIconClick(order)}
              >
                <TableCell className="font-medium">{order.orderId}</TableCell>
                <TableCell>{order.subject}</TableCell>
                <TableCell className="text-center">{order.topic}</TableCell>
                <TableCell className="text-center">{order.comment}</TableCell>
                <TableCell className="text-center">{order.deadline}</TableCell>
                <TableCell className="text-center">{order.pages}</TableCell>
                <TableCell className="text-center">{order.amount}</TableCell>
                <TableCell className="text-center">
                  {format(order.orderPlacedTimestamp, "dd-MM-yyyy")}
                </TableCell>
                <TableCell className="text-center">
                  <Link
                    href={order.orderFileLink || "#"}
                    target="_black"
                    className="hover:underline"
                  >
                    File
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
