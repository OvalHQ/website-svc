"use client";

import MainLayout from "@/components/layout/main";
import { Pane } from "evergreen-ui";
import Image from "next/image";
import PatternBG from "../../../../public/images/general/pattern-bg-blue.svg";
import Link from "next/link";
import SimplifyOperations from "@/components/home/simplify-operations";

const LegalScreen = () => {
  return (
    <MainLayout>
      <div>
        <div className="h-[80px] sm:hidden w-full"></div>
        <div className="relative h-[430px] md:p-[50px] md:py-[110px] py-12 rounded-2xl bg-[#E2FDFF] flex flex-col justify-center items-center w-full overflow-y-hidden">
          <h1 className="mt-6 font-semibold text-[40px] md:text-[70px] text-center">
            Legal Disclosures
          </h1>
          <p className="opacity-60 text-center max-w-[600px] px-6 sm:px-0">
            These set out the terms and conditions that govern the use of our
            platform, as well as any other partner parties and platforms.{" "}
          </p>
          <div className="absolute left-0 z-[1] h-[100%] ">
            <Image
              style={{
                transform: "scaleX(-1)",
                height: "100%",
              }}
              alt="background-layer"
              src={PatternBG}
            />
          </div>
          <Pane position="absolute" right={0} zIndex={1}>
            <Image
              style={{
                height: "100%",
              }}
              alt="background-layer"
              src={PatternBG}
              className=" hidden md:block"
            />
          </Pane>
        </div>
      </div>
      <div className="w-full block mx-auto max-w-[1440px] px-8 md:px-16 py-16 md:py-[120px]">
        {/* <p className="my-6 text-[30px] font-semibold"> Available disclosures</p> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-7 gap-x-5">
          <div>
            <Link
              target="__blank"
              href={
                "https://drive.google.com/file/d/1MnU7Sx7jKeRwq3lqHZP-7mBOn5ytVsFB/view"
              }
              className="underline hover:opacity-80 hover:no-underline transition-all duration-75 "
            >
              Business Account Agreement
            </Link>
          </div>
          <div>
            <Link
              target="__blank"
              href={
                "https://drive.google.com/file/d/1LX-c_pbb83uMbAgAA5SYPgM7p1GQzP9F/view"
              }
              className="underline hover:opacity-80 hover:no-underline transition-all duration-75 "
            >
              E-sign Consent and Electronic Communications Agreement
            </Link>
          </div>
          <div>
            <Link
              target="__blank"
              href={
                "https://drive.google.com/file/d/1EXEBkFvjb_p4Ixg8kn19Hs7171VmLpNj/view"
              }
              className="underline hover:opacity-80 hover:no-underline transition-all duration-75 "
            >
              Unfair Deceptive and Abusive Acts or Practices (UDAAP) Policy
            </Link>
          </div>
          <div>
            <Link
              target="__blank"
              href={
                "https://drive.google.com/file/d/1EOAQltXzNPeF2EBQ0Dbv7V9D8a0qXda0/view"
              }
              className="underline hover:opacity-80 hover:no-underline transition-all duration-75 "
            >
              {"Graph's"} Privacy Policy
            </Link>
          </div>
          <div>
            <Link
              target="__blank"
              href={
                "https://drive.google.com/file/d/1BuVSETcJ-ev5X4ozzRNlR3TnqmtROUuB/view"
              }
              className="underline hover:opacity-80 hover:no-underline transition-all duration-75 "
            >
              {"Graph's"} Terms of Service
            </Link>
          </div>
          <div>
            <Link
              target="__blank"
              href={
                "https://drive.google.com/file/d/1tv1q_Qa2kznzz5-njrenpn8v6qBBUHT9/view"
              }
              className="underline hover:opacity-80 hover:no-underline transition-all duration-75 "
            >
              Complaints Management Policy
            </Link>
          </div>
          <div>
            <Link
              target="__blank"
              href={"https://www.getevolved.com/privacy-policy/"}
              className="underline hover:opacity-80 hover:no-underline transition-all duration-75 "
            >
              Evolve Privacy Policy
            </Link>
          </div>
          <div>
            <Link
              target="__blank"
              href={
                "https://drive.google.com/file/d/12w5--MZM1ErbtVEXopQf9TpHSgTf0i5_/view"
              }
              className="underline hover:opacity-80 hover:no-underline transition-all duration-75 "
            >
              Evolve E-Sign Agreement
            </Link>
          </div>
          <div>
            <Link
              href="https://drive.google.com/file/d/1Z1RCg1-Ip-TWl5B-6oi8PzoDSaSRO1G3/view"
              className="underline hover:opacity-80 hover:no-underline transition-all duration-75 "
            >
              Anti-Money Laundering (AML) Policy
            </Link>
          </div>
        </div>
      </div>

      <div className=""></div>
      <SimplifyOperations />
    </MainLayout>
  );
};

export default LegalScreen;
