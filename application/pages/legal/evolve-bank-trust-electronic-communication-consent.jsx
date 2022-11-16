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
        <title>
          Oval: Evolve Bank & Trust Electronic Communication Consent
        </title>
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
          <Legal active="evolve-bank-trust-electronic-communication-consent"/>
          <h3 className="mb-4 text-center">
            Evolve Bank & Trust Electronic Communication Consent{" "}
          </h3>
          <p className="mb-4">Last Updated: 11/11/22 </p>
          <p className="mb-4">
            We want to provide you with communications electronically. Certain
            laws and regulations require us to provide communications to you “in
            writing,” which means you may be entitled to receive the information
            on paper. The E-SIGN Act allows us to provide you communications
            electronically and to conduct transactions with you electronically,
            with your consent.
          </p>
          <p className="mb-4">
            Please read this Evolve Bank & Trust Electronic Communication
            Consent (the “Consent”) carefully prior to providing us with your
            consent. This Consent describes how we deliver and receive
            communications to and from you electronically and asks you to
            consent to use electronic records and signatures in our relationship
            with you. If you do not agree to this Consent or you later withdraw
            your consent provided herein, you may not be able to continue to use
            our services.
          </p>
          <h3 className="mb-4">Definitions </h3>
          <p className="mb-4">
            “<strong>We</strong>”, “<strong>us</strong>”, and “
            <strong>our</strong>” means Evolve Bank & Trust, its current or
            future affiliated companies, agents, assignees and service
            providers.
          </p>
          <p className="mb-4">
            “<strong>You</strong>” and “<strong>your</strong>” mean each
            applicant, account owner and anyone else with access to the account.
            If there is more than one owner, then these words mean each account
            owner separately, and all account owners jointly.
          </p>
          <p className="mb-4">
            “<strong>Communication</strong>” means each application, agreement,
            disclosure, notice, fee schedule, response to claims, statement,
            privacy policy, record, document and other information related to
            your account or to any Product, or that you sign, submit or agree to
            at our request.
          </p>
          <p className="mb-4">
            “<strong>Product</strong>” means each and every account, product or
            service we offer or will offer.
          </p>
          <p className="mb-4">
            The words “<strong>include</strong>” and “<strong>including</strong>
            ,” when used at the beginning of a list of one or more items,
            indicates that the list contains examples and is not exclusive or
            exhaustive, and the items in the list are only illustrations.{" "}
          </p>
          <h3 className="mb-4">
            Scope of Communications to be Provided in Electronic Form.{" "}
          </h3>
          <p className="mb-4">
            This Consent applies to all Communications and Products. By applying
            for or using a Product, you agree that any Communications will be
            provided in electronic format, to the extent allowed by law, and
            that paper Communications will not be sent. Your consent to receive
            electronic Communications and transactions includes, but is not
            limited to:{" "}
          </p>
          <ul className="mb-4 list-disc">
            <li>
              All legal and regulatory disclosures and communications associated
              with the Product;
            </li>
            <li>
              The Account Terms, including any amendments thereto, and any and
              all agreements by and between you and us that relate to a Product;
            </li>
            <li>Privacy policies and notices;</li>
            <li>Responses to claims filed in connection with a Product;</li>
            <li>Statements; and</li>
            <li>
              All other communications between us and your concerning the
              Product and any related transactions, products or services.
            </li>
          </ul>
          <p className="mb-4">
            Sometimes the law, or our agreement with you, requires you to give
            us a written notice. You must still provide these notices to us on
            paper, unless we specifically tell you in another Communication how
            you may deliver that notice to us electronically.
          </p>
          <p className="mb-4">
            We reserve the right, at our sole discretion, to discontinue the
            provision of electronic Communications, or to terminate or change
            the terms and conditions upon which electronic Communications are
            provided. We will provide you with notice of any such termination or
            change as required by law.{" "}
          </p>
          <h3 className="mb-4">
            Method of Providing Communications in Electronic Form.{" "}
          </h3>
          <p className="mb-4">
            All Communications that we provide in electronic form will be
            provided either (1) by e-mail or (2) by access to a website
            designated in an email notice from us, (3) through the any mobile
            application we may make available, (4) to the extent permitted by
            law, by access to a website generally designated in advance for such
            purpose, or (5) in the manner specified in any other agreement we or
            our affiliates have with you.
          </p>
          <p className="mb-4">
            If you seek to obtain a new product, service or account with us, we
            may remind you that you have already consented to receiving
            electronic Communications and using electronic signatures in your
            relationship with us.
          </p>
          <p className="mb-4">
            Continuing to use our Products after receiving updates to our system
            requirements signifies your acceptance of the change and
            reaffirmation of your consent.
          </p>
          <p className="mb-4">
            It is your responsibility to provide us with a true, accurate and
            complete e-mail address, street address, and other information
            related to this Consent and a Product, and to maintain and update
            promptly any changes in this information. You can update information
            (such as your e-mail address) by contacting us at info@useoval.com.
            We are not responsible for any delay or failure in the receipt of
            the Communications if we send the Communications to the last e-mail
            address you provided to us.
          </p>
          <h3 className="mb-4">
            System Requirements for Accessing Communications.
          </h3>
          <p className="mb-4">
            In order to access, view, and retain electronic Communications that
            we make available, you must have:
          </p>
          <ul className="mb-4 list-disc">
            <li>
              computers capable of running one of these compatible browsers:
            </li>
            <li>Internet Explorer version 9.0 or higher.</li>
            <li>Firefox version 35 or higher.</li>
            <li>Safari version 6.1 or higher.</li>
            <li>Chrome version 38 or higher.</li>
          </ul>
          <p className="mb-4">OR</p>
          <li>an Apple iPhone or iPad running iOS version 9.0 or higher.</li>
          <li>
            access to an active e-mail account with an email service provider.
          </li>
          <p className="mb-4">
            We may update these requirements as necessary to preserve the
            ability to receive electronic Communications. If there is a
            substantial change in these requirements, you will be notified as
            required by law.{" "}
          </p>
          <h3 className="mb-4">Requesting Paper Copies.</h3>
          <p className="mb-4">
            We will not send paper copies of any Communication; however, we
            reserve the right, but assume no obligation, to provide a paper
            (instead of electronic) copy of any Communication that you have
            authorized us to provide electronically. You can obtain a paper copy
            of an electronic Communication by printing it or by requesting that
            we mail a paper copy. To request a paper copy, call us at 8573769334
            during normal business hours, except for national holidays. There
            may be a fee associated with the request for the delivery of paper
            copies of any Communication provided electronically pursuant to this
            Consent.
          </p>
          <h3 className="mb-4">Communications in Writing.</h3>
          <p className="mb-4">
            All Communications in either electronic or paper format from us to
            you will be considered “in writing.” You should print or download a
            copy of this Consent and any other Communications for your records.
          </p>
          <h3 className="mb-4">Withdrawing Your Consent</h3>
          <p className="mb-4">
            You can withdraw your consent to receive Communications
            electronically at any time. Your withdrawal of consent will become
            effective after we have had a reasonable opportunity to act upon it.
            To withdraw your consent to receive Communications electronically,
            you must contact us by e-mailing at info@useoval.com.
          </p>
          <p className="mb-4">
            If you withdraw consent, your access to all Products will be
            terminated and any account you have with us will be closed and funds
            will be returned to you in accordance with the account agreement. If
            you withdraw consent, the legal validity and enforceability of prior
            Communications delivered in electronic form will not be affected.
          </p>
          <h3 className="mb-4">Consent</h3>
          <p className="mb-4">
            By applying for or using a Product or by checking any call to action
            (including “I Agree” or similar language), you give us affirmative
            consent to receive electronic Communications as described herein.
          </p>
          <p className="mb-4">
            By providing your consent, you are also confirming that you have the
            hardware and software described above, that you are able to receive
            and review electronic Communications, and that you have an active
            email account. You are also confirming that you are authorized to,
            and do, consent on behalf of all the other account owners,
            authorized signers, authorized representatives, delegates, product
            owners and/or service users identified with your Products.
          </p>
        </div>
      </main>
      <Footer/>
    </>
  );
}
