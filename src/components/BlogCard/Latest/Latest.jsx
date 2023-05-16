import React from 'react';

import Blog_Data from '../../../data/Blog_Data';
import { Link } from 'react-router-dom';
import { CiCalendarDate } from 'react-icons/ci';
import './Common.css';
const Latest = () => {
  const latestData = Blog_Data.filter((blog) => blog.category === 'review');
  return (
    <div className="common">
      <h2 className="mb-2 mb-md-4">Latest Review</h2>
      <div className="flex_col    gap-5">
        {latestData.map((item) => {
          const { id, img, title, para, date, duration } = item;
          return (
            <div
              key={id}
              className=" row align-items-center    gy-3 shadow-sm p-3   "
            >
              <div className="col-12 col-md-5 col-lg-auto">
                <img src={img} className="img-fluid w-100 " alt="img" />
              </div>
              <div className="info col-12 col-md-6     flex_col   gap-1 gap-md-2 gap-lg-3 ">
                <button className="btn btn_less ">Category</button>
                <h6>{title}</h6>
                <p>{para}</p>
                <Link to={title} className="red_more">
                  Read More
                </Link>
                <div className="date text-capitalize      flex_row gap-4   ">
                  <span>
                    <CiCalendarDate className="pe-1  fs-5" />
                    {date}
                  </span>
                  <span>{duration}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Latest;
