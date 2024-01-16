import Colors from "@/theme/Colors";
import { Button, Heading, Pane, Paragraph, Text, TickIcon } from "evergreen-ui";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import CorporateCardImg from "../../../public/images/general/corporate-card-img.svg";

const CorporateCards = () => {
  return (
    <Pane className="corporate-cards">
      <div className="flex gap-[30px] w-full flex-col md:flex-row">
        <div className="rounded-xl flex-1 bg-[#D1F89840] pl-4 py-5 sm:py-[60px] sm:pl-[3rem]">
          <div className="flex w-full flex-col lg:flex-row gap-y-14">
            <Pane maxWidth={"500px"}>
              <h2 className="my-4 mt-5 lg:mt-14 text-[40px] text-black font-semibold leading-[40px] md:leading-[50px] max-w-[400px] md:max-w-[700px] ">
                Save more with the all-in-one corporate card
              </h2>
              <p className=" text-[15px] leading-[30px] max-w-[400px] text-black mt-[1.5rem] ">
                Easily make payment for travel, online ads , and more with
                International and local card’s acceptance in 20 currencies or
                more.
              </p>
              <Pane
                display="flex"
                alignItems="flex-start"
                // justifyContent="center"
                rowGap={20}
                flexDirection="column"
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
                    color={"black"}
                    fontWeight={600}
                  >
                    Issue unlimited cards to your employees
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
                    color={"black"}
                    fontWeight={600}
                  >
                    Manage all expense in one place
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
                    color={"black"}
                    fontWeight={600}
                  >
                    Make unlimted purchases and ads for your business
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
                fontSize={13}
                fontWeight={400}
                height={"auto"}
                paddingY={5}
                paddingX={35}
                fontFamily={"Neue Haas Grotesk Display Pro"}
              >
                <Link
                  href={
                    "https://airtable.com/appoAvLm7YJjEJveN/shrScB7fxfi4fRMu6"
                  }
                  target="_blank"
                >
                  Get Started
                </Link>
              </Button>
            </Pane>
            <Pane marginTop="auto" flex={1} paddingRight="35px">
              <Pane position="relative">
                <Image
                  width={"700"}
                  height={"700"}
                  alt="hero image"
                  src={CorporateCardImg}
                  className="ml-auto max-width-full md:w-full md:max-w-[650px]"
                />
              </Pane>
            </Pane>
          </div>
        </div>
      </div>
    </Pane>
  );
};

export default CorporateCards;
