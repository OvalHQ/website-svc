import React, { useContext, Fragment } from 'react';
import Router from 'next/router';
import Image from 'next/image';
import Avatar from 'boring-avatars';
import { FaBell, FaChevronDown } from 'react-icons/fa';
import { Menu, Transition } from '@headlessui/react';
import { FcMenu } from 'react-icons/fc';
import { MiscContext } from '../context/MiscContext';

import settings from '../assets/svg/settings.svg';
import information from '../assets/svg/information.svg';
import signout from '../assets/svg/signout.svg';
import notifications from '../assets/svg/notifications.svg';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const {
    state: { showSidebar },
    setSidebar,
  } = useContext(MiscContext);

  const {
    state: { user },
    logout,
  } = useContext(AuthContext);

  const handleSidebar = () => {
    setSidebar(!showSidebar);
  };

  return (
    <div className="flex justify-between lg:justify-end lg:px-12 px-4 pt-8 bg-white">
      <div>
        <div className="lg:hidden" onClick={handleSidebar}>
          <FcMenu
            className="block h-6 w-6 dark:text-gray-300 hover:text-primary"
            aria-hidden="true"
          />
        </div>
      </div>
      <div className="space-x-6 flex items-center">
        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button>
            <Image src={notifications} width={22} />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute mt-2 w-72 z-50 right-0 bg-white py-2 rounded-md shadow-lg focus:outline-none">
              <Menu.Item>
                <span
                  onClick={() => Router.push('/dashboard/account')}
                  className="flex gap-2 p-3 items-center text-sm hover:bg-gray-100"
                >
                  <span className="text-gray-800 text-sm">
                    Notification from oval
                  </span>
                  <span className="text-gray-400 text-sm">2 days ago</span>
                </span>
              </Menu.Item>
              <Menu.Item>
                <span
                  onClick={() => Router.push('/dashboard/account')}
                  className="flex gap-2 p-3 items-center text-sm hover:bg-gray-100"
                >
                  <span className="text-gray-800 text-sm">
                    Notification from oval
                  </span>
                  <span className="text-gray-400 text-sm">2 days ago</span>
                </span>
              </Menu.Item>
              <Menu.Item>
                <span
                  onClick={() => Router.push('/dashboard/account')}
                  className="flex gap-2 p-3 items-center text-sm hover:bg-gray-100"
                >
                  <span className="text-gray-800 text-sm">
                    Notification from oval
                  </span>
                  <span className="text-gray-400 text-sm">Yesterday</span>
                </span>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
        <div className="space-x-2 flex items-center">
          <div className="cursor-pointer hidden sm:inline-block">
            <Avatar
              size={32}
              name="Amelia Earhart"
              variant="beam"
              colors={['#00BCB0', '#5630FF']}
            />
          </div>
          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button>
              <div className="flex items-center space-x-1 cursor-pointer">
                <p className="text-lg">
                  {user &&
                    `${user.profile.name_first} ${user.profile.name_last}`}
                </p>
                <FaChevronDown size={14} />
              </div>
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute mt-2 w-48 right-0 bg-white py-2 rounded-md shadow-lg focus:outline-none">
                <Menu.Item>
                  <span
                    onClick={() => Router.push('/dashboard/account')}
                    className="flex gap-3 px-3 py-4 items-center text-sm hover:bg-gray-100 cursor-pointer"
                  >
                    <Image src={settings} className="w-24 h-24" />
                    <span className="text-gray-500 text-sm font-medium">
                      Account settings
                    </span>
                  </span>
                </Menu.Item>
                <Menu.Item>
                  <span
                    onClick={() => Router.push('/dashboard/account')}
                    className="flex gap-3 px-3 py-4 items-center text-sm hover:bg-gray-100 cursor-pointer"
                  >
                    <Image src={information} className="w-24 h-24" />
                    <span className="text-gray-500 text-sm font-medium">
                      Help center
                    </span>
                  </span>
                </Menu.Item>
                <Menu.Item>
                  <span
                    onClick={logout}
                    className="flex gap-3 px-3 py-4 items-center text-sm hover:bg-gray-100 cursor-pointer"
                  >
                    <Image src={signout} className="w-24 h-24" />
                    <span className="text-gray-500 text-sm font-medium">
                      Sign out
                    </span>
                  </span>
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
