import Link from 'next/link';
import Button from '../../components/buttons/primary-btn';
import OnboardingLayout from '../../components/layouts/onboarding';
import TextInput from '../../components/inputs/text-input';
import router from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { parseError } from '../../helpers';
import ErrorBox from '../../components/error-box';
import { publicRoute } from '../../middleware/authentication';

const Login = () => {
  const {
    state: { error },
    login,
    clear_error_message,
  } = useContext(AuthContext);

  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    setLoading(true);
    setErrorMessage('');
    try {
      let empty_fields = Object.keys(formData).map(
        (key) => !!!formData[key] && key.split('_').join(' ')
      );
      empty_fields = empty_fields.filter((field) => !!field);

      if (empty_fields.length > 0) {
        let temp = {};
        empty_fields.map(
          (field) => (temp[field] = `Please enter your ${field}`)
        );
        setErrors(temp);

        throw Error(
          `Please fill in the following fields ${empty_fields.join(', ')}`
        );
      } else {
        login(formData);
      }
    } catch (err) {
      setErrorMessage(parseError(err));
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!!error) setErrorMessage(error);
    setLoading(false);
  }, [error]);

  useEffect(() => {
    setErrorMessage('');
  }, []);

  return (
    <OnboardingLayout title="SIgn In">
      <div className="w-full h-full flex flex-col justify-center mx-auto p-8 max-w-md">
        <div>
          <h4 className="text-[34px] text-grey-dark">Sign in</h4>
          <p className="text-blue-offBlue">
            Please enter your credentials to proceed.
          </p>
        </div>

        <ErrorBox
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
        />
        <div className="mt-12 mb-6 space-y-4 w-full">
          <TextInput
            label="Email Address"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {!!errors['email'] && (
            <span className="text-xs text-red-500">{errors['email']}</span>
          )}
          <TextInput
            label="Password"
            type="password"
            withLink=""
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {!!errors['password'] && (
            <span className="text-xs text-red-500">{errors['password']}</span>
          )}
        </div>
        <Button
          loading={loading}
          placeholder="Sign in"
          onClick={handleSubmit}
        />
        <p className="text-grey-lightGray text-center mt-4">
          Don't have an account?{' '}
          <Link href="/auth/signup/">
            <span className="text-blue-ink cursor-pointer">Sign up</span>
          </Link>
        </p>
      </div>
    </OnboardingLayout>
  );
};

Login.getInitialProps = publicRoute;

export default Login;
