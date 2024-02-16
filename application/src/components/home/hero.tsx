import { Button, Pane } from "evergreen-ui";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import HeroImg from "../../../public/images/general/home-hero.svg";

const Hero = () => {
  const router = useRouter();
  return (
    <Pane className="layout">
      <Pane className="hero">
        <Pane className="hero-left">
          <div className="ml-auto  lg:w-[680px]">
            <Pane>
              <h1 className="my-4 mt-5 lg:mt-20 text-[40px] sm:text-[70px] text-black font-semibold leading-[40px] md:leading-[80px] max-w-[400px] md:max-w-[700px]">
                Cash management and corporate spending platform
              </h1>
              <p className=" text-[18px] leading-[30px] max-w-[450px] font-medium text-black mt-[1.5rem] ">
                Experience seamless access to corporate cards, multi-currency
                accounts, and global payouts, all in one account.
              </p>
              <Pane marginY={50}>
                <Link href={"https://dashboard.useoval.com/signup"} passHref>
                  <Button
                    className="cta-primary"
                    type="submit"
                    size="large"
                    color="#ffffff"
                    background="black"
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
                  className="cta"
                  marginLeft={10}
                  type="submit"
                  size="large"
                  color="black"
                  background={"transparent"}
                  borderColor={"black"}
                  borderRadius={10}
                  fontSize={15}
                  fontWeight={500}
                  height={"auto"}
                  paddingY={5}
                  paddingX={35}
                  fontFamily={"Neue Haas Grotesk Display Pro"}
                  onClick={() => router.push("/contact")}
                >
                  Contact Sales
                </Button>
              </Pane>
            </Pane>
            <div className="gap-[10px] max-w-[210px] sm:max-w-[300px] lg:max-w-[400px] flex flex-wrap ">
              <p className="text-black text-sm lg:text-[14px] ">
                Graph is a financial technology company, not a bank . Banking
                services provided by Evolve Bank & Trust®; Members FDIC.
              </p>
            </div>
          </div>
        </Pane>
        <Pane className="hero-right">
          <Image
            alt="hero image"
            width="900"
            height="900"
            className="ml-auto"
            src={HeroImg}
          />
        </Pane>
      </Pane>
    </Pane>
  );
};

export default Hero;
