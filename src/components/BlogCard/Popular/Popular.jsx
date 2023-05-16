import React from 'react';

import '../Latest/Common.css';
import { CiCalendarDate } from 'react-icons/ci';
import Blog_Data from '../../../data/Blog_Data';

const Popular = () => {
  const popularData = Blog_Data.filter(
    (popular) => popular.category === 'popular'
  );
  return (
    <>
      <div className="common flex_col gap-4  ">
        <h2 className="mb-0 w-100">Popular</h2>
        {popularData.map((item) => {
          const { id, img, title, date, duration } = item;
          return (
            <div key={id} className="flex_row align-items-start gap-4  ">
              <img src={img} className="img-fluid" alt="img" />
              <div className="info flex_col gap-3">
                <h6 className="mb-0">{title}</h6>

                <div className="date flex_row gap-4 text-capitalize mt-3    ">
                  <span>
                    <CiCalendarDate className="pe-1 fs-5" />
                    {date}
                  </span>
                  <span>{duration}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Popular;
