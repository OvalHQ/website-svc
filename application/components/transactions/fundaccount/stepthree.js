import Image from 'next/image';
import PrimaryBtn from '../../buttons/primary-btn';
import { flags } from '../../../helpers/constants';

import copy from '../../../assets/svg/copy.svg';

export default function StepTwo(props) {
  const { toggleModal, updateStep } = props;

  return (
    <div className="px-2 bg-white">
      <h5 className="text-grey-title text-xl font-medium">Fund Wallet</h5>
      <p className="leading-7 mb-6 text-sm text-grey-title">Please send the exact amount to the account number below</p>
      <h3 className="text-2xl font-extrabold text-darkGray text-center my-3">
        {flags['NGN'].symbol} 2300
      </h3>
      <div className="border border-gray-200 rounded p-4 relative">
        <span className="absolute right-3 top-3">
          <Image src={copy} size={24} />
        </span>
        <p className="text-darkGray font-medium text-base text-center mb-1">0068311639</p>
        <p className="text-darkGray font-medium text-base text-center mb-1">Access Bank (Diamond)</p>
        <p className="text-darkGray font-medium text-base text-center mb-1">Oval Inc</p>
      </div>
      <div className="flex space-between items-center gap-x-4 w-full my-8">
        <PrimaryBtn
          placeholder="I have made payment"
          style={{ height: '2.5rem' }}
          onClick={() => updateStep(4)}
        />
      </div>
    </div>
  );
}
