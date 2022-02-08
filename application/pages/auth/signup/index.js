import { useState } from 'react';
import { useRouter } from 'next/router';
import { FaUser } from 'react-icons/fa';
import { HiUserGroup } from 'react-icons/hi';
import Button from '../../../components/buttons/primary-btn';
import OnboardingLayout from '../../../components/layouts/onboarding';
import Selector from '../../../components/selector';
import { publicRoute } from '../../../middleware/authentication';

const Signup = () => {
  const router = useRouter();
  const [type_of_user, setTypeOfUser] = useState('');

  return (
    <OnboardingLayout title="Sign Up">
      <div className="mx-auto max-w-lg px-8 py-16">
        <h4 className="text-[34px] text-grey-dark">Sign up</h4>
        <p className="text-blue-offBlue">
          Tell us about how you want to use Oval
        </p>

        <div className="mt-12 mb-6 grid grid-cols-2 gap-8">
          <Selector
            icon={
              <FaUser
                className={
                  type_of_user === 'personal' ? 'text-primary' : 'text-gray-400'
                }
                height={16}
                width={16}
              />
            }
            isActive={type_of_user === 'personal'}
            title="For myself"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cras scelerisque elit."
            setActive={() => setTypeOfUser('personal')}
          />
          <Selector
            icon={
              <HiUserGroup
                className={
                  type_of_user === 'business' ? 'text-primary' : 'text-gray-400'
                }
                height={16}
                width={16}
              />
            }
            isActive={type_of_user === 'business'}
            title="For my business"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cras scelerisque elit."
            setActive={() => setTypeOfUser('business')}
          />
        </div>
        <Button
          placeholder="Continue"
          disabled={!!!type_of_user}
          onClick={() => router.push(`/auth/signup/${type_of_user}/`)}
        />
      </div>
    </OnboardingLayout>
  );
};

Signup.getInitialProps = publicRoute;

export default Signup;
