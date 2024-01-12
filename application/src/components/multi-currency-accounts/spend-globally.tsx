import Colors from "@/theme/Colors";
import { Heading, Pane, Text } from "evergreen-ui";
import Image from "next/image";
import React from "react";

const SpendGlobally = () => {
  return (
    <Pane className="spend-globally">
      <Pane>
        <Heading
          fontSize="3rem"
          lineHeight={"50px"}
          fontWeight={600}
          textAlign="center"
          color="black"
          maxWidth={"800px"}
        >
          Spend globally, Operate Locally.
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
              backgroundColor={Colors.dark.secondary}
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
      </Pane>
    </Pane>
  );
};

export default SpendGlobally;

const dataToDisplay = [
  {
    icon: "world.png",
    title: "International Payment Simplified",
    description:
      "Enjoy the easiest and most flexible way to pay domestic and international vendors and suppliers in 90+ countries",
  },
  {
    icon: "bar-chart-icon.png",
    title: "Increased Scalability for Businesses",
    description:
      "Expand into new markets and quickly build trust and credibility and  make payments in local currency",
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
    description: "Pay suppliers and vendors instantly with ease.",
  },
];
