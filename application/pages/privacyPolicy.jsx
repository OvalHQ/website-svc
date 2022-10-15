import { publicRoute } from "../middleware/authentication";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { Disclosure, Transition } from "@headlessui/react";
import oval from "../assets/png/mondu.png";
import toggle from "../assets/svg/home/toggle.svg";
import add from "../assets/svg/home/add.svg";
import minus from "../assets/svg/home/minus.svg";
import usa from "../assets/svg/home/usa-card.svg";
import naija from "../assets/svg/home/naija-card.svg";
import canada from "../assets/svg/home/canada-card.svg";
import server from "../server";
import { million_things, questions } from "../helpers/constants";
import StepOne from "../components/transactions/sendmoney/stepone";
import TextInput from "../components/inputs/text-input";
import { useState, useEffect } from "react";
import axios from "axios";
import { CgSpinner } from "react-icons/cg";
import EmailSuccessModal from "../components/success/email";
import { earlyAccess } from "../server/api";
import Footer from "../components/footer";

const questionsList = [
  "What personal information we collect and Process?",
  "How do we use your personal information?",
  "What is the legal basis for our use of your personal information?",
  "Do we use cookies and similar tools? ",
  "In what circumstances do we disclosure your personal Information?  ",
  "Can my personal information be transferred to outside my country?  ",
  "Marketing and advertising",
  "How is your consent obtained for certain disclosures? ",
  "Security of your information? ",
  "What are your rights to your personal information? ",
  "Miscellaneous",
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

const transactionInformationList= ["Technical information such as Internet Protocol (IP) address used to connect your computer to the internet, login information, browser information, App version, mobile network information etc.",
"Time zone settings;",
"Login details; email address, password, and location of your device or computer;",
"Information on the transactions you make and from payments which are made to or from your account;",
"Information from third party sources, such as identity verification report from our identity verification partners, and credit history information from credit bureaus; and",
"Information about your behavior and how you interact with our products or services."];

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
          <p className="mb-4">
            This Privacy Policy describes how Oval Technologies LLC ("Oval",
            "we", "our", and "us") collects and processes your personal
            information through Oval's websites, platforms, and any our mobile
            applications that references this Privacy Policy. This Privacy
            Policy answers the following questions:
          </p>

          <div className="mb-4">
            <ol className="list-decimal">
              {questionsList.map((text, index) => (
                <li key={`questions-${index}`} className="font-normal mb-2">
                  {text}
                </li>
              ))}
            </ol>
          </div>

          <p className="mb-4">
            By accessing our website and using our platforms, and any our mobile
            applications you accept our Terms of Use and Privacy Policy.
          </p>

          <div className="mb-4" id="info-collected">
            <h3 className="mb-2">
              WHAT PERSONAL INFORMATION WE COLLECT AND PROCESS?
            </h3>
            <p className="mb-4">
              When you use any of our products or services we collect;
            </p>

            <h5 className="mb-2">Biodata</h5>

            <ul className="list-none">
            {infoCollectedList.map((text, index) => (
                <li key={`infoCollected-${index}`} className="font-normal mb-1">
                  {text}
                </li>
              ))}
            </ul>

            <h5 className="mb-2">Transaction Information</h5>
            <ul className="list-none">
            {transactionInformationList.map((text, index) => (
                <li key={`transactionInfoCollected-${index}`} className="font-normal mb-1">
                  {text}
                </li>
              ))}
            </ul>
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

Home.getInitialProps = publicRoute;
