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
        <Legal active="oval-account-agreement" />
          <h3 className="mb-4 text-center">Oval Account Agreement</h3>
          <p className="mb-4">Effective September 1, 2021</p>
          <p className="mb-4">
            The following terms and conditions constitute an agreement
            (Agreement) between you and Evolve Bank & Trust governing the use of
            your Oval account. This Agreement also refers to and includes other
            disclosures we may provide to you, which are incorporated by
            reference. As used in this Agreement, Customer, you and your mean
            the owner of the Oval Account, any person responsible for paying
            back all amounts you owe us under this Agreement, and any other
            person you may authorize to use and access your Oval Account
            (Authorized User). The terms we, us, our, Bank and Evolve mean
            Evolve Bank & Trust. By opening or continuing to use a Oval Account,
            you agree to this Agreement. Please keep a copy of this Agreement
            for your records.
          </p>
          <p className="mb-4">
            PLEASE READ THIS AGREEMENT CAREFULLY, AS IT CONTAINS AN ARBITRATION
            AGREEMENT IN SECTION V.C.23 AND OTHER IMPORTANT INFORMATION
            REGARDING YOUR LEGAL RIGHTS, REMEDIES, AND OBLIGATIONS. UNLESS YOU
            ACT PROMPTLY TO REJECT THE ARBITRATION AGREEMENT, IT REQUIRES THAT
            YOU SUBMIT CLAIMS YOU HAVE AGAINST US TO BINDING AND FINAL
            ARBITRATION, AND FURTHER (1) YOU WILL ONLY BE PERMITTED TO PURSUE
            CLAIMS AGAINST US ON AN INDIVIDUAL BASIS, NOT AS A PLAINTIFF OR
            CLASS MEMBER IN ANY CLASS OR REPRESENTATIVE ACTION OR PROCEEDING,
            AND (2) YOU WILL ONLY BE PERMITTED TO SEEK RELIEF (INCLUDING
            MONETARY, INJUNCTIVE, AND DECLARATORY RELIEF) ON AN INDIVIDUAL
            BASIS. IMPORTANTLY, THE ARBITRATION AGREEMENT INCLUDES OPT OUT
            PROVISIONS.
          </p>
          <h3 className="mb-4">
            I.IMPORTANT INFORMATION ABOUT YOUR OVAL ACCOUNT
          </h3>
          <ul className="mb-4 list-disc">
            <li>
              Your Oval Account consists of a Oval deposit account (Deposit
              Account) and an Oval Visa debit card (Oval Card) provided by
              Evolve. Evolve also issues cards or other devices to access your
              Account.
            </li>
            <li>
              Within your Oval Account, you may set up multiple Authorized Users
              to manage their use of your Oval Account. Each Authorized User can
              also be issued an Oval Card, which is associated with Oval
              Account.
            </li>
            <li>
              You and your Authorized User(s) may never spend more than the
              amount you have in your Deposit Account with your Oval Card or
              with transactions on your Deposit Account.
            </li>
            <li>
              You are responsible for all activity conducted on your Oval
              Account by an Authorized User, and all transactions Authorized
              Users make will be treated as if you had made the transaction
              yourself.
            </li>
          </ul>
          <h3 className="mb-4">SECURITY AGREEMENT</h3>
          <p className="mb-4">
            Our Security Interest in Your Deposit Account. You hereby grant to
            us, as of the date you enter into this Agreement, a security
            interest in all right, title and interest in any Deposit Account you
            have with us, and all funds deposited therein, now owned or
            hereinafter acquired (collectively, the Collateral), to secure your
            performance under this Agreement, including your duty to pay us for
            all obligations you owe us under this Agreement, present or
            hereinafter occurring, when payments are due, for every transaction
            made with your Oval Account by you, an Authorized User, or any other
            person that you or an Authorized User permits to use your Oval
            Account (Security Interest).
          </p>
          <p className="mb-4">
            Our Right to Exercise the Security Interest. You irrevocably and
            unconditionally relinquish possession and control over the
            Collateral, and you pledge and assign as security to us all of your
            right, title, and interest in it. You must take any action we
            request to perfect or protect our first lien position Security
            Interest in the Collateral. You waive the benefit of any homestead
            or other exemptions in the Collateral. The Security Interest will be
            governed by Uniform Commercial Code - Article 9 (as adopted by the
            applicable state law) whether Article 9 applies by its terms or not.
            We do not have to give you any prior notice to apply the funds in
            your Deposit Account or other Collateral or its proceeds to satisfy
            your obligations. You expressly agree that our rights under this
            Security Agreement extend to any electronically deposited federal or
            state benefit payments (including Social Security benefits) to the
            extent permitted by law. If you do not want your benefits applied in
            this way, you may change your direct deposit instructions at any
            time with the person or organization paying the benefits. In
            addition, you grant us a right of setoff to your Deposit Account to
            secure all amounts you owe us under this Agreement. This right of
            setoff does not apply to your Deposit Account if prohibited by law.
            You agree to hold us harmless from any claim arising as a result of
            our exercise of our right of setoff or Security Interest.
          </p>
          <p className="mb-4">
            YOU MAY LOSE FUNDS IN YOUR DEPOSIT ACCOUNT. If you are in default of
            any obligation under this Agreement, or your Oval Account is closed
            for any reason, you authorize us to withdraw funds from your Deposit
            Account and apply such amounts to the balance you owe us without
            sending you notice or demand for payment. We may do this in addition
            to the other rights we have under law or this Agreement. The
            application of your funds to the balance you owe under this
            Agreement will not affect your obligation to pay us in full. You are
            responsible for the repayment of all amounts you owe us under this
            Agreement.
          </p>
          <p className="mb-4">
            Legal Proceedings. You represent that (a) there are no current
            lawsuits or bankruptcy proceedings that might affect our interest in
            your Deposit Account; and (b) you have not and will not attempt to
            transfer any interest in your Deposit Account to any other person or
            offer your Deposit Account as collateral or security for any other
            obligation. If any person seeks to attach your Deposit Account, for
            example by legal garnishment, you agree that we may deem all amounts
            you owe us, immediately payable and apply the funds in your Deposit
            Account as payment of those amounts. If we must hire an attorney to
            defend or enforce our rights under the Security Agreement, you will
            pay our reasonable attorneys' fees and court costs, unless
            prohibited by law.
          </p>
          <h3 className="mb-4">TRUTH IN SAVINGS DISCLOSURES</h3>
          <p className="mb-4">
            IMPORTANT INFORMATION ABOUT YOUR DEPOSIT ACCOUNT
          </p>
          <ul class="mb-4 list-disc">
            <li>
              <strong>RATE INFORMATION</strong>. The interest rate on the
              balance in your Deposit Account that is eligible to earn interest
              is 0.0% with an annual percentage yield (APY) of 0.0%. Your
              interest rate and APY may change.
            </li>
            <li>
              <strong>Determination of Rate</strong>. At our discretion, we may
              change the interest rate on your Deposit Account.
            </li>
            <li>
              <strong>Frequency of Rate Changes</strong>. We may change the
              interest rate on your Deposit Account at any time.
            </li>
            <li>
              <strong>Limitations on Rate Changes</strong>. There are no maximum
              or minimum interest rate limits.
            </li>
            <li>
              <strong>COMPOUNDING AND CREDITING</strong>. Interest will be
              compounded daily and will be credited to your Deposit Account
              monthly. If you close your Deposit Account before interest is
              credited, you will not receive the accrued interest.
            </li>
            <li>
              <strong>MINIMUM BALANCE REQUIREMENTS</strong>. No minimum balance
              requirements apply to your Deposit Account.
            </li>
            <li>
              <strong>BALANCE COMPUTATION METHOD</strong>. We use the average
              daily balance method (less to calculate interest on your Deposit
              Account. This method applies a periodic rate to the average daily
              balance in your Deposit Account for the Cycle. The average daily
              balance may be calculated based on your ledger balance or your
              Available Balance. To get the average daily balance, we add the
              balance in the Deposit Account for each day of the Cycle, and
              divide that figure by the number of days in the Cycle. You will
              not earn interest on any balance in your Deposit Account that is
              not classified as Available Balance.ACCRUAL ON NON CASH DEPOSITS.
              Interest begins to accrue no later than the Business Day we
              receive credit for the deposit of non-cash items.
            </li>
            <li>
              <strong>TRANSACTION LIMITATIONS</strong>. You may not make
              transactions that would cause the Spent Money to exceed the total
              balance in your Deposit Account. If you have more than one
              Sub-Account, you may not make transactions with any Sub-Account
              that would cause the Spent Money in the Deposit Account to exceed
              the total Available Balance in the Deposit Account, if you exceed
              these limits, we may close, suspend, or freeze your Deposit
              Account.
            </li>
            <li>
              <strong>FEES AND CHARGES</strong>. Please refer to the separate
              Fee Schedule provided to you with this Agreement for information
              about fees and charges associated with your Deposit Account. A Fee
              Schedule will be provided to you at the time you open a Oval
              Account, periodically when fees or charges change, and upon
              request.
            </li>
          </ul>
          <h3 className="mb-4">II. GENERAL TERMS</h3>
          <p className="mb-4">
            This section applies to all features of your Oval Account
          </p>
          <h5 className="mb-4">A. About your Oval Account</h5>
          <p className="mb-4">
            &nbsp;<strong>Evolve</strong>. The Oval Account is provided by
            Evolve Bank & Trust.
          </p>
          <p className="mb-4">
            &nbsp;<strong>Business Days</strong>. Our Business Days are every
            day except Saturdays, Sundays, and holidays.
          </p>
          <p className="mb-4">
            &nbsp;<strong>Writing to Us</strong>. You may e-mail us at
            info@useoval.com. You may also write to us at 2631 plantation hollow
            ct missouri city tx 77459. We will deem any and all notices to us
            effective upon receipt by us.
          </p>
          <p className="mb-4">
            &nbsp;<strong>Your Account</strong>. Your Oval Account includes a
            Deposit Account and a Oval Card. THE OVAL CARD IS A DEBIT CARD.
            Within your Oval Account, you may set up one or Authorized Users.
            Spending Limit. You may never spend more than the amount you have in
            your Deposit Account with your Oval Card or with transactions on
            your Deposit Account. If you make a transaction that causes you to
            exceed the balance on your Oval Account, you agree to immediately
            make a deposit to your Oval Account to return your Oval Account to
            good standing.Our general practice is to decline any transaction
            that would cause you to exceed any Available Balance in your Oval
            Account. Even if we have permitted you to exceed your Available
            Balance before, we are not required to do it in the future. We may
            determine the amount of Available Balance, for the purpose of
            deciding whether a transaction will cause you to exceed the
            Available Balance only once, and at any time between the time you
            authorize the transaction and when we decline the transaction or
            send a notice of the declined transaction.
          </p>
          <p className="mb-4">
            &nbsp;<strong>The App</strong>. You can access your Oval Account
            through the Oval mobile application (App). You may log in to the App
            at any time to view and update information about your Account and
            initiate online transactions. Your use of the App is subject to the
            Oval Terms of Service.
          </p>
          <p className="mb-4">
            &nbsp;<strong>Periodic Statements</strong>. We will make available
            to you one periodic statement (Statement) for your Oval Account per
            month, covering activity on your Oval Card and Deposit Account
            during each monthly cycle (Cycle). We may make your Statements
            available through the App, or by e-mail. We have made the Statement
            available to you on the day we notify you that the Statement is
            available. If your Deposit Account balance has charged off, we may
            provide you with quarterly Statements.
          </p>

          <h5 className="mb-4">B. Opening Your Oval Account</h5>
          <ul className="mb-4 list-disc">
            <li>
              Identifying You. To help the United States Government fight
              terrorism and money laundering, federal law requires us to obtain,
              verify, and record information that identifies each person that
              opens an Account. What this means for you: when you open an Oval
              Account, we will ask you for your name, street address, email,
              phone number, last four digits of your Social Security Number
              (SSN), and date of birth, and other information that will allow us
              to identify you. To open an Oval Account with us, you must be at
              least 18 years old, a U.S. citizen or a resident alien with a
              valid SSN and have a residential address in the U.S. or U.S.
              territory where we offer the Oval Account. We may also ask to see
              your driver license or other identifying documents that will allow
              us to identify you. You must tell us when this information
              changes. We may ask you for additional documents to verify any
              changes. We may restrict or close your Oval Account if we cannot
              verify your information, or if you do not provide it as requested.
            </li>
            <li>
              Consumer Reporting Agencies. You authorize us to obtain
              information about you from time to time from consumer reporting
              agencies, check verification services, and other third parties for
              the purpose of considering your application for a Oval Account or
              any other purpose permitted by law.
            </li>
            <li>
              TIN/Backup Withholding. We are required by federal law to obtain
              your correct taxpayer identification number (TIN) in order to
              avoid potential backup withholding and to report interest income
              paid to you in connection with your Oval Account. If you are
              subject to backup withholding or if the Internal Revenue Service
              (IRS) notifies us that we do not have a correct TIN for you, we
              may be required to withhold and remit to the IRS a percentage of
              interest paid (backup withholding) to your Deposit Account.
              Amounts withheld are reported to the IRS as federal tax withheld
              and will be reflected on your IRS Form 1099-INT, Interest Income.
              A TIN may be your SSN if your Oval Account is in your name and you
              are either a U.S. citizen, permanent resident, or otherwise
              eligible to receive an SSN.
            </li>
            <li>
              Identifying your business (if applying for a business account).
              You will need to provide Company information and certain personal
              information (collectively, “Company Information”), when you apply
              for an Account. Company Information may include your registered
              business name and state of incorporation, the business address,
              ownership details, the nature of the business, and other business
              information we may request from time to time; the name, contact
              information, and date of birth of beneficial owners and certain
              other personnel, and other personal information; and a corporate
              registration certificate, proof of address, personal
              identification, and any other documentary information used to
              verify business and personal information. We provide Company
              Information to our Banking Services Provider and other third-party
              service providers to determine your eligibility for the Services.
              We rely on the accuracy of the Company Information you provide us
              when opening and maintaining your Account. We may deny your
              applications, suspend provision of the Services to you, or close
              your Account if Company Information is out of date, incomplete, or
              inaccurate. At any time during the term of this Agreement and as
              part of your use of the Services, we may require additional
              Company Information from you to verify your identity and the
              identity of your business, to obtain other information about your
              business, to open and maintain accounts and aspects of the
              Services, to assess your financial condition, and to evaluate the
              risks associated with your business. You expressly consent and
              authorize us to retrieve additional Company Information about
              Company and its owners or directors from our vendors and other
              third parties to solely to assess the history and risks of the
              business and to prevent fraud, including by obtaining information
              from credit reporting agencies and information bureaus, and you
              authorize and direct such third parties to compile and provide
              such information to us. You acknowledge that this may include
              names, addresses, credit history, and other data. You acknowledge
              that we may use Company Information to verify any other
              information you provide to us, and that any information we collect
              may affect our assessment of your overall risk to our business.
            </li>
            <li>
              Ownership of Oval Account. This is an individual account or
              business account based on your application type.
            </li>
            <li>
              Authorized Users. You may authorize one or more Authorized Users
              to use and access your Oval Account, or any Sub-Account, subject
              to our approval. The Authorized User must be at least 18 years of
              age. We reserve the right to limit the number of Authorized Users
              of your Oval Account. We may require you to submit certain
              information about each person you request to make an Authorized
              User on your Oval Account or a Sub-Account. Authorized Users will
              have access to certain information about your Oval Account and
              will be able to make transactions with your Oval Account. You will
              be responsible for an Authorized User use of the Oval Account, and
              use of the Oval Account by anyone else they allow to use the Oval
              Account, even if you did not want, or agree to, that use. We may
              also limit an Authorized User ability to use the Oval Account. The
              Authorized User is designated to conduct transactions on your
              behalf. You do not give up any rights to act on the Oval Account,
              and the Authorized User may not in any manner affect the rights of
              the owner or beneficiaries, if any, other than by using the Oval
              Card and making transactions on the Oval Account. We undertake no
              obligation to monitor transactions to determine that they are on
              the owner's behalf. The Authorized User authority is automatically
              terminated by the death of any owner of the Oval Account. However,
              we may continue to honor the transactions of the Authorized User
              until: (a) we have received written notice or have actual
              knowledge of the termination of authority, and (b) we have a
              reasonable opportunity to act on that notice or knowledge. We may
              refuse to accept an Authorized User for any reason, at our sole
              discretion.
            </li>
            <li>
              Removing an Authorized User. If you want to remove an Authorized
              User from your Oval Account, you must contact us and request their
              removal. Authorized Users may remove themselves from your Oval
              Account upon request. You also must immediately destroy all Oval
              Cards in their possession, change or destroy any other Access
              Credentials (as defined below in Section V.C.1) in their
              possession, and cancel any arrangements, such as automatic or
              scheduled transactions, they may have set up on your Oval Account.
              The Authorized User will be able to use your Oval Account until we
              receive the request to remove the Authorized User from your Oval
              Account and we have acted on your notice. During this time, you
              will still be responsible for all transactions the Authorized User
              makes using your Oval Account. You will be responsible even if
              these transactions do not appear on or post to your Oval Account
              until after you remove the Authorized User from the Oval Account.
              We reserve the right to remove any Authorized User from your Oval
              Account for any reason. When you or we remove an Authorized User
              for any reason, we may revoke the Authorized User’s Oval Card,
              close any Sub-Account the Authorized User used, issue a new Oval
              Card with a different number, close your existing Oval Account and
              issue a new Oval Account with a new account number, and/or require
              you to change other Access Credentials. Any funds that remain in
              the Wallet associated with the closed Sub-Account will remain in
              your Deposit Account.
            </li>
            <li>
              Linking External Accounts. You may choose to link your Oval
              Account to an account you have with another financial institution
              in the U.S. or a U.S. territory where we offer the Oval Account.
              We will call that other account a Linked External Account. You can
              use your Linked External Account to transfer money to or from your
              Deposit Account. Any Linked External Account must be owned by you
              and must be a personal account (not a business or commercial
              account). Your request to establish a Linked External Account is
              subject to our verification and approval. In our discretion, we
              may limit the number of Linked External Accounts you may have at
              one time, block any transaction you make with your Linked External
              Account, or disconnect any Linked External Account.
            </li>
          </ul>
          <h3 className="mb-4">III. OVAL CARD TERMS</h3>
          <p className="mb-4">
            <i>
              For the terms of your Oval Card (if applicable), please see the
              Oval Card Agreement provided to you at the time of opening your
              Oval Account and requesting a Oval Card.
            </i>
          </p>
          <h3 className="mb-4">IV. DEPOSIT ACCOUNT TERMS</h3>
          <p className="mb-4">
            <i>This section governs your use of your Deposit Account.</i>
          </p>
          <h5 className="mb-4">A. Deposits</h5>
          <ul className="mb-4 list-disc">
            <li>
              Limited Deposit Account Access. Your Deposit Account is only
              accessible through the App on your mobile or web device. You may
              only make withdrawals and transactions from your Deposit Account
              by initiating permitted transactions on the App. You will not be
              able to make withdrawals or deposits on your Deposit Account at
              branch locations or by telephone. You may also use your Oval Card
              to debit your Deposit Account.
            </li>
            <li>
              FDIC Insurance. Funds in your Deposit Account are insured by the
              Federal Deposit Insurance Corporation (FDIC) and backed by the
              full faith and credit of the United States, up to the applicable
              limit. The amount of insurance coverage you have may depend on the
              balance in your Deposit Account and the ownership, type of, and
              balances held in any other accounts you have with us. For
              additional information, please visit the FDIC website at{" "}
              <a href="https://www.fdic.gov">www.fdic.gov</a>.
            </li>
            <li>
              Deposit Requirements. Deposits must be made in U.S. Dollars.
              Deposits made by ACH are subject to the NACHA Operating Rules and
              Operating Guidelines and the rules of any regional clearing houses
              we may use from time to time (collectively, the ACH Rules). Before
              final settlement of any deposit, we act only as your agent. We
              will give only provisional credit until collection is final for
              any items we accept for deposit (including items drawn on us). You
              authorize us to attempt to collect previously returned items
              without giving you notice, and in attempting to collect we may
              permit the payor bank to hold an item beyond an applicable
              deadline. Actual credit for deposits of, or payable in, foreign
              currency will be at the exchange rate in effect on final
              collection in U.S. dollars. We will treat and record all
              transactions received after the Cutoff Time (defined below) on a
              Business Day we are open, or received on a day we are not open for
              business, as if initiated on the next Business Day that we are
              open. At our option, we may take an item for collection rather
              than for deposit.
            </li>
            <li>
              Permitted Deposits. Deposits to your Deposit Account may be made
              using one of the following payment methods:
              <ul className="ml-8 mb-4 list-disc">
                <li>
                  External Debit Card. You may use the App to authorize us to
                  charge a debit card issued by an external U.S. bank and
                  deposit the funds in your Deposit Account. You are responsible
                  for any fees charged by the issuing bank for using your debit
                  card.
                </li>
                <li>
                  Linked External Account. You may authorize us to initiate ACH
                  transfers from a Linked External Account to your Deposit
                  Account. Use the App to set up, review, change or cancel your
                  scheduled transfers.
                </li>
                <li>
                  Person-to-Person Transfer with Oval Users. You can receive
                  transfers to your Deposit Account initiated by another Oval
                  user, using the person-to-person transfer services (P2P
                  Transfer) provided in the App pursuant to Section IV.D below.
                </li>
                <li>
                  Direct Deposit. You can direct a third party, such as an
                  employer, to electronically deposit your paycheck, retirement
                  benefits, or other income to your Deposit Account by ACH or
                  wire transfer. Direct deposits may not be initiated in the
                  App.
                </li>
                <li>
                  Other. We may permit you to make deposits by other means we
                  make available from time to time.
                </li>
              </ul>
            </li>
            <li>
              Deposit Records and Receipts. We and our service providers may
              rely on the account number on any record of a deposit you make,
              even if that account number is associated with a name that is
              different from the name you have provided. It is not our
              responsibility to detect any inconsistency between the account
              number you provide and the name. You may use the App or call us to
              confirm that we have received a deposit. If you make a deposit, we
              may provide a confirmation of your deposit, but the amount on your
              deposit confirmation may not reflect the amount of funds we
              actually receive. We may confirm the funds you deposit and, after
              review, may adjust your Deposit Account for any errors including
              any errors on your deposit request or similar records. If we give
              you a confirmation for a deposit that you then cancel, the
              confirmation is void and you may not claim those funds.
            </li>
            <li>
              Our Right to Refuse Deposits. We may refuse a deposit, or part of
              a deposit, at any time. We also may refuse a deposit after
              initially accepting it. We will not be liable to you for refusing
              a deposit, even if it causes us to decline any transactions you
              have already made.
            </li>
            <li>
              When You Can Withdraw Funds You Have Deposited. Please see the
              Funds Availability Policy for information about when funds you
              deposit will be available for withdrawal. If funds from a deposit
              become available and you can withdraw them, that does not mean the
              item you have deposited is good, has cleared, or has been paid by
              the paying bank. It is possible that the item will be returned
              unpaid months after we have made the funds available to you and
              you have withdrawn them.
            </li>
            <li>
              Our Right to Charge Back Deposited or Cashed Items. If you make a
              deposit and (a) the sending bank returns it to us unpaid; (b) the
              sending bank demands that we repay them because the deposit was
              unauthorized; or (c) the sending bank or the originator of a
              transfer demands that we return the item because it was
              unauthorized, sent to the wrong account number or procured by
              fraud, we may pay the return or demand, and subtract the funds
              from your balance. If we have reason to believe that any of the
              events in the previous sentence has occurred or may occur or that
              the item should not have been paid or may not be paid for any
              other reason, we may place a hold on the funds or move them to a
              bank-managed administrative account until we determine who is
              entitled to them.
            </li>
            <li>
              All Deposits Are Credited Subject to Final Settlement in Cash or
              Credits. We have the right to forward all deposited items to
              correspondents including all Federal Reserve Banks, and we will
              not be liable for default or neglect of any correspondents for
              loss in transit, and no correspondent will be liable except for
              its own negligence. You specifically authorize us or our
              correspondents including the Federal Reserve Banks to handle such
              items in accordance with provisions of Regulation J (12 CFR Part
              210), as revised or amended from time to time by the Federal
              Reserve Board. In the event we are subject to local clearinghouse
              rules, you specifically authorize us to handle such items in
              accordance with the rules and regulations of the clearinghouse.If
              we permit you to withdraw funds from your Deposit Account before
              final settlement has been made for any deposited item, and final
              settlement is not made, we have the right to charge your Deposit
              Account or obtain a refund from you. In addition, we may charge
              back any deposited item at any time before final settlement for
              whatever reason. We will not be liable for any damages resulting
              from the exercise of these rights. Except as may be attributable
              to our lack of good faith or failure to exercise ordinary care, we
              will not be liable for dishonor resulting from any reversal of
              credit, return of deposited items or for any damages resulting
              from any of those actions
            </li>
          </ul>

          <h5 className="mb-4">B. Withdrawals and Transfers</h5>
          <ul className="mb-4 list-disc">
            <li>
              Available Balance. You may withdraw or transfer all or any part of
              the Available Balance in your Deposit Account at any time,
              provided that the withdrawal will not cause you to exceed the
              Spending Limit(s) and any other limitations in this Agreement or
              limits you set on the Deposit Account by using the App. We
              determine your Available Balance by taking your previous day
              balance, plus any pending credit transactions (excluding pending
              returns), such as ACH direct deposits, and subtracting (a) pending
              charges such as, electronic payments, according to the Processing
              Order (defined in Section IV.B.9 below) (b) amount of deposits
              that are not yet available for withdrawal under our Funds
              Availability Policy, and (c) any holds on your balance, such as
              holds on funds to comply with court orders or other legal
              requirements, or as authorized by the Security Agreement. We
              reserve the right to use a different method in certain states if
              required by law. We may permit Authorized Users to withdraw only
              the portion of the Available Balance which is designated to the
              Sub-Account(s) they are authorized to use. However, we are not
              required to do so unless required by applicable law.
            </li>
            <li>
              Withdrawal Rules. By initiating a withdrawal of funds from your
              Deposit Account, you authorize us to make the transaction you
              select. Withdrawals may be made in U.S. dollars by using the App
              to authorize a transfer of funds to a Linked External Account, to
              make a P2P transfer to another Oval user, or to make a transfer to
              another type of account or payee we may permit from time to time.
              Withdrawals to a Linked External Account and P2P transfers are
              processed as ACH transactions. Please see the Electronic Fund
              Transfer Agreement for more information.We may subtract from your
              Deposit Account balance the amount of any withdrawal, P2P
              Transfer, or other debit transaction that you, or any Authorized
              User, or person you or an Authorized User authorized, initiated or
              approved. We may require you or any person you authorize to
              provide us with identification, documentation or information that
              is acceptable to us before allowing the transaction. You may not
              make any withdrawal in an amount that exceeds the applicable
              Available Balance. We may refuse to permit Authorized Users to
              make any withdrawal in an amount that exceeds the Available
              Balance applicable to the Deposit Account they are authorized to
              use. We may refuse any withdrawal or transfer request by any
              method on forms not approved by us, or that we do not specifically
              permit for your Deposit Account, or that does not include all
              information we require, or that is greater in number than the
              frequency permitted, or which is greater or less than any
              withdrawal limitations. We will use the date the transaction is
              completed by us (as opposed to the date you initiate it) to apply
              the frequency limitations. In addition, we may place limitations
              on your Deposit Account until your identity is verified. We
              reserve the right to establish (and change) maximum dollar limits
              for withdrawal transactions from time to time. Even if we honor a
              nonconforming request, we are not required to do so later.
            </li>
            <li>
              Cutoff Time. Online requests to transfer funds to or from your
              Deposit Account must be received by us by 2:00 PM PT on a Business
              Day to be initiated on that Business Day. Online transfer requests
              received by us after 2:00 PM PT or on a day that is not a Business
              Day generally will be initiated on the next Business Day.
            </li>
            <li>
              Right to Require Advance Notice of Withdrawals. We reserve the
              right to require seven days' notice in writing before each
              withdrawal.
            </li>
            <li>
              Account Numbers on Fund Transfers. If you instruct us to send a
              fund transfer, such as an ACH transfer, we, our service providers,
              and every other bank involved in the transfer may rely on any bank
              number or account number you provide. If the fund transfer
              instruction gives both a bank number or account number and a name,
              and the name identifies a different person from the bank or
              account owner identified by number, we and other banks that handle
              the fund transfer may still rely exclusively on the number. We
              have no duty to detect any inconsistency between the bank number
              or account number and the name.
            </li>
            <li>
              Withdrawal Authority. Any person who signs to open your Deposit
              Account or has authority to make withdrawals (including Authorized
              Users) may, acting alone, withdraw or transfer all or any part of
              your Deposit Account balance at any time. Each of you (until we
              receive written notice to the contrary) authorizes each other
              person who signs or has authority to make withdrawals to endorse
              any item payable to you or your order for deposit to your Deposit
              Account or any other transaction with us.
            </li>
            <li>
              Rules for ACH Transfers. This Agreement is subject to Article 4A
              of the Uniform Commercial Code Fund Transfers, as adopted in the
              state in which you have your Deposit Account with us. If you
              originate a fund transfer and you identify by name and number a
              beneficiary financial institution, an intermediary financial
              institution or a beneficiary, we and every receiving or
              beneficiary financial institution may rely on the identifying
              number to make payment. We may rely on the number even if it
              identifies a financial institution, person or account other than
              the one named. You agree to be bound by automated clearing house
              association rules, such as the NACHA Rules. These rules provide,
              among other things, that payments made to you, or originated by
              you, are provisional until final settlement is made through a
              Federal Reserve Bank or payment is otherwise made as provided in
              Article 4A-403(a) of the Uniform Commercial Code. If we do not
              receive such payment, we are entitled to a refund from you in the
              amount credited to your Deposit Account and the party originating
              such payment will not be considered to have paid the amount so
              credited. If we receive a payment order to credit your Deposit
              Account, we are not required to give you any notice of the payment
              order or credit.
            </li>
            <li>
              Multiple Signatures. We are not required to comply with any
              multiple-signature requirement, even if you have otherwise
              instructed us to do so.
            </li>
            <li>
              Processing Order. The following Processing Order dictates the
              order in which we will process your transactions on your Deposit
              Account each Business Day. All credit transactions are processed
              first. Debits or withdrawals (such as ACH transactions) will be
              processed in the order in which they are received by us. The
              processing order of these items is important because if there is
              not enough money in your Deposit Account to pay for the items in
              the order they are processed in accordance with the processing
              order, we may decline the transaction, or it may cause an
              overdraft on your Deposit Account.
            </li>
          </ul>
          <h5 className="mb-4">C. Overdrafts</h5>
          <ul className="mb-4 list-disc">
            <li>
              Overdrafts. Our general practice is to decline to pay any
              transaction that would cause an overdraft on your Deposit Account
              (i.e., your Available Balance is less than the amount of that item
              plus all other items received but not yet paid) (Overdraft), or
              would cause a negative Available Balance in any Wallet. Even if we
              have paid these items before, we are not required to do it in the
              future. We can change our practice of paying these items on your
              Deposit Account without notice to you. We may determine the amount
              of Available Balance for the purpose of deciding whether to return
              an item for insufficient funds at any time between the time we
              receive the item and when we return the item or send a notice in
              lieu of return. We need only look at your Available Balance in
              your Oval Account once to decide if the item would cause an
              Overdraft or negative Available Balance, but if we choose to make
              a subsequent determination, the Available Balance at the
              subsequent time will determine whether there are insufficient
              available funds. It is your responsibility to avoid overdrawing
              your Deposit Account and maintain an Available Balance in your
              Oval Account.
            </li>
            <li>
              Overdraft Fees. You agree that we may charge fees for Overdrafts
              as set forth in the Fee Schedule.
            </li>
            <li>
              Your Responsibility to Pay Overdrafts. You are liable for any
              Deposit Account or Wallet shortage resulting from charges or
              Overdrafts, whether caused by you, an Authorized User, or any
              another person to whom you provide access to your Oval Account. If
              we pay a transaction that causes an Overdraft or negative
              Available Balance, you must immediately pay the amount of any
              Overdraft and restore the Available Balance to at least $0.00. You
              have no right to defer such payments, and you are liable
              regardless of whether you signed the item or benefitted from the
              charge or Overdraft. If you fail to pay an Overdraft, we also may
              report you to consumer reporting agencies, close your Oval
              Account, or both. This could affect your ability to open accounts
              with us or other banks in the future. We may also apply funds in
              your Deposit Account to cure a negative Available Balance. You
              authorize us to use the money from any subsequent deposits to your
              Deposit Account to pay any Overdraft or apply the deposit to cure
              a negative Available Balance. Subsequent deposits include any
              federal or state benefit payments that you choose to deposit in
              your Deposit Account (including direct deposit of Social Security
              benefits), unless prohibited by law. You understand and agree that
              if you do not want your benefits applied in this way, you may
              change your direct deposit instructions at any time. We may still
              pursue collection of the amount you owe (including suing you)
              after it is charged off.
            </li>
            <li>
              Waiver of Notices. To the extent permitted by law, you waive any
              notice of non-payment, dishonor or protest regarding any items
              credited to or charged against your Deposit Account. For example,
              if you authorize a transaction and it is returned unpaid or we
              receive a notice of nonpayment, we do not have to notify you
              unless required by federal Regulation CC or other law.
            </li>
          </ul>
          <h5 className="mb-4">D. Person to Person Transfers</h5>
          <p className="mb-4">
            You may use your Oval Account to make person-to-person transfers
            (P2P Transfers) to other Oval users.
          </p>
          <ul className="mb-4 list-disc">
            <li>
              Payment Authorization. By authorizing a P2P Transfer, you
              authorize us to debit your Deposit Account for the amount you
              request to send, plus applicable fees if any, on or after the date
              of your authorization. We will send that amount (less fees, if
              any) to your designated recipient. By authorizing a P2P Transfer,
              you also authorize us to initiate any other transactions necessary
              to correct errors or reverse payments that are rejected or
              returned. You may not use an external bank account or any other
              payment method to fund a P2P Transfer. You are solely responsible
              for ensuring you have a sufficient Available Balance in your
              Deposit Account necessary to complete any payments initiated
              through the P2P Transfer service, and that the transaction will
              not cause you to exceed any Spending Limit. You agree to reimburse
              us for any fees, costs, or expenses we incur as a result of
              insufficient or unavailable funds in connection with any P2P
              Transfer you initiate.
            </li>
            <li>
              Restrictions on P2P Transfers to Oval Users Without Oval Account.
              If you send a P2P Transfer to a recipient who does not have a Oval
              Account, you authorize us to hold the funds you send on behalf of
              your recipient, and we will issue promotional credit (Credit) to
              the recipient in lieu of cash. You understand that the recipient
              cannot redeem the Credit for cash unless and until the recipient
              open a Oval Account. To send a P2P Transfer, you must provide the
              recipient valid mobile telephone number, which is capable of
              receiving SMS or text messages. If the recipient does not have an
              online account on the Oval website (Online Account), the recipient
              will receive an SMS message notifying them of your P2P Transfer,
              with instructions for opening an Online Account or Oval Account
              and claiming the Credit. Once the recipient has an Online Account,
              the recipient will receive Credit in the amount of the P2P
              Transfer you send. An Online Account is not a Oval Account and
              your recipient may not use an Online Account to redeem the Credit
              for cash. If the recipient opens a Oval Account, the Credit will
              be automatically redeemed for cash and deposited in their Oval
              Account. Credit has no cash value until and unless we redeem the
              Credit for cash, and credit it to a Deposit Account. Credit is
              issued solely for promotional purposes and is not FDIC-insured.
              Credit expires 30 days after the date it is issued, if it is not
              used or redeemed for cash. If the recipient fails to claim the
              Credit or their Online Account is inactive for an extended period
              of time, it may be deemed unclaimed or abandoned under applicable
              state law. See the Oval Terms of Service for more information.
            </li>
            <li>
              Transaction Limits. You may not make P2P Transfers that would
              cause you to exceed any transaction limits set forth in provision
              of this Agreement. You may not make any P2P Transfer that would
              case you to exceed any applicable Spending Limit. We may reject or
              reverse any transaction that would cause you or the recipient of
              the P2P Transfer to exceed limits applicable to their Oval
              Account, or if we determine in our sole discretion that the P2P
              Transfer was invalid for any reason. You may not make P2P
              Transfers to conduct business, commercial or merchant
              transactions. We reserve the right to change these transaction
              limitations at any time, in our sole discretion, with or without
              notice to you, unless required by law.
            </li>
            <li>
              Stop Payment. All P2P Transfer requests may be processed as soon
              as we receive them, and we may be unable to stop the P2P Transfer.
              Our ability to stop a P2P Transfer once you have initiated it will
              depend on when you notify us of your desire to stop the
              transaction, and whether we have begun to process the P2P Transfer
              or have a reasonable opportunity to act on your request to stop
              the payment.
            </li>
            <li>
              Refunds, Reversals and Chargebacks. P2P Transfers may be
              invalidated or reversed by us if, among other reasons, we send
              cash or Credit to you or your recipient in error, the funding
              transaction is declined or reversed, the P2P Transfer was
              unauthorized or unfunded, or the P2P Transfer was made for
              activities or reasons that violate this Agreement, the Oval Terms
              of Service or any other agreement you have with us. If the P2P
              Transfer you send or receive is invalidated for any reason, you
              may be liable to us for the full amount of the P2P Transfer, and
              we may recover the amount of the P2P Transfer (plus applicable
              fees, if any) from you. We may recover the amount of the P2P
              Transfer from the sender or recipient of the P2P Transfer in our
              sole discretion (subject to applicable law). When recovering the
              amount of an invalidated P2P Transfer from you, we may apply any
              funds sent to you in a subsequent P2P Transfer, from your Deposit
              Account or any incoming deposit to your Deposit Account, engage in
              collection efforts to recover such amounts from you, place a
              limitation or restriction on your Oval Account, or take any other
              action authorized by this Agreement, Oval Terms of Service or any
              other agreement you have with us.
            </li>
            <li>
              Other Restrictions. Your ability to make P2P Transfers is subject
              to all other terms and restrictions set forth in the Oval Terms of
              Service, which are incorporated herein by reference. In the event
              of a conflict between the Terms of Service and this Agreement,
              this Agreement shall control.
            </li>
          </ul>
          <h3 className="mb-4">V. ADDITIONAL TERMS</h3>
          <i>This section applies to all features of your Oval Account.</i>
          <h5 className="mb-4">
            A. Communications, Statements, Notices of Errors, and Other Notices
          </h5>
          <ul className="mb-4 list-disc">
            <li>
              Delivery of Notices. You agree that we and our service providers
              may communicate with you by mail, telephone, email, fax,
              prerecorded message, automated voice, text message or other means
              allowed by law regarding your Oval Account. Any legal disclosures,
              notices and communications and other Oval Account-related
              correspondence that we mail to you will be sent via U.S. Mail to
              the last mailing address shown in our records for your Oval
              Account. Notices will be deemed to have been delivered on the day
              we mailed it to you, or made it available electronically. We are
              not responsible for items lost in, or not delivered by, mail or
              e-mail. Some notices may only be available electronically or in
              paper form. Notice to any owner of your Oval Account is notice to
              all owners and Authorized Users.
            </li>
            <li>
              Notices You Send Us. Any written notice you give us is effective
              after we actually receive and act on it, and it must be given to
              us according to the specific delivery instructions provided
              elsewhere, if any. We must receive it in time to have a reasonable
              opportunity to act on it. If the notice is regarding a check or
              other item, you must give us sufficient information to be able to
              identify the item, including the item number, amount, date and
              payee.
            </li>
            <li>
              Electronic Communication. Your Oval Account is an electronic
              account. We may send communications electronically, such as by
              email or text message, rather than through U.S. mail or other
              means, unless the law says otherwise. If you give us your email
              address, you agree that we may send servicing messages (such as
              fraud alerts and hold alerts) related to your Oval Account to that
              address. You may be required to agree to communicate with us by
              electronic means in order to open a Oval Account. If you revoke
              your consent to electronic communications, we may declare you to
              be in default of this Agreement (see Section III.F.1), close your
              Oval Account or take other actions described in Section III.F.2 of
              this Agreement and the Electronic Communications Agreement.
            </li>
            <li>
              Telephone Communication. We may record and/or monitor any of our
              telephone conversations with you. If we do record, we do not have
              to keep the recordings, unless the law says we must. When you give
              us your mobile number, we have your permission to contact you at
              that number about all of your Evolve accounts. Your consent allows
              us and our service providers to use text messaging, artificial or
              prerecorded voice messages and automatic dialing technology for
              informational and service calls, but not for telemarketing or
              sales calls. This communication may include contact from companies
              working on our behalf to service your Oval Account. Message and
              data rates may apply. You may change these preferences by emailing
              info@useoval.com.
            </li>
            <li>
              Change in Contact Information. We require you to provide an e-mail
              address, mobile telephone number, and physical street address if
              your mailing address is a P.O. box. You are responsible for
              promptly notifying us of any change to any such contact
              information or your name. In some instances, we may request
              additional information for verification purposes. Any notice we
              mail to you (or email to you if you have told us to communicate
              with you electronically) will be binding when sent to the last
              (postal or electronic) address in our records. We may change your
              address if we receive an address change notice from the U.S.
              Postal Service (USPS) or if a company in the business of providing
              correct addresses informs us that the address in our records no
              longer matches your address. Even if you elected to receive
              electronic communications from us, there may still be some legal
              information that we need to send you via the USPS.
            </li>
            <li>
              Communications Equipment and Services. You are responsible for
              obtaining and maintaining all telecommunications, mobile,
              broadband, computer, hardware, software, equipment and services
              needed to access and use your Oval Account online; view, save
              and/or print your Oval Account documents online; receive any
              messages or documents you have consented to receive
              electronically; and for paying all related charges. We are not
              required to act on any instruction or message from you provided by
              SMS/text, or telephone voice mail, message service or answering
              machine. Whenever this Agreement or applicable law requires or
              allows you to give us written notice, we will not consider
              SMS/text to be written notice.
            </li>
          </ul>
          <h5 className="mb-4">B. Closing and Restricting Your Oval Account</h5>
          <ul className="mb-4 list-disc">
            <li>
              You May Close Your Account. You may request to close your Oval
              Account at any time for any reason. However, we are not required
              to close your Oval Account at your request if you have pending
              transactions, your Deposit Account is overdrawn, or your Deposit
              Account is subject to legal process (such as a garnishment,
              attachment, execution, levy or similar order). In those cases, we
              will restrict your Oval Account against all future withdrawals and
              other transactions, other than under legal process until pending
              transactions are paid or returned, the balance on your Deposit
              Account is no longer negative, and any legal restriction on your
              Oval Account has been released.
            </li>
            <li>
              We May Close Your Account. We may also close your Oval Account at
              any time, for any reason or no reason, with or without prior
              notice to you. We will have no liability for any action we take
              under this section
            </li>
            <li>
              Rules for Closing Your Account. We may restrict your Oval Account
              in preparation for closing. As we do so, we will not pay any
              additional interest on your Deposit Account, and we may limit
              deposits to, or withdrawals from, your Deposit Account. We may
              prohibit further transactions on your Oval Card(s). Items
              presented for payment may be dishonored. When you close your Oval
              Account, you are responsible for leaving enough money in your
              Deposit Account to cover any outstanding items to be paid from
              your Deposit Account. We may send you written notice that we have
              closed your Oval Account. We will return the Available Balance in
              your Deposit Account less any outstanding unpaid Oval Card
              transactions, fees, claims, setoffs or other amounts you owe us,
              either electronically to a Linked External Account or by check
              sent to you by mail. This Agreement will survive the closing of
              your Oval Account and you are still responsible for obligations
              incurred prior to or in connection with the closing of your Oval
              Account. After your Oval Account is closed, we have no obligation
              to accept deposits or pay any outstanding transaction requests,
              but we may reopen your Deposit Account if we receive a deposit.
              This Agreement will survive the closing of your Account and you
              are still responsible for obligations incurred prior to or in
              connection with the closing of your Account.
            </li>
            <li>
              Restricting Your Account; Blocking and Delaying Transactions.
              There are many reasons we may decline or prevent transactions to
              or from your Oval Account, but we generally do it to protect you
              or us, or to comply with legal requirements. We may decline or
              prevent any or all transactions to or from your Oval Account in
              our sole discretion, as permitted by applicable law. We may
              refuse, freeze, reverse or delay any specific withdrawal, payment
              or transfer of funds to or from your Deposit Account, or we may
              remove funds from your Deposit Account to hold them pending
              investigation, including in one or more of the following
              circumstances:
            </li>
            <li>
              You maintain your Deposit Account at zero balance for at least 180
              days;
            </li>
            <li>
              You reside in or relocate outside of the U.S. or any U.S.
              territory where we offer the Oval Account;
            </li>
            <li>
              You attempt to use your Oval Account designated for personal use,
              instead for business purposes;
            </li>
            <li>
              Your Oval Account is involved in any legal or administrative
              proceeding;
            </li>
            <li>
              We receive conflicting information or instructions regarding Oval
              Account ownership, control or activity;
            </li>
            <li>
              We suspect that you may be the victim of a fraud, scam or
              financial exploitation, even though you have authorized the
              transaction(s);
            </li>
            <li>
              We suspect that any transaction may involve illegal activity,
              including violations of anti-money laundering laws and
              regulations, or may be fraudulent;
            </li>
            <li>
              We are complying in our sole judgment with any federal, state or
              local law, rule or regulation, including federal asset control and
              sanction rules and anti-money laundering rules, or with our
              policies adopted to assure that we comply with those laws, rules
              or regulations; or
            </li>
            <li>
              We reasonably believe that doing so is necessary to avoid a loss
              or reduce risk to us.
            </li>
          </ul>

          <h5 className="mb-4">C. Other Account Terms</h5>
          <ul className="mb-4 list-type">
            <li>
              Security. It is your responsibility to protect the devices on
              which you access your Oval Account, your Oval Card(s), the
              username, password, biometrics or other data you use to log into
              the App (Access Credentials). Do not share this information with
              anyone. If you give another person permission to use this
              information, you may be held fully liable for any transactions
              they make with your Oval Account, even if that person exceeded the
              authority you gave them. Please notify us immediately if you
              believe your Oval Account has been accessed without your
              permission. See the Electronic Fund Transfer Agreement and Section
              III.E of this Agreement for more information about your rights and
              responsibility in the event of unauthorized use of your Oval
              Account.
            </li>
            <li>
              Assignment of Agreement and Successors. You may not assign or
              transfer any interest in your Oval Account unless we agree in
              writing. Any permitted assignment of your Oval Account is subject
              to our setoff rights. This Agreement will be binding on your
              personal representative, executors, administrators and successors,
              and on our successors and assigns.
            </li>
            <li>
              Power of Attorney. A power of attorney is a document you sign that
              authorizes someone else, called the agent, to act on your behalf.
              If you sign a power of attorney, the agent can sign on your behalf
              and do anything you could do regarding your Oval Account,
              including withdrawing or spending all of the money in your Deposit
              Account. Do not sign a power of attorney unless you trust the
              agent to act in your best interest. If you choose to add an agent,
              you must provide a power of attorney form that we agree to accept.
              We may rely on a copy of an original power of attorney. We are not
              required to investigate the facts relating to any power of
              attorney provided to us on your behalf, including whether your
              signature on the power of attorney is authentic or whether the
              agent continues to have authority. We may follow or refuse to
              follow the agent instructions at any time, including if we suspect
              fraud or abuse on your Oval Account, unless applicable law
              requires otherwise. We may also refuse an agent request to become
              a joint owner or a beneficiary of a Oval Account, but we have no
              liability to anyone if we do so. We have no liability when we
              follow or refuse to follow any instructions from an agent, for
              example, if your agent misuses the authority you have given them.
            </li>
            <li>
              Death or Incompetence. You agree to notify us promptly if any
              person with a right to use your Oval Account dies or is
              adjudicated incompetent. We may continue to honor your
              transactions and instructions until: (a) we know of your death or
              adjudication of incompetence, and (b) we have had a reasonable
              opportunity to act on that knowledge. You agree that we may pay or
              certify transactions made on or before the date of death or
              adjudication of incompetence for up to 10 days after your death or
              adjudication of incompetence unless ordered to stop payment by
              someone claiming an interest in the Oval Account.
            </li>
            <li>
              No Waiver. If we fail to exercise any right, that does not mean
              that we waive that right or any other right, and we may still
              enforce all of our rights in the future.
            </li>
            <li>
              Headings and Rules of Construction. The headings in this Agreement
              are for convenience or reference only and will not govern the
              interpretation of the provisions. Unless it would be inconsistent
              to do so, words and phrases used in this Agreement should be
              construed so the singular includes the plural and the plural
              includes the singular.
            </li>
            <li>
              Changes to this Agreement. We may change the terms and conditions
              of this Agreement, including fees and features of your Oval
              Account, at any time. We will notify you in advance of any such
              change when required by applicable law. If we have notified you of
              a change to this Agreement and you continue to use your Oval
              Account after the effective date of the change, you have agreed to
              the change. Notices will be made available on our App and website,
              or delivered electronically using the most recent contact
              information we have on file for you.
            </li>
            <li>
              Legal Actions Affecting Your Account. If we are served with a
              subpoena, restraining order, writ of attachment or execution,
              levy, garnishment, search warrant, or similar order relating to
              your Oval Account (Legal Action), we will comply with that Legal
              Action. Or, in our discretion, we may freeze the assets in your
              Deposit Account and not allow any payments out of your Deposit
              Account, or use of the Oval Card(s) for obligations secured by
              your Deposit Account, until a final court determination regarding
              the legal action. We may do these things even if the legal action
              involves less than all of your funds in your Deposit Account. In
              these cases, we will not have any liability to you if there are
              insufficient funds to pay your items because we have withdrawn
              funds from your Deposit Account or in any way restricted access to
              your funds in accordance with the legal action. Any fees or
              expenses we incur in responding to any legal action (including
              attorneys' fees and our internal expenses) may be charged against
              your Oval Account. The Fee Schedule may specify additional fees
              that we may charge for certain legal actions.
            </li>
            <li>
              Illegal Activities. You agree not to use your Oval Account for any
              illegal activity. We may refuse any gambling transaction, whether
              lawful or not.
            </li>
            <li>
              Inactive and Unclaimed Accounts. Each state has laws that govern
              when accounts are considered inactive or abandoned, and when we
              are required to send a customer funds to the state. We encourage
              you to make sure your Oval Account remains active by signing in to
              the App or making transactions. After a specified period of time
              determined by the law of the state of your residence (as shown in
              our records), if we are not able to locate you, we will be
              required to deliver your Deposit Account to the state as abandoned
              property. You will then need to apply to the state for return of
              your funds. If your Oval Account is or has been inactive, we may,
              in our discretion, refuse to honor requests for withdrawals or
              other transactions on your Oval Account until after we have
              verified that you have authorized the request.
            </li>
            <li>
              Reporting to Consumer Reporting Agency; Disputes. We may report
              information about you or your Oval Account to a consumer reporting
              agency. If you believe that we have reported inaccurate or
              incomplete information about your Oval Account to a consumer
              reporting agency, you have the right to file a dispute with that
              consumer reporting agency. You may also submit a dispute directly
              to us by writing to us at info@useoval.com. Provide your name,
              address and phone number; your Oval Account number; the specific
              information you are disputing; an explanation of why it is
              inaccurate or incomplete; and any supporting documentation.
            </li>
            <li>
              Rules Governing Your Account. Except as otherwise provided in the
              Arbitration Agreement, this Agreement and your Oval Account are
              subject to applicable federal laws, the laws of the State of
              Tennessee without regard to internal principles of conflicts of
              law, and other applicable rules such as the operating letters of
              the Federal Reserve Banks and payment processing system rules
              (except to the extent that this Agreement can and does vary such
              rules or laws). Changes in these laws may change the terms and
              conditions of your Oval Account. We will notify you of any changes
              as required by law. Except as otherwise provided in the
              Arbitration Agreement, if any provision of this Agreement is found
              to be unenforceable according to its terms, all remaining
              provisions will continue in full force and effect. If this
              Agreement conflicts with any statements made by one of our
              employees or by a third-party service provider, this Agreement
              will govern.
            </li>
            <li>
              Fees. You agree to the terms of this Agreement and the Fee
              Schedule. You authorize us to deduct these charges, without notice
              to you, directly from the balance as accrued. You will pay any
              additional reasonable charges for services you request which are
              not covered by this Agreement.
            </li>
            <li>
              Attorneys' Fees Resulting from Collection or Dispute. You will be
              liable for our costs as well as for our reasonable attorneys'
              fees, to the extent permitted by law, whether incurred as a result
              of collection or in any other dispute involving your Oval Account.
              This includes you and any Authorized User(s); or a third party
              claiming an interest in your Oval Account. This also includes any
              action that you or a third party takes regarding the Oval Account
              that causes us, in good faith, to seek the advice of an attorney,
              whether or not we become involved in the dispute. All costs and
              attorneys' fees can be deducted from your Deposit Account balance
              when they are incurred, without notice to you.
            </li>
            <li>
              Limitation of Liability. You agree that we, our service providers,
              agents, officers, directors, and employees (and the same of our
              service providers, subsidiaries and affiliates themselves)
              (collectively, the Indemnified Parties) will not be liable for
              anything we do when following your instructions. In addition, the
              Indemnified Parties will not be liable if any such Indemnified
              Party does not follow your instructions if we reasonably believe
              that your instructions would expose us to potential loss or civil
              or criminal liability, or conflict with customary banking
              practices. To the extent you are entitled to relief under this
              Agreement, the total liability of the Indemnified Parties to you
              will not exceed $500, except as otherwise required by applicable
              law. THE INDEMNIFIED PARTIES WILL NOT BE LIABLE FOR INDIRECT,
              SPECIAL, OR CONSEQUENTIAL DAMAGES REGARDLESS OF THE FORM OF ACTION
              AND EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH
              DAMAGES. IF WE FAIL TO STOP PAYMENT ON AN ITEM, OR PAY AN ITEM
              BEARING AN UNAUTHORIZED SIGNATURE, FORGED SIGNATURE, OR FORGED
              ENDORSEMENT OR ALTERATION, OUR LIABILITY, IF ANY, WILL BE LIMITED
              TO THE FACE AMOUNT OF THE ITEM. This section will survive
              termination of your Oval Account and termination of this
              Agreement.
            </li>
            <li>
              Indemnification. You agree to indemnify and hold the Indemnified
              Parties harmless from and against losses arising in connection
              with the services provided under this Agreement, except for losses
              arising out of our own gross negligence or willful misconduct. You
              further agree to hold the Indemnified Parties harmless from losses
              arising out of actions taken or omitted in good faith by any
              Indemnified Party in reliance upon instructions from you. The
              Indemnified Parties are not responsible for any actions or
              omissions by any third party. If you give us instructions that we
              believe may expose us to potential liability, we may refuse to
              follow your instructions and we will not be liable to you if we
              refuse to follow your instructions. If we do choose to follow your
              instructions, we may ask you for certain protections such as a
              surety bond or an indemnity agreement in a form that is
              satisfactory to us. This section will survive termination of your
              Oval Account and termination of this Agreement.
            </li>
            <li>
              Filing a Lawsuit or Arbitration. You must file any lawsuit or
              arbitration against the Indemnified Parties within two years after
              the cause of action arises, unless federal or state law or an
              applicable agreement provides for a shorter time. This limit is in
              addition to limits on notice as a condition to making a claim. If
              applicable state law does not permit contractual shortening of the
              time during which a lawsuit must be filed to a period as short as
              two years, you and we agree to the shortest permitted time under
              that state laws. We abide by applicable federal and state record
              retention laws and may dispose of any records that we retained or
              preserved for the period set forth in these laws. Any action
              against us or another Indemnified Party must be brought within the
              period that the law requires us to preserve records, unless
              applicable law or this Agreement provides a shorter limitation
              period or applicable law requires a longer limitation period. This
              section is subject to Section V.C.22, which may require you to
              submit your claims to arbitration. This section will survive
              termination of your Oval Account and termination of this
              Agreement. YOU AGREE THAT YOU MAY BRING CLAIMS AGAINST THE BANK OR
              ANY OTHER INDEMNIFIED PARTY ONLY ON AN INDIVIDUAL BASIS AND NOT AS
              A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR
              REPRESENTATIVE ACTION OR PROCEEDING.
            </li>
            <li>
              Location of Legal Proceedings. If you file any lawsuit or other
              legal proceeding against an Indemnified Party that is connected in
              any way to your Oval Account or services, you agree to do so in an
              appropriate court in the State of Tennessee. If we file any
              lawsuit or legal proceeding that is connected in any way to your
              Oval Account or this Agreement, you consent to jurisdiction and
              venue in an appropriate court in the State of Tennessee. If any
              party chooses to have disputes resolved by arbitration, the
              Arbitration Agreement governs the process and location of the
              arbitration proceedings.
            </li>
            <li>
              Pre-Judgment Interest Rate. If either you or we are awarded a
              judgment against the other in connection with your Oval Account,
              the rate of interest earned before judgment on the judgment amount
              will be the rate of interest your Deposit Account earned during
              that period unless state law requires a different rate.
            </li>
            <li>
              Unlawful Internet Gambling Notice. Restricted transactions as
              defined in Federal Reserve Regulation GG are prohibited from being
              processed through this Oval Account or relationship. Restricted
              transactions generally include those in which credit, electronic
              fund transfers, checks, or drafts are knowingly accepted by
              gambling businesses in connection with the participation by others
              in unlawful Internet gambling.
            </li>
            <li>
              Severability. Any provision of this Agreement that limits the Bank
              liability does not negate the Bank duty (if any) under applicable
              law to act in good faith and with ordinary care. If any provision
              of this Agreement is determined to limit the Bank liability in a
              way prohibited by applicable law, or to be otherwise
              unenforceable, the parties agree to replace such provision with a
              provision that is valid and enforceable and that comes closest to
              expressing the intention of the invalid or unenforceable, and this
              Agreement will be enforceable as so modified.
            </li>
            <li>
              ARBITRATION AGREEMENTPLEASE READ THIS SECTION CAREFULLY AS IT
              AFFECTS YOUR RIGHTS. YOU HAVE THE RIGHT TO OPT OUT OF THIS
              ARBITRATION AGREEMENT AS DESCRIBED BELOW.
              <div className="ml-8 mb-4">
                <p className="mb-4">
                  <strong>Agreement to Arbitrate</strong> <br />
                  This section is referred to as the Arbitration Agreement. If
                  you have a dispute with the Bank or any other Indemnified
                  Party, and are not able to resolve the dispute informally, you
                  and we agree that upon demand by you, the Bank or any other
                  Indemnified Party, the dispute will be resolved through the
                  arbitration process set forth in this section.
                </p>
                <p className="mb-4">
                  <strong>Arbitration</strong>
                  <br />
                  You agree that if you have a dispute or claim that has arisen
                  or may arise between you and the Bank or any other Indemnified
                  Party, whether arising out of or relating to this Agreement
                  (including any alleged breach), your Oval Account and services
                  provided under this Agreement, any advertising, any aspect of
                  the relationship or transactions between us, and you are not
                  able to resolve the dispute or claim informally, you and we
                  agree that upon demand by you, the Bank or any other
                  Indemnified Party, the dispute or claim will be resolved
                  exclusively through final and binding arbitration, rather than
                  a court, in accordance with the terms of this Arbitration
                  Agreement. except that you may assert individual claims in
                  small claims court, if your claims qualify. Further, this
                  Arbitration Agreement does not preclude you from bringing
                  issues to the attention of federal, state, or local agencies,
                  and such agencies can, if the law allows, seek relief against
                  us on your behalf. You agree that, by entering into this
                  Arbitration Agreement, you and the Bank are each waiving the
                  right to a trial by jury or to participate in a class action.
                  Your rights will be determined by a neutral arbitrator, not a
                  judge or jury. The Federal Arbitration Act governs the
                  interpretation and enforcement of this Arbitration Agreement.
                </p>
                <p className="mb-4">
                  <strong>Parties Subject to this Arbitration Agreement</strong>
                  <br />
                  This Arbitration Agreement applies whenever there is a claim
                  between you and us. If a third party, such as an Indemnified
                  Party other than the Bank, is also involved in a claim between
                  you and us, or if a dispute arises between you and an
                  Indemnified Party other than the Bank relating to this
                  Agreement or your Oval Account, then the claim will be decided
                  with respect to the third party in arbitration as well, in
                  accordance with this Arbitration Agreement, and it must be
                  named as a party in accordance with the rules of procedure
                  governing the arbitration. No award or relief will be granted
                  by the arbitrator except on behalf of, or against, a named
                  party.
                </p>
                <p className="mb-4">
                  THIS ARBITRATION AGREEMENT DOES NOT APPLY TO YOU IF, AS OF THE
                  DATE OF THIS AGREEMENT, YOU ARE A COVERED BORROWER UNDER THE
                  FEDERAL MILITARY LENDING ACT. IF YOU WOULD LIKE MORE
                  INFORMATION ABOUT WHETHER YOU ARE COVERED BY THE MILITARY
                  LENDING ACT, IN WHICH CASE THIS ARBITRATION PROVISION DOES NOT
                  APPLY TO YOU, PLEASE CONTACT US AT{" "}
                  <strong>
                    <a href="mailto:info@useoval.com">info@useoval.com</a>
                  </strong>
                  .
                </p>
                <p className="mb-4">
                  <strong>Exclusions</strong>
                  <br />
                  You and we retain the right to pursue in small claims court
                  (or an equivalent state court) any dispute that is within that
                  court jurisdiction, so long as the disputes remain in such
                  court and advance only an individual claim for relief. If
                  either you or we fail to submit to binding arbitration of an
                  arbitrable dispute following lawful demand, the party so
                  failing will bear all costs and expenses incurred by the other
                  in compelling arbitration.
                </p>
                <p className="mb-4">
                  <strong>Your Right to Opt Out</strong>If you do not want this
                  Arbitration Agreement to apply to your Oval Account, you may
                  opt out by sending us written notice of your decision within
                  30 days of the opening of your Oval Account. Such notice must
                  clearly state that you wish to cancel or opt out of the
                  Arbitration Agreement section of this Agreement. It should
                  include your name, address, Oval Account number, and your
                  signature and must be mailed to 2631 plantation hollow ct
                  missouri city tx 77459. This is the sole and only method by
                  which you can opt out of this Arbitration Agreement. Your
                  exercise of the right to opt-out will not affect any remaining
                  terms of this Agreement and will not result in any adverse
                  consequence to you or your Oval Account. You agree that our
                  business records will be final and conclusive evidence with
                  respect to whether you cancelled or opted out of this
                  Arbitration Agreement in a timely and proper fashion.
                </p>
                <p className="mb-4">
                  <strong>
                    Prohibition of Class and Representative Actions and
                    Non-Individualized Relief
                  </strong>
                  <br />
                  YOU AGREE THAT YOU MAY BRING CLAIMS AGAINST THE BANK OR ANY
                  OTHER INDEMNIFIED PARTY ONLY ON AN INDIVIDUAL BASIS AND NOT AS
                  A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR
                  REPRESENTATIVE ACTION OR PROCEEDING. UNLESS BOTH YOU AND THE
                  BANK AGREE OTHERWISE, THE ARBITRATOR MAY NOT CONSOLIDATE OR
                  JOIN MORE THAN ONE PERSON OR PARTY CLAIMS AND MAY NOT
                  OTHERWISE PRESIDE OVER ANY FORM OF A CONSOLIDATED,
                  REPRESENTATIVE, OR CLASS PROCEEDING. ALSO, THE ARBITRATOR MAY
                  AWARD RELIEF (INCLUDING MONETARY, INJUNCTIVE, AND DECLARATORY
                  RELIEF) ONLY IN FAVOR OF THE INDIVIDUAL PARTY SEEKING RELIEF
                  AND ONLY TO THE EXTENT NECESSARY TO PROVIDE RELIEF
                  NECESSITATED BY THAT PARTY INDIVIDUAL CLAIM(S), EXCEPT THAT
                  YOU MAY PURSUE A CLAIM FOR AND THE ARBITRATOR MAY AWARD PUBLIC
                  INJUNCTIVE RELIEF UNDER APPLICABLE LAW TO THE EXTENT REQUIRED
                  FOR THE ENFORCEABILITY OF THIS PROVISION.
                </p>
                <p className="mb-4">
                  <strong>Pre-Arbitration Dispute Resolution</strong>
                  <br />
                  The Bank and Indemnified Parties are always interested in
                  resolving disputes amicably and efficiently, and most customer
                  concerns can be resolved quickly and to your satisfaction by
                  emailing customer support at{" "}
                  <strong>
                    <a href="mailto:info@useoval.com">info@useoval.com</a>
                  </strong>
                  . If such efforts prove unsuccessful, a party who intends to
                  seek arbitration must first send to the other, by certified
                  mail, a written Notice of Dispute (Notice). The Notice to the
                  Bank or Indemnified Party should be sent to Oval, 2631
                  plantation hollow ct missouri city tx 77459. The Notice must
                  (a) describe the nature and basis of the claim or dispute and
                  (b) set forth the specific relief sought. If you do not
                  resolve the claim with the Bank or Indemnified Party within 60
                  calendar days after the Notice is received, you or the Bank or
                  Indemnified Party, as applicable, may commence an arbitration
                  proceeding. During the arbitration, the amount of any
                  settlement offer made by any party will not be disclosed to
                  the arbitrator until after the arbitrator determines the
                  amount, if any, to which you or the Bank is entitled.
                </p>
                <p className="mb-4">
                  <strong>Arbitration Procedures</strong>
                  <br />
                  Arbitration will be conducted by a neutral arbitrator in
                  accordance with the American Arbitration Association (AAA)
                  rules and procedures, including the AAA Consumer Arbitration
                  Rules (collectively, the AAA Rules), as modified by this
                  Arbitration Agreement. For information on the AAA, please
                  visit its website,{" "}
                  <a href="http://www.adr.org">http://www.adr.org</a>.
                  Information about the AAA Rules and fees for consumer disputes
                  can be found at the AAA consumer arbitration page,{" "}
                  <strong>
                    <a href="http://www.adr.org/consumer_arbitration">
                      http://www.adr.org/consumer_arbitration
                    </a>
                  </strong>
                  . If there is any inconsistency between any term of the AAA
                  Rules and any term of this Arbitration Agreement, the
                  applicable terms of this Arbitration Agreement will control
                  unless the arbitrator determines that the application of the
                  inconsistent Arbitration Agreement terms would not result in a
                  fundamentally fair arbitration. The arbitrator must also
                  follow the provisions of this Agreement as a court would. All
                  issues are for the arbitrator to decide, including issues
                  relating to the scope, enforceability, and arbitrability of
                  this Arbitration Agreement. Although arbitration proceedings
                  are usually simpler and more streamlined than trials and other
                  judicial proceedings, the arbitrator can award the same
                  damages and relief on an individual basis that a court can
                  award to an individual under this Agreement and applicable
                  law. Decisions by the arbitrator are enforceable in court and
                  may be overturned by a court only for very limited
                  reasons.Unless the parties to the arbitration agree otherwise,
                  any arbitration hearings will take place in a reasonably
                  convenient location for both parties with due consideration of
                  their ability to travel and other pertinent circumstances. If
                  the parties are unable to agree on a location, the
                  determination will be made by AAA. If your claim is for
                  $10,000 or less, you may choose whether the arbitration will
                  be conducted solely on the basis of documents submitted to the
                  arbitrator, through a telephonic hearing, or by an in-person
                  hearing as established by the AAA Rules. If your claim exceeds
                  $10,000, the right to a hearing will be determined by the AAA
                  Rules. Regardless of the manner in which the arbitration is
                  conducted, the arbitrator will issue a reasoned written
                  decision sufficient to explain the essential findings and
                  conclusions on which the award is based.
                </p>
                <p className="mb-4">
                  <strong>Costs of Arbitration</strong>
                  <br />
                  Payment of all filing, administration, and arbitrator fees
                  (collectively, the Arbitration Fees) will be governed by the
                  AAA Rules, unless otherwise provided in this Arbitration
                  Agreement. If the value of the relief sought is $75,000 or
                  less, at your request, the Bank will pay all Arbitration Fees.
                  If the value of relief sought is more than $75,000 and you are
                  able to demonstrate to the arbitrator that you are
                  economically unable to pay your portion of the Arbitration
                  Fees or if the arbitrator otherwise determines for any reason
                  that you should not be required to pay your portion of the
                  Arbitration Fees, the Bank will pay your portion of such fees.
                  In addition, if you demonstrate to the arbitrator that the
                  costs of arbitration will be prohibitive as compared to the
                  costs of litigation, the Bank will pay as much of the
                  Arbitration Fees as the arbitrator deems necessary to prevent
                  the arbitration from being cost-prohibitive. Any payment of
                  attorneys' fees will be governed by the AAA Rules.
                </p>
                <p className="mb-4">
                  <strong>Confidentiality</strong>
                  <br />
                  All aspects of the arbitration proceeding, and any ruling,
                  decision, or award by the arbitrator, will be strictly
                  confidential for the benefit of all parties.
                </p>
                <p className="mb-4">
                  <strong>Severability</strong>
                  <br />
                  If a court or the arbitrator decides that any term or
                  provision of this Arbitration Agreement (other than the
                  Prohibition of Class and Representative Actions and
                  Non-Individualized Relief section above) is invalid or
                  unenforceable, the parties agree to replace such term or
                  provision with a term or provision that is valid and
                  enforceable and that comes closest to expressing the intention
                  of the invalid or unenforceable term or provision, and this
                  Arbitration Agreement will be enforceable as so modified. If a
                  court or the arbitrator decides that any of the provisions of
                  the Prohibition of Class and Representative Actions and
                  Non-Individualized Relief section are invalid or
                  unenforceable, then the entirety of this Arbitration Agreement
                  will be null and void, unless such provisions are deemed to be
                  invalid or unenforceable solely with respect to claims for
                  public injunctive relief. The remainder of this Arbitration
                  Agreement will continue to apply.
                </p>
                <p className="mb-4">
                  <strong>Future Changes to this Arbitration AGREEMENT</strong>
                  <br />
                  Notwithstanding any provision in this Agreement to the
                  contrary, if the Bank makes any future change to this
                  Arbitration Agreement (other than a change to the Notice
                  Address) while you have a Oval Account, you may reject any
                  such change by sending the Bank written notice within 30 days
                  of the change to the Notice Address. By rejecting any future
                  change, you are agreeing that you will arbitrate any dispute
                  covered by this Arbitration Agreement in accordance with the
                  terms of this Arbitration Agreement as of the date you first
                  accepted this Agreement (or accepted any subsequent changes to
                  this Agreement).
                </p>
              </div>
            </li>
          </ul>
          <h3 className="mb-4">FEE SCHEDULE</h3>
          <p className="mb-4">
            This Fee Schedule lists the fees that may be applicable to your Oval
            Account. You agree to pay all fees applicable to your Oval Account.
            We reserve the right to add or change fees at a later time, and we
            will notify you of any changes to our fees and this Fee Schedule, as
            required by applicable law. We may subtract these fees from your
            balance, even if the fee makes your balance negative.
          </p>
          <h3 className="mb-4">FEE SCHEDULE</h3>
          <legend>
            Oval Banking Services Fees <br />
            Oval will apply the following fees:
          </legend>
          <table className="mb-4 w-full text-left border-collapse max-w-[800px]">
            <thead>
              <tr className="h-8 border-gray-800 border-b-1 border-solid">
                <th className="sticky z-10 top-0 text-sm leading-6 font-semibold bg-white dark:bg-primary p-0 ">
                  Type
                </th>
                <th className="sticky z-10 top-0 text-sm leading-6 font-semibold bg-white dark:bg-primary p-0 ">
                  Fee
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="h-8">
                <td className="font-bold">Account Monthly Fee</td>
                <td>$0.0 per account </td>
              </tr>
              <tr className="h-8">
                <td className="font-bold">ACH Transactions</td>
                <td>
                  <p>Incoming: $0 per ACH transfer received</p>
                  <p>Outgoing: $0.25 per ACH transfer sent</p>
                </td>
              </tr>
              <tr className="h-8">
                <td className="font-bold">Domestic Wires</td>
                <td>
                  <p>Incoming: $30.00 per wire transfer received</p>
                  <p>Outgoing: $30.00 per wire transfer sent</p>
                </td>
              </tr>
              <tr className="h-8">
                <td className="font-bold">Remote Check Deposit</td>
                <td>$0.0 per check</td>
              </tr>
              <tr className="h-8">
                <td className="font-bold">ACH returns</td>
                <td>$15 per transaction</td>
              </tr>
              <tr className="h-8">
                <td className="font-bold">NSF Fees</td>
                <td>$35 per transaction</td>
              </tr>
              <tr className="h-8">
                <td className="font-bold">Stop Payment</td>
                <td>$35 per transaction</td>
              </tr>
              <tr className="h-8">
                <td className="font-bold">Research Request</td>
                <td>$15 per transaction</td>
              </tr>
            </tbody>
          </table>
          <h3 className="mb-4">FUNDS AVAILABILITY POLICY</h3>
          <p className="mb-4">
            PURPOSE. The information here describes our policy of holding
            deposited items in a Deposit Account before funds are made available
            to you for withdrawal.
          </p>
          <p className="mb-4">
            DETERMINING THE AVAILABILITY OF YOUR DEPOSIT. Our policy is to delay
            the availability of funds from your deposits. The length of the
            delay varies based on the type of deposit as set forth below. During
            the delay, you may not withdraw the funds, and we will not pay
            transactions from your Deposit Account using these funds.
          </p>
          <p className="mb-4">
            The length of the delay is counted in Business Days from the day of
            your deposit. If you make a deposit before 2:00PM PT on a Business
            Day, we will consider that day to be the day of your deposit.
            However, if you make a deposit after 2:00PM PT or on a day that is
            not a Business Day, we will consider the deposit made on the next
            Business Day.
          </p>
          <p className="mb-4">
            Same Day Availability. Electronic direct deposits (e.g., ACH,
            person-to-person transfers, and other EFTs your Deposit Account
            supports) will be available on the day we receive your deposit.
          </p>
          <p className="mb-4">
            Next Day Availability. Funds from the following deposits are
            available on the first Business Day after the day we receive your
            deposit:
          </p>
          <ul className="mb-4 list-disc">
            <li>The first $200.00 of check deposits.</li>
          </ul>
          <p className="mb-4">
            Second Business Day. Unless otherwise provided by this Agreement,
            all other funds from deposits will be made on the second Business
            Day after the day of your deposit.
          </p>
          <p className="mb-4">
            Longer Delays May Apply. Funds you deposit may be delayed for longer
            than two Business Days under the following circumstances:
          </p>
          <ul className="mb-4 list-disc">
            <li>
              We believe a check deposit you initiated will not be honored;
            </li>
            <li>Your deposits total more than $2,500 in any one day;</li>
            <li>
              You have overdrawn your Deposit Account repeatedly in the last six
              months; or
            </li>
            <li>
              There is an emergency, such as failure of communications or our
              systems.
            </li>
            <li>
              If we delay availability for one of these reasons, funds may not
              be available until the seventh Business Day after the day of your
              deposit. We will notify you if we delay your ability to withdraw
              funds for any of these reasons, and we will tell you when the
              funds will be available. If you will need the funds from a deposit
              right away, you should ask us when the funds will be available.
            </li>
          </ul>
          <p className="mb-4">
            Special Rules for New Accounts. If you are a new customer, the
            following special rules will apply during the first 60 days your
            Deposit Account is open.
          </p>
          <ul className="mb-4 list-disc">
            <li>
              Funds from electronic direct deposits to your Deposit Account will
              be available on the first Business Day after we receive the
              deposit.
            </li>
            <li>
              Funds from deposits of cash, wire transfers, and the first $2,500
              of a day's total deposits of cashier's, certified, teller's,
              traveler's, and federal, state and local government checks will be
              available on the first Business Day after the day of your deposit
              if the deposit meets certain conditions.
            </li>
            <li>
              The excess over $2,500 will be available no later than the ninth
              Business Day after the day of your deposit. Funds from all other
              deposits will be available on the third Business Day after the day
              of your deposit.
            </li>
          </ul>
          <p className="mb-4">
            Your Responsibility for Deposits. Even if we have made funds
            available to you and you have withdrawn the funds, you are still
            responsible for deposits that are returned to us unpaid and for any
            other problems involving your deposit.
          </p>
          <h3 className="mb-4">ELECTRONIC FUND TRANSFER AGREEMENT</h3>
          <p className="mb-4">
            Electronic Fund Transfers: Your Rights and Responsibilities
          </p>
          <p className="mb-4">
            This disclosure contains important information about your use of
            electronic fund transfer (EFT) services provided by the Bank in
            connection with your Oval Account. Whenever you accept or authorize
            EFTs to your Deposit Account, you agree to these terms and
            conditions, in addition to any other applicable limitations in this
            Agreement concerning deposits to and withdrawals from your Deposit
            Account. Please read this document carefully and retain it for
            future reference.
          </p>
          <p className="mb-4">
            Business Days. Our Business Days are every day except Saturdays,
            Sundays, and holidays on which banks in [Tennessee] are legally
            authorized to be closed.
          </p>
          <p className="mb-4">Types of Available EFTs</p>
          <ul className="mb-4 list-disc">
            <li>
              <i>Online ACH Transfers</i> You may use the App and request ACH
              transfers between your Deposit Account and a Linked External
              Account.
            </li>
            <li>
              <i>P2P Transfers. </i> You can make or receive transfers between
              your Deposit Account and the Deposit Account of another Oval user,
              using the person-to-person transfer services (P2P Transfer)
              provided in the App. P2P Transfers are subject to additional terms
              and conditions.
            </li>
          </ul>
          <p className="mb-4">
            Limits on the Type, Frequency or Amount of EFTs. Your Deposit
            Account may be subject to limitations on the amount or number of
            withdrawals that you may make from your Deposit Account, including
            EFTs. Please see Article IV of this Agreement and the Truth in
            Savings Disclosures. For security reasons, we may also, in our sole
            discretion, set limits on the dollar amounts of EFTs and on the
            number of EFTs that may be requested or initiated. To protect the
            security of the Bank or your Deposit Account, we may suspend your
            use of EFTs, as permitted by law.
          </p>
          <p className="mb-4">
            Managing Your Account Balance. You agree that the amount of any EFT
            debit transaction you authorize will not exceed the Available
            Balance in your Deposit Account used to make the transaction, or
            your Spending Limit. We do not have to allow any EFT that would
            create an overdraft in your Deposit Account. We may in our sole
            discretion choose to permit an EFT that would create an overdraft in
            your Deposit Account. If we are unable to complete an EFT or perform
            any other EFT service for any reason associated with your Deposit
            Account, the EFT or other service may not be completed and we will
            not notify you unless required by applicable law.
          </p>
          <h3 className="mb-4">Your Rights and Responsibilities</h3>
          <p className="mb-4">
            The use of EFT services described in this Agreement creates certain
            rights and responsibilities regarding these services as described
            below.
          </p>
          <p className="mb-4">Documentation of Your EFTs</p>
          <p className="mb-4">
            Periodic Statements. All EFT transactions will be reported on your
            periodic statement. See Section II.A.8 of this
          </p>
          <p className="mb-4">Agreement for more information.</p>
          <p className="mb-4">
            Direct Deposits. If you have arranged to have direct deposits made
            to your Deposit Account at least once every 60 days, the company
            making the deposit may tell you every time they send us the money.
            You may also email us at{" "}
            <a href="mailto:info@useoval.com">info@useoval.com</a> to find out
            whether or not the deposit has been made.
          </p>
          <p className="mb-4">
            Confirmation. You may write to us at
            <a href="mailto:info@useoval.com">info@useoval.com</a> to find out
            whether any EFT you request was successfully completed.
          </p>
          <p className="mb-4">
            Preauthorized and Other Regular (Automatic) Debits
          </p>
          <p className="mb-4">
            Right to Stop Payment and Procedure for Doing So
          </p>
          <p className="mb-4">
            If you have told us in advance to make regular payments out of your
            Deposit Account, you can stop any of the payments. Here is how
          </p>
          <p className="mb-4">
            Email to us at{" "}
            <a href="mailto:info@useoval.com">info@useoval.com</a> in time for
            us to receive your request three Business Days or more before the
            payment is scheduled to be made. If you contact us to stop a
            payment, please have the following information ready: your account
            number, the date the transfer is to be made, to whom the transfer is
            being made, and the amount of the scheduled transfer. If you call,
            we may also require you to put your request in writing and get it to
            us within 14 days after you call. We may charge you (see Fee
            Schedule for exact fees) for each stop-payment order you give.
            Stop-payment orders may expire after six months from the date of
            your stop-payment request, and you may be required to renew it in
            order to ensure its continued effectiveness.
          </p>
          <p className="mb-4">
            <i>
              Liability for Failure to Stop Payment of Preauthorized Transfer
            </i>
          </p>
          <p className="mb-4">
            If you order us to stop a preauthorized automatic debit three
            Business Days or more before the transfer is scheduled and we do not
            do so, we will be liable for your losses or damages.
          </p>
          <p className="mb-4">Notice of Varying Amounts</p>
          <p className="mb-4">
            If you have authorized regular payments out of your Deposit Account,
            and these regular payments may vary in amount, we or the person you
            are going to pay will tell you, 10 days before each payment, when it
            will be made and how much it will be. You may choose instead to get
            this notice only when the payment would differ by more than a
            certain amount from the previous payment, or when the amount would
            fall outside certain limits that you set.
          </p>
          <p className="mb-4">
            <i>
              Our Refusal to Pay a Preauthorized or Other Regular (Automatic)
              Debit
            </i>
          </p>
          <p className="mb-4">
            We reserve the right to refuse to pay a regular (automatic) debit,
            for example, if your Deposit Account has insufficient funds to cover
            such transfer or if we are unable to verify the ownership of or
            other information about the account to which the funds will be
            transferred. You may write to us at{" "}
            <a href="mailto:info@useoval.com">info@useoval.com</a> to request
            information about a refusal by us to pay a regular (automatic)
            debit.
          </p>
          <p className="mb-4">
            <i>Your Liability for Unauthorized Transfers</i>
          </p>
          <p className="mb-4">
            During your online Oval Account set-up, you will be invited to
            register your phone number and create Access Credentials to protect
            your Oval Account from unauthorized access. You are responsible for
            maintaining ownership of the mobile device associated with the phone
            number and security of your other Access Credentials.
          </p>
          <p className="mb-4">
            Tell us AT ONCE if you believe that any Access Credentials or device
            you use to access your Oval Account has been lost or stolen, that an
            EFT has been made without your permission, or that someone has
            transferred or may transfer money from your Deposit Account without
            your authorization. You may write to us at{" "}
            <a href="mailto:info@useoval.com ">info@useoval.com</a> or such
            other address as we may provide to you from time to time). Using our
            mobile chat messenger from the Oval application is the best way of
            keeping your possible losses down. You could lose all the money in
            your Deposit Account. If you tell us within two Business Days after
            you learn of the loss or theft of your Access Credentials or device,
            your liability will be limited to $50 if someone accesses your
            Deposit Account without your authorization.
          </p>
          <p className="mb-4">
            If you DO NOT tell us within two Business Days after you learn of
            the lost or theft of your Access Credentials or device, and we can
            prove we could have stopped someone from using your Access
            Credentials or device without your permission if you had told us,
            you could lose as much as $500.
          </p>
          <p className="mb-4">
            Also, if your statement shows transfers that you did not make, tell
            us AT ONCE. If you do not tell us within 60 days after the statement
            was mailed to you, you may not get back any money you lost after the
            60 days if we can prove that we could have stopped someone from
            taking the money had you told us in time. If a good reason (such as
            a long trip or a hospital stay) kept you from telling us, we will
            extend the time periods.
          </p>
          <p className="mb-4">
            If you grant authority to make transfers to another person who
            exceeds the authority granted, you are fully liable for any
            transfers until you notify us that transfers by that person are no
            longer authorized.
          </p>
          <p className="mb-4">In Case of Errors or Questions about your EFTs</p>
          <p className="mb-4">
            Write to us at{" "}
            <a href="mailto:info@useoval.com">info@useoval.com</a> as soon as
            you can, if you think your statement or receipt is wrong or if you
            need more information about a transfer listed on the statement or
            receipt. We must hear from you no later than 60 days after we send
            the FIRST statement on which the problem or error appeared.
          </p>
          <p className="mb-4">
            (1) Tell us your name and your account number (if any).
          </p>
          <p className="mb-4">
            (2) Describe the error or transfer you are unsure about, and explain
            as clearly as you can why you believe it is an error or why you need
            more information.
          </p>
          <p className="mb-4">
            (3) Tell us the dollar amount of the suspected error.
          </p>
          <p className="mb-4">
            We will determine whether an error occurred within 10 Business Days
            after we hear from you and will correct any error promptly. If we
            need more time, however, we may take up to 45 days to investigate
            your complaint or question. If we decide to do this, we will credit
            your Deposit Account within 10 Business Days for the amount you
            think is in error, so that you will have use of the money during the
            time it takes us to complete our investigation. If we ask you to put
            your complaint or question in writing and we do not receive it
            within 10 Business Days, we may not credit your Deposit Account.
          </p>
          <p className="mb-4">
            For errors involving new Oval Accounts, point-of-sale, or
            foreign-initiated transactions, we may take up to 90 days to
            investigate your complaint or question. For new Oval Accounts, we
            may take up to 20 days to credit your Deposit Account for the amount
            you think is in error.
          </p>
          <p className="mb-4">
            We will tell you the results within three Business Days after
            completing our investigation. If we decide that there was no error,
            we will send you a written explanation. You may ask for copies of
            the documents that we used in our investigation.
          </p>
          <p className="mb-4">
            Our Liability for Failure to Make a Transfer. If we do not complete
            a transfer to or from your Deposit Account on time or in the correct
            amount according to this Agreement, we will be liable for your
            losses or damages. However, there are some exceptions. We will not
            be liable, for instance:
          </p>
          <ul className="mb-4 list-disc">
            <li>
              If, through no fault of ours, you do not have enough money in your
              Deposit Account to make the transfer.
            </li>
            <li>
              If the transfer would go over the credit limit on your overdraft
              line of credit, if you have one.
            </li>
            <li>
              If an automated teller machine where you are making a transfer
              does not have enough cash. If a system or terminal you use to make
              a transfer was not working properly and you knew about the
              breakdown when you started the transfer.
            </li>
            <li>
              If circumstances beyond our control (such as fire or flood)
              prevent the transfer despite reasonable precautions that we have
              taken.
            </li>
            <li>There may be other exceptions stated in this Agreement.</li>
          </ul>
          <h3 className="mb-4">
            Charges for Transfers or the Right to Make Transfers
          </h3>
          <p className="mb-4">
            We may assess a fee for each EFT, or stop-payment order. Please see
            the applicable Fee Schedule to determine the applicable amount. The
            circumstances under which such charges will be assessed, as well as
            the amount of the charge, are included in the current Fee Schedule.
          </p>
          <h3 className="mb-4">Confidentiality</h3>
          <p className="mb-4">
            We will disclose information to third parties about your Oval
            Account or the transfers you make:
          </p>
          <p className="mb-4">
            (1) Where it is necessary for completing transfers;
          </p>
          <p className="mb-4">
            (2) In order to verify the existence and condition of your Oval
            Account for a third party, such as a credit bureau or merchant;
          </p>
          <p className="mb-4">
            (3) In order to comply with government agency or court orders;
          </p>
          <p className="mb-4">
            (4) To persons authorized by law in the course of their official
            duties;
          </p>
          <p className="mb-4">
            (5) To our employees, auditors, service providers, attorneys, or
            collection agents in the course of their duties;
          </p>
          <p className="mb-4">(6) As disclosed in our Privacy Notice; and,</p>
          <p className="mb-4">(7) If you give us your written permission.</p>
          <p className="mb-4">Amendments. We may change any provision of this Electronic Fund Transfer Agreement in our discretion. If we do, we will give you notice if and to the extent required by applicable law.
</p><p className="mb-4">Termination. We reserve the right to terminate your use of any or all of our EFT services for any reason and at any time without notifying you. You also have the right to terminate your use of the EFT services described in this Agreement at any time by calling us or writing to us. If you call, we may require you to put your request in writing and get it to us within 10 Business Days after you call. (Please note that e-mail, SMS/text or online notification will not meet the notice requirements of this section.) If you terminate your use of our EFT services and you have arranged for automatic (regular) transfers involving third parties, you are required to inform any third parties that the transfers will cease. Any termination of your use of our EFT services, whether initiated by you or us, will not affect any of your or our rights and obligations under this Agreement that have arisen before the effective date of such termination.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
