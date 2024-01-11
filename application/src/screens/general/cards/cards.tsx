"use client";

import Navbar from "@/components/navbar";
import CardsPageScreenWrapper from "./index.style";
import CorporateCards from "@/components/cards/corporate-cards";
import Footer from "@/components/footer";
import Hero from "@/components/cards/hero";
import CardsForBusinesses from "@/components/cards/cards-for-businesses";

const CardsPageScreen = () => {
  return (
    <CardsPageScreenWrapper>
      <Navbar />
      <Hero />
      <CardsForBusinesses />
      <CorporateCards />
      <Footer />
    </CardsPageScreenWrapper>
  );
};

export default CardsPageScreen;
