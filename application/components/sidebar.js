import { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import Router from 'next/router';
import { FcExport } from 'react-icons/fc';
import Image from 'next/image';

import dashboard_active from '../assets/svg/dashboard-active.svg';
import dashboard_inactive from '../assets/svg/dashboard-inactive.svg';
import transactions_active from '../assets/svg/transactions-active.svg';
import transactions_inactive from '../assets/svg/transactions-inactive.svg';
import { AuthContext } from '../context/AuthContext';

const Sidebar = () => {
  const { logout } = useContext(AuthContext);

  const [isDashboard, setIsDashboard] = useState('');
  const [isTransaction, setIsTransaction] = useState('');

  useEffect(() => {
    setIsDashboard(Router.pathname === '/dashboard' && true);
    setIsTransaction(Router.pathname.includes('/transactions') ? true : false);
  }, []);

  return (
    <aside className="fixed border border-gray-100 h-screen w-64 flex flex-col items-center py-14 bg-white z-40">
      <h3
        className="text-grey-dark cursor-pointer"
        onClick={() => Router.push('/dashboard/')}
      >
        Oval
      </h3>
      <div className="mt-16 space-y-8">
        <div
          onClick={() => Router.push('/dashboard/')}
          className="flex space-x-4 items-center cursor-pointer"
        >
          <Image
            src={isDashboard ? dashboard_active : dashboard_inactive}
            size={20}
          />
          <span className={`${isDashboard ? 'text-primary' : 'text-gray-500'}`}>
            Dashboard
          </span>
        </div>
        <div
          onClick={() => Router.push('/dashboard/transactions')}
          className="flex space-x-4 items-center cursor-pointer"
        >
          <Image
            src={isTransaction ? transactions_active : transactions_inactive}
            size={20}
          />
          <span
            className={`${isTransaction ? 'text-primary' : 'text-gray-500'}`}
          >
            Transactions
          </span>
        </div>
      </div>
      <div
        onClick={logout}
        className="flex space-x-4 items-center cursor-pointer mt-auto"
      >
        <FcExport size={20} className="text-red-500" />
        <span className={`text-gray-500`}>Sign out</span>
      </div>
    </aside>
  );
};

export default Sidebar;
