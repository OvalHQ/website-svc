import MultiCurrencyAccountsScreen from "@/screens/general/multi-currency-accounts/multi-currency-accounts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Multi-currency accounts | Graph ",
  description: "",
};

const MultiCurrencyAccountsPage = () => {
  return <MultiCurrencyAccountsScreen />;
};

export default MultiCurrencyAccountsPage;
