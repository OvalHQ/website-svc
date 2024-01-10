"use client";

import { Button, CaretDownIcon, Pane, Paragraph, Text } from "evergreen-ui";
import React, { useState } from "react";
import NavbarWrapper from "./index.style";

import { AnimatePresence, motion } from "framer-motion";
import Colors from "@/theme/Colors";
import { LogoWithText } from "../primitives/logo";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [openedId, setOpenedId] = useState(-1);

  return (
    <NavbarWrapper>
      <Pane
        background="white"
        paddingY={10}
        paddingX={80}
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <LogoWithText alt="Graph logo" height={24} />

        <Pane
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap="35px"
        >
          <Pane
            position="relative"
            onMouseEnter={() => setOpenedId(0)}
            onMouseLeave={() => setOpenedId(-1)}
            cursor="pointer"
          >
            <Pane
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap="1px"
            >
              <Text>Products</Text>
              <CaretDownIcon color={Colors.dark.primary} />
            </Pane>

            <AnimatePresence initial={false}>
              {openedId === 0 && (
                <motion.div
                  key="content"
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: {
                      opacity: 1,
                      height: "auto",
                    },
                    collapsed: { opacity: 0, height: 0 },
                  }}
                  transition={{ duration: 0.2 }}
                  className="navbar-item-submenu"
                >
                  <Paragraph
                    fontWeight="bold"
                    marginBottom={30}
                    fontSize={"14px"}
                  >
                    Business Banking
                  </Paragraph>
                  <Link
                    href=""
                    style={{
                      textDecoration: "none",
                      display: "flex",
                      justifyContent: "center",
                      gap: "15px",
                    }}
                  >
                    <Image
                      width={20}
                      height={20}
                      alt="card icon"
                      src={"/images/general/card-icon.svg"}
                    />
                    <Text>Cards</Text>
                  </Link>

                  <Link
                    href=""
                    style={{
                      textDecoration: "none",
                      display: "flex",
                      justifyContent: "center",
                      gap: "15px",
                    }}
                  >
                    <Image
                      width={20}
                      height={20}
                      alt="card icon"
                      src={"/images/general/multi-currency-icon.svg"}
                    />
                    <Text>Multi-currency Accounts</Text>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </Pane>
          <Pane
            position="relative"
            onMouseEnter={() => setOpenedId(1)}
            onMouseLeave={() => setOpenedId(-1)}
            cursor="pointer"
          >
            <Pane
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap="1px"
            >
              <Text>Company</Text>
              <CaretDownIcon color={Colors.dark.primary} />
            </Pane>

            <AnimatePresence initial={false}>
              {openedId === 1 && (
                <motion.div
                  key="content"
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { opacity: 1, height: "auto" },
                    collapsed: { opacity: 0, height: 0 },
                  }}
                  transition={{ duration: 0.2 }}
                  className="navbar-item-submenu"
                >
                  <Link
                    href=""
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <Text marginY={7}>About Us</Text>
                  </Link>

                  <Link
                    href=""
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <Text marginY={7}>Blog</Text>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </Pane>
          <Pane
            position="relative"
            onMouseEnter={() => setOpenedId(2)}
            onMouseLeave={() => setOpenedId(-1)}
            cursor="pointer"
          >
            <Pane
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap="1px"
            >
              <Text>Support</Text>
              <CaretDownIcon color={Colors.dark.primary} />
            </Pane>

            <AnimatePresence initial={false}>
              {openedId === 2 && (
                <motion.div
                  key="content"
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { opacity: 1, height: "auto" },
                    collapsed: { opacity: 0, height: 0 },
                  }}
                  transition={{ duration: 0.2 }}
                  className="navbar-item-submenu"
                >
                  <Link
                    href=""
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <Text marginY={7}>Contact Us</Text>
                  </Link>

                  <Link
                    href="/#faqs"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <Text marginY={7}>FAQs</Text>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </Pane>
        </Pane>
        <Pane display="flex" alignItems="center" gap="15px">
          <Text marginRight={10}>Log In</Text>
          <Button
            type="submit"
            size="large"
            appearance="primary"
            background={Colors.dark.primary}
            borderRadius={10}
            fontSize={13}
            fontWeight={400}
          >
            Create an account
          </Button>
        </Pane>
      </Pane>
    </NavbarWrapper>
  );
};

export default Navbar;
