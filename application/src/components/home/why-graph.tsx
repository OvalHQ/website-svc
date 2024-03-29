import { Heading, Pane, Paragraph, Text } from "evergreen-ui";
import Image from "next/image";
import React from "react";

const WhyGraph = () => {
  return (
    <div className="bg-[#d1f89880] mx-auto w-full">
      <Pane className="why-graph">
        <Heading
          fontSize="40px"
          lineHeight={"40px"}
          fontWeight={600}
          textAlign="center"
          color="black"
          maxWidth={"800px"}
          marginX={"auto"}
        >
          Discover why Graph is the
        </Heading>
        <Heading
          fontSize="40px"
          lineHeight={"40px"}
          fontWeight={600}
          textAlign="center"
          color="black"
          maxWidth={"800px"}
          marginX={"auto"}
        >
          preferred choice for businesses.
        </Heading>
        <Pane
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap={"20px"}
          flexWrap="wrap"
          marginTop={60}
        >
          <Pane
            borderRadius={15}
            background="white"
            padding={40}
            maxWidth={"400px"}
            minWidth={"320px"}
            flex={1}
            height={"450px"}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Paragraph fontSize={"16px"} color={"#000000"} fontWeight={500}>
              As a startup with global operations, {"Graph's"} Simplified Global
              Payments product has been a lifesaver for us. The traditional
              hassles of cross-border transactions are now a thing of the past.
              The {"platform's"} robust security measures and quick processing
              times have instilled confidence in our financial transactions.{" "}
              {"It's"} not just a product; {"it's"} a strategic asset for any
              startup aiming to expand its footprint internationally.
            </Paragraph>
            <Pane
              display="flex"
              gap="10px"
              justifyContent="start"
              alignItems="center"
              // marginTop="50px"
            >
              <Image
                alt="avatar"
                src={require("../../../public/images/general/tunde.jpeg")}
                width="30"
                height="30"
                className="rounded-full"
              />
              <Pane
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="self-start"
              >
                <Text fontWeight="bold" color="black">
                  Tunde Adewole
                </Text>
                <Text fontSize={12} color="black" opacity={0.5}>
                  CEO, Bridgecard
                </Text>
              </Pane>
            </Pane>
          </Pane>
          <Pane
            borderRadius={15}
            background="white"
            padding={40}
            maxWidth={"400px"}
            minWidth={"320px"}
            flex={1}
            height={"450px"}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Paragraph fontSize={"16px"} color={"#000000"} fontWeight={500}>
              {"Graph's"} Simplified Global Payments solution has revolutionized
              the way we handle transactions at our startup. The integration
              process was remarkably smooth, and within no time, we were able to
              make global payments effortlessly. The user-friendly interface and
              simplified workflow have significantly reduced the time and effort
              spent on managing corporate spending. {"It's"} a game-changer for
              startups looking to streamline their financial operations.
            </Paragraph>
            <Pane
              display="flex"
              gap="10px"
              justifyContent="start"
              alignItems="center"
              // marginTop="50px"
            >
              <Image
                src={require("../../../public/images/general/tosin.jpeg")}
                alt="avatar"
                width="30"
                height="30"
                className="rounded-full"
              />
              <Pane
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="self-start"
              >
                <Text fontWeight="bold" color="black">
                  Tosin Onafuye
                </Text>
                <Text fontSize={12} color="black" opacity={0.5}>
                  CEO, Chowcentral
                </Text>
              </Pane>
            </Pane>
          </Pane>
          <Pane
            borderRadius={15}
            background="white"
            padding={40}
            maxWidth={"400px"}
            minWidth={"320px"}
            flex={1}
            height={"450px"}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Paragraph fontSize={"16px"} color={"#000000"} fontWeight={500}>
              One of the standout features of {"Graph's"} products is their
              exceptional customer support. As a startup, having a reliable
              support team is crucial, and Graph has exceeded our expectations.
              Their team is responsive, knowledgeable, and goes the extra mile
              to assist with any queries or issues. Knowing that we have
              dedicated support at our fingertips provides us with the
              confidence to fully leverage {"Graph's"} products for our global
              payments and corporate spending needs. Highly recommended!
            </Paragraph>
            <Pane
              display="flex"
              gap="10px"
              // justifyContent="start"
              alignItems="center"
              // marginTop="50px"
            >
              <Image
                alt="avatar"
                src={require("../../../public/images/general/emeka.jpg")}
                width="30"
                height="30"
                className="rounded-full"
              />
              <Pane
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="self-start"
              >
                <Text fontWeight="bold" color="black">
                  Emeka Nwune
                </Text>
                <Text fontSize={12} color="black" opacity={0.5}>
                  CEO, Swift Medics Healthcare
                </Text>
              </Pane>
            </Pane>
          </Pane>
        </Pane>
      </Pane>
    </div>
  );
};

export default WhyGraph;
