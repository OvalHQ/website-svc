import Colors from "@/theme/Colors";
import { Heading, Pane, Text } from "evergreen-ui";
import Image from "next/image";
import React from "react";

const SpendGlobally = () => {
  return (
    <Pane className="spend-globally">
      <Pane>
        <h2 className=" text-[2.5rem] leading-[40px] font-semibold text-center text-black ">
          Spend globally, Operate Locally.
        </h2>
      </Pane>

      <Pane className="flex my-[70px] px-4 sm:px-[50px] flex-wrap justify-center items-center gap-[30px] ">
        {dataToDisplay.map((data, index) => {
          return (
            <div
              key={index}
              className="rouned-2xl bg-[#E2FDFF] py-[50px] px-[30px] w-[300px] sm:w-[250px] h-[320px] sm:h-[380px] "
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
                marginBottom={10}
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
                <Heading size={800} fontWeight={600} marginY={20}>
                  {data.title}
                </Heading>
                <Text lineHeight="24px">{data.description}</Text>
              </Pane>
            </div>
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
