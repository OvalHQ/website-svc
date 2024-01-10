import { Heading, Pane } from "evergreen-ui";
import Image from "next/image";
import React from "react";

const TrustedBy = () => {
  return (
    <Pane width={"100%"} paddingX={80} paddingY={150} backgroundColor={"white"}>
      <Heading
        marginBottom={"80px"}
        fontSize="2.5rem"
        lineHeight={"30px"}
        fontWeight={600}
        textAlign="center"
      >
        Trusted by innovative businesses
      </Heading>
      <Pane
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        gap="20px"
        rowGap="50px"
        flexWrap="wrap"
      >
        <Image
          alt="techstars logo"
          src={require("../../../public/images/general/techstars.png")}
        />
        <Image
          alt="techstars logo"
          src={require("../../../public/images/general/bridgecard.png")}
        />
        <Image
          alt="techstars logo"
          src={require("../../../public/images/general/sproutly.png")}
        />
        <Image
          alt="techstars logo"
          src={require("../../../public/images/general/chowcentral.png")}
        />
        <Image
          alt="techstars logo"
          src={require("../../../public/images/general/flutterwave.png")}
        />
      </Pane>
    </Pane>
  );
};

export default TrustedBy;
