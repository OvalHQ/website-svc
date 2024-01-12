"use client";

import Navbar from "@/components/navbar";
import MultiCurrencyAccountsScreenWrapper from "./index.style";
import Footer from "@/components/footer";
import Hero from "@/components/multi-currency-accounts/hero";
import SpendGlobally from "@/components/multi-currency-accounts/spend-globally";
import SolidFoundation from "@/components/multi-currency-accounts/solid-foundation";

const MultiCurrencyAccountsScreen = () => {
  return (
    <MultiCurrencyAccountsScreenWrapper>
      <Navbar />
      <Hero />
      <SpendGlobally />
      <SolidFoundation />
      <Footer />
    </MultiCurrencyAccountsScreenWrapper>
  );
};

export default MultiCurrencyAccountsScreen;
