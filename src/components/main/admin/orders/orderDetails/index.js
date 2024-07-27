"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function AdminOrderDetailScreen({ isOpen, onClose, orderDetail }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="min-w-[800px]">
        <DialogHeader>
          <DialogTitle>Order Details</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <div className="flex flex-col space-y-4">
            <div>
              <strong>Order ID:</strong> {orderDetail.orderId}
            </div>
            <div>
              <strong>Email:</strong> {orderDetail.email}
            </div>
            <div>
              <strong>Subject:</strong> {orderDetail.subject}
            </div>
            <div>
              <strong>Topic:</strong> {orderDetail.topic}
            </div>
            <div>
              <strong>Comment:</strong> {orderDetail.comment}
            </div>
            <div>
              <strong>Deadline:</strong> {orderDetail.deadline} days
            </div>
            <div>
              <strong>Pages:</strong> {orderDetail.pages}
            </div>
            <div>
              <strong>Amount:</strong> ${orderDetail.amount}
            </div>
            <div>
              <strong>Status:</strong> {orderDetail.status}
            </div>
            <div>
              <strong>Rating:</strong> {orderDetail.rating}
            </div>
            <div>
              <strong>Order Placed Timestamp:</strong> {orderDetail.orderPlacedTimestamp}
            </div>
            <div>
              <strong>Order File Link:</strong> <a href={orderDetail.orderFileLink} target="_blank" rel="noopener noreferrer">Download</a>
            </div>
            {orderDetail.paymentOrder && (
              <>
                <div>
                  <strong>Payment Status:</strong> {orderDetail.paymentOrder.status}
                </div>
                <div>
                  <strong>Payment Amount:</strong> {orderDetail.paymentOrder.amount} {orderDetail.paymentOrder.currency}
                </div>
                <div>
                  <strong>Amount Paid:</strong> {orderDetail.paymentOrder.amountPaid}
                </div>
                <div>
                  <strong>Amount Due:</strong> {orderDetail.paymentOrder.amountDue}
                </div>
                <div>
                  <strong>Order Receipt:</strong> {orderDetail.paymentOrder.orderReceipt}
                </div>
              </>
            )}
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
