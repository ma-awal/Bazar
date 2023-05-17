import React from 'react';
import { RxCross1 } from 'react-icons/rx';

import './Bar_slide.css';
import { Link } from 'react-router-dom';

const SearchSlide = (props) => {
  const { show, onClose } = props;
  return (
    <div className={`Bar_slide ${show ? 'is-Active' : ''}`}>
      <RxCross1 className="mb-3 mt-2  " onClick={onClose} />
      <div className=" px-4  flex_cente ">
        <ul className="bar_link list-group text-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About"> About us</Link>
          </li>
          <li>
            <Link to="/Blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/Offer">Offer</Link>
          </li>
          <li>
            <Link to="/Contact">Contact us</Link>
          </li>
          <li>
            <Link to="/Faqs">Faqs</Link>
          </li>
          <li>
            <Link to="telto:Hotline:09666683">Hotline:09666683</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SearchSlide;
