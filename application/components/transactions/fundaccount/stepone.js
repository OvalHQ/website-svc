import PrimaryBtn from '../../buttons/primary-btn';
import SecondaryBtn from '../../buttons/secondary-btn';
import SelectInput from '../../inputs/select-input';
import TextInput from '../../inputs/text-input';

const accounts = [
  { value: '0731703104', label: 'Access Bank (Opeyemi)' },
  { value: '0731703105', label: 'UBA (Oluwaseun)' },
  { value: '0731703106', label: 'First Bank (Dale Opeyemi)' },
];

const sources = [
  { value: 'usd', label: 'US Dollars' },
  { value: 'pounds', label: 'British Pounds' },
  { value: 'euro', label: 'Euro bonds' },
];

export default function StepOne(props) {
  const { toggleModal, updateStep} = props;

  return (
    <div className="px-2 bg-white">
      <h5 className="text-grey-title text-xl font-medium">Fund Account</h5>
      <p className="leading-7 mb-6 text-sm text-grey-title">Fund your account in a few easy steps</p>
      <SelectInput
        label="Account"
        placeholder="Select account"
        data={accounts}
      />
      <SelectInput
        label="funding type"
        placeholder="Select funding type"
        data={sources}
      />
      <TextInput label="Amount" placeholder="Enter amount" />
      <div className="flex space-between items-center gap-x-4 w-full my-8">
        <SecondaryBtn
          placeholder="Cancel"
          style={{ width: '50%' }}
          onClick={() => toggleModal()}
        />
        <PrimaryBtn
          placeholder="Continue"
          style={{width: '50%', height: '2.5rem'}}
          onClick={() => updateStep(2)}
        />
      </div>
    </div>
  );
}
