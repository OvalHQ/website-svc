import AboutUsScreen from "@/screens/general/about-us";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Graph ",
  description:
    "Experience seamless access to corporate cards, multi-currency accounts, and global payouts, all in one account.",
};
const AboutUsPage = () => {
  return <AboutUsScreen />;
};

export default AboutUsPage;
