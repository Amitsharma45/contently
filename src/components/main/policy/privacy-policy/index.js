import React from "react";

export default function PrivacyPolicyUI() {
  return (
    <div className="!px-6 sm:!px-10 lg:!px-[80px] py-5">
      <div className="max-w-[1280px] mx-auto sm:!px-10 lg:!px-[80px] grid gap-8 ">
        <div>
          <div className="text-center font-semibold text-5xl my-5 sm:my-10">
            Privacy Policy
          </div>
          <h1 className="font-semibold text-xl">{data.heading}</h1>
          {data.other && (
            <div className="grid gap-4">
              {data.other.map((other, index) => (
                <ul
                  key={index}
                  className="list-disc list-inside font-semibold  text-xl"
                >
                  {other.value.map((value, index) => (
                    <li key={index}>{value}</li>
                  ))}
                </ul>
              ))}
            </div>
          )}
        </div>
        <div className="grid gap-6">
          {data.item.map((item, index) => (
            <div key={index} className="flex flex-col gap-2">
              {item.heading && (
                <h2 className="font-semibold text-xl">{item.heading}</h2>
              )}
              <h2 className="font-semibold text-lg">
                {index + 1}
                {"."} {item.title}
              </h2>
              {item.value && (
                <ul key={index} className="grid gap-1  opacity-70 ">
                  {item.value.map((value, index) => (
                    <li key={index}>{value}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <div className="font-bold opacity-80 ">
            Contentlywriters.com Privacy Policy, Last Updated: April 2024.
          </div>
        </div>
      </div>
    </div>
  );
}

const data = {
  heading:
    "Your privacy is crucial to us. We follow a few essential principles:",
  other: [
    {
      value: [
        "We carefully manage the personal data you supply and the information we acquire through our services.",
        "Personal information is stored only when necessary or legally needed.",
        "Our website allows you to easily select which information is shared publicly or privately, indexed by search engines, and removed permanently.",
        "We prioritize transparency in how we collect, utilize, and disclose your personal information.",
      ],
    },
  ],
  item: [
    {
      title: "What This Privacy Policy Covers:",
      value: [
        "We are Facio Contently Writers Private Limited, registered in India, and will be the Data Controller of your personal data for the purposes of this Privacy Policy.",
        "This Privacy Policy applies to the information we gather about you while you visit our website, contentlywriters.com.",
        "In this Privacy Policy, we will refer to our website, mobile applications, and other products and services as Services",
        "We are committed to protecting and respecting your privacy. This Privacy Policy describes how we may use, process, and keep your personal information. If such personal information can be used to directly or indirectly identify you as a natural person, it is considered Personal Data and must be strictly secured by us.",
      ],
    },
    {
      heading: "Information We Collect",
      title: "Personal Information Provided by the User:",
      value: [
        "We gather information that you, as a user, supply when you register with us to use our services, get information about our products or services, attend events relevant to our products or services, or otherwise contact us. The personal information that you supply comprises the following:",
        "First and last name.",
        "User's email address.",
        "Account Password.",
        "Order details.",
        "Additional files uploaded by you to our website.",
      ],
    },
    {
      title: "Files",
      value: [
        "We may collect and retain files that you submit, download, or access through the Website. Please do not share any files with us that you are not entitled to use. Please do not post or share with us files containing your personal information or the personal information of third parties without our authorization. We may not guarantee the security of such personal information.",
      ],
    },
    {
      title: "Social Network Login Data",
      value: [
        "We allow you to register with us using your existing social network accounts, such as Google and others. We will obtain your profile information from the social media provider, regardless of the platform you use. The information we obtain from social media providers differs depending on the site. Still, it often includes your name, email address, and any other information you have decided to share on the specific social networking platform. We will use the information you provide for the purposes mentioned in our privacy policy or for the applicable services you have requested. Please keep in mind that we have no control over or accountability for the additional uses of your personal information that third-party social media providers may make. We urge that all of our users study their social media providers' privacy policies to better understand how their information is collected, used, and shared online, as well as how to establish privacy choices on various sites and applications.",
        "Please keep in mind that all information provided during registration must be true, complete, and accurate. You must notify us in advance of any changes or modifications to your personal information.",
      ],
    },
    {
      title: "Ways of Giving Information",
      value: [
        "You may offer us information about yourself with your consent, for example:",
        "Fill out a form or contact us via email.",
        "Posting an order on the website.",
        "Posting reviews and feedback on the website.",
        "Contacting us via our phone numbers.",
        "This information could be personal, financial, educational, or about your order. When you purchase services from us, you may provide us with information for legal reasons, such as entering into a contract. We collect information for one or more of the following reasons:",
        "To supply services after you order through our website.",
        "If you are an existing customer, we will offer information regarding items or services you have expressed interest in within a reasonable timeframe.",
        "We will supply you with information about our products and services, as well as relevant ones.",
        "To supply contracted services to you.",
        "Legal grounds, such as entering into a contract with us.",
        "Provide information about our products and services if you consent to receive it.",
      ],
    },
    {
      title: "With Whom Do We Share Your Personal Information?",
      value: [
        "We may disclose your personal information with third parties for a variety of reasons, including your consent or legal requirements. For instance, we may provide your personal information to:",
        "Our marketing team will send you promotional materials after you register on our website.",
        "We use subcontractors and other parties to fulfill contracts with them or with you.",
        "Shared with third parties with your approval.",
        "We collaborate with third-party service providers based on your purchases.",
        "If Facio Contently Writers Private Limited or substantially all of its assets are bought by a third party, the personal data it holds on its clients will be among the transferred assets. Additionally, we will share your personal information with other parties for the following reasons.",
        "Compliance with legal obligations may require us to disclose personal data to public authorities, such as for national security or law enforcement purposes.",
        "Government agencies may legitimately seek it.",
        "Enforce Website Terms of Use and other agreements.",
        "To safeguard the rights, property, and safety of Facio Contently Writers Private Limited, our customers, and others.",
        "Exchange information with third parties to avoid fraud and reduce credit risk.",
      ],
    },
    {
      title: "Aggregated data",
      value: [
        "We may from time to time transmit aggregated data to third parties. This indicates that your personally identifiable information has been removed from the data. Data transmitted to third parties in this manner is not personal data and is instead statistics or similar data; however, you retain the right to object.",
      ],
    },
    {
      title: "Where We Store Your Personal Data?",
      value: [
        "We mostly keep your personal information in Amazon Web Services. We ensure you that all of your data is securely protected and that no unauthorized parties will have access to it.",
      ],
    },
    {
      title: "Access to your personal data via password",
      value: [
        "Where we have provided you (or you have chosen) a password that allows you to access particular portions of our website, you are responsible for keeping it confidential. We ask that you do not share your password with anyone.",
      ],
    },
    {
      title: "Transmission and storage of your personal data",
      value: [
        "Unfortunately, data transfer over the internet is not entirely secure. We cannot guarantee the security of your data while it is being transported and kept; nevertheless, we will use best practices to ensure that your data is encrypted to the GDPR standards to secure your personal information.",
      ],
    },
    {
      title: "How Long Will We Keep Your Personal Data?",
      value: [
        "We will not keep your Personal Information for longer than necessary. We will keep your personal information.",
        "• As long as necessary by law.",
        "• Until there is no good reason to maintain it.",
        "• Until you ask us to stop using or delete it.",
        "We may retain only enough of your Personal Data to ensure that we comply with your requests not to use your personal information or your right to erasure. For example, we must maintain your request to be erased, even if it contains your personal information, until you are no longer our customer, or for tax purposes, etc.",
      ],
    },
    {
      title: "What Are Your Rights?",
      value: [
        "The following are your legal rights, and what we do to defend them:",
        "1. The right to be informed - We are releasing this Privacy Policy to keep you informed about what we do with your personal information. We attempt to be clear about how we utilize your information. We will also answer all of your queries about this Policy. Please submit them to info@contentlywriters.com.",
        "2. The right to access - You have the right to view your data. If you would want access to the personal information we have about you, please contact our Support Team at info@contentlywriters.com.",
        "3. The right to rectification - If any of the information we have on you is incorrect or incomplete, you have the right to request that we correct it. If that data was given to a third party with your permission or for legal reasons, we must also ask them to correct it. Please contact our Support Team if you require us to correct your information: info@contentlywriters.com.",
        "4. The right to erasure - This is also known as 'the right to be forgotten'. If you wish us to erase all of your personal data and we have no legal justification to continue processing and holding it, please contact our Support Team at info@contentlywriters.com.",
        "5. The right to restrict processing - You have the right to ask us to limit how we use your information. This means that we can only store the data and not process it. We save only enough data to ensure that we follow your request in the future. If you would like us to restrict the processing of your data, please contact our Support Team at info@contentlywriters.com.",
        "6. The right to data portability - We must allow you to get and reuse your personal data for your own purposes across services in a safe and secure manner, without impacting the usability of your data. If you wish to know how to port your data elsewhere, please contact our Data Protection Officer at info@contentlywriters.com. This right only applies to the personal information you have submitted to us as the Data Controller. We must keep the data with your consent or for the purpose of performing a contract.",
        "7. The right to object - You have the right to object to us processing your data for legitimate reasons, the exercise of official authority, direct marketing (including data aggregation), and purposeless statistics. If you want to object, please contact our support team at info@contentlywriters.com.",
        "8. The right to withdraw consent - If you previously consented to us processing your data but later changed your mind, you have the right to withdraw your permission at any time, and we must cease processing your data. If you wish to withdraw your consent, please contact our support team at info@contentlywriters.com.",
      ],
    },
    {
      title: "The Laws and Regulations",
      value: [
        "The Information Technology Act, 2000 (IT Act) and rules notified thereunder formed the basis around which the data protection framework revolved. This included the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 (Privacy Rules).",
      ],
    },
    {
      title: "Disclaimer",
      value: [
        "We may alter our Privacy Policy from time to time. Laws, laws, and industry standards vary, necessitating modifications, or we may modify our operation. We will update this page with the changes, and we invite you to examine them to stay updated. If we make changes that significantly affect your privacy rights, we will offer extra notification, such as via email or the Website. If you disagree with the modifications to this Privacy Policy, please deactivate your account by mailing us at info@contentlywriters.com.",
      ],
    },
    {
      title: "Contact Us:",
      value: [
        "This is our registered address, corporate identification number, and contact information:",
        "Facio Contently Writers Private Limited's address is Mansarovar, Jaipur, Rajasthan, 302020.",
        "Corporate Identification Number: U82990RJ2024PTC093289.",
        "Email address: info@contentlywriters.com.",
        "Phone: +91 7727857997.",
      ],
    },
  ],
};
