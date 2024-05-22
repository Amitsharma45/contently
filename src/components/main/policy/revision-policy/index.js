import React from "react";

export default function RevisionPolicyUI() {
  return (
    <div className="!px-6 sm:!px-10 lg:!px-[80px] py-5">
      <div className="max-w-[1280px] mx-auto sm:!px-10 lg:!px-[80px] grid gap-8 ">
        <div className="text-center font-semibold text-5xl my-10">
          Revision Policy
        </div>
        <h1 className="font-semibold text-xl">{data.heading}</h1>
        <div className="grid gap-6">
          {data.item.map((item, index) => (
            <div key={index} className="flex flex-col gap-2">
              <h2 className="font-semibold text-lg">
                {index + 1} {item.title}
              </h2>
              <p>{item.description}</p>
            </div>
          ))}
          <div className="font-bold ">
            Version 1.0. Last modified: April, 2024
          </div>
        </div>
      </div>
    </div>
  );
}

const data = {
  heading:
    "At contentlywriters.com, we are dedicated to providing our clients with high-quality academic support. We recognize how important it is to satisfy your expectations and aim to ensure your complete satisfaction with our services. To make this easier, we have implemented a detailed revision procedure to resolve any concerns you may have about the quality of your paper. Please read the instructions carefully to understand the terms and circumstances of the revision process.",
  item: [
    {
      title: "Revision Instructions",
      description:
        "Your change request must adhere to the order's original requirements. We will modify your paper free of charge as long as the revision instructions are consistent with your original requirements. Any deviations from the original instructions may result in an extra cost.",
    },
    {
      title: "Submission Procedure",
      description:
        "To request a revision, please contact our support team. This ensures efficient communication and allows us to respond quickly to your revision requests.",
    },
    {
      title: "Deadline for Revision Requests",
      description:
        "You can request a revision at any time before approving your order. However, once your order is authorized, you have 7 days to request a free revision. Failure to request a revision within this time range may result in additional fees. For orders with Progressive Delivery, such as full Thesis or Dissertation orders, the revision request deadline is extended to 14 days following first approval.",
    },
    {
      title: "Additional Fees for Late or Extensive Revisions",
      description:
        "If your revision request includes major changes to the original order or is filed after the 7-day window following initial approval, you may be charged an additional cost. Similarly, for orders using the Progressive Delivery option, late modification requests that exceed the specified timeframe may result in additional charges. Please contact our support team to get an estimate for the charge related with your specific revision request.",
    },
    {
      title: "Writer Assignment for Revisions",
      description:
        "When requesting a rewrite with a different writer, please keep in mind that more time will be required to find a suitable alternative. We recommend extending the modification deadline by 12 hours to effectively accommodate this process. Your help in modifying the revision deadline is much appreciated.",
    },
  ],
};
