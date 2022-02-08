import { useContext, useEffect, useState } from 'react';
import router from 'next/router';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import OnboardingLayout from '../../../components/layouts/onboarding';
import TextInput from '../../../components/inputs/text-input';
import SelectInput from '../../../components/inputs/select-input';
import Button from '../../../components/buttons/primary-btn';
import { Countries } from '../../../helpers/constants';
import { parseError } from '../../../helpers';
import { AuthContext } from '../../../context/AuthContext';
import { publicRoute } from '../../../middleware/authentication';
import Cookies from 'js-cookie';
import PhoneInput from '../../../components/inputs/phone-input';

const sortBy = (label) => {
  return function (a, b) {
    if (a[label] < b[label]) return -1;
    if (a[label] > b[label]) return 1;
    return 0;
  };
};

const UserSignup = (props) => {
  const {
    state: { error },
    register,
    clear_error_message,
  } = useContext(AuthContext);

  const [type_of_user, setTypeOfUser] = useState('');

  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    country: 'Nigeria',
    email: '',
    country_code: 'NG',
    phone: '',
    password: '',
    confirm_password: '',
    agree_to_terms: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    if (e.target.name === 'agree_to_terms')
      setFormData({ ...formData, agree_to_terms: e.target.checked });
    else setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCountryChange = (code) => {
    setFormData({ ...formData, country_code: code });
  };

  const handleSubmit = (e) => {
    setLoading(true);
    setErrorMessage('');
    try {
      setErrors({});
      const personal_exclusive = ['first_name', 'last_name'];

      const business_exclusive = ['business_name'];

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

        if (!formData.agree_to_terms) {
          setErrors({
            ...temp,
            'agree to terms':
              'To signup, you have to agree to the terms and conditions',
          });
        }

        throw Error(
          `Please fill in the following fields ${empty_fields.join(', ')}`
        );
      } else {
        if (formData.password !== formData.confirm_password) {
          setErrors({
            ...errors,
            password: 'Passwords do not match',
            'confirm password': 'Passwords do not match',
          });
          throw Error('Passwords do not match');
        }

        if (formData.password.length < 8) {
          setErrors({
            ...errors,
            password: 'Passwords is too short',
            'confirm password': 'Passwords is too short',
          });
          throw Error('Passwords is too short');
        }

        register({
          ...formData,
          name_first: formData.first_name,
          name_last: formData.last_name,
          account_type: type_of_user.toLowerCase(),
        });
      }
    } catch (error) {
      setErrorMessage(parseError(error));
      setLoading(false);
    }
  };

  useEffect(() => {
    const { user_type } = router.query;
    setTypeOfUser(user_type);

    if (router.query.user_type.toLocaleLowerCase() === 'personal')
      setFormData({ first_name: '', last_name: '', ...formData });
    if (router.query.user_type.toLocaleLowerCase() === 'business')
      setFormData({ business_name: '', ...formData });
  }, []);

  useEffect(() => {
    setErrorMessage(error);
    setLoading(false);
  }, [error]);

  return (
    <OnboardingLayout title={`${type_of_user} sign up`}>
      <div className="w-full">
        <div className="max-w-lg mx-auto px-8 py-16">
          <h4 className="text-[34px] text-grey-dark">Sign up</h4>
          <p className="text-blue-offBlue mb-4">
            {type_of_user === 'business'
              ? 'Please register your business to process'
              : 'Please enter your credentials to proceed'}
          </p>
          {!!errorMessage && (
            <div
              onClick={() => clear_error_message('')}
              className="transform transition duration-500 bg-red-500 my-4 text-sm text-white w-full p-2 flex justify-center items-center"
            >
              {errorMessage}
            </div>
          )}
          {type_of_user === 'personal' &&
            PersonalSignup({
              formData,
              errors,
              handleChange,
              handleSubmit,
              handleCountryChange,
              loading,
            })}
          {type_of_user === 'business' &&
            BusinessSignup({
              formData,
              errors,
              handleChange,
              handleSubmit,
              handleCountryChange,
              loading,
            })}
          {/* <Button placeholder="Continue" /> */}
        </div>
      </div>
    </OnboardingLayout>
  );
};

