import React from 'react';
import Product_Link from '../../../../data/Product_Link';
import { Link } from 'react-router-dom';

const ToggleNav = () => {
  return (
    <>
      <div className=" Toggle_nav shadow start-0 end-0 w-100 position-absolute top-100">
        <div className="container   d-flex justify-content-between align-items-center">
          {Product_Link.map((item) => {
            const { id, icon, category } = item;
            return (
              <div className="text-center" key={id}>
                <img src={icon} className="img-fluid" alt="" />
                <Link className=" d-block" to={`/Product/${category}`}>
                  {category}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ToggleNav;
