import { Button, Heading, Pane, Paragraph, Text } from "evergreen-ui";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import MultiCurrencyHeroImg from "../../../public/images/general/multi-currency-hero-img.svg";

const Hero = () => {
  return (
    <>
      <Pane className="hero">
        <Pane className="hero-left">
          <div className="pr-5">
            <h2 className="text-black mb-4 lg:mb-8 text-[45px] md:text-[60px] font-semibold leading-[45px] md:leading-[60px] max-w-[400px] md:max-w-[700px] ">
              The best place to manage your operating cash
            </h2>

            <p className=" text-[14px] font-medium leading-[30px] max-w-[400px] text-black mt-[1.5rem] ">
              Manage payments and operate globally in any location with Multi
              Currency bank accounts and billing—supporting currencies such as
              USD, Canadian Dollar, Euro, Pound and more.
            </p>
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
                fontFamily={"Neue Haas Grotesk Display Pro"}
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
                fontFamily={"Neue Haas Grotesk Display Pro"}
              >
                <Link href={"/contact"}>Contact Sales</Link>
              </Button>
            </Pane>
          </div>

          <div className="gap-[10px] max-w-[210px] sm:max-w-[300px] lg:max-w-[400px] flex flex-wrap ">
            <p className="text-black text-sm lg:text-sm ">
              Graph is a financial technology company, not a bank . Banking
              services provided by Evolve Bank & Trust®; Members FDIC.
            </p>
          </div>
        </Pane>
        <Pane className="hero-right">
          <Image
            alt="hero image"
            width={"700"}
            height={"700"}
            src={MultiCurrencyHeroImg}
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
