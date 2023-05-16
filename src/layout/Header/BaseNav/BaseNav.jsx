import './Base_Nav.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import React, { useState } from 'react';
import phone from '../../../assets/base/phone.png';
import all from '../../../assets/base/all.svg';
import ToggleNav from './Toggle/ToggleNav';
import './Toggle/Toggle.css';
const BaseNav = () => {
  const [toggle, showToggle] = useState(false);
  return (
    <>
      <Navbar className="navbar p-0 position-relative  ">
        <Container>
          <Navbar.Brand
            href="#home"
            className="nav-brand "
            onClick={() => showToggle(!toggle)}
          >
            <img src={all} alt="all" className="px-1" />
            All Categories
            {toggle && <ToggleNav />}
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto gap-3">
              <a href="/" className="nav-link   ">
                Home
              </a>
              <a href="/About" className="nav-link">
                About
              </a>
              <a href="/Blogs" className="nav-link">
                Blogs
              </a>
              <a href="/Offer" className="nav-link">
                Offers
              </a>
              <a href="/Contact" className="nav-link">
                Contact
              </a>
            </Nav>
          </Navbar.Collapse>

          <a href="tel:+98343984" className="hot_line">
            <img src={phone} alt="phone" className="px-2" />
            Hotline : +03493498
          </a>
        </Container>
      </Navbar>
    </>
  );
};

export default BaseNav;
