import React from 'react';
import img from '../../assets/best/b1.jpg';
import './Track.css';
import Progress from './Progress';
import Category_Data from '../../data/Category_Data';
const Track_Order = () => {
  return (
    <section className=" Track  py-5" style={{ zIndex: 0 }}>
      <div className="container">
        <div className="row  content  justify-content-between align-items-center">
          <div className="col-12 col-md-6 col-lg-5  Left_cont">
            <h2 className="mb-1 mb-md-2 mb-lg-3 text-center text-lg-start">
              Track your order
            </h2>
            <p className="mb-2 mb-md-3 mb-lg-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
              enim veritatis harum nulla alias corporis, sunt quos officiis.
              Autem magnam facere itaque et impedit ipsam culpa tempore,
            </p>
            <div className="input_track flex_row mb-2 mb-lg-3">
              <input
                type="parcel"
                id="parcel"
                name="parcel"
                placeholder="Enter your parcel ID"
                className="ps-3"
              />
              <button type="submit btn">Track parcel</button>
            </div>
            <h3 className="voice  ">
              Invoice: <span>234dfk4r9</span>
            </h3>
          </div>
          <div className="col-12 col-md-6 col-lg-5   ">
            <ul className=" cont list-group flex_col gap-1 gap-lg-4">
              <li>Estimated delivery time</li>
              <li> 30-49 mins</li>
              <li>
                Delivery Address : <br />
                <span> L/36,S1,eastarn housing,Mirpur,Dhaka-1216 </span>
              </li>
              <li>Phone number : 015xxxxxxxxxx</li>
            </ul>
          </div>
        </div>
        <div className="row   py-5 text-center pro ">
          <h3 className="mb-5"> Track Order History</h3>
          <Progress />
        </div>
        <div className="row Item  ">
          <div className="col-12 col-md-10 col-lg-5">
            <h6 className="">Products</h6>
            <ul className="   border-top border-1 pt-2 lh-base">
              {Category_Data.slice(0, 4).map((item) => {
                return (
                  <li className=" row mb-1 py-2 align-items-center  border-bottom ">
                    <div className="col">
                      <img
                        src={item.img}
                        className="img-fluid rounded"
                        alt="name"
                      />
                    </div>
                    <div className="col">Quantity: {item.qty}</div>
                    <div className="col">Tk :{item.price}</div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Track_Order;
