import React, { useState } from 'react';
import credit from '../../assets/footer/creadit.png';
import { Link } from 'react-router-dom';
import BottomNav from './BottomNav/BottomNav';
import { MdLocationOn } from 'react-icons/md';
import './Footer.css';
import FooterLinks from './FooterLinks';
import Footer_Data from '../../data/Footer_Data';

import { MdEmail } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { AiFillInstagram, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
const Footer = () => {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <footer className=" ">
      <div className="footer   pb-5 pb-lg-0 mb-lg-0 mb-3 ">
        <div className="container py-4">
          <div className="row    gy-5 gy-lg-0">
            <div className="col-12 col-lg-3     ">
              <div lassName="box text-center w-100  ">
                <h3 className=" display-4 bazar  text-center text-lg-start ">
                  Bazar
                </h3>

                <div className="social_link d-flex gap-1 justify-content-center justify-content-lg-start     w-100 ">
                  <a className="me-1" href="https://www.facebook.com">
                    <BsFacebook className="text-white fs-5" />
                  </a>

                  <a className="me-1" href="https://www.twitter.com">
                    <BsTwitter className="text-white fs-5" />
                  </a>

                  <a className="me-1" href="https://www.instagram.com">
                    <AiFillInstagram className="text-white fs-5" />
                  </a>
                  <a className="me-1" href="https://www.instagram.com">
                    <AiFillLinkedin className="text-white fs-5" />
                  </a>
                  <a className="me-1" href="https://www.instagram.com">
                    <AiFillMail className="text-white fs-5" />
                  </a>
                </div>
              </div>
            </div>

            <FooterLinks
              footerData={Footer_Data}
              handleTabClick={handleTabClick}
            />

            <div className="col-12 col-md-4 col-lg-3       ">
              <div className="links box_1  ">
                <h6 className="d-inline-block border-2 position-relative">
                  STORE LOCATION
                </h6>
                <ul className="list-group    ">
                  <li>
                    <a href="/Store" className="w-100" target="blank">
                      <MdLocationOn className=" fs-5 text-white  " />
                      Bohuli,Sirajganj,Dhaka
                    </a>
                  </li>
                  <li>
                    <a href="tel:++054395483" target="blank">
                      <BsFillTelephoneFill className="fs-6 " />
                      ++054395483
                    </a>
                  </li>
                  <li>
                    <a href="mailto:maawal797@gmail.com" target="blank">
                      <MdEmail className="fs-6 " />
                      maawal797@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bor_der  border-top border-6 py-3">
          <div className="container    ">
            <div className="row">
              <div className="col">
                <span className="text-white">
                  All right reserve by@Designer
                </span>
              </div>
              <div className="col">
                <img src={credit} className="img-fluid" alt="name" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomNav />
    </footer>
  );
};

export default Footer;
