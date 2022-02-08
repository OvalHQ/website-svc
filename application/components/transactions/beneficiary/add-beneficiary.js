import TransactionsModal from '../modal';
import PrimaryBtn from '../../buttons/primary-btn';
import SecondaryBtn from '../../buttons/secondary-btn';
import SelectInput from '../../inputs/select-input';
import TextInput from '../../inputs/text-input';

const accounts = [
  { value: '0731703104', label: 'Access Bank (Opeyemi)' },
  { value: '0731703105', label: 'UBA (Oluwaseun)' },
  { value: '0731703106', label: 'First Bank (Dale Opeyemi)' },
];

export default function AddBeneficiary({ status, toggleModal }) {
  return (

    <TransactionsModal
      status={status}
      closeModal={toggleModal}
    >
      <div className="px-2 bg-white">
        <h5 className="text-grey-title text-xl font-medium">Add Beneficiary</h5>
        <p className="leading-7 mb-6 text-sm text-grey-title">Fill in beneficiary details</p>
        <SelectInput
          label="Bank"
          placeholder="Select bank"
          data={accounts}
        />
        <TextInput label="Account number" placeholder="Enter account number" />
        <TextInput type="email" placeholder="Enter beneficiary email address"
          label="Email address (Optional)"
        />
        <TextInput label="Verify details" />
        <div className="flex space-between items-center gap-x-4 w-full my-8">
          <SecondaryBtn
            placeholder="Cancel"
            style={{ width: '50%' }}
            onClick={() => toggleModal()}
          />
          <PrimaryBtn
            placeholder="Save"
            style={{ width: '50%', height: '2.5rem' }}
            onClick={() => toggleModal()}
          />
        </div>
      </div>
    </TransactionsModal>
  );
}