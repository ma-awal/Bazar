import React from 'react';

import Product_Link from '../../../../data/Product_Link';
import { FiSearch } from 'react-icons/fi';
import './Input.css';
const Input = () => {
  return (
    <>
      <div className="col-6 Input_field d-flex">
        <div class="input-group  ">
          <button
            className="btn drop_btn  rounded-0 dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Categories
          </button>
          <ul class="dropdown-menu ">
            {Product_Link.map((item) => {
              const { id, icon, category } = item;
              return (
                <li key={id}>
                  <img src={icon} className="pe-2" alt="name" />
                  <a href={`/product/${category}`}>{category}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex_row search_input rounded ">
          <input
            type="text"
            class="form-control  ps-3"
            placeholder="i am looking for..."
            aria-label="Text input with dropdown button"
          />
          <button className="  submit_btn rounded-end  bg-transparent text-w ">
            <FiSearch className="fs-6 px-2 w-100" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Input;
