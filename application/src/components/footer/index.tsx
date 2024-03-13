import { Pane, Text } from "evergreen-ui";
import React from "react";
import FooterWrapper from "./index.style";
import Image from "next/image";
import Link from "next/link";

import GraphLogo from "../../../public/images/graph-logo-full-white.svg";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="max-w-[1440px] mx-auto">
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
              alt="graph-logo svg"
              width={"180"}
              height={"60"}
              src={GraphLogo}
            />
            <p className="text-white text-sm mt-3">Finance OS for Businesses</p>
          </Pane>
          <div className="flex-[2] flex gap-x-10 min-w-[300px] ">
            <Pane flex={1}>
              <Pane display="flex" flexDirection="column" gap={30}>
                <p className="text-sm text-white font-semibold" color="white">
                  Products
                </p>
                <Link
                  href="/corporate-cards"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Text color="white">Corporate Cards</Text>
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
              <Pane
                display="flex"
                flexDirection="column"
                gap={30}
                marginTop={50}
              >
                <p className="text-sm text-white font-semibold" color="white">
                  Company
                </p>

                <Link
                  href="/about-us"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Text color="white">About</Text>
                </Link>

                <Link
                  href={"https://usegraph.medium.com/ "}
                  // href={"/blog"}
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Text color="white">Blog</Text>
                </Link>
              </Pane>
            </Pane>
            <Pane display="flex" flexDirection="column" gap={30} flex={1}>
              <p className="text-sm text-white font-semibold" color="white">
                Contact
              </p>

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
            <p className="text-sm text-white font-semibold" color="white">
              Address
            </p>
            <Text color="white">
              325 Front Street, Toronto, ON, Canada M5V 2Y1.
            </Text>
            <Text color="white">
              1007 N Orange St, 4th Floor Ste 1382, Wilmington, New Castle, DE,
              United States 19801.
            </Text>
          </div>
        </Pane>
        <div className="my-[60px] md:my-[30px] w-full flex justify-start md:justify-between flex-wrap">
          <p className="hidden md:block text-sm text-white md:w-[300px]">
            Graph is a financial technology company, and not a bank. Banking
            services are provided by {"Graph's"} partner banks.
          </p>

          <div className="flex gap-6 items-center md:items-start md:flex-col md:mr-[12px]">
            <Text color="white">Stay updated with us</Text>
            <Pane display="flex" gap={45}>
              <Link
                href="https://www.linkedin.com/company/usegraph/"
                target="_blank"
                className="hover:scale-105"
              >
                <Image
                  alt="linkedin"
                  src={"/images/general/linkedIn.svg"}
                  width={25}
                  height={25}
                />
              </Link>
              <Link
                href="https://www.instagram.com/usegraph/"
                target="_blank"
                className="hover:scale-105"
              >
                <Image
                  alt="instagram"
                  src={"/images/general/instagram.svg"}
                  width={25}
                  height={25}
                />
              </Link>
              <Link
                href="https://twitter.com/usegraph"
                target="_blank"
                className="hover:scale-105"
              >
                <Image
                  alt="twitter"
                  src={"/images/general/x.svg"}
                  width={25}
                  height={25}
                />
              </Link>
              <Link
                href="https://www.facebook.com/usegraph"
                target="_blank"
                className="hover:scale-105"
              >
                <Image
                  alt="facebook"
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
          <p className="block md:hidden my-3 text-sm text-white md:w-[300px] text-center ">
            Graph is a financial technology company, and not a bank. Banking
            services are provided by {"Graph's"} partner banks.
          </p>
          <p className="hidden md:block text-xs text-white">© 2024 Graph</p>
          <Pane display="flex" gap={20}>
            <Link
              href="https://drive.google.com/file/d/11KrnNbj5qnbsJImBhLytEbghGc8tCs3y/view"
              target="_blank"
              style={{
                textDecoration: "none",
              }}
            >
              <Text color="white" textDecoration="none">
                Terms of use
              </Text>
            </Link>
            <Link
              href="https://drive.google.com/file/d/1x69m717IP2P4WV880ULFQbrkewgguAQ8/view?usp=sharing"
              target="_blank"
              style={{
                textDecoration: "none",
              }}
            >
              <Text color="white" textDecoration="none">
                Privacy policy
              </Text>
            </Link>
            <Link
              href="https://drive.google.com/file/d/18G8IXLYU7tCApXI3My4qF1mPbkC9mThp/view?usp=sharing"
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
      </div>
    </FooterWrapper>
  );
};

export default Footer;
