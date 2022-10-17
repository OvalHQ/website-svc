import { publicRoute } from "../middleware/authentication";
import Head from "next/head";
import Link from "next/link";

import { useState } from "react";
import EmailSuccessModal from "../components/success/email";
import Footer from "../components/footer";

const questionsList = [
  {
    text: "What personal information we collect and Process?",
    link: "#what-info-we-collect",
  },
  {
    text: "How do we use your personal information?",
    link: "#how-we-use-info",
  },
  {
    text: "What is the legal basis for our use of your personal information?",
    link: "#what-is-the-legal-basis",
  },
  { text: "Do we use cookies and similar tools?", link: "#do-we-use-cookies" },
  {
    text: "In what circumstances do we disclosure your personal Information?",
    link: "#in-what-circumstances",
  },
  {
    text: "Can my personal information be transferred to outside my country?",
    link: "#information-transfer",
  },
  { text: "Marketing and advertising", link: "#marketing-and-transfer" },
  {
    text: "How is your consent obtained for certain disclosures?",
    link: "#how-is-consent-obtained",
  },
  { text: "Security of your information?", link: "#security-of-info" },
  {
    text: "What are your rights to your personal information?",
    link: "#what-are-your-rights",
  },
  { text: "Miscellaneous", link: "#misc" },
];

const infoCollectedList = [
  "Full name;",
  "Gender;",
  "Date of birth",
  "Residential address",
  "Contact information; Email address and Phone number",
  "Nationality",
  "Valid means of identification (passport, national identity card, NIN, Driver's license)",
  "Device or computer ID",
  "Social security number [for US citizens]",
  "Bank Verification Number (BVN) [for Nigerian citizens]",
  "Occupation; and",
  "A selfie or video recording of you.",
  "Other information provided in on forms, surveys, promotions, competition, and other reasons.",
];

const transactionInformationList = [
  "Technical information such as Internet Protocol (IP) address used to connect your computer to the internet, login information, browser information, App version, mobile network information etc.",
  "Time zone settings;",
  "Login details; email address, password, and location of your device or computer;",
  "Information on the transactions you make and from payments which are made to or from your account;",
  "Information from third party sources, such as identity verification report from our identity verification partners, and credit history information from credit bureaus; and",
  "Information about your behavior and how you interact with our products or services.",
];

const howWeUseList = [
  'To verify your account in compliance with our Know Your Customer and Anti-Money Laundering Policy ("AML/KYC Policy") obligations under applicable laws and regulations;',

  "To process your transactions or payments placed through our products or services",

  "To manage, update and improve the accuracy of the information on your account with us",

  "Communicate with you about your transactions and when in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services",

  "To troubleshoot, improve and optimize our service (for example, by generating analytics about how our users interact with our services we can analyze performance, fix glitches, and improve the effectiveness of our services)",

  "To detect and prevent financial fraud to protect the security of our users; and",

  "To detect, access, manage and prevent credit risks.",

  "For any other purpose that is required or permitted by any aw, regulations, rules, guidelines, or circulars from appropriate regulatory agencies.",
];

const rightsList = [
  "Once you create an account with Oval, you have the right to access the personal information we hold about you vide your profile. If the information we hold about you is incorrect, you can access your profile to update the information where it is out of date, inaccurate, misleading, or incomplete.",
  "You have the right to object to us processing your personal information if you believe we are not entitled to use it anymore.",
  "In addition, you may have the right to request that your personal information be deleted, have its processing restricted in certain circumstances and/or to obtain copies of information we hold about you in electronic form.",
];

