import usa from '../../../assets/svg/usa.svg';
import uk from '../../../assets/svg/uk.svg';
import euro from '../../../assets/svg/euro.svg';

import ngn from '../../../assets/svg/nigeria.svg';
import { useState } from 'react';
import numeral from 'numeral';

import PrimaryBtn from '../../buttons/primary-btn';
import SecondaryBtn from '../../buttons/secondary-btn';
import SelectInput from '../../inputs/select-input';
import TextInput from '../../inputs/text-input';

const accounts = [
  { value: '0731703104', label: 'Nigeria' },
  { value: '0731703105', label: 'United States' },
  { value: '0731703106', label: 'Canada' },
  { value: '0731703106', label: 'United Kingdom' },
];

const sources = [
  { value: 'usd', label: 'US Dollars', icon: usa, conv: 502 },
  { value: 'pounds', label: 'British Pounds', icon: uk, conv: 600 },
  { value: 'euro', label: 'Euro bonds', icon: euro, conv: 580 },
];

export default function StepOne(props) {
  const { toggleModal, updateStep } = props;

  const [amount, setAmount] = useState('');
  const [conversion, setConversion] = useState('');
  const [activeSource, setActiveSource] = useState(sources[0]);

  // const [account, setAccount] = useState(null);
  // const [sourceAccount, setSourceAccount] = useState(null);
  // const handleSetAccount = (account) => setAccount(account);
  // const handleSourceAccount = (account) => setSourceAccount(account);

  return (
    <div className="px-2 bg-white">
      <h5 className="text-grey-title text-xl font-medium">Send Money</h5>
      <p className="leading-7 mb-6 text-sm text-grey-title">
        Send money in a few easy steps
      </p>
      <SelectInput
        label="Destination country"
        placeholder="Select destination country"
        data={accounts}
      />
      <SelectInput
        label="Source account"
        placeholder="Select source account"
        data={sources}
        onChange={(e) => {
          setActiveSource(
            sources.find((item) => item.value === e.target.value)
          );
        }}
      />
      <TextInput
        label="Enter amount"
        icon={activeSource.icon}
        withIcon
        value={amount}
        onChange={(e) => {
          setAmount(e.target.value);
          setConversion(
            numeral(e.target.value * activeSource.conv).format('0,00.00')
          );
        }}
        type="number"
      />
      <TextInput
        label="recipient recieves"
        disabled
        icon={ngn}
        withIcon
        value={conversion}
      />
      <div className="flex space-between items-center gap-x-4 w-full my-8">
        <SecondaryBtn
          placeholder="Cancel"
          style={{ width: '50%' }}
          onClick={() => toggleModal()}
        />
        <PrimaryBtn
          disabled
          placeholder="Continue"
          style={{ width: '50%', height: '2.5rem' }}
          onClick={() => updateStep(2)}
        />
      </div>
    </div>
  );
}
