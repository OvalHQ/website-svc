import PrimaryBtn from '../../buttons/primary-btn';
import SecondaryBtn from '../../buttons/secondary-btn';
import SelectInput from '../../inputs/select-input';
import TextInput from '../../inputs/text-input';

export default function TransactionSummary(props) {
  const { toggleModal } = props;

  return (
    <div className="px-2 bg-white">
      <h5 className="text-grey-title text-xl font-medium">Transaction Summary</h5>
      <div className="border-t border-gray-100 my-5 -m-10" />
      <div className="flex justify-between flex-start w-full mb-7">
        <div className="text-left">
          <span className="block text-gray-400 text-sm font-light mb-2">Recepient name</span>
          <span className="block text-gray-700 text-sm uppercase">NIMI MARTINS</span>
        </div>
        <div className="text-right">
          <span className="block text-gray-400 text-sm font-light mb-2">Amount</span>
          <span className="block text-gray-700 text-sm">$50,000</span>
        </div>
      </div>
      <div className="flex justify-between flex-start w-full mb-7">
        <div className="text-left">
          <span className="block text-gray-400 text-sm font-light mb-2">Account number</span>
          <span className="block text-gray-700 text-sm">0068311639</span>
        </div>
        <div className="text-right">
          <span className="block text-gray-400 text-sm font-light mb-2">Source account</span>
          <span className="block text-gray-700 text-sm">Access Bank</span>
        </div>
      </div>
      <div className="flex justify-between flex-start w-full mb-7">
        <div className="text-left">
          <span className="block text-gray-400 text-sm font-light mb-2">Recipient country</span>
          <span className="block text-gray-700 text-sm">Nigeria</span>
        </div>
        <div className="text-right">
          <span className="block text-gray-400 text-sm font-light mb-2">Source account</span>
          <span className="block text-gray-700 text-sm">Access Bank</span>
        </div>
      </div>
      <div className="flex justify-between flex-start w-full mb-7">
        <div className="text-left">
          <span className="block text-gray-400 text-sm font-light mb-2">You send</span>
          <span className="block text-gray-700 text-sm">$50,000</span>
        </div>
        <div className="text-right">
          <span className="block text-gray-400 text-sm font-light mb-2">Recipient recieves</span>
          <span className="block text-gray-700 text-sm">₦500,000</span>
        </div>
      </div>
      <div className="flex space-between items-center gap-x-4 w-full my-8">
        <SecondaryBtn
          placeholder="Cancel"
          style={{ width: '50%' }}
          onClick={() => toggleModal()}
        />
        <PrimaryBtn
          placeholder="Continue"
          style={{ width: '50%', height: '2.5rem' }}
          onClick={() => toggleModal()}
        />
      </div>
    </div>
  );
}
