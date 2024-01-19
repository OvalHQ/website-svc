import Colors from "@/theme/Colors";
import { Button, Heading, Pane, Paragraph, Text, TickIcon } from "evergreen-ui";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import SolidFoundationImg from "../../../public/images/general/solid-foundation-img.svg";

const SolidFoundation = () => {
  return (
    <Pane className="solid-foundation">
      <div className="flex gap-[30px] w-full flex-col md:flex-row">
        <div className="rounded-2xl flex-1 bg-white  pr-3 md:pr-0 pl-4 py-5 sm:py-[60px] sm:pl-[5rem]">
          <div className="flex w-full flex-col lg:flex-row gap-y-14">
            <Pane maxWidth={"700px"}>
              <h2 className="my-4 mt-5 lg:mt-14 text-[40px] md:text-[60px] text-black font-semibold leading-[40px] md:leading-[60px] max-w-[400px] md:max-w-[700px] ">
                Launch with a solid financial foundation
              </h2>
              <p className=" text-[15px] leading-[30px] max-w-[400px] text-black opacity-65 mt-[1.5rem] ">
                Open a flexible account that lets you manage, spend, and grow
                your cash — all in a single dashboard
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
                  <Text color={"black"} fontWeight={500} fontSize={16}>
                    Apply for an account in minutes with no minimum balance or
                    personal guarantee.
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
                  <Text color={"black"} fontWeight={500} fontSize={16}>
                    Easily receive and make payments by instant bank transfers
                    and multiple payment methods
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
                  <Text color={"black"} fontWeight={500} fontSize={16}>
                    Graph partners banks are regulated and funds are FDIC
                    Insured
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
              >
                <Link href={"/contact"}>Get Started</Link>
              </Button>
            </Pane>
            <Pane marginTop="auto" flex={1} paddingRight="40px">
              <Pane position="relative">
                <Image
                  width={"600"}
                  height={"600"}
                  alt="hero image"
                  src={SolidFoundationImg}
                  className="ml-auto max-width-full md:w-full md:max-w-[500px]"
                />
              </Pane>
            </Pane>
          </div>
        </div>
      </div>
    </Pane>
  );
};

export default SolidFoundation;
