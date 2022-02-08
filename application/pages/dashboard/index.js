import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { RiSendPlaneFill } from 'react-icons/ri';
import Beneficiary from '../../components/beneficiary';
import CurrencyCard from '../../components/cards/currency-card';
import DashboardLayout from '../../components/layouts/dashboard';
import SendMoney from '../../components/transactions/sendmoney';
import FundAccount from '../../components/transactions/fundaccount';
import AddBeneficiary from '../../components/transactions/beneficiary/add-beneficiary';
import TransactionDetails from '../../components/transactions/transaction-details';
import TableStatus from '../../components/table-status';

import updown from '../../assets/svg/updown.svg';
import add from '../../assets/svg/add.svg';
import { privateRoute } from '../../middleware/authentication';
import { AuthContext } from '../../context/AuthContext';

const Dashboard = ({ query }) => {
  const { auth } = query;

  const [user, setUser] = useState(false);
  const [sendMoneyStatus, setSendStatus] = useState(false);
  const [fundAccountStatus, setFundStatus] = useState(false);
  const [addBeneficiaryStatus, setAddBeneficiary] = useState(false);
  const [transactionDetailsStatus, setTransactionDetails] = useState(false);
  const status = 'pending';
  const status_style = classNames({
    'text-green-500': status === 'successful',
    'text-red-500': status === 'failed',
    'text-yellow-400': status === 'pending',
  });

  const toggleSendMoney = () => setSendStatus(!sendMoneyStatus);
  const toggleFundAccount = () => setFundStatus(!fundAccountStatus);
  const addBeneficiary = () => setAddBeneficiary(!addBeneficiaryStatus);
  const toggleTransactionDetails = () =>
    setTransactionDetails(!transactionDetailsStatus);

  const transactions = [
    {
      id: '8ba106d7-9d',
      date: '08/28/2018 05:58 PM',
      type: 'Credit',
      amount: '$6,036.00',
      beneficiaryName: 'Floyd Miles',
      status: 'failed',
    },
    {
      id: 'aa299799-2e',
      date: '03/14/2019 01:31 AM',
      type: 'Debit',
      amount: 'N883,000',
      beneficiaryName: 'Jacob Jones',
      status: 'pending',
    },
    {
      id: '3315816b-3d',
      date: '08/28/2018 05:58 PM',
      type: 'Credit',
      amount: '$4,036.00',
      beneficiaryName: 'Eleanor Pena',
      status: 'success',
    },
  ];

  useEffect(() => {
    if (auth.user) setUser(auth.user);
  }, []);

  return (
    <>
      <DashboardLayout title="Dashboard">
        <h3 className="text-gray-800">
          Hi {user.profile && user.profile.name_first}!
        </h3>
        <div className="my-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <CurrencyCard currency="NGN" amount={250000} />
          <CurrencyCard currency="CAD" amount={250} />
          <CurrencyCard currency="USD" amount={5000} />
        </div>
        <div className="mt-12 grid md:grid-cols-2">
          <div className="my-8">
            <div className="mb-8">
              <h1 className="text-xs uppercase">actions</h1>
            </div>
            <div className="md:flex items-center space-y-4 md:space-x-4 md:space-y-0">
              <button
                onClick={toggleFundAccount}
                className="bg-primary flex items-center px-2 py-4 space-x-2 rounded-lg cursor-pointer"
              >
                <Image src={add} size={24} />
                <span className="text-white">Fund Account</span>
              </button>
              <button
                onClick={toggleSendMoney}
                className="bg-white flex items-center px-2 py-4 space-x-2 rounded-lg cursor-pointer border border-primary"
              >
                <RiSendPlaneFill className="text-primary" size={20} />
                <span className="">Send Money</span>
              </button>
            </div>
          </div>
          {/*  */}
          <div className="my-8">
            <div className="mb-8 flex justify-between">
              <h1 className="text-xs uppercase">Beneficiaries</h1>
              <p className="text-xs text-secondary">View All</p>
            </div>
            <div className="flex-column sm:flex flex-wrap item-center sm:space-x-4 space-y-2">
              <button
                onClick={addBeneficiary}
                className="bg-primary flex items-center w-36 justify-evenly h-16 rounded-lg cursor-pointer"
              >
                <Image src={add} size={24} />
                <span className="text-white">Add New</span>
              </button>
              <Beneficiary person={{ name: 'Nimi Martins' }} />
              <Beneficiary person={{ name: 'Obasi Christopher' }} />
            </div>
          </div>
        </div>
        <div className="mt-12 lg:grid 2xl:grid-cols-2">
          <div className="my-8">
            <div className="mb-8 flex">
              <h1 className="text-xs uppercase">Recent Transactions</h1>
            </div>
            <div className="overflow-x-scroll">
              <table className="w-full">
                <thead>
                  <tr className="text-gray-400 font-medium">
                    <td className="text-sm">Type</td>
                    <td className="text-sm">Amount</td>
                    <td className="text-sm hidden sm:table-cell">Date</td>
                    <td className="text-sm">Beneficiary name</td>
                    <td className="text-sm">Status</td>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction) => (
                    <tr key={transaction.id} className="border-b">
                      <td className="text-xs md:text-md">
                        <div className="col-span-2 flex sm:space-x-4 items-center">
                          <span className="hidden sm:block">
                            <Image src={updown} />
                          </span>
                          <p>{transaction.type}</p>
                        </div>
                      </td>
                      <td className="text-xs mr-2 sm:mr-0">
                        {transaction.amount}
                      </td>
                      <td className="text-xs hidden sm:table-cell">
                        {transaction.date}
                      </td>
                      <td className="text-xs mr-2 sm:mr-0">
                        {transaction.beneficiaryName}
                      </td>
                      <td className="text-xs mr-2 sm:mr-0">
                        <TableStatus status={transaction.status} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </DashboardLayout>
      <SendMoney status={sendMoneyStatus} toggleModal={toggleSendMoney} />
      <FundAccount status={fundAccountStatus} toggleModal={toggleFundAccount} />
      <AddBeneficiary
        status={addBeneficiaryStatus}
        toggleModal={addBeneficiary}
      />
      <TransactionDetails
        status={transactionDetailsStatus}
        toggleModal={toggleTransactionDetails}
      />
    </>
  );
};

Dashboard.getInitialProps = privateRoute;

export default Dashboard;
