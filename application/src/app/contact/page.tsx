import ContactScreen from "@/screens/general/contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact us | Graph ",
  description:
    "Experience seamless access to corporate cards, multi-currency accounts, and global payouts, all in one account.",
};
const ContactPage = () => {
  return <ContactScreen />;
};

export default ContactPage;
