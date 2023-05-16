import React from 'react';
import './Categories.css';

const Categories = ({ categories, filteredItems }) => {
  return (
    <>
      <div className="col-12 col-md-6 mx-auto Search px-2 px-md-0  ">
        <div className="flex_center  gap-1  mb-2   ">
          {categories.map((category, index) => {
            return (
              <button
                key={index}
                className="  btn btn_less   "
                onClick={() => filteredItems(category)}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Categories;
