import {
  Button,
  Heading,
  Pane,
  Paragraph,
  Text,
  TickCircleIcon,
} from "evergreen-ui";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <>
      <Pane className="hero">
        <Pane className="hero-left">
          <Pane>
            <Heading
              marginY={4}
              marginTop={"100px"}
              fontSize="60px"
              lineHeight={"70px"}
              fontWeight={600}
              maxWidth="700px"
              color="white"
            >
              Business Cards,
            </Heading>
            <Heading
              marginY={4}
              marginTop={"100px"}
              fontSize="60px"
              lineHeight={"70px"}
              fontWeight={600}
              maxWidth="700px"
              color="white"
            >
              Simplified
            </Heading>
            <Paragraph
              color="white"
              marginTop="1.5rem"
              maxWidth="400px"
              fontWeight="400"
              lineHeight={"30px"}
              fontSize="17px"
              className="text-sm text-gray-500"
            >
              Issue cards to employees in seconds, control spend in one click,
              and make unlimited purchases.
            </Paragraph>
            <Pane marginY={50}>
              <Button
                type="submit"
                size="large"
                color="#000000"
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
              <Button
                className="cta-secondary"
                marginLeft={10}
                type="submit"
                size="large"
                color="white"
                background={"transparent"}
                borderRadius={10}
                fontSize={13}
                fontWeight={400}
                height={"auto"}
                paddingY={5}
                paddingX={35}
              >
                Contact Sales
              </Button>
            </Pane>
          </Pane>

          <Pane
            columnGap={20}
            rowGap={10}
            maxWidth={350}
            display="flex"
            flexWrap={"wrap"}
          >
            {keywords.map((keyword, i) => (
              <Pane
                key={i}
                width="fit-content"
                paddingX={8}
                paddingY={3}
                borderRadius={20}
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap="8px"
                border="1px solid white"
              >
                <TickCircleIcon color="#C0D7FF" />
                <Text color="white" fontSize="14px">
                  {keyword.title}
                </Text>
              </Pane>
            ))}
          </Pane>
        </Pane>
        <Pane className="hero-right">
          <Image
            alt="hero image"
            src={require("../../../public/images/general/hero_old.png")}
          />
        </Pane>
      </Pane>
    </>
  );
};

export default Hero;

const keywords = [
  {
    title: "Advertisement companies",
  },
  {
    title: "Startups",
  },
  {
    title: "Enterprises",
  },
  {
    title: "Retailers",
  },
];
