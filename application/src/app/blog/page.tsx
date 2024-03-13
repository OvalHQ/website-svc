import BlogsScreen from "@/screens/general/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Graph ",
  description:
    "Experience seamless access to corporate cards, multi-currency accounts, and global payouts, all in one account.",
};
const BlogsPage = () => {
  return <BlogsScreen />;
};

export default BlogsPage;
