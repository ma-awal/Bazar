import React from 'react';
import './Add.css';
import img1 from '../../../assets/offered.png';
import img2 from '../../../assets/offered2.png';
import { Link } from 'react-router-dom';

const Add = () => {
  return (
    <div>
      <div className="container py-2 py-lg-3 ">
        <div className="row justify-content-center gap-3 align-items-center">
          <div className=" col-12  col-lg-5">
            <div className="box_item flex_row shadow">
              <div>
                <span>Till 10 Dec, 2021 </span>
                <h6>25% Special Off Today Only for Vegetables </h6>
                <Link to="/" className="btn_less btn">
                  Shop now
                </Link>
              </div>
              <div>
                <img src={img1} className="img-fluid" alt="name" />
              </div>
            </div>
          </div>
          <div className=" col-12    col-lg-5">
            <div className="box_item flex_row shadow">
              <div>
                <span>Till 10 Dec, 2021 </span>
                <h6>25% Special Off Today Only for Vegetables </h6>
                <Link to="/" className="   btn btn_less">
                  Shop now
                </Link>
              </div>
              <div>
                <img src={img2} className="img-fluid" alt="name" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
