import React, { useContext, useState } from 'react';
import Router from 'next/router';
import withAuth from '../../helpers/withAuth';
import Verification from '../../components/layouts/verification';
import CodeInput from '../../components/inputs/code-input';
import MiniBtn from '../../components/buttons/mini-btn';
import Cookies from 'js-cookie';
import { getCookie, setCookie } from '../../helpers/cookie';
import { parseError } from '../../helpers';
import { resend_otp, verify_otp } from '../../server/api';
import ErrorBox from '../../components/error-box';
import SuccessModal from '../../components/success';
import { AuthContext } from '../../context/AuthContext';

const SMS = ({ query }) => {
  const { state } = useContext(AuthContext);

  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [tokenInput, setTokenInput] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const sendToken = async () => {
    setErrorMessage('');
    setLoading(true);
    try {
      let response = await resend_otp(query.otp_id);
      setErrorMessage(response.message);

      setCookie('otp_id', response.data.otp_id);
    } catch (error) {
      setErrorMessage(parseError(error));
    }
    setLoading(false);
  };

  const verifyToken = async () => {
    setErrorMessage('');
    setLoading(true);
    try {
      const token = Object.keys(tokenInput).map((t) => tokenInput[t]);
      if (!!token.join('')) {
        let response = await verify_otp(token.join(''));
        if (response.type === 'success') setShowSuccess(true);
        // if (response.type === 'successful') Router.push('/dashboard');
      } else throw Error('Please input the OTP sent to your email');
    } catch (error) {
      setErrorMessage(parseError(error));
    }
    setLoading(false);
  };

  const handleModelClose = () => {
    try {
      Router.push(`/verification/${query.organisation_type}`);
      setShowSuccess(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Verification>
        <div className="flex flex-col justify-center items-center space-y-8">
          <h4 className="text-[20px]">OTP Verification</h4>
          <ErrorBox
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
          />
          <div className="space-y-2 text-center">
            <p className="text-gray-400">
              A one time password has been sent to{' '}
              <span className="text-black font-medium">{query.email}</span>
            </p>
            {/* <p className="text-blue-500 cursor-pointer">Wrong Email?</p> */}
          </div>
          <CodeInput value={tokenInput} setValue={setTokenInput} />
          <p
            onClick={sendToken}
            className="text-grey-lightGray text-center mt-4"
          >
            Didn't receive OTP?{' '}
            <span className="text-blue-500 cursor-pointer">Resend</span>
          </p>
          <MiniBtn
            loading={loading}
            onClick={verifyToken}
            placeholder="Verify"
          />
        </div>
      </Verification>
      <SuccessModal
        status={showSuccess}
        closeModal={() => handleModelClose()}
      />
    </>
  );
};

SMS.getInitialProps = ({ query, res, req }) => {
  let phone = getCookie('phone', req);
  let email = getCookie('email', req);
  const otp_id = getCookie('otp_id', req);
  const organisation_type = getCookie('organisation_type', req);

  if (phone) return { query: { phone, email, otp_id, organisation_type } };
  else {
    if (res) {
      res.writeHead(302, {
        Location: '/',
      });

      res.end();
    } else Router.push('/auth/signup');
  }

  return { query: 'phone' };
};

export default SMS;
