import { Heading, Pane, Paragraph, Text } from "evergreen-ui";
import Image from "next/image";
import React from "react";

const StartupsToEnterprise = () => {
  return (
    <Pane className="startups-to-enterprise">
      <Heading
        fontSize="3rem"
        lineHeight={"50px"}
        fontWeight={700}
        textAlign="center"
        color="black"
        maxWidth={"700px"}
        marginY={30}
      >
        From startups to enterprises and businesses of all sizes.
      </Heading>
      <p className="text-black font-[500] text-center">
        We help you streamline and simplify your financial operations toward
        driving business growth
      </p>

      <Pane className="grid-container" marginTop={"50px"}>
        {data.map((data, index) => {
          return (
            <Pane key={index} className="startups-to-enterprise--card">
              <Pane position="relative" height="220px" borderRadius={20}>
                <Image
                  style={{
                    borderRadius: 20,
                  }}
                  alt="description img"
                  src={`/images/general/${data.img}`}
                  fill
                  //   width={'100%'}
                />
              </Pane>
              <h3 className="font-bold text-xl tracking-[-1px] leading-5 text-black pb-[10px] pt-[10px]">
                {data.title}
              </h3>
              <p className="text-sm text-black opacity-95">
                {data.description}
              </p>
            </Pane>
          );
        })}
      </Pane>
    </Pane>
  );
};

export default StartupsToEnterprise;

const data = [
  {
    img: "startups-img.png",
    title: "Startups",
    description:
      "Access a scalable financial infrastructure tailored to your needs. Obtain a business account, card, bill payment, travel services, and reimbursement capabilities, all integrated into a single, adaptable solution.",
  },
  {
    img: "enterprise-img.png",
    title: "Enterprise",
    description:
      "Revamp financial operations to enable fast  international payments to vendors and suppliers globally.",
  },
  {
    img: "e-commerce-img.png",
    title: "E-commerce Businesses",
    description:
      "Streamline transactions, manage expenses, and expand your reach. Graph ensures your business thrives in the competitive landscape of online commerce.",
  },
  {
    img: "import-business-img.png",
    title: "Import-Export Businesses",
    description:
      "Buy and sell globally more seamlessly. We offer the most intuitive and powerful payment solutions for importers. Seamlessly pay suppliers globally, collect payment from international buyers and convert currencies.",
  },
  {
    img: "custom-solution-img.png",
    title: "Custom Solutions for Your Unique Needs",
    description:
      "We understand that every business is different, which is why we offer bespoke solutions tailored to your unique business needs.",
  },
];
