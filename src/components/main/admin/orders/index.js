import React from "react";
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

function AdminOrderScreen() {
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
            <TableRow className="hover:bg-green-200">
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
            <TableRow className="hover:bg-green-200">
              <TableCell className="font-medium">INV002</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$300.00</TableCell>
            </TableRow>
            <TableRow className="hover:bg-green-200">
              <TableCell className="font-medium">INV003</TableCell>
              <TableCell>Unpaid</TableCell>
              <TableCell>PayPal</TableCell>
              <TableCell className="text-right">$150.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default AdminOrderScreen;
