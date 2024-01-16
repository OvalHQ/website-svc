"use client";

import {
  Button,
  CaretDownIcon,
  CrossIcon,
  MenuIcon,
  Pane,
  Paragraph,
  Text,
} from "evergreen-ui";
import React, { useState } from "react";
import NavbarWrapper from "./index.style";

import { AnimatePresence, motion } from "framer-motion";
import Colors from "@/theme/Colors";
import { LogoWithText } from "../primitives/logo";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [openedId, setOpenedId] = useState(-1);
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <NavbarWrapper>
      <div
        className={` ${
          menuOpened ? "top-0 fixed z-50" : "static"
        }  sm:bg-white py-8 sm:py-[10px] px-10 sm:px-[40px] md:px-[80px] h-[75px] w-full flex items-center justify-between`}
      >
        <Link href={"/"}>
          <LogoWithText alt="Graph logo" height={40} />
        </Link>

        <div className=" hidden sm:flex justify-center items-center gap-[35px]">
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
              <p className="text-black text-sm font-medium">Products</p>
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
                    href="/cards"
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
                    href="/multi-currency-accounts"
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
              <p className="text-black text-sm font-medium">Company</p>
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
                    href="/about-us"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <Text marginY={7}>About Us</Text>
                  </Link>

                  <Text
                    style={{
                      textDecoration: "none",
                      cursor: "not-allowed"
                    }}
                    opacity="0.5"
                  >
                    <Text marginY={7}>Blog</Text>
                  </Text>
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
              <p className="text-black text-sm font-medium">Support</p>
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
                    href="/contact"
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
        </div>
        <div className=" hidden sm:flex justify-center items-center gap-[15px]">
          <Link href="">
            <p className="text-black text-sm font-medium">Log in</p>
          </Link>
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
        </div>
        <div
          className="block sm:hidden text-black cursor-pointer hover:scale-125 ml-auto "
          onClick={() => {
            setMenuOpened((prev) => !prev);
          }}
        >
          {!menuOpened ? <MenuIcon size={24} /> : <CrossIcon size={24} />}
        </div>

        <AnimatePresence initial={false}>
          {menuOpened && (
            <motion.div
              key="content"
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: {
                  opacity: 1,
                  height: "calc(100vh-5rem)",
                  background: "#E2FDFF",
                },
                collapsed: { opacity: 0, height: 0 },
              }}
              transition={{ duration: 0.2 }}
              // className=""
            >
              <div
                className={`fixed left-0 right-0 top-20 z-10 bg-[#E2FDFF] h-[calc(100vh-5rem)] w-full py-4 pb-12 px-12 flex flex-col gap-2 justify-between `}
              >
                <div>
                  <h3 className="font-bold text-black mb-3">Products</h3>
                  <div className="rounded-xl bg-white p-4 flex flex-col justify-start items-start gap-7">
                    <h3 className="font-bold text-black">Business Banking</h3>

                    <Link
                      href="/cards"
                      style={{
                        textDecoration: "none",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "15px",
                      }}
                    >
                      <Image
                        width={20}
                        height={20}
                        alt="card icon"
                        src={"/images/general/card-icon.svg"}
                      />
                      <p className="text-black font-normal">Cards</p>
                    </Link>

                    <Link
                      href="/multi-currency-accounts"
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
                      <p className="text-black font-normal">
                        Multi-currency Accounts
                      </p>
                    </Link>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-black mb-3">Company</h3>
                  <div className="rounded-xl bg-white p-4 flex flex-col justify-start items-start gap-7">
                    <Link
                      href="/about-us"
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      <p className="text-black font-normal">About Us</p>
                    </Link>

                    <Text
                      style={{
                        textDecoration: "none",
                        cursor: "not-allowed"
                      }}
                    >
                      <p className="text-black font-normal cursor-not-allowed">Blog</p>
                    </Text>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-black mb-3">Support</h3>
                  <div className="rounded-xl bg-white p-4 flex flex-col justify-start items-start gap-7">
                    <Link
                      href="/"
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      <p className="text-black font-normal">Contact Us</p>
                    </Link>

                    <Link
                      href="/"
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      <p className="text-black font-normal">FAQs</p>
                    </Link>
                  </div>
                </div>

                <button className="rounded-xl py-3 w-full block mt-auto text-xs font-extralight bg-[#2276FF] hover:opacity-80 ">
                  Create an account
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
