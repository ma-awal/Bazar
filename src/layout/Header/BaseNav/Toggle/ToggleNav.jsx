import React from 'react';
import Product_Link from '../../../../data/Product_Link';

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
                <a className=" d-block" href={`/Product/${category}`}>
                  {category}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ToggleNav;
