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
        <title>Oval: Oval Terms of Service</title>
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
          <Legal active="oval-terms-of-service" />
          <h3 className="mb-4 text-center">Oval Terms of Service</h3>
          <p className="mb-4">August 25, 2021</p>
          <p className="mb-4">
            Welcome to <a href="http://www.useoval.com">www.useoval.com</a> (the
            “Site”), a website of [Oval Technologies LLC], a [ Delaware ]
            corporation (“Oval” “we,” or “us”). This page explains the terms by
            which you may use the financial services we make available to you on
            our Site or on our mobile application (collectively the “Services”).
            By submitting your application to obtain an account with us
            (“Account”) and to use the Services, you signify that you have read,
            understood, and agree to be bound by these Oval Terms of Service
            (“Agreement”), Oval Account Agreement, the Deposit Account
            Agreements of the banking service provider for your account, other
            applicable terms and conditions referenced and incorporated in this
            Agreement, and to the collection and use of your information as set
            forth in the Oval Privacy Policy. You also agree to receive all
            notices and other communications from us electronically. Oval
            reserves the right to make unilateral modifications to these terms
            and will provide notice of these changes by posting an updated
            version to our legal page. “You” means the individual that is
            applying for or that has opened an Account to use the Services.
            PLEASE READ THIS AGREEMENT CAREFULLY TO ENSURE THAT YOU UNDERSTAND
            EACH PROVISION. THIS AGREEMENT CONTAINS A MANDATORY INDIVIDUAL
            ARBITRATION AND CLASS ACTION/JURY TRIAL WAIVER PROVISION THAT
            REQUIRES THE USE OF ARBITRATION ON AN INDIVIDUAL BASIS TO RESOLVE
            DISPUTES, RATHER THAN JURY TRIALS OR CLASS ACTIONS.
          </p>
          <h3 className="mb-4">
            1. Scope of the Services; Use of the Services; Eligibility
          </h3>
          <p className="mb-4">
            A. <strong>Eligibility</strong>. This is a contract between you and
            Oval. You must read and agree to these terms before using the
            Services. If you do not agree, you may not apply for an Account or
            use the Services. You may only apply for an Account or use the
            Services for personal purposes. By applying for an Account or using
            the Services you are forming a binding contract with Oval in
            compliance with this Agreement and all applicable local, state,
            national, and international laws, rules and regulations. There may
            be other eligibility requirements applicable to specific Services.
          </p>
          <p className="mb-4">
            B. <strong>Scope of the Services</strong>. Your Account gives you
            access to various Services, including the demand deposit account
            (“Deposit Account”), the Oval Card, and other services as made
            available from time-to-time by Oval and by Evolve Bank & Trust (our
            “Banking Services Provider”), and any other functionality that we
            may establish and maintain from time to time and in our sole
            discretion.
          </p>
          <p className="mb-4">
            C. <strong>Applying for an Account</strong>. You will need to
            provide personal information
          </p>
          <p className="mb-4">
            (“Personal Information”), when you apply for an Account for personal
            purposes. Personal Information may include your name, contact
            information, date of birth and certain other personal information;
            proof of address, personal identification, and any other documentary
            information used to verify your personal information. We provide
            Personal Information to our Banking Services Provider and other
            third-party service providers to determine your eligibility for the
            Services. We rely on the accuracy of the Personal Information you
            provide us when opening and maintaining your Account. We may deny
            your applications, suspend provision of the Services to you, or
            close your Account if Personal Information is out of date,
            incomplete, or inaccurate. At any time during the term of this
            Agreement and as part of your use of the Services, we may require
            additional Personal Information from you to verify your identity, to
            open and maintain accounts and aspects of the Services, and to
            assess your financial condition. You expressly consent and authorize
            us to retrieve additional Personal Information about you from our
            vendors and other third parties solely to assess the history and
            risks and to prevent fraud, including by obtaining information from
            credit reporting agencies and information bureaus, and you authorize
            and direct such third parties to compile and provide such
            information to us. You acknowledge that this may include names,
            addresses, credit history, and other data. You acknowledge that we
            may use Personal Information to verify any other information you
            provide to us, and that any information we collect may affect our
            assessment of your overall risk to our business.
          </p>
          <p className="mb-4">
            D. <strong>Account Management and Security</strong>. You are solely
            responsible for the activity that occurs on your Account, and you
            must keep your Account password secure. We encourage you to use
            “strong” passwords (for recommendations on what constitutes a strong
            password, check NIST SP 800-63B) with your Account. You must notify
            Oval immediately of any breach of security or unauthorized use of
            your Account. Oval will not be liable for any losses caused by any
            unauthorized use of your Account. We may suspend access to your
            Account if we believe that your Account has been compromised.
          </p>
          <p className="mb-4">
            E. <strong>Prohibitions</strong>. You may not use the Account or the
            Services (a) for any purpose that is unlawful or prohibited by this
            Agreement; (b) business purposes; (c) for the benefit of an
            individual, organization, or country identified on the United States
            Office of Foreign Assets Control’s Specially Designated Nationals
            List.
          </p>
          <p className="mb-4">
            F. <strong>Prohibitions</strong>. By registering for and using the
            Services, you are confirming that you will not use the Services (i)
            to accept payments in connection with any illegal, unauthorized, or
            not bona fide transactions; (ii) to handle, process, or transmit
            funds for any third party.
          </p>
          <p className="mb-4">
            We may, at any time and without notice, suspend or terminate your
            Account or your access to any of the Services if you engage in
            activities that violate the letter or spirit of this section. Our
            determination of whether a violation of this section has occurred
            will be final and binding, and any action taken with respect to
            enforcing this section will be at our sole discretion. Oval may
            modify this section at any time by posting a revised version in this
            Agreement.
          </p>
          <h3 className="mb-4">2. The Oval Services</h3>
          <p className="mb-4">
            A. <strong>Deposit Account</strong>. Your Deposit Account is a
            demand deposit account held with our Banking Services Provider and
            is subject to the terms of this Agreement and the additional terms
            of our Banking Services Provider. Your funds are fully insured by
            the Federal Deposit Insurance Corporation up to $250,000. Your
            Deposit Account will be used in connection with the provision of the
            other Services under this Agreement. You may also use your Deposit
            Account to the extent provided in the terms of our Banking Services
            Provider.
          </p>
          <p className="mb-4">
            B. <strong>Oval Virtual and Physical Cards</strong>.
          </p>
          <p className="mb-4">
            Your Oval Account gives you access to virtual and physical cards
            (the “Oval Card” or “Oval Cards”) that you can use to make purchases
            for yourself using funds in your Oval Deposit Account. Your Oval
            Card must only be used for any non-business purpose, such as for
            personal or household purchases, when issued in conjunction with
            your Account.
          </p>
          <div className="ml-8">
            <p className="mb-4">
              (i) <strong>Requesting and Receiving Oval Cards</strong>. When you
              sign up for a Oval Deposit Account, you will be issued one
              physical Oval Card.
            </p>
            <p className="mb-4">
              (ii) <strong>Spending Limits, Payments, and Refunds</strong>.
              Spending on your Oval Card(s) is limited by the available funds in
              your Deposit Account. Your Oval Card transactions will be settled
              as they occur by debiting your Oval Deposit Account an amount
              equal to each Oval Card transaction. Refunds to your Oval Card
              will be applied to your Oval Deposit Account. If you use your Oval
              Card for preauthorized, recurring, or subscription payments, you
              should regularly monitor the available funds in your Deposit
              Account to ensure that funds are available to make those payments.
              If funds are not available at the time a preauthorized, recurring
              or subscription payment is attempted on your Oval Card, the
              transaction will ordinarily be declined. We will generally decline
              transactions attempted on your Oval Card that would overdraw your
              Deposit Account. If, however, we do not decline a transaction and
              that transaction does overdraw your account, we may limit your
              ability to use other features or spend additional funds from your
              Deposit Account until your Deposit Account has a positive balance
              and the transaction that has overdrawn your account has been paid.
              For more information related to the manner in which your Oval Card
              transactions are debited and settled, refer to the Oval Card
              Agreement.
            </p>
            <p className="mb-4">
              (iii) <strong>Disputes</strong>. If you have a dispute about a
              purchase on your Oval Card that you cannot resolve with the
              merchant directly (a “Disputed Charge”), please contact us at
              info@useoval.com as soon as possible, and in all cases within 60
              days of the charge. We cannot help you with Disputed Charges you
              report to us more than 60 days after the charge appears on your
              account. Disputed Charges will remain debited from your Deposit
              Account while we determine the outcome of the dispute. We will
              resolve all disputes in a commercially reasonable timeframe. If we
              determine you should be reimbursed, we will credit the amount of
              the Disputed Charge back to your Deposit Account and you will not
              be charged any fees. If we determine that the Disputed Charge was
              valid, your Deposit Account will not be reimbursed, and you will
              be charged a fee as set forth in the Fee Schedule. You assign and
              transfer to us any rights and claims, excluding tort claims, that
              you have against a merchant for any Disputed Charge that is fully
              or partially credited to your Deposit Account. We may assign and
              transfer the rights you assign and transfer to us under this
              provision to the Oval Card Issuer.
            </p>
            <p className="mb-4">
              (iv) <strong>Records, Fees, and Communication</strong>. All
              transaction records and periodic statements may be found in your
              dashboard for your Account. All fees associated with the Oval
              Cards may be found in the Oval Card Agreement.
            </p>
            <p className="mb-4">
              (v) <strong>Other Oval Card Terms</strong>. Oval Cards are issued
              by Evolve Bank & Trust (the “Issuer.” ) You agree to the
              applicable Evolve Bank & Trust terms and conditions. You agree
              that any future changes to the relevant Evolve Bank & Trust terms
              and conditions will apply to your Oval Card, whether or not Oval
              or Evolve Bank & Trust alerts you to those changes to the Evolve
              terms and conditions.
            </p>
          </div>
          <p className="mb-4">
            <strong>C. Mobile Remote Deposit Capture</strong>. You may remotely
            deposit paper checks into your Deposit Account through the Oval app
            by creating a Mobile Deposit. When making a Mobile Deposit, you are
            also subject to the Evolve Bank & Trust Deposit Account Agreement &
            Service Terms, including the Funds Availability Disclosure section
            of those terms. A “Mobile Deposit” is the information that is
            transmitted to us allowing for the deposit, processing, and
            collection of the item deposited. You may only deposit items made
            payable to you. We reserve the right to reject any Mobile Deposit
            for any reason.
          </p>
          <div className="ml-8">
            <p className="mb-4">
              (i) <strong>Depositing your Check</strong>. You are responsible
              for creating an accurate Mobile Deposit. To deposit your check,
              you must endorse the check, enter the correct amount of the check
              (you are liable for any errors you make during the deposit
              process), create a check image using the camera on your mobile
              device to take a picture of the front and back of your check. You
              may only deposit eligible items through the mobile remote deposit
              capture service. To mitigate the risk of fraud or the presentment
              of duplicate items, you agree to mark on the original paper check
              that the item has been deposited electronically. You also agree to
              retain all checks deposited via mobile remote deposit capture for
              at least two business days after the deposit is made and to
              destroy all deposited checks as soon as reasonably possible, and
              in no event later than 30 days after the deposit.
            </p>
            <p className="mb-4">
              (ii) <strong>Returned Items</strong>. You acknowledge and agree
              that we may charge you any fees associated with a returned item if
              a check is returned to us for any reason.
            </p>
            <p className="mb-4">
              (iii) <strong>Representations and Warranties</strong>. In addition
              to any other representations and warranties applicable to your
              Deposit Account, with respect to each Mobile Deposit, you make any
              representation or warranty that would have applied had you
              deposited the original paper check. This includes representations
              and warranties we make on your behalf when we transfer, present,
              or originate the Mobile Deposit created from your check image.
              These representations and warranties include but are not limited
              to, that: (a) the transmissions contain accurate images of the
              front and back of the original checks; (b) the transmissions
              contain all necessary endorsements; and (c) no depository bank,
              drawee, drawer, or endorser will be asked to make a payment based
              on an item that it has already paid.
            </p>
          </div>
          <p className="mb-4">
            D. <strong>Digital Checks</strong>. You may send digital checks to
            payees from your Deposit Account. Payees will be able to print the
            digital check or present the digital check via email or other
            electronic means to the payee’s bank for deposit. By creating and
            authorizing the issuance of a digital check or remotely created
            check (“RCC”), you authorize Oval to honor the RCC in the amount and
            to the payee stated on the RCC even though the RCCs do not contain
            your signature. You authorize Oval to debit your Account for any
            claim or return based upon an unauthorized RCC and you agree to
            indemnify and hold Oval harmless from and against any claims,
            liabilities, costs and expenses (including attorney’s fees)
            resulting directly or indirectly from any breach of the foregoing
            warranty.
          </p>
          <h3 className="mb-4">3. Fees and Payment.</h3>
          <p className="mb-4">
            A. <strong>Payment Method</strong>. You must keep a valid payment
            method on file with us to pay for all fees owed. We will debit fees
            from your Deposit Account or another payment method that you
            authorize. Oval will charge the payment method that you authorize
            for all applicable fees until the Services are terminated, and any
            and all outstanding fees have been paid in full. If we are unable to
            process payment of fees using your payment method on file, we will
            make a second attempt to process the payment using the payment
            method on file within three (3) days. If the second attempt is not
            successful, we will notify you, and may suspend and revoke access to
            the Services. If the Services are suspended, your Services will be
            reactivated upon payment of any amounts owed. If the outstanding
            fees remain unpaid for sixty (60) days following the date of
            suspension, then Wise reserves the right to terminate your Account.
            You may change your payment method through your account settings.
          </p>
          <p className="mb-4">
            B. <strong>Applicable Fees</strong>. Your use of the Services is
            subject to the fees on the Fee Schedule, which may be updated from
            time-to-time at our discretion. For fees owed under this Agreement,
            we will automatically charge you using the payment method you have
            on file with us and by agreeing to this Agreement, you authorize us
            to do this. You will be charged via invoice each month on your
            billing date (“Billing Date”) for all outstanding fees that have not
            previously been charged or collected. All fees are exclusive of
            applicable taxes. You are responsible for all applicable taxes that
            arise from or as a result of your use of the Services.
          </p>
          <p className="mb-4">
            C. <strong>Collection and Right to Set-Off</strong>. You agree to
            pay all amounts owed to us on demand. Your failure to pay amounts
            owed to us under this Agreement is a breach and you will be liable
            for any costs we incur during collection in addition to the amount
            you owe. Collection costs may include attorneys’ fees, costs of
            arbitration or court proceeding, collection agency fees, any
            applicable interest, and any other related cost. We may collect
            amounts you owe to us under this Agreement by deducting any amounts
            you owe to use from your Deposit Account. You grant us a security
            interest in and right to set off against the Deposit Account.
          </p>
          <h3 className="mb-4">4. Proprietary Rights</h3>
          <p className="mb-4">
            A. <strong>Limited License</strong>. Subject to the terms and
            conditions of this Agreement, you are hereby granted a
            non-exclusive, limited, non-transferable, freely revocable license
            to use the Services as permitted by the features of the Services.
            Oval reserves all rights not expressly granted herein in the
            Services and the Oval IP (as defined below). Oval may terminate this
            license at any time for any reason or no reason. The Services and
            all materials therein or transferred thereby, including, without
            limitation, all software, images, text, graphics, illustrations,
            logos, patents, trademarks, service marks, copyrights, photographs,
            audio, videos, music, and other content available on the Site (the
            “Oval IP”), and all Intellectual Property Rights related thereto,
            are the exclusive property of Oval and its licensors. Except as
            explicitly provided herein, nothing in this Agreement shall be
            deemed to create a license in or under any such Intellectual
            Property Rights, and you agree not to sell, license, rent, modify,
            distribute, copy, reproduce, transmit, publicly display, publicly
            perform, publish, adapt, edit or create derivative works from any
            Oval IP. Use of the Oval IP for any purpose not expressly permitted
            by this Agreement is strictly prohibited. For the purposes of this
            Agreement, “Intellectual Property Rights” means all patent rights,
            copyright rights, mask work rights, moral rights, rights of
            publicity, trademark, trade dress and service mark rights, goodwill,
            trade secret rights and other intellectual property rights as may
            now exist or hereafter come into existence, and all applications
            therefore and registrations, renewals and extensions thereof, under
            the laws of any state, country, territory or other jurisdiction.
          </p>
          <p className="mb-4">
            B. <strong>Feedback</strong>. You may choose to, or we may invite
            you to, submit comments or ideas about the Services, including
            without limitation about how to improve the Services or our products
            (“Feedback”). By submitting any Feedback, you agree that your
            disclosure is gratuitous, unsolicited and without restriction, and
            will not place Oval under any fiduciary or other obligation, and
            that we are free to use your Feedback without any additional
            compensation to you, or to disclose your Feedback on a
            non-confidential basis or otherwise to anyone. You further
            acknowledge that, by acceptance of your submission, Oval does not
            waive any rights to use similar or related ideas previously known to
            Oval, or developed by its employees, or obtained from sources other
            than you.
          </p>
          <p className="mb-4">
            C. <strong>Copyright Complaints</strong>. If you believe that any
            material on the Site infringes upon any copyright which you own or
            control, you may send a written notification of such infringement to
            our Designated Agent as set forth below:
          </p>
          <p className="mb-4">
            Oval Technologies LLC, 2631 plantation hollow ct missouri city tx
            77459
          </p>
          <p className="mb-4">
            [Email: <a href="mailto:info@useoval.com">info@useoval.com</a> ]
          </p>
          <p className="mb-4">
            To meet the notice restrictions under the Digital Millennium
            Copyright Act, the notification must be a written communication that
            includes the following:
          </p>
          <div className="ml-8">
            <ul className="mb-4 list-disc">
              <li>
                A physical or electronic signature of a person authorized to act
                on behalf of the owner of an exclusive right that is allegedly
                infringed;
              </li>
              <li>
                Identification of the copyrighted work claimed to have been
                infringed, or, if multiple copyrighted works at a single online
                site are covered by a single notification, a representative list
                of such works at that site;
              </li>
              <li>
                Identification of the material that is claimed to be infringing
                or to be the subject of infringing activity and that is to be
                removed or access to which is to be disabled, and information
                reasonably sufficient to permit us to locate the material;
              </li>
              <li>
                Information reasonably sufficient to permit us to contact the
                complaining party, such as an address, telephone number and, if
                available, an electronic mail address at which the complaining
                party may be contacted;
              </li>
              <li>
                A statement that the complaining party has a good-faith belief
                that use of the material in the manner complained of is not
                authorized by the copyright owner, its agent or the law; and
              </li>
              <li>
                A statement that the information in the notification is
                accurate, and under penalty of perjury, that the complaining
                party is authorized to act on behalf of the owner of an
                exclusive right that is allegedly infringed.
              </li>
            </ul>
          </div>
          <h3 className="mb-4">5. Site Data and Privacy</h3>
          <p className="mb-4">
            You understand that by using the Services you consent to the
            collection, use and disclosure of Personal Information and aggregate
            data we collect from your use of the Services (“Site Data”) as set
            forth in our Privacy Policy, and to have Personal Information and
            Site Data collected, used, transferred to and processed in the
            United States. You grant us a worldwide, irrevocable license to use,
            modify, distribute, copy, and create derivative works from Site Data
            for the purposes identified in this Agreement. Oval uses
            commercially reasonable physical, managerial, and technical
            safeguards to preserve the integrity and security of your Personal
            Information and implement your privacy settings. However, we cannot
            guarantee that unauthorized third parties will never be able to
            defeat our security measures or use Personal Information for
            improper purposes. You acknowledge that you provide Personal
            Information at your own risk. Your use of the Deposit Account and
            other financial services is subject to the privacy policies of our
            Banking Services Provider.
          </p>
          <h3 className="mb-4">6. Third-Party Links and Information</h3>
          <p className="mb-4">
            The Services may contain links to third-party materials that are not
            owned or controlled by Oval. Oval does not endorse or assume any
            responsibility for any such third-party services, information,
            materials, products, or Services. If you access a third-party
            website, application or service from the Services, you do so at your
            own risk, and you understand that this Agreement and Oval’s Privacy
            Policy do not apply to your use of such third-party services. You
            expressly relieve Oval from any and all liability arising from your
            use of any third-party websites, applications, services, or content.
            Additionally, your dealings with or participation in promotions of
            advertisers found on the Services, including payment and delivery of
            goods, and any other terms (such as warranties) are solely between
            you and such advertisers. You agree that Oval shall not be
            responsible for any loss or damage of any sort relating to your
            dealings with such advertisers.
          </p>
          <h3 className="mb-4">7. Indemnification</h3>
          <p className="mb-4">
            You agree to defend, indemnify and hold harmless Oval and its
            subsidiaries, agents, licensors, managers, and other affiliated
            companies, and their employees, contractors, agents, officers and
            directors, our Banking Services Provider, and our third-party
            service providers, from and against any and all third-party claims,
            damages, obligations, losses, liabilities, costs or debt, and
            expenses (including but not limited to attorney’s fees) arising out
            of, related to, or resulting from : (a) your use of and access to
            the Services, including any data or content transmitted or received
            by you; (b) your violation of any term of this Agreement, including
            without limitation your breach of any of the representations and
            warranties above; (c) your violation of any third-party right,
            including without limitation any right of privacy or Intellectual
            Property Rights; (d) your violation of any applicable law, rule or
            regulation; (e) your intentional misconduct; or (f) any other
            party’s access and use of the Services with your unique username,
            password or other appropriate security code.
          </p>
          <h3 className="mb-4">8. No Warranty</h3>
          <p className="mb-4">
            THE SERVICES ARE PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS.
            USE OF THE SERVICES IS AT YOUR OWN RISK. TO THE MAXIMUM EXTENT
            PERMITTED BY APPLICABLE LAW, THE SERVICES ARE PROVIDED WITHOUT
            WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT
            NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
            PARTICULAR PURPOSE, OR NON-INFRINGEMENT. NO ADVICE OR INFORMATION,
            WHETHER ORAL OR WRITTEN, OBTAINED BY YOU FROM OVAL OR THROUGH THE
            SERVICES WILL CREATE ANY WARRANTY NOT EXPRESSLY STATED HEREIN.
            WITHOUT LIMITING THE FOREGOING, OVAL ITS SUBSIDIARIES, ITS
            AFFILIATES, AND ITS LICENSORS DO NOT WARRANT THAT THE INFORMATION
            PROVIDED TO YOUR THROUGH THE SERVICES IS ACCURATE, RELIABLE OR
            CORRECT; THAT THE SERVICES WILL MEET YOUR REQUIREMENTS; THAT THE
            SERVICES WILL BE AVAILABLE AT ANY PARTICULAR TIME OR LOCATION,
            UNINTERRUPTED OR SECURE; THAT ANY DEFECTS OR ERRORS WILL BE
            CORRECTED; OR THAT THE SERVICES ARE FREE OF VIRUSES OR OTHER HARMFUL
            COMPONENTS. ANY CONTENT DOWNLOADED OR OTHERWISE OBTAINED THROUGH THE
            USE OF THE SERVICES IS DOWNLOADED AT YOUR OWN RISK AND YOU WILL BE
            SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR MOBILE
            DEVICE OR LOSS OF DATA THAT RESULTS FROM SUCH DOWNLOAD OR YOUR USE
            OF THE SERVICES.
          </p>
          <p className="mb-4">
            OVAL DOES NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY
            FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY
            THROUGH THE SERVICES OR ANY HYPERLINKED WEBSITE OR SERVICE, AND OVAL
            WILL NOT BE A PARTY TO OR IN ANY WAY MONITOR ANY TRANSACTION BETWEEN
            YOU AND THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.
          </p>
          <h3 className="mb-4">9. Limitation of Liability</h3>
          <p className="mb-4">
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL
            OVAL, ITS AFFILIATES, AGENTS, DIRECTORS, EMPLOYEES, SUPPLIERS OR
            LICENSORS BE LIABLE FOR ANY INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL,
            CONSEQUENTIAL OR EXEMPLARY DAMAGES, INCLUDING WITHOUT LIMITATION
            DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA OR OTHER INTANGIBLE
            LOSSES, ARISING OUT OF OR RELATING TO THE USE OF, OR INABILITY TO
            USE, THE SERVICES. UNDER NO CIRCUMSTANCES WILL OVAL BE RESPONSIBLE
            FOR ANY DAMAGE, LOSS OR INJURY RESULTING FROM HACKING, TAMPERING OR
            OTHER UNAUTHORIZED ACCESS OR USE OF THE SERVICES OR YOUR ACCOUNT OR
            THE INFORMATION CONTAINED THEREIN.
          </p>
          <p className="mb-4">
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, OVAL ASSUMES NO
            LIABILITY OR RESPONSIBILITY FOR ANY (I) ERRORS, MISTAKES, OR
            INACCURACIES OF CONTENT; (II) PERSONAL INJURY OR PROPERTY DAMAGE, OF
            ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO OR USE OF OUR
            SERVICES; (III) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE
            SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION STORED THEREIN; (IV)
            ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE
            SERVICES; (V) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE THAT MAY
            BE TRANSMITTED TO OR THROUGH OUR SERVICES BY ANY THIRD PARTY; (VI)
            ANY ERRORS OR OMISSIONS IN ANY CONTENT OR FOR ANY LOSS OR DAMAGE
            INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, EMAILED,
            TRANSMITTED, OR OTHERWISE MADE AVAILABLE THROUGH THE SERVICES;
            AND/OR (VII) USER CONTENT OR THE DEFAMATORY, OFFENSIVE, OR ILLEGAL
            CONDUCT OF ANY THIRD PARTY. IN NO EVENT SHALL OVAL, ITS AFFILIATES,
            AGENTS, DIRECTORS, EMPLOYEES, SUPPLIERS, OR LICENSORS BE LIABLE TO
            YOU FOR ANY CLAIMS, PROCEEDINGS, LIABILITIES, OBLIGATIONS, DAMAGES,
            LOSSES OR COSTS IN AN AMOUNT EXCEEDING $100.00.
          </p>
          <p className="mb-4">
            THIS LIMITATION OF LIABILITY SECTION APPLIES WHETHER THE ALLEGED
            LIABILITY IS BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY,
            OROLID ANY OTHER BASIS, EVEN IF OVAL HAS BEEN ADVISED OF THE
            POSSIBILITY OF SUCH DAMAGE. THE FOREGOING LIMITATION OF LIABILITY
            SHALL APPLY TO THE FULLEST EXTENT PERMITTED BY LAW IN THE APPLICABLE
            JURISDICTION.
          </p>
          <h3 className="mb-4">10. Term and Termination</h3>
          <p className="mb-4">
            This Agreement is effective when you submit your application to us
            and continues until terminated by either you or us, or in accordance
            with the Banking Services Provider’s agreements, third-party payment
            processor agreements, or as otherwise set forth in this Agreement.
            You may terminate this Agreement by paying all amounts you owe and
            providing notice to us; except that you will still be responsible
            for any charges, fees, fines, and other losses caused by your action
            or inaction prior to terminating this Agreement. We may terminate
            this Agreement, or suspend your Account for any reason, by providing
            you notice, or we may terminate this Agreement immediately in the
            event you breach or violate any of the terms of this Agreement, as
            determined in the sole discretion of Oval.
          </p>
          <h3 className="mb-4">
            11. Governing Law, Arbitration, and Class Action/Jury Trial Waiver
          </h3>
          <p className="mb-4">
            A. <strong>Governing Law</strong>. You agree that: (i) the Services
            shall be deemed solely based in Delaware, except as may be set forth
            in the Bank Provider Agreements; and (ii) the Services shall be
            deemed a passive one that does not give rise to personal
            jurisdiction over us, either specific or general, in jurisdictions
            other than Delaware. This Agreement shall be governed by the
            internal substantive laws of the State of Delaware, without respect
            to its conflict of laws principles. The parties acknowledge that
            this Agreement evidences a transaction involving interstate
            commerce. Notwithstanding the preceding sentences with respect to
            the substantive law, any arbitration conducted pursuant to the terms
            of this Agreement shall be governed by the Federal Arbitration Act
            (9 U.S.C. §§ 1-16). You agree to submit to the personal jurisdiction
            of the federal and state courts located in Delaware for any actions
            for which we retain the right to seek injunctive or other equitable
            relief in a court of competent jurisdiction to prevent the actual or
            threatened infringement, misappropriation or violation of a our
            copyrights, trademarks, trade secrets, patents, or other
            intellectual property or proprietary rights, as set forth in the
            Arbitration provision below, including any provisional relief
            required to prevent irreparable harm. Subject to Section 11.B, you
            agree that the federal or state courts located in Delaware is the
            proper forum for any appeals of an arbitration award or for trial
            court proceedings in the event that the Arbitration provision below
            is found to be unenforceable.
          </p>
          <p className="mb-4">
            B. <strong>Arbitration</strong>. READ THIS SECTION CAREFULLY BECAUSE
            IT REQUIRES THE PARTIES TO ARBITRATE THEIR DISPUTES AND LIMITS THE
            MANNER IN WHICH YOU CAN SEEK RELIEF FROM OVAL. For any dispute with
            Oval, you agree to first contact us at 8 The Green, Suite #6880,
            Dover Delaware 19901 and attempt to resolve the dispute with us
            informally. In the unlikely event that Oval has not been able to
            resolve a dispute it has with you after sixty (60) days, we each
            agree to resolve any claim, dispute, or controversy (excluding any
            claims arising from protection of Intellectual Property Rights,
            breach of Confidential Information, which will be resolved through
            litigation in accordance with Section 11.A, or for injunctive or
            other equitable relief as provided below) arising out of or in
            connection with or relating to this Agreement, or the breach or
            alleged breach thereof (collectively, “Claims”), by binding
            arbitration by JAMS. Claims with amounts claimed greater than
            $250,000 will apply the JAMS Comprehensive Arbitration Rules and
            Procedures; and Disputes with amounts claimed less than or equal to
            $250,000 will apply the JAMS Streamlined Arbitration Rules. The
            arbitration will be conducted in Delaware, unless you and Oval agree
            otherwise. If JAMS cannot administer the Claim, either party may
            petition the US District Court for Delawre to appoint an arbitrator.
            Each party will be responsible for paying any JAMS filing,
            administrative and arbitrator fees in accordance with JAMS rules,
            and the award rendered by the arbitrator shall include costs of
            arbitration, reasonable attorneys’ fees and reasonable costs for
            expert and other witnesses. Any judgment on the award rendered by
            the arbitrator may be entered in any court of competent
            jurisdiction. Either party may commence arbitration by providing a
            written demand for arbitration to JAMS and the other party detailing
            the subject of the Claim and the relief requested. Each party will
            continue to perform its obligations under this Agreement unless that
            obligation or the amount (to the extent in dispute) is itself the
            subject of the Claim. Nothing in this Section shall be deemed as
            preventing either party from seeking injunctive or other equitable
            relief from the courts as necessary to prevent the actual or
            threatened infringement, misappropriation, or violation of our data
            security, Intellectual Property Rights or other proprietary rights.
            Proceedings and information related to them will be maintained as
            confidential, including the nature and details of the Claim,
            evidence produced, testimony given, and the outcome of the Claim,
            unless such information was already in the public domain or was
            independently obtained. Person and Oval, and all witnesses,
            advisors, and arbitrators will only share such information as
            necessary to prepare for or conduct arbitration or other legal
            proceeding, or enforcement of the outcome, unless additional
            disclosure is required by law.
          </p>
          <p className="mb-4">
            C. <strong>Class Action/Jury Trial Waiver</strong>. With respect to
            all persons and entities, regardless of whether they have obtained
            an account or used the services for personal, commercial or other
            purposes, all Claims must be brought in the parties’ individual
            capacity, and not as a plaintiff or class member in any purported
            class action, collective action, private attorney general action or
            other representative proceeding. This waiver applies to class
            arbitration, and, unless we agree otherwise, the arbitrator may not
            consolidate more than one person’s claims. You agree that, by
            entering into this agreement, you and Oval are each waiving the
            right to a trial by jury or to participate in a class action,
            collective action, private attorney general action, or other
            representative proceeding of any kind.
          </p>
          <h3 className="mb-4">12. Communication</h3>
          <p className="mb-4">
            By providing us with a telephone number for a mobile device,
            including a number that you later convert to a mobile device number,
            you are expressly consenting to receiving communications—including
            but not limited to prerecorded or artificial voice message calls,
            text messages, and calls made by an automatic telephone dialing
            system—from us and our affiliates and agents at that number, about
            any product or services offered by Oval. This express consent
            applies to each such telephone number that you provide to us now or
            in the future. Calls and messages may incur access fees from your
            mobile services provider. You understand that you need not provide
            this consent as a condition of obtaining goods or services from
            Oval, and that you may decline to provide or revoke your consent at
            any time by emailing [info@useoval.com] or by any other method that
            reasonably ensures we receive your revocation.
          </p>
          <p className="mb-4">
            By providing us with a telephone number, you agree that Oval may
            record any telephone conversation with you (or any another
            individual) during any telephone call to or from that number for
            training purposes, whether or not the call was initiated by you, and
            whether or Oval disclosed the fact that the call was recorded during
            the call.
          </p>
          <h3 className="mb-4">13. General</h3>
          <p className="mb-4">
            A. <strong>Assignment</strong>. This Agreement, and any rights and
            licenses granted hereunder, may not be transferred or assigned by
            you, but may be assigned by Oval without restriction. Any attempted
            transfer or assignment in violation hereof shall be null and void.
          </p>
          <p className="mb-4">
            B.{" "}
            <strong>
              Notification Procedures and Changes to the Agreement
            </strong>
            . You consent to us providing notices to you under this Agreement
            electronically and understand that this consent has the same legal
            effect as a physical signature. We will provide notices to you
            electronically through your Account, and via text or SMS to the
            phone numbers provided to us by you. If you sign up to receive
            certain Oval notifications or information via text or SMS, you may
            incur additional charges from your wireless provider for these
            notices. You agree that you are solely responsible for any such
            charges. Notices affecting the terms of this Agreement will be sent
            to you and are considered received 24 hours after they are sent. You
            understand that you may not use the Services unless you consent to
            receive notices from us electronically. You may only withdraw
            consent to receive notices electronically by closing your Account.
            Notices may include alerts about the Services, your Account, and
            your Deposit Account and may provide you the ability to respond with
            information about Deposit Account transactions or your Account. You
            may disable notification preferences to limit the use of certain
            Service features or to decrease financial risks to yourself. You are
            required to maintain a regularly updated web browser, and computer
            and mobile device operating systems to receive notices correctly.
            You will be responsible for all costs imposed by internet or mobile
            service providers for sending or receiving notices electronically.
            Contact us immediately at 8 The Green, Suite #6880,
          </p>
          <p className="mb-4">
            Dover Delaware 19901 if you are having trouble receiving notices
            from us.
          </p>
          <p className="mb-4">
            C. <strong>Entire Agreement/Severability</strong>. This Agreement,
            together with any amendments and any additional agreements you may
            enter into with Oval in connection with the Services, shall
            constitute the entire agreement between you and Oval concerning your
            Account and the Services. If any provision of this Agreement is
            deemed invalid by a court of competent jurisdiction, the invalidity
            of such provision shall not affect the validity of the remaining
            provisions of this Agreement, which shall remain in full force and
            effect, except that in the event of unenforceability of the
            universal Class Action/Jury Trial Waiver, the entire arbitration
            agreement shall be unenforceable.
          </p>
          <p className="mb-4">
            D. <strong>No Waiver</strong>. No waiver of any term of this
            Agreement shall be deemed a further or continuing waiver of such
            term or any other term, and Oval’s failure to assert any right or
            provision under this Agreement shall not constitute a waiver of such
            right or provision.
          </p>
          <p className="mb-4">
            E. <strong>Legal Orders</strong>. We may respond to and comply with
            any subpoenas, warrants, liens, or any other legal order we receive
            related to your use of the Services. We are not responsible to you
            for any losses you incur due to our response to such legal order. We
            may hold funds or provide information as required by the issuer of
            the legal order or take any other actions we believe are required of
            us under legal orders. Where permitted, we will provide you
            reasonable notice that we have received such an order.
          </p>
          <p className="mb-4">
            F. <strong> Survival</strong>. Any and all provisions of this
            Agreement reasonably giving rise to continued obligations of the
            parties will survive termination of this Agreement.
          </p>
          <p className="mb-4">
            G. <strong>Relationship</strong>. No joint venture, partnership,
            employment, or agency relationship exists between you and Oval as a
            result of this Agreement or your use of the Site.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
