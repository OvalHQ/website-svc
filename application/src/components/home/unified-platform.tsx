import { Heading, Pane, Paragraph, Text } from "evergreen-ui";
import Image from "next/image";
import React from "react";

const UnifiedPlatform = () => {
  return (
    <Pane className="unified-platform">
      <Heading
        // marginBottom={50}
        fontSize="2.5rem"
        lineHeight={"40px"}
        fontWeight={700}
        textAlign="center"
        color="white"
      >
        All your spend in
      </Heading>
      <Heading
        // marginBottom={50}
        fontSize="2.5rem"
        lineHeight={"40px"}
        fontWeight={700}
        textAlign="center"
        color="white"
      >
        one unified platform.
      </Heading>
      <Paragraph color="white" opacity={0.6} marginTop="20px">
        All the tools you need to manage expenses proactively and empower teams
        with confidence.
      </Paragraph>
      <Pane className="grid-container">
        <Pane className="card">
          <Pane
            position="relative"
            height={50}
            width={50}
            className="rounded-circle"
          >
            <Image
              alt="icon"
              src={require("../../../public/images/general/stack.png")}
              width={30}
              height={30}
            />
          </Pane>
          <Pane>
            <Heading size={800} fontWeight={700} marginY={20} color="white">
              All-in-One Finance Platform
            </Heading>
            <Text lineHeight="24px" color="white">
              Simplify your financial ecosystem with Graph’s all-in-one finance
              platform. From corporate cards to global payouts, we provide a
              comprehensive suite of tools designed to meet the unique needs of
              startups, businesses, and enterprises.
            </Text>
          </Pane>
        </Pane>
        <Pane className="card">
          <Pane
            position="relative"
            height={50}
            width={50}
            className="rounded-circle"
          >
            <Image
              alt="icon"
              src={require("../../../public/images/general/card.png")}
              width={30}
              height={30}
            />
          </Pane>
          <Pane>
            <Heading size={800} fontWeight={700} marginY={20} color="white">
              Corporate Dollar Card
            </Heading>
            <Text lineHeight="24px" color="white">
              Streamline your financial operations with powerful virtual and
              physical VISA dollar cards.
            </Text>
          </Pane>
        </Pane>
        <Pane className="card">
          <Pane
            position="relative"
            height={50}
            width={50}
            className="rounded-circle"
          >
            <Image
              alt="icon"
              src={require("../../../public/images/general/institute.png")}
              width={30}
              height={30}
            />
          </Pane>
          <Pane>
            <Heading size={800} fontWeight={700} marginY={20} color="white">
              Business Bank Accounts
            </Heading>
            <Text lineHeight="24px" color="white">
              Experience cash management with insured and regulated bank
              accounts the way it should be exceptional and tailored just for
              you
            </Text>
          </Pane>
        </Pane>
        <Pane className=""></Pane>
        <Pane className="card">
          <Pane
            position="relative"
            height={50}
            width={50}
            className="rounded-circle"
          >
            <Image
              alt="icon"
              src={require("../../../public/images/general/home-world.png")}
              //   fill
              width={30}
              height={30}
            />
          </Pane>
          <Pane>
            <Heading size={800} fontWeight={700} marginY={20} color="white">
              Seamless Global Operations
            </Heading>
            <Text lineHeight="24px" color="white">
              Navigate the complexities of international finance effortlessly.
              Break free from borders, extend your financial reach, streamline
              international transactions, and empower your business to operate
              on a global scale.
            </Text>
          </Pane>
        </Pane>
        <Pane className="card">
          <Pane
            position="relative"
            height={50}
            width={50}
            className="rounded-circle"
          >
            <Image
              alt="icon"
              src={require("../../../public/images/general/home-trust.png")}
              //   fill
              width={30}
              height={30}
            />
          </Pane>
          <Pane>
            <Heading size={800} fontWeight={700} marginY={20} color="white">
              Compliance-First
            </Heading>
            <Text lineHeight="24px" color="white">
              Graph is built with security and regulatory compliance at its
              core. We ensure all business transactions adhere to the highest
              regulatory standards and are in line with global compliance
              requirements.
            </Text>
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
