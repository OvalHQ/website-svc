import { Pane } from "evergreen-ui";
import Image from "next/image";
import React from "react";

import WorldIcon from "../../../public/images/general/world.svg";
import BarChartIcon from "../../../public/images/general/bar-chart-icon.svg";
import FastIcon from "../../../public/images/general/fast.svg";
import PhoneIcon from "../../../public/images/general/phone.svg";

const SpendGlobally = () => {
  return (
    <Pane className="spend-globally">
      <Pane>
        <h2 className=" text-[50px] leading-[40px] font-semibold text-center text-black ">
          Spend globally, Operate Locally.
        </h2>
      </Pane>

      <Pane className="flex my-[70px] px-4 sm:px-[50px] flex-wrap justify-center items-center gap-[30px] ">
        {dataToDisplay.map((data, index) => {
          return (
            <div
              key={index}
              className="rouned-2xl bg-[#E2FDFF] py-[50px] px-[25px] w-[300px] sm:w-[250px] h-[320px] sm:h-[380px] "
              style={{
                background:
                  "linear-gradient(132.73deg, rgba(226, 253, 255, 0.9) 12.88%, rgba(226, 253, 255, 0) 163.96%),linear-gradient(133.84deg, rgba(226, 253, 255, 0.25) 14.05%, rgba(226, 253, 255, 0) 115.45%)",
              }}
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
                  src={data.icon}
                  style={{
                    maxWidth: "40px",
                    maxHeight: "40px",
                  }}
                  width={30}
                  height={30}
                />
              </Pane>
              <Pane>
                <h2 className="font-semibold my-[20px] text-black text-[30px] leading-[30px]">
                  {data.title}
                </h2>
                <p className="text-[16px] text-black opacity-80 ">
                  {data.description}
                </p>
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
    icon: WorldIcon,
    title: "International Payment Simplified",
    description:
      "Enjoy the easiest and most flexible way to pay domestic and international vendors and suppliers in 90+ countries",
  },
  {
    icon: BarChartIcon,
    title: "Increased Scalability for Businesses",
    description:
      "Expand into new markets and quickly build trust and credibility and  make payments in local currency",
  },
  {
    icon: PhoneIcon,
    title: "24/7 Customer Support",
    description:
      "Call or chat live24/7 from anywhere, with notifications by Slack, text, email, WhatsApp — whatever you prefer",
  },
  {
    icon: FastIcon,
    title: "Lightning Fast Payment",
    description: "Pay suppliers and vendors instantly with ease.",
  },
];
