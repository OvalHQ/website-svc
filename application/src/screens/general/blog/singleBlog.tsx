import React, { useState, useEffect } from "react";
import MainLayout from "@/components/layout/main";
import Image from "next/image";
import PatternBG from "../../../../public/images/general/pattern-bg-single-blog.svg";
import MediumBanner from "../../../../public/images/general/mediumBanner.svg";
import LogoWhiteFull from "../../../../public/images/graph-logo-full-white.svg";
import { mediumArticleLink } from "@/utils/constants";
import Spinner from "@/components/primitives/logo/spinner";
import { useParams } from "next/navigation";
import { IArticle } from "./type";
import BlogScreenWrapper from "./index.style";
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  XIcon,
} from "react-share";
import { formatDateToSpecificForm } from "@/lib/utils";

const SingleBlogScreen = () => {
  const [article, setArticle] = useState<IArticle[] | [] | null>(null);
  const [loadingArticles, setLoadingArticles] = useState(true);
  const [imgUrl, setImgUrl] = useState("");
  const { blogTitle } = useParams();

  useEffect(() => {
    if (blogTitle) {
      const title = blogTitle as string;
      setLoadingArticles(true);

      fetch(mediumArticleLink)
        .then((res) => res.json())
        .then((data) => {
          const parts = title.split("-");
          const id = parts[parts.length - 1];

          const article = data.items.filter((obj: IArticle) =>
            obj.guid.includes(id as string)
          );
          // Regular expression to match the first img src string
          const regex = /<img.*?src="(.*?)"/;
          const match = article[0]?.description.match(regex);

          // Extract the src string if a match is found
          const imgSrc = match ? match[1] : null;

          setImgUrl(imgSrc);
          setArticle(article);
        })
        .catch((err) => {
          console.log("An error occurred", err);
        })
        .finally(() => setLoadingArticles(false));
    }
  }, [blogTitle]);

  return (
    <MainLayout>
      <BlogScreenWrapper>
        {/* {imgUrl ? (
          <Image
            alt="background-layer"
            src={imgUrl}
            width={800}
            height={500}
            className="w-full"
            style={{
              height: "100%",
            }}
          />
        ) : ( */}
        <div className="mt-[80px] sm:mt-0">
          <Image
            alt="background-layer"
            src={MediumBanner}
            style={{
              width: "100%",
            }}
          />
        </div>
        {/* <div className="w-full h-[500px] md:h-[680px] relative bg-black flex justify-center items-center mt-[80px] md:mt-0 overflow-hidden">
          <div className="absolute -b-1 left-0 z-[1] h-full opacity-50 md:opacity-100">
            <Image
              alt="background-layer"
              src={PatternBG}
              style={{
                height: "100%",
              }}
            />
          </div>
          <div className="ml-10 z-10">
            <Image
              alt="logo"
              src={LogoWhiteFull}
              width={900}
              height={230}
              className="w-[380px] md:w-[700px] lg:w-[900px] h-full"
            />
            <p className="text-white md:text-[45px] lg:text-[53px] mt-2 font-medium lg:ml-[285px] text-end">
              Finance OS for Businesses
            </p>
          </div>
        </div> */}
        <div className="block mx-auto max-w-[1440px]">
          {loadingArticles ? (
            <div className="flex justify-center items-center h-[400px]">
              <Spinner className="size-14" />
            </div>
          ) : (
            <>
              {article === null ? (
                <p>An error occurred</p>
              ) : (
                <div className=" min-h-[600px] ">
                  {article.length === 0 ? (
                    <p className="font-bold text-[40px] leading-[25px] tracking-[-1px] text-black pb-[10px] pt-[10px] text-center mx-20 my-20">
                      This article could not be found
                    </p>
                  ) : (
                    <>
                      <div className="px-8 sm:px-12 md:px-20 md:mt-24 flex flex-col md:flex-row ">
                        <div className="w-full md:w-[300px] md:px-12 my-10 md:my-0 flex flex-col ">
                          <div className="w-full">
                            <p className="text-[14px] text-black">
                              {formatDateToSpecificForm(article[0].pubDate)}
                            </p>
                          </div>
                          <div className="my-3 h-[0.5px] w-5/6 bg-gray-500"></div>
                          <div className="w-full">
                            <p className="text-[13px]">Share Article</p>
                            <div className="flex gap-3 my-3">
                              <LinkedinShareButton url={window.location.href}>
                                <LinkedinIcon
                                  size={25}
                                  className="text-black"
                                />
                              </LinkedinShareButton>
                              <FacebookShareButton url={window.location.href}>
                                <FacebookIcon
                                  size={25}
                                  className="text-black"
                                />
                              </FacebookShareButton>
                              <TwitterShareButton url={window.location.href}>
                                <XIcon size={25} className="text-black" />
                              </TwitterShareButton>
                            </div>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div
                            className="custom-blog"
                            dangerouslySetInnerHTML={{
                              __html: article[0].content,
                            }}
                          ></div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </BlogScreenWrapper>
    </MainLayout>
  );
};

export default SingleBlogScreen;
