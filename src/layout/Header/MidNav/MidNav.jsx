import React, { useState } from 'react';
import './Mid_nav.css';
import Input from './Input/Input';

import UserLogin from '../../../components/UserLogin/UserLogin';
import CartHover from '../../../components/CartHover/CartHover';
import Category_Data from '../../../data/Category_Data';
import { BiUser } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsCart } from 'react-icons/bs';
const MidNav = () => {
  const [modal, setModal] = useState(false);
  const handleClose = () => {
    setModal(false);
  };
  return (
    <section className="Mid_nav  ">
      <div className="container ">
        <div className=" row  flex_row py-1 position-relative ">
          <div className="col-2">
            <a href="/" className="nav_brand text-decoration-none">
              Bazar
            </a>
          </div>
          <Input />
          <div className="col-3   right_icon  flex_row  ">
            <div className="user_modal">
              <button
                onClick={() => setModal(true)}
                className="border-0 bg-transparent"
              >
                <BiUser className="fs-5 pe-1" />
                Login
              </button>
            </div>
            <div className="user_profile flex-shrink-0 ">
              <a href="/Profile/tab" className="text-decoration-none  ">
                <AiOutlineHeart className="fs-5 text-dark pe-1" />
                Profile
              </a>
            </div>

            <div className="user_cart flex_row  gap-2 flex-shrink-0">
              <a className="text-decoration-none  ">
                <BsCart className="fs-5 text-dark pe-1" />
                Cart
              </a>

              <CartHover Data={Category_Data} />
            </div>
          </div>
        </div>
      </div>
      {modal && <UserLogin modal={modal} onClose={handleClose} />}
    </section>
  );
};

export default MidNav;
