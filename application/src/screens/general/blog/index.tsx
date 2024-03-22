"use client";

import MainLayout from "@/components/layout/main";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IArticle } from "./type";
import { formatDate, truncateString } from "@/lib/utils";
import Spinner from "@/components/primitives/logo/spinner";
import { Pane } from "evergreen-ui";
import PatternBG from "../../../../public/images/general/pattern-bg-blue.svg";
import { mediumArticleLink } from "@/utils/constants";

const BlogsScreen = () => {
  const [articles, setArticles] = useState([]);
  const [loadingArticles, setLoadingArticles] = useState(false);

  useEffect(() => {
    setLoadingArticles(true);
    fetch(mediumArticleLink)
      .then((res) => res.json())
      .then((data) => setArticles(data.items))
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoadingArticles(false));
  }, []);

  return (
    <MainLayout>
      <div className="">
        <div className="h-[80px] sm:hidden w-full"></div>
        <div className="relative h-[430px] md:p-[50px] md:py-[110px] py-12 rounded-2xl bg-[#E2FDFF] flex flex-col justify-center items-center w-full overflow-y-hidden">
          <h1 className="mt-6 font-semibold text-[40px] md:text-[70px] text-center">
            Graph Blog
          </h1>
          <p className="opacity-60 text-center">
            Announcements, articles and stories, to inspire and inform
          </p>
          <div className="absolute left-0 z-[1] h-[100%] ">
            <Image
              style={{
                transform: "scaleX(-1)",
                // opacity: 0.9,
                height: "100%",
              }}
              alt="background-layer"
              src={PatternBG}
            />
          </div>
          <Pane position="absolute" right={0} zIndex={1}>
            <Image
              style={{
                // opacity: 0.9,
                height: "100%",
              }}
              alt="background-layer"
              src={PatternBG}
              className=" hidden md:block"
            />
          </Pane>
        </div>
        {/* </Pane> */}
        <div className="max-w-[1440px] mx-auto">
          {loadingArticles && (
            <div className="flex justify-center items-center h-[400px]">
              <Spinner className="size-10" />
            </div>
          )}
          {articles && articles.length > 0 && (
            <div
              className={`grid place-items-center grid-col-1 ${
                articles.length > 2
                  ? "md:grid-cols-3 sm:grid-cols-2 gap-3"
                  : "md:grid-cols-2  gap-5"
              } py-12 px-8 mt-20 md:px-20`}
            >
              {/* <MediumCard noOfCards ={3} article={articles[0]} /> */}

              {articles?.map((article, index) => (
                <MediumCard
                  noOfCards={articles.length}
                  article={article}
                  key={index}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default BlogsScreen;

type TPropMediumCard = {
  article: IArticle;
  noOfCards: number;
};
const MediumCard = ({ article, noOfCards }: TPropMediumCard) => {
  // Regular expression to match the content of the third paragraph
  const regex = /<p>(.*?)<\/p>/g;

  // Execute the regular expression on the HTML string
  let match;
  let thirdParagraphContent;
  let paragraphCounter = 0;

  while ((match = regex.exec(article?.description)) !== null) {
    paragraphCounter++;
    if (paragraphCounter === 2) {
      thirdParagraphContent = match[1];
      break;
    }
  }
  const strippedContent = thirdParagraphContent
    ? truncateString(thirdParagraphContent.replace(/(<([^>]+)>)/gi, ""), 250)
    : "";

  // Execute the regular expression on the HTML string
  const description = strippedContent;

  const imgRegex = /<img.*?src="(.*?)"/;
  const imgMatch = article?.description.match(imgRegex);

  // Extract the src string if a match is found
  const imgSrc = imgMatch ? imgMatch[1] : null;

  const parts = article.guid.split("/");
  const id = parts[parts.length - 1];
  const stringWithSpaces = article.title.toLowerCase().replace(/—+|-+/g, " ");

  const stringWithHyphens = stringWithSpaces.replace(/\s+/g, "-") + "-" + id;

  return (
    <div
      className={` ${noOfCards === 2 ? "max-w-[600px]" : ""} ${
        noOfCards > 2 ? "max-w-[400px]  md:h-[520px]" : " md:h-[560px]"
      }
        rounded-lg flex flex-col`}
    >
      <div className="relative rounded-md mb-3">
        <Image
          className={`rounded-t-2xl w-full`}
          alt="description img"
          src={
            article.thumbnail || imgSrc || "/images/general/startups-img.png"
          }
          height={220}
          width={400}
        />
      </div>
      <div
        className={`border border-[#0000001c] drop-shadow-md shadow-sm border-t-0 px-4 pb-1 rounded-2xl -mt-8 pt-8 flex-1 flex flex-col justify-between ${
          noOfCards === 2 ? "max-w-[600px]" : "max-w-[400px] "
        }`}
      >
        <h3 className="font-bold text-[24px] leading-[25px] tracking-[-1px] text-black pb-[10px] pt-[10px]">
          {truncateString(article.title, 50)}
        </h3>
        <div className="flex flex-col flex-1 justify-between">
          <p className="text-[15px] leading-[25px] text-black opacity-70 mt-3">
            {description}
          </p>
          <div className="my-3 flex justify-between items-center mt-auto">
            <Link
              className="hover:opacity-90 text-sm text-[#2276FF]"
              href={`/blog/${stringWithHyphens}`}
            >
              READ MORE
            </Link>
            <p className="text-black opacity-90 text-xs my-3 ">
              {formatDate(article.pubDate)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
