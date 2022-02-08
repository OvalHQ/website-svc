import React, { useContext, useEffect, useState } from 'react';
import Head from 'next/head';
import { MiscContext } from '../../context/MiscContext';
import Navbar from '../navbar';
import Sidebar from '../sidebar';
import InnerSidebar from '../innersidebar';

const DashboardLayout = ({ title, children, sidebar }) => {
  const {
    state: { showSidebar },
    setSidebar,
  } = useContext(MiscContext);

  useEffect(() => {
    hidePanel();
  }, []);

  const hidePanel = () => {
    if (window.screen.width < 1024) {
      setSidebar(false);
    } else setSidebar(true);
  };

  return (
    <>
      <Head>
        <title>Oval | {title}</title>
      </Head>
      {showSidebar && (sidebar === 'inner' ? <InnerSidebar /> : <Sidebar />)}
      <Navbar />
      <main className="lg:ml-64 lg:px-12 px-4 bg-white">
        {title}
        <div className="py-8" onClick={hidePanel}>
          {children}
        </div>
      </main>
    </>
  );
};

export default DashboardLayout;
