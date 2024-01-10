"use client";

import { Button, Heading, Pane, Paragraph, Text, TickIcon } from "evergreen-ui";
import React, { useState } from "react";
import Image from "next/image";
import Colors from "@/theme/Colors";
import { AnimatePresence, motion } from "framer-motion";

const ACTIVE_STATE_ENUM = {
  CARDS: "CARDS",
  MULTI: "MULTI",
};

const MoneyMovement = () => {
  const [active, setActive] = useState(ACTIVE_STATE_ENUM.MULTI);

  return (
    <Pane className="money-movement">
      <Pane display="flex" gap="30px" width="100%">
        <Pane
          flex={1}
          borderRadius={15}
          background={
            active === ACTIVE_STATE_ENUM.MULTI
              ? Colors.dark.secondary
              : Colors.dark.primary
          }
          transition="all 1s cubic-bezier(0.58, 0.05, 0.08, 1.04)"
          paddingY={60}
          paddingLeft={"4rem"}
        >
          <Pane
            display="flex"
            gap={15}
            justifyContent="right"
            paddingRight="30px"
          >
            {/* <Pane> */}
            <Text
              borderRadius={"20px"}
              paddingX={"15px"}
              paddingY={"5px"}
              background={`${
                active === ACTIVE_STATE_ENUM.CARDS ? `white` : "transparent"
              }`}
              border={`${
                active === ACTIVE_STATE_ENUM.CARDS
                  ? "none"
                  : `1px solid ${Colors.dark.primary}`
              }`}
              color={Colors.dark.primary}
              cursor="pointer"
              onClick={() => setActive(ACTIVE_STATE_ENUM.CARDS)}
            >
              Cards
            </Text>
            <Text
              borderRadius={"20px"}
              paddingX={"15px"}
              paddingY={"5px"}
              background={`${
                active === ACTIVE_STATE_ENUM.MULTI
                  ? `${Colors.dark.primary}`
                  : "transparent"
              }`}
              border={`${
                active === ACTIVE_STATE_ENUM.MULTI ? "none" : `1px solid white`
              }`}
              color={`white`}
              cursor="pointer"
              onClick={() => setActive(ACTIVE_STATE_ENUM.MULTI)}
            >
              Multi-Currency Accounts
            </Text>
            {/* </Pane> */}
          </Pane>
          <Pane display="flex" justifyContent="space-around">
            <Pane maxWidth={"600px"}>
              {active === ACTIVE_STATE_ENUM.MULTI ? (
                <Heading
                  size={900}
                  fontSize={"45px"}
                  lineHeight="50px"
                  fontWeight={700}
                  marginY={20}
                  color="black"
                >
                  Introducing Faster Money Movement Beyond Banks.
                </Heading>
              ) : (
                <Heading
                  size={900}
                  fontSize={"45px"}
                  lineHeight="50px"
                  fontWeight={700}
                  marginY={20}
                  color="white"
                >
                  Empower your team. Spend and manage Gloabally
                </Heading>
              )}
              <Paragraph
                fontSize={"16px"}
                marginY={40}
                transition="all 1s cubic-bezier(0.58, 0.05, 0.08, 1.04)"
                color={active === ACTIVE_STATE_ENUM.CARDS ? "white" : "black"}
              >
                Graph empowers you to swiftly direct your funds and manage bills
                efficiently through instant transfers. Utilize instant transfers
                to efficiently reimburse employees, manage payroll, and conduct
                global transactions in USD and foreign currencies. Reach
                suppliers, vendors and partners in over 90 countries instantly,
                eliminating the delays of traditional money transfers.
              </Paragraph>
              <Pane
                display="flex"
                alignItems="center"
                // justifyContent="center"
                rowGap={20}
                columnGap={20}
                flexWrap="wrap"
                maxWidth={800}
                marginY={60}
              >
                <Pane
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  gap={6}
                >
                  <Pane
                    borderRadius="50%"
                    background="#C0D7FF"
                    padding={5}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <TickIcon color={Colors.dark.primary} />
                  </Pane>
                  <Text
                    transition="all 1s cubic-bezier(0.58, 0.05, 0.08, 1.04)"
                    color={
                      active === ACTIVE_STATE_ENUM.CARDS ? "white" : "black"
                    }
                    fontWeight={400}
                  >
                    Secure and transparent transactions
                  </Text>
                </Pane>
                <Pane
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  gap={6}
                >
                  <Pane
                    borderRadius="50%"
                    background="#C0D7FF"
                    padding={5}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <TickIcon color={Colors.dark.primary} />
                  </Pane>
                  <Text
                    transition="all 1s cubic-bezier(0.58, 0.05, 0.08, 1.04)"
                    color={
                      active === ACTIVE_STATE_ENUM.CARDS ? "white" : "black"
                    }
                    fontWeight={400}
                  >
                    Competitive exchange rates
                  </Text>
                </Pane>
                <Pane
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  gap={6}
                >
                  <Pane
                    borderRadius="50%"
                    background="#C0D7FF"
                    padding={5}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <TickIcon color={Colors.dark.primary} />
                  </Pane>
                  <Text
                    transition="all 1s cubic-bezier(0.58, 0.05, 0.08, 1.04)"
                    color={
                      active === ACTIVE_STATE_ENUM.CARDS ? "white" : "black"
                    }
                    fontWeight={400}
                  >
                    Secure and transparent transactions
                  </Text>
                </Pane>
              </Pane>
              <Button
                className="cta-primary"
                type="submit"
                size="large"
                color="#ffffff"
                background="black"
                borderRadius={10}
                border="none"
                fontSize={13}
                fontWeight={400}
              >
                Learn more
              </Button>
            </Pane>
            <Pane marginTop="auto" flex={1}>
              <Pane position="relative">
                <Pane position="absolute" right="0" bottom="0">
                  {active === ACTIVE_STATE_ENUM.MULTI ? (
                    <Image
                      style={{
                        // height: "400px",
                        maxWidth: "400px",
                        transition: "width 0.6s ease-out 0s",
                      }}
                      alt="faster money"
                      src={require("../../../public/images/general/faster-money-img.png")}
                    />
                  ) : (
                    <Image
                      style={{
                        // height: "400px",
                        maxWidth: "400px",
                        transition: "width 0.6s ease-out 0s",
                      }}
                      alt="hero image"
                      src={require("../../../public/images/general/hero.png")}
                    />
                  )}
                  {/* <AnimatePresence>
                    {active === ACTIVE_STATE_ENUM.MULTI && (
                      <motion.div
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                          open: {
                            opacity: [0.5, 0.8, 1],
                            // x: [50, 20, 0]
                          },
                          collapsed: {
                            opacity: [0.4, 0.2, 0],
                            // x: [50, 70, 100],
                          },
                        }}
                        transition={{ duration: 1 }}
                      >
                        <Image
                          style={{
                            // height: "400px",
                            maxWidth: "400px",
                            // transition: "width 0.6s ease-out 0s",
                          }}
                          alt="faster money"
                          src={require("../../../public/images/general/faster-money-img.png")}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <AnimatePresence>
                    {active === ACTIVE_STATE_ENUM.CARDS && (
                      <motion.div
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                          open: {
                            opacity: [0.5, 0.8, 1],
                            //  x: [50, 20, 0]
                          },
                          collapsed: {
                            opacity: [0.4, 0.2, 0],
                            // x: [50, 70, 100],
                          },
                        }}
                        transition={{ duration: 1 }}
                      >
                        <Image
                          style={{
                            // height: "400px",
                            maxWidth: "300px",
                            // transition: "width 0.6s ease-out 0s",
                          }}
                          alt="hero image"
                          src={require("../../../public/images/general/hero.png")}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence> */}
                </Pane>
              </Pane>
            </Pane>
          </Pane>
        </Pane>
        <Pane
          transition="all 1s cubic-bezier(0.58, 0.05, 0.08, 1.04)"
          borderRadius={15}
          background={`${
            active === ACTIVE_STATE_ENUM.CARDS
              ? `${Colors.dark.secondary}`
              : `${Colors.dark.primary}`
          }`}
          width={"180px"}
        ></Pane>
      </Pane>
    </Pane>
  );
};

export default MoneyMovement;

const displayValues = {
  CARDS: {
    header: "Introducing Faster Money Movement Beyond Banks.",
  },
};
