import { publicRoute } from '../middleware/authentication';
import Head from 'next/head';
import Image from 'next/image';
import { Disclosure, Transition } from '@headlessui/react';
import oval from '../assets/png/mondu.png';
import toggle from '../assets/svg/home/toggle.svg';
import add from '../assets/svg/home/add.svg';
import minus from '../assets/svg/home/minus.svg';
import usa from '../assets/svg/home/usa-card.svg';
import naija from '../assets/svg/home/naija-card.svg';
import canada from '../assets/svg/home/canada-card.svg';

import { million_things, questions } from '../helpers/constants';
import StepOne from '../components/transactions/sendmoney/stepone';
import TextInput from '../components/inputs/text-input';
import { useState } from 'react';
import axios from 'axios';
import { CgSpinner } from 'react-icons/cg';
import EmailSuccessModal from '../components/success/email';
import { earlyAccess } from '../server/api';

export default function Home() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [modalStatus, setModalStatus] = useState(false);

  const handleWaitingList = async () => {
    setLoading(true);
    try {
      if (!!email) {
        const res = await earlyAccess(email);

        if (res.type === 'success') setModalStatus(true);
        setEmail('');
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const focusOnInput = () => {
    document.getElementById('emailID').focus();
  };

  const handleModalStatus = () => {
    setModalStatus(false);
  };

  return (
    <>
      <Head>
        <title>Oval</title>
      </Head>
      <nav className="flex justify-between items-center px-12 md:px-24 py-5 bg-white">
        <div className="flex space-x-2">
          {/*<Image src={oval} width={80} height={80} />*/}
           <h3 className={`text-grey-dark cursor-pointer`}>Oval</h3>
        </div>
        <div className="space-x-4 flex">
          <button
            onClick={focusOnInput}
            className="rounded-lg py-2 px-3 text-darkGray bg-blue-ocean border border-gray-100"
          >
            Get Early Access
          </button>
        </div>
      </nav>

      <main className="pt-8 px-8 bg-white min-h-screen md:overflow-x-hidden">
        <div className="grid md:grid-cols-2 content-center items-center my-8">
          <div className="col-span-1 mx-auto max-w-md">
            <h2 className="mb-4">
              Payments & Blockchain Infrastructure for Global Businesses
            </h2>
            <p className="text-blue-bodyLighter text-lg">
              We help businesses, DeFi projects and Enterprises accept payments with crypto and send payouts globally in one unified platform. Take your business global in a scalable and efficient way through blockchain infrastructure.
            </p>

        {/*    <div className=" gap-4 my-6 w-full">
              <div className="col-span-2 my-2">
                <TextInput
                  label="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  inputID="emailID"
                />
              </div>
              <div className="col-span-1 flex items-end w-full my-2">
                <button
                  className="rounded py-2 px-3 text-white bg-primary border w-full"
                  onClick={handleWaitingList}
                >
                  {loading ? (
                    <CgSpinner className="h-5 w-5 mr-2 animate-spin" />
                  ) : (
                    'Get early access'
                  )}
                </button>
              </div>
            </div>*/}
          </div>
          <div className="col-span-1 ">
            <div className="max-w-md mx-auto">
              <Image
                src="https://res.cloudinary.com/okekeobasi/image/upload/v1634084193/Group_907_vdnyhi.png"
                className=""
                width="100%"
                height="100%"
                alt="Oval Preview"
                layout="responsive"
                objectFit="contain"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 content-center items-center my-8">
          <div className="hidden md:block col-span-1 bg-blob bg-contain bg-no-repeat">
            <div className="max-w-xl mx-auto">
              <Image
                src="https://res.cloudinary.com/okekeobasi/image/upload/v1634086696/mondu/Slice_1_rbkbyf.png"
                className=""
                width="100%"
                height="100%"
                alt="Oval Preview"
                layout="responsive"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="col-span-1 mx-auto max-w-md">
            <h2 className="mb-4">Put stablecoins to work across multiple blockchains</h2>
            <p className="text-blue-bodyLighter text-lg">
              Wallet developers, exchanges and custodians can now take advantage of stablecoins availability on a growing roster of public blockchains.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 content-center items-center my-8">
          <div className="relative col-span-1 max-w-md mx-auto bg-white shadow-card rounded-3xl pt-14 flex flex-col justify-between">
            <div className="mb-16 px-5 md:px-11">
              <h3 className="mb-4">Payments, but without the stress.</h3>
              <p className="text-blue-bodyLighter">
                Focus on building customer and product experiences with our production-ready tools. Integrating with Oval is not another legacy payment integration to your codebase, its reimagined payments processing with developers first in mind.
              </p>
            </div>
            <div className="w-3/4 border-t-8 border-r-8 border-grey-another rounded-lg bottom-0 left-0 text-grey-title">
              {million_things.map((thing) => (
                <div
                  key={thing.name}
                  className="w-full flex items-center justify-between px-4 py-3"
                >
                  <div className="flex items-center space-x-4">
                    <Image src={thing.icon} layout="fixed" />
                    <p className="text-lg">{thing.name}</p>
                  </div>
                  <div className="w-7 select-none">
                    <Image src={toggle} layout="fixed" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-1 max-w-md mx-auto bg-white shadow-card rounded-3xl px-11 py-14 h-full">
            <div>
              <h3 className="mb-4">
                Make all your transactions from one place.
              </h3>
            </div>
            <div>
              <div className="flex space-x-4 mt-8">
                <div>
                  <Image src={usa} layout="fixed" />
                </div>
                <div className="hidden md:block">
                  <Image src={naija} layout="fixed" />
                </div>
              </div>
              <div className="w-full flex justify-center mt-8">
                <Image src={canada} layout="fixed" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <nav className="w-full bg-white px-12">
        <div className="border-t py-7 md:px-24 md:flex justify-between items-center">
          <p className="text-blue-bodyLighter">
            © 2021 Oval.io All rights reserved. <a href="mailto:info@useoval.com">
                {' '}
                info@useoval.com{' '}
              </a>
          </p>
        </div>
      </nav>
      <EmailSuccessModal status={modalStatus} closeModal={handleModalStatus} />
    </>
  );
}

Home.getInitialProps = publicRoute;