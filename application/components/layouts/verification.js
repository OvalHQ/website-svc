import React from 'react';
import Head from 'next/head';

const Verification = ({ children }) => {
  return (
    <div className="my-auto mx-auto max-w-xl mt-24 md:mt-0 md:translate-y-[40%] bg-white p-12">
      <Head>
        <title>Oval | Account Verification</title>
      </Head>
      {children}
    </div>
  );
};

export default Verification;
