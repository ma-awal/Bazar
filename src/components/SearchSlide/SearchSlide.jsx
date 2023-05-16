import React from 'react';
import { RxCross1 } from 'react-icons/rx';
import { CiSearch } from 'react-icons/ci';
import Link_Data from '../../data/Link_Data';

import './Search_slide.css';
import { Link } from 'react-router-dom';
const SearchSlide = (props) => {
  const { showSearch, onClose } = props;
  return (
    <div className={`Search_slide ${showSearch ? 'active' : ''}`}>
      <RxCross1 className="mb-3 mt-2" onClick={onClose} />
      <div className="input_nav flex_row rounded   ">
        <input
          type="search"
          className="ps-2"
          placeholder="i am looking for..."
        />
        <button type="submit" className="rounded-end">
          <CiSearch />
        </button>
      </div>
      <h6 className="mt-2">Search in :</h6>
      <div className="tab-link flex_row flex-wrap justify-content-center gap-2 py-2  ">
        {Link_Data.map((items) => {
          return (
            <Link
              key={items.id}
              className="link btn btn_less flex-wrap   "
              to={`/links/${items.id}`}
            >
              {items.category}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SearchSlide;
