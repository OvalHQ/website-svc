import Image from 'next/image';
import PrimaryBtn from '../../buttons/primary-btn';

import copy from '../../../assets/svg/copy.svg';


export default function StepTwo(props) {
  const { toggleModal, updateStep } = props;

  return (
    <div className="px-2 bg-white">
      <h5 className="text-grey-title text-xl font-medium">Fund Wallet</h5>
      <p className="leading-7 mb-6 text-sm text-grey-title">Please send the exact amount to the account number below</p>
      <h3 className="text-2xl font-extrabold text-darkGray text-center my-3">$2300</h3>
      <div className="border border-gray-200 rounded p-4 relative">
        <span className="absolute right-3 top-3">
          <Image src={copy} size={24} />
        </span>
        <p className="text-gray-500 font-medium text-sm mb-2">Bank Name:
          <span className="inline-block ml-1 text-darkGray"> Silvergate Bank</span>
        </p>
        <p className="text-gray-500 font-medium text-sm mb-2">Bank Beneficiary:
          <span className="inline-block ml-1 text-darkGray"> Operating II(FLUTTERWAVE INC)</span>
        </p>
        <p className="text-gray-500 font-medium text-sm mb-2">Account Number:
          <span className="inline-block ml-1 text-darkGray">5090024828</span>
        </p>
        <p className="text-gray-500 font-medium text-sm mb-2">Swift Code:
          <span className="inline-block ml-1 text-darkGray">SIVGUS66XXX</span>
        </p>
        <p className="text-gray-500 font-medium text-sm mb-2">Beneficiary Address:
          <span className="inline-block ml-1 text-darkGray">1323, COLUMBUS AVENUE, SAN FRANSCISCO USA</span>
        </p>
        <p className="text-gray-500 font-medium text-sm mb-2">Bank Address:
          <span className="inline-block ml-1 text-darkGray">4250 Executive Square Suite 300 La Jolla, CA 92037</span>
        </p>
        <p className="text-gray-500 font-medium text-sm mb-2">Routing Number:
          <span className="inline-block ml-1 text-darkGray">322286803</span>
        </p>

      </div>
      <div className="flex space-between items-center gap-x-4 w-full my-8">
        <PrimaryBtn
          placeholder="I have made payment"
          style={{ height: '2.5rem' }}
          onClick={() => updateStep(3)}
        />
      </div>
    </div>
  );
}
