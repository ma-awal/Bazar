import React from 'react';
import { RxCross1 } from 'react-icons/rx';

import './Bar_slide.css';

const SearchSlide = (props) => {
  const { show, onClose } = props;
  return (
    <div className={`Bar_slide ${show ? 'is-Active' : ''}`}>
      <RxCross1 className="mb-3 mt-2  " onClick={onClose} />
      <div className=" px-4  flex_cente ">
        <ul className="bar_link list-group text-center">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/About"> About us</a>
          </li>
          <li>
            <a href="/Blogs">Blogs</a>
          </li>
          <li>
            <a href="/Offer">Offer</a>
          </li>
          <li>
            <a href="/Contact">Contact us</a>
          </li>
          <li>
            <a href="/Faqs">Faq</a>
          </li>
          <li>
            <a href="telto:Hotline:09666683">Hotline:09666683</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SearchSlide;
