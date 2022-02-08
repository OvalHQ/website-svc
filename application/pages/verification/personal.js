import React, { useContext, useEffect, useState } from 'react';
import router from 'next/router';
import Image from 'next/image';
import Verification from '../../components/layouts/verification';
import MiniBtn from '../../components/buttons/mini-btn';
import ButtonPlain from '../../components/buttons/plain-btn';
import fingerprint from '../../assets/svg/fingerprint.svg';
import passport from '../../assets/svg/passport.svg';
import ImageSelector from '../../components/image-selector';
import SelectInput from '../../components/inputs/select-input';
import TextInput from '../../components/inputs/text-input';
import CheckRadio from '../../components/check-radio';
import UploadModal from '../../components/upload-modal';
import { CgChevronLeft } from 'react-icons/cg';
import { privateRoute } from '../../middleware/authentication';
import { updateKYC } from '../../server/api';
import SuccessModal from '../../components/success';
import { AuthContext } from '../../context/AuthContext';

const PersonalVerification = () => {
  const { state } = useContext(AuthContext);

  useEffect(() => {
    if (state.is_authenticated && state.user.organisation.type !== 'personal')
      router.push('/dashboard');
    if (!state.is_authenticated && state.user.organisation.type !== 'personal')
      router.push('/auth/login');
  }, []);

  const [verification_type, setVerificationType] = useState('');
  const [step, setStep] = useState(null);
  const [upload_type, setUploadType] = useState('');
  const [modalStatus, setModalStatus] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [bvn, setBVN] = useState('');
  const [dob, setDOB] = useState('');
  const [id_type, setIdType] = useState('NIN');
  const [id_number, setIdNumber] = useState('');

  const handleUpload = async (upload) => {
    setLoading(true);
    try {
      let params = {
        id_type,
        id_number,
      };
      params[upload_type] = upload;

      const response = await updateKYC(params);

      if (response.data) setModalStatus(true);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <Verification>
      <div className="flex flex-col justify-center items-center space-y-8">
        {step === null && (
          <>
            <div className="text-center space-y-2">
              <h4 className="text-[20px]">Identity Verification</h4>
              <p className="text-gray-400 text-sm">
                How would you like to verify your identity
              </p>
            </div>
            <div className="md:flex justify-between w-full">
              <ImageSelector
                image={<Image src={fingerprint} />}
                isActive={verification_type === 'BVN'}
                onChange={() => setVerificationType('BVN')}
                label={`Bank Verification Number\n(BVN)`}
              />

              <ImageSelector
                image={<Image src={passport} />}
                isActive={verification_type === 'ID'}
                onChange={() => setVerificationType('ID')}
                label={` Government Issued ID Card`}
              />
            </div>
            <MiniBtn
              placeholder="Continue"
              onClick={() => setStep(verification_type)}
              disabled={!!!verification_type}
            />
            <ButtonPlain
              label="skip this step and continue"
              onClick={() => router.push('/dashboard')}
            />
          </>
        )}

        {step !== null && (
          <div
            className="flex items-center float-left w-full text-primary cursor-pointer"
            onClick={() => setStep(null)}
          >
            <CgChevronLeft className="w-5 h-5" /> BACK{' '}
          </div>
        )}
        {step === 'ID' &&
          IDVerification({
            upload_type,
            setUploadType,
            setIsOpen,
            loading,
            setLoading,
            id_type,
            id_number,
            setIdType,
            setIdNumber,
          })}
        {step === 'BVN' &&
          BVNVerification({
            bvn,
            dob,
            loading,
            setBVN,
            setDOB,
            setLoading,
            setModalStatus,
          })}
      </div>

      <UploadModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        name="personal_documents"
        handleComplete={handleUpload}
      />

      <SuccessModal
        status={modalStatus}
        closeModal={() => {
          router.push('/dashboard');
          setModalStatus(false);
        }}
      />
    </Verification>
  );
};

export function IDVerification({
  upload_type,
  setUploadType,
  setIsOpen,
  loading,
  setLoading,
  id_type,
  id_number,
  setIdType,
  setIdNumber,
}) {
  const data = [
    {
      label: `Nation ID (NIN)`,
      value: 'nin',
    },
    {
      label: `Driver's License`,
      value: 'drivers_license',
    },
    {
      label: `Permanent Voter's Card`,
      value: 'voters_card',
    },
    {
      label: `Passport`,
      value: 'passport',
    },
  ];

  const handleVerify = async () => {
    setLoading(true);
    try {
      console.log(id_number, id_type);
      if (!!!id_number || !!!id_type) throw Error('All fields are important');
      if (!!!upload_type) throw Error('please choose a Document Type');

      setIsOpen(true);
    } catch (error) {
      alert(error.message);
    }
    setLoading(false);
  };

  return (
    <div className="w-full space-y-8">
      <div className="text-center space-y-2">
        <h4 className="text-[20px]">Verify my Identity</h4>
      </div>

      <SelectInput
        label="Identification type"
        data={data}
        onChange={(e) => setIdType(e.target.value)}
      />
      <TextInput
        label="Identification Number"
        value={id_number}
        onChange={(e) => setIdNumber(e.target.value)}
      />

      <div className="space-y-4">
        <p className="text-grey-lightGray text-base">Upload Documents</p>
        <CheckRadio
          isActive={upload_type === 'id_upload'}
          label="Upload National identification"
          onChange={() => setUploadType('id_upload')}
        />
        <CheckRadio
          isActive={upload_type === 'id_live_upload'}
          label="Upload a Selfie of yourself holding your ID"
          onChange={() => setUploadType('id_live_upload')}
        />
      </div>
      <div className="flex justify-center w-full">
        <MiniBtn
          loading={loading}
          placeholder="Continue"
          onClick={handleVerify}
        />
      </div>
    </div>
  );
}

export function BVNVerification({
  bvn,
  dob,
  setBVN,
  setDOB,
  loading,
  setLoading,
  setModalStatus,
}) {
  const handleBVN = async () => {
    setLoading(true);
    try {
      if (!!!bvn || !!!dob) throw Error('All fields are important');
      const response = await updateKYC({
        bvn,
        dob,
      });

      if (response.data) setModalStatus(true);
    } catch (error) {
      alert(error.message);
    }
    setLoading(false);
  };

  return (
    <div className="w-full space-y-8">
      <div className="text-center space-y-2">
        <h4 className="text-[20px]">Verify my Identity</h4>
      </div>

      <TextInput
        label="Bank Verification Number (BVN)"
        value={bvn}
        onChange={(e) => setBVN(e.target.value)}
      />
      <TextInput
        label="Date of Birth (DOB)"
        type="date"
        value={dob}
        onChange={(e) => setDOB(e.target.value)}
      />

      <div className="flex justify-center w-full pt-8">
        <MiniBtn loading={loading} placeholder="Verify" onClick={handleBVN} />
      </div>
    </div>
  );
}

PersonalVerification.getInitialProps = privateRoute;

export default PersonalVerification;
