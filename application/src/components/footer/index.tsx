import { Pane, Paragraph, Text } from "evergreen-ui";
import React from "react";
import FooterWrapper from "./index.style";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <FooterWrapper>
      <Pane className="footer-top">
        <Pane
          display="flex"
          flexDirection="column"
          gap={5}
          flex={2}
          flexWrap="wrap"
          minWidth="160px"
        >
          <Image
            alt="graph-logo"
            src={require("../../../public/images/graph-logo-full-white.png")}
          />
          <p className="text-white text-sm md:mt-5">Finance OS for Businesses</p>
        </Pane>
        <div className="flex-[2] flex gap-x-8 min-w-[300px] ">
          <Pane flex={1}>
            <Pane display="flex" flexDirection="column" gap={50}>
              <Paragraph fontWeight={"bold"} color="white">
                Products
              </Paragraph>
              <Link
                href="/cards"
                style={{
                  textDecoration: "none",
                }}
              >
                <Text color="white">Cards</Text>
              </Link>
              <Link
                href="/multi-currency-accounts"
                style={{
                  textDecoration: "none",
                }}
              >
                <Text color="white">Multi-Currency Accounts</Text>
              </Link>
            </Pane>
            <Pane display="flex" flexDirection="column" gap={40} marginTop={50}>
              <Paragraph fontWeight={"bold"} color="white">
                Company
              </Paragraph>

              <Link
                href="/about-us"
                style={{
                  textDecoration: "none",
                }}
              >
                <Text color="white">About</Text>
              </Link>
              <Text
                style={{
                  textDecoration: "none",
                  cursor: "not-allowed",
                  opacity: ".5"
                }}
              >
                <Text color="white">Blog</Text>
              </Text>
            </Pane>
          </Pane>
          <Pane display="flex" flexDirection="column" gap={40} flex={1}>
            <Paragraph fontWeight={"bold"} color="white">
              Contact
            </Paragraph>

            <Link
              href="mailto:info@usegraph.co"
              style={{
                textDecoration: "none",
              }}
            >
              <Text color="white">info@usegraph.co</Text>
            </Link>
            <Link
              href="mailto:support@usegraph.co"
              style={{
                textDecoration: "none",
              }}
            >
              <Text color="white">support@usegraph.co</Text>
            </Link>
            <Link
              href="mailto:legal@usegraph.co"
              style={{
                textDecoration: "none",
              }}
            >
              <Text color="white">legal@usegraph.co</Text>
            </Link>
            <Link
              href="/#faqs"
              style={{
                textDecoration: "none",
              }}
            >
              <Text color="white">FAQs</Text>
            </Link>
          </Pane>
        </div>
        <div className="flex flex-col gap-[40px] flex-[2] min-w-[200px]">
          <Paragraph fontWeight={"bold"} color="white">
            Address
          </Paragraph>
          <Text color="white">
            325 Front Street, Toronto, ON, Canada M5V 2Y1.
          </Text>
          <Text color="white">
            1007 N Orange St, 4th Floor Ste 1382, Wilmington, New Castle, DE,
            United States 19801.
          </Text>
        </div>
      </Pane>
      <div className="my-[80px] md:my-[30px] w-full flex justify-start md:justify-between flex-wrap">
        <p className="hidden md:block text-sm md:text-white md:w-[300px]">
          Graph is a financial technology company, and not a bank. Banking
          services are provided by {"Graph's"} partner banks.
        </p>

        <div className="flex gap-6 items-center md:items-start md:flex-col">
          <Text color="white">Stay updated with us</Text>
          <Pane display="flex" gap={55}>
            <Link
              href="https://www.linkedin.com/company/rapidpay-africa/"
              target="_blank"
            >
              <Image
                alt="linkedin"
                src={"/images/general/linkedIn.svg"}
                width={25}
                height={25}
              />
            </Link>
            <Link href="" target="_blank">
              <Image
                alt="linkedin"
                src={"/images/general/instagram.svg"}
                width={25}
                height={25}
              />
            </Link>
            <Link href="https://twitter.com/usegraph" target="_blank">
              <Image
                alt="linkedin"
                src={"/images/general/x.svg"}
                width={25}
                height={25}
              />
            </Link>
            <Link href="" target="_blank">
              <Image
                alt="linkedin"
                src={"/images/general/facebook.svg"}
                width={25}
                height={25}
                style={{
                  height: "25px",
                }}
                // fill
              />
            </Link>
          </Pane>
        </div>
      </div>
      <div className="my-[30px] w-full flex gap-y-4 flex-col md:flex-row items-center justify-between pt-[20px] border-t border-[#ffffff3d] ">
        <p className="block md:hidden my-3 text-sm md:text-white md:w-[300px] text-center ">
          Graph is a financial technology company, and not a bank. Banking
          services are provided by {"Graph's"} partner banks.
        </p>
        <p className="hidden md:block text-xs text-white">© 2024 Graph</p>
        <Pane display="flex" gap={20}>
          <Link
            href=""
            style={{
              textDecoration: "none",
            }}
          >
            <Text color="white" textDecoration="none">
              Terms of use
            </Text>
          </Link>
          <Link
            href=""
            style={{
              textDecoration: "none",
            }}
          >
            <Text color="white" textDecoration="none">
              Privacy policy
            </Text>
          </Link>
          <Link
            href=""
            style={{
              textDecoration: "none",
            }}
          >
            <Text color="white" textDecoration="none">
              AML policy
            </Text>
          </Link>
        </Pane>

        <p className="block md:hidden text-xs text-white">© 2024 Graph</p>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
