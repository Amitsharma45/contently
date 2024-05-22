import React from "react";

export default function PlagiarismPolicyUI() {
  return (
    <div className="!px-6 sm:!px-10 lg:!px-[80px] py-5">
      <div className="max-w-[1280px] mx-auto sm:!px-10 lg:!px-[80px] grid gap-8 ">
        <div className="text-center font-semibold text-5xl my-10">
          Plagiarism Policy
        </div>
        <h1 className="font-semibold text-xl">{data.heading}</h1>
        <div className="grid gap-6">
          {data.item.map((item, index) => (
            <div key={index} className="flex flex-col gap-2">
              <h2 className="font-semibold text-lg">
                {index + 1} {item.title}
              </h2>
              <p className="opacity-70">{item.description}</p>
            </div>
          ))}
          <div className="font-bold opacity-80">
            Contentlywriters.com Plagiarism Policy, Last Updated: April 2024.
          </div>
        </div>
      </div>
    </div>
  );
}

const data = {
  heading:
    "At contentlywriters.com, we are committed to supplying our users with original and high-quality academic assignment. Plagiarism is a serious infraction, and we aggressively enforce standards to maintain the originality and integrity of our work. Our plagiarism policy, which details our strategy and methods, is as follows:",
  item: [
    {
      title: "Original Content",
      description:
        "We only sell academic assignments that our specialists create from start. These assignments are intended to serve as prompts for creating your own essays or as sources of information when properly mentioned.",
    },
    {
      title: "Anti-Plagiarism Measures",
      description:
        "To ensure the quality and authenticity of the assignment, we use advanced anti-plagiarism software. This software is continually updated to detect any similarities between web pages or existing papers available online. Our algorithms are designed to detect numerous types of plagiarism, including:",
    },
    {
      title: "Direct Copy-Paste",
      description:
        "Any instances of verbatim copying without proper attribution are identified and addressed. Paraphrasing or Synonym Substitution: We guarantee that paraphrased content does not just replace words with synonyms without adequate attribution. Rearranged Word Order: Our software detects instances where the word order in writings matches those seen on the internet, indicating possible copying. Active vs. Passive Voice: Instances of active voice structures being replaced with passive voice, and vice versa, are also detected and addressed. User Responsibility: While we take considerable steps to assure the uniqueness of our content, it is critical that users utilize our resources responsibly. Users are invited to utilize our samples as references and sources of inspiration while remaining academically responsible. Proper citation and referencing are essential when incorporating our materials into your own work.",
    },
    {
      title: "Plagiarism Consequences",
      description:
        "Any plagiarism identified in our assignment is swiftly addressed. Depending on the gravity of the offense, the repercussions may include denial of access to our services as well as legal action if necessary.",
    },
    {
      title: "Reporting Plagiarism",
      description:
        "We encourage users to report any suspected plagiarism in our assignment. Our team rigorously reviews all allegations and takes appropriate action to ensure the integrity of our information.",
    },
  ],
};
