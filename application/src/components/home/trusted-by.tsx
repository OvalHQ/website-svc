import Image from "next/image";
import React from "react";

const TrustedBy = () => {
  return (
    <div className="w-full py-32 px-10 md:px-[80px] md:py-[120px] bg-white max-w-[1440px] ">
      <h2 className="mb-[80px] text-[2.5rem] leading-[40px] font-semibold text-center text-black ">
        Trusted by innovative organizations
      </h2>
      <div className="flex justify-around items-center gap-x-8 gap-y-[60px] flex-wrap  ">
        <Image
          alt="techstars logo"
          src={require("../../../public/images/general/techstars.svg")}
        />
        <Image
          alt="bridgecard logo"
          src={require("../../../public/images/general/bridgecard.svg")}
        />
        <Image
          alt="sproutly logo"
          src={require("../../../public/images/general/sproutly.svg")}
        />
        <Image
          alt="chowcentral logo"
          src={require("../../../public/images/general/chowcentral.svg")}
        />
        <Image
          alt="flutterwave logo"
          src={require("../../../public/images/general/flutterwave.svg")}
        />
      </div>
    </div>
  );
};

export default TrustedBy;
