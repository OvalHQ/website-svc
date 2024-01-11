import Colors from "@/theme/Colors";
import { Button, Heading, Pane, Paragraph, Text, TickIcon } from "evergreen-ui";
import Image from "next/image";
import React from "react";

const CorporateCards = () => {
  return (
    <Pane className="corporate-cards">
      <Pane display="flex" gap="30px" width="100%">
        <Pane
          flex={1}
          borderRadius={15}
          background={"#D1F89840"}
          // transition="all 1s cubic-bezier(0.58, 0.05, 0.08, 1.04)"
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
                Save more with the all-in-one corporate card
              </Heading>
              <Paragraph
                fontSize={"16px"}
                marginY={40}
                transition="all 1s cubic-bezier(0.58, 0.05, 0.08, 1.04)"
                maxWidth="500px"
                color={"black"}
              >
                Easily make payment for travel, online ads , and more with
                International and local card’s acceptance in 20 currencies or
                more.
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
                  <Text
                    transition="all 1s cubic-bezier(0.58, 0.05, 0.08, 1.04)"
                    color={"black"}
                    fontWeight={400}
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
                    fontWeight={400}
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
                    fontWeight={400}
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
              >
                Get started
              </Button>
            </Pane>
            <Pane marginTop="auto" flex={1} paddingRight="35px">
              <Pane position="relative">
                {/* <Pane position="absolute" right="0" bottom="0"> */}
                <Image
                  style={{
                    maxWidth: "700px",
                    marginLeft: "auto",
                  }}
                  alt="hero image"
                  src={require("../../../public/images/general/corporate-card-img.png")}
                />
                {/* </Pane> */}
              </Pane>
            </Pane>
          </Pane>
        </Pane>
      </Pane>
    </Pane>
  );
};

export default CorporateCards;
