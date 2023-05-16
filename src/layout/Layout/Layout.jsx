import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Header className="position-relative" />
      <Outlet className=" position-absolute top-0 start-0 end-0" />
      <Footer />
    </div>
  );
};

export default Layout;
