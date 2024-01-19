"use client";

import {
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
import { LogoWithText, LogoWithTextWhite } from "../primitives/logo";
import Link from "next/link";
import Image from "next/image";

import CaretIcon from "../../../public/images/general/caret-down.svg";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [openedId, setOpenedId] = useState(-1);
  const [menuOpened, setMenuOpened] = useState(false);
  const pathname = usePathname();

  return (
    <NavbarWrapper>
      <div
        className={` ${
          menuOpened
            ? "top-0 fixed z-[100] h-20 bg-[#e2fdff] transition-colors"
            : "static z-[1]"
        }   sm:bg-white py-8 sm:py-[10px] px-10 sm:px-[40px] md:px-[80px] w-full flex items-center justify-between`}
      >
        <Link href={"/"}>
          {pathname === "/cards" && !menuOpened ? (
            <LogoWithTextWhite alt="Graph logo" height={30} width={195} />
          ) : (
            <LogoWithText alt="Graph logo" height={30} width={195} />
          )}
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
              alignItems="end"
              gap="3px"
            >
              <p className="text-black text-sm font-medium">Products</p>
              <Image
                alt="caret down icon"
                width={15}
                height={15}
                src={CaretIcon}
                className="text-[#2276FF] mb-[4px]"
              />
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
              alignItems="end"
              gap="3px"
            >
              <p className="text-black text-sm font-medium">Company</p>
              <Image
                alt="caret down icon"
                width={15}
                height={15}
                src={CaretIcon}
                className="text-[#2276FF] mb-[4px]"
              />
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

                  <Link
                    href={"https://usegraph.medium.com/ "}
                    style={{
                      textDecoration: "none",
                      marginTop: "7px",
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
              alignItems="end"
              gap="3px"
            >
              <p className="text-black text-sm font-medium">Support</p>
              <Image
                alt="caret down icon"
                width={15}
                height={15}
                src={CaretIcon}
                className="text-[#2276FF] mb-[4px]"
              />
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
          <Link href="https://dashboard.useoval.com/login">
            <p className="text-black w-[40px] text-sm font-medium">Log in</p>
          </Link>
          <Link href="/contact">
            <button className="rounded-xl py-4 px-5 w-full block mt-auto text-xs font-light bg-[#2276FF] hover:opacity-80 text-white">
              Create an account
            </button>
          </Link>
        </div>
        <div
          className={`block sm:hidden ${
            pathname === "/cards" && !menuOpened ? "text-white" : "text-black"
          }  cursor-pointer hover:scale-125 ml-auto  `}
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
                  height: "calc(100vh-3rem)",
                  background: "#E2FDFF",
                },
                collapsed: { opacity: 0, height: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              <div
                className={`fixed z-100 left-0 right-0 top-20 z-10 bg-[#E2FDFF] h-[calc(100vh-3rem)] w-full py-4 pb-12 px-12 flex flex-col gap-2 justify-around `}
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

                    <Link
                      href={"https://usegraph.medium.com/ "}
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      <p className="text-black font-normal cursor-not-allowed">
                        Blog
                      </p>
                    </Link>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-black mb-3">Support</h3>
                  <div className="rounded-xl bg-white p-4 flex flex-col justify-start items-start gap-7">
                    <Link
                      href="/contact"
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      <p className="text-black font-normal">Contact Us</p>
                    </Link>

                    <Link
                      href="/#faqs"
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      <p className="text-black font-normal">FAQs</p>
                    </Link>
                  </div>
                </div>

                <Link href="/contact">
                  <button className="rounded-xl py-3 w-full block mt-auto text-xs font-extralight bg-[#2276FF] hover:opacity-80 text-white">
                    Create an account
                  </button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
