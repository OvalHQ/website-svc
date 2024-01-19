import { Heading, Pane, Paragraph, Text } from "evergreen-ui";
import Image from "next/image";
import React from "react";

import StackIcon from "../../../public/images/general/stack.svg";
import InstituteIcon from "../../../public/images/general/institute.svg";
import CardIcon from "../../../public/images/general/card.svg";
import HomeWorldIcon from "../../../public/images/general/home-world.svg";
import HomeTrustIcon from "../../../public/images/general/home-trust.svg";

const UnifiedPlatform = () => {
  return (
    <Pane className="unified-platform">
      <Heading
        // marginBottom={50}
        fontSize="60px"
        lineHeight={"60px"}
        fontWeight={600}
        textAlign="center"
        color="white"
      >
        All your spend in
      </Heading>
      <Heading
        // marginBottom={50}
        fontSize="60px"
        lineHeight={"60px"}
        fontWeight={600}
        textAlign="center"
        color="white"
      >
        one unified platform.
      </Heading>
      <p className="text-white opacity-60 mt-[20px] my-14 text-center">
        All the tools you need to manage expenses proactively and empower teams
        with confidence.
      </p>
      <Pane className="grid-container">
        <Pane className="card">
          <Pane
            position="relative"
            height={60}
            width={60}
            className="rounded-circle"
          >
            <Image alt="icon" src={StackIcon} width={30} height={30} />
          </Pane>
          <Pane>
            <h3 className="font-semibold mt-[20px] text-white text-3xl">
              All-in-One
            </h3>
            <h3 className="font-semibold mb-[20px] text-white text-3xl">
              Finance Platform
            </h3>
            <p className="leading-[24px] text-white opacity-75 text-[17px] font-[400]">
              Simplify your financial ecosystem with Graph’s all-in-one finance
              platform. From corporate cards to global payouts, we provide a
              comprehensive suite of tools designed to meet the unique needs of
              startups, businesses, and enterprises.
            </p>
          </Pane>
        </Pane>
        <Pane className="card">
          <Pane
            position="relative"
            height={60}
            width={60}
            className="rounded-circle"
          >
            <Image alt="icon" src={CardIcon} width={30} height={30} />
          </Pane>
          <Pane>
            <h3 className="font-semibold mt-[20px] text-white text-3xl">
              Corporate
            </h3>
            <h3 className="font-semibold mb-[20px] text-white text-3xl">
              Dollar Card
            </h3>
            <p className="leading-[24px] text-white opacity-75 text-[17px] font-[400]">
              Streamline your financial operations with powerful virtual and
              physical VISA dollar cards.
            </p>
          </Pane>
        </Pane>
        <Pane className="card">
          <div className="relative h-[60px] w-[60px] rounded-circle flex justify-center items-center ">
            <Image alt="icon" src={InstituteIcon} width={30} height={28} />
          </div>
          <Pane>
            <h3 className="font-semibold mt-[20px] text-white text-3xl">
              Business
            </h3>
            <h3 className="font-semibold mb-[20px] text-white text-3xl">
              Bank Accounts
            </h3>
            <p className="leading-[24px] text-white opacity-75 text-[17px] font-[400]">
              Experience cash management with insured and regulated bank
              accounts the way it should be exceptional and tailored just for
              you
            </p>
          </Pane>
        </Pane>
        <Pane className=""></Pane>
        <Pane className="card">
          <Pane
            position="relative"
            height={60}
            width={60}
            className="rounded-circle"
          >
            <Image
              alt="icon"
              src={HomeWorldIcon}
              //   fill
              width={30}
              height={30}
            />
          </Pane>
          <Pane>
            <h3 className="font-semibold my-[20px] text-white text-3xl">
              Seamless Global Operations
            </h3>
            <p className="leading-[24px] text-white opacity-75 text-[17px] font-[400]">
              Navigate the complexities of international finance effortlessly.
              Break free from borders, extend your financial reach, streamline
              international transactions, and empower your business to operate
              on a global scale.
            </p>
          </Pane>
        </Pane>
        <Pane className="card">
          <Pane
            position="relative"
            height={60}
            width={60}
            className="rounded-circle"
          >
            <Image
              alt="icon"
              src={HomeTrustIcon}
              //   fill
              width={30}
              height={30}
            />
          </Pane>
          <Pane>
            <h3 className="font-semibold my-[20px] text-white text-3xl">
              Compliance-First
            </h3>
            <p className="leading-[24px] text-white opacity-75 text-[17px] font-[400]">
              Graph is built with security and regulatory compliance at its
              core. We ensure all business transactions adhere to the highest
              regulatory standards and are in line with global compliance
              requirements.
            </p>
          </Pane>
        </Pane>
      </Pane>
      <Pane position="absolute" bottom={-1} left={0} zIndex={1}>
        <Image
          alt="background-layer"
          src={require("../../../public/images/general/unified-platform-background-layer.png")}
        />
      </Pane>
    </Pane>
  );
};

export default UnifiedPlatform;
