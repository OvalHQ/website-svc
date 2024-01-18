"use client";

import {
  Heading,
  MinusIcon,
  Pane,
  Paragraph,
  PlusIcon,
  Text,
} from "evergreen-ui";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Colors from "@/theme/Colors";

const Faqs = () => {
  const [openedId, setOpenedId] = useState(-1);

  const handleToggle = (id: number) => {
    setOpenedId((prev) => {
      if (prev === id) {
        return -1;
      } else {
        return id;
      }
    });
  };

  return (
    <Pane className="faqs" id="faqs">
      <h2 className="mb-[50px] text-[2.5rem] leading-[35px] font-semibold text-center text-black ">
        Frequently Asked Questions
      </h2>
      <div className="w-full px-0 md:px-[100px]">
        {faqsObject.map((faq, index) => {
          return (
            <Pane
              key={index}
              //   marginY={15}
              borderTop="1px solid #00000024"
              paddingY="30px"
            >
              <Pane
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                cursor="pointer"
                onClick={() => handleToggle(index)}
              >
                <Paragraph fontSize={"20px"} fontWeight={600} color="black">
                  {faq.question}
                </Paragraph>
                {openedId === index ? (
                  <MinusIcon
                    color={Colors.dark.primary}
                    size={25}
                    fontWeight={200}
                  />
                ) : (
                  <PlusIcon
                    color={Colors.dark.primary}
                    size={25}
                    fontWeight={200}
                  />
                )}
              </Pane>

              <AnimatePresence initial={false}>
                {openedId === index && (
                  <motion.div
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: "auto", marginTop: "20px" },
                      collapsed: { opacity: 0, height: 0, marginTop: "0" },
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <Text
                      fontSize={"16px"}
                      color="black"
                      fontWeight={400}
                      marginTop={30}
                    >
                      {faq.answer}
                    </Text>
                  </motion.div>
                )}
              </AnimatePresence>
            </Pane>
          );
        })}
      </div>
    </Pane>
  );
};

export default Faqs;

const faqsObject = [
  {
    question: "Can I use Graph for my startup or enterprise?",
    answer:
      "Yes, you can. Graph is designed for startups, businesses, and enterprises of all sizes. Whether you're a small startup venturing into international markets or a well-established enterprise looking to streamline global transactions, Graph is the solution for you.",
  },
  {
    question: "How does Graph simplify international finance?",
    answer:
      "Graph simplifies international finance by offering corporate cards for versatile global transactions and a global payout system for effortless cross-border payments. We eliminate the complexities associated with international money transfers, making it easier for businesses to expand globally.",
  },
  {
    question: "How fast are the global payouts with Graph?",
    answer: "Global payouts are typically settled in t+1 business day.",
  },
  {
    question: "How secure is Graph’s platform?",
    answer:
      "Security is our top priority. Graph employs industry-standard security measures, and we adhere to global compliance standards and regulations to protect your transactions.",
  },
  {
    question: "What’s required to open a Graph account?",
    answer:
      "Opening a Graph account is a straightforward process. To get started, you'll need to provide information about your business and some legal documents to ensure compliance with regulatory requirements. Our onboarding process is designed to be simple and user-friendly.",
  },
  {
    question: "Can I make international transactions with Graph?",
    answer:
      "Absolutely. Graph is designed to facilitate international transactions for businesses operating on a global scale. Whether you need to make cross-border payments to suppliers, vendors or partners worldwide, our global payout system simplifies the process. With Graph, you can effortlessly transfer funds (EUR,GBP,USD) internationally, removing the complexities associated with traditional international money transfers.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "We provide diverse contact channels including live chat, email, phone support, an FAQ section, and social media engagement, ensuring varied options for customers to reach our responsive and attentive customer support team.",
  },
];
