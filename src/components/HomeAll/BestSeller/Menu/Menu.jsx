import React from 'react';
import { useState } from 'react';

import './Menu.css';

const Menu = ({ items }) => {
  return (
    <div className="Menu_item">
      <div className="row row-cols-xl-5 Menu justify-content-center row-cols-xl-5 gy-3 py-2 py-md-3 py-lg-4">
        {items.map((item) => {
          return (
            <div key={item.id} className="col-6 col-md-4     ">
              <div className="box text-center shadow-sm ">
                <img src={item.img} className="rounded img-fluid" alt="name " />
                <div className="info p-2">
                  <a className=" d-block" href={item.title}>
                    {item.title}
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Menu;
