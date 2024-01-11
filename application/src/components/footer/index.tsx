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
        >
          <Image
            alt="graph-logo"
            src={require("../../../public/images/graph-logo-full-white.png")}
          />
          <Text color="white" fontSize={12}>
            Finance OS for Businesses
          </Text>
        </Pane>
        <Pane flex={1}>
          <Pane display="flex" flexDirection="column" gap={40}>
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
              href=""
              style={{
                textDecoration: "none",
              }}
            >
              <Text color="white">About</Text>
            </Link>
            <Link
              href=""
              style={{
                textDecoration: "none",
              }}
            >
              <Text color="white">Blog</Text>
            </Link>
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
        <Pane display="flex" flexDirection="column" gap={40} flex={2}>
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
        </Pane>
      </Pane>
      <Pane marginY={30} display="flex" justifyContent="space-between">
        <Paragraph color="white" width="300px">
          Graph is a financial technology company, and not a bank. Banking
          services are provided by {"Graph's"} partner banks.
        </Paragraph>

        <Pane>
          <Text color="white">Stay updated with us</Text>
          <Pane marginTop="20px" display="flex" gap={55}>
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
            <Link
              href=""
              // style={{
              //   position: "relative",
              //   height: "25px",
              // }}
              target="_blank"
            >
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
        </Pane>
      </Pane>
      <Pane
        marginY={30}
        display="flex"
        justifyContent="space-between"
        borderTop="1px solid #ffffff3d"
        paddingTop="20px"
      >
        <Text color="white">© 2024 Graph</Text>
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
      </Pane>
    </FooterWrapper>
  );
};

export default Footer;
