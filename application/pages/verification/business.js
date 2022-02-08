import React, { useContext, useEffect, useState } from 'react';
import router from 'next/router';
import Verification from '../../components/layouts/verification';
import MiniBtn from '../../components/buttons/mini-btn';
import TextInput from '../../components/inputs/text-input';
import CheckRadio from '../../components/check-radio';
import SuccessModal from '../../components/success';
import UploadModal from '../../components/upload-modal';
import { privateRoute } from '../../middleware/authentication';
import { updateKYC } from '../../server/api';
import { AuthContext } from '../../context/AuthContext';

const BusinessVerification = () => {
  const { state } = useContext(AuthContext);

  useEffect(() => {
    if (state.is_authenticated && state.user.organisation.type !== 'business')
      router.push('/dashboard');
    if (!state.is_authenticated && state.user.organisation.type !== 'business')
      router.push('/auth/login');
  }, []);

  const [bvn, setBVN] = useState('');
  const [regNumber, setRegNumber] = useState('');
  const [upload_type, setUploadType] = useState('');
  const [modalStatus, setModalStatus] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleModalStatus = () => {
    router.push('/dashboard');
    setModalStatus(false);
  };

  const handleDocument = async (params) => {
    setLoading(true);
    try {
      const response = await updateKYC({
        bvn,
        cac_upload: params,
        bn_number: regNumber,
      });

      setIsOpen(false);
      if (response.data) setModalStatus(true);
    } catch (error) {
      console.log(error);
      alert('Error reaching server');
    }
    setLoading(false);
  };

  const handleVerify = () => {
    setLoading(true);
    try {
      if (!!!bvn || !!!regNumber || !!!upload_type)
        throw Error('All fields are important');

      setIsOpen(true);
    } catch (error) {
      alert(error.message);
    }
    setLoading(false);
  };

  return (
    <>
      <Verification>
        <div className="flex flex-col w-full justify-center space-y-8">
          <div className="text-center space-y-2">
            <h4 className="text-[20px]">Verify my Business</h4>
          </div>

          <TextInput
            label="Bank Verification Number (BVN)"
            value={bvn}
            onChange={(e) => setBVN(e.target.value)}
          />
          <TextInput
            label="Business Registration Number"
            value={regNumber}
            onChange={(e) => setRegNumber(e.target.value)}
          />

          <div className="space-y-4">
            <p className="text-grey-lightGray text-base">Upload Documents</p>
            <CheckRadio
              isActive={upload_type === 'cac'}
              label="Certificate of registration from CAC"
              onChange={() => setUploadType('cac')}
            />
          </div>

          <div className="flex justify-center w-full">
            <MiniBtn
              loading={loading}
              placeholder="Verify"
              onClick={handleVerify}
            />
          </div>
        </div>
      </Verification>
      <SuccessModal status={modalStatus} closeModal={handleModalStatus} />
      <UploadModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        name="cac_document"
        handleComplete={handleDocument}
      />
    </>
  );
};

BusinessVerification.getInitialProps = privateRoute;

export default BusinessVerification;
