import React from 'react';
import './Product.css';

import { MdOutlineBookmarkBorder } from 'react-icons/md';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import Category_Data from '../../data/Category_Data';
import { useParams } from 'react-router-dom';
import AddButton from './CountBtn/AddButton';

const Product = () => {
  const { category } = useParams();
  const ProductCategory = Category_Data.filter(
    (item) => item.category === category
  );
  return (
    <div className="container">
      <div className="row Product gy-3 py-5 justify-content-center align-items-center ">
        {ProductCategory.map((item) => {
          return (
            <div className="col-6   col-md-4 col-lg-3 col-xl-2  " key={item.id}>
              <div className="box rounded   border">
                <img src={item.img} className="img-fluid" alt="name" />

                <div className="info ">
                  <div className="   d-flex justify-content-between">
                    <a href={item.title}>
                      <MdOutlineBookmarkBorder />
                    </a>
                    <AddButton />
                    <a>
                      <MdOutlineFavoriteBorder />
                    </a>
                  </div>
                  <p className="text-center">{item.title}</p>
                  <div className="price flex_row text-capitalize">
                    <div>
                      Price: <span>{item.price}</span>
                    </div>

                    <div> {item.stock} </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
