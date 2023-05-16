import React from 'react';
import home from '../../../assets/footer/home.svg';
import cart from '../../../assets/footer/cat.svg';
import heart from '../../../assets/footer/heart.svg';
import profile from '../../../assets/footer/profie.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import FavoritSlide from '../../../components/FavoritSlide/FavoritSlide';
import DepartmentSlide from '../../../components/DepartMentSlide/DepartMentSlide';
import './Bottom_nav.css';
const BottomNav = () => {
  const [favorit, showFavorit] = useState(false);
  const [department, setDepartment] = useState(false);
  const handleDepartment = () => {
    setDepartment(!department);
  };
  const handleFavorit = () => {
    showFavorit(!favorit);
  };

  return (
    <>
      <div className="bottom_nav flex_row  py-2 shadow position-fixed w-100 bottom-0 start-0 end-0 d-xl-none px-2 ">
        <div className="icon ">
          <a className="flex_col align-items-center" href="/">
            <img src={home} alt="name" />
            <span>Home</span>
          </a>
        </div>
        <div className="icon flex_col align-items-center">
          <img src={cart} alt="name" onClick={handleDepartment} />
          <DepartmentSlide department={department} onClose={handleDepartment} />
          <span>Department</span>
        </div>
        <div className="icon flex_col align-items-center">
          <img src={heart} alt="name" onClick={handleFavorit} />

          <FavoritSlide favorit={favorit} onClose={handleFavorit} />

          <span>Favourit</span>
        </div>
        <div className="icon ">
          <a href="/Profile/tab" className="flex_col align-items-center">
            <img src={profile} alt="name" />
            <span>Profile</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default BottomNav;
