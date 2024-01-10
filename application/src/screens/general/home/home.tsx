"use client";

import React from "react";
import HomePageScreenWrapper from "./index.style";
import Navbar from "@/components/navbar";
import Hero from "@/components/home/hero";
import TrustedBy from "@/components/home/trusted-by";
import UnifiedPlatform from "@/components/home/unified-platform";
import MoneyMovement from "@/components/home/money-movements";
import WhyGraph from "@/components/home/why-graph";
import StartupsToEnterprise from "@/components/home/startups-to-enterprise";
import SimplifyOperations from "@/components/home/simplify-operations";
import Faqs from "@/components/home/faqs";
import Footer from "@/components/footer";

const HomePageScreen = () => {
  return (
    <HomePageScreenWrapper>
      <Navbar />
      <Hero />
      <TrustedBy />
      <UnifiedPlatform />
      <MoneyMovement />
      <WhyGraph />
      <StartupsToEnterprise />
      <SimplifyOperations />
      <Faqs />
      <Footer />
    </HomePageScreenWrapper>
  );
};

export default HomePageScreen;
