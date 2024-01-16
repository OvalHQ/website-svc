import { Button, Heading, Pane, Paragraph, Text } from "evergreen-ui";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Hero = () => {
  const router = useRouter();
  return (
    <>
      <Pane className="hero">
        <Pane className="hero-left">
          <Pane>
            <h2 className="my-4 mt-5 lg:mt-20 text-[60px] text-w text-black font-semibold leading-[40px] md:leading-[70px] max-w-[400px] md:max-w-[700px] ">
              Cash management and corporate spending platform
            </h2>
            <p className=" text-[17px] leading-[30px] max-w-[400px] text-black mt-[1.5rem] ">
              Experience seamless access to corporate cards, multi-currency
              accounts, and global payouts, all in one account.
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
                onClick={() => router.push("/contact")}
              >
                Contact Sales
              </Button>
            </Pane>
          </Pane>

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
            src={require("../../../public/images/general/home-hero.png")}
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
