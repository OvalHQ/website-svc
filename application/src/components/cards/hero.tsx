import { Button, Pane, Text, TickCircleIcon } from "evergreen-ui";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeroImg from "../../../public/images/general/hero.svg";

const Hero = () => {
  return (
    <>
      <Pane className="layout">
        <Pane className="hero">
          <Pane className="hero-left">
            {/* <div className="ml-auto"> */}
            <Pane>
              <h2 className="text-white mt-8 lg:mt-8 text-[60px] font-semibold leading-[40px] md:leading-[70px] max-w-[400px] md:max-w-[700px] ">
                Business Cards,
              </h2>
              <h2 className="text-white mb-5 lg:mb-8 text-[60px] font-semibold leading-[40px] md:leading-[70px] max-w-[400px] md:max-w-[700px] ">
                Simplified
              </h2>

              <p className=" text-[16px] leading-[30px] max-w-[400px] text-white mt-[1.5rem] ">
                Issue cards to employees in seconds, control spend in one click,
                and make unlimited purchases.
              </p>

              <div className="mt-[50px] sm:mt-[30px] mb-[70px] sm:mb-[120px]">
                <Link href={"https://dashboard.useoval.com/signup"} passHref>
                  <Button
                    type="submit"
                    size="large"
                    color="#000000"
                    borderRadius={10}
                    fontSize={15}
                    fontWeight={500}
                    height={"auto"}
                    paddingY={5}
                    paddingX={35}
                    fontFamily={"Neue Haas Grotesk Display Pro"}
                  >
                    Get Started
                  </Button>
                </Link>
                <Button
                  className="cta-secondary"
                  marginLeft={10}
                  type="submit"
                  size="large"
                  color="white"
                  background={"transparent"}
                  borderRadius={10}
                  fontSize={15}
                  fontWeight={500}
                  height={"auto"}
                  paddingY={5}
                  paddingX={35}
                  fontFamily={"Neue Haas Grotesk Display Pro"}
                >
                  <Link href={"/contact"}>Contact Sales</Link>
                </Button>
              </div>
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
            {/* </div> */}
          </Pane>
          <Pane className="hero-right">
            <Image
              alt="hero image"
              width={"900"}
              height={"900"}
              src={HeroImg}
              className="ml-auto"
            />
          </Pane>
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
