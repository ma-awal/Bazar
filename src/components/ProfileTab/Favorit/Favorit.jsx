import React from 'react';
import './Favorit.css';
// import img from '../../../assets/best/b4.jpg';

import { MdOutlineBookmarkBorder } from 'react-icons/md';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import Category_Data from '../../../data/Category_Data';

import { Link } from 'react-router-dom';
import AddButton from './CountBtn/AddButton';

const Favorit = () => {
  return (
    <>
      <div className="row Favorit gy-4 ">
        <h2>Favorit products</h2>
        {Category_Data.map((item) => {
          const { id, price, title, img } = item;
          return (
            <div className="col-6   col-md-4   " key={id}>
              <div className=" rounded border w-100">
                <img
                  src={img}
                  className="img-fluid rounded w-100 mb-1"
                  alt="name"
                />

                <div className="info px-2 ">
                  <div className="   d-flex justify-content-between">
                    <Link to="">
                      <MdOutlineBookmarkBorder />
                    </Link>
                    <AddButton />
                    <Link>
                      <MdOutlineFavoriteBorder />
                    </Link>
                  </div>
                  <p className="text-center">{title}</p>
                  <div className="price text-center">
                    Price : <span>{price}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Favorit;
