import { Button, Heading, Pane, Paragraph, Text } from "evergreen-ui";
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
              maxWidth="500px"
              color="black"
              className="text-sm text-gray-500"
            >
              The best place to manage your operating cash
            </Heading>
            <Paragraph
              marginTop="1.5rem"
              maxWidth="400px"
              fontWeight="400"
              color="black"
              lineHeight={"30px"}
              fontSize="17px"
              className="text-sm text-gray-500"
            >
              Manage payments and operate globally in any location with Multi
              Currency bank accounts and billing—supporting currencies such as
              USD, Canadian Dollar, Euro, Pound and more.
            </Paragraph>
            <Pane marginY={50}>
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
                className="cta"
                marginLeft={10}
                type="submit"
                size="large"
                color="black"
                background={"transparent"}
                borderColor={"black"}
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

          <Pane gap={10} maxWidth={400} display="flex" flexWrap={"wrap"}>
            <Text>
              Graph is a financial technology company, not a bank . Banking
              services provided by Partner’s Banks.
            </Text>
          </Pane>
        </Pane>
        <Pane className="hero-right">
          <Image
            alt="hero image"
            src={require("../../../public/images/general/multi-currency-hero-img.png")}
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
