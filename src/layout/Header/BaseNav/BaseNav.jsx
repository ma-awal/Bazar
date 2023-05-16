import './Base_Nav.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import React, { useState } from 'react';
import phone from '../../../assets/base/phone.png';
import all from '../../../assets/base/all.svg';
import ToggleNav from './Toggle/ToggleNav';
import './Toggle/Toggle.css';
import { Link } from 'react-router-dom';
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
              <Link to="/" className="nav-link   ">
                Home
              </Link>
              <Link to="/About" className="nav-link">
                About
              </Link>
              <Link to="/Blogs" className="nav-link">
                Blogs
              </Link>
              <Link to="/Offer" className="nav-link">
                Offers
              </Link>
              <Link to="/Contact" className="nav-link">
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>

          <Link to="tel:+98343984" className="hot_line">
            <img src={phone} alt="phone" className="px-2" />
            Hotline : +03493498
          </Link>
        </Container>
      </Navbar>
    </>
  );
};

export default BaseNav;
