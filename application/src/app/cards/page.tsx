import CardsPageScreen from "@/screens/general/cards/cards";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate cards | Graph ",
  description:
    "Experience seamless access to corporate cards, multi-currency accounts, and global payouts, all in one account.",
};
const CardsPage = () => {
  return <CardsPageScreen />;
};

export default CardsPage;
