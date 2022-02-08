import { useState } from 'react';
import TransactionsModal from '../modal';
import StepOne from './stepone';
import StepTwo from './steptwo';
import StepThree from './stepthree';
import StepFour from './stepfour';
export default function FundAccount({status, toggleModal}) {
  const [step, setStep] = useState(1);

  const updateStep = (step) => {
    if (typeof Number(step) === 'number') { 
      setStep(step);
    }
  };
  return (

    <TransactionsModal
      status={status}
      closeModal={toggleModal}
    >
      {step === 1 && <StepOne {...{ toggleModal, updateStep }} />}
      {step === 2 && <StepTwo {...{ toggleModal, updateStep }} />}
      {step === 3 && <StepThree {...{ toggleModal, updateStep }} />}
      {step === 4 && <StepFour {...{ toggleModal, updateStep }} />}
    </TransactionsModal>
  );
}
