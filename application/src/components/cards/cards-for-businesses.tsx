import { Heading, Pane, Paragraph, Text } from "evergreen-ui";
import Image from "next/image";
import React from "react";

const CardsForBusinesses = () => {
  return (
    <Pane className="cards-for-businesses">
      <Pane>
        <h2 className=" text-[2.5rem] leading-[40px] font-semibold text-center text-black ">
          Corporate physical and virtual cards
        </h2>
        <h2 className="mb-[40px] text-[2.5rem] leading-[40px] font-semibold text-center text-black ">
          for startups and enterprises
        </h2>
      </Pane>
      <div className="flex my-[70px] px-4 sm:px-[50px] flex-wrap justify-center items-center gap-[10px] ">
        {dataToDisplay.map((data, index) => {
          return (
            <div
              key={index}
              className="rouned-xl bg-white py-[50px] px-[30px] w-[300px] sm:w-[250px] h-[380px] "
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
                <Heading size={800} fontWeight={600} marginY={20}>
                  {data.title}
                </Heading>
                <Text lineHeight="24px">{data.description}</Text>
              </Pane>
            </div>
          );
        })}
        <Pane></Pane>
      </div>
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
