import { useState, useEffect, useContext } from 'react';
import Image from 'next/image';
import Router from 'next/router';
import { FcExport } from 'react-icons/fc';

import backtwotone from '../assets/svg/backtwotone.svg';
import accountActive from '../assets/svg/account-active.svg';
import accountInactive from '../assets/svg/account-inactive.svg';
import profileActive from '../assets/svg/profile-active.svg';
import profileInactive from '../assets/svg/profile-inactive.svg';
import teamsActive from '../assets/svg/teams-active.svg';
import teamsInactive from '../assets/svg/teams-inactive.svg';
import { AuthContext } from '../context/AuthContext';

const InnerSidebar = () => {
  const { logout } = useContext(AuthContext);

  const [active, setActive] = useState('profile');
  const MARGIN_LEFT = 'ml-10';
  useEffect(() => {
    Router.pathname.includes('/profile') && setActive('profile');
    Router.pathname.includes('/account') && setActive('account');
    Router.pathname.includes('/teams') && setActive('teams');
  }, []);

  const navigateTo = (route) => {
    if (route === active) return;

    setActive(route);
    Router.push(`/dashboard/${route}`);
  };

  return (
    <aside className="fixed border border-gray-100 h-screen w-64 flex flex-col py-14 bg-white z-40">
      <h3
        className={`text-grey-dark cursor-pointer ${MARGIN_LEFT}`}
        onClick={() => Router.push('/dashboard/')}
      >
        Oval
      </h3>
      <div className="mt-16 space-y-8">
        <div className="flex items-start">
          <div
            onClick={() => Router.push('/dashboard')}
            className={`bg-primary flex space-x-2 items-center cursor-pointer p-1.5 rounded-md ${MARGIN_LEFT}`}
          >
            <Image src={backtwotone} />
            <span className="text-white	">Back</span>
          </div>
        </div>
        <h4 className={`text-grey-dark text-lg font-medium ${MARGIN_LEFT}`}>
          Settings
        </h4>

        <div
          className="flex items-center relative"
          onClick={() => navigateTo('profile')}
        >
          <div
            className={`flex space-x-4 items-center cursor-pointer ${MARGIN_LEFT}`}
          >
            <Image
              src={active === 'profile' ? profileActive : profileInactive}
            />
            <span
              className={
                active === 'profile' ? 'text-primary' : 'text-gray-500'
              }
            >
              Profile
            </span>
          </div>
          {active === 'profile' && (
            <span className="w-1.5 absolute -left-0 h-10 bg-primary rounded" />
          )}
        </div>

        <div
          className="flex items-center relative"
          onClick={() => Router.push('account')}
        >
          <div
            className={`flex space-x-4 items-center cursor-pointer ${MARGIN_LEFT}`}
          >
            <Image
              src={active === 'account' ? accountActive : accountInactive}
            />
            <span
              className={
                active === 'account' ? 'text-primary' : 'text-gray-500'
              }
            >
              Account
            </span>
          </div>
          {active === 'account' && (
            <span className="w-1.5 absolute -left-0 h-10 bg-primary rounded" />
          )}
        </div>

        <div
          className="flex items-center relative"
          onClick={() => Router.push('profile')}
        >
          <div
            className={`flex space-x-4 items-center cursor-pointer ${MARGIN_LEFT}`}
          >
            <Image src={active === 'teams' ? teamsActive : teamsInactive} />
            <span
              className={active === 'teams' ? 'text-primary' : 'text-gray-500'}
            >
              Teams
            </span>
          </div>
          {active === 'teams' && (
            <span className="w-1.5 absolute -left-0 h-10 bg-primary rounded" />
          )}
        </div>

        <div className="flex items-center relative" onClick={logout}>
          <div
            className={`flex space-x-4 items-center cursor-pointer ${MARGIN_LEFT}`}
          >
            <FcExport size={20} className="text-red-500" />
            <span className="text-gray-500">Sign out</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default InnerSidebar;
