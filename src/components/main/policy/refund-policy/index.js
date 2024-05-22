import React from "react";

export default function RefundPolicyUI() {
  return (
    <div className="!px-6 sm:!px-10 lg:!px-[80px] py-5">
      <div className="max-w-[1280px] mx-auto sm:!px-10 lg:!px-[80px] grid gap-8 ">
        <div className="text-center font-semibold text-5xl my-5 sm:my-10">
          Refund Policy
        </div>
        <h1 className="font-semibold text-xl">{data.heading}</h1>
        <div className="grid gap-6">
          {data.item.map((item, index) => (
            <div key={index} className="flex flex-col gap-2">
              <h2 className="font-semibold text-lg">
                {index + 1}
                {"."} {item.title}
              </h2>
              <p className="opacity-70 ">{item.description}</p>
              {item.other && (
                <div className="grid gap-4 pl-4">
                  {item.other.map((other, index) => (
                    <div key={index} className="flex flex-col gap-2">
                      <h3 className="font-semibold text-lg">
                        {index + 1}
                        {"."} {other.title}
                      </h3>
                      <ul className="list-disc list-inside pl-4 grid gap-2 opacity-70 ">
                        {other.value.map((value, index) => (
                          <li key={index}>{value}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="font-bold opacity-80 ">
            Contentlywriters.com Refund Policy, Last Updated: April 2024.
          </div>
        </div>
      </div>
    </div>
  );
}

const data = {
  heading:
    "At contentlywriters.com, we are dedicated to provide our customers with a flawless and satisfying experience. We recognize that there may be times when a return is required, so we have outlined our refund policy below to cover a variety of situations. Please read this policy carefully to understand your rights and responsibilities for refunds.",
  item: [
    {
      title: "Cancellation of Orders",
      description:
        "If you want to cancel an order, please contact our support team right once. You can reach us through WhatsApp or email. Please send us a note to confirm this cancelation. We recommend you to start the canceling process as soon as possible.",
      other: [
        {
          title: "Refund Eligibility:",
          value: [
            "You are eligible for a complete refund if you cancel your order before we assign a writer to start on it. After a writer is assigned, there might be restrictions on cancellations, and depending on the level of completion, refunds might be partial or impossible. The following time periods will be used to calculate the refund:",
            "For Orders with a 14-Day Assignment Period: You must cancel within 3 days of placing the order to be eligible for a refund.",
            "For Orders with a 7-Day Assignment Period: You must cancel within 2 days of placing the order to be eligible for a refund.",
            "For Orders with a 3-Day Assignment Period: You must cancel within 12 hours of placing the order to be eligible for a refund.",
            "Not Applicable for 1-Day Assignment Period: Orders with a 1-day assignment period are not eligible for cancellations and refunds due to the short time frame.",
          ],
        },
      ],
    },
    {
      title: "Double Payment",
      description:
        "We acknowledge the inconvenience that may be created if a customer unintentionally pays for an order twice. You can be guaranteed that a prompt investigation will be conducted, and that the duplicate money will be fully refunded. To expedite the resolution process, kindly provide our support team with evidence of the duplicate payment, such as transaction IDs or payment receipts.",
    },
    {
      title: "Late Delivery",
      description:
        "Our goal is to complete every order by the deadline. On the other hand, we deeply regret for any inconvenience caused if your assignment is delivered after the scheduled date. In such circumstances, based on the length of the delay and how it affects your needs, you might be qualified for a refund. To address the matter and start the refund procedure, if applicable, please contact our support team.",
    },
    {
      title: "Accidental Duplicate Orders",
      description:
        "We acknowledge your error if you inadvertently place two orders for the same service. You may be sure that we will quickly locate and confirm the duplicate orders. In these circumstances, we'll handle a complete refund for the extra order. To speed up the refund procedure, please let our support team know as soon as you realize the error.",
    },
    {
      title: "Failure to Approve Completed Paper",
      description:
        "It is imperative that you evaluate and accept your completed document within the allotted period once you receive it. We'll presume that the order has been fulfilled to your satisfaction if you don't approve the document within two days of receiving it. As such, in the event that the completed paper is not approved within the allotted time, no reimbursements will be given.",
    },
    {
      title: "Work Not As Described",
      description:
        "Kindly notify our support team with explicit details about the mismatch if the provided work does not match the order's specifications or description. After carefully examining the matter, we will, if needed, offer a suitable remedy, which, depending on the gravity of the problem, might involve a partial or whole refund.",
      other: [
        {
          title: "Refund Processing",
          value: [
            "We will start the refund procedure as soon as your request is approved. The length of time it takes to get the money back will depend on your financial institution and mode of payment. You may be confident that we'll do everything in our power to complete your refund as soon as possible. We'll try our best to return your money in four or five working days. Your refund request will be handled in two weeks if it has to do with quality-related problems.",
          ],
        },
        {
          title: "Contact Us",
          value: [
            "Please do not hesitate to contact our support team if you have any queries or worries about our refund policy or if you need help submitting a refund request. We are here to support you and make sure you have a great and fulfilling experience using contentlywriters.com.",
          ],
        },
        {
          title: "Disclaimer",
          value: [
            "This refund policy may be updated or changed at any moment without prior notification by Contentlywriters.com. Any modifications will take effect as soon as they are posted on our website. It is your duty to periodically review this policy in order to be updated on any adjustments. You accept the terms and conditions stated in this refund policy by using our services. We appreciate you selecting contentlywriters.com. We are grateful for your belief in our abilities and trust.",
          ],
        },
      ],
    },
  ],
};
