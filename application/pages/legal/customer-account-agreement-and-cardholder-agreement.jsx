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
        <title>Oval: Customer Account Agreement and Cardholder Agreement</title>
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
        <Legal active="customer-account-agreement-and-cardholder-agreement" />
          <h3 className="mb-4 text-center">
            Customer Account Agreement and Cardholder Agreement
          </h3>
          <h3 className="mb-4">I. INTRODUCTION.</h3>
          <p className="mb-4">
            This document, as amended or supplemented by the attached
            disclosures (collectively, this “Agreement”), contains the general
            terms, conditions and disclosures for the Evolve Bank & Trust
            transaction account (the “Account”) and any Card (as defined below)
            provided in connection with the Account and conffiliates may offer
            you additional services through its Service Provider Platform,
            pursuant and subject to the terms and conditions between you and the
            Service Provider (the “Services” and such terms and conditions, the
            “Service Provider Terms”), and such Services are not governed by
            this Agreement and not offered by Bank. Please see Section II (The
            Account) for additional information.stitutes an agreement between
            the Bank (as defined below) and you. For purpose of this Agreement,
            the term “Account” may also collectively include Sub-Deposit
            Accounts of such Account.
          </p>
          <p className="mb-4">
            References to the “Bank,” “we,” “us,” or “our” means Evolve Bank &
            Trust, our successors, affiliates, and assignees. References to
            “you” and “your” means you and any person that holds, whether
            individually, jointly or on behalf of another person, the Account
            and any person or persons who have received the Card and who are
            authorized to use the Card. This Agreement may be supplemented or
            amended as set forth in Section V(D) (Changes in Terms). Bank
            services and access and use of your Account may be provided to you
            through the website and/or smart phone application of our service
            provider, Solid Financial Technologies, Inc., at{" "}
            <a href="www.solidfi.com">www.solidfi.com</a> (the “Service
            Provider,” and its website and smart phone application, the “Service
            Provider Platform”). The Service Provider or its affiliates
          </p>
          <p className="mb-4">
            By opening or continuing to maintain an Account with us or by
            accepting or using the Card, you agree to be bound by this
            Agreement, and all applicable agreements, disclosures, and other
            documents, as well as by all applicable federal or state laws,
            statutes and regulations. Please keep a copy of this Agreement.
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
          <h3 className="mb-4">II. The Account.</h3>
          <div className="ml-8">
            <p className="mb-4">
              A. <strong>Availability</strong>. The Account and Card are
              available to United States citizens or lawful permanent residents
              with a U.S. physical address or with military addresses (APO or
              FPO) who are at least 18 years old with a valid Social Security
              Number or Tax Identification Number. To open an Account or be
              issued a Card, you must provide any information we may request
              from time to time. Each owner of an Account and/or Card shall have
              a continuing obligation to provide any other documentation we may
              request from time to time, including any information required
              under our customer identification program to establish your
              identity.
            </p>
            <p className="mb-4">
              You must also agree to go paperless. This means that: (1) you must
              keep us supplied with your valid email address and telephone
              number; and (2) you must agree to accept electronic delivery of
              all communications that we need or decide to send you. Please see
              the Evolve Bank & Trust Electronic Communication Consent for
              additional details.
            </p>
            <p className="mb-4">
              B. <strong>Account Type and Ownership</strong>. The Account is a
              transaction account and the Card is a payment access device to
              your Account that allows you to make certain purchases and
              payments and transfers to third parties. The Account may not be
              opened as a joint account. You cannot give a security interest or
              pledge your Account to someone other than us without first getting
              our express written consent. We are not required to give consent
              to a security interest or pledge to someone else. Unless we agree
              in a separate writing otherwise a security interest or pledge to
              someone else must be satisfied or released before any right to
              withdraw from the account can be exercised. You must immediately
              report to us any changes in Account ownership information that you
              originally provided to us in connection with the submission of
              your application for an Account.
            </p>
            <p className="mb-4">
              C. <strong>Opening an Account</strong>. To open an Account and
              request a Card, you must submit to us an application and all
              information that we may require. To help the government fight the
              funding of terrorism and money laundering activities, Federal law
              requires us to obtain, verify and record information that
              identifies each person who opens an Account. This means that when
              you open an Account, we will ask for your name, address, date of
              birth, social security number, and other information that will
              allow us to identify you. We may also ask to see other identifying
              documents, such as a driver’s license, taxpayer identification
              number; passport number and country of issuance; alien
              identification card number; or number and country of issuance of
              any other government-issued document evidencing nationality or
              residence and bearing a photograph or similar safeguard. If, for
              any reason, you are unable to provide the information necessary to
              verify your identity, the Account may be blocked or closed, which
              may result in additional fees assessed to the Account.
            </p>
            <p className="mb-4">
              By opening an Account, you agree that we can gather your personal
              information from one or more consumer reporting agencies,
              governmental entities and/or other third parties, including, but
              not limited to, the Service Provider. You also agree that we have
              the right to access follow-up consumer reports while your Account
              is open for maintenance, review or collection purposes.
            </p>
            <p className="mb-4">
              By applying for an Account or Card, you certify that all
              information you have provided to us, including, but not limited
              to, your name, mailing address and residential address (if
              different), social security number (or passport number and country
              of issuance) or other identification documentation, date of birth,
              telephone number and other information provided at our request, is
              true, accurate and complete. If you falsify, misrepresent, or fail
              to provide requested information, we may cancel your Account or
              Card. In addition, funds tied to suspected illicit or illegal
              activity may be subject to internal holds and investigation and
              potentially federal investigation. We reserve the right to
              restrict or delay your access to any such funds, subject to
              applicable law. We may share any of the information collected and
              any results of any investigation with the Service Provider. Please
              see our Privacy Policy for additional details.
            </p>
            <p className="mb-4">
              Your Account will not be considered "opened" until it is funded.
              This means your balance must be at least a penny. Once your
              account is considered “opened,” there is no minimum balance
              required and no maximum balance limit. However, we may, at our
              sole discretion and at any time, require a minimum balance and set
              a maximum balance limit.
            </p>
            <p className="mb-4">
              D. <strong>Service Providers</strong>. You understand that we have
              engaged the Service Provider to perform a number of services for
              you under this Agreement, including, but not limited to, identity
              verification, compliance monitoring, risk mitigation, managing
              your Account and Card and other services we may require. The
              Service Provider, along with its partners and agents, is the
              servicer of your Account and Card. In that capacity, Service
              Provider may act on our behalf, perform our obligations and/or
              enforce our rights under this Agreement. Separate and apart from
              its role as our servicer, the Service Provider may also offer
              Services to you. You agree that you may only access the Account
              through the Service Provider. You may provide us with payment
              instructions and view certain Account information by using the
              Service Provider Platform. Subject to applicable law, you
              understand that any payment instruction or activity performed
              using the Services shall be deemed authorized and valid and Bank
              is under no obligation to investigate the instruction or activity.
            </p>
            <p className="mb-4">
              Separate and apart from its role as our servicer, the Service
              Provider may also offer Services to you. We are neither
              responsible for the provisioning of such Services nor do we make
              any recommendations, representations, warranties or suggestions
              regarding such Services. To the fullest extent permitted by law,
              we will not have any liability in connection with the Services and
              disclaim all warranties, either express or implied or statutory,
              including, but not limited to, any implied warranties of
              merchantability, fitness for a particular purpose and lack of
              viruses related to the Services. Subject to applicable law, in no
              event shall we be liable for any losses or damages related to your
              use of Services.{" "}
            </p>
          </div>
          <h3 className="mb-4">
            III. Using Your Account, Debit Card and Account Disclosures.
          </h3>
          <div className="ml-8">
            <p className="mb-4 font-bold">•Debit Card.</p>
            <div className="ml-8">
              <p className="mb-4">
                General Card Information. In connection with your Account, we
                may (but are not obligated to) issue you a debit card (the
                “Card”) that will automatically link to your Account and be
                funded by your Account. If a Card is made available to you, the
                Card allows you to access funds deposited to your Account by you
                or on your behalf pursuant to the terms of this Agreement. The
                Card is not a credit card, prepaid card or a gift card and may
                not be gifted, sold or transferred. The expiration date of the
                Card is listed on the Card. However, the funds in your Account
                will not expire, regardless of the expiration date listed on
                your Card. The Card will remain the property of the Bank and
                must be surrendered upon demand. The Card is nontransferable,
                and it may be canceled, repossessed, or revoked at any time
                without prior notice, subject to applicable law. We have no
                responsibility for failure of any machine, merchant, financial
                institution or any other party to honor your Card. We may
                decline to authorize a transaction for any reason. We are not
                responsible for any losses you may incur if we do not authorize
                a transaction. You understand that any person may deny
                acceptance of or refuse to accept your Card and we are not
                responsible for such denial or refusal.
              </p>
              <p className="mb-4">
                Not all services or features of your Card described in this
                Agreement are available to all persons or at all locations. Any
                offer of a service or feature of your Card or Account in this
                Agreement will be deemed void where prohibited. Use of the Card
                is also subject to all applicable rules and customs of any
                payment network, clearing house or other association involved in
                transactions in addition to this Agreement. We reserve the right
                to limit, at our sole discretion, the provision of any such
                services under this Agreement to any person or in any location.
                We can waive or delay enforcement of any of their rights under
                this Agreement without losing them.
              </p>
              <p className="mb-4">
                Card Activation. You must activate the Card and complete the
                activation process, including setting a Personal Identification
                Number (“PIN”), before it may be used. You must maintain your
                PIN in confidence and not give it to anyone. You should memorize
                your PIN and not write down your PIN or keep your PIN with your
                Card. If you believe that anyone has gained unauthorized access
                to your PIN, you should advise the Bank and Service Provider
                immediately, following the procedures in Section III(A)(xii)
                (Card Cancellation, Suspension and Limits, Lost or Stolen Card,
                Card Replacement). For reporting errors, please see Section
                VII(G) (Liability for Unauthorized Transfers) below. You may
                need to provide personal information in order for your identity
                to be verified and for completion of the activation process. You
                agree to sign the back of the Card immediately upon receipt.
              </p>
              <p className="mb-4">
                Card Use. Once your Card is active, subject to the limitations
                of this Agreement, you may use your Card, as applicable, to make
                purchases at any merchant that accepts payment using the Card,
                as long as you do not exceed the value available in your Account
                and as no purchase (whether individually or in aggregate)
                exceeds the transaction Limits set forth in Exhibit 2
                (Transaction Limits) or transfer exceeds the limits set forth in
                Section VII(B) (Transfer Limitations). Exhibit 2 is incorporated
                herein by reference. Each time you use the Card, you authorize
                the Bank to reduce the value available in your Account (i.e.,
                debit your Account) by the amount of the transaction and any
                applicable fees. We reserve the right to refuse to make any
                transfer or process any transaction for security, credit,
                legal/regulatory, or other reasons, as we determine in our sole
                discretion. Subject to applicable law, you are responsible for
                all transactions you authorize using the Card, including any
                losses, charges, or penalties incurred as a result. See Section
                VII(G) (Liability for Unauthorized Transfers) below for
                additional information and limitations on your liability. You
                may be charged for your use of the Card at ATMs. There may be
                Fees associated with some of your Card transactions. The Card is
                the property of the Bank, and if your Account is closed or your
                Card privileges are cancelled, you agree to stop using the Card
                and destroy the Card or return the Card to the Bank, upon its
                request.
              </p>
              <p className="mb-4">
                Card and Account Fees. The fees relating to the use (including
                misuse) of your Card and/or Account are set forth in this
                Agreement and the attached Fee Schedule exhibit (Exhibit 1) (the
                “Fees”). Exhibit 1 is incorporated herein by reference. Fees
                incurred pursuant to the terms of this Agreement will be
                withdrawn from your Account and will be assessed even if there
                is no remaining balance in your Account, unless prohibited by
                law.
              </p>
              <p className="mb-4">
                You are responsible for all authorized transactions initiated
                and fees incurred by use of the Card. The Card is solely for
                your use and you may not request an additional card for another
                person, and you may not permit anyone else to use your Card or
                Account, unless approved by us or as set forth in this
                Agreement. Without limiting the foregoing, if you permit another
                person to have access to your Card or Account, this will be
                treated as if you authorized such use and you will be liable for
                all transactions and fees incurred by those persons. You are
                wholly responsible for the use of each Card according to the
                terms of this Agreement, subject to subsection xii (Card
                Cancellation, Suspension and Limits, Lost or Stolen Card, Card
                Replacement) and Section VII(G) (Liability for Unauthorized
                Transactions) below, and applicable laws.
              </p>
              <p className="mb-4">
                ATMs. With your PIN, the Card may be used to obtain cash at any
                Automated Teller Machine (“ATM”) in the U.S.
              </p>
              <p className="mb-4">
                displaying the Visa, MoneyPass, or Maestro acceptance marks,
                subject to your applicable daily cash withdrawal limit set forth
                in Exhibit 2 (Transaction Limits). The Card cannot be used at
                ATMs outside the U.S. without prior notice and approval. Fees
                may apply (see Exhibit 1 for details). ATM owner-operators may
                impose their own fees and lower limits on cash withdrawals. You
                may be charged a fee by the ATM operator even if you do not
                complete a withdrawal. This ATM fee is a third party fee amount
                assessed by the individual ATM operator only and is not assessed
                or controlled by us. This ATM fee amount will be charged to your
                Account. All ATM transactions are treated as cash withdrawal
                transactions and subject to your daily cash withdrawal limit.
                You may use your PIN and Card at any Point of Sale (“POS”)
                device, as permitted by a merchant that bears the MoneyPass or
                Maestro acceptance marks, and subject to your daily purchase
                limit.
              </p>
              <p className="mb-4">
                Foreign Transactions. The Card may be used to conduct
                transactions within the 50 United States, District of Columbia
              </p>
              <p className="mb-4">
                and U.S. Territories (Puerto Rico, Guam, Northern Marianas, the
                U.S. Virgin Islands, and American Samoa). The Card may be used
                to conduct international purchase transactions, including,
                without limitation, transactions conducted on international
                merchant websites or mobile applications accessible within the
                U.S.; provided the merchant accepts the Card. Charges from
                foreign merchants and financial institutions may be made in a
                foreign currency. We will post transactions to your Account in
                U.S. dollars based on the exchange rate on the day we settle the
                transaction, plus any special currency exchange charges that may
                be imposed by us, the Visa network and/or by any third-party
                used to complete the transaction. The exchange rate applied to
                each such transaction is (1) a rate selected by Visa from the
                range of rates available in wholesale currency markets for the
                applicable central processing date, which rate may vary from the
                rate Visa itself receives; or (2) the government-mandated rate
                in effect for the applicable central processing date. Because of
                the special charges and possible differences in exchange rates
                between the time we settle and the time you initiated the
                transaction, the charge for a foreign transaction may be less
                than or greater than the cash advance or purchase at the time it
                was made. Foreign transactions are subject to foreign
                transaction fees, including those set forth in Exhibit 1 and any
                other fees imposed by the payment network and/or any third party
                used to complete the transaction, and will be included in the
                amount charged to your Card or otherwise be debited from your
                Account.
              </p>
              <p className="mb-4">
                Card Not Present Transactions. If you initiate a transaction
                without presenting your Card (such as for a mail order, internet
                or telephone purchase), the legal effect will be the same as if
                you used the Card itself. For security reasons, the amount or
                number of such transactions you may make may be limited.
              </p>
              <p className="mb-4">
                Split Transactions. If you do not have sufficient funds in your
                Account, you can instruct the merchant to charge a part of the
                purchase to the Card and pay the remaining amount with cash or
                another card. These are called “split transactions.” Some
                merchants do not allow cardholders to conduct split
                transactions. Some merchants will only allow you to do a split
                transaction if you pay the remaining amount in cash. If you fail
                to inform the merchant that you would like to complete a split
                transaction before swiping your Card, your Card is likely to be
                declined.
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
                purchase type), until the merchant sends the final payment
                amount of your purchase, or for up to sixty (60) days, even if
                you fail to make the purchase, to the extent permitted by
                applicable law. The merchant controls the timing of both the
                Card authorization and settlement of the transaction. During the
                hold period, you may not have access to the preauthorized amount
                in your Account. We will not be responsible if any transactions
                are not completed because of the hold. If the preauthorization
                request varies from the amount of the actual transaction, the
                actual transaction amount will be debited from your Account,
                even if this results in your Account balance becoming negative.
                You remain responsible for any negative balances in your
                Account. If you use the Card at an automated fuel dispenser
                (“pay at the pump”), the transaction may be preauthorized for an
                amount up to $100.00. If the Card is declined, but you have
                sufficient funds available in your Account for which the Card
                was issued, you should use the Card to pay for the purchase
                inside with the cashier. If you use the Card at a restaurant, a
                hotel, for a car rental purchase, or for similar purchases, the
                transaction may be preauthorized for the purchase amount plus up
                to 20% to ensure there are sufficient funds available to cover
                tips or incidental expenses incurred. You do not have the right
                to stop payment on any purchase or payment transaction
                originated by use of the Card once an authorization is approved.
              </p>
              <p className="mb-4">
                Return of Funds. If you are entitled to a refund for any reason
                for goods or services obtained with the Card, you agree to
                accept credits to your Account for refunds and agree to the
                refund policy of the merchant. Neither the Bank nor Service
                Provider is responsible for the delivery, quality, safety,
                legality or any other aspects of the goods or services you
                purchase from others with the Card. If you have a problem with a
                purchase you made with the Card, or if you have a dispute with
                the merchant, you must handle it directly with the merchant. The
                amounts credited to your Account for refunds are generally made
                available to you within seven (7) days from the date the refund
                transaction occurs.
              </p>
              <p className="mb-4">
                Receipts. You should get or request a receipt at the time you
                make a transaction or obtain cash using your Card. You agree to
                retain your receipts to verify your transactions. You can get a
                receipt at the time you make a withdrawal from one of our ATM
                terminals (if available) using your Card.
              </p>
              <p className="mb-4">
                Card Cancellation, Suspension and Limits, Lost or Stolen Card,
                Card Replacement. We reserve the right, at any time and in our
                sole discretion, to limit your use of the Card, including
                limiting or prohibiting specific types of transactions. We may
                refuse to issue a Card, revoke Card privileges, or cancel your
                Card with or without cause or notice, other than as required by
                applicable law. If you would like to cancel the use of your
                Card, you may do so by calling +1 (888) 610-2324 or the number
                on the back of your Card. You agree not to use or allow others
                to use an expired, revoked, canceled, suspended or otherwise
                invalid Card. The cancellation of Card privileges will not
                otherwise affect your rights and obligations under this
                Agreement.
              </p>
              <p className="mb-4">
                If you believe your Card or PIN has been lost, stolen or
                compromised, immediately call +1 (888) 610-2324 or the number on
                the back of your Card or contact Service Provider by email at
                help@solidfi.com. Please refer to Section VII (Electronic Fund
                Transfers Disclosure) for information on lost or stolen Cards
                and how to limit your liability for unauthorized transactions.
                If you need to replace the Card for any other reason, call +1
                (888) 610-2324 or send an email to help@solidfi.com] to request
                a replacement. You will be required to provide personal
                information which may include the last four digits of your Card
                number, your full name and knowledge of the Card transaction
                history.
              </p>
              <p className="mb-4">
                We may refuse to issue, deactivate, revoke, suspend or cancel
                your Card at any time with or without notice to you, other than
                as required by law. This includes deactivating or canceling your
                Card if it has been lost or stolen to prevent unauthorized
                transactions. You agree not to use your Card once it has been
                deactivated, revoked, suspended or canceled. We may also limit
                your use of the Card, including limiting or prohibiting specific
                types of transactions. If you would like to cancel your Card,
                you may do so at any time by contacting us by emailing Service
                Provider at help@solidfi.com. The cancellation of your Card
                privileges will not otherwise affect your rights and obligations
                under this Agreement.
              </p>
              <p className="mb-4">
                Digital Wallet. You may elect to add your Card to one or more
                digital wallets (“Digital Wallets”) supported by us if we make
                such Digital Wallet services available to you, subject to our
                Digital Wallet terms and conditions. If you add your Card to a
                Digital Wallet supported by us, you are subject to our terms and
                conditions governing the use of your Card in connection with the
                Digital Wallet. You or an authorized user may also be permitted
                to add your Card to a Digital Wallet supported by another
                financial institution or third party, which could be used for
                purchases or other transactions without presenting the Card. Any
                such transactions are covered by this Agreement.
              </p>
            </div>
            <p className="mb-4">
              <strong>Linking Accounts</strong>. You may link your bank account
              at another financial institution (“Linked Account”) to your
              Account in order to transfer funds between your Linked Account and
              your Account. You represent and warrant: (1) that you have the
              right to authorize any and all charges and debits to the Linked
              Account; (2) the Linked Account is held at a depository
              institution located in the U.S.; and (3) you are individually or
              jointly the owner of the Linked Account. You will indemnify and
              hold us harmless from any claims by any person related to the
              Linked Account, including any other owner of the Linked Account.
              You are not permitted to link your Account with a credit, debit,
              gift, or other type of card issued by a third party or another
              bank. You may deposit funds into or withdraw funds from your
              Account by using the Service Provider Platform to initiate an
              Automated Clearing House transfer (“ACH Transfer”) from the Linked
              Account. You may withdraw funds from your Account by using the
              Service Provider Platform to initiate an ACH Transfer from your
              Account and depositing such funds into your Linked Account. The
              external account that you are depositing funds into or withdrawing
              funds from must be at an external bank located in the U.S. We do
              not accept requests made otherwise to initiate ACH Transfers.
              Requests for ACH Transfers to debit the Linked Account that are
              made before 4:00 PM CST on a business day, shall be considered
              received on the business day the request is made. Requests for ACH
              Transfers to debit the Linked Account that are made after 4:00 PM
              CST on a business day or on a non-business day, shall be
              considered received the next business day.
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
          </p>
          <p className="mb-4">
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
            against your Account, without prior written notice to you.
          </p>
          <div className="ml-8">
            <p className="mb-4">
              You may make a deposit into your Account by ACH Transfers or any
              other method we make available to you. You may also arrange for
              recurring deposits, such as direct deposits, to be made
              electronically to your Account.
            </p>
            <p className="mb-4">
              We do not accept deposits by mail, cash, paper check or foreign
              currency deposits. We are not liable for wire transfers that you
              may attempt into your Account or deposits of any kind that you
              mail to us, including if it is lost in transit, lost in the mail,
              or otherwise not received by us. If you attempt to make a deposit
              through a prohibited means, the transaction will be rejected. If
              you mail us a cash deposit, we will send the cash back to you. We
              may but are not obligated to accept checks. If you mail a paper
              check to us, including personal checks, money orders or cashier’s
              checks, we may either apply the check to any negative balance you
              may have on your Account or send the check back to you. We do not
              accept any deposits in foreign currency. Any deposits received in
              foreign currency, whether in the form of cash or check, will be
              sent back to you. We will send all items back to the address we
              have for you on file and we are not liable if you do not receive
              the return mail or cash or items.
            </p>
            <p className="mb-4">
              Subject to the limitations set forth herein, you may only deposit
              with us funds that are immediately available, which under
              applicable law are irreversible and are not subject to any lien,
              claim or encumbrance.
            </p>
            <p className="mb-4">
              F. <strong>Withdrawals</strong>. Except as provided herein and
              subject to Exhibit 2 (Transaction Limits) and Section VII(B)
              (Transfer Limitations), you may make withdrawals from your Account
              up to the available balance in your Account by any means that we
              make available to you. We may refuse a withdrawal request
              exceeding the available funds in your Account even if you make a
              deposit later in the business day after we refuse your withdrawal
              request. If your available balance is not enough to pay a
              transaction you make, we may assess an insufficient or unavailable
              funds fee, regardless of whether we pay the transaction. We may
              allow withdrawals at any time, but reserve the right to require
              seven (7) days written notice of intention to withdraw funds from
              your Account if your Account is a negotiable order of withdrawal
              (NOW) account.
            </p>
            <p className="mb-4">
              You are not permitted to make withdrawals from your Account by
              creating a check drawn on your Account. If you attempt to make any
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
              Subject to the terms set forth in Section II(A) (Debit Card) and
              Exhibit 2 (Transaction Limits), you may also withdraw funds from
              certain ATMs. Other third-party fees may also apply to
              out-of-network ATM transactions. Please refer to Section II(A)
              (Debit Card) and the Fee Schedule for additional information. All
              withdrawals are subject to limitations set forth in Exhibit 2
              (Transaction Limits) and VII(B) (Transfer Limitations).
            </p>
            <p className="mb-4">
              G. <strong>Payment Instructions</strong>. You agree that any
              payment instructions received by us (such as requests to withdraw
              or transfer funds from your Account) through the Service Provider
              Platform or in connection with your username, passphrase, PIN or
              mobile device used to access the Service Provider Platform
              (collectively “Credentials”) will be deemed to be authorized by
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
              issued to you, selected by you, or utilized by you. If any of your
              Credentials become lost or known to another person, you agree to
              notify us immediately so that a replacement may be issued. If you
              believe your Credentials are no longer secure or confidential, or
              that someone has used your Credentials without your permission,
              please contact us immediately by calling +1 (888) 610-2324 or
              notifying us through the Service Provider Platform.
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
            <p className="mb-4">
              H. <strong>Posting Order of Credits and Debits</strong>.
            </p>
            <div className="ml-8">
              <p className="mb-4">
                Posting Orders. This section summarizes how we generally post
                some common transactions to your Account. Posting
              </p>
              <p className="mb-4">
                transactions to your Account impact your Account balance.
                Posting a credit increases your balance, while posting a debit
                or hold reduces your balance. Credits include deposits and
                credits we make. Holds include deposit holds, Card
                authorizations and holds related to withdrawals and EFTs (as
                defined below). Debits include withdrawals, transfers, payments
                from your Account, Card transactions and fees.
              </p>
              <p className="mb-4">
                We use automated systems to process transactions and then to
                post transactions to your Account. When we process multiple
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
                category.
              </p>
              <p className="mb-4">
                First, we start with the balance in your Account at the
                beginning of the business day, subtract holds from your balance,
                and make any adjustments from prior days. Next, we generally add
                available and settled deposits and credits to your balance and
                then subtract debits from your balance based on the debit
                category. We subtract debits in a category from your balance in
                order from the highest to lowest dollar amount, unless specified
                otherwise herein. The first category of debits to be applied
                against your balance are certain Card and ATM transactions
                (e.g., Card transactions and ATM withdrawals and transfers) and
                associated Card fees. The debits within this category are
                subtracted from your balance in date and time order our systems
                receive date and time information. If we make checks available
                to you, this category is applied next against your balance.
                Check posting will be in sequential order based on the check
                number, and for any check for which the number cannot be read,
                from highest to lowest amount following the posting of number
                legible checks. We then subtract from your balance any other
                types of electronic debits in order from the highest to lowest
                dollar amount. These debits generally include Transfers.
                Finally, we subtract from your balance most fees (such as
                monthly maintenance fees, overdraft fees, returned item fees,
                and ATM fees) in order from highest to lowest dollar amount.
                Some fees may show as “processing” until the next day.
              </p>
              <p className="mb-4">
                Changing Posting Orders. You agree that we may determine in our
                discretion the orders in which we post transactions to your
                Account. You agree that we may determine in our discretion the
                categories, the transactions within a category, the order among
                categories and the posting orders within a category. We
                sometimes add or delete categories, change posting orders within
                categories and move transaction types among categories. You
                agree that we may in our discretion make these changes at any
                time without notice to you.
              </p>
              <p className="mb-4">
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
              </p>
              <p className="mb-4">
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
              </p>
              <p className="mb-4">
                Certain Transactions Made After Business Day Ends. During
                processing, we may include in your Account balance some
                transactions that you make after the business day cut-off, but
                before the end of the calendar day. Deposits are made available
                based on Section VIII (Deposit Availability Disclosure). We
                generally subtract from your Account balance the following
                debits, when the transaction occurs after the cutoff time for
                the business day, but during the same calendar day: cash
                withdrawals made at an ATM(s) and any credit-push ACH Transfers
                or EFTs.
              </p>
            </div>
            <p className="mb-4">
              I. <strong>Insurance Coverage</strong>. The Federal Deposit
              Insurance Corporation (“FDIC”) insures deposits according to the
              ownership category in which the funds are insured. Not all
              accounts may be insured. Unless otherwise stated by us or the
              FDIC, the Account is insured by the FDIC up to the standard
              maximum deposit insurance amount per depositor, per FDIC-insured
              bank, and per ownership category (the “Standard Insurance Amount”
              or “SIA”). For purposes of determining the SIA applicable to your
              Account, you need to consider all accounts that you also hold at
              the Bank. To determine SIA applicable to your Account with us and
              for any other FDIC insurance requirements that may apply, please
              visit the FDIC’s website at{" "}
              <a href="http://www.fdic.gov/deposit/deposits">
                www.fdic.gov/deposit/deposits
              </a>{" "}
              or call the FDIC directly at 1-877-ASKFDIC (1-877-275-3342). You
              can also use the FDIC’s Electronic Deposit Insurance Estimator
              (EDIE) at www.fdic.gov/edie HYPERLINK "{" "}
              <a href="http://www.fdic.gov/edie">http://www.fdic.gov/edie</a> ".
            </p>
            <p className="mb-4">
              J.{" "}
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
            <p className="mb-4">
              K. <strong>Statements</strong>. We will deliver or make available
              to you periodic statements for your Account as required by law.
              You will receive a statement as long as you have a transaction on
              your Account during the Statement period, and if there were no
              transactions on your Account, we will provide you a statement at
              least quarterly. The Account statement will describe payments or
              transfers made in connection with your Account. You agree to
              notify us promptly if you do not receive your statement by the
              date you normally would expect to receive it. You will receive an
              electronic statement (not paper), and you agree that the statement
              has been delivered or made available to you in a reasonable
              manner.
            </p>
            <p className="mb-4">
              L. <strong>Sub-Deposit Accounts</strong>. We will, from time to
              time, place your funds provided to us in a Sub-Deposit Account. 
              You hereby direct Bank, as agent for you and at your written
              direction (as set forth herein), to open and maintain in Bank’s
              Trust Department and/or with other financial institutions (each,
              an “Insured Depository Institution” and collectively, “Insured
              Depository Institutions”) a deposit account or omnibus custody
              account (individually and collectively, “Sub-Deposit Account”) in
              the name of Bank (for your benefit), and to deposit in the
              Sub-Deposit Account from time to time (at Bank’s discretion) all
              or some moneys you may deliver to Bank from time to time for
              credit to the Account.  The owner of the Sub-Deposit Account is
              Bank as agent and custodian for you and ownership will be
              evidenced by a book entry in records maintained by us. You
              authorize us to act as your agent with respect to establishing,
              maintaining and administering the Sub-Deposit Account, and you
              authorize us to take any action necessary to establish, maintain
              and administer the Sub-Deposit Account and to initiate transfers
              to and from your Sub-Deposit Account and Account as we may
              determine in our sole discretion. Bank, in its sole discretion,
              may divide the funds deposited into the Account into one or more
              separate Sub-Deposit Account to be managed by Bank. As your agent,
              Bank will determine the amount of funds to deposit in and withdraw
              from each Sub-Deposit Account, subject to the terms herein. You
              consent to the assets deposited in the Sub-Deposit Account with
              the Bank’s Trust Department being considered trust assets of the
              Trust Department. No evidence of ownership related to the
              Sub-Account will be issued to you, and you will not receive any
              written confirmation of the establishment of the Sub-Deposit
              Account or transfer of funds to or from the Sub-Deposit Account.
              All deposits to your Sub-Deposit Account and withdrawals from the
              Sub-Deposit Account necessary to satisfy any debits to or
              withdrawals from your Account will be made by us, as your agent.
              The depositing of your funds into the Sub-Deposit Account will not
              increase your FDIC deposit insurance coverage. You authorize us to
              execute and deliver or file on your behalf all appropriate
              receipts, agreements, releases and other instruments, including
              whatever agreements may be required to establish and maintain the
              Sub-Deposit Account or to establish your ownership interest in the
              Sub-Deposit Account. Notwithstanding anything to the contrary, you
              acknowledge and agree that the funds deposited in your Account and
              transferred to the Sub-Deposit Account may be used by us and/or
              each Insured Depository Institution as a source of funding and for
              investment; provided, however, we will only invest such funds in
              certain securities, equities and debt (e.g., U.S. Treasury Bills,
              U.S. or state issued or guaranteed securities, corporate bonds,
              mutual funds, exchange traded funds, etc.) or any other
              investments or assets permitted by applicable law. For the
              avoidance of doubt and notwithstanding any other provision herein,
              Bank and each Insured Depository Institution intend to (and you
              authorize each such party to) use deposits in the Account and/or
              Sub-Deposit Account each such party holds to fund current and new
              businesses, including lending activities and investments, without
              benefit to you (and for their respective benefit). You acknowledge
              and agree that the Sub-Deposit Account and any investments made by
              us in connection with the Sub-Deposit Account will earn no
              interest or fees for you, and that we may collect any interest,
              investment returns and/or fees in connection with a Sub-Deposit
              Account or any investment contemplated herein for the exclusive
              benefit and account of Bank and/or Insured Depository Institutions
              (if applicable). However, the funds you deposit with us in your
              Account will be made available to you in accordance with this
              Agreement (and regardless of the performance of any of our loans
              or investments, subject to FDIC insurance limitations). You
              further acknowledge and agree the income that we and/or an Insured
              Depository Institution earn through our respective lending and
              investing activities may be greater than the interest earned by
              you pursuant to the Account Agreement (if any), that we and
              Insured Depository Institutions may also receive other financial
              benefits in connection with the funds in your Sub-Deposit Account.
              Our placement of funds in the Sub-Deposit Account may reflect
              considerations of federal and state law, our funding needs and
              funding needs of Insured Depository Institutions, general economic
              conditions or other factors determined by us in our sole
              discretion. We may place funds to enhance our business objectives
              and for balance sheet management purposes without any benefit to
              you. We are under no obligation to place your funds with an
              Insured Depository Institution. Subject to applicable law, your
              only rights with respect to the Sub-Deposit Account are to demand
              we repay you all amounts in your Account that were deposited with
              us, including those transferred to the Sub-Deposit Account from
              your Account. The Sub-Deposit Account may not be transferred to
              another institution, except by us or the Insured Depository
              Institution. You may terminate our role as your agent hereunder by
              providing us with thirty (30) days’ prior written notice, such
              notice to be sent to 2955 Campus Drive #110, San Mateo, CA 94403.
              Any termination will result in a return of funds in accordance
              with law and closing of your Account and any Sub-Deposit Account
              opened specifically for you. Each Sub-Deposit Account at each
              Insured Depository Institution constitutes an obligation of the
              Insured Depository Institution and is not directly or indirectly
              an obligation of Bank. You can obtain publicly available financial
              information concerning each Insured Depository Institution at{" "}
              <a href="www.ffiec.gov/nicpubweb/nicweb/nichome.aspx">
                www.ffiec.gov/nicpubweb/nicweb/nichome.aspx
              </a>{" "}
              or by contacting the FDIC Public Information Center by mail at
              3501 North Fairfax Drive, Arlington, VA 22226, or by phone at
              1-877-275-3342. We do not guarantee in any way the financial
              condition of an Insured Depository Institution or the accuracy of
              any publicly available financial information concerning an Insured
              Depository Institution. We may provide your name, tax
              identification number and other pertinent identifying information
              to Insured Depository Institution, and other parties providing
              services in connection with the placement of your funds and the
              establishing and holding the Sub-Deposit Account. Although there
              are two or more accounts associated with your funds (the Account
              and the Sub-Deposit Account), your Account is treated as a single
              account for reporting deposits and withdrawals, as well as for tax
              reporting, balance requirement, service charge, and monthly
              statement (which will reflect the total balance in your Account
              and each Sub-Deposit Account, excluding any interest or amounts
              owed or belonging to us or any Insured Depository Institution).
              The existence of the Sub-Deposit Account will not change the
              manner in which you use, obtain information about or earn interest
              (if any) on your Account. Transfers to and from the Sub-Deposit
              Account will not appear on your monthly statement. We are
              responsible for the accuracy of your Account statements, not the
              Insured Depository Institutions.{" "}
            </p>
          </div>

          <p className="mb-4">
            M. <strong>Interest and Interest Rate</strong>. Your Account is not
            an interest-bearing account.
          </p>
          <p className="mb-4">
            N. <strong>Prohibitions</strong>. The Account and Card are only
            available for personal, family or household purposes and not for
            business purposes. You are not entitled to open an Account or
            receive or access the Card under this Agreement if you are a
            corporation, unincorporated business association, partnership,
            limited liability company, incorporated nonprofit organization, sole
            proprietorship or any other entity. We reserve the right to close
            your Account and/or Card if we determine that it is used for any
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
            transaction or a high-risk transaction. To the fullest extent
            permitted by law, you agree to pay for any transaction that you
            authorized, even if the transaction is determined to be illegal or
            associated with an illegal activity. We reserve the right to cancel,
            close or restrict use of the Card and Account, including by refusing
            the processing of any transaction, if we believe you have violated
            this Agreement or any applicable law.
          </p>
          <p className="mb-4">
            O. <strong>Account Fees; Fee Schedule</strong>. You agree to pay all
            fees and charges applicable to your Account and Card, which will be
            automatically deducted from your Account and may result in your
            Account being overdrawn. The amounts of these fees and charges are
            listed in our Fee Schedule, attached as Exhibit 1 (“Fee Schedule”).
            Fees and our Fee Schedule are subject to change at any time and
            without notice to you, unless required by law. Fees set forth in the
            Fee Schedule are charged by Bank for its services. Service Provider
            may charge you fees separate and apart from the Fees set forth in
            the Fee Schedule for its Services, pursuant to the Service Provider
            Terms. Bank is not responsible for any fees charged by Service
            Provider for its Services. If you request a service that is not
            included in the Fee Schedule and there is a fee for such service,
            such fee will be disclosed at the time you request the service and
            you agree that any such fee may be deducted from your Account.
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
            Q. <strong>Power of Attorney/Agents</strong>. Subject to applicable
            law, we may allow you to give another person (known as an
            “attorney-in-fact”) power of attorney to act on your behalf for your
            Account; provided, we are not obligated to honor such power of
            attorney until you first obtain our written approval. Email us at
            help@solidfi.com for approval if you plan to create a power of
            attorney. Unless we approve of your power of attorney in writing, we
            are not required to honor orders and instructions concerning your
            Account by an attorney in fact for any Account owner, or by a
            personal representative, guardian, conservator, or custodian of an
            account owner. If we approve your appointment of an attorney in
            fact, we will honor orders and instructions from your
            attorney-in-fact until the earlier of (1) our receipt from you
            revoking such power of attorney and our written acknowledgement; (2)
            our receipt of notice that you or your attorney-in-fact have died or
            become incapacitated; or (3) our termination of the acceptance of
            the power of attorney. We have no duty to monitor or ensure that the
            acts of your attorney in fact are for your use or benefit or are
            otherwise permissible under applicable law. We will not be liable if
            your attorney in fact exceeds his or her powers or does not comply
            with your instructions or applicable law. We may terminate
            acceptance of a power of attorney at any time and for any reason and
            without notice to you. You agree to hold us harmless from and
            against any actions we take based upon the instructions of your
            attorney in fact or that your attorney in fact takes regarding your
            Account.
          </p>
          <p className="mb-4">
            R. <strong>Death, Incapacity or Termination</strong>. You agree to
            notify us immediately if an Account owner on your Account or if you,
            through a representative, dies or is declared legally incompetent.
            In the case of an individual Account, if we have reason to believe
            the Account owner has died or has been declared legally incompetent,
            we may place a hold on the Account to retain funds and refuse all
            transactions until we know and have verified the identity of the
            successor. Until we receive notice and any required proof of death
            or incapacitation, we may continue to accept deposits and process
            transactions to your Account. If you die while residing outside the
            United States, we may require a personal representative to be
            appointed by a court in a United States jurisdiction. Until we
            receive notice and any required proof of death or incompetence, we
            may act as if all owners are alive and competent. In the event we
            receive written notice from a personal representative, executor,
            administrator, conservator or guardian purporting to represent you
            or your estate, we shall be entitled to rely on all information
            supplied and representations made in such written notice to the full
            extent permitted by applicable law. If certain payments originating
            from government entities are deposited into your Account after your
            death, we may be required to return those payments to the originator
            upon notice. If we have any tax liability because of paying your
            balance to your estate, the estate will be responsible for repaying
            us the amount of that tax. If you owe us a debt at the time of your
            death, we are authorized to exercise our right of setoff (our right
            to apply funds in one account to the debt associated with another
            account) or security interest rights against the funds credited to
            your balance after your death. You agree to hold us harmless for any
            actions we take based on our belief that you have died or become
            incapacitated, or any notices of death or incapacitation that we
            receive.
          </p>
          <p className="mb-4">
            S. <strong>Monitoring and Closing Your Account</strong>. Subject to
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
            to Account closing.
          </p>
          <p className="mb-4">
            We reserve the right to monitor all Account activity for
            inappropriate use. We may also suspend or close your Account or
            suspend or terminate your Card at our discretion and for any reason
            with or without notice. This includes if we believe you are using
            your Account or Card for fraudulent or illegal purposes or in
            violation of law or regulation, this Agreement, any other agreement
            you may have with us or Service Provider, or if you otherwise
            present undue risk to us or Service Provider. We are not responsible
            to you for any damages you may suffer as a result of the closure or
            suspension of your Account. If we close your Account, all collected
            funds (less any amounts due to us or for debits in process) will be
            transferred to your Linked Account. Alternatively, we may, at our
            discretion, mail you a check for the available balance in your
            Account. Written notice that the Account has been closed, to the
            extent required by law, and a check, if any, will be sent to any
            address shown on our records for you, or if the Account is a jointly
            owned, to any account owner to whom we elect to send it, or the
            email address we have on file for the Account. Once we have closed
            your Account, you agree that we can assess any service charge
            otherwise applicable against any remaining balance in your Account.
            We are not responsible to you for any damages you may suffer as a
            result of your Account being closed. If you attempt to make a
            deposit to an Account we closed, we may collect the deposit and
            set-off your indebtedness to us. We reserve the right not to return
            funds to you if your account balance is less than $5.00. The closure
            of your Account or termination of this Agreement does not impact any
            right or obligation that arose prior to closure or termination, or
            any right or obligation that, by its nature, should survive
            termination (including, but not limited to, any indemnification
            obligation by you, our limitations of liability, and any terms
            governing arbitration).
          </p>
          <p className="mb-4">
            T. <strong>Dormancy and Unclaimed Property</strong>.
          </p>
          <p className="mb-4">
            State laws (called "escheat" or unclaimed property laws) require us
            to close your Account and transfer your money to the state if your
            Account is dormant for a period of time as defined by your state of
            residence. State and federal law and our policy govern when your
            Account is considered dormant. Your Account is usually considered
            dormant if you have not accessed your Account, communicated to us
            about your Account or otherwise shown an interest in your Account
            within the period of time specified under applicable law. Each state
            has varying laws as to when an account is subject to escheatment and
            we may be required to send the balance in your Account to the state
            of your last known address or, if not in the U.S., the state in
            which we reside. We will make all reasonable efforts to contact you
            if required by applicable law before transferring the remaining
            balance of your Account to the applicable state. After we surrender
            the funds to the state, we have no further liability to you for
            those funds and you must apply to the appropriate state agency to
            reclaim your funds. You can avoid the transfer of your money to the
            state simply by signing into your Account, transacting periodically,
            or contacting us, or replying to any abandoned property
            correspondence. If your Account becomes dormant, you may no longer
            receive statements, but you can still view your accounts online.
          </p>
          <h3 className="mb-4">IV. Arbitration and Waivers.</h3>
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
            exist, or may arise in the future.
          </p>
          <p className="mb-4">
            Judgment upon the arbitrator’s award may be entered by any court
            having jurisdiction. The arbitrator’s decision is final and binding,
            except for any right of appeal provided by the Federal Arbitration
            Act (Title 9 of the United States Code) (“FAA”). However, if the
            amount of the claim exceeds $25,000 or involves a request for
            injunctive or declaratory relief that could foreseeably involve a
            cost or benefit to either party exceeding $25,000, any party can,
            within thirty (30) days after the entry of the award by the
            arbitrator, appeal the award to a three-arbitrator panel
            administered by the forum. The panel shall reconsider anew all
            factual and legal issues, following the same rules of procedure and
            decide by majority vote. Reference in this Section IV (Arbitration
            and Waivers) to “the arbitrator” shall mean the panel if an appeal
            of the arbitrator’s decision has been taken.
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
            <a href="http://www.adr.org">www.adr.org</a>. In the event that JAMS
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
          <h3 className="mb-4">V. Miscellaneous Terms.</h3>
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
            B. <strong>Governing Law, Forum and Time Limits</strong>.
          </p>
          <div className="ml-8">
            <p className="mb-4">
              All Accounts are opened at the Tennessee branch office of the
              Bank. All actions relating to your Account, including this
              Agreement and issuance of a Card, will be governed by the laws and
              regulations of the United States and the State of Tennessee (to
              the extent that laws of the State of Tennessee are not preempted
              by Federal law). Federal and the laws of the State of Tennessee
              shall be applied without giving effect to principles of conflicts
              of law.
            </p>
            <p className="mb-4">
              To the extent any dispute arising under this Agreement or relating
              in any way to your Account, Card or your relationship with us is
              not arbitrated, you consent to the jurisdiction of, and agree that
              such dispute will be resolved by the Federal or state court
              located in Shelby County, Tennessee.
            </p>
            <p className="mb-4">
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
            </p>
          </div>
          <p className="mb-4">
            C. <strong>Reporting Information</strong>. We may report information
            about your Account or Card to consumer reporting agencies,
            governmental agencies, and/or third-party data services. Defaults on
            your Account may be reflected in your consumer report.
          </p>
          <p className="mb-4">
            D. <strong>Changes in Terms</strong>. The terms and conditions of
            this Agreement, including any fees, and features of your Account or
            Card may be amended or revised at any time by posting a revised
            version to this webpage. Solid customers host the disclosures for
            their users on their website. The appropriate hyperlink will be
            added when the customer publishes. , and any such revisions or
            changes shall be effective upon posting. We will give you advance
            notice if we are required by applicable law. We may provide such
            notice to you with your statement, electronically, or by mail. Any
            notice we provide to you will be binding and sent to the last
            (postal or electronic) address in our records. We may change your
            address if we receive an address change notice from the U.S. Postal
            Service. We may change or terminate this Agreement without notice at
            our discretion or to comply with any appropriate federal or state
            law or regulation. Subject to the terms of this Agreement, you may
            determine to cease use of or close your Account or Card if you do
            not agree with any change or revision to this Agreement prior to the
            effective date of such revision. Any continued use of your Account
            or Card is presumed your acceptance of and agreement to be bound by
            revisions to this Agreement.{" "}
          </p>
          <p className="mb-4">
            E. <strong>Security Interest.</strong> You grant us a security
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
            F. <strong>No Waiver of Rights</strong>. If we fail to exercise or
            waive a right with respect to your Account or Card on one or more
            occasions, it does not mean we have waived, or are obligated to
            waive, the same right on any other occasion. We may release any
            other person obligated under this Agreement without affecting your
            responsibilities under this Agreement. In any event, no such waiver
            or delay by us is effective unless it is in writing and approved by
            us.
          </p>
          <p className="mb-4">
            G. <strong>Assignment</strong>. Your Account and/or Card is not
            transferable and is not assignable as collateral for a loan or for
            any other purpose. The Bank may transfer or assign its rights under
            this Agreement, including transferring or assigning your Account
            without your consent and without notice, unless required by
            applicable law.
          </p>
          <p className="mb-4">
            H. <strong>Other Services and Conflicts</strong>. If you and Bank
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
            I. <strong>Privacy Policy</strong>. You authorize us to share
            information about you and your Account with our affiliates, the
            Service Provider and third parties, unless applicable law or our
            Privacy Policy prohibits us from doing so. Please see our Privacy
            Notice for your choices about information sharing.
          </p>
          <p className="mb-4">
            J. <strong>Severability</strong>. In the event that any court or
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
            K. <strong>Limitation of Liability</strong>, Disclaimer of Warranty,
            Indemnification and Reimbursements.
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
              REASONABLE CONTROL OF BANK. EXCEPT AS REQUIRED BY LAW, OUR
              LIABILITY TO YOU FOR A CLAIM IS LIMITED TO THE FACE VALUE OF THE
              ITEM OR TRANSACTION, OR THE ACTUAL VALUE OF ANY FUNDS NOT PROPERLY
              CREDITED OR DEBITED. IN NO EVENT WILL WE BE LIABLE FOR ANY
              CONSEQUENTIAL, INDIRECT, SPECIAL, INCIDENTAL, EXEMPLARY, PUNITIVE
              DAMAGES OR DAMAGES OF ANY KIND EVEN IF YOU ADVISE US OF THE
              POSSIBILITY OF SUCH DAMAGES. EXCEPT AS REQUIRED BY LAW AND
              NOTWITHSTANDING ANYTHING TO THE CONTRARY, WE SHALL ONLY BE
              RESPONSIBLE AND LIABLE FOR OUR OWN GROSS NEGLIGENCE OR WILLFUL
              MISCONDUCT IN PERFORMING OUR OBLIGATIONS UNDER THIS AGREEMENT. WE
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
              Agreement; (ii) any action or omission by you; (iii) the matters
              set forth herein; or (iv) our action or inaction in reliance upon
              oral, written or electronic instructions or information from you.
            </p>
            <p className="mb-4">
              Reimbursement for Losses. If we take any action to collect debt
              incurred by you or other amounts you owe us under these Agreement
              or defend ourselves in a lawsuit brought by you where we are the
              prevailing party, you agree to reimburse us for our losses,
              including, without limitation, reasonable attorneys’ fees, to the
              extent permitted by applicable law. We may charge your Account for
              our losses without prior notice to you. This section does not, in
              any case, reduce our liability to you as described in Section VII
              (Electronic Fund Transfers Disclosure).
            </p>
          </div>
          <p className="mb-4">
            L. <strong>Liability for Service Interruptions</strong>. From time
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
            M. <strong>Section Headings and Successors</strong>. The headings in
            this Agreement are only for convenience and do not in any way limit
            or define your or our rights or obligations under this Agreement.
            This Agreement will be binding on your personal representatives,
            executors, administrators, and successors.
          </p>
          <p className="mb-4">
            N. <strong>Change of Address or any Application Information</strong>
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
            O. <strong>Communications</strong>. You acknowledge that data,
            including emails, may be accessed by unauthorized third parties when
            communicated between you and the Bank, using the Internet,
            telephone, or other electronic devices. We are not responsible for
            any misdirected data or disclosures that occur as a result of your
            use of third-party electronic communication channels.
          </p>
          <p className="mb-4">
            P. <strong>Calls and Messages</strong>. You agree that we or our
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
          <p className="mb-4">
            Q. <strong>Survival</strong>. Termination of this Agreement shall
            not impact any right or obligation arising prior to termination, and
            in any event, the parties agree that any right or obligation which,
            by its nature, should survive termination of this Agreement will
            survive any such termination (including, but not limited to Sections
            IV (Arbitration and Waivers) and V (Miscellaneous Terms) of this
            Agreement).
          </p>
          <h3 className="mb-4">VI. Tax Reporting and Backup Withholding.</h3>
          <p className="mb-4">
            Federal law requires us to have a valid Social Security Number or
            Individual Taxpayer Identification Number for each Account owner so
            that we can correctly report the interest you have earned to the
            relevant tax authorities (if your Account is an interest-bearing
            account). Accordingly, you must certify your Social Security Number
            or Individual Taxpayer Identification Number as part of opening a n
            Account. If you do not provide us with and certify a valid Social
            Security Number or Individual Taxpayer Identification Number within
            the time period specified, we are required to withhold a percentage
            of the taxable interest that we pay to you. This withholding is
            commonly referred to as “Backup Withholding.” In some states, we may
            also be required to withhold taxable interest for state taxes.
          </p>
          <h3 className="mb-4">VII. Electronic Fund Transfers Disclosure.</h3>
          <p className="mb-4">
            Your Account and Card allow you to withdraw funds up to the
            available balance or make deposits through electronic fund transfers
            (“EFTs”). EFTs are transactions that are processed by electronic
            means and include, among others, ACH transfers, debit card
            transactions and ATM withdrawals. This Section VII (Electronic Fund
            Transfers Disclosure) provides you with information and important
            disclosures and terms about the EFTs that are permitted on your
            Account or in connection with your Card. You may also receive
            additional services from Service Provider through the Service
            Provider Platform that allow you to initiate EFTs to and from your
            Account that are not described in this Agreement. You will be
            provided separate agreements and disclosures applicable to those
            services from Service Provider.
          </p>
          <p className="mb-4">
            A. <strong> Supported EFTs</strong>. The EFTs that we may support
            are listed below. EFT available to you will depend on the EFTs
            supported by the Service Provider Platform and all the below listed
            EFT services may not be available to you.
          </p>
          <div className="ml-8">
            <p className="mb-4">
              Direct deposits of federal government payroll, disability,
              veteran's benefits, Social Security, and other federal government
              payments that you may receive and that may be deposited to your
              Account and of your paycheck to your Account, provided that your
              employer offers direct deposit and you complete any forms required
              by your employer.
            </p>
            <p className="mb-4">
              Any deposit or withdrawal to your Account that is handled
              electronically as an ACH Transfer.
            </p>
            <p className="mb-4">
              Card transactions at ATMs to withdraw cash, transfer funds and
              find out balances.
            </p>
            <p className="mb-4">
              Card transactions at participating merchants to purchase goods and
              services. Some merchants may also allow you to withdraw cash from
              your Account while making a purchase.
            </p>
            <p className="mb-4">
              Online fund transfers using your Card or the Account routing and
              account number, if available.
            </p>
          </div>
          <p className="mb-4">
            We do not charge for EFTs, but we may add charges at any time by
            providing you with prior notice if required by law. When you use an
            ATM not owned by us, you may be charged a fee by the ATM operator or
            any network used (and you may be charged a fee for a balance inquiry
            even if you do not complete a fund transfer).
          </p>
          <p className="mb-4">
            B. <strong>Transfer Limitations</strong>. All EFTs are subject to
            limits. The transfer limit depends on the EFT type. EFT limits
            include limits on ATM withdrawals, cash advances and PIN or
            signature-based purchases. ACH Transfers to external accounts are
            also subject to limits on the dollar amount of electronic transfers
            between your Account and external accounts at other financial
            institutions, including Linked Accounts. The Account and/or Card may
            be limited based on fraud risk and security of the Account and/or
            Card. All limits described here are designed to be flexible in order
            to protect the security and integrity of the service and accounts,
            including the Account and/or Card, as well as you and all other
            users of the service. These limitations may be based on confidential
            fraud and risk criteria that are essential to our management of risk
            and the protection of you and the integrity of the service and all
            Accounts and may be modified at our sole discretion without advance
            notice. For a description of certain limits, please see Section
            VIII(B) (Transfer Limitations) and Exhibit 2 (Transaction Limits),
            which is incorporated herein by reference. These limits are examples
            and subject to change based on fraud risk and security of the
            Account and/or Card.
          </p>
          <p className="mb-4">
            C. <strong>Preauthorized Credits</strong>. If you have arranged to
            have direct deposits made to your Account at least once every 60
            days from the same person or company including your employer, you
            can call us at +1 (888) 610-2324 to find out whether or not the
            deposit has been made or you can check if the deposit has been made
            by reviewing your transaction history in the Service Provider
            Platform.
          </p>
          <p className="mb-4">
            D. <strong>Periodic Statements</strong>. You will get a monthly
            Account statement (unless there are no transfers in a particular
            month. In any case you will get the statement at least quarterly).
          </p>
          <p className="mb-4">
            E. <strong>Terminal Transfers</strong>. You can get a receipt at the
            time you make any transfer to or from your Account using one of our
            automated teller machines or point-of-sale terminals.
          </p>
          <p className="mb-4">
            F. <strong>Liability for Failure to Make EFTs</strong>. If we do not
            complete a transfer to or from your Account on time or in the
            correct Amount according to our agreement with you, we will be
            liable for damages or losses proximately caused by our failure. All
            such damages and losses for a failure to make a transfer will have
            to be actual proven damages. However, there are some exceptions, and
            we will not be liable for any damages or losses if, for example: (1)
            there are insufficient funds in your Account to complete the
            transaction through no fault of ours; (2) the funds in your Account
            are not yet available for use or withdrawal; (3) the ATM where you
            are making the transfer does not have enough cash; (4) the ATM,
            system, equipment or terminal involved in the transfer is not
            working properly and you know about the improper functioning at the
            time you started the transaction; (5) the funds in your Account are
            subject to a Legal Process or other encumbrance restricting the
            transfer; (6) the circumstances preventing the transfer or the
            failure of the transfer is beyond our control (e.g., power outage,
            an Act of God, fire, natural disaster) even after we have taken
            reasonable precautions; (7) the Account is inactive or dormant; or
            (8) your Card has been revoked due to inactivity or at our
            discretion. There may be additional exceptions stated in our
            agreement with you or permitted by law.
          </p>
          <p className="mb-4">
            G. <strong>Liability for Unauthorized Transfers</strong>.
          </p>
          <p className="mb-4">
            Tell us AT ONCE if you believe your Card or Credentials have been
            lost or stolen, or if you believe that an electronic fund transfer
            has been made without your permission using information from your
            Account. You could lose all the money in your Account. If you tell
            us within two (2) business days after you learn of the loss or theft
            of your Card or Credentials, you can lose no more than $50 if
            someone used your Card or Credentials without your permission. If
            you do NOT tell us within two (2) business days after you learn of
            the loss or theft of your Card or Credentials, and we can prove we
            could have stopped someone from using your Card or Credentials
            without your permission if you had told us, you could lose as much
            as $500.
          </p>
          <p className="mb-4">
            Also, if your statement shows transfers that you did not make, tell
            us at once. If you do not tell us within sixty (60) days after the
            statement was mailed to you or first became available via electronic
            means, you may not get back any money you lost after the sixty (60)
            days if we can prove that we could have stopped someone from taking
            the money if you had told us in time. We can extend these time
            periods if extenuating circumstances (such as a long trip or
            hospital stay) kept you from notifying us.
          </p>
          <p className="mb-4">
            H. <strong> Business Days</strong>. For purposes of these
            disclosures, our business days are (Monday through Friday) (Monday
            through Saturday) (any day including Saturdays and Sundays).
            Holidays are (not) included.
          </p>
          <p className="mb-4">
            I. <strong>Confidentiality</strong>. We will disclose information to
            third parties about your Account, Card, the transfers you make: (1)
            where it is necessary for completing transfers or transactions; (2)
            in order to verify the existence and condition of your Account or
            Card for a third party, such as a credit bureau or merchant; (3) in
            order to comply with government agency or court orders; (4) if you
            give us your written permission; (5) to our and the Bank’s
            employees, auditors, affiliates, service providers, or attorneys as
            need; (6) in order to collect Fees or funds you may owe us; (7) as
            otherwise provided by the Privacy Policy; and (8) to verify your
            identity and determine if we should open an Account for you or issue
            you a Card using services provided to us by third parties.
          </p>
          <p className="mb-4">
            Please refer to our{" "}
            <a href="https://help.solidfi.com/hc/en-us/articles/4405764088987-Evolve-Privacy-Policy">
              Privacy Policy
            </a>{" "}
            for more information about our commitment to you, your privacy
            rights and who we share data and information with. Services offered
            by Service Provider, including the Service Provider Platform, are
            also subject to Service Provider’s Privacy Policy. Please carefully
            review{" "}
            <a href="https://help.solidfi.com/hc/en-us/articles/4405726967195-Solid-Privacy-Policy">
              Service Provider’s Privacy Policy
            </a>
            for more information about Service Provider’s commitment to you,
            your privacy rights and who Service Provider shares data and
            information with.
          </p>
          <p className="mb-4">
            J. <strong>Preauthorized Payments</strong>.
          </p>
          <div className="ml-8">
            <p className="mb-4">
              {" "}
              Right to stop payment and procedure for doing so. If you have told
              us in advance to make regular payments out of your account, you
              can stop any of these payments. Here's how: Call us at +1 (888)
              610-2324, in time for us to receive your request 3 business days
              or more before the payment is scheduled to be made. If you call,
              we may also require you to put your request in writing and get it
              to us within 14 days after you call. (We may charge you for each
              stop-payment order you give, in accordance with our Fee Schedule.)
              .
            </p>
            <p className="mb-4">
              Notice of varying amounts. If these regular payments may vary in
              amount, the person you are going to pay will tell you, 10 days
              before each payment, when it will be made and how much it will be.
              (You may choose instead to get this notice only when the payment
              would differ by more than a certain amount from the previous
              payment, or when the amount would fall outside certain limits that
              you set.)
            </p>
            <p className="mb-4">
              Liability for failure to stop payment of preauthorized transfer.
              If you order us to stop one of these payments 3 business days or
              more before the transfer is scheduled, and we do not do so, we
              will be liable for your losses or damages. To the extent permitted
              by law, our liability for losses or damages may be limited to
              actual damages that you have sustained if the failure to stop
              payment was due to a bona fide error.
            </p>
          </div>
          <p className="mb-4">
            K. <strong>Error Resolution</strong>. In Case of Errors or Questions
            About Your Electronic Transfers Telephone us at +1 (888) 610-2324;
            write us at 2955 Campus Drive #110, San Mateo, CA 94403; or email us
            at help@solidfi.com as soon as you can, if you think your statement
            or receipt is wrong or if you need more information about a transfer
            listed on the statement or receipt. We must hear from you no later
            than 60 days after we sent the FIRST statement on which the problem
            or error appeared.
          </p>
          <p className="mb-4">
            You must provide us with the following information: (1) tell us your
            name and account number (if any); (2) describe the error or the
            transfer you are unsure about, and explain as clearly as you can why
            you believe it is an error or why you need more information; and (3)
            tell us the dollar amount of the suspected error.
          </p>
          <p className="mb-4">
            If you tell us orally, we may require that you send us your
            complaint or question in writing within ten (10) business days. We
            will determine whether an error occurred within ten (10) business
            days after we hear from you and will correct any error promptly. If
            we need more time, however, we may take up to 45 days to investigate
            your complaint or question. If we decide to do this, we will credit
            your Account within 10 business days for the amount you think is in
            error, so that you will have the use of the money during the time it
            takes us to complete our investigation. If we ask you to put your
            complaint or question in writing and we do not receive it within ten
            (10) business days, we may not credit your Account. For errors
            involving new Accounts, point-of-sale, or foreign-initiated
            transactions, we may take up to ninety (90) days to investigate your
            complaint or question. For new Accounts, we may take up to twenty
            (20) business days to credit your Account for the amount you think
            is in error.
          </p>
          <p className="mb-4">
            We will tell you the results within three business days after
            completing our investigation. If we decide that there was no error,
            we will send you a written explanation. You may ask for copies of
            the documents that we used in our investigation. If we credit your
            Account with funds while investigating an error, you must repay
            those funds to us if we conclude that no error has occurred.
          </p>
          <h3 className="mb-4">VIII. Deposit Availability Disclosure.</h3>
          <p className="mb-4">
            When a deposit is made to your Account, the funds may not be
            available immediately. This Section VIII (Deposit Availability
          </p>
          <p className="mb-4">
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
            C. <strong>Availability of ACH Transfer and EFT Deposits</strong>.
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
