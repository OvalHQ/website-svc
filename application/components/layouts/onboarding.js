import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import bullet from '../../assets/svg/bullet.svg';

const OnboardingLayout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>Oval | {title}</title>
      </Head>
      <main className="flex flex-col h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full">
          <div className="hidden md:flex flex-col h-full p-12">
            <h4 className="p-8 md:p-0">
              <Link href="/">Oval</Link>
            </h4>
            <div className="h-full flex flex-col justify-center">
              <div className="max-w-md xl:max-w-2xl">
                <h2 className="text-grey-dark text-2xl xl:text-5xl xl:leading-relaxed">
                  A <span className="text-secondary">secure and seamless</span>{' '}
                  cross-border payment solution
                </h2>
              </div>
              <div className="mt-12 max-w-lg">
                <div className="flex space-x-4 my-4 items-start">
                  <div className="mt-1">
                    <Image src={bullet} height={16} width={16} />
                  </div>
                  <p className="text-lg">
                    Implement third-party integrations to facilitate collection
                    of naira
                  </p>
                </div>
                <div className="flex space-x-4 my-4 items-start">
                  <div className="mt-1">
                    <Image src={bullet} height={16} width={16} />
                  </div>
                  <p className="text-lg">
                    Implement third-party integrations to facilitate collection
                    of naira
                  </p>
                </div>
                <div className="flex space-x-4 my-4 items-start">
                  <div className="mt-1">
                    <Image src={bullet} height={16} width={16} />
                  </div>
                  <p className="text-lg">
                    Implement third-party integrations to facilitate collection
                    of naira
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white h-full w-full flex flex-col flex-shrink-0 justify-center">
            {children}
          </div>
        </div>
      </main>
    </>
  );
};

export default OnboardingLayout;
