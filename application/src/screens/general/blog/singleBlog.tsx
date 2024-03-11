import React, { useState, useEffect } from "react";
import MainLayout from "@/components/layout/main";
import Image from "next/image";
import PatternBG from "../../../../public/images/general/pattern-bg-single-blog.svg";
import LogoWhiteFull from "../../../../public/images/graph-logo-full-white.svg";
import { mediumArticleLink } from "@/utils/constants";
import Spinner from "@/components/primitives/logo/spinner";
import { useParams } from "next/navigation";
import { IArticle } from "./type";
import BlogScreenWrapper from "./index.style";
import {
  FacebookShareButton,
  InstapaperShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  XIcon,
} from "react-share";
// import { FacebookIcon } from "lucide-react";

const SingleBlogScreen = () => {
  const [article, setArticle] = useState<IArticle[] | [] | null>(null);
  const [loadingArticles, setLoadingArticles] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setLoadingArticles(true);
      fetch(mediumArticleLink)
        .then((res) => res.json())
        .then((data) => {
          const article = data.items.filter((obj: IArticle) =>
            obj.guid.includes(id as string)
          );
          console.log("arunifds", article);
          setArticle(article);
        })
        .catch((err) => {
          console.log("An error occurred", err);
        })
        .finally(() => setLoadingArticles(false));
    }
  }, [id]);
  console.log("articles", article);
  return (
    <MainLayout>
      <BlogScreenWrapper>
        <div className="w-full h-[500px] md:h-[680px] relative bg-black flex justify-center items-center mt-[80px] md:mt-0 overflow-hidden">
          <div className="absolute -b-1 left-0 z-[1] h-full opacity-50 md:opacity-100">
            <Image alt="background-layer" src={PatternBG} />
          </div>
          <div className="ml-10 z-10">
            <Image
              alt="logo"
              src={LogoWhiteFull}
              width={900}
              height={230}
              className="w-[380px] md:w-[700px] lg:w-[900px]"
            />
            <p className="text-white md:text-[45px] lg:text-[53px] mt-2 font-medium lg:ml-[285px] text-end">
              Finance OS for Businesses
            </p>
          </div>
        </div>
        {loadingArticles ? (
          <div className="flex justify-center items-center h-[400px]">
            <Spinner className="size-14" />
          </div>
        ) : (
          <>
            {article === null ? (
              <p>An error occurred</p>
            ) : (
              <div className=" min-h-[600px]">
                {article.length === 0 ? (
                  <p className="font-bold text-[40px] leading-[25px] tracking-[-1px] text-black pb-[10px] pt-[10px] text-center mx-20 my-20">
                    This article could not be found
                  </p>
                ) : (
                  <>
                    <div className="px-8 sm:px-12 md:px-20 md:mt-24 flex flex-col md:flex-row  ">
                      <div className="w-full md:w-[300px] md:px-12 my-10 md:my-0 flex flex-col items-end">
                        <div className="">
                          <p>Share Article</p>
                          <div className="flex gap-3 my-3">
                            <LinkedinShareButton
                              url={article[0].link}
                              // quote={'Dummy text!'}
                              // hashtag="#muo"
                            >
                              <LinkedinIcon size={25} />
                            </LinkedinShareButton>
                            <InstapaperShareButton
                              url={article[0].link}
                              // quote={'Dummy text!'}
                              // hashtag="#muo"
                            >
                              <FacebookIcon size={25} />
                            </InstapaperShareButton>
                            <TwitterShareButton
                              url={article[0].link}
                              // quote={'Dummy text!'}
                              // hashtag="#muo"
                            >
                              <XIcon size={25} />
                            </TwitterShareButton>
                            {/* <FacebookShareButton
                              url={article[0].link}
                              // quote={'Dummy text!'}
                              // hashtag="#muo"
                            >
                              <FacebookIcon size={25} />
                            </FacebookShareButton> */}
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
      </BlogScreenWrapper>
    </MainLayout>
  );
};

export default SingleBlogScreen;
