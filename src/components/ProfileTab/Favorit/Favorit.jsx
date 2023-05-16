import React from 'react';
import './Favorit.css';
import img from '../../../assets/best/b4.jpg';

import { MdOutlineBookmarkBorder } from 'react-icons/md';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import Prodcut_Data from '../../../data/Product_Data';
import { Link } from 'react-router-dom';
import AddButton from './CountBtn/AddButton';

const Favorit = () => {
  return (
    <>
      <div className="row Favorit gy-4 ">
        <h2>Favorit products</h2>
        {Prodcut_Data.map((item) => {
          const { id, title, price } = item;
          return (
            <div className="col-6   col-md-4   " key={id}>
              <div className=" rounded border w-100">
                <img src={img} className="img-fluid w-100 mb-1" alt="name" />

                <div className="info px-2 ">
                  <div className="   d-flex justify-content-between">
                    <Link to={title}>
                      <MdOutlineBookmarkBorder />
                    </Link>
                    <AddButton />
                    <Link>
                      <MdOutlineFavoriteBorder />
                    </Link>
                  </div>
                  <p>{title}</p>
                  <div className="price">
                    BDT: <span>{price}</span>
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
