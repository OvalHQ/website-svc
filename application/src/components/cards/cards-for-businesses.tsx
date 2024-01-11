import { Heading, Pane, Paragraph, Text } from "evergreen-ui";
import Image from "next/image";
import React from "react";

const CardsForBusinesses = () => {
  return (
    <Pane className="cards-for-businesses">
      <Pane>
        <Heading
          fontSize="3rem"
          lineHeight={"50px"}
          fontWeight={600}
          textAlign="center"
          color="black"
          maxWidth={"800px"}
          // marginY={30}
        >
          Corporate physical and virtual cards
        </Heading>
        <Heading
          fontSize="3rem"
          lineHeight={"50px"}
          fontWeight={600}
          textAlign="center"
          color="black"
          maxWidth={"800px"}
          // marginY={30}
        >
          for startups and enterprises
        </Heading>
      </Pane>
      <Pane
        marginY={70}
        paddingX={50}
        display="flex"
        justifyContent="center"
        alignItems="center"
        rowGap="10px"
        gap="20px"
        flexWrap="wrap"
      >
        {dataToDisplay.map((data, index) => {
          return (
            <Pane
              key={index}
              borderRadius={15}
              backgroundColor="white"
              paddingY="50px"
              paddingX="30px"
              width={250}
              height={"380px"}
            >
              <Pane
                position="relative"
                height={60}
                width={60}
                padding={10}
                display="flex"
                justifyContent="center"
                alignItems="center"
                borderRadius="50%"
                border="1px solid #2276FF40"
              >
                <Image
                  alt="icon"
                  src={require(`../../../public/images/general/${data.icon}`)}
                  style={{
                    maxWidth: "40px",
                    maxHeight: "40px",
                  }}
                  width={30}
                  height={30}
                />
              </Pane>
              <Pane>
                <Heading size={800} fontWeight={700} marginY={20}>
                  {data.title}
                </Heading>
                <Text lineHeight="24px">{data.description}</Text>
              </Pane>
            </Pane>
          );
        })}
        <Pane></Pane>
      </Pane>
    </Pane>
  );
};

export default CardsForBusinesses;

const dataToDisplay = [
  {
    icon: "world.png",
    title: "Worldwide Card Acceptance",
    description:
      "Physical and virtual cards issued on Visa worldwide network that works everywhere3DS security, PIN, fraud protection, and more onWorld Elite Visa cards",
  },
  {
    icon: "trust.png",
    title: "3DS Security",
    description: "PIN, fraud protection, and more on World Elite Visa cards.",
  },
  {
    icon: "phone.png",
    title: "24/7 Customer Support",
    description:
      "Call or chat live24/7 from anywhere, with notifications by Slack, text, email, WhatsApp — whatever you prefer",
  },
  {
    icon: "fast.png",
    title: "Lightning Fast Payment",
    description:
      "Make unlimited payment instantly and easily add to apple pay.",
  },
];
