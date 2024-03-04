"use client";

import Script from "next/script";
import React from "react";

const CustomScript = () => {
  return (
    <>
      {/* Google tag manager */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-JSVWF5M1CV"
        strategy="lazyOnload"
        onLoad={() => {}}
      />
      <Script
        src="//code.tidio.co/09pwgg3nfu2jwkjg9swhajo8mdggspj7.js"
        strategy="lazyOnload"
        onLoad={() => {}}
      />
      <Script strategy="lazyOnload" id="googletagmanager">
        {`     
 window.dataLayer = window.dataLayer || [];
 function gtag(){dataLayer.push(arguments);}
 gtag('js', new Date());
 
 gtag('config', 'G-JSVWF5M1CV');
 `}
      </Script>

      {/* Clearbits */}
      <Script
        src="https://tag.clearbitscripts.com/v1/pk_b37aa46f9dc22d37d4ce63d900c6327c/tags.js"
        strategy="lazyOnload"
        onLoad={() => {}}
      />

      <Script
        strategy="lazyOnload"
        id="heatmap"
        referrerPolicy="strict-origin-when-cross-origin"
      >
        {`
          (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:3777459,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `}
      </Script>
    </>
  );
};

export default CustomScript;
