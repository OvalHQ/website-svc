"use client";

import { Button, Heading, Pane, Paragraph, Text, TickIcon } from "evergreen-ui";
import React, { useState } from "react";
import Image from "next/image";
import Colors from "@/theme/Colors";
// import { AnimatePresence, motion } from "framer-motion";

import MoneyMovementImg from "../../../public/images/general/faster-money-img.svg";
import CardsImg from "../../../public/images/general/hero.svg";
import Link from "next/link";

const ACTIVE_STATE_ENUM = {
  CARDS: "CARDS",
  MULTI: "MULTI",
};

const MoneyMovement = () => {
  const [active, setActive] = useState(ACTIVE_STATE_ENUM.MULTI);

  return (
    <Pane className="money-movement">
      <div className="flex gap-[30px] w-full">
        <div
          style={{
            backgroundColor:
              active === ACTIVE_STATE_ENUM.MULTI
                ? Colors.dark.secondary
                : Colors.dark.primary,
          }}
          className=" flex-1 py-[60px] rounded-2xl transition ease-in-out duration-1000 "
        >
          <div className="flex justify-end gap-3 pr-2  pl-2 sm:px-[30px] md:pl-[4rem]">
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
              Corporate Cards
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
          </div>
          <div className="flex  flex-col lg:flex-row justify-around">
            <div className="max-w-[650px] pl-[30px]  md:pl-[4rem] ">
              <h2
                className={`${
                  active === ACTIVE_STATE_ENUM.MULTI
                    ? "text-black"
                    : "text-white"
                } md:max-w-[520px] my-[20px] text-[35px] md:text-[45px] font-semibold -tracking-[1px] leading-[40px] md:leading-[50px] transition ease-in-out duration-1000 `}
              >
                {active === ACTIVE_STATE_ENUM.MULTI
                  ? "Introducing Faster Money Movement Beyond Banks."
                  : "Empower Your Team. Spend & Manage Globally"}
              </h2>
              <Paragraph
                fontSize={"16px"}
                marginY={40}
                transition="all 1s cubic-bezier(0.58, 0.05, 0.08, 1.04)"
                color={active === ACTIVE_STATE_ENUM.CARDS ? "white" : "black"}
                opacity={active === ACTIVE_STATE_ENUM.CARDS ? "0.5" : "0.5"}
              >
                {active === ACTIVE_STATE_ENUM.MULTI
                  ? "Graph empowers you to swiftly direct your funds and manage bills efficiently through instant transfers. Utilize instant transfers to efficiently reimburse employees, manage payroll, and conduct global transactions in USD and foreign currencies. Reach suppliers, vendors and partners in over 90 countries instantly, eliminating the delays of traditional money transfers."
                  : "Equip your team with dollar cards that work anywhere, anytime. Manage expenses and make international purchases with ease. Graph’s corporate cards offer flexibility, control, and real-time transaction visibility, giving you the power to manage your finances globally with confidence."}
              </Paragraph>
              <Pane
                display="flex"
                alignItems="center"
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
                    fontWeight={500}
                  >
                    {active === ACTIVE_STATE_ENUM.MULTI
                      ? "Same-day settlement"
                      : "Spending limits and controls (coming soon)"}
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
                    fontWeight={500}
                  >
                    {active === ACTIVE_STATE_ENUM.MULTI
                      ? "Competitive exchange rates"
                      : "Seamless expense tracking"}
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
                    fontWeight={500}
                  >
                    {active === ACTIVE_STATE_ENUM.MULTI
                      ? "Secure and transparent transactions"
                      : "Integrate with your existing accounting systems"}
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
                fontSize={14}
                fontWeight={400}
                height={"auto"}
                paddingY={8}
                paddingX={35}
                fontFamily={"Neue Haas Grotesk Display Pro"}
              >
                <Link
                  href={
                    active === ACTIVE_STATE_ENUM.MULTI
                      ? "/multi-currency-accounts"
                      : "/corporate-cards"
                  }
                >
                  Learn more
                </Link>
              </Button>
            </div>
            <Pane marginTop="auto" flex={1} className="relative">
              {/* <Pane position="relative"> */}
              <div className="lg:absolute lg:right-0 lg:bottom-0">
                {active === ACTIVE_STATE_ENUM.MULTI ? (
                  <Image
                    style={{
                      transition: "width 0.6s ease-out 0s",
                    }}
                    alt="faster money"
                    width={"400"}
                    height={"400"}
                    src={MoneyMovementImg}
                    // src={require("../../../public/images/general/faster-money-img.png")}
                    className="ml-auto max-width-full md:max-w-[400px]"
                  />
                ) : (
                  <Image
                    style={{
                      transition: "width 0.6s ease-out 0s",
                    }}
                    alt="hero image"
                    width={"400"}
                    height={"400"}
                    src={CardsImg}
                    className="ml-auto max-width-full md:max-w-[400px]"
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
              </div>
              {/* </Pane> */}
            </Pane>
          </div>
        </div>
        <div
          className={` hidden xl:block rounded-2xl	w-[180px] transition ease-in-out duraion-1000`}
          style={{
            backgroundColor:
              active === ACTIVE_STATE_ENUM.MULTI
                ? `#2176ff`
                : `${Colors.dark.secondary}`,
          }}
        ></div>
      </div>
    </Pane>
  );
};

export default MoneyMovement;

const displayValues = {
  CARDS: {
    header: "Introducing Faster Money Movement Beyond Banks.",
  },
};
