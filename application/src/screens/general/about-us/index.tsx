"use client";

import SimplifyOperations from "@/components/home/simplify-operations";
import MainLayout from "@/components/layout/main";
import { Heading, Pane, Text } from "evergreen-ui";
import Image from "next/image";

const AboutUsScreen = () => {
  return (
    <MainLayout>
      <Pane
        className="relative text-black md:py-[175px] pt-[200px] pb-[105px] z-1"
        backgroundColor="#E2FDFF"
      >
        <Pane
          display="flex"
          justifyContent="space-between"
          opacity=".3"
          position="absolute"
          top={0}
          zIndex={0}
          width="100%"
          height="100%"
        >
          <Pane className="w-[90%] md:w-full">
            <Image
              style={{
                transform: "rotate(180deg)",
                height: "100%",
              }}
              alt="background-layer"
              src={require("../../../../public/images/general/pattern-bg-1.png")}
            />
          </Pane>
          <Pane className="hidden md:block">
            <Image
              style={{
                height: "100%",
              }}
              alt="background-layer"
              src={require("../../../../public/images/general/pattern-bg-1.png")}
            />
          </Pane>
        </Pane>
        <Pane className="relative md:w-[70%] w-[90%] mx-auto z-10">
          <h1 className="md:font-medium md:text-2xl md:mb-8 mb-5 text-sm">
            About Us
          </h1>
          <h2 className="font-semibold md:w-[934px] md:text-[70px] text-4xl leading-[1]">
            We are empowering the next generation of founders with the financial
            tools they need to scale their business globally.
          </h2>
        </Pane>
      </Pane>
      <Pane className="md:py-[113px] py-16 flex justify-end md:mr-[260px]">
        <Pane className="md:w-[600px] w-[90%] mx-auto md:mx-0 text-black">
          <h5 className="font-semibold md:text-3xl text-2xl mb-8">
            Our Mission
          </h5>
          <Pane>
            <p className="mb-8 font-medium md:text-xl md:mb-8">
              In the current landscape, forward-thinking companies are
              revolutionizing traditional business practices. They empower their
              teams, streamline workflows, digitize data, and operate globally,
              paving new paths and breaking away from conventional approaches.
            </p>

            <p className="mb-8 font-medium md:text-xl md:mb-8">
              While businesses have undergone significant transformations, the
              banking sector has remained unchanged. Future-oriented enterprises
              resemble startups more than ever before, yet banks are unable to
              adapt to their evolving needs.
            </p>

            <p className="mb-8 font-medium md:text-xl md:mb-8">
              To enable these companies to drive their businesses forward
              through informed financial decisions, there&#39;s a demand for
              products that align with their progressive mindset and facilitate
              sustained growth.
            </p>

            <p className="mb-8 font-medium md:text-xl">
              Hence, we&#39;re developing a pioneering solution that seamlessly
              integrates essential financial services and software tailored to
              their journey. While these companies shape the future, our goal is
              to furnish everything necessary for a confident launch, smarter
              scalability, and achieving their utmost potential.
            </p>
          </Pane>
        </Pane>
      </Pane>
      <Pane className="w-[95%] mx-auto md:mb-28 mb-10">
        <SimplifyOperations />
      </Pane>
    </MainLayout>
  );
};

export default AboutUsScreen;
