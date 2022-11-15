import { publicRoute } from "../middleware/authentication";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import { CgSpinner } from "react-icons/cg";
import EmailSuccessModal from "../components/success/email";
import { earlyAccess } from "../server/api";
import Footer from "../components/footer";

export default function OvalPrivacyPolicy() {
  const [modalStatus, setModalStatus] = useState(false);

  const handleModalStatus = () => {
    setModalStatus(false);
  };

  return (
    <>
      <Head>
        <title>
          Oval: E-Sign Consent and Electronic Communications Agreement
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
        <div className="w-4/5 mx-auto my-0 max-w-[700px] min-w-[200px]">
          <h3 className="mb-4 text-center">
            E-Sign Consent and Electronic Communications Agreement
          </h3>
          <p className="mb-4">Effective Date: May 1, 2021</p>
          <p className="mb-4">
            It is our goal to provide you with as many digital banking options
            as possible, including providing information to you electronically.
            We are required by law to give you certain information in writing.
            This means you have the right to receive that information on paper.
            With your consent, we can provide it to you electronically, instead.
            In this Agreement:
          </p>
          <p className="mb-4">
            We take your privacy and the security of your information seriously.
            This policy explains:
          </p>
          <ul className="mb-4 list-disc">
            <li>"We," "us," "our," and "Fintech" mean Oval.</li>
            <li>
              "You" and "your" mean the person giving this consent, and also
              each additional account owner, authorized signer, authorized
              representative, delegate, product owner and/or service user
              identified on any Oval product that you apply for, use or
              access.
            </li>
            <li>
              "Communications" means each disclosure, notice, agreement, fee
              schedule, privacy policy, statement, record, document, and other
              information we provide to you, or that you sign or submit or agree
              to at our request.
            </li>
            <li>“Tax Documents” means any tax forms or reports.</li>
          </ul>
          <h3 className="mb-4">
            You agree to receive electronic Communications from us.
          </h3>
          <p className="mb-4">
          As part of your relationship with us, we will provide you with Communications. By accepting this Agreement, you consent to receive Communications in electronic form for any products, services and accounts that you have or apply for, either now or in the future. You also consent to the use of electronic signatures in your relationship with us.
We may still choose to provide you with information on paper even though you have consented to receive it electronically. In some cases, we are not permitted by law to deliver certain Communications to you electronically. However, if the law changes in the future and permits additional Communications to be delivered electronically, this Agreement will automatically cover those Communications as well.
          </p>

          <h3 className="mb-4">Electronic Records and Signatures Agreement</h3>

          <p className="mb-4">You agree that, notwithstanding any other provision in any agreement between you and us, whether now existing or entered into in the future, that:</p>
<p className="mb-4">An electronic or other copy of a signed Communication shall be considered as effective as an original.</p>
<p className="mb-4">At our option, any Communication may be in the form of an electronic record and may be executed using electronic signatures.<br/>
Communications may be sent electronically by us (i) by sending the Communication to the recipient’s Authorized Email Address, or (ii) by posting the Communication on a website and sending a notice to the recipient’s postal address or Authorized Email Address.</p>
<p className="mb-4">In the absence of actual notice of non-delivery received by us, Communications sent electronically pursuant to this paragraph shall be effective when sent and shall constitute notice of the Communication.</p>
<p className="mb-4">We may, at our option, use or accept manually signed paper Communications which have been converted into electronic form (such as scanned into PDF format), or an electronically signed Communication converted into another format, for transmission, delivery and/or retention. If any promissory note issued to us, as lender, is electronically executed by you or your authorized representative (“Electronic Note”), you agree that we (and any person to whom we later transfer the Electronic Note), shall have the right to convert the Electronic Note at any time into a paper-based Note (“Paper-Based Note”), which will be an effective, enforceable and valid original written instrument. You also agree that (1) the execution of the Electronic Note will be deemed issuance and delivery of the Paper-Based Note, and (2) the printing of the representation of the electronic signature(s) upon the Paper-Based Note will be deemed the original signature(s) on the Paper-Based Note and will serve to indicate the signer’s present intention to authenticate the Paper-Based Note.</p>
<p className="mb-4">It is intended that this E-Consent (together with the definition of “Communication” as used in this E-Consent) is and will be deemed integrated into, and form a part of, all agreements between you and us, whether now existing or entered into in the future.</p>
        <h3 className="mb-4">Tax Documents</h3>
        <p className="mb-4">You consent to electronic delivery of any Tax Documents. Each of the following applies to the electronic delivery of Tax Documents:</p>
        <p className="mb-4">You are not required to receive Tax Documents electronically.<br/>
Your election to receive Tax Documents electronically allows us to electronically deliver any Tax Document which we are legally permitted to provide to you now or in the future until you withdraw your consent.</p>
<p className="mb-4">You may receive a paper copy of any Tax Document by requesting a paper copy, as provided herein. Requesting a paper copy of a tax document will not be treated as a withdrawal of your consent to this E-Consent.</p>
<p className="mb-4">You may withdraw your consent to this E-Consent at any time through the procedures provided herein. You may also change your preferences regarding electronic delivery of Tax Documents from time to time without withdrawing your consent to this E-Consent. Withdrawal of consent to receive Tax Documents electronically will not include Tax Documents previously provided electronically; such Tax Documents may continue to be provided online for the applicable posting period. We will confirm your withdrawal request and the date on which it takes effect in writing (either electronically or on paper).If you withdraw your consent, we will send you paper copies of any additional Tax Documents we are required to provide.</p>
<p className="mb-4">The delivery of Tax Documents electronically may be terminated at any time by us. Further, we may make certain Tax Documents available electronically only for a limited time. Currently, such period of time for most Tax Documents is from January 31st or February 15th, as applicable, of the relevant year until October 15 of such year. Certain Tax Documents may be available electronically for a longer time. Certain Tax Documents that are provided electronically may have to be printed out and attached to a federal, state or local income tax return.<br/>
If you need to update any information relevant to electronic delivery of Tax Documents, you may do so, as provided herein.</p>
<p className="mb-4">We will notify you when each Tax Document is available by mail or electronically. We will notify you if any Tax Document cannot be delivered electronically.<br/>
A description of the hardware, software and operating system required to access, print, and retain Tax Documents are set forth herein.</p>
       
       <p className="mb-4 font-bold">We may deliver electronic Communications to you in several ways.</p>
       <p className="mb-4">When we deliver electronic Communications to you, we will either: (1) email them to you; (2) post them on our website; (3) present them on-screen or for download through one of our online or mobile banking services; (4) include them in other electronic Communications that we are delivering to you, such as electronic account statements; or (5) in the manner specified in any other agreement we have with you. If we are not emailing or presenting the information to you directly, we will tell you where you can go to view that information. <br />
If you seek to obtain a new product, service or account with us, we may remind you that you have already consented to receiving electronic Communications and using electronic signatures in your relationship with us. If you choose not to receive electronic Communications or use electronic signatures in connection with the new product, service or account, that choice does not mean you have withdrawn your consent with respect to any other product, service or account.
</p>
<p className="mb-4 font-bold">You will need some technology to receive electronic Communications.</p>
<p className="mb-4">To receive and retain electronic Communications from us, you will need the following:</p>
<ul className="mb-4 list-disc">
<li >A computer or mobile device with an operating system that supports everything below;</li>
<li >A connection to the internet;</li>
<li>A current version of a web browser that we support. You should check the system requirements periodically for updates to supported software;</li>
<li>A hard drive or other data storage unit;</li>
<li>A valid, active email address; and</li>
<li>A current version of a program that displays PDF files (such as  HYPERLINK &quot;<a href="https://get.adobe.com/reader">https://get.adobe.com/reader</a>&quot;Adobe® Reader®).</li>
</ul>
<p className="mb-4">If our hardware and software requirements change, and that change would create a material risk that you would not be able to access or retain electronic Communications, we will give you notice of the change. Continuing to use our electronic services after receiving notice of updates to our system requirements signifies your acceptance of the change and reaffirmation of your consent.</p>
<p className="mb-4 font-bold">Please keep your contact information up to date.</p>
<p className="mb-4" >It is your responsibility to keep all of your contact information current so that we can send you electronic Communications. You can update your email address and other contact information by editing your profile in the OvalApplication. You may also contact us at <a href="mailto:info@useoval.com">info@useoval.com</a></p>
<p className="mb-4 font-bold">You may have the option to receive paper copies.</p> 
<p className="mb-4">We may choose to make paper copies of certain electronic Communications available upon request. You can request paper account statements via email to <a href="mailto:info@useoval.com">info@useoval.com</a>.</p>
<p className="mb-4 font-bold">You can withdraw your consent to receiving electronic Communications.</p>
<p className="mb-4 font-bold">You have the right to withdraw this consent at any time. Withdrawing consent may terminate your access to certain electronic services. You may also no longer be able to use certain Oval products. After we have processed your withdrawal, future Communications required to be in writing will be delivered to you on paper, subject to applicable fees. To withdraw your consent to receiving electronic Communications, you may contact us via email at <a href="mailto:info@useoval.com">info@useoval.com</a> Your withdrawal of consent will become effective only after we have had a reasonable opportunity to act upon it.</p>
  </div>
      </main>
    </>
  );
}
