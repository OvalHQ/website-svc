import Image from 'next/image';
import TransactionsModal from './modal';
import updown from '../../assets/svg/updown.svg';

export default function TransactionDetails({ status, toggleModal }) {
  return (

    <TransactionsModal
      status={status}
      closeModal={toggleModal}
    >

      <div className="px-2 bg-white">
        <div className="flex items-center gap-4">
          <Image src={updown} />
          <div>
            <h5 className="text-grey-title text-lg font-semibold">Transaction name</h5>
            <p className="leading-7 text-xs text-grey-title">12th july 2021</p>
          </div>
        </div>
        <div className="border-t border-gray-100 my-5 -m-10" />
        <div className="flex justify-between flex-start w-full mb-7">
          <div className="text-left">
            <span className="block text-gray-700 text-sm font-light mb-1">Transaction type</span>
            <span className="block text-xs text-green-700">Credit</span>
          </div>
        </div>
        <div className="flex justify-between flex-start w-full mb-7">
          <div className="text-left">
            <span className="block text-gray-400 text-sm font-light mb-2">Amount</span>
            <span className="block text-gray-700 text-sm">₦50,000</span>
          </div>
          <div className="text-right">
            <span className="block text-gray-400 text-sm font-light mb-2">Reference</span>
            <span className="block text-gray-700 text-sm">XDDP5266723283356</span>
          </div>
        </div>
        <div className="flex justify-between flex-start w-full mb-7">
          <div className="text-left">
            <span className="block text-gray-400 text-sm font-light mb-2">Status</span>
            <span className="block text-green-700 text-sm rounded-lg py-1 px-4 bg-green-100">Successful</span>
          </div>
          <div className="text-right">
            <span className="block text-gray-400 text-sm font-light mb-2">New balance</span>
            <span className="block text-gray-700 text-sm">₦500,000,000</span>
          </div>
        </div>
      </div>
    </TransactionsModal>
  );
}