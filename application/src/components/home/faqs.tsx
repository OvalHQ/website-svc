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
    <Pane className="faqs">
      <Heading
        marginBottom={50}
        fontSize="2.5rem"
        lineHeight={"30px"}
        fontWeight={700}
        textAlign="center"
        color="black"
      >
        Frequently Asked Questions
      </Heading>
      <Pane width="100%" paddingX="100px">
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
                <Paragraph fontSize={"20px"} fontWeight={700} color="black">
                  {faq.question}
                </Paragraph>
                {openedId === index ? (
                  <MinusIcon color={Colors.dark.primary} />
                ) : (
                  <PlusIcon color={Colors.dark.primary} />
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
                    <Text marginTop={30}>{faq.answer}</Text>
                  </motion.div>
                )}
              </AnimatePresence>
            </Pane>
          );
        })}
      </Pane>
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
    question: "How fast are the global payouts with Graph?",
    answer:
      "Yes, you can. Graph is designed for startups, businesses, and enterprises of all sizes. Whether you're a small startup venturing into international markets or a well-established enterprise looking to streamline global transactions, Graph is the solution for you.",
  },
  {
    question: "How secure is Graph’s platform?",
    answer:
      "Yes, you can. Graph is designed for startups, businesses, and enterprises of all sizes. Whether you're a small startup venturing into international markets or a well-established enterprise looking to streamline global transactions, Graph is the solution for you.",
  },
  {
    question: "What’s required to open a Graph account?",
    answer:
      "Yes, you can. Graph is designed for startups, businesses, and enterprises of all sizes. Whether you're a small startup venturing into international markets or a well-established enterprise looking to streamline global transactions, Graph is the solution for you.",
  },
  {
    question: "Can I make international transactions with Graph?",
    answer:
      "Yes, you can. Graph is designed for startups, businesses, and enterprises of all sizes. Whether you're a small startup venturing into international markets or a well-established enterprise looking to streamline global transactions, Graph is the solution for you.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "We provide diverse contact channels including live chat, email, phone support, an FAQ section, and social media engagement, ensuring varied options for customers to reach our responsive and attentive customer support team.",
  },
];
