import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../../public/fonts/fonts.css";
import Script from "next/script";
import CustomScript from "@/components/CustomScript";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Graph",
  description:
    "Experience seamless access to corporate cards, multi-currency accounts, and global payouts, all in one account.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>

      {/* Scripts */}
      <CustomScript />
    </html>
  );
}