function PersonalSignup({
  formData,
  errors,
  handleChange,
  handleSubmit,
  handleCountryChange,
  loading,
}) {
  let country_arr = [];

  Object.keys(Countries).map((code) =>
    country_arr.push({
      label: Countries[code],
      key: code,
      value: code,
    })
  );

  return (
    <div className="space-y-4 w-full">
      <div className="flex space-x-4 w-full">
        <TextInput
          label="First Name"
          type="text"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
        />
        <TextInput
          label="Last Name"
          type="text"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
        />
      </div>

      {(!!errors['first name'] || !!errors['last name']) && (
        <span className="text-xs text-red-500">
          {errors['first name']}; {errors['last name']}
        </span>
      )}

      <SelectInput
        label="Country"
        data={country_arr.sort(sortBy('label'))}
        type="countries"
        name="country"
        value={formData.country}
        onChange={handleChange}
      />
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
      <PhoneInput
        data={country_arr}
        onChange={handleChange}
        value={formData.phone}
        name="phone"
        label="Phone Number"
        country={formData.country_code}
        setCountry={(e) => handleCountryChange(e.target.value)}
      />
      {!!errors['phone'] && (
        <span className="text-xs text-red-500">{errors['phone']}</span>
      )}

      <TextInput
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      {!!errors['password'] && (
        <span className="text-xs text-red-500">{errors['password']}</span>
      )}
      <TextInput
        label="Confirm Password"
        type="password"
        name="confirm_password"
        value={formData.confirm_password}
        onChange={handleChange}
      />
      {!!errors['confirm password'] && (
        <span className="text-xs text-red-500">
          {errors['confirm password']}
        </span>
      )}
      <div className="flex items-center space-x-4">
        <input
          name="agree_to_terms"
          type="checkbox"
          value={formData.agree_to_terms}
          onClick={handleChange}
        />
        <span className="text-grey-dark ">
          I agree to the terms & conditions
        </span>
      </div>
      {!!errors['agree to terms'] && (
        <span className="text-xs text-red-500">{errors['agree to terms']}</span>
      )}
      <Button loading={loading} onClick={handleSubmit} placeholder="Sign up" />
      <p className="text-grey-lightGray text-center mt-4">
        Already have an account?{' '}
        <Link href="/auth/login/">
          <span className="text-blue-ink cursor-pointer">Sign in</span>
        </Link>
      </p>
    </div>
  );
}

function BusinessSignup({
  formData,
  errors,
  handleChange,
  handleSubmit,
  handleCountryChange,
  loading,
}) {
  let country_arr = [];

  Object.keys(Countries).map((code) =>
    country_arr.push({
      label: Countries[code],
      key: code,
      value: code,
    })
  );

  return (
    <div className="space-y-6 w-full">
      <div className="flex space-x-4 w-full">
        <TextInput
          label="First Name"
          type="text"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
        />
        <TextInput
          label="Last Name"
          type="text"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
        />
      </div>
      {(!!errors['first name'] || !!errors['last name']) && (
        <span className="text-xs text-red-500">
          {errors['first name']}; {errors['last name']}
        </span>
      )}

      <SelectInput
        label="Country"
        data={country_arr.sort(sortBy('label'))}
        type="countries"
      />
      <TextInput
        label="Business Name"
        type="text"
        name="business_name"
        value={formData.business_name}
        onChange={handleChange}
      />
      {!!errors['business name'] && (
        <span className="text-xs text-red-500">{errors['business name']}</span>
      )}
      <TextInput
        label="Work Email Address"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      {!!errors['email'] && (
        <span className="text-xs text-red-500">{errors['email']}</span>
      )}
      <PhoneInput
        data={country_arr}
        onChange={handleChange}
        value={formData.phone}
        name="phone"
        label="Phone Number"
        country={formData.country_code}
        setCountry={(e) => handleCountryChange(e.target.value)}
      />
      {!!errors['phone'] && (
        <span className="text-xs text-red-500">{errors['phone']}</span>
      )}
      <TextInput
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      {!!errors['password'] && (
        <span className="text-xs text-red-500">{errors['password']}</span>
      )}
      <TextInput
        label="Confirm Password"
        type="password"
        name="confirm_password"
        value={formData.confirm_password}
        onChange={handleChange}
      />
      {!!errors['confirm password'] && (
        <span className="text-xs text-red-500">
          {errors['confirm password']}
        </span>
      )}
      <div className="flex items-center space-x-4">
        <input
          name="agree_to_terms"
          type="checkbox"
          value={formData.agree_to_terms}
          onClick={handleChange}
        />
        <span className="text-grey-dark ">
          I agree to the terms & conditions
        </span>
      </div>
      {!!errors['agree to terms'] && (
        <span className="text-xs text-red-500">{errors['agree to terms']}</span>
      )}
      <Button loading={loading} placeholder="Sign up" onClick={handleSubmit} />

      <p className="text-grey-lightGray text-center mt-4">
        Already have an account?{' '}
        <Link href="/auth/login/">
          <span className="text-blue-ink cursor-pointer">Sign in</span>
        </Link>
      </p>
    </div>
  );
}

/* 
// This function gets called at build time
export async function getStaticPaths() {
  return {
    paths: [
      { params: { user_type: 'business' } },
      { params: { user_type: 'personal' } },
    ],
    fallback: false,
  };
}

// This also gets called at build time
export async function getStaticProps(ctx) {
  const { params } = ctx;
  publicRoute(ctx);

  // Pass post data to the page via props
  return { props: { params } };
} */

UserSignup.getInitialProps = (ctx) => {
  publicRoute(ctx);
  return {
    props: {
      params: {
        paths: [
          { params: { user_type: 'business' } },
          { params: { user_type: 'personal' } },
        ],
      },
    },
  };
};

export default UserSignup;
