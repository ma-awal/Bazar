import React from 'react';
import './Slide.css';
import img from '../../../../assets/banner1.png';
const Slide = () => {
  return (
    <>
      <div className="d-flex flex-column flex-lg-row  justify-content-lg-between align-items-center slide   ">
        <div className="info text-center text-lg-start    ">
          <h1>Groceries</h1>
          <h2>at yours Fingertips</h2>
        </div>
        <div className=" ">
          <img
            src={img}
            className="img-fluid mx-auto mx-lg-0 ms-lg-auto   "
            alt="name"
          />
        </div>
      </div>
    </>
  );
};

export default Slide;
