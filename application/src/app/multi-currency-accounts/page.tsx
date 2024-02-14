import MultiCurrencyAccountsScreen from "@/screens/general/multi-currency-accounts/multi-currency-accounts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Multi-currency accounts | Graph ",
  description:
    "Experience seamless access to corporate cards, multi-currency accounts, and global payouts, all in one account.",
};

const MultiCurrencyAccountsPage = () => {
  return <MultiCurrencyAccountsScreen />;
};

export default MultiCurrencyAccountsPage;
