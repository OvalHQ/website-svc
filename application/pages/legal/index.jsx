import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

import Footer from "../../components/footer";
import Legal from "../../components/Legal";

export default function OvalPrivacyPolicy() {
  const [modalStatus, setModalStatus] = useState(false);

  const handleModalStatus = () => {
    setModalStatus(false);
  };

  return (
    <>
      <Head>
        <title>Oval: Oval Privacy Policy</title>
      </Head>
      <nav className="flex justify-between items-center px-12 md:px-24 py-5 bg-white">
        <div className="flex space-x-2">
          <h3 className={`text-grey-dark cursor-pointer`}>Oval</h3>
        </div>
        <div className="space-x-4 flex">
          <Link href="/">
            <button className="rounded-lg py-2 px-3 text-darkGray bg-blue-ocean border border-gray-100">
              Home
            </button>
          </Link>
        </div>
      </nav>

      <main className="pt-8 px-12 bg-white min-h-screen md:overflow-x-hidden">
        <div className="w-4/5 mx-auto my-0 max-w-[700px] min-w-[300px]">
          <Legal active="" />
          <h3 className="mb-4 text-center">Oval Privacy Policy</h3>
          <p className="mb-4">Effective Date: May 1, 2021</p>
          <p className="mb-4">
            This policy describes how Oval (“Oval,” “we,” “us,” or “Oval
            Technologies LLC”) collects, aggregates, stores, safeguards and uses
            the data and information (including non-public personal information,
            or “NPI”) provided by users through our website, [www.useoval.com]
            (the “Site”), as well as information collected by us through other
            means, including by email, over the phone, or in offline
            communications. This Site is operated by Oval and has been created
            to provide information about our Oval, products, and services
            (together, the “Services”)
          </p>
          <p className="mb-4">
            We take your privacy and the security of your information seriously.
            This policy explains:
          </p>
          <ul className="mb-4 list-disc">
            <li>What information we collect, and how we use it</li>
            <li>
              Choices you can make about the way your information is collected
              and used
            </li>
            <li>
              How we protect personal information electronically and physically
            </li>
          </ul>
          <p className="mb-4">
            This policy is incorporated into and a material term of your
            registration and/or use of Oval’s products and services, including
            our website, <a href="http://www.useoval.com">www.useoval.com</a>.
            By using the Site or Services, you consent to the practices set
            forth in this Privacy Policy.
          </p>
          <p className="mb-4">
            When the Privacy Policy mentions “Company,” “we,” “us,” or “our,” it
            refers to the Oval, a [Delaware C-corp] corporation and Oval
            Technologies LLC. you are contracting with in this policy. Oval
            Technologies referred to herein as “Oval” unless the context
            requires otherwise.
          </p>
          <h3 className="mb-4">INFORMATION WE COLLECT</h3>
          <p className="mb-4">
            Information You Provide to Us
            <br />
            Oval collects information from you when you choose to provide it to
            us through the Site or through any other means. This may include
            when you create an account on the Site, register or request products
            or services, request information from us, sign up for newsletters or
            our email lists, use our Site, or otherwise contact us.
          </p>
          <p className="mb-4">
            The information we collect may include your name, address, email
            address, telephone or mobile phone number, information relating to
            your employment or professional activities and financial account
            information. You may be required to provide certain personal and/or
            business information to apply for and receive Oval products
            services.
          </p>
          <h5 className="mb-4">Information We Automatically Collect</h5>
          <p className="mb-4">
            We may use cookies or other technologies to automatically collect
            certain information when you visit our Site or interact with our
            emails. For example, if you are responding to an offer, promotional
            email or other email from us, we may automatically populate your
            personal information into our system once you enter your offer code
            or similar identifying device or otherwise accept your offer or
            promotion. Additionally, we may automatically collect certain
            non-personal information from you such as your browser type,
            operating system, software version, and Internet Protocol (“IP”)
            address. We also may collect information about your use of the Site,
            including the date and time of access, the areas or pages that you
            visit, the amount of time you spend using the Site, the number of
            times you return, whether you open, forward, or click-through
            emails, and other Site usage data.
          </p>
          <p className="mb-4">
            You may adjust your browser or operating system settings to limit
            this tracking or to decline cookies, but by doing so, you may not be
            able to use certain features on the Site or take full advantage of
            all of our offerings. Check the “Help” menu of your browser or
            operating system to learn how to adjust your tracking settings or
            cookie preferences. Please note that our system may not respond to
            Do Not Track requests or headers from some or all browsers.
          </p>

          <h3 className="mb-4">HOW WE USE INFORMATION WE COLLECT</h3>
          <p className="mb-4">
            Oval uses the data and information you provide in a manner that is
            consistent with this Privacy Policy and applicable law. If you
            provide personal data for a certain reason, we may use the personal
            data in connection with the reason for which it was provided. For
            instance, if you contact us by email, we will use the personal data
            you provide to answer your question or resolve your problem. Also,
            if you provide personal data in order to obtain access to the Site
            or Services, we will use your personal data to provide you with
            access to such services and to monitor your use of such services.
          </p>
          <p className="mb-4">
            {" "}
            Oval may also use your personal data and other personally
            non-identifiable information collected through the Site or the
            provision of the Services to help us improve the content and
            functionality of the Site or the Services, to better understand our
            users and to improve the Site and the Services. Oval and its
            affiliates may use this information to contact you in the future to
            tell you about services we believe will be of interest to you. If at
            any time you wish not to receive any future marketing communications
            or you wish to have your name deleted from our mailing lists, please
            contact us as indicated below.
          </p>
          <p className="mb-4">SHARING OF INFORMATION WE COLLECT</p>
          <p className="mb-4">
            Oval is not in the business of selling your information. There are,
            however, certain circumstances in which we may share your personal
            data with certain third parties without further notice to you, as
            set forth below:
            <br /> Agents, Consultants, and Third-Party Service Providers:
          </p>
          <p className="mb-4">
            Oval, like many businesses, sometimes hires other companies to
            perform certain business-related functions. Examples of such
            functions include mailing information, maintaining databases, and
            processing payments. When we employ another entity to perform a
            function of this nature, we only provide them with the information
            that they need to perform their specific function.
            <br /> Business Transfers:
          </p>
          <p className="mb-4">
            As we develop our business, we might sell or buy businesses or
            assets. In the event of a corporate sale, merger, reorganization,
            dissolution or similar event, personal data may be part of the
            transferred assets.
            <br /> Related Companies:
            <br /> We may also share your personal data with our corporate
            affiliates and subsidiaries, if any, for purposes consistent with
            this Privacy Policy.
          </p>

          <h5 className="mb-4">Legal Requirements:</h5>
          <p className="mb-4">
            Oval may disclose your personal data if required to do so by law or
            in the good faith belief that such action is necessary to (i) comply
            with a legal obligation, (ii) protect and defend the rights or
            property of Oval, (iii) act in urgent circumstances to protect the
            personal safety of users of the Site, the Services or the public, or
            (iv) protect against legal liability.
          </p>

          <h3 className="mb-4">LINKS TO OTHER WEBSITES</h3>
          <p className="mb-4">
            The Site may have links to third-party websites, which may have
            privacy policies that differ from our own. We are not responsible
            for the practices of such sites, nor does any such link imply that
            Oval endorses or has reviewed the third party site subject to such
            link. We suggest contacting those sites directly for information on
            their privacy policies.
          </p>
          <h3 className="mb-4">CHILDREN AND MINORS</h3>
          <p className="mb-4">
            Oval does not knowingly collect personal data from minors under the
            age of 18. If you are under the age of 18, please do not submit any
            personal data through the Services. We encourage parents and legal
            guardians to monitor their children’s Internet usage and to help
            enforce our Privacy Policy by instructing their children never to
            provide personal data without their permission. If you have reason
            to believe that a minor under the age of 18 has provided personal
            data to Oval through the Site or the Services, please contact us,
            and we will endeavor to delete that information from our databases.
          </p>
          <h3 className="mb-4">DATA SECURITY</h3>
          <p className="mb-4">
            We have taken certain physical, administrative, and technical steps
            to safeguard the information we collect from and about our customers
            and Site visitors. While we make reasonable efforts to help ensure
            the integrity and security of our network and systems, we cannot
            guarantee our security measures. Therefore, you should take special
            care in deciding what information you send to us via email. Please
            keep this in mind when disclosing any personal data to the Oval via
            the Internet.
          </p>

          <h3 className="mb-4">ACCESS TO YOUR PERSONAL INFORMATION</h3>
          <p className="mb-4">
            To keep your personal data accurate, current, and complete, please
            contact us as specified below. We will take reasonable steps to
            update or correct personal information in our possession that you
            have previously submitted via the Services.
          </p>
          <h5 className="mb-4">
            Who Can I Contact at Oval Regarding Data Protection Issues?
          </h5>
          <p className="mb-4">
            Oval has designated a Data Protection Officer to assist with data
            privacy and data protection issues. You may contact him or her by
            emailing <a href="mailto:info@useoval.com">info@useoval.com</a> and
            addressing your questions or concerns to the Data Protection
            Officer.
          </p>
          <h3 className="mb-4">IF YOU HAVE QUESTIONS</h3>
          <p className="mb-4">
            If you have any questions about this Privacy Statement or the
            practices described herein, you may contact us at:{" "}
            <a href="mailto:info@useoval.com">info@useoval.com</a>
          </p>
          <h3 className="mb-4">CHANGES TO THIS STATEMENT</h3>
          <p className="mb-4">
            Oval reserves the right to revise this Privacy Policy at any time.
            When we do, we will post the change(s) on the Site. This Privacy
            Policy was last updated on the date indicated above. Your continued
            use of the Site and the Services after any changes or revisions to
            this Privacy Policy shall indicate your agreement with the terms of
            such revised Privacy Policy.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
