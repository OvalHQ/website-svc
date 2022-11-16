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
          Oval: EVOLVE BANK & TRUST BUSINESS ACCOUNT AND CARDHOLDER AGREEMENT
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
          <Legal active="business-account-agreement-and-cardholder-agreement" />
          <h3 className="mb-4 text-center">
            EVOLVE BANK & TRUST BUSINESS ACCOUNT AND CARDHOLDER AGREEMENT
          </h3>
          <h3 className="mb-4">I. INTRODUCTION.</h3>
          <p className="mb-4">
            This document, as amended or supplemented by the attached
            disclosures (collectively, this “Agreement”), contains the general
            terms, conditions and disclosures for the Evolve Bank & Trust
            commercial deposit account (the “Account”) and any Card (as defined
            below) and constitutes an agreement between the Bank (as defined
            below) and you. For purpose of this Agreement, the term “Account”
            may also collectively include Sub-Deposit Accounts of such Account.
            This Agreement also includes any disclosures or notices we may
            provide to you related to your Account or Card.
          </p>
          <p className="mb-4">
            References to the “Bank,” “we,” “us,” or “our” means Evolve Bank &
            Trust, our successors, affiliates, and assignees. References to
            “you” and “your” means the entity that holds the Account, and, as
            applicable, each person who has been issued a Card, is provided
            access to the Account or is an authorized user of the holder of the
            Account. This Agreement may be supplemented or amended as set forth
            in Section V(E) (Changes in Terms). Bank services and access and use
            of your Account may be provided to you through the website and/or
            smart phone application of our service provider, Solid Financial
            Technologies, Inc., at{" "}
            <a href="www.solidfi.com ">www.solidfi.com </a>(the “Service
            Provider,” and its website and smart phone application, the “Service
            Provider Platform”). The Service Provider or its affiliates may
            offer you additional services through its Service Provider Platform,
            pursuant and subject to the terms and conditions between you and the
            Service Provider (the “Services” and such terms and conditions, the
            “Service Provider Terms”), and such Services are not governed by
            this Agreement and not offered by Bank. Please see Section II(D)
            (Service Provider) for additional information.
          </p>
          <p className="mb-4">
            By opening or continuing to maintain an Account with us or by
            accepting or using the Card, you agree to be bound by this
            Agreement, and all applicable agreements, disclosures, and other
            documents, as well as by all applicable federal or state laws,
            statutes and regulations. Please keep a copy of this Agreement for
            your future reference.
          </p>
          <p className="mb-4">
            We may decline to open an Account or issue a Card for any reason, or
            for no reason. We are not liable for any damages or liabilities
            resulting from refusal of an Account or Card relationship.
          </p>
          <p className="mb-4">
            <strong>
              THIS AGREEMENT IS SUBJECT TO MANDATORY ARBITRATION PURSUANT TO THE
              FEDERAL ARBITRATION ACT AND A WAIVER OF CLASS ACTION AND JURY
              PROVISION. PLEASE CAREFULLY READ SECTION IV (ARBITRATION AND
              WAIVERS).
            </strong>
          </p>
          <h3 className="mb-4">II. THE ACCOUNT.</h3>
          <p className="mb-4">
            A. <strong>Availability</strong>. The Account and Card are available
            to an entity legally operating in the U.S. and with a U.S. physical
            address. The Account is only available for business purposes only,
            and you must not use it for personal, family, or household purposes.
            The Card may not be used for personal, family, or household
            purposes. You acknowledge and understand that neither the Account
            nor Card will not be treated as a consumer account or card under the
            provisions of state and federal law. You are not entitled to open an
            Account under this Agreement if you are not a corporation,
            unincorporated business association, partnership, limited liability
            company, incorporated nonprofit organization or sole proprietorship.
            We reserve the right to close your Account if we determine that it
            is used for any impermissible purpose, as we may determine from time
            to time. To open an Account or be issued a Card, you must provide
            any information we may request from time to time. Each owner of an
            Account and/or Card shall have a continuing obligation to provide
            any other documentation we may request from time to time, including
            any information required under our customer identification program
            to establish your identity.
          </p>
          <p className="mb-4">
            You must also agree to go paperless. This means that: (1) you must
            keep us supplied with your valid email address and telephone number;
            and (2) you must agree to accept the Evolve Bank & Trust Electronic
            Communication Consent, which governs entering into electronic
            transactions and electronic delivery of all communications.
          </p>
          <p className="mb-4">
            B. <strong>Account Type and Ownership</strong>. The Account is a
            transaction account that does not pay interest, and the Card is a
            payment access device to your Account that allows you to make
            certain purchases, payments and transfers to third parties. The
            Account may not be opened as a joint account. You cannot give a
            security interest or pledge your Account to someone other than us
            without first getting our express written consent. We are not
            required to give consent to a security interest or pledge to someone
            else. Unless we agree in a separate writing otherwise, a security
            interest or pledge to someone else must be satisfied or released
            before any right to withdraw from the account can be exercised. You
            must immediately report to us any changes in Account ownership
            information that you originally provided to us in connection with
            the submission of your application for an Account.
          </p>
          <p className="mb-4">
            You may designate authorized users to initiate transactions on your
            behalf or take any action under this Agreement that you may have
            taken, and any action taken by an authorized user shall be fully
            binding on you. You may not permit an authorized user to initiate a
            transfer, payment order or transaction in the absence of proper
            supervision and safeguards. If you permit another person to have
            access to the Card or Account, this will be treated as if you
            authorized such use and you will be liable for all transactions and
            fees incurred by those persons. You are wholly responsible for the
            use of each Card and Account use according to the terms and
            conditions of this Agreement. You are liable for all transactions
            made with the Card(s) or Account by your authorized user(s). You are
            the Card owner and are responsible for all transactions and fees
            incurred by you or any authorized user(s). You may terminate the
            authority of any authorized user at any time by giving us prior
            notice of termination. To terminate access of an authorized user to
            a Card or Account, call the toll-free number on the back of your
            Card or customer service at +1 (888) 610-2324 and you must follow-up
            not later than ten (10) business days with the written notification
            to revoke (cancel) permission for any person you previously
            authorized to use your Card or Account. Until we have received your
            written notice of such a revocation (cancelation) and have had a
            reasonable time to act upon the written notification of cancelation,
            you are responsible for all transactions and fees incurred by you or
            any authorized user. If you tell us to revoke (cancel) another
            person’s use of your Card or Account, we may revoke (cancel) your
            Card and Account credentials.
          </p>
          <p className="mb-4">
            Except as otherwise provided by law, you shall be liable for any
            loss or damage to which your negligence contributed or which
            resulted in unauthorized, fraudulent, or dishonest acts by your
            current and/or former authorized users. Such liability includes
            instances when a current or former authorized user effects one or
            more payment orders or transactions or improper use of security
            procedures to effect a payment order or transaction to your
            detriment. Notwithstanding anything to the contrary, you are liable
            for all losses relating to unauthorized funds transfers that do not
            result solely from our negligence or intentional misconduct, unless
            the laws governing your account requires a lesser liability.
          </p>
          <p className="mb-4">
            C. <strong>Opening an Account</strong>. To open an Account and
            request a Card, you must submit to us an application and all
            information that we may require. You represent to the Bank that you
            are authorized to do business in the manner indicated to us and that
            the acts of person(s) opening the Account have been ratified and
            that all information submitted to us by and concerning you is true
            and complete and, to the extent applicable, reflects in all material
            respects the business, financial condition, and principal partners,
            owners, or officers of your business. You agree that the Bank may
            rely on such representations without requiring additional
            information or documentation and that you will furnish such
            information upon request. You are solely responsible for meeting any
            legal requirements to establish and maintain the type of Account
            requested and have a duty to inform us of the status of any change
            to your organization, including any change to the type of entity.
          </p>
          <p className="mb-4">
            To help the government fight the funding of terrorism and money
            laundering activities, Federal law requires us to obtain, verify and
            record information that identifies each customer who opens an
            Account. This means that when you open an Account, we will ask for
            your name, address, tax identification number, and other information
            that will allow us to identify you. Federal regulations require that
            you provide us with information concerning the beneficial owners of
            a legal entity at Account opening. We will request the name,
            address, date of birth, and taxpayer ID number or social security
            number of certain beneficial owners and a control person. We may
            also ask to see other identifying documents, such as a driver’s
            license, taxpayer identification number; passport number and country
            of issuance; alien identification card number; or number and country
            of issuance of any other government-issued document evidencing
            nationality or residence and bearing a photograph or similar
            safeguard. If, for any reason, you, any control person or beneficial
            owner are unable to provide the information necessary to verify your
            identity, the Account may be blocked or closed, which may result in
            additional fees assessed to the Account. You may also be asked to
            provide such information at other times (and on any qualifying
            account) upon request of the Bank. You shall have a continuing
            obligation to provide any other documentation we may request from
            time to time, including any information required under our customer
            identification program to establish your identity. If at any time we
            determine that the information you provided to us was false,
            incorrect, or of concern to the Bank, or if you refuse to provide,
            or delay in providing, us with the information when requested, we
            may close, block, restrict or freeze any or all of your Accounts and
            Cards.
          </p>
          <p className="mb-4">
            You represent and warrant that you have the power, and where
            applicable, each of your authorized users have the power, to execute
            and perform your obligations under this Agreement. We reserve the
            right to require you to furnish us with resolutions, agreements or
            documents as we may reasonably request to evidence the authority of
            individuals to act on behalf of the Account holder(s). It is agreed
            that the power and authority of each person named as authorized to
            take action with respect to the Account shall continue in full force
            and effect until we receive actual written notice of revocation,
            whether the same be brought about by dissolution or termination of
            the Account holder or otherwise.
          </p>
          <p className="mb-4">
            By requesting to or opening an Account with us, you agree that we
            can gather personal information about you and/or your beneficial
            owners from one or more consumer reporting agencies, governmental
            entities and/or other third parties to determine your eligibility
            for an Account or Card. You also agree that we have the right to
            access follow-up consumer reports while your Account is open for
            maintenance, review or collection purposes.
          </p>
          <p className="mb-4">
            Your Account will not be considered "opened" until it is funded.
            This means your balance must be at least a penny. Once your account
            is considered “opened,” there is no minimum balance required and no
            maximum balance limit. However, we may, at our sole discretion and
            at any time, require a minimum balance and set a maximum balance
            limit.
          </p>
          <p className="mb-4">
            D. <strong>BSA and OFAC Compliance Obligations</strong>. Among other
            compliance obligations imposed on us by the Financial Crimes
            Enforcement Network (“FinCEN”) (pursuant to the Bank Secrecy Act, as
            amended and supplemented from time to time (“BSA”)) and the Office
            of Foreign Assets Control (“OFAC”), we are required to report
            certain transactions to FinCEN and OFAC (all such obligations, the
            “BSA/OFAC Compliance Obligations”). You acknowledge and agree that
            we may capture and transmit or disclose information collected from
            or about you in connection with this Agreement for the purpose of
            satisfying our BSA/OFAC Compliance Obligations, including without
            limitation information regarding you, your authorized users and
            beneficial owners, and your Account (for example, name, address, and
            account number) and regarding beneficiaries (for example
            beneficiary’s name, address and account number) to FinCEN or OFAC,
            as part of the processing of a payment order. You agree to assist us
            in connection with any requirements imposed on us in fulfilling our
            obligations under law, including without limitation the BSA/OFAC
            Compliance Obligations. You agree to observe and comply with all
            applicable law and all anti-money laundering and sanctions laws,
            including, without limitation the BSA and the Trading with the Enemy
            Act, as amended, and each of OFAC’s economic and trade sanctions
            regulations in connection or related to your Account.
          </p>
          <p className="mb-4">
            E. <strong>Service Provider</strong>. You understand that we have
            engaged the Service Provider to perform a number of services for you
            under this Agreement, including, but not limited to, identity
            verification, compliance monitoring, risk mitigation, managing your
            Account and Card and other services we may require. The Service
            Provider, along with its partners and agents, is the servicer of
            your Account and Card. In that capacity, Service Provider may act on
            our behalf, perform our obligations and/or enforce our rights under
            this Agreement. You agree that you may only access the Account
            through the Service Provider. You may provide us with payment
            instructions and view certain Account information by using the
            Service Provider Platform. You understand that any payment
            instruction or activity performed using the Services shall be deemed
            authorized and valid and Bank is under no obligation to investigate
            the instruction or activity.
          </p>
          <p className="mb-4">
            Separate and apart from its role as our servicer, the Service
            Provider may also offer Services to you. We are neither responsible
            for the provisioning of such Services nor do we make any
            recommendations, representations, warranties or suggestions
            regarding such Services. To the fullest extent permitted by law, we
            will not have any liability in connection with the Services or
            Service Provider Platform and disclaim all warranties, either
            express or implied or statutory, including, but not limited to, any
            implied warranties of merchantability, fitness for a particular
            purpose, data (including unauthorized access), intellectual property
            infringement and/or lack of viruses related to the Services or
            Service Provider Platform. In no event shall we be liable for any
            losses or damages related to your use of Services or Service
            Provider Platform.{" "}
          </p>

          <h3 className="mb-4">
            III. USING YOUR ACCOUNT, DEBIT CARD AND ACCOUNT DISCLOSURES.
          </h3>
          <p className="mb-4 font-bold">Debit Card. </p>
          <div className="ml-8">
            <p className="mb-4">
              General Card Information. In connection with your Account, we may
              (but are not obligated to) issue you a debit card to access the
              Account (the “Card”) that will automatically link to your Account
              and be funded by your Account. If a Card is made available to you,
              the Card allows you to access funds deposited to your Account by
              you or on your behalf pursuant to the terms of this Agreement. The
              Card is not a credit card, prepaid card or a gift card and may not
              be gifted, sold or transferred. The expiration date of the Card is
              listed on the Card. However, the funds in your Account will not
              expire, regardless of the expiration date listed on your Card. The
              Card will remain the property of the Bank and must be surrendered
              upon demand. The Card is nontransferable, and it may be canceled,
              repossessed, or revoked at any time without prior notice, subject
              to applicable law. We have no responsibility for failure of any
              machine, merchant, financial institution or any other party to
              honor your Card. We may decline to authorize a transaction for any
              reason. We are not responsible for any losses you may incur if we
              do not authorize a transaction. You understand that any person may
              deny acceptance of or refuse to accept your Card and we are not
              responsible for such denial or refusal. Not all services or
              features of your Card described in this Agreement are available to
              all persons or at all locations. Any offer of a service or feature
              of your Card or Account in this Agreement will be deemed void
              where prohibited. Use of the Card is also subject to all
              applicable rules and customs of any payment network, clearing
              house or other association involved in transactions in addition to
              this Agreement. We reserve the right to limit, at our sole
              discretion, the provision of any such services under this
              Agreement to any person or in any location. We can waive or delay
              enforcement of any of their rights under this Agreement without
              losing them.
            </p>
            <p className="mb-4">
              Card Activation. You must activate the Card and complete the
              activation process, including setting a Personal Identification
              Number (“PIN”), before it may be used. You must maintain your PIN
              in confidence and not give it to anyone. You should memorize your
              PIN and not write down your PIN or keep your PIN with your Card.
              If you believe that anyone has gained unauthorized access to your
              PIN, you should advise the Bank and Service Provider immediately,
              following the procedures in Section III(A)(xii) (Card
              Cancellation, Suspension and Limits, Lost or Stolen Card, Card
              Replacement). You agree to sign the back of the Card immediately
              upon receipt.
            </p>
            <p className="mb-4">
              Card Use. Once your Card is active, subject to the limitations of
              this Agreement, you may use your Card, as applicable, to make
              purchases at any merchant that accepts payment using the Card, as
              long as you do not exceed the value available in your Account and
              as no purchase (whether individually or in aggregate) exceeds the
              transaction limits determined by us. Each time you use the Card,
              you authorize the Bank to reduce the value available in your
              Account (i.e., debit your Account) by the amount of the
              transaction and any applicable fees. We reserve the right to
              refuse to make any transfer or process any transaction for
              security, credit, legal/regulatory, or other reasons, as we
              determine in our sole discretion. Subject to applicable law, you
              are responsible for all transactions you authorize using the Card,
              including any losses, charges, or penalties incurred as a result.
              You may be charged for your use of the Card at ATMs. There may be
              fees associated with some of your Card transactions. If your
              Account is closed or your Card privileges are canceled, you agree
              to stop using the Card and destroy the Card or return the Card to
              the Bank, upon its request.
            </p>
            <p className="mb-4">
              Limits. For security reasons, the amount or number of Card or
              Account transactions you may make may be limited, without notice
              to you. Card and Account limits are subject to periodic review and
              may be changed based on your Account history, activity, and other
              factors. We retain sole discretion to apply and change limits,
              with or without notice to you.
            </p>
            <p className="mb-4">
              Card and Account Fees. The fees relating to the use (including
              misuse) of your Card and/or Account are set forth in this
              Agreement and the attached Exhibit 1 Fee Schedule (Exhibit 1) (the
              “Fees”), which is incorporated herein by reference. Fees incurred
              pursuant to the terms of this Agreement will be withdrawn from
              your Account and will be assessed even if there is no remaining
              balance in your Account, unless prohibited by law.
            </p>
            <p className="mb-4">
              You are responsible for all transactions initiated and fees
              incurred by use of the Card, including those initiated by
              authorized users of the Card or any person you provide the Card
              to. If you permit another person to have access to your Card or
              Account, this will be treated as if you authorized such use and
              you will be liable for all transactions and fees incurred by those
              persons. You are wholly responsible for the use of each Card
              according to the terms of this Agreement, subject to the terms
              herein.
            </p>
            <p className="mb-4">
              ATMs. With your PIN, the Card may be used to obtain cash at any
              Automated Teller Machine (“ATM”) in the U.S. displaying the Visa,
              MoneyPass, or Maestro acceptance marks, subject to limits set by
              us from time to time. The Card cannot be used at ATMs outside the
              U.S. without prior notice and approval. Fees may apply (see
              Exhibit 1 for details). ATM owner-operators may impose their own
              fees and lower limits on cash withdrawals. You may be charged a
              fee by the ATM operator even if you do not complete a withdrawal.
              This ATM fee is a third party fee amount assessed by the
              individual ATM operator only and is not assessed or controlled by
              us. This ATM fee amount will be charged to your Account. You may
              use your PIN and Card at any Point of Sale (“POS”) device, as
              permitted by a merchant that bears the MoneyPass or Maestro
              acceptance marks, and subject to your daily purchase limit.
            </p>
            <p className="mb-4">
              Foreign Transactions. The Card may be used to conduct transactions
              within the 50 United States, District of Columbia and U.S.
              Territories (Puerto Rico, Guam, Northern Marianas, the U.S. Virgin
              Islands, and American Samoa). The Card may be used to conduct
              international purchase transactions, including, without
              limitation, transactions conducted on international merchant
              websites or mobile applications accessible within the U.S.;
              provided the merchant accepts the Card. Charges from foreign
              merchants and financial institutions may be made in a foreign
              currency. We will post transactions to your Account in U.S.
              dollars based on the exchange rate on the day we settle the
              transaction, plus any special currency exchange charges that may
              be imposed by us, the Visa network and/or by any third-party used
              to complete the transaction. The exchange rate applied to each
              such transaction is (1) a rate selected by Visa from the range of
              rates available in wholesale currency markets for the applicable
              central processing date, which rate may vary from the rate Visa
              itself receives; or (2) the government-mandated rate in effect for
              the applicable central processing date. Because of the special
              charges and possible differences in exchange rates between the
              time we settle and the time you initiated the transaction, the
              charge for a foreign transaction may be less than or greater than
              the cash advance or purchase at the time it was made. Foreign
              transactions are subject to foreign transaction fees, including
              those set forth in Exhibit 1 and any other fees imposed by the
              payment network and/or any third party used to complete the
              transaction, and will be included in the amount charged to your
              Card or otherwise be debited from your Account.
            </p>
            <p className="mb-4">
              Card Not Present Transactions. If you initiate a transaction
              without presenting your Card (such as for a mail order, internet
              or telephone purchase), the legal effect will be the same as if
              you used the Card itself.
            </p>
            <p className="mb-4">
              Split Transactions. If you do not have sufficient funds in your
              Account, you can instruct the merchant to charge a part of the
              purchase to the Card and pay the remaining amount with cash or
              another card. These are called “split transactions.” Some
              merchants do not allow cardholders to conduct split transactions.
              Some merchants will only allow you to do a split transaction if
              you pay the remaining amount in cash. If you fail to inform the
              merchant that you would like to complete a split transaction
              before swiping your Card, your Card is likely to be declined.
            </p>
            <p className="mb-4">
              Authorization Holds. When you use your Card to purchase goods or
              services or to make a cash back withdrawal transaction, the
              merchant may request a preauthorization for the transaction. If
              the merchant makes such a request and there are sufficient
              available funds in your Account, we will approve the transaction
              and a “hold” is placed on your Account for the amount of the
              preauthorization request (which may vary in some cases from the
              amount of the actual purchase, depending on the merchant or
              purchase type), until the merchant sends the final payment amount
              of your purchase, or for up to sixty (60) days, even if you fail
              to make the purchase, to the extent permitted by applicable law.
              The merchant controls the timing of both the Card authorization
              and settlement of the transaction. During the hold period, you may
              not have access to the preauthorized amount in your Account. We
              will not be responsible if any transactions are not completed
              because of the hold. If the preauthorization request varies from
              the amount of the actual transaction, the actual transaction
              amount will be debited from your Account, even if this results in
              your Account balance becoming negative. You remain responsible for
              any negative balances in your Account. If you use the Card at an
              automated fuel dispenser (“pay at the pump”), the transaction may
              be preauthorized for an amount up to $100.00. If the Card is
              declined, but you have sufficient funds available in your Account
              for which the Card was issued, you should use the Card to pay for
              the purchase inside with the cashier. If you use the Card at a
              restaurant, a hotel, for a car rental purchase, or for similar
              purchases, the transaction may be preauthorized for the purchase
              amount plus up to 20% to ensure there are sufficient funds
              available to cover tips or incidental expenses incurred. You do
              not have the right to stop payment on any purchase or payment
              transaction originated by use of the Card once an authorization is
              approved.
            </p>
            <p className="mb-4">
              Return of Funds. If you are entitled to a refund for any reason
              for goods or services obtained with the Card, you agree to accept
              credits to your Account for refunds and agree to the refund policy
              of the merchant. Neither the Bank nor Service Provider is
              responsible for the delivery, quality, safety, legality or any
              other aspects of the goods or services you purchase from others
              with the Card. If you have a problem with a purchase you made with
              the Card, or if you have a dispute with the merchant, you must
              handle it directly with the merchant. The amounts credited to your
              Account for refunds are generally made available to you within
              seven (7) days from the date the refund transaction occurs.
            </p>
            <p className="mb-4">
              Receipts. You should get or request a receipt at the time you make
              a transaction or obtain cash using your Card. You agree to retain
              your receipts to verify your transactions. You can get a receipt
              at the time you make a withdrawal from one of our ATM terminals
              (if available) using your Card.
            </p>
            <p className="mb-4">
              Card Cancellation, Suspension and Limits, Lost or Stolen Card,
              Card Replacement. We reserve the right, at any time and in our
              sole discretion, to limit your use of the Card, including limiting
              or prohibiting specific types of transactions. We may refuse to
              issue a Card, revoke Card privileges, or cancel your Card with or
              without cause or notice, other than as required by applicable law.
              If you would like to cancel the use of your Card, you may do so by
              calling +1 (888) 610-2324 or the number on the back of your Card.
              You agree not to use or allow others to use an expired, revoked,
              canceled, suspended or otherwise invalid Card. The cancellation of
              Card privileges will not otherwise affect your rights and
              obligations under this Agreement.
            </p>
            <p className="mb-4">
              If you believe your Card or PIN has been lost, stolen or
              compromised, immediately call +1 (888) 610-2324 or the number on
              the back of your Card or contact Service Provider by email at
              help@solidfi.com. You are responsible for all transactions made
              using your Card, until you notify us and only after a reasonable
              period of time for us to act on your notice. If you need to
              replace the Card for any other reason, call or send an email to
              help@solidfi.com to request a replacement. You will be required to
              provide information which may include the last four digits of your
              Card number and knowledge of the Card transaction history.
            </p>
            <p className="mb-4">
              We may refuse to issue, deactivate, revoke, suspend or cancel your
              Card at any time with or without notice to you, other than as
              required by law. This includes deactivating or canceling your Card
              if it has been lost or stolen to prevent unauthorized
              transactions. You agree not to use your Card once it has been
              deactivated, revoked, suspended or canceled. We may also limit
              your use of the Card, including limiting or prohibiting specific
              types of transactions. If you would like to cancel your Card, you
              may do so at any time by contacting us by emailing Service
              Provider at help@solidfi.com. The cancellation of your Card
              privileges will not otherwise affect your rights and obligations
              under this Agreement.
            </p>
          </div>

          <p className="mb-4">
            {" "}
            <strong>Digital Wallets.</strong> •Generally, this section of the
            Agreement governs your election to use eligible Cards issued by us
            when you add, attempt to add or keep your Card in one or more
            digital wallets (“Digital Wallet”) supported by us if we make such
            Digital Wallet services available to you. If you add your Card to a
            Digital Wallet supported by us, your use of your Card in connection
            with the Digital Wallet is subject to the terms and conditions of
            this Agreement and the terms and conditions set forth by the third
            party Digital Wallet provider or another third party supporting the
            Digital Wallet or Digital Wallet provider (collectively, the
            “Digital Wallet Provider”). By using your Card in connection with a
            Digital Wallet, you agree you will comply with the terms of this
            Agreement and any agreement with the applicable Digital Wallet
            Provider. If you do not agree to the terms of this Agreement, you
            may not add your Card to, or use your Card in connection with, a
            Digital Wallet.
          </p>
          <div className="ml-8">
            <p className="mb-4">
              Availability of a Digital Wallet and Your Eligibility. A Digital
              Wallet may be available to you for the purpose of purchasing goods
              and services or for other transactions where the Digital Wallet is
              accepted. A Digital Wallet may not be accepted at all places where
              your Card is accepted, and your Card in a Digital Wallet may not
              be eligible to be used for all the features and functionalities of
              that Digital Wallet. We reserve the right to restrict your use of
              your Card within the Digital Wallet including, but not limited to
              (i) if your Account is not in good standing with us; (ii) if you
              are restricted due to limitations on your use imposed by your
              Digital Wallet Provider, wireless service provider or any third
              party associated with your Digital Wallet; (iii) if the Digital
              Wallet or Digital Wallet Provider is not one that we support; or
              (iv) for any other reason determined by us in our sole discretion.
            </p>
            <p className="mb-4">
              Digital Wallet Provider Relationship. A Digital Wallet is offered
              exclusively by your Digital Wallet Provider (e.g., Apple, Google,
              Samsung) and can only be used with eligible and supported devices
              determined by your Digital Wallet Provider (the “Supported
              Devices”). You understand and acknowledge that we do not own,
              control or operate your Digital Wallet. We are not responsible or
              liable for any service provided to you by your Digital Wallet
              Provider or any third party that supports your Digital Wallet or
              your Digital Wallet Provider or for any failure of or performance
              of your Digital Wallet or your Digital Wallet Provider’s products
              or services. Your Digital Wallet Providers have their own terms
              and conditions that you must comply with when you access or use
              the Digital Wallet Provider’s Digital Wallet. For instance:{" "}
            </p>
            <ul className="mb-4 list-disc">
              <li>
                Google Pay: This Agreement does not apply to transactions
                involving Google products that are not initiated or effectuated
                through the Digital Wallet. Your use of Google Pay is also
                subject to the terms and conditions set forth in the{" "}
                <a href="https://payments.google.com/payments/apis-secure/u/0/get_legal_document?ldo=0&ldt=googlepaytos&ldl=und%22%20%5Cl%20%22SafeHtmlFilter_US">
                  Google Pay Terms of Service
                </a>
                . We do not control or endorse the provisioning or use of Google
                Pay.
              </li>
              <li>
                Apple Pay: Your use of Apple Pay is also subject to the terms
                and conditions set forth in the{" "}
                <a href="#">Apple Pay Terms of Service</a>. We do not control or
                endorse the provisioning or use of Apple Pay.
              </li>
              <li>
                Samsung Pay: Your use of Samsung Pay is also subject to the
                terms and conditions set forth in the{" "}
                <a href="https://www.samsung.com/us/samsung-pay/charger/terms-and-conditions/">
                  Samsung Pay Terms and Conditions
                </a>
                . We do not control or endorse the provisioning or use of
                Samsung Pay Money Transfer services.
              </li>
            </ul>
            <p className="mb-4">
              We are not responsible for and do not provide support or
              assistance for any Digital Wallet or Digital Wallet Provider’s
              software, systems, products or services (including any Digital
              Wallet or Supported Device). If you have questions concerning the
              use of a Digital Wallet or the operation of a Supported Device
              equipped with the Digital Wallet, such questions should be
              directed to the Digital Wallet Provider. We are not responsible
              for (a) providing Digital Wallet services to you; (b) any failure
              of the Digital Wallet or any Supported Device; (c) your inability
              to use, or the unavailability of, the Digital Wallet to make a
              payment in connection with any transaction; (d) the performance or
              nonperformance of the Digital Wallet, Digital Wallet Provider or
              any third party providing services on behalf of such Digital
              Wallet or Digital Wallet Provider; or (e) any loss, injury or
              inconvenience that you sustain as a result of matters addressed
              subparts (a) through (d) of this Section. For the avoidance of
              doubt, we are not responsible for the security, accuracy,
              legality, appropriateness or any other aspect of the content or
              function of a Digital Wallet, Digital Wallet Provider's or any
              third party's products or services.
            </p>
            <p className="mb-4">
              Adding your Card to a Digital Wallet. Before you are able to use
              your Card in a Digital Wallet, you must first add your Card to a
              Digital Wallet. To add your Card to a Digital Wallet, you must
              first register your Card with that Digital Wallet by linking your
              Card to that Digital Wallet. By doing this, you agree that certain
              of your account information for the Card will be transmitted and
              stored according to the Digital Wallet and payment card network
              procedures for the Supported Device and you authorize and allow us
              to share your Card information with the Digital Wallet Provider
              and payment card networks. You will be required to complete this
              process for each Digital Wallet and for each Card. We may require
              you to take additional steps to authenticate yourself before your
              Card is added to a Digital Wallet.
            </p>
            <p className="mb-4">
              Your authorized user may also be permitted to add your Card to a
              Digital Wallet supported by another financial institution or third
              party, which could be used for purchases or other transactions
              without presenting the Card. Any such transactions are covered by
              this Agreement.
            </p>
            <p className="mb-4">
              If your physical plastic Card is lost or stolen and your Supported
              Device is not lost or stolen, you may be required to add the new
              physical plastic Card to a Digital Wallet. If your Supported
              Device is lost or stolen, you will need to add your Card to a
              Digital Wallet on a new Supported Device. We do not recommend,
              endorse or make any representation or warranty of any kind
              regarding the performance or operation of your Supported Device or
              the Digital Wallet. You are responsible for the Supported Device,
              including its selection, and for all issues relating to the
              operation, performance and costs associated with such Supported
              Device. You authorize your wireless operator and/or Bank to
              disclose your mobile number, name, address, email, network status,
              customer type, customer role, billing type, account activation
              date and device make and model, where provided, in accordance with
              your mobile operator's or our privacy policy, to allow
              verification of your identity and for fraud prevention purposes.
            </p>
            <p className="mb-4">
              Using Your Card with a Digital Wallet. By adding your Card to a
              Digital Wallet, you create a virtual or digital version of your
              Card to enable you to make payments utilizing the Card at any
              merchant that accepts the Digital Wallet and Card. You may also
              (i) make contactless payments at merchants who accept the Digital
              Wallet and the Card and have physical point-of-sale terminals or
              card readers that accept contactless payments; (ii) make in-app
              purchases or purchases through merchants’ websites where
              permitted; (iii) enter into transactions where the Digital Wallet
              and Card are accepted; and (iv) use other services that are
              offered by the Digital Wallet Provider. You agree that the virtual
              or digital representation of your Card in a Digital Wallet may, in
              our sole discretion, be automatically updated or upgraded without
              notice to you. We reserve the right for any reason to discontinue
              your use of your Card in participation with any Digital Wallet at
              any time.
            </p>
            <p className="mb-4">
              You are required to have a Supported Device in order to use your
              Card in a Digital Wallet. Your Digital Wallet Provider, in its
              sole discretion, determines which mobile device is a Supported
              Device that is eligible to be used with a Digital Wallet under
              this Agreement. Any mobile device which is unlocked in an
              unauthorized fashion (“jailbroken”) or otherwise altered or
              modified are not Supported Devices under this Agreement and are
              therefore not eligible to be used with any Digital Wallet under
              this Agreement. You acknowledge that use of any ineligible,
              non-supported mobile device with any Digital Wallet is expressly
              prohibited, constitutes a breach of the terms and conditions of
              this Agreement and is cause for us to temporarily suspend,
              permanently terminate or otherwise restrict or deny your further
              access to, attempted use of or use of your Card in any Digital
              Wallet. We will not be liable to you (or any third party or
              otherwise) for such suspension, restriction or termination.
            </p>
            <p className="mb-4">
              The Digital Wallet may display transaction history on your
              Supported Device. The transaction history does not reflect any
              post-authorization activities (e.g., settlement, foreign currency
              exchange, chargebacks, etc.). The details for your transaction
              history in connection with that Digital Wallet may not match the
              actual transaction details, including the amount that ultimately
              clears, settles and posts to your Card account.
            </p>
            <p className="mb-4">
              All transactions initiated by you using the Card or Digital Wallet
              must comply with all federal, state and local laws, rules and
              regulations applicable to you, including any applicable tax laws
              and regulations, and you must not use your Card through a Digital
              Wallet for any fraudulent undertaking or in any manner so as to
              interfere with the operation of a Digital Wallet.
            </p>
            <p className="mb-4">
              Digital Wallet Fees. We do not charge you any fees to add a Card
              to a Digital Wallet or to use the Card through a Digital Wallet.
              However, Digital Wallet Providers and/or other third parties, such
              as your wireless carrier or data service providers, may charge you
              fees in connection with your use of a Digital Wallet. You agree to
              be solely responsible for all such fees and agree to comply with
              any limitations and restrictions relating to a Digital Wallet
              and/or your Supported Device. We reserve the right to institute or
              change a fee to add a Card to a Digital Wallet and/or to use a
              Card in connection with a Digital Wallet after sending you prior
              notice.
            </p>
            <p className="mb-4">
              Third-Party Agreements and Merchant Relationships. Each Digital
              Wallet provider, your wireless carrier and other third-
            </p>
            <p className="mb-4">
              party websites or services that support the Digital Wallet have
              their own terms and conditions and privacy policies ("Third-Party
              Agreements"), and you are subject to those Third-Party Agreements
              when you give them your personal information, use their services
              or visit their respective sites. Merchants may present to you
              certain discounts, rebates or other benefits in a Digital Wallet
              (the "Promotions"). Promotions are subject to separate terms and
              conditions and are subject to change at any time and without
              notice to you. We will not be liable for any loss or damage as a
              result of any interaction between you and a merchant relating to
              Promotions. Subject to applicable law and this Agreement, all
              matters, including delivery of goods and services, returns and
              warranties, are solely between you and the applicable merchants.
              We do not endorse or warrant the merchants that are accessible
              through a Digital Wallet or the Promotions that they provide.
            </p>
            <p className="mb-4">
              Compromised Supported Device. In addition to the security
              procedures described elsewhere in this Agreement, you are
            </p>
            <p className="mb-4">
              solely responsible for maintaining the confidentiality of your
              Digital Wallet Provider credentials and any other means that you
              may use to securely access your Digital Wallet or your Supported
              Device. If another person's biometric identifier is loaded onto a
              Supported Device, you must take immediate steps to ensure that the
              biometric identifier is removed from the Supported Device,
              otherwise any transaction using such Supported Device by a person
              who you have granted access to will not be an unauthorized
              transaction for the purposes of determining liability. Similarly,
              if you provide your user ID, PIN or password necessary to access
              your Supported Device, you must take immediate steps to change
              such user ID, PIN or password to ensure no third party has access
              to or knows such user ID, PIN or password. Otherwise, any
              transaction using such Supported Device by a person to whom you
              provide your user ID, PIN or password will not be an unauthorized
              transaction for the purposes of determining liability. If your
              PIN, biometric authentication or other passcode is compromised or
              your Card has been used through a Digital Wallet without your
              permission, or you have a Supported Device and it has been lost or
              stolen, you must notify us immediately. If you fail to notify us
              without delay, you may be liable for part or all of the losses in
              connection with any unauthorized use of your Card in connection
              with that Digital Wallet. You should notify us by calling the
              number on the back of your Card or in the app you use to manage
              your Card.
            </p>
            <p className="mb-4">
              Suspension; Cancellation of Digital Wallet Services. We reserve
              the right to discontinue offering or supporting any Card
            </p>
            <p className="mb-4">
              with any Digital Wallet. Except as otherwise required by
              applicable law, we may block, restrict, suspend or terminate the
              use of your Card at any time without notice and for any reason,
              including if you violate the terms of this Agreement or any of
              other agreement you may have with us, if we suspect fraudulent
              activity or as a result of cancellation or suspension of your Card
              account. You agree that we will not be liable to you if your
              Digital Wallet Provider or any third party blocks, cancels or
              terminates your use of the Card or Digital Wallet services.
            </p>
            <p className="mb-4">
              You may remove one or more of your Cards from your Digital Wallet
              at any time by following the instructions in your Digital Wallet
              or by calling the number on the back of your Card.
            </p>
            <p className="mb-4">
              Use Your Card with a Digital Wallet. You may only use your Card
              with a Digital Wallet under the terms and conditions of this
              Agreement. We reserve all rights not expressly granted to you. You
              understand and agree that you are granted a non-exclusive,
              non-sublicensable, non-transferable, personal, limited license to
              install and use your Card with the Digital Wallet on a Supported
              Device solely in accordance with the terms and conditions of this
              Agreement. The license is limited to use on a Supported Device
              that you own and control and as permitted by any applicable third
              party agreement. Such license does not allow you to use your Card
              on any device that you do not own or control (or for which you do
              not have authorization to install or run the Digital Wallet, such
              as where prohibited by applicable security policies), and you may
              not distribute or make any Card or the Digital Wallet available
              over a payment network where it could be used by multiple devices
              at the same time. This limited license may be revoked by us. We
              and any third party, including any Digital Wallet Provider,
              retains all right, title and interest in and to the software used
              to provide the Card, Digital Wallet and any modifications or
              updates thereto. You agree not to use any third-party materials
              associated with the Card or the Digital Wallet in a manner that
              would infringe or violate the rights of any party, and that we are
              not in any way responsible for any such use by you. All
              third-party intellectual property marks, including the logos of
              merchants, are the property of their respective owners.   We
              disclaim any representations or warranties related to
              non-infringement of the Digital Wallet or in connection with your
              use of the Card with the Digital Wallet.
            </p>
            <p className="mb-4">
              You agree that we may automatically update or upgrade your Card at
              any time, in our sole discretion and without prior notice, we may
              expand, reduce, or suspend the type and/or dollar amounts of
              transactions allowed using your Card with a Digital Wallet.
            </p>
            <p className="mb-4">
              The license granted hereunder is effective until terminated by you
              or us. Your rights will terminate automatically without notice
              from us if you fail to comply with these terms or if we terminate
              the use of your Card or the Digital Wallet. Upon termination of
              the license, you must cease all use of the Digital Wallet and
              delete your Card(s) from the Digital Wallet.  
            </p>
            <p className="mb-4">
              Electronic Communications Involving the Digital Wallet and Your
              Use of the Digital Wallet. In addition to communications
            </p>
            <p className="mb-4">
              that you expressly consent to elsewhere in this Agreement, you
              expressly consent to receive phone calls, text messages, push
              notifications, and emails related to the Digital Wallet from us,
              Service Provider, Digital Wallet Provider and any of our
              third-party service providers that support or provide assistance
              in connection with your Digital Wallet at any phone number
              (including any mobile phone number) and email address you have
              provided to us, Service Provider, Digital Wallet Provider or any
              of our other third-party service providers. Such phone calls and
              text messages may include auto-dialed phone calls and text
              messages, prerecorded phones calls and text messages, or both.
            </p>
            <p className="mb-4">
              <strong>Linking Accounts</strong> You may link your bank account
              at another financial institution (“Linked Account”) to your
              Account in order to transfer funds between your Linked Account and
              your Account. You represent and warrant: (1) that you have the
              right to authorize any and all charges and debits to the Linked
              Account; (2) the Linked Account is held at a depository
              institution located in the U.S.; (3) you are individually or
              jointly the owner of the Linked Account; and (4) the Linked
              Account is a business purpose or commercial account. You will
              indemnify and hold us harmless from any claims by any person
              related to the Linked Account, including any other owner of the
              Linked Account. You are not permitted to link your Account with a
              credit, debit, gift, or other type of card issued by a third party
              or another bank. You may deposit funds into or withdraw funds from
              your Account by using the Service Provider Platform to initiate an
              Automated Clearing House transfer (“ACH Transfer”) to or from the
              Linked Account. We do not accept requests made otherwise to
              initiate ACH Transfers. Requests for ACH Transfers to debit the
              Linked Account that are made before 4:00 PM CST on a business day,
              shall be considered received on the business day the request is
              made. Requests for ACH Transfers to debit the Linked Account that
              are made after 4:00 PM CST on a business day or on a non-business
              day, shall be considered received the next business day.
            </p>
          </div>
          <p className="mb-4">
            C. <strong>Internal Transfer Between Accounts at the Bank</strong>.
            We may (but are not obligated to) permit you to initiate a transfer
            of funds between your accounts at the Bank through a Service
            Provider Platform. We do not accept requests made otherwise to
            initiate internal transfers.
          </p>
          <p className="mb-4">
            D. <strong>Cash-Pick Up</strong>. We may (but are not obligated to)
            allow you to participate in Mastercard Cash Pick-Up, whereby you may
            send or cash disbursements to other persons. If Mastercard Cash
            Pick-Up is made available to you, it is subject to separate terms
            and conditions. By using Mastercard Cash Pick-Up, you authorize us
            and/or our agents to debit your Account for any cash disbursements
            you may request. We reserve the right to refuse to make any transfer
            for security, credit, legal/regulatory, or other reasons, as we
            determine in our sole discretion. You are responsible for all
            transactions you authorize using Mastercard Cash Pick-Up, including
            any losses, charges, or penalties incurred as a result.
          </p>
          <p className="mb-4">
            E. <strong>Deposits</strong>. When you make a deposit, we will act
            only as your collection agent and will not be responsible beyond the
            exercise of good faith and ordinary care. All deposits are
            provisionally credited subject to our receipt of final payment. If a
            deposit or transfer of funds into your Account is returned or
            rejected by the paying financial institution for any reason, you
            agree that we may deduct the amount of the deposit or transfer
            against your Account, without prior written notice to you
          </p>
          <div className="ml-8">
            <ul className="mb-4 list-disc">
              <li>
                You may make a deposit into your Account by ACH Transfers or any
                other method we make available to you. You may also arrange for
                recurring deposits, such as direct deposits, to be made
                electronically to your Account.
              </li>
              <li>
                We do not accept deposits by wire transfer, mail, cash, paper
                check or foreign currency deposits. We are not liable for wire
                transfers that you may attempt into your Account or deposits of
                any kind that you mail to us, including if it is lost in
                transit, lost in the mail, or otherwise not received by us. If
                you attempt to make a deposit through a prohibited means, the
                transaction will be rejected. If you mail us a cash deposit, we
                may send the cash back to you or, if you owe us funds, set off
                such amounts from the cash you send us. We may but are not
                obligated to accept checks. If you mail a paper check to us,
                including personal checks, money orders or cashier’s checks, we
                may either apply the check to any negative balance you may have
                on your Account or send the check back to you. We do not accept
                any deposits in foreign currency. Any deposits received in
                foreign currency, whether in the form of cash or check, will be
                sent back to you. We will send all items back to the address we
                have for you on file and we are not liable if you do not receive
                the return mail or cash or items.
              </li>
              <li>
                In addition to any other limitation set forth herein, you may
                only deposit with us funds that are immediately available, which
                under applicable law are irreversible and are not subject to any
                lien, claim or encumbrance.
              </li>
            </ul>
            <p className="mb-4">
              <strong>Withdrawals</strong>. Subject to any limitations we may
              prescribe, you may make withdrawals from your Account up to the
              available balance in your Account by any means that we make
              available to you. We may refuse a withdrawal request exceeding the
              available funds in your Account even if you make a deposit in the
              day after we refuse your withdrawal request. If your available
              balance is not enough to pay a transaction you make, we may assess
              an insufficient or unavailable funds fee, regardless of whether we
              pay the transaction. We may allow withdrawals at any time, but
              reserve the right to require seven (7) days written notice of
              intention to withdraw funds from your Account if your Account is a
              negotiable order of withdrawal (NOW) account. You are not
              permitted to make withdrawals from your Account by creating a
              check drawn on your Account. If you attempt to make any
              transactions with your Account using a credit, debit, gift or
              other type of card issued by a third party or another bank or by
              creating a check drawn on your Account, we may reject and/or
              return the transaction without notice to you and may consider such
              action to be a violation by you of this Agreement.
            </p>
            <p className="mb-4">
              Before allowing a transaction, we may request you to provide us
              with identification, authorization, documentation or other
              information that we deem necessary. We may refuse a withdrawal if
              you fail to comply with our request. We may tell you in advance
              when we are going to refuse a withdrawal request but will not be
              required to do so.
            </p>
            <p className="mb-4">
              Subject to any limits we may impose and the terms of this
              Agreement, you may also withdraw funds from certain ATMs. Other
              third-party fees may also apply to out-of-network ATM
              transactions. Please refer to Section II(A) (Debit Card) and the
              Fee Schedule for additional information.
            </p>
            <p className="mb-4">
              <strong>Payment Instructions</strong>. Your unique passwords,
              access codes, PIN, security devices, or authentication techniques
              and related
            </p>
            <p className="mb-4">
              instructions (“Credentials”) as we may require from time to time
              will be made available to you. You agree that your Credentials are
              strictly confidential and must be safeguarded. You shall have sole
              responsibility for controlling the distribution and maintaining
              the confidentiality of your Credentials. You authorize us to
              execute transactions pursuant to the instructions of anyone who
              has provided us with proper Credentials (including, but not
              limited to, payment instructions received by us (such as requests
              to withdraw or transfer funds from your Account through the
              Service Provider Platform or in connection with your mobile device
              used to access the Service Provider Platform) and you acknowledge
              that we shall conclusively presume that any person possessing your
              Credentials is an authorized user and will regard their request
              for such transaction or payment instruction as being authorized by
              you, subject to applicable law. The use of any of your Credentials
              by another person will be as effective as your use of the
              Credentials, regardless of whether the person affixing the
              Credential was authorized by you and regardless of the means by
              which the Credential was affixed, subject to applicable law. For
              example, if you provide your username and password used to access
              the Service Provider Platform to another person and that person
              uses that information to withdraw funds from your Account, we will
              deem the withdrawal to be authorized by you. Unless prohibited by
              applicable law, you agree to hold us harmless and indemnify us for
              any liability incurred for reasonably acting upon such
              instructions which bear any of your Credentials. You agree to keep
              confidential and to take all reasonable precautions and make all
              reasonable efforts to protect the secrecy of all Credentials
              issued to you, selected by you, or utilized by you. If you become
              aware of the unauthorized use of your Credentials, suspect that an
              unauthorized use may occur, any of your Credentials become lost or
              known to another person, or you have terminated authorization of
              any authorized user, you agree to immediately notify us, to
              deactivate your Credentials by contacting us at help@solidfi.com
              or notifying us through the Service Provider Platform. IN NO EVENT
              WILL WE BE RESPONSIBLE FOR ANY DAMAGES RESULTING, EITHER DIRECTLY
              OR INDIRECTLY, FROM THE UNAUTHORIZED USE OF YOUR CREDENTIALS PRIOR
              TO SUCH NOTICE AND WITHIN A REASONABLE TIME PERIOD THEREAFTER.
            </p>
            <p className="mb-4">
              We may refuse to follow any of your payment instructions if we
              think they are illegal or potentially harmful to us or any other
              person. If we follow your payment instructions, we may require
              other security measures to protect us from any losses we may
              suffer. To the greatest extent permitted by law, you agree to pay
              us back for any damages or losses (including, but not limited to,
              the reasonable costs of an attorney) that we suffer if we take an
              action based on your (or what appears to be your) oral, written or
              electronic instructions.
            </p>
            <p className="font-bold mb-4">
              Posting Order of Credits and Debits.
            </p>

            <ul className="mb-4 list-disc">
              <li>
                Posting Orders. This section summarizes how we generally post
                some common transactions to your Account. Posting transactions
                to your Account impacts your Account balance. Posting a credit
                increases your balance, while posting a debit or hold reduces
                your balance. Credits include deposits and credits we make.
                Holds include deposit holds, Card authorizations and holds
                related to withdrawals and electronic fund transfers, which
                includes ACH Transfers. Debits include withdrawals, transfers,
                payments from your Account, Card transactions and fees.We use
                automated systems to process transactions and then to post
                transactions to your Account. When we process multiple
                transactions for your Account on the same day, you agree that we
                may in our discretion determine our posting orders for the
                transactions and that we may credit, authorize, accept, pay,
                decline or return credits, debits and holds in any order at our
                option. We generally post common transaction as set forth
                herein. We group the different types of transactions into
                categories. We use several different categories for holds,
                credits, and debits. Most categories include more than one
                transaction type. After the end of the business day, our
                automated systems assign each transaction received for that day
                to a category. We generally post all transactions within a
                category, using the posting order or orders that apply to that
                category, before we post any transactions assigned to the next
                category. First, we start with the balance in your Account at
                the beginning of the business day, subtract holds from your
                balance, and make any adjustments from prior days. Next, we
                generally add available and settled deposits and credits to your
                balance and then subtract debits from your balance based on the
                debit category. We subtract debits in a category from your
                balance in order from the highest to lowest dollar amount,
                unless specified otherwise herein. The first category of debits
                to be applied against your balance are certain Card and ATM
                transactions (e.g., Card transactions and ATM withdrawals and
                transfers) and associated Card fees. The debits within this
                category are subtracted from your balance in date and time order
                our systems receive date and time information. If we make checks
                available to you, this category is applied next against your
                balance. Check posting will be in sequential order based on the
                check number, and for any check for which the number cannot be
                read, from highest to lowest amount following the posting of
                number legible checks. We then subtract from your balance any
                other types of debits in order from the highest to lowest dollar
                amount. Finally, we subtract from your balance most fees (such
                as monthly maintenance fees, overdraft fees, returned item fees,
                and ATM fees) in order from highest to lowest dollar amount.
                Some fees may show as “processing” until the next day.
              </li>
              <li>
                Changing Posting Orders. You agree that we may determine in our
                discretion the orders in which we post transactions to your
                Account. You agree that we may determine in our discretion the
                categories, the transactions within a category, the order among
                categories and the posting orders within a category. We
                sometimes add or delete categories, change posting orders within
                categories and move transaction types among categories. You
                agree that we may in our discretion make these changes at any
                time without notice to you.
              </li>
              <li>
                Posting Orders Determined at End of Day. We receive credits,
                debits and holds throughout the day. Regardless of when during
                the day we receive transactions for your Account, you agree that
                we may treat them as if we received all transactions at the same
                time at the end of the business day. During the day, we show
                some transactions as processing. Please note that transactions
                shown as processing have not been posted yet. The posting order
                for these transactions is determined at the end of the day, with
                the other transactions we receive for that day and based on the
                category. We do not always receive debits on the same day that
                you conduct them. We generally post credits and debits to your
                Account, and report them on your statement, in a different order
                than the order in which you conduct them or we receive them.
              </li>
              <li>
                Overdraft Fees. We generally determine at the time we post a
                debit to your Account whether it creates an overdraft and
                whether an overdraft or returned item fee applies. You should
                note that sometimes we authorize a transaction at a time when
                you have enough available funds to cover it, but because other
                transactions post before it and reduce your balance, the
                transaction creates an overdraft when we post it to your
                Account. You can avoid fees for overdrafts and returned items by
                making sure that your Account always contains enough available
                funds to cover all of your transactions. When your Account
                balance includes some funds that are subject to a hold, dispute
                or Legal Process, you should note that those funds are not
                available to cover your transactions. Our posting orders can
                impact the number of overdraft fees we charge you when you do
                not have enough available funds to cover all of your
                transactions. When several debits arrive the same business day
                for payment from your Account and you do not have enough
                available funds in your Account to cover all of the debits we
                receive for that day, you understand that some posting orders
                can result in more overdrafts, and more fees for overdraft items
                and returned items, than if we had used other posting orders.
                You agree that we may in our discretion choose our posting
                orders, and also change them from time to time, regardless of
                whether additional fees may result. When your Account balance
                includes some funds that are not available at the time that we
                post a debit, and you do not have enough available funds in your
                Account to cover the debit, the debit results in an overdraft
                and we generally charge you an overdraft fee or returned item
                fee for the debit. We do not show holds or distinguish between
                available and unavailable funds in your Account balance on your
                statement.
              </li>
              <li>
                Certain Transactions Made After Business Day Ends. During
                processing, we may include in your Account balance some
                transactions that you make after the business day cut-off, but
                before the end of the calendar day. Deposits are made available
                based on Section VIII (Deposit Availability Disclosure). We
                generally subtract from your Account balance the following
                debits, when the transaction occurs after the cutoff time for
                the business day, but during the same calendar day: cash
                withdrawals made at an ATM(s) and any credit-push ACH Transfers
                or electronic fund transfers.
              </li>
            </ul>

            <p className="mb-4">
              <strong>Insurance Coverage.</strong> The Federal Deposit Insurance
              Corporation (“FDIC”) insures deposits according to the ownership
              category in which the funds are insured. Not all accounts may be
              insured. Unless otherwise stated by us or the FDIC, the Account is
              insured by the FDIC up to the standard maximum deposit insurance
              amount per depositor, per FDIC-insured bank, and per ownership
              category (the “Standard Insurance Amount” or “SIA”). For purposes
              of determining the SIA applicable to your Account, you need to
              consider all accounts that you also hold at the Bank. To determine
              SIA applicable to your Account with us and for any other FDIC
              insurance requirements that may apply, please visit the FDIC’s
              website at{" "}
              <a href="http://www.fdic.gov/deposit/de">
                www.fdic.gov/deposit/de
              </a>{" "}
              HYPERLINK &quot;
              <a href="http://www.fdic.gov/deposit/deposits">
                http://www.fdic.gov/deposit/deposits
              </a>
              &quot;posits or call the FDIC directly at 1-877-ASKFDIC
              (1-877-275-3342). You can also use the FDIC’s Electronic Deposit
              Insurance Estimator (EDIE) at{" "}
              <a href="http://www.fdic.gov/edie">www.fdic.gov/edie</a> HYPERLINK
              &quot;
              <a href="http://www.fdic.gov/edie">http://www.fdic.gov/edie</a>
              &quot;.
            </p>
            <p className="mb-4">
              <strong>
                Legal Processes and Claims Against you or your Account
              </strong>
              . If we receive a levy, attachment, execution, garnishment, tax
              withholding order, restraining order, subpoena, warrant,
              injunction, government agency request for information, search
              warrant, forfeiture or other similar order (“Legal Process”)
              against you, any party to your Account, or against your Account,
              we may accept and comply with such Legal Process whether it was
              served to us in person, by mail, by facsimile, by email, or at one
              of our locations (other than where your Account, property or
              records are held). You direct us not to contest the Legal Process;
              provided, however, we are under no obligation to contest any Legal
              Process. Subject to any law or government authority prohibiting
              such disclosure, we may, but are not required to send notice to
              you of the Legal Process. We may refuse to permit withdrawals or
              transfers from your Account until the Legal Process is dismissed
              or satisfied. We may hold and turn over funds or other property to
              the court or creditor as directed by the Legal Process, subject to
              our right of set-off and security interest in the funds or other
              property. You are responsible for any losses, costs, or expenses
              we incur as a result of any Legal Process involving you, any party
              to your Account or your Account.
            </p>
            <p className="mb-4">
              If we receive a claim against the funds in your Account, or if we
              know of or believe that there‘s a dispute as to the ownership or
              control of funds in your Account, we may, in our discretion: (1)
              place a hold on your Account and refuse to pay out any funds until
              we‘re satisfied that the dispute is settled; (2) close your
              Account and send the balance to the named account holder(s); (3)
              require a court order to act; or (4) take any other action we feel
              is necessary to protect us. We will not be liable to you for
              taking any such action.
            </p>
            <p className="mb-4">
              We may charge your Account a fee for each Legal Process or claim
              involving you, any party to your Account or your Account. You
              agree to pay us for fees and expenses (including administrative
              expenses) that we incur in responding to any Legal Process or
              claim related to your Account, such as expenses for research and
              copying of documents. The fees and expenses may include attorneys’
              fees. We may deduct these fees and expenses from your Account or
              any account you have with us without prior notice to you.
            </p>
            <p className="mb-4">
              We may produce or provide access to property, including documents,
              that are located in or at any of our locations or facilities or at
              any facility of a third party holding such property or
              documentation on our behalf, even if the facility or location is
              not subject to being searched per the Legal Process.
            </p>
            <p className="mb-4">
              We have no liability to you if we accept and comply with a Legal
              Process as provided in this section or by law.
            </p>
          </div>
          <p className="mb-4">
            K. <strong>Statements.</strong> Statements will periodically be
            provided to you by email as long as your Account is active. You will
            not receive paper statements. You agree to notify us promptly if you
            do not receive your statement by the date you normally would expect
            to receive it. You agree that the statements have been delivered or
            made available to you in a reasonable manner.
          </p>
          <p className="mb-4">
            You have a duty to review your Account statements. You agree to
            review and to examine your receipts and account statements and to
            reconcile your Account daily using reasonable care and to promptly
            report any discrepancy between your records and the information
            provided in your account statement and any errors or problems to us.
            Except as provided by applicable law, you agree that we are not
            required to provide you with a separate notice of incoming or
            outgoing Wire Transfers and you should review your statement for any
            discrepancies, unauthorized transactions or errors in connection
            with any transaction. If you choose not to receive your statements,
            you remain responsible to review and report any errors. If you are
            absent from your Account mailing address, you are responsible to
            make arrangements to have your statements reviewed for errors and
            report them in accordance with the terms of this Agreement.
          </p>
          <p className="mb-4">
            You agree that if you fail to report any unauthorized signatures,
            alterations or forgeries in your account within 60 days of when we
            first send or make the statement available, you cannot assert a
            claim against us on any items in that statement, and as between you
            and us, the loss will be entirely yours. This 60-day limitation is
            without regard to whether we used ordinary care. In addition to your
            duty to review your statements for unauthorized signatures,
            alterations and forgeries, you agree to examine your statement with
            reasonable promptness for any other error such as an encoding error.
            In addition, if you receive or we make available either your items
            or images of your items, you must examine them for any unauthorized
            or missing endorsements or any other problems. You agree that the
            time you have to examine your statement and items and report to us
            will depend on the circumstances. However, this time period will not
            exceed 60 days. Failure to examine your statement and items and
            report any errors to us within 60 days of when we first send or make
            the statement available precludes you from asserting a claim against
            us for any errors on items identified in that statement and, as
            between you and us, the loss will be entirely yours.
          </p>
          <p className="mb-4">
            You further agree that if you fail to report any unauthorized
            transaction on your statement to us within 10 days from when the
            statement is postmarked or otherwise made available to you,
            whichever is earlier, we will not be required to pay interest on any
            unauthorized, erroneous or other Wire Transfer or Funds Transfer
            request or on any refund to which you may be entitled and you will
            also be liable to us for any damages or losses we may incur as a
            result of your failure to notify us within the time period stated in
            this section. Because you are in the best position to discover an
            unauthorized transaction, you agree that, without regard to care or
            lack of care by either you or Bank, we will not be liable for any
            unauthorized transaction reflected on your statement that is not
            reported within 60 days of the statement issuance date, subject to
            applicable law and payment network rules. We will only credit your
            account for errors or problems as required by law. Email us
            immediately with errors or questions about electronic transfers at
            help@solidfi.com. If you tell us orally, you must submit your
            complaint or question in writing within 10 business days. If you
            provide us with timely notice of an error or problem in your
            periodic statement, we will investigate the matter and notify you of
            the results within a reasonable amount of time. The exact time will
            depend on the specific circumstances of the error or problem. You
            may ask for copies of the documents that we used in our
            investigation.
          </p>
          <p className="mb-4">
            L. <strong>Sub-Deposit Accounts</strong>. We will, from time to
            time, place your funds provided to us in a Sub-Deposit Account. You
            hereby direct Bank, as agent for you and at its election, to open
            and maintain in Bank’s Trust Department and/or with other financial
            institutions (each, an “Insured Depository Institution” and
            collectively, “Insured Depository Institutions”) a deposit account
            or omnibus custody account (individually and collectively,
            “Sub-Deposit Account”) in the name of Bank (for your benefit), and
            to deposit in the Sub-Deposit Account from time to time (at Bank’s
            discretion) all or some moneys you may deliver to Bank from time to
            time for credit to the Account. The owner of the Sub-Deposit Account
            is Bank as agent and custodian for you and ownership will be
            evidenced by a book entry in records maintained by us. You authorize
            us to act as your agent with respect to establishing, maintaining
            and administering the Sub-Deposit Account, and you authorize us to
            take any action necessary to establish, maintain and administer the
            Sub-Deposit Account and to initiate transfers to and from your
            Sub-Deposit Account and Account as we may determine in our sole
            discretion. Bank, in its sole discretion, may divide the funds
            deposited into the Account into one or more separate Sub-Deposit
            Account to be managed by Bank. As your agent, Bank will, in its sole
            discretion, determine the amount of funds to deposit in and withdraw
            from each Sub-Deposit Account, subject to the terms herein. No
            evidence of ownership related to the Sub-Deposit Account will be
            issued to you, and you will not receive any written confirmation of
            the establishment of the Sub-Deposit Account or transfer of funds to
            or from the Sub-Deposit Account. All deposits to your Sub-Deposit
            Account and withdrawals from the Sub-Deposit Account necessary to
            satisfy any debits to or withdrawals from your Account will be made
            by us, as your agent. The depositing of your funds into the
            Sub-Deposit Account will not increase your FDIC deposit insurance
            coverage. You authorize us to execute and deliver or file on your
            behalf all appropriate receipts, agreements, releases and other
            instruments, including whatever agreements may be required to
            establish and maintain the Sub-Deposit Account or to establish your
            ownership interest in the Sub-Deposit Account. Notwithstanding
            anything to the contrary, you acknowledge and agree that the funds
            deposited in your Account and transferred to the Sub-Deposit Account
            may be used by us and/or each Insured Depository Institution as a
            source of funding and for investment; provided, however, we will
            only invest such funds in certain securities, equities and debt
            (e.g., U.S. Treasury Bills, U.S. or state issued or guaranteed
            securities, corporate bonds, mutual funds, exchange traded funds,
            etc.) or any other investments or assets permitted by applicable
            law. For the avoidance of doubt and notwithstanding any other
            provision herein, Bank and each Insured Depository Institution
            intend to (and you authorize each such party to) use deposits in the
            Account and/or Sub-Deposit Account each such party holds to fund
            current and new businesses, including lending activities and
            investments, without benefit to you (and for their respective
            benefit). You acknowledge and agree that the Sub-Deposit Account and
            any investments made by us in connection with the Sub-Deposit
            Account will earn no interest or fees for you, and that we may
            collect any interest, investment returns and/or fees in connection
            with a Sub-Deposit Account or any investment contemplated herein for
            the exclusive benefit and account of Bank and/or Insured Depository
            Institutions (if applicable). However, the funds you deposit with us
            in your Account will be made available to you in accordance with
            this Agreement (and regardless of the performance of any of our
            loans or investments, subject to FDIC insurance limitations). You
            further acknowledge and agree the income that we and/or an Insured
            Depository Institution earn through our respective lending and
            investing activities may be greater than the interest earned by you
            pursuant to the Account Agreement (if any), that we and Insured
            Depository Institutions may also receive other financial benefits in
            connection with the funds in your Sub-Deposit Account. Our placement
            of funds in the Sub-Deposit Account may reflect considerations of
            federal and state law, our funding needs and funding needs of
            Insured Depository Institutions, general economic conditions or
            other factors determined by us in our sole discretion. We may place
            funds to enhance our business objectives and for balance sheet
            management purposes without any benefit to you. We are under no
            obligation to place your funds with an Insured Depository
            Institution. Subject to applicable law, your only rights with
            respect to the Sub-Deposit Account are to demand we repay you all
            amounts in your Account that were deposited with us, including those
            transferred to the Sub-Deposit Account from your Account. The
            Sub-Deposit Account may not be transferred to another institution,
            except by us or the Insured Depository Institution. You may
            terminate our role as your agent hereunder by providing us with
            thirty (30) days’ prior written notice, such notice to be sent to
            2955 Campus Drive #110, San Mateo, CA 94403. Any termination will
            result in a return of funds in accordance with law and closing of
            your Account and any Sub-Deposit Account opened specifically for
            you. Each Sub-Deposit Account at each Insured Depository Institution
            constitutes an obligation of the Insured Depository Institution and
            is not directly or indirectly an obligation of Bank. You can obtain
            publicly available financial information concerning each Insured
            Depository Institution at{" "}
            <a href="www.ffiec.gov/nicpubweb/nicweb/nichome.aspx">
              www.ffiec.gov/nicpubweb/nicweb/nichome.aspx
            </a>{" "}
            or by contacting the FDIC Public Information Center by mail at 3501
            North Fairfax Drive, Arlington, VA 22226, or by phone at
            1-877-275-3342. We do not guarantee in any way the financial
            condition of an Insured Depository Institution or the accuracy of
            any publicly available financial information concerning an Insured
            Depository Institution. We may provide your name, tax identification
            number and other pertinent identifying information to Insured
            Depository Institution, and other parties providing services in
            connection with the placement of your funds and the establishing and
            holding the Sub-Deposit Account. Although there are two or more
            accounts associated with your funds (the Account and the Sub-Deposit
            Account), your Account is treated as a single account for reporting
            deposits and withdrawals, as well as for tax reporting, balance
            requirement, service charge, and monthly statement (which will
            reflect the total balance in your Account and each Sub-Deposit
            Account, excluding any interest or amounts owed or belonging to us
            or any Insured Depository Institution). The existence of the
            Sub-Deposit Account will not change the manner in which you use,
            obtain information about or earn interest (if any) on your Account.
            Transfers to and from the Sub-Deposit Account will not appear on
            your monthly statement. We are responsible for the accuracy of your
            Account statements, not the Insured Depository Institutions.
          </p>
          <p className="mb-4">
            M. <strong>Interest and Interest Rate</strong>. Your Account is not
            an interest-bearing account.
          </p>
          <p className="mb-4">
            N. <strong>Prohibitions</strong>. We reserve the right to close your
            Account and/or Card if we determine that it is used for any
            impermissible purpose, as we may determine from time to time. You
            may not use your Account or Card for illegal gambling or any other
            illegal transaction or purpose. This prohibition includes any
            transaction that is illegal in the jurisdiction where you live, in
            the jurisdiction where the transaction is consummated, or in any
            other jurisdiction affected by the transaction. You are responsible
            for determining the legality of each of your transactions in all
            applicable jurisdictions before entering into the transaction. We
            have no obligation to monitor, review or evaluate the legality of
            any transaction. Nevertheless, we may deny transactions or
            authorizations if we believe the transaction is or may be illegal.
            We reserve the right to refuse or return any item that we believe is
            related to an illegal transaction, an Internet or online gambling
            transaction or a high-risk transaction, as determined by us. To the
            fullest extent permitted by law, you agree to pay for any
            transaction that you authorized, even if the transaction is
            determined to be illegal or associated with an illegal activity. We
            reserve the right to cancel, close or restrict use of the Card and
            Account, including by refusing the processing of any transaction, if
            we believe you have violated this Agreement or any applicable law.
          </p>
          <p className="mb-4">
            O. <strong>Account Fees; Fee Schedule</strong>. You agree to pay all
            fees and charges applicable to your Account and Card, which will be
            automatically deducted from your Account and may result in your
            Account being overdrawn. The amounts of these fees and charges are
            listed in Exhibit 1. Fees are subject to change at any time and
            without notice to you, unless required by law. Fees are charged by
            Bank for its services. Service Provider may charge you fees separate
            and apart from the Fees set forth in Exhibit 1 for its Services,
            pursuant to the Service Provider Terms. Bank is not responsible for
            any fees charged by Service Provider for its Services. If you
            request a service that is not included in Exhibit 1 and there is a
            fee for such service, such fee will be disclosed at the time you
            request the service and you agree that any such fee may be deducted
            from your Account.
          </p>
          <p className="mb-4">
            P. <strong>Negative Balance</strong>. Each time you initiate a
            transaction using your Account, you authorize the Bank to reduce the
            funds available in your Account by the amount of the transaction and
            all associated fees. You are not allowed to exceed the available
            amount in your Account through an individual transaction or a series
            of transactions (creating a “negative balance”). Nevertheless, if
            any transaction causes the balance in your Account to go negative,
            including any purchase transactions where the retailer or merchant
            does not request authorization, you shall remain fully liable to us
            for the amount of any negative balance and any corresponding
            transaction fees. You may also be liable for any related
            Insufficient Funds/NSF Fee(s) as set forth in Exhibit 1. We reserve
            the right to bill you for any negative balance or to recoup such
            negative balance from your Account or any other account you have at
            the Bank. You agree to pay us promptly for the negative balance and
            any related fees. We also reserve the right to terminate your
            Account or Card if you create one or more negative balances. If you
            fail to pay us amounts owed under this Agreement, we may refer your
            Account, and collection of amounts owed, to a collection agency.
          </p>
          <p className="mb-4">
            Q. <strong>Insolvency and Dissolution</strong>. You agree to notify
            us promptly through your representative if you seek to dissolve
            corporate formation, materially limit operations or cease operating,
            transfer a substantial percentage of your assets, are unable to pay
            your debts when due or are insolvent or bankrupt (individually and
            collectively, “Incapacitation”). We may continue to honor
            instructions until: (a) we know of your Incapacitation, and (b) we
            have had a reasonable opportunity to act on that knowledge. You
            agree that we may continue to accept deposits and process
            transactions to your Account until we receive notice and any
            required proof of Incapacitation and may pay transactions initiated
            on or before the date of Incapacitation for up to 10 days after your
            Incapacitation unless ordered to stop payment by someone claiming an
            interest in the Account. If we receive notification or if we have
            reason to believe that you have become Incapacitated, we may place a
            hold on your Account and refuse all transactions. You agree to hold
            us harmless for any actions we take based on our belief that you
            have become Incapacitated. If certain payments originating from
            government entities are deposited into your Account after
            Incapacitation, we may be required to return those payments to the
            originator upon notice. If you owe us a debt at the time of your
            Incapacitation, we are authorized to exercise our right of setoff or
            security interest rights against the funds credited to your Account
            after your Incapacitation.
          </p>
          <p className="mb-4">
            R. <strong>Monitoring and Closing Your Account</strong>. Subject to
            the terms herein, you can close your Account at any time and for any
            reason by contacting us or terminating the Account through the
            Service Provider Platform, if applicable. We reserve the right to
            refuse your request to close your Account if your Account is not in
            good standing or if you have a negative balance on your Account. If
            you intend to close your Account, you should notify us through the
            Service Provider Platform. Simply reducing your Account balance to
            $0.00 is insufficient notice. If you close your Account you are
            responsible for transactions you initiated or authorized, including
            those that we receive after the Account is closed, subject to
            applicable law Withdrawals from your Account may be restricted prior
            to Account closing. We reserve the right to monitor all Account
            activity for inappropriate use. We may also suspend or close your
            Account or suspend or terminate your Card at our discretion and for
            any reason with or without notice. This includes if we believe you
            are using your Account or Card for fraudulent or illegal purposes or
            in violation of law or regulation, this Agreement, any other
            agreement you may have with us or Service Provider, or if you
            otherwise present undue risk to us or Service Provider. We are not
            responsible to you for any damages you may suffer as a result of the
            closure or suspension of your Account. If we close your Account, all
            collected funds (less any amounts due to us or for debits in
            process) will be transferred to your Linked Account. Alternatively,
            we may, at our discretion, mail you a check for the available
            balance in your Account. Written notice that the Account has been
            closed, to the extent required by law, and a check, if any, will be
            sent to any address shown on our records for you, or if the Account
            is a jointly owned, to any account owner to whom we elect to send
            it, or the email address we have on file for the Account. Once we
            have closed your Account, you agree that we can assess any service
            charge otherwise applicable against any remaining balance in your
            Account. We are not responsible to you for any damages you may
            suffer as a result of your Account being closed. If you attempt to
            make a deposit to an Account we closed, we may collect the deposit
            and set-off your indebtedness to us. We reserve the right not to
            return funds to you if your account balance is less than $10.00. The
            closure of your Account or termination of this Agreement does not
            impact any right or obligation that arose prior to closure or
            termination, or any right or obligation that, by its nature, should
            survive termination (including, but not limited to, any
            indemnification obligation by you, our limitations of liability, and
            any terms governing arbitration).
          </p>
          <p className="mb-4">
            S. <strong>Dormancy and Unclaimed Property</strong>. State laws
            (called "escheat" or unclaimed property laws) require us to close
            your Account and transfer your money to the state if your Account is
            dormant for a period of time as defined by your state of residence.
            State and federal law and our policy govern when your Account is
            considered dormant. Your Account is usually considered dormant if
            you have not accessed your Account, communicated to us about your
            Account or otherwise shown an interest in your Account within the
            period of time specified under applicable law. Each state has
            varying laws as to when an account is subject to escheatment and we
            may be required to send the balance in your Account to the state of
            your last known address or, if not in the U.S., the state in which
            we reside. We will make all reasonable efforts to contact you if
            required by applicable law before transferring the remaining balance
            of your Account to the applicable state. After we surrender the
            funds to the state, we have no further liability to you for those
            funds and you must apply to the appropriate state agency to reclaim
            your funds. You can avoid the transfer of your money to the state
            simply by signing into your Account, transacting periodically, or
            contacting us, or replying to any abandoned property correspondence.
            If your Account becomes dormant, you may no longer receive
            statements, but you can still view your accounts online.
          </p>
          <p className="mb-4">
            <strong>T. Fraud and Unauthorized Transactions.</strong>
          </p>
          <div className="ml-8">
            <p className="mb-4">
              1. Duty to Safeguard Account, Card, Supported Device and/or
              Digital Wallet. You agree to keep any Account and/or Card
              information, Credentials, security code, password or other
              confidential identification number used to access your Supported
              Device, Account, Card or to access your Card through your Digital
              Wallet, secure and strictly confidential and to not permit
              disclosure of such information to any unauthorized person. You
              agree to immediately notify Bank if this information has become
              known to, or been used by, an unauthorized person. You acknowledge
              that Bank has no method to determine whether a transaction
              conducted with use of a valid Account name, Account number,
              Credentials and/or security code was proper, and you therefore
              authorize Bank to complete any transaction involving your Account,
              Card, Digital Wallet made with the use of such information, and
              verifying the authenticity of a transaction request using Account
              information, Credentials, security code, password or other
              confidential identification number used to access your Account
              constitutes a commercially reasonable security procedure of
              purposes of UCC Article 4A. You agree to be responsible for any
              transaction initiated with the use of valid Credentials or any
              access device. Bank shall have no liability for any loss, claim,
              or damage sustained as a result of the use of your Credentials or
              access device whether such transaction was authorized or not and
              you agree to indemnify and hold harmless Bank for any such
              transaction alleged to be unauthorized.
            </p>
            <p className="mb-4">
              2. Duty of Care. You agree that you will exercise ordinary care in
              handling your Account, Card and Digital Wallet. In exercising
              ordinary care, you shall have the duty to: carefully examine your
              bank statements for fraudulent or unauthorized transactions and
              promptly notify Bank of any such transaction; timely reconcile
              your statement with your internal records to detect any other
              Account discrepancies, including any missing or diverted deposits;
              implement security precautions regarding the use and access of
              your Accounts, Card, Digital Wallet through any access device,
              Credentials, security codes, passwords, or confidential
              identification numbers; conduct background checks of all
              individuals having access to any Credentials, security or access
              devices or sensitive Account information; conduct background
              checks on all individuals who have authority to prepare Account
              transactions or reconcile statements; independently review the
              work of individuals who are responsible for reconciling statements
              and preparing transactions using your Account; and comply with all
              other duties under this Agreement or under any applicable law.
              Your failure to exercise ordinary care will constitute negligence
              and will preclude you from asserting against Bank any unauthorized
              transaction on your Account.
            </p>
            <p className="mb-4">
              3. Security Procedures. You are responsible for establishing and
              maintaining safeguards, policies and procedures that ensure your
              computer systems and networks and information stored on or
              transmitted through your network are not accessed or used by any
              unauthorized person and to ensure that your origination of payment
              orders and your transfer requests are secure and that unauthorized
              access or issuance of transfer requests is prevented. The parties
              have agreed on and adopted the security procedure set forth in
              this section to govern the origination of payment orders and
              transfer requests (the “Security Procedures”). You represent,
              warrant and agree that the Security Procedures constitute a
              “security procedure” for purposes of UCC § 4A-201. You represent
              that you: (a) consider yourself qualified to have, and have,
              independently evaluated the risks presented by the Security
              Procedures; and (b) have determined that the Security Procedures
              are no less protective than other security procedures in use by
              similarly situated companies. You hereby represent, warrant and
              agree that the Security Procedures that are commercially
              reasonable within the meaning of UCC § 4A-202. We shall comply and
              you shall comply with the Security Procedures with respect to
              transfer requests and payment orders submitted to us. You
              acknowledge that the purpose of the Security Procedures is to
              verify authenticity and not to detect an error in the transmission
              or content of any file transmission, transfer request or payment
              order. No Security Procedures have been agreed upon between you
              and us for the detection of any such error and you shall be solely
              responsible for any transmission errors. If a file transmission is
              authorized or issued by you, or on your behalf, or you otherwise
              benefit from such file, you agree to be bound by the data
              contained in the file transmission whether or not we complied with
              the Security Procedures. All payment orders and your transfer
              requests (other than wire transfer requests) submitted to us
              through the Service Provider Platform shall be considered
              authorized by you. Notwithstanding anything to the contrary
              herein, you shall be entitled to deem any person having knowledge
              of any Security Procedure to be an authorized user. If you believe
              or suspect that any such information or instructions have been
              compromised, known or accessed by any unauthorized person, you
              agree to notify us immediately, but in no event longer than one
              (1) business day, by calling us at +1 (888) 610-2324 followed by
              written confirmation to Evolve Bank & Trust, 2955 Campus Drive
              #110, San Mateo, CA 94403 or by email to help@solidfi.com. The
              occurrence of unauthorized access will not affect any payment
              order or transfer request made, the processing of a file
              transmission, transfer requests or payment orders processed, in
              compliance with the Security Procedures prior to receipt of such
              notification and within a reasonable time period to prevent
              unauthorized payment or transfer. You warrant that no individual
              will be allowed to initiate transfer requests or payment orders in
              the absence of proper supervision and safeguards, and agree to
              maintain the confidentiality of Security Procedures and any
              passwords, codes, security devices and related instructions
              provided by us in connection with the Security Procedures and
              prevent the disclosure of the same except on a need to know basis.
              If you believe or suspect that any such information or Security
              Procedures are accessed by unauthorized persons, you will notify
              us immediately followed by written confirmation. You agree to
              defend all claims and indemnify and hold us harmless from and
              against any loss, damages, or expenses, including but not limited
              to attorney's fees, caused by your failure or the failure of your
              employees or agents, to keep the Security Procedures confidential
              and secure. The occurrence of unauthorized access will not affect
              any payment or transfer made in good faith by us prior to receipt
              of notification and within a reasonable time period to prevent
              unauthorized transfers. If a transfer request (or a request for
              cancellation or amendment of a transfer request) or payment order
              (or a request for cancellation or amendment of a payment order)
              received by us purports to have been transmitted or authorized by
              you, it will be deemed effective as your transfer request or
              payment order and you shall be obligated to pay us the amount of
              such related payment order or transfer request even though the
              transfer request or payment order (or request for cancellation or
              amendment of the same) was not authorized by you so long as we
              acted in compliance with the Security Procedures. You shall
              examine the Account(s) each business day to review each transfer
              request and notify us immediately (and confirm such notice
              promptly in writing) of any unauthorized, incorrect or delayed
              transfers reflected in such information. You acknowledge that time
              is of the essence in reviewing the Account(s) and reporting
              discrepancies in order to prevent or limit loss by reason of
              unauthorized, erroneous, or delayed transfers, and compliance with
              this requirement is a condition precedent to any recovery against
              us for any alleged error or negligence in connection with such
              transfer request. If a transfer request (or request for
              cancellation or amendment of a transfer request) or payment order
              (or request for cancellation or amendment of a payment order)
              received by us was transmitted or authorized by you, you shall be
              obligated to pay the amount of the associated payment order or
              transfer requests as provided herein, whether or not we complied
              with the Security Procedures and whether or not that transfer
              request or payment order was erroneous in any respect or that
              error would have been detected if we had complied with such
              Security Procedures. For the avoidance of doubt, you further agree
              that any transfer request or payment order that is acted upon in
              good faith by us in compliance with these Security Procedures,
              whether or not in fact authorized by you, shall constitute an
              authorized transfer request or payment order. In the event of a
              breach of the Security Procedure, you agree to assist us in
              determining the manner and source of the breach. Such assistance
              shall include, but shall not be limited to, providing us or our
              agent access to your hard drive, storage media and devices,
              systems and any other equipment or device that was used in breach
              of the Security Procedure. You further agree to provide to us any
              analysis of such equipment, device, or software or any report of
              such analysis performed by you, your agents, law enforcement
              agencies, or any other third party. Failure of you to assist us
              shall be an admission by you that the breach of the Security
              Procedure was caused by a person who obtained access to
              transmitting facilities of you or who obtained information
              facilitating the breach of the Security Procedure from you and not
              from a source controlled by us. We reserve the right to modify,
              amend, supplement, or cancel any or all Security Procedures at any
              time and from time to time in our discretion. We will endeavor to
              give you reasonable notice of any change in Security Procedures;
              provided that we may make any change in Security Procedures
              without advance notice to you if we, in our judgment and
              discretion, believe such change to be necessary or desirable to
              protect the security of our systems and assets. Your use of any
              services described herein, including issuance of a payment order,
              after any change in Security Procedures shall constitute your
              agreement to the change and your agreement that the applicable
              Security Procedures, as changed, are commercially reasonable and
              adequate for the purposes intended.
            </p>
            <p className="mb-4">
              4. Limitation to File Claim. You agree that no legal proceeding or
              action may be commenced against Bank to recover any amounts
              alleged to have been improperly paid out of the Account due to any
              fraudulent or unauthorized transaction unless: (i) you have timely
              provided written notice as required by subsections 1 and 2 of this
              paragraph S (Fraud and Unauthorized Transactions), (ii) Bank did
              not comply with the Security Procedures; and (iii) such proceeding
              or action shall have been commenced within six (6) months from the
              date the first statement containing the unauthorized transaction
              was made available to you. Any proceeding or action not brought
              within one year from the date of the first statement containing
              the unauthorized transaction is forever barred.
            </p>
            <p className="mb-4">
              5. Claim of Loss. If you claim a credit or refund because of a
              forgery, alteration, or any other unauthorized withdrawal, you
              agree to cooperate with us in the investigation of the loss,
              including giving us an affidavit containing whatever reasonable
              information we require concerning your Account, the Card, the
              transaction, and the circumstances surrounding the loss. You will
              notify law enforcement authorities of any criminal act related to
              the claim of lost, missing, or stolen Card or Credentials or
              unauthorized withdrawals. We will have a reasonable period of time
              to investigate the facts and circumstances surrounding any claim
              of loss. In no event will we be liable for special or
              consequential damages, including loss of profits or opportunity,
              or for attorneys’ fees incurred by you. You are liable for Card
              transactions not authorized by you if the Bank can prove that the
              transaction was processed in good faith and in compliance with a
              commercially reasonable security procedures, unless otherwise
              required by law. You agree that you will not waive any rights you
              have to recover your loss against anyone who is obligated to
              repay, insure, or otherwise reimburse you for your loss. You will
              pursue your rights or, at our option, assign them to us so that we
              may pursue them. Our liability will be reduced by the amount you
              recover or are entitled to recover from these other sources.
            </p>
            <p className="mb-4">
              6. Duty of Insurance. You are under a duty to maintain fidelity
              bond coverage on any individual who has access to your Account
              information, Credentials or access devices and on any individual
              responsible for reviewing or reconciling statements. You agree to
              pursue all rights under such policy or any other insurance policy
              you maintain before making a claim against Bank in connection with
              any unauthorized banking transaction. You agree to provide Bank
              with all reasonable information about your insurance coverage,
              including the name of the insurance carrier, the policy number,
              policy limits, and applicable deductibles. Bank’s liability, if
              any, will be reduced by the amount of any insurance proceeds you
              are entitled to receive. At Bank’s request, you agree to assign
              your rights under any insurance policy to Bank.
            </p>
          </div>
          <h3 className="mb-4">IV. ARBITRATION AND WAIVERS.</h3>
          <p className="mb-4">
            THIS ARBITRATION PROVISION WILL HAVE A SUBSTANTIAL IMPACT ON HOW
            LEGAL DISPUTES BETWEEN YOU AND US ARE RESOLVED. PLEASE READ THIS
            SECTION IV (ARBITRATION AND WAIVERS) CAREFULLY. For a dispute
            subject to arbitration, neither you nor we will have the right to:
            (A) have a court or a jury decide the dispute; (B) engage in
            information-gathering (discovery) to the same extent as in court;
            (C) participate in a class action in court or in class arbitration;
            or (D) join or consolidate a claim with claims of any other persons.
            Arbitration procedures are simpler and more limited than rules
            applicable in court.
          </p>
          <p className="mb-4">
            A. <strong>Definitions</strong>. If you have a dispute with us or
            our Service Provider, and we are not able to resolve the dispute
            informally, you and we agree that upon demand by either you or us,
            the dispute will be resolved through the arbitration process as set
            forth in this section. A “claim” or “dispute,” as used in this
            Section IV (Arbitration and Waivers), is any unresolved disagreement
            between you, us and/or our Service Provider, arising from or
            relating in any way to the Account, Card or this Agreement. The
            terms “claim” and “dispute” are to be given the broadest possible
            meaning that will be enforced and includes, by way of example and
            without limitation, any disagreement relating in any way to your
            Account or Card, or the any additional account, joint accountholder,
            additional Cards or cardholders; services offered in connection with
            an Account, Card or any other services offered pursuant to this
            Agreement; to your use of any of our banking products or services;
            to any means you may use to access your Account(s); to any
            advertisements, promotions or oral or written statements related to
            the Account or Card; to the benefits and services related to an
            Account or Card; or your approval, establishment or enrollment for
            an Account or Card. Claims also include disagreements about the
            meaning, application or enforceability of this arbitration
            agreement. As solely used in this Section IV (Arbitration and
            Waivers), “we” or “us” shall include the Bank, its affiliates and
            their successors, employees, directors, officers and agents. In
            addition, “we” or “us” shall include Service Provider, any third
            party, their respective subsidiaries, affiliates, licensees,
            predecessors, successors, and assigns using or providing any
            product, service or benefit in connection with this Agreement or any
            Account or Card if, and only if, such third party is named as a
            co-party with us (or files a claim with or against us) in connection
            with a claim asserted by you. The terms “you” or “yours” shall mean
            each Account owner or cardholder and all persons or entities
            approved to have, approved to use and/or given access to an Account
            or Card, including but not limited to all persons or entities
            contractually obligated under this Agreement and all joint
            accountholder and any additional cardholders. The term “Account,”
            for purposes of arbitration, includes any updated or substitute
            account for you related to the Account or any other account
            contemplated by this Agreement.
          </p>
          <p className="mb-4">
            B. <strong>Binding Arbitration and Appeals</strong>. If either party
            elects arbitration, that claim shall be arbitrated on an individual
            basis. Arbitration applies whenever there is a claim between you and
            us. The arbitrator’s authority to resolve claims or make awards is
            limited to claims between you and us alone. If a third party is also
            involved in a claim between you and us, then the claim will be
            decided with respect to the third party in arbitration as well, and
            it must be named as a party in accordance with the rules of
            procedure governing the arbitration. No award or relief will be
            granted by the arbitrator except on behalf of, or against, a named
            party. Furthermore, claims brought by you against us or by us
            against you may not be joined or consolidated with claims brought by
            or against someone other than you, unless otherwise agreed to in
            writing by all parties. Claims are subject to arbitration,
            regardless of on what theory they are based, whether they seek legal
            or equitable remedies, or whether they are common law or statutory
            (Federal or state) claims. Arbitration applies to any and all such
            claims or disputes, whether they arose in the past, may currently
            exist, or may arise in the future. Judgment upon the arbitrator’s
            award may be entered by any court having jurisdiction. The
            arbitrator’s decision is final and binding, except for any right of
            appeal provided by the Federal Arbitration Act (Title 9 of the
            United States Code) (“FAA”). However, if the amount of the claim
            exceeds $25,000 or involves a request for injunctive or declaratory
            relief that could foreseeably involve a cost or benefit to either
            party exceeding $25,000, any party can, within thirty (30) days
            after the entry of the award by the arbitrator, appeal the award to
            a three-arbitrator panel administered by the forum. The panel shall
            reconsider anew all factual and legal issues, following the same
            rules of procedure and decide by majority vote. Reference in this
            Section IV (Arbitration and Waivers) to “the arbitrator” shall mean
            the panel if an appeal of the arbitrator’s decision has been taken.
          </p>
          <p className="mb-4">
            C. <strong>Initiation of Arbitration</strong>. Any claim must be
            resolved, upon the election by you or us, by arbitration pursuant to
            this Section IV (Arbitration and Waivers) and the code of procedures
            of the national arbitration organization to which the claim is
            referred in effect at the time the claim is filed. Claims shall be
            referred to either Judicial Arbitration and Mediation Services
            (“JAMS”) or the American Arbitration Association (“AAA”), as
            selected by the party electing to use arbitration. For a copy of the
            procedures, to file a claim or for other information about these
            organizations, contact them as follows: (i) JAMS at 1920 Main
            Street, Suite 300, Los Angeles, CA 92614; website at{" "}
            <a href="http://www.jamsadr.com">www.jamsadr.com</a>; and (ii) AAA
            at 335 Madison Avenue, New York, NY 10017; website at{" "}
            <a href="http://www.adr.org">www.adr.org</a> In the event that JAMS
            or the AAA is unable to handle the dispute for any reason, then the
            matter shall be arbitrated instead by a neutral arbitrator selected
            by agreement of the parties pursuant to the AAA rules of procedure;
            or, if the parties cannot agree, selected by a court in accordance
            with the FAA. To the extent that there is any variance between the
            selected forum’s rules and this Section IV (Arbitration and
            Waivers), this Section IV (Arbitration and Waivers) shall control.
            If you initiate the arbitration, you must notify us in writing at
            2955 Campus Drive #110, San Mateo, CA 94403. If we initiate the
            arbitration, we will notify you in writing at your last known
            address in our file.
          </p>
          <p className="mb-4">
            D. <strong>Class Action and Jury Waiver</strong>. NEITHER YOU NOR WE
            (I) HAVE THE RIGHT TO LITIGATE THAT CLAIM IN COURT OR HAVE A JURY
            TRIAL ON THAT CLAIM, (II) SHALL BE ENTITLED TO JOIN OR CONSOLIDATE
            DISPUTES BY OR AGAINST OTHERS IN ANY COURT ACTION OR ARBITRATION,
            (III) HAVE THE RIGHT TO INCLUDE IN ANY COURT ACTION OR ARBITRATION
            ANY DISPUTE AS A REPRESENTATIVE OR MEMBER OF ANY CLASS OF CLAIMANTS
            PERTAINING TO ANY CLAIM SUBJECT TO ARBITRATION, (IV) HAVE THE RIGHT
            TO ACT IN ANY ARBITRATION IN THE INTEREST OF THE GENERAL PUBLIC OR
            IN A PRIVATE ATTORNEY GENERAL CAPACITY, UNLESS THOSE PERSONS ARE
            BENEFICIARIES ON YOUR ACCOUNT; OR (V) ENGAGE IN DISCOVERY EXCEPT AS
            PROVIDED FOR IN THE CODE OF PROCEDURES OF JAMS OR AAA, AS APPLICABLE
            (THE “CODE”). THIS IS SO WHETHER OR NOT THE CLAIM HAS BEEN ASSIGNED.
            NOTE THAT OTHER RIGHTS THAT YOU WOULD HAVE IF YOU WENT TO COURT MAY
            NOT BE AVAILABLE IN ARBITRATION.
          </p>
          <p className="mb-4">
            E. <strong>Location of Arbitration and Cost</strong>. Any
            arbitration shall take place in Memphis, Tennessee, unless the
            parties agree to a different location in writing. The party
            initiating the arbitration (or appeal of the first arbitration
            award) shall pay the initial filing fee. If you file the arbitration
            and an award is rendered in your favor, we will reimburse you for
            your filing fee. All fees and costs will be allocated in accordance
            with the rules of the arbitration forum. Each party shall bear the
            expense of their respective attorneys, experts, and witnesses and
            other expenses, regardless of who prevails, but the arbitrator will
            have the authority to award attorneys and expert witness fees and
            costs to the extent permitted by this Agreement, the forum’s rules,
            or applicable law.
          </p>
          <p className="mb-4">
            F. <strong>Arbitration Procedures</strong>: This Section IV
            (Arbitration and Waivers) is made pursuant to a transaction
            involving interstate commerce, and shall be governed by the Federal
            Arbitration Act, 9 U.S.C. Sections 1-16, as it may be amended (the
            “FAA”). The arbitration shall be governed by the applicable Code,
            except that (to the extent enforceable under the FAA) this
            Arbitration Section shall control if it is inconsistent with the
            applicable Code. The arbitrator shall apply applicable substantive
            law consistent with the FAA and applicable statutes of limitations
            and shall honor claims of privilege recognized at law and, at the
            timely request of either party, shall provide a brief written
            explanation of the basis for the decision. In conducting the
            arbitration proceeding, the arbitrator shall not apply the Federal
            or any state rules of civil procedure or rules of evidence. Either
            party may submit a request to the arbitrator to expand the scope of
            discovery allowable under the applicable Code. The party submitting
            such a request must provide a copy to the other party, who may
            submit objections to the arbitrator with a copy of the objections
            provided to the request party, within fifteen (15) days of receiving
            the requesting party’s notice. The granting or denial of such
            request will be in the sole discretion of the arbitrator who shall
            notify the parties of his/her decision within twenty (20) days of
            the objecting party’s submission. The arbitrator shall take
            reasonable steps to preserve the privacy of individuals, and of
            business matters. Judgment upon the award rendered by the arbitrator
            may be entered in any court having jurisdiction. The arbitrator’s
            decision will be final and binding, except for any right of appeal
            provided by the FAA. However, any party can appeal that award to a
            three-arbitrator panel administered by the same arbitration
            organization, as set forth in Section IV(B) (Arbitration and
            Waivers).
          </p>
          <p className="mb-4">
            G. <strong>Governing Law</strong>. You and we agree that in our
            relationship arising from this Agreement: (1) the parties are
            participating in transactions involving interstate commerce; (2) the
            arbitrator shall decide any dispute regarding the enforceability of
            this arbitration agreement; and (3) this arbitration agreement and
            any resulting arbitration are governed by the provisions of the FAA,
            and, to the extent any provision of that act is inapplicable, the
            laws of the State of Tennessee. The arbitrator must apply applicable
            substantive law consistent with the FAA and applicable statutes of
            limitations and claims of privilege recognized at law. At the timely
            request of either party, the arbitrator must provide a brief written
            explanation of the basis for the award.
          </p>
          <p className="mb-4">
            H. <strong>Continuation and Severability</strong>. This Section IV
            (Arbitration and Waivers) shall survive termination of your Account,
            Card, any voluntary payment of any debt owed to us and paid in full
            by you, any legal proceeding by us to collect a debt owed by you,
            and/or any bankruptcy by you or us. If any portion of this Section
            IV (Arbitration and Waivers) of this Arbitration Section is deemed
            invalid or unenforceable under any principle or provision of law or
            equity, consistent with the FAA, it shall not invalidate the
            remaining portions of this Section IV (Arbitration and Waivers),
            this Agreement or any prior agreement you may have had with us, each
            of which shall be enforceable regardless of such invalidity.
          </p>
          <h3 className="mb-4">V. MISCELLANEOUS TERMS.</h3>
          <p className="mb-4">
            A. <strong>Ordinary Care; No Fiduciary Obligation</strong>. You
            agree that any act or omission made by us in reliance upon or in
            accordance with any provision of the Uniform Commercial Code as
            adopted in the State of Tennessee, or any rule or regulation of the
            State of Tennessee or a federal agency having jurisdiction over the
            Bank, shall constitute ordinary care. Unless otherwise specified or
            required by law, we do not assume any fiduciary obligation on your
            behalf. Unless required by law, this means that we do not act as
            your trustee or financial advisor, and we don't assume any
            responsibility for your account beyond reasonable care.
          </p>
          <p className="mb-4">
            B. <strong>Account Disputes</strong>. If a dispute arises concerning
            your Account (including, for example, a dispute over who is an
            authorized signer or owner), or if we believe we have a claim
            against you or we have or receive a claim by a third party
            (including our affiliates) to all or a portion of the property
            (including money, certificates of deposit, securities and other
            investment property, financial assets, etc.) in your Account, or if
            we have concerns regarding your Account or the use of your Account,
            we have the right to hold any portion of the property in your
            Account until the dispute, claim, or concern is resolved to our
            satisfaction. We will not be liable to you if the hold we place on
            your Account leaves insufficient funds to cover outstanding
            transactions. If the dispute, claim or concern remains unresolved,
            you agree that we may at our option deposit the property in your
            Account with a court and ask the court to determine to whom the
            property belongs. If we deposit your property with a court, you
            agree that we may charge your Account for our costs, including
            attorney’s fees and expenses.
          </p>
          <p className="mb-4">
            <strong>C. Governing Law, Forum and Time Limits.</strong>
          </p>
          <ul className="mb-4 list-disc">
            <li>
              All Accounts are opened at the Tennessee branch office of the
              Bank. All actions relating to your Account, including this
              Agreement and issuance of a Card, will be governed by the laws and
              regulations of the United States and the State of Tennessee (to
              the extent that laws of the State of Tennessee are not preempted
              by Federal law). Federal laws and the laws of the State of
              Tennessee shall be applied without giving effect to principles of
              conflicts of law.
            </li>
            <li>
              To the extent any dispute arising under this Agreement or relating
              in any way to your Account, Card or your relationship with us is
              not arbitrated, you consent to the jurisdiction of, and agree that
              such dispute will be resolved by the Federal or state court
              located in Shelby County, Tennessee.
            </li>
            <li>
              Subject to applicable law, you must file any lawsuit (to the
              extent permitted by this Agreement) or arbitration against us
              within one (1) year after the claim arises, unless Federal law or
              the laws of the State of Tennessee or an applicable agreement
              requires a longer time. This limit is in addition to limits on
              notice as a condition to making a claim. If applicable law does
              not permit contractual shortening of the time during which a
              lawsuit must be filed to a period as short as one (1) year, you
              agree to the shortest permitted time under Tennessee law. Any
              action against us must be brought within the period that the
              applicable law requires us to preserve records, unless applicable
              law or this agreement provides a shorter limitation period.
            </li>
          </ul>

          <p className="mb-4">
            D. <strong>Reporting Information</strong>. We may report information
            about your Account or Card to consumer reporting agencies,
            governmental agencies, and/or third-party data services. Defaults on
            your Account may be reflected in your consumer report.
          </p>
          <p className="mb-4">
            E. <strong>Changes in Terms and Termination</strong>. We may amend
            or revise the terms and conditions of this Agreement, including any
            fees, and features of your Account or Card at any time by posting a
            revised version [here][hyperlink the static page with this
            Agreement]Solid customers host this disclosure for their users on
            their website. The appropriate hyperlink will be added when the
            customer publishes., and any such revisions or changes shall be
            effective upon posting. We will give you advance notice if we are
            required by applicable law. We may also amend or revise he terms and
            conditions of this Agreement, including any fees, and features of
            your Account or Card at any time by providing you notice. We may
            provide notice contemplated by this section to you with your
            statement, electronically, or by mail. Any notice we provide to you
            will be binding and sent to the last (postal or electronic) address
            in our records. We may change your address if we receive an address
            change notice from the U.S. Postal Service or any third party
            vendor. Subject to the terms of this Agreement, you may determine to
            cease use of or close your Account or Card if you do not agree with
            any change or revision to this Agreement prior to the effective date
            of such revision. Any continued use of your Account or Card is
            presumed your acceptance of and agreement to be bound by revisions
            to this Agreement. We may terminate this Agreement with or without
            notice at our discretion and at any time. Following the termination
            of this Agreement, you shall remain liable for any breach of your
            representations, warranties, covenants and obligations during the
            term of this Agreement.
          </p>
          <p className="mb-4">
            F. <strong>Security Interest</strong>. You grant us a security
            interest in your Account to secure payment of any money that you owe
            to us arising under this Agreement or any other agreements with us.
            You acknowledge and grant us the right to use any of the funds in
            your Account to cover any money you owe to us (a “right of
            set-off”). We have the right to set-off any liability, direct or
            contingent, past, present or future that you owe against any account
            you have with us. This means that we can take any funds in your
            Account or any other account you have with us to pay any debt or
            liability you owe us. We may exercise our security interest or right
            of set-off without prior recourse to other sources of repayment or
            collateral, if any, and even if such action causes you to lose
            interest, incur any penalty or suffer any other consequence. If we
            exercise our security interest or right to set-off, we will notify
            you to the extent required by applicable law. If the law imposes
            conditions or limits on our ability to take or set off funds in your
            Account, to the extent that you may do so by contract, you waive
            those conditions and limits, and you authorize us to apply funds as
            we deem applicable. We may also exercise these rights against any
            Account beneficiary. These rights exist no matter who contributed
            the funds to the Account. We will consider your consent to this
            Agreement as your consent for us asserting our security interest or
            exercising our right of set-off should any laws governing your
            Account require your consent.
          </p>
          <p className="mb-4">
            G. <strong>No Waiver of Rights</strong>. If we fail to exercise or
            waive a right with respect to your Account or Card on one or more
            occasions, it does not mean we have waived, or are obligated to
            waive, the same right on any other occasion. We may release any
            other person obligated under this Agreement without affecting your
            responsibilities under this Agreement. In any event, no such waiver
            or delay by us is effective unless it is in writing and approved by
            us.
          </p>
          <p className="mb-4">
            H. <strong>Assignment</strong>. Your Account and/or Card is not
            transferable and is not assignable by you as collateral for a loan
            or for any other purpose. The Bank may transfer or assign its rights
            under this Agreement, including transferring or assigning your
            Account without your consent and without notice, unless required by
            applicable law.
          </p>
          <p className="mb-4">
            I. <strong>Other Services and Conflicts</strong>. If you and Bank
            have entered into any other agreement related to additional bank
            services offered in connection with your Account (“Other
            Agreement”), this Agreement and the Other Agreement shall be read
            together as if one agreement. If any term of such Other Agreement
            conflicts with any term of this Agreement, this Agreement shall
            control. If any statement that is made by one of our employees, our
            affiliates’ employees, or by Servicer or Servicer’s employees or
            affiliates, conflicts with this Agreement, the terms of this
            Agreement shall govern.
          </p>
          <p className="mb-4">
            J. <strong>Privacy</strong>. You authorize us to collect, transmit,
            store, use or share technical, location and login or other
            information about you and your use of the Account, Card or use of a
            Card through a Digital Wallet with our affiliates, the Service
            Provider, Digital Wallet Provider, card payment network and third
            parties, unless applicable law or{" "}
            <a href="https://nam05.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.getevolved.com%2Fprivacy-policy%2F&data=02%7C01%7Csarah.erwin%40getevolved.com%7C615d3db9d5ff44b8a7ff08d81846098d%7Ce27426a1cf5f454c9939221f9145deab%7C0%7C0%7C637286036385695899&sdata=Qs">
              our Privacy Policy
            </a>{" "}
            prohibits us from doing so. Please see our Privacy Notice for your
            choices about information sharing. We will use, share and protect
            your personal information in accordance with our privacy policy, as
            it may be amended from time to time, and that is available{" "}
            <a href="https://help.solidfi.com/hc/en-us/articles/4405764088987-Evolve-Privacy-Policy">
              here
            </a>
          </p>
          <p className="mb-4">
            You understand, acknowledge and agree that the use and disclosure of
            any information provided by you directly to a Digital Wallet
            provider, the applicable payment network branded on your Card, the
            Service Provider or other third parties (including their respective
            agents, representatives, affiliates and service providers) will
            permit such parties to have access to certain details of your
            transactions made with your Account, Card or Digital Wallet and such
            use, accesses and disclosure will be governed by such party's
            privacy policy and not our privacy policy, and, to the greatest
            extent permitted by law, we are not liable for the use of your
            information by any such parties. You understand that the information
            that is provided to or held by a Digital Wallet Provider or other
            third parties in relation to your Account, Card, or Digital Wallet
            is outside of our control. Any information you provide to a Digital
            Wallet Provider or any other third party through your use of your
            Card with the Digital Wallet or that is accessed or collected by
            your Digital Wallet Provider, is subject to the Digital Wallet
            Provider’s separate agreement with you, including that party’s
            privacy policy.
          </p>
          <p className="mb-4">
            We periodically collect and use technical data and related
            information (for example, we may collect technical information about
            your Supported Device to facilitate the updates to our services).
          </p>
          <p className="mb-4">
            Push notifications can be displayed on a locked or inactive device
            screen. Since it is possible to view this information even when your
            Supported Device is locked, you must maintain physical control over
            your Supported Device and/or turn off push notifications to prevent
            potential unauthorized use.
          </p>
          <p className="mb-4">
            K. <strong>Severability</strong>. In the event that any court or
            tribunal of competent jurisdiction determines that any provision of
            this Agreement is illegal, invalid, or unenforceable, the remainder
            of this Agreement shall not be affected thereby. To the extent
            permitted by applicable law, the parties hereto waive any provision
            of law which prohibits or renders unenforceable any provision
            hereof, and to the extent that such waiver is not permitted by
            applicable law, the parties intend that such provision be
            interpreted as modified to the minimum extent necessary to render
            such provision enforceable.
          </p>
          <p className="mb-4">
            L.{" "}
            <strong>
              Limitation of Liability, Disclaimer of Warranty, Indemnification
              and Reimbursements
            </strong>
            .
          </p>
          <div className="ml-8">
            <p className="mb-4">
              Limitation of Liability. EXCEPT AS REQUIRED BY LAW, WE ARE NOT
              LIABLE FOR ANY CLAIMS, COSTS, LOSSES, OR DAMAGES RESULTING
              DIRECTLY OR INDIRECTLY FROM OUR FAILURE TO ACT, OR ANY DELAY
              BEYOND TIME LIMITS PRESCRIBED BY LAW OR PERMITTED BY THIS
              AGREEMENT IF SUCH FAILURE OR DELAY IS CAUSED BY MAINTENANCE OR
              INTERRUPTION OR MALFUNCTION OF EQUIPMENT OR COMMUNICATION
              FACILITIES, UNUSUAL TRANSACTION VOLUME, SUSPENSION OF PAYMENTS BY
              ANOTHER FINANCIAL INSTITUTION, FIRE, NATURAL DISASTERS, ELEMENTS
              OF NATURE, GOVERNMENT ACTION, ACTS OF WAR, TERRORISM OR CIVIL
              STRIFE, EMERGENCY CONDITIONS, OR OTHER CIRCUMSTANCES BEYOND THE
              REASONABLE CONTROL OF BANK. IN NO EVENT WILL WE BE LIABLE FOR ANY
              CONSEQUENTIAL, INDIRECT, SPECIAL, INCIDENTAL, EXEMPLARY, PUNITIVE
              DAMAGES OR DAMAGES OF ANY KIND EVEN IF YOU ADVISE US OF THE
              POSSIBILITY OF SUCH DAMAGES. WE SHALL NOT BE LIABLE TO ANY THIRD
              PARTY OR FOR ANY ACT OR OMISSION OF YOURS OR ANY THIRD PARTY,
              INCLUDING, BUT NOT LIMITED TO, THIRD PARTIES USED BY US IN
              EXECUTING A PAYMENT ORDER OR TRANSACTION REQUEST OR PERFORMING A
              RELATED ACT AND NO SUCH THIRD PARTY SHALL BE DEEMED TO BE OUR
              AGENT. NOTWITHSTANDING ANYTHING TO THE CONTRARY, WE SHALL ONLY BE
              RESPONSIBLE AND LIABLE FOR OUR OWN GROSS NEGLIGENCE OR WILLFUL
              MISCONDUCT IN PERFORMING OUR OBLIGATIONS UNDER THIS AGREEMENT.
              SUBJECT TO THE PRECEDING SENTENCE, OUR LIABILITY TO YOU FOR A
              CLAIM IS LIMITED TO THE FACE VALUE OF THE ITEM OR TRANSACTION, OR
              THE ACTUAL VALUE OF ANY FUNDS NOT PROPERLY CREDITED OR DEBITED. WE
              SHALL NOT BE LIABLE TO ANY THIRD PARTY OR FOR ANY ACT OR OMISSION
              OF YOURS OR ANY THIRD PARTY, INCLUDING, BUT NOT LIMITED TO, THIRD
              PARTIES USED BY US IN EXECUTING ANY TRANSACTION CONTEMPLATED BY
              THIS AGREEMENT OR PERFORMING A RELATED ACT AND NO SUCH THIRD PARTY
              SHALL BE DEEMED TO BE OUR AGENT. ALL BANK SERVICES AND ACCOUNT OR
              CARD FEATURES ARE PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT
              WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT
              NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS
              FOR A PARTICULAR PURPOSE. WE DO NOT WARRANT THE BANK’S SERVICES OR
              ACCOUNT OR CARD FEATURES WILL MEET YOUR REQUIREMENTS, BE
              CONTINUOUS, UNINTERRUPTED, SECURE, TIMELY, OR ERROR-FREE, OR THAT
              DEFECTS WILL BE CORRECTED. IN ADDITION, EXCEPT AS REQUIRED BY LAW,
              WE ARE NOT LIABLE OR RESPONSIBLE FOR ANY SERVICES OR FEATURES OF
              THE SERVICE PROVIDER PLATFORM OR SERVICES ANY OTHER PRODUCTS
              PROVIDED TO YOU BY SERVICE PROVIDER. WE ARE ALSO NOT LIABLE FOR
              ANY UNAUTHORIZED ACCESS OF YOUR INFORMATION OR DATA BY A THIRD
              PARTY DUE TO YOUR USE OF THIRD-PARTY COMMUNICATION CHANNELS NOT
              OFFERED BY US. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM
              ALL WARRANTIES, EITHER EXPRESS OR IMPLIED OR STATUTORY, INCLUDING,
              BUT NOT LIMITED TO, ANY IMPLIED WARRANTIES OF MERCHANTABILITY,
              FITNESS FOR A PARTICULAR PURPOSE AND LACK OF VIRUSES RELATED TO
              THE SERVICES AND/OR PRODUCTS OF SERVICE PROVIDER AND/OR THE
              SERVICE PROVIDER PLATFORM.
            </p>
            <p className="mb-4">
              YOU ACKNOWLEDGE AND UNDERSTAND THAT THE DIGITAL WALLET IS BEING
              PROVIDED TO YOU BY THE APPLICABLE DIGITAL WALLET PROVIDER AND
              OTHER THIRD PARTIES THAT SUPPORT SUCH DIGITAL WALLET PROVIDER. YOU
              EXPRESSLY ACKNOWLEDGE AND AGREE THAT THE USE OF ANY CARD IN A
              DIGITAL WALLET IS AT YOUR SOLE RISK. YOU UNDERSTAND THAT WE
              NEITHER CONTROL NOR ENDORSE, AND ARE NEITHER RESPONSIBLE NOR
              LIABLE FOR: (A) ANY DIGITAL WALLET OR SERVICES PROVIDED BY ANY
              DIGITAL WALLET PROVIDER; (B) ANY ACT OR OMISSION OF A DIGITAL
              WALLET PROVIDER OR ANY PARTY SUPPORTING A DIGITAL WALLET OR ANY
              MERCHANT; (C) SUPPORTED DEVICES, INCLUDING THEIR OPERATION; OR (D)
              ANY ACT OR OMISSION OF ANY OTHER THIRD PARTY. WE ARE NOT
              RESPONSIBLE FOR THE ACCURACY, COMPLETENESS, RELIABILITY,
              INTEGRITY, QUALITY, LEGALITY, USEFULNESS OR SAFETY OF ANY THIRD
              PARTY INFORMATION OR DIGITAL WALLET. WE DO NOT WARRANT THAT THE
              FUNCTIONS CONTAINED IN, OR SERVICES PROVIDED OR PERFORMED BY ANY
              DIGITAL WALLET OR DIGITAL WALLET PROVIDER (INCLUDING ANY THIRD
              PARTY PROVIDING SUPPORT FOR ANY DIGITAL WALLET OR DIGITAL WALLET
              PROVIDER) WILL MEET YOUR REQUIREMENTS, THAT THE OPERATION OR
              AVAILABILITY OF DIGITAL WALLET OR SERVICES OF A DIGITAL WALLET
              PROVIDER WILL BE UNINTERRUPTED OR ERROR-FREE, OR THAT DEFECTS IN
              THE DIGITAL WALLET OR WITH THE DIGITAL WALLET PROVIDER’S SERVICES
              OR PRODUCTS WILL BE CORRECTED. ACCESS, USE AND MAINTENANCE OF YOUR
              CARD IN A DIGITAL WALLET WILL DEPEND ON THE DIGITAL WALLET AND THE
              PAYMENT CARD NETWORKS AND WIRELESS CARRIERS. WE DO NOT OPERATE OR
              CONTROL THE DIGITAL WALLET OR SUCH PAYMENT CARD NETWORKS OR
              WIRELESS CARRIERS. WE WILL NOT BE LIABILE FOR ANY CIRCUMSTANCES
              THAT INTERRUPT, PREVENT OR OTHERWISE AFFECT THE FUNCTIONING OF ANY
              CARD WITH A DIGITAL WALLET OR DIGITAL WALLET SERVICE OR YOUR
              WIRELESS SERVICE, COMMUNICATIONS, NETWORK DELAYS, LIMITATIONS ON
              YOUR WIRELESS COVERAGE, SYSTEM OUTAGES OR INTERRUPTIONS OF YOUR
              WIRELESS CONNECTION. WE DISCLAIM ANY RESPONSIBILITY FOR ANY
              DIGITAL WALLET OR ANY WIRELESS SERVICE USED TO ACCESS, USE OR
              MAINTAIN YOUR CARD IN ANY DIGITAL WALLET.
            </p>
            <p className="mb-4">
              USE OF YOUR CARD WITH A DIGITAL WALLET INVOLVES THE ELECTRONIC
              TRANSMISSION OF PERSONAL INFORMATION THROUGH THIRD-PARTY
              CONNECTIONS. BECAUSE WE DO NOT OPERATE OR CONTROL THESE
              CONNECTIONS, WE CANNOT GUARANTEE THE PRIVACY OR SECURITY OF THESE
              DATA TRANSMISSIONS. ADDITIONALLY, YOUR SUPPORTED DEVICE’S BROWSER
              IS GENERALLY PRE-CONFIGURED BY YOUR WIRELESS CARRIER. YOU SHOULD
              CHECK WITH YOUR DIGITAL WALLET PROVIDER AND YOUR WIRELESS CARRIER
              FOR INFORMATION ABOUT THEIR PRIVACY AND SECURITY PRACTICES. FOR
              PERSONAL OR CONFIDENTIAL INFORMATION SENT TO OR FROM US OVER THE
              INTERNET FROM YOUR SUPPORTED DEVICE, WE RESERVE THE RIGHT TO LIMIT
              SUCH CONNECTIONS TO "SECURE SESSIONS" THAT HAVE BEEN ESTABLISHED
              USING TRANSPORTATION LAYER SECURITY OR OTHER SECURITY STANDARDS
              WE, IN OUR SOLE DISCRETION, SELECT.  WE MAKE NO GUARANTEES ABOUT
              THE INFORMATION SHOWN IN THE DIGITAL WALLET SOFTWARE OR HARDWARE
              IT CONTAINS AND MAKE NO REPRESENTATIONS, WARRANTIES, OR GUARANTEES
              REGARDING THE SAME. 
            </p>
            <p className="mb-4">
              YOU AGREE THAT THE AMOUNT OF ANY CLAIM YOU HAVE AGAINST US IN
              CONNECTION WITH ANY ACCOUNT OR TRANSACTION WITH US, WHETHER
              BROUGHT AS A WARRANTY, NEGLIGENCE, WRONGFUL DISHONOR OR OTHER
              ACTION, IS SUBJECT TO REDUCTION TO THE EXTENT THAT: 1) NEGLIGENCE
              OR FAILURE TO USE REASONABLE CARE ON YOUR PART, OR ON THE PARTY OF
              ANY OF YOUR AGENTS OR EMPLOYEES, CONTRIBUTED TO THE LOSS WHICH IS
              THE BASIS OF YOUR CLAIM AND 2) DAMAGES COULD NOT BE AVOIDED BY OUR
              USE OF ORDINARY CARE.
            </p>
            <p className="mb-4">
              ANY LOSS RECOVERY YOU OBTAIN FROM THIRD PARTIES ON A PARTICULAR
              CLAIM WILL REDUCE THE AMOUNT OF ANY OBLIGATIONS WE MAY HAVE TO YOU
              ON THAT CLAIM AND YOU WILL IMMEDIATELY NOTIFY US OF ANY SUCH
              RECOVERY. YOU AGREE TO PURSUE ALL RIGHTS YOU MAY HAVE UNDER ANY
              INSURANCE POLICY YOU MAINTAIN IN CONNECTION WTH ANY LOSS AND TO
              PROVIDE US INFORMATION REGARDING COVERAGE. OUR LIABILITY WILL BE
              REDUCED BY THE AMOUNT OF ANY INSURANCE PROCEEDS YOU RECEIVE OR ARE
              ENTITLED TO RECEIVE IN CONNECTION WITH THE LOSS. IF WE REIMBURSE
              YOU FOR A LOSS COVERED BY INSURANCE, YOU AGREE TO ASSIGN US YOUR
              RIGHTS UNDER THE INSURANCE TO THE EXTENT OF YOUR REIMBURSEMENT.
            </p>
            <p className="mb-4">
              Indemnification. To the greatest extent permitted by law, you
              agree to indemnify and hold us and our officers, directors,
              shareholders, employees, successors, predecessors,
              representatives, principals, agents, assigns, parents,
              subsidiaries and/or insurers harmless from any losses, damages,
              suits and expenses, including reasonable attorneys’ fees, that we
              may incur, without regard to the merit or lack thereof, arising
              out of, or related in any way to: (i) taking any action or not
              taking any action that we are entitled to take pursuant to this
              Agreement; (ii) any action or omission by you; (iii) any misuse of
              the services hereunder by you or any third party within your
              control or on your behalf; (iv) the matters set forth herein; (v)
              our action or inaction in reliance upon oral, written or
              electronic instructions or information from you or any of your
              authorized representatives; (vi) your performance of the services
              under this Agreement or refusing to perform any transfer request
              in accordance with a transfer request; (vii) any delay, suspension
              or cancellation of arrangements we made with respect to any
              transfer request when the rejection, suspension or cancellation is
              for any reason permitted under this Agreement, including your
              cancellation of a payment order or transfer request for any
              reason; or (viii) any crediting or debiting of the Account, except
              where applicable law requires otherwise. Without limiting the
              foregoing, if we comply with the provisions of this Agreement, you
              agree that we shall not be responsible for any communication or
              miscommunication by you or your representatives, and you further
              agree to indemnify, to the extent allowed by law, us and hold us
              harmless from and against any and all losses, claims, expenses,
              suits, costs or damages, demands or liabilities of whatever kind
              or nature, whether now existing or hereafter relating in any way
              to a payment order, payment instruction, payment order, transfer
              request or other payment related request or instruction made
              pursuant to this Agreement.
            </p>
            <p className="mb-4">
              Reimbursement for Losses. If we take any action to collect debt
              incurred by you or other amounts you owe us under these Agreement
              or defend ourselves in a lawsuit brought by you where we are the
              prevailing party, you agree to reimburse us for our losses,
              including, without limitation, reasonable attorneys’ fees, to the
              extent permitted by applicable law. We may charge your Account for
              our losses without prior notice to you.
            </p>
          </div>
          <p className="mb-4">
            M. <strong>Liability for Service Interruptions</strong>. From time
            to time, due to maintenance, malfunctions or failures of software,
            equipment, or telecommunications devices, as well as unusual
            transaction volume or similar reasons, access to your Account or
            Card may not be available to you. Access to your Account may also be
            interrupted as a result of things beyond our reasonable control,
            computer failures, loss of power, failure or interruption of
            communication or transportation facilities, riots, strikes, or civil
            unrest. You agree that we shall not be responsible for any loss,
            damages, costs or expenses that you may suffer or incur, directly or
            indirectly, as a result of the unavailability of access to your
            Account or Card, regardless of whether it could be shown that we
            could have prevented or reduced the duration of such unavailability
            by taking any action within our reasonable control. We shall also
            not be responsible for any loss, damages, costs or expenses which
            you may suffer or incur, directly or indirectly, as a result of your
            inability to access your Account or Card caused directly or
            indirectly, in whole or in part, by your computer or mobile device,
            your inability to establish a connection to or to access the
            Internet, or other limitations or constraints of the Internet. The
            provisions set forth in this section shall apply in addition to any
            other provisions in this Agreement but as applied to service
            interruptions for access to your Account, this section shall
            control.
          </p>
          <p className="mb-4">
            N. <strong>Section Headings and Successors</strong>. The headings in
            this Agreement are only for convenience and do not in any way limit
            or define your or our rights or obligations under this Agreement.
            This Agreement will be binding on your personal representatives,
            executors, administrators, and successors.
          </p>
          <p className="mb-4">
            O. <strong>Change of Address or any Application Information</strong>
            . You must notify us through the Service Provider Platform of any
            change of address, email address or phone number or any material
            change to information you provided us in your application to open an
            Account. Any notice we provide to you will be binding and sent to
            the last (postal or electronic) address in our records. We may
            change your address if we receive an address change notice from the
            U.S. Postal Service or if a company in the business of providing
            correct addresses informs us that the address in our records no
            longer matches your address.
          </p>
          <p className="mb-4">
            P. <strong>Communications</strong>. You acknowledge that data,
            including emails, may be accessed by unauthorized third parties when
            communicated between you and the Bank, using the Internet,
            telephone, or other electronic devices. We are not responsible for
            any misdirected data or disclosures that occur as a result of your
            use of third-party electronic communication channels.
          </p>
          <p className="mb-4">
            Q. <strong>Calls and Messages</strong>. You agree that we or our
            agents or service providers may contact you regarding any matter for
            any non- telemarketing reason using any kind of telecommunications
            technology at any email and telephone number you provide to us,
            including the phone number for your mobile device. You agree to
            receive these calls and messages, including pre-recorded or
            auto-dialed calls. You also agree that we may send text messages to
            any phone number for your mobile device you provide to us. You
            understand and accept that your service provider may charge you for
            these calls and messages consistent with applicable law. For quality
            control purposes and for other reasons, you permit us to record and
            monitor your telephone conversations and electronic communications
            with us (including email). Unless the law requires otherwise, you
            consent in advance to such recording and monitoring and we do not
            need to remind you of these activities at the time of the call or
            communication. To revoke the consent provided pursuant to this
            subsection, you must send ten (10) days’ prior written notice of
            such revocation to 2955 Campus Drive #110, San Mateo, CA 94403.
          </p>
          <ul classname="mb-4">
            <li>
              Compliance with Laws and Rules. You acknowledge that any payment
              order, payment instruction, or transfer requests under this
              Agreement may not be used in violation of the laws of any state or
              jurisdiction, the United States or any other country, including
              without limitation laws administered by the Office of Foreign
              Assets Control. You agree to comply with all applicable federal,
              state, and local laws, rules, regulations, including Protected
              Information and Operating Circulars and with (i) all applicable
              rules and operating guidelines issued by the National Automated
              Clearing House Association or other clearing agent and (ii) any
              policies and procedures, including any guide, guidelines and
              related procedures provided to you from time to time by us
              (collectively, the “Rules”). You will be responsible for knowing
              the requirements of the applicable Rules, and you will have the
              responsibility to fulfill any compliance requirement or obligation
              that we and/or you may have under the Rules applicable to this
              Agreement and of the services provided to you hereunder, including
              without limitation sanction laws administered by the Office of
              Foreign Assets Control, and other requirements relating to
              anti‐money laundering, including but not limited to the federal
              Bank Secrecy Act, the USA PATRIOT Act and any regulations of the
              U.S. Treasury Department to implement such Acts, as amended from
              time to time. Each time you make a transfer request or
              transaction, you represent to us that each such request or
              transaction is bona fide and/or you conduct your business and
              originate payments, transactions and/or other related activity in
              compliance with the applicable laws and Rules. You shall be liable
              for the amount of any fines and/or liabilities assessed against us
              for any violation of the Rules that are due to the acts or
              omissions of you or any other third party providing services to
              you that in any way relate to the service under this Agreement.
            </li>
            <li>
              Bankruptcy or Insolvency. You will immediately notify us of any
              bankruptcy, receivership, insolvency or similar action initiated
              by or against you or any of you principals and will include us on
              the list of creditors as filed with the Bankruptcy Court and
              failure to do so will be cause for immediate termination or any
              other action available to us under applicable Laws or Rules. As an
              executory contract to make a loan, or extend other debt financing
              or financial accommodations to or for the benefit of you, this
              Agreement cannot be assumed or assigned under your bankruptcy.
            </li>
            <li>
              Survival. Termination of this Agreement shall not impact any right
              or obligation arising prior to termination, and in any event, the
              parties agree that any right or obligation which, by its nature,
              should survive termination of this Agreement will survive any such
              termination (including, but not limited to Sections IV
              (Arbitration and Waivers) and V (Miscellaneous Terms) of this
              Agreement).
            </li>
          </ul>
          <h3 className="mb-4">VI. TAX REPORTING AND BACKUP WITHHOLDING.</h3>
          <p className="mb-4">
            If you are subject to backup withholding, you may not access or use
            the Account. Internal Revenue Code requires most recipients of
            dividends, interest, or other payments to give Taxpayer
            Identification Numbers to payors who must report payments to the
            Internal Revenue Service. The Internal Revenue Service uses the
            numbers for identification purposes and to verify the accuracy of
            your tax return.
          </p>
          <p className="mb-4">
            If you fail to furnish a correct Taxpayer Identification Number
            (TIN), you may be subject to a penalty of $50 for each such failure
            unless such failure is due to reasonable cause and not to willful
            neglect. If you fail to furnish a TIN, the Bank may refuse to open
            your Account. The Bank may close an Account which was opened without
            a TIN and you fail to subsequently provide a TIN.
          </p>
          <p className="mb-4">
            If you make a false statement with no reasonable basis that results
            in no imposition of backup withholding, you may be subject to a
            penalty of $500. Willfully falsifying certifications or affirmations
            may subject you to criminal penalties including fines and/or
            imprisonment. If you disclose or use a TIN in violation of federal
            law, you may be subject to civil and criminal penalties.
          </p>
          <h3 className="mb-4">VII. WIRE TRANSFERS.</h3>
          <li>
            General. In the event we make available to you wire transfers of
            funds from your Account(s) with us for credit to an account at
            another financial institution or another account with us (“Wire
            Transfer”), whether such transfers are domestic or international,
            this Section VII applies, in addition to the other terms and
            conditions set forth in this Agreement.. We will make available to
            you, from time to time, our policies, procedures, guidelines and
            other writings governing the use of the Wire Transfer Services by
            you, as may be amended or supplemented by Bank from time to time
            (the “Wire User Guide”). You will comply with and preform all of
            your obligations under this Agreement in compliance with the Wire
            User Guide and this Agreement. If there is a conflict between the
            Wire User Guide and this Agreement, the Wire User Guide shall
            control. If made available to you, you may send a Wire Transfer by
            submitting a request through the Service Provider Platform. When
            acting upon your Wire Transfer instructions, we may use any means of
            transmission, funds transfer system, clearing house, or intermediary
            bank that we reasonably select. We may make use of correspondents,
            agents, subagents, and funds transfer and communication systems.
            Such third parties shall be deemed your agents, and we shall not be
            liable for any errors, delay, mis-delivery, or failure of delivery
            by any of them unless applicable law says otherwise. The
            beneficiary, frequency and dollar amount for any Wire Transfer may
            be limited. The limits are designed to be flexible in order to
            protect the security and integrity of the service and accounts,
            including any use by you or others of the service and your Account
            or any other person’s account. Based on confidential fraud and
            essential risk criteria, they may be modified at our discretion
            without advance notice. We reserve the right to reject any Wire
            Transfer request. We have no responsibility to accept any incoming
            Wire Transfer(s) for your benefit, and we may reject any Wire
            Transfer request(s) for an outgoing Wire Transfer for reasons
            including, but not limited to, insufficient or uncollected funds in
            the account specified in the Wire Transfer request, a request that
            fails the security procedures outlined herein or if we are unable to
            verify the authenticity of the Wire Transfer request.
          </li>
          <p className="mb-4">
            If you submit a Wire Transfer request to us, we will process it on
            the same business day (or next business day if the request is not
            made on a business day) so long as we receive the request no later
            than the Cut-Off Time, subject to verification in accordance with
            the security procedures described in this Section VII. If it is
            received after the Cut-Off Time and verified through our security
            procedures, the Wire Transfer request may be processed the next
            business day. We may treat any Wire Transfer request received at or
            after our cut-off time as if it was received that business day, or
            we may treat it as if it were received at the opening of the next
            business day, in our sole and absolute discretion. If we determine,
            in our sole discretion, not to honor, execute, or accept a Wire
            Transfer request, we may notify you, but are not obligated to and we
            shall have no liability for delay or failure to do so. We will also
            use commercially reasonable efforts to notify you promptly if a Wire
            Transfer is returned to us after its execution but shall have no
            liability by reason of our delay or failure to do so. We shall have
            no obligation to resend a Wire Transfer if we complied with the
            original Wire Transfer request and such Wire Transfer was returned
            to us.
          </p>
          <p className="mb-4">
            You authorize us to debit or credit your Account immediately for an
            amount equal to the Wire Transfer request and any applicable fees
            related to such Wire Transfer request. Your Wire Transfer requests
            may involve the transfer of funds from your Account to another
            account you have with us, to an account with any other financial
            institution, or to a third party or account of a third party
            maintained with us or with any other financial institution. You
            shall ensure sufficient funds on deposit in the Account with us for
            implementation of each Transfer request. We will have no obligation
            to honor any Wire Transfer request which exceeds the balance of your
            immediately collected funds; provided, however, that you shall be
            liable for any amount which we elect to Wire Transfer in excess of
            such balance. You agree that we are authorized to debit the Account
            immediately for the Wire Transfer request, and you further agree
            that we are authorized to charge your Account a service fee for each
            Wire Transfer request you place.
          </p>
          <p className="mb-4">
            Wire Transfers to or from your Account will be governed by the rules
            of the funds transfer system(s) through which the transfers are
            made, including Fedwire, the National Automated Clearing House
            Association, the Electronic Check Clearing House Organization, any
            regional association (each an ACH), the Clearing House Interbank
            Payments System (CHIPS), the Society for Worldwide Interbank
            Financial Telecommunication (“SWIFT”) and the RTP system (“RTP
            System”) and UCC Article 4A. We’re under no obligation to honor, in
            whole or in part, any payment order or other instruction that could
            result in our contravention of applicable law, including, without
            limitation, requirements of the U.S. Department of the Treasury’s
            Office of Foreign Assets Control (“OFAC”) and the Financial Crimes
            Enforcement Network (“FinCEN”). We are under no obligation to follow
            any Wire Transfer request or initiate any Wire Transfer, nor are we
            obligated to follow instructions cancelling or amending any transfer
            request that do not afford us sufficient time to verify the
            authenticity of the instructions.
          </p>
          <p className="mb-4">
            Once we receive a Wire Transfer request, it may not be able to be
            cancelled or amended. However, at our discretion, we may use
            reasonable efforts to act on any request for cancellation or
            amendment, provided that the method by which we are notified of a
            request for cancellation or amendment complies with the Security
            Procedures. However, we shall have no liability if such cancellation
            or amendment is not effected. You agree to indemnify and hold us
            harmless from any and all liabilities, claims, damages, costs and
            expenses we may incur in attempting to cancel or amend the Wire
            Transfer. Any cancellation or amendment of a Wire Transfer by us
            shall relieve us of any obligation to act on the original Wire
            Transfer request.
          </p>
          <p className="mb-4">
            It is your responsibility to ensure that we are provided with
            accurate, clear, and correct Wire Transfer requests and
            instructions, including beneficiary name and account number, in the
            manner and format prescribed by us, and that such Wire Transfer
            requests are given only by you. Further, you acknowledge that a
            failure to comply strictly with such procedures may delay or prevent
            implementation of Wire Transfer request(s) or result in transfers
            from your Account to unintended beneficiaries. You are liable for
            any incorrect, inaccurate or unclear information. If you give us the
            name and account number of a beneficiary, we and other financial
            institutions may process the payment order based on the account
            number alone, even though the number may identify a person other
            than the beneficiary named. Any errors in the information, including
            misidentification of beneficiary(ies), incorrect or inconsistent
            account names and numbers, identifying number of intermediary bank
            or beneficiary bank, and misspellings, are your responsibility. We
            will not be liable if the beneficiary’s financial institution does
            not accept the Wire Transfer or accepts the Wire Transfer and then
            places the funds in a suspense or holding account because of the
            discrepancy. Unless applicable law requires otherwise, we will not
            be liable to you or any other person for any losses resulting from
            the beneficiary’s financial institution accepting and posting any
            Wire Transfer to an incorrect account, whether based on your Wire
            Transfer request or for other reasons unrelated directly to a
            material breach of this Agreement by us. Incorrect, unclear or
            incomplete Wire Transfer requests may delay or prevent the
            processing of your Wire Transfer request or may result in transfers
            from your Account to unintended beneficiaries. If a Wire Transfer
            request does not designate the beneficiary’s financial institution,
            we may, in our discretion (i) accept the Wire Transfer request and
            make payment to any financial institution at which we have reason to
            believe the beneficiary maintains an account, or (ii) not accept the
            Wire Transfer request and seek further direction from you. In either
            of the foregoing situations, unless applicable law requires
            otherwise, we will not be liable for losses resulting from your
            failure to properly identify the financial institution where the
            beneficiary maintains an account. If a Wire Transfer request does
            not specify routing instructions, you will be deemed to have
            instructed us to send the wire through such correspondents as we
            determine in our sole discretion. You acknowledge that any
            administrative messages or comments conveyed with any Wire Transfer
            request shall be for its own internal reference and shall not be
            binding on us or alter the pertinent details of the Wire Transfer
            request. Unless otherwise required by applicable law, we are not
            required to accept Wire Transfer requests from you or any person
            acting or purporting to act on your behalf in a representative or
            fiduciary capacity, and we may refuse to accept any Wire Transfer
            requests in our sole and absolute discretion. We may also reject any
            incoming wire transfer. If we determine, in our sole discretion, not
            to honor, execute or accept a Wire Transfer request, we are under no
            obligation to inform you and shall not be liable for any failure to
            inform you. A Wire Transfer request is considered accepted by us
            when we execute it.
          </p>
          <ul classname="mb-4 list-disc">
            <li>
              Cut-Off Times. Wire Transfer requests for domestic and
              international Wire Transfers must be received and verified by 2:00
              PM CST for domestic Wire Transfers and 11:00 AM CST for
              international Wire Transfers (collectively, the “Cut-Off
              Time(s)”). We may treat any transfer request received at or after
              our Cut-Off Time as if it were received that business day or we
              may treat it as if it were received at the opening of the next
              business day. We are not required to make a Wire Transfer on the
              day a transfer request is received, unless the properly completed
              transfer request is received within a reasonable time before any
              Cut-Off Time we have established. We may use any means and routes
              that we, in our sole discretion, consider suitable for the
              transmission of funds, and we may make use of correspondents,
              agents, subagents and funds transfer and communication systems.
              Such third parties shall be deemed your agents and we shall not be
              liable for any errors, delay, mis-delivery, or failure of delivery
              by any of them unless applicable law says otherwise. We are not
              responsible for delays or mistakes caused by other parties through
              whom we transmit funds.
            </li>
            <li>
              International and Domestic Wire Transfers. Wire Transfers may be
              either domestic or international, provided, however, international
              Wire Transfers may not be sent by us through or into any country
              in violation of U.S. laws. All international Wire Transfers will
              be routed by us through one of our correspondent financial
              institutions. Domestic Wire Transfers will settle only in U.S.
              Dollars, and international Wire Transfers may be in a foreign
              currency if accepted at our discretion. Such international Wire
              Transfer may be converted to the currency of the destination
              country at a rate of currency exchange established by
              correspondent financial institution or the beneficiary financial
              institution. Even if you tell us that you want the Wire Transfer
              sent in U.S. dollars, we cannot guarantee that the beneficiary
              institution will receive the funds in U.S. currency or will not
              convert the Wire Transfer into another currency. The actual amount
              that the beneficiary/designated recipient receives may be reduced
              by fees and taxes imposed by the beneficiary bank, or a
              correspondent bank, including currency conversion charges.
            </li>
            <li>
              Tax Payment Wire Transfer Request. Any Wire Transfer request which
              seeks to make payment of a tax obligation (the “Tax Wire
              Transfer”) must be submitted to us with the applicable
              documentation and the completed IRS taxpayer worksheet (where
              applicable) in compliance with our instructions and procedures and
              the terms of this Agreement. You acknowledge and understand that
              any Tax Wire Transfer may require additional time for processing
              and may require you to provide clarification and additional
              supporting documentation before the Tax Wire Transfer may be
              processed. You agree that you will submit any Tax Wire Transfer
              request in sufficient time in advance of your tax payment due
              date. We shall not be liable for any errors, delay or failure of
              delivery of your IRS payment if the Tax Wire Transfer was not
              submitted by you with ample time for processing of the Tax Wire
              Transfer request.
            </li>
            <li>
              Wire Transfers to a Beneficiary Bank. After the funds that are
              transferred to the beneficiary bank, the funds become the property
              of the beneficiary bank. The beneficiary bank is responsible to
              locate, identify, and make payment to your beneficiary. If your
              beneficiary cannot be properly identified, the funds may be
              returned.
            </li>
            <li>
              Rejected, Revoked, Cancelled or Returned Wire Transfer Requests.
              You acknowledge that Wire Transfer requests which are not made in
              the precise format prescribed in procedures provided to you by us
              may be released for transmission to the clearing agent, even
              though such transfer requests may be rejected by the clearing
              agent due to your failure to comply with format requirements or
              for other reasons. We cannot revoke or cancel a transfer request
              once it has been transmitted by you and we will not be liable to
              you if we cannot recover any funds already transferred. You agree
              that if the transfer request is returned for any reason, you will
              accept as repayment in full, the dollar amount of the transfer
              request, less appropriate fees.
            </li>
            <li>
              Delays or Non-Execution of Wire Transfer Requests. While we will
              handle your transfer requests as expeditiously as commercially
              reasonable, you agree that Bank will not be responsible for any
              delay, failure to execute, or mis‐execution of your Wire Transfer
              request due to circumstances beyond our reasonable control,
              including without limitation for the insolvency, neglect,
              misconduct, mistake, default, any inaccuracy, interruption, delay,
              or failure in the means of transmission, whether caused by
              strikes, power failure, equipment malfunctions, or acts or
              omissions of any bank, entity, or person whether or not that other
              bank, entity or person is our agent. WE MAKE NO WARRANTIES,
              EXPRESS OR IMPLIED, INCLUDING AS TO THE FAILURE OF ANY
              INTERMEDIARY BANK OR BENEFICIARY BANK TO CREDIT YOUR BENEFICIARY
              WITH THE AMOUNT OF THE WIRE TRANSFER AFTER RECEIPT OF SAME WITH
              RESPECT TO ANY MATTER. We reserve the right to delay or not to
              process Wire Transfer requests if we believe such Wire Transfer
              (a) relates to any internet gambling transactions or any illegal
              transactions; (b) relates to one or more beneficiaries listed on
              the Specially Designated National lists from the U.S. Department
              of Treasury; or (c) may violate any Executive Order of the
              President, Foreign Governmental Embargoes/Sanctions, directive of
              the U.S. Department of the Treasury or law.
            </li>
            <li>
              We may disclose any information given to us that we, in our sole
              discretion, determine is necessary or desirable to disclose;
              except we will only disclose confidential information if required
              by law, a court, or legal, regulatory, or governmental authority,
              or as permitted by law in order to combat, prevent, or investigate
              issues arising under anti-money laundering laws, economic
              sanctions, or criminal law. Sometimes legal, regulatory, or
              governmental authorities require additional information, either in
              respect of individuals, entities, or particular transactions. You
              agree to promptly supply all such information, which any such
              authority may require, and/or which we may be required to supply,
              in relation to the individual, entity, or particular transaction.
              If you, or your authorized representative, breach any such laws or
              regulations, you irrevocably agree that we may retain any monies
              or funds transmitted to us pursuant to this Agreement and/or not
              fulfill any Wire Transfer request if we are required to take or
              refrain from such action by any legal, regulatory, or governmental
              authority or if we reasonably believe that such action may violate
              any laws or regulations described herein, and such monies shall
              not bear interest against us. You further agree that we may pay
              such monies to the appropriate legal, regulatory, or governmental
              authority, if and when required by law.
            </li>
            <li>
              If we receive an incoming international wire transfer for payment
              into your Account that was remitted in a currency other than U.S.
              dollars, we will convert the amount of the payment into U.S.
              dollars using the applicable exchange rate for credit to your
              Account. The exchange rates we use for your transactions are not
              necessarily the bank-to-bank negotiated exchange rate or other
              potentially more favorable rate. You consent to our doing this
              without prior notice to you. FDIC deposit insurance does not
              insure against any loss due to foreign currency fluctuations. If
              for any reason we do not receive covering payment from the
              remitting or intermediary bank in respect of an incoming
              international Wire Transfer we have credited to your Account, you
              agree to allow us to debit your Account for the amount credited
              under such incoming international Wire Transfer. Wire Transfers
              sent to foreign countries may be converted to the currency of the
              destination country at our rate of currency exchange for
              remittance transfers. We cannot guarantee that the
              beneficiary/designated recipient will receive the funds in U.S.
              currency. The actual amount that the beneficiary/designated
              recipient receives may be reduced by fees and taxes imposed by the
              beneficiary bank, or a correspondent bank, including currency
              conversion charges.
            </li>
          </ul>
          <p className="mb-4">VIII. DEPOSIT AVAILABILITY.</p>
          <p className="mb-4">
            When a deposit is made to your Account, the funds may not be
            available immediately. This Section VIII (Deposit Availability
            Disclosure) describes when funds will be made available to you.
          </p>
          <p className="mb-4">
            A. <strong>Delays</strong>. We may delay the availability of funds
            from certain types of deposits to your Account. There are exceptions
            that may apply in certain circumstances (e.g., if you have overdrawn
            your Account repeatedly in the last six months or there is an
            emergency). During the delay, you may not withdraw funds and may not
            use the funds. We will notify you if we delay the availability of
            your funds if required by law, and we will tell you when you can
            expect your funds to be available if required by law.
          </p>
          <p className="mb-4">
            B. <strong>Deposits</strong>. Any transaction that you conduct on
            Saturday, Sunday, a federal holiday, or other days on which we are
            closed will be handled the following business day. If we receive a
            deposit before 4:00 PM MT on a business day, we will consider that
            business day to be the day of your deposit. However, if we receive a
            deposit after 4:00 PM MT or on a non -business day, we will consider
            the deposit as having been made the next business day. Deposits may
            only be made by EFT, which includes direct deposits and ATM
            Transfers.
          </p>
          <p className="mb-4">
            C. <strong>Special Rules for New Accounts</strong>. If you are a new
            customer, the following special rules will appl during the first 30
            days your account is open. Funds from electronic direct deposits to
            your Account will be available on the day we receive the deposit.
            Funds from deposits of cash, wire transfers, and, if made available,
            the first $5,000 of a day's total deposits of cashier's, certified,
            teller's, traveler's, and federal, state and local government checks
            will be available on the same business day we receive your deposit
            if the deposit meets certain conditions. For example, the checks
            must be payable to you (and you may have to use a special deposit
            slip). The excess over $5,000 will be available on the ninth
            business day after the day of your deposit. If your deposit of these
            checks (other than a U.S. Treasury check) is not made in person to
            one of our associates, the first $5,000 may not be available until
            the second business day after the day of your deposit. Funds from
            all other check deposits may not be available until the second
            business day after the day of your deposit.
          </p>
          <p className="mb-4">
            D. <strong>Availability of ACH Transfer and EFT Deposits</strong>.
            Funds from ACH Transfers or EFTs that you initiate through another
            bank will generally be available on the next business day after the
            day the ACH Transfer or EFT is deemed to be received by us. An ACH
            Transfer or EFT debit to a Linked Account or any other external
            account that we originate on your behalf will generally be made
            available on the third business day after the date the ACH Transfer
            or EFT is deemed to be received and processed by us. Once they are
            available, you can us e the funds for EFTs and ACH Transfers. Even
            after we have made funds available to you and you have withdrawn the
            funds, you remain responsible if any deposit to your Account is
            returned, rejected, or otherwise uncollected by the Bank.{" "}
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
