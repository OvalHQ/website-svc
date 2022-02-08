import React from 'react';
import numeral from 'numeral';
import classNames from 'classnames';
import DashboardLayout from '../../components/layouts/dashboard';
import TableStatus from '../../components/table-status';
import { flags } from '../../helpers/constants';

const Transactions = () => {
  const transactions = [
    {
      id: '8ba106d7-9d',
      date: '08/28/2018 05:58 PM',
      type: 'Credit',
      amount: '$6,036.00',
      beneficiaryName: 'Floyd Miles',
      status: 'failed'
    },
    {
      id: 'aa299799-2e',
      date: '03/14/2019 01:31 AM',
      type: 'Debit',
      amount: 'N883,000',
      beneficiaryName: 'Jacob Jones',
      status: 'pending'
    },
    {
      id: '3315816b-3d',
      date: '08/28/2018 05:58 PM',
      type: 'Credit',
      amount: '$4,036.00',
      beneficiaryName: 'Eleanor Pena',
      status: 'success'
    },
]

  return (
    <DashboardLayout title="Transactions">
      <div className="overflow-x-scroll">
        <table className="w-full">
          <thead className="border-b">
            <tr className="text-gray-400 font-semibold">
              <td className="text-xs p-3">Date</td>
              <td className="text-xs p-3">Transaction Type</td>
              <td className="text-xs p-3">Amount</td>
              <td className="text-xs p-3">Transaction ID</td>
              <td className="text-xs p-3">Beneficiary's Name</td>
              <td className="text-xs p-3">Status</td>
            </tr>
          </thead>
          <tbody>
            {transactions.map(transaction => (
              <tr key={transaction.id} className="border-b">
                <td className="text-xs p-3">{transaction.date}</td>
                <td className="text-xs p-3">{transaction.type}</td>
                <td className="text-xs p-3">{transaction.amount}</td>
                <td className="text-xs p-3">{transaction.id}</td>
                <td className="text-xs p-3">{transaction.beneficiaryName}</td>
                <td className="text-xs p-3">
                  <TableStatus status={transaction.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default Transactions;
