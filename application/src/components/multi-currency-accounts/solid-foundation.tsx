import Colors from "@/theme/Colors";
import { Button, Heading, Pane, Paragraph, Text, TickIcon } from "evergreen-ui";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SolidFoundation = () => {
  return (
    <Pane className="solid-foundation">
      <Pane display="flex" gap="30px" width="100%">
        <Pane
          flex={1}
          borderRadius={15}
          background={"white"}
          paddingY={60}
          paddingLeft={"4rem"}
        >
          <Pane display="flex" justifyContent="space-around">
            <Pane maxWidth={"600px"}>
              <Heading
                size={900}
                fontSize={"45px"}
                lineHeight="50px"
                fontWeight={700}
                marginY={20}
                color="black"
                maxWidth="500px"
              >
                Launch with a solid financial foundation
              </Heading>
              <Paragraph
                fontSize={"16px"}
                marginY={40}
                transition="all 1s cubic-bezier(0.58, 0.05, 0.08, 1.04)"
                maxWidth="500px"
                color={"black"}
              >
                Open a flexible account that lets you manage, spend, and grow
                your cash — all in a single dashboard
              </Paragraph>
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
                  <Text color={"black"} fontWeight={400}>
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
                  <Text color={"black"} fontWeight={400}>
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
                  <Text color={"black"} fontWeight={400}>
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
            <Pane marginTop="auto" flex={1} paddingRight="25px">
              <Pane position="relative">
                <Image
                  style={{
                    maxWidth: "700px",
                    marginLeft: "auto",
                  }}
                  alt="hero image"
                  src={require("../../../public/images/general/solid-foundation-img.png")}
                />
              </Pane>
            </Pane>
          </Pane>
        </Pane>
      </Pane>
    </Pane>
  );
};

export default SolidFoundation;
