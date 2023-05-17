import React from 'react';

import './Menu.css';
import { Link } from 'react-router-dom';

const Menu = ({ items }) => {
  return (
    <div className="Menu_item">
      <div className="row row-cols-xl-6 Menu justify-content-center   gy-3 py-2 py-md-3 py-lg-4">
        {items.map((item) => {
          return (
            <div key={item.id} className="col-4 col-md-3     ">
              <div className="box text-center   ">
                <img src={item.img} className="rounded img-fluid" alt="name " />
                <div className="info ">
                  <Link className=" d-block" to={item.title}>
                    {item.title}
                  </Link>
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
