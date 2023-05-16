import React from 'react';
import './Home_link.css';
import Product_Link from '../../../data/Product_Link';
import { Link } from 'react-router-dom';

const HomeLink = () => {
  return (
    <section className="Link py-2 py-md-3 py-lg-4">
      <div className="container ">
        <h2 className="text-center">Categories</h2>
        <div className="row product_link py-3 justify-content-center">
          <div className="col-8 d-flex justify-content-center flex-wrap  gap-2">
            {Product_Link.map((item, index) => {
              return (
                <Link
                  key={index}
                  className=" btn btn_less text-decoration-none"
                >
                  {item.category}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeLink;
