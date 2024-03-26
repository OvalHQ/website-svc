import LegalScreen from "@/screens/general/legal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal | Graph ",
  description:
    "Experience seamless access to corporate cards, multi-currency accounts, and global payouts, all in one account.",
};
const LegalPage = () => {
  return <LegalScreen />;
};

export default LegalPage;
