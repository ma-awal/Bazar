import React, { useState } from 'react';
import faq from '../../../assets/top/t1.png';
import track from '../../../assets/top/t2.png';
import locator from '../../../assets/top/t3.png';
import email from '../../../assets/top/t4.png';
import Locator from '../../../components/Locator/Locator';
import './Top_nav.css';

const TopNav = () => {
  const [locate, setLocate] = useState(false);
  return (
    <section className="Top_nav py-1">
      <div className="container">
        <div className=" flex_row ">
          <div className="left_icon flex_row gap-2">
            <span className="">
              <img src={faq} className="pe-2" />
              <a href="/Faqs">FAQ's</a>
            </span>
            <span>
              <img src={track} className="px-2" />
              <a href="/TrackOrder">Track Order</a>
            </span>
            <span onClick={() => setLocate(true)}>
              <img src={locator} className="px-2" />
              <a className="border-0">Locator</a>
              {locate && <Locator />}
            </span>
          </div>
          <div className="right_icon flex_row ">
            <select>
              <option selected>En</option>
              <option value="">Bangla</option>
              <option value="">Hindi</option>
            </select>
            <span className="pe-0 me-0">
              <img src={email} className="px-2" />
              <a className="border-0 pe-0 me-0" href="http://www.google.com">
                Support @gmail.com
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopNav;
