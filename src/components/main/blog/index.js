"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";

import img1 from "@/assets/image/blogImg1.jpg";
import img2 from "@/assets/image/blogImg2.jpg";
import img3 from "@/assets/image/blogImg3.jpg";

export default function Blog() {
  function scrollToSection(id) {
    setTimeout(() => {
      const section = document.getElementById(id); // Replace 'sectionId' with the ID of the
      section.scrollIntoView({ behavior: "smooth" });
    }, 10);
  }

  return (
    <div className="px-4 sm:!px-10 lg:!px-[50px] ">
      <div className="max-w-[1280px] mx-auto">
        <h1 className="text-center  text-5xl pt-10 font-semibold">
          Table of Content
        </h1>

        <div className="sm:px-20 grid sm:gap-20 gap-10 py-10">
          <div className="flex gap-5 justify-center flex-wrap ">
            <Button onClick={() => scrollToSection("1blog")}>
              A Beginner Guide
            </Button>
            <Button onClick={() => scrollToSection("2blog")}>
              Academic Success
            </Button>
            <Button onClick={() => scrollToSection("3blog")}>
              Power of ROI
            </Button>
          </div>
          {data.map((item, index) => (
            <div
              key={index}
              id={item.tag}
              className="bg-[#fff] border-1 p-4 sm:p-8 shadow-xl rounded-xl"
            >
              <h1 className="text-3xl font-semibold pt-5 text-center">
                {item.heading}
                {}
              </h1>
              <Image className="my-4 rounded-lg max-h-[500px]" src={item.image} alt="blog image" />
              <p className="pt-5">{item.about}</p>
              <div>
                {item.post.map((post, index) => (
                  <div key={index} className="grid gap-4">
                    <h1 className="text-2xl font-semibold pt-5">
                      {post.title}
                    </h1>
                    <p className="">{post.about}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    tag: "1blog",
    image: img1,
    heading: "A Beginner's Guide to Writing Essays in Proper Format",
    about:
      "Are you feeling overwhelmed by the task of writing an essay? Don't worry, you're not alone. Many students find essay writing challenging, but with the right approach, it can become much more manageable. In this guide, we'll walk through the steps to writing an essay in proper format at an intermediate English level.",
    post: [
      {
        title: "Understanding the Assignment :",
        about:
          "Before you begin writing, make sure you fully understand the essay prompt. Identify the key requirements, such as the topic, length, format, and any specific instructions provided by your teacher or professor.",
      },
      {
        title: "Brainstorming and Research :",
        about:
          "Take some time to brainstorm ideas for your essay topic. Once you have a general idea, conduct research to gather relevant information and supporting evidence. Remember to use credible sources such as books, scholarly articles, and reputable websites. When exploring content writing services, ensure you focus on reputable providers and examine their expertise, customer reviews, and sample work to gauge their credibility and reliability.",
      },
      {
        title: "Creating an Outline :",
        about:
          "Organize your thoughts and research findings by creating an outline for your essay. Divide your essay into sections such as introduction, body paragraphs, and conclusion. Outline the main points you want to cover in each section.",
      },
      {
        title: "Writing the Introduction :",
        about:
          "Start your essay with an engaging introduction that grabs the reader's attention and provides context for your topic. Include a thesis statement that clearly states the main argument or purpose of your essay.",
      },
      {
        title: "Developing Body Paragraphs :",
        about:
          "Each body paragraph should focus on a single main idea or argument that supports your thesis statement. Begin each paragraph with a topic sentence that introduces the main point, followed by supporting evidence and examples. Make sure to use transitions to smoothly connect your ideas.",
      },
      {
        title: "Crafting the Conclusion :",
        about:
          "Summarize the main points of your essay in the conclusion and restate your thesis statement in different words. Avoid introducing new information in the conclusion, but instead, offer insights or suggestions for further exploration of the topic.",
      },
      {
        title: "Editing and Proofreading :",
        about:
          "Once you've completed your first draft, take time to revise and edit your essay. Check for grammar and spelling errors, clarity of expression, and consistency of style. Consider asking a peer or teacher to review your essay for feedback.",
      },
      {
        title: "Formatting :",
        about:
          "Follow the formatting guidelines provided by your instructor. This typically includes using a specific font and size, double-spacing the text, and including a title page and bibliography if required. Make sure to cite your sources properly using the appropriate citation style (e.g., MLA, APA).",
      },
      {
        title: "Finalizing Your Essay :",
        about:
          "Before submitting your essay, take one final look to ensure everything is in order. Make any necessary revisions and proofread one last time to catch any lingering errors. Writing an essay may seem daunting at first, but by following these steps and practicing regularly, you'll become more comfortable with the process over time. Remember to give yourself plenty of time to plan, write, and revise your essays, and don't hesitate to seek help from your teacher or classmates if you need it. With patience and persistence, you'll soon master the art of essay writing.",
      },
    ],
  },
  {
    tag: "2blog",
    image: img2,
    heading:
      "Decoding Academic Success: The Crucial Role of Choosing the Perfect Assignment Assistance Partner",
    about:
      "Are you feeling overwhelmed by the task of writing an essay? Don't worry, you're not alone. Many students find essay writing challenging, but with the right approach, it can become much more manageable. In this guide, we'll walk through the steps to writing an essay in proper format at an intermediate English level.",
    post: [
      {
        title: "Understanding the Assignment :",
        about:
          "After understanding the view point of the topic, it might be easy for you to look for the service you need. Understanding the out look of the to pic involves gaining insight into its various dimensions, perspectives, and implications. Its about delving beyond surface-level understanding to grasp the underlying concepts and complexities. By comprehensively analyzing different viewpoints, historical contexts, and potential future developments, one can develop a well-rounded understanding of the topic. This deeper comprehension enables individuals to engage with the subject matter more effectively, whether through writing, discussion, or decision-making. Ultimately, understanding the outlook of the topic empowers individuals to navigate its intricacies with clarity and insight.",
      },
      {
        title: "Quality Matters :",
        about:
          "When seeking assistance with assignments, it's essential to prioritize quality. Opting for a reliable service guarantees well-researched and error-free work. Such high-quality output not only impresses your instructors but also deepens your understanding of the subject matter. With meticulously crafted assignments, you're poised to enhance both your grades and academic comprehension. Choosing a trustworthy service ensures that each task is meticulously executed, fostering academic excellence and confidence in your work. In the pursuit of academic success, investing in top-notch assistance can be a game-changer.",
      },
      {
        title: "Punctuality is Key :",
        about:
          "In the academic realm, meeting deadlines is paramount for success. Punctuality is key, as it demonstrates responsibility and dedication to your studies. A reliable assignment help service understands this importance and prioritizes timely delivery of assignments. By adhering to deadlines, they help alleviate the stress associated with looming due dates, allowing you to focus on learning. Moreover, punctuality ensures that you avoid penalties that could negatively impact your academic performance. Ultimately, by choosing a service that respects deadlines, you uphold the standard of excellence expected in academia while promoting a disciplined approach to time management.",
      },
      {
        title: "Trendiness is Essential :",
        about:
          "Plagiarism poses a significant threat to your academic reputation, undermining the integrity of your work. Opting for a reputable service is crucial as it assures the delivery of original and authentic content. By ensuring plagiarism-free work, you safeguard your academic integrity and uphold ethical standards. This commitment to authenticity not only enhances the credibility of your assignments but also fosters trust in your academic abilities. In today's academic landscape, where originality is highly valued, choosing a service that prioritizes plagiarism-free content is essential to staying relevant and respected. Ultimately, by embracing trendiness, you align yourself with the evolving expectations of academic integrity, setting a standard for excellence in your scholarly pursuits.",
      },
      {
        title: "Customization is Vital :",
        about:
          "Understanding that each assignment is unique, a reputable assignment help service customizes its approach to meet your specific requirements. By tailoring solutions to your needs, they ensure that your work not only meets academic standards but also exceeds your expectations. This personalized approach fosters a sense of ownership and involvement in the assignment process, empowering you to achieve your academic goals. Additionally, by addressing individual needs, such services enhance the relevance and applicability of the delivered content to your coursework. Ultimately, the ability to adapt to diverse requirements underscores the service's commitment to your academic success and satisfaction. Choosing such a service ensures that your assignments are not only completed proficiently but also reflect your unique academic journey and aspirations",
      },
      {
        title: "Communication is Crucial :",
        about:
          "Throughout the process, effective communication is essential. The best services offer 24/7 support, so you can reach out whenever you have questions or concerns.",
      },
      {
        title: "Value for Money:",
        about:
          "While cost matters, it shouldn't compromise quality. Investing in the right service ensures you get value for your money, with superior work, timely delivery, and excellent support. In conclusion, choosing the right assignment help service can make a world of difference in your academic journey. Prioritize outlook, quality, punctuality, trendiness, customization, communication, and value for money to make an informed decision that sets you up for success.",
      },
      {
        title: "",
        about: "",
      },
    ],
  },
  {
    tag: "3blog",
    image: img3,
    heading:
      "Unleashing the Power of ROI: A guide to Maximising Returns in Business",
    about: "",
    post: [
      {
        title: "Introduction to ROI :",
        about:
          "Return on Investment (ROI) is a critical metric in business that measures the profitability of an investment relative to its cost. It provides valuable insights into the efficiency and effectiveness of various business initiatives.     ",
      },
      {
        title: "Understanding ROI Calculation :",
        about:
          "ROI calculation involves dividing the net profit generated by an investment by the initial investment cost and expressing it as a percentage. This straightforward formula enables businesses to evaluate the viability of investments and make informed decisions",
      },
      {
        title: "Importance of ROI in Business :",
        about:
          "ROI serves as a guiding principle for strategic decision-making, helping businesses prioritize investments that yield the highest returns It enables businesses to assess the performance of marketing campaigns, product launches, and other initiatives, optimizing resource allocation for maximum impact.",
      },
      {
        title: "Maximizing ROI in Marketing :",
        about:
          "Tracking ROI in marketing efforts allows businesses to identify the most effective channels and campaigns for driving revenue. By analyzing ROI data, businesses can refine their marketing strategies, allocate budgets more efficiently, and improve overall campaign performance.",
      },
      {
        title: "Beyond Financial Metrics :",
        about:
          "While ROI is often associated with financial metrics, its application extends beyond monetary returns. Businesses can measure the ROI of initiatives aimed at enhancing customer satisfaction, employee productivity, and brand reputation, aligning investments with broader organizational goals.",
      },
      {
        title: "Utilizing Technology for ROI Optimization :",
        about:
          "Advanced technology and analytics tools enable businesses to collect, analyze, and interpret data to maximize ROI. Leveraging predictive analytics, machine learning, and customer segmentation allows businesses to make data-driven decisions and unlock new opportunities for growth.",
      },
      {
        title: "Conclusion :",
        about:
          "ROI is a powerful tool that empowers businesses to make informed decisions, drive growth, and achieve long-term success. By understanding the principles of ROI calculation, prioritizing ROI in strategic planning, and leveraging technology for optimization, businesses can unlock their full potential and thrive in today's competitive landscape.",
      },
    ],
  },
];
