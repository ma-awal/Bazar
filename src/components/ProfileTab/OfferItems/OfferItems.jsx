import React from 'react';
import './Offer_items.css';
import img from '../../../assets/best/b4.jpg';

import { MdOutlineBookmarkBorder } from 'react-icons/md';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import Prodcut_Data from '../../../data/Product_Data';
import { Link } from 'react-router-dom';
import AddButton from './CountBtn/AddButton';

const OfferItems = () => {
  return (
    <>
      <div className="row Offered gy-3 py-3 ">
        {Prodcut_Data.map((item) => {
          const { id, title, price } = item;
          return (
            <div className="col-6   col-md-4    " key={id}>
              <div className="card shadow-sm rounded   ">
                <img src={img} className="img-fluid mb-1" alt="name" />

                <div className="info ">
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
                  <div className="price d-flex gap-2">
                    <span>BDT {price}</span>
                    <span>132</span>
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

export default OfferItems;