export default function PrivacyPolicyPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalStatus, setModalStatus] = useState(false);
  const [sections, setSections] = useState([
    { index: "1.0", text: "GENERAL TERMS", isTitle: true, children: [] },
  ]);
  const [tableOfContentItems, setTableOfContentItems] = useState([]);

  const handleModalStatus = () => {
    setModalStatus(false);
  };

  return (
    <>
      <Head>
        <title>Privacy Policy</title>
      </Head>
      <nav className="flex justify-between items-center px-12 md:px-24 py-5 bg-white">
        <div className="flex space-x-2">
          {/*<Image src={oval} width={80} height={80} />*/}

          <h3 className={`text-grey-dark cursor-pointer`}>Oval</h3>
        </div>
        <div className="space-x-4 flex">
          <Link href="/">
            <button className="rounded-lg py-2 px-3 text-darkGray bg-blue-ocean border border-gray-100">
              Home
            </button>
          </Link>
        </div>
      </nav>
      <main className="pt-8 px-12 bg-white min-h-screen md:overflow-x-hidden">
        <div className="w-4/5 mx-auto my-0 max-w-[700px]" style={{}}>
          <h3 className="mb-4 text-center">PRIVACY POLICY</h3>
          <p className="mb-4 text-base">
            This Privacy Policy describes how Oval Technologies LLC ("Oval",
            "we", "our", and "us") collects and processes your personal
            information through Oval's websites, platforms, and any our mobile
            applications that references this Privacy Policy. This Privacy
            Policy answers the following questions:
          </p>

          <div className="mb-4">
            <ol className="list-decimal">
              {questionsList.map((item, index) => (
                <a className="underline" key={`questions-${index}`} href={item.link}>
                  <li className="font-normal mb-2">{item.text}</li>
                </a>
              ))}
            </ol>
          </div>

          <p className="mb-4 text-base">
            By accessing our website and using our platforms, and any our mobile
            applications you accept our Terms of Use and Privacy Policy.
          </p>

          <div className="mb-4" id="what-info-we-collect">
            <h3 className="mb-2">
              WHAT PERSONAL INFORMATION WE COLLECT AND PROCESS?
            </h3>
            <p className="mb-4 text-base">
              When you use any of our products or services we collect;
            </p>

            <h5 className="mb-2 font-bold">Biodata</h5>

            <ul className="list-disc mb-4">
              {infoCollectedList.map((text, index) => (
                <li key={`infoCollected-${index}`} className="font-normal mb-1">
                  {text}
                </li>
              ))}
            </ul>

            <h5 className="mb-2 mt-4 font-bold">Transaction Information</h5>
            <ul className="list-disc mb-4">
              {transactionInformationList.map((text, index) => (
                <li
                  key={`transactionInfoCollected-${index}`}
                  className="font-normal mb-1"
                >
                  {text}
                </li>
              ))}
            </ul>
            <p className="text-base">
              Please note that when we talk about "Personal Information" in this
              Privacy Policy, we are talking both about Biodata and transaction
              Information.
            </p>
          </div>

          <div className="mb-4" id="how-we-use-info">
            <h3 className="mb-2">HOW DO WE USE YOUR PERSONAL INFORMATION?</h3>

            <ol className="mb-4">
              {howWeUseList.map((text, index) => (
                <li key={`howWeUseList-${index}`} className="font-normal mb-1">
                  {text}
                </li>
              ))}
            </ol>
          </div>
          <div className="mb-4" id="what-is-the-legal-basis">
            <h3 className="mb-2">
              WHAT IS THE LEGAL BASIS FOR OUR USE OF YOUR PERSONAL INFORMATION?
            </h3>
            <p className="text-base">
              Performance of a contract: this is when the processing of your
              personal information is necessary to provide you with our products
              or services, or to communicate with you about them via email,
              chat, or telephone calls. This would include when we use your
              personal information to receive and process transactions,
              exchanges, and process payments. Legal obligation: this is when we
              are required to process your personal information to comply with a
              legal obligation, such as keeping records for tax purposes and
              other regulatory purposes or providing information to a public
              body or law enforcement agency in accordance with applicable
              Anti-Money Laundering laws and regulations. Legitimate interests:
              we may process your personal information where it is in our
              legitimate interest in running a lawful business to do so to
              further that business, for instance to process your transactions,
              or detect and prevent fraud to ensure the safety and security of
              your account. Your consent: in some cases, we will ask you for
              specific permission to process some of your personal information,
              and we will only process your personal information in this way if
              you agree to us doing so. You may withdraw your consent at any
              time by contacting Oval at Info@useoval.com and we will stop
              processing your data for that purpose.
            </p>
          </div>

          <div className="mb-4" id="do-we-use-cookies">
            <h3 className="mb-2">DO WE USE COOKIES AND SIMILAR TOOLS?</h3>

            <p className="text-base">
              We use cookies and similar tools for record keeping purposes, to
              customize your user experience, provide our services, improve the
              performance, usability, and effectiveness of our online presence,
              and to measure the effectiveness of our marketing activities.
              Although most browsers automatically accept cookies, you can
              choose whether to accept cookies and manage your consent for
              cookies using the cookie banner, or by updating your browser's
              settings (often found in your browser's Tools or Preferences menu)
              to not accept cookies. If you wish to revoke your selection, you
              may do so by clearing your browser's cookies, or by updating your
              preferences in the cookie banner. Note, however, that some
              portions of our sites may not work properly if you elect to refuse
              cookies. You can learn more about cookies at [
              <a href="https://www.aboutcookies.org" className="link">
                https://www.aboutcookies.org/
              </a>
              ].
            </p>
          </div>

          <div className="mb-4" id="in-what-circumstances">
            <h3 className="mb-2">
              IN WHAT CIRCUMSTANCES DO WE DISCLOSURE YOUR PERSONAL INFORMATION?
            </h3>

            <p className="text-base">
              Oval prioritizes data privacy and would not disclose your personal
              information. However, while providing you with our products and
              services, and in compliance with regulatory requirements, we may
              be required to disclose your personal information or account with
              us to the third parties described below: Partners: we partner with
              other companies and individuals to perform certain functions on
              our behalf. For example, we use a global identity verification
              service company to independently verify the data and documents
              supplied by our Users as part of our KYC process. We will equally
              use your personal information to process our product and service
              offerings. These third-party partners only have access to personal
              information needed to perform their functions in accordance with
              our contractual agreements but may not use it for other purposes
              subject to this Privacy Policy or similar practices as described
              in this Privacy Policy. Advisers: With your consent and
              authorization we may disclose your personal information to your
              nominated third parties such as accountants, lawyers, auditors,
              financial advisers, beneficiaries, and or other professional
              consultants. Regulatory agencies/Law enforcement: we may also
              release or share your Personal Information when we believe it is
              appropriate to comply with applicable laws and regulations;
              respond to a subpoena, search warrant or other lawful request for
              information we receive; enforce our Terms of Use and other
              agreements; or protect our rights and the safety of Oval, our
              Users, or others. This includes exchanging information with other
              companies and organizations for fraud protection and credit risk
              reduction.
            </p>
          </div>

          <div className="mb-4" id="information-transfer">
            <h3 className="mb-2">
              CAN MY PERSONAL INFORMATION BE TRANSFERRED TO OUTSIDE MY COUNTRY?
            </h3>
            <p className="text-base">
              Oval may, where necessary, transfer certain personal information
              outside your jurisdiction to companies working with us or on our
              behalf for the purposes described in this Privacy Policy for
              instance to process transactions or exchanges. We have put in
              place safeguards to ensure that such a transfer is carried out in
              compliance with applicable data protection laws which is
              applicable in that jurisdiction. By submitting your personal data,
              you agree to the transfer, storing or processing of it outside of
              your jurisdiction.
            </p>
          </div>

          <div className="mb-4" id="marketing-and-transfer">
            <h3 className="mb-2">MARKETING AND TRANSFER</h3>
            <p className="text-base">
              To provide you with the best user experience, we may use your
              Personal Information to provide you with targeted advertisements
              or marketing communications we believe may be of interest to you.
              This may include promotions from our partners that might be of
              interest to you. Your personal information may also be used for
              internal analytics purposes to measure how our users interact with
              our service offerings and measure the impact of our
              advertisements.
            </p>
          </div>
          <div className="mb-4" id="how-is-consent-obtained">
            <h3 className="mb-2">
              HOW IS YOUR CONSENT OBTAINED FOR CERTAIN DISCLOSURES?
            </h3>
            <p className="text-base">
              We will ask for your permission for certain uses of your personal
              information outside the perfection of your transactions or
              exchanges, and you can agree to or decline those uses. If you
              opt-in for certain services or communications, such as an
              e-newsletter, you will be able to unsubscribe at any time by
              following the instructions included in each communication. If you
              decide to unsubscribe from a service or communication, we will try
              to remove your information promptly, although we may require
              additional information before we can process your request.
            </p>
          </div>
          <div className="mb-4" id="security-of-info">
            <h5 className="mb-2">SECURITY OF YOUR INFORMATION</h5>
            <p className="text-base">
              The security of your personal information is a priority for Oval
              and we have designed our processes with the security of your
              personal information sin the forefront. We employ several
              physical, electronic, and procedural safeguards in connection with
              the collection, storage, and disclosure of your personal
              information.
            </p>
          </div>
          <div className="mb-4" id="what-are-your-rights">
            <h3 className="mb-2">
              WHAT ARE YOUR RIGHTS TO YOUR PERSONAL INFORMATION?
            </h3>
            <p className="mb-2 text-base">
              If Oval processes personal information about you, you have the
              following rights:
            </p>

            <ol className="mb-2 list-decimal">
              {rightsList.map((r, index) => (
                <li key={`rightsList-${index}`} className="font-normal mb-1">
                  {r}
                </li>
              ))}
            </ol>

            <p className="text-base">
              You can make a request or exercise these rights by contacting Oval
              at Info@useoval.com and we will make all reasonable and practical
              efforts to comply with your request, so long as it is consistent
              with applicable law and professional standards.
            </p>
          </div>

          <div className="mb-4" id="misc">
            <h3 className="mb-2">MISCELLANEOUS</h3>

            <h5 className="mb-2 font-semibold">How do we handle "do not track" signals?</h5>
            <p className="mb-2 text-base">
              Delaware Online Privacy and Protection Act section 1205 (b) (5),
              provides that we disclose how we respond to "Do Not Track" browser
              settings. Oval does not currently alter our practices when we
              receive "Do Not Track" signals, however users with certain modern
              browsers or software have the ability to activate a "Do Not Track"
              Signal. You can learn more about "Do Not Track" signals at <a href="https://allaboutdnt.com/" className="underline link">
              allaboutdnt.com
              </a>.
            </p>

            <h5 className="mb-2 font-semibold">
              How long will my personal information be retained?
            </h5>

            <p className="mb-2 text-base">
              We keep your personal information in throughout the life of the
              account to enable your continued use of Ovals' services, and
              afterwards for such a period as stated in our Terms of Use and as
              required by Anti-Money Laundering laws or other relevant policies
              and regulations.
            </p>
            <h5 className="mb-2 font-semibold">Children</h5>
            <p className="mb-2 text-base">
              Our service is not directed towards anyone under the age of 18. If
              a parent or guardian becomes aware that his or her child under the
              age of 18 has created an account with Oval and/or provided us with
              personally identifiable information, please contact us by e-mail
              at Info@useoval.com. Additionally, if we become aware at any point
              that a child under the age of 18 is using our service, we will
              terminate his or her account.
            </p>

            <h5 className="mb-2 font-semibold">Review of our policy</h5>
            <p className="mb-2 text-base">
              We may amend or modify this Privacy Policy from time to time
              without prior notice to reflect, for example, changes to our
              practices or for other operational, legal, or regulatory reasons.
              When we make changes to this Privacy Policy, we will revise the
              "updated" date at the top of this page. It is your responsibility
              to check for changes. When we update our Privacy Policy, your
              continued access to Oval's services means that you agree to the
              updated information and agree to abide by the Privacy Policy.
            </p>
            <h5 className="mb-2 font-semibold">Contact Us</h5>
            <p className="mb-2 text-base">
              For more information about our privacy practices, if you have
              questions, or if you would like to make a complaint or express any
              concerns you may have regarding compliance with our privacy
              policy, please contact us by e-mail at{" "}
              <a href="mailto://info@useoval.com" className="underline link">
                info@useoval.com
              </a>
              .
            </p>
          </div>
        </div>
      </main>
      <Footer />
      {/* <nav className="w-full bg-white px-12">
        <div className="border-t py-7 md:px-24 md:flex justify-between items-center">
          <p className="text-blue-bodyLighter">
            © 2021 Oval.io All rights reserved. <a href="mailto:info@useoval.com">
                {' '}
                info@useoval.com{' '}
              </a>
          </p>
        </div>
      </nav> */}
      <EmailSuccessModal status={modalStatus} closeModal={handleModalStatus} />
    </>
  );
}

PrivacyPolicyPage.getInitialProps = publicRoute;
