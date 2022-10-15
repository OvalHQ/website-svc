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

const SectionItem = ({ section, sectionIndex }) => {
  const { index, text, isTitle, children } = section;
  const childClassName = isTitle ? "mt-4" : "mt-4 pl-1";
  const childrenList = (
    <div className={childClassName}>
      {children.map((child, i) => (
        <p className="mb-4" key={`${sectionIndex}-child-${i}`}>
          {child}
        </p>
      ))}
    </div>
  );
  return (
    <div className="flex mb-8" id={`section-${index.replace(".", "_")}`}>
      <p className="w-8">{index}</p>
      <div className={"flex-1"}>
        <p className={isTitle ? "font-bold" : "font-normal"}>{text}</p>
        {children.length > 0 && childrenList}
      </div>
    </div>
  );
};

export default function TermsOfUsePage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalStatus, setModalStatus] = useState(false);
  const [sections, setSections] = useState([
    { index: "1.0", text: "GENERAL TERMS", isTitle: true, children: [] },
  ]);
  const [tableOfContentItems, setTableOfContentItems] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        const response = await server.get("/terms.json");

        console.log(response.data);
        setSections(response.data);
      } catch (err) {
        window.alert("An error occurred");
      }
    };
    fetch();
  }, []);

  useEffect(() => {
    setTableOfContentItems(
      sections
        .filter((s) => s.isTitle)
        .map((s) => ({ isTitle: s.isTitle, index: s.index, text: s.text }))
    );
  }, [sections]);

  const handleModalStatus = () => {
    setModalStatus(false);
  };

  return (
    <>
      <Head>
        <title>Terms of use</title>
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
          <h3 className="mb-4 text-center">TERMS OF USE</h3>

          <p className="mb-4">
            These Terms of Use (“User Agreement”) constitutes a legally binding
            agreement between Oval Technologies LLC (“Oval”, “we”, “us” and
            “our”) and the users of this website, whether personally or on
            behalf of an entity (“you”, “your”, or “yourself”).
          </p>

          <p className="mb-4">
            This User Agreement concerns your access to and use of the website
            as well as any other platforms, and our mobile applications related,
            linked, or otherwise connected thereto (collectively, the “Site”)
          </p>

          <h3 className="mb-4">Contents</h3>
          <div className="mb-4">
            {tableOfContentItems.map((item, index) => (
              <a
                className="text-sky-400 underline"
                key={`content-${index}`}
                href={`#section-${item.index.replace(".", "_")}`}
              >
                <div className="flex mb-2">
                  <p className="w-8">{item.index}</p>
                  <div className={"flex-1"}>
                    <p className="font-normal cursor-pointer mb-2">
                      {item.text.toUpperCase()}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {sections.map((section, index) => (
            <SectionItem section={section} sectionIndex={`section-${index}`} />
          ))}
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

TermsOfUsePage.getInitialProps = publicRoute;
