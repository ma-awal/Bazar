import React from 'react';
import './Categories.css';

const Categories = ({ categories, filteredItems }) => {
  return (
    <>
      <div className="col-12 col-md-6 mx-auto Categories py-2   ">
        <div className=" flex_center gap-1  mb-2 box  ">
          {categories.map((category, index) => {
            return (
              <button
                key={index}
                className="   btn btn_less  d-inline-block "
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
