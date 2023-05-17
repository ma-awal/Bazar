import React from 'react';
import './Header.css';

import TopNav from './TopNav/TopNav';
import MidNav from './MidNav/MidNav';
import BaseNav from './BaseNav/BaseNav';
import MainNav from './MainNav/MainNav';
const Header = () => {
  return (
    <main
      id="header"
      className=" position-sticky top-0 end-0 start-0 bottom-0     "
    >
      <section className="d-none d-xl-block">
        <TopNav />
        <MidNav />
        <BaseNav />
      </section>
      <section className="d-xl-none   ">
        <MainNav />
      </section>
    </main>
  );
};

export default Header;
