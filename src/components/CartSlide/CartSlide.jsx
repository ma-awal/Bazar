import React from 'react';
import './Cart_slide.css';
import { RxCross1 } from 'react-icons/rx';

const CartSlide = (props) => {
  const Cart_Data = props.Data;
  const { cart, onClose } = props;
  return (
    <>
      <div className={`Cart px-2   ${cart ? 'is-Active' : ''}`}>
        <>
          <RxCross1 className="   mt-1  " onClick={onClose} />
        </>

        <div className="Cart_menu  d-flex flex-column justify-content-around h-100">
          <div className="cart_items flex_row mt-2 ">
            <span>3 ITEMS</span>
            <span>SELECTED</span>
          </div>
          <ul className=" list-group  py-3 px-2       ">
            {Cart_Data.map((item) => {
              const { id, img, title, weight, price } = item;
              return (
                <li
                  className=" border-bottom justify-content-center row cart_list   py-3"
                  key={id}
                >
                  <div className="remove col-1">
                    <RxCross1 className="fs-6 times   " />
                  </div>
                  <div className="col-4">
                    <img src={img} className="   " alt={'Name'} />
                  </div>
                  <div className="col col-3 p_info  ">
                    <p>
                      <span>{title}</span>
                    </p>
                    <p>
                      <span>{weight}</span>
                    </p>
                  </div>
                  <div className="col-4 ">
                    <div className="btns border rounded-pill flex_center mb-2  ">
                      <button className=" btn">-</button>
                      <button className=" btn">1</button>
                      <button className=" btn">+</button>
                    </div>
                    <div className="price">
                      BDT : <span>{price}</span>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="order   mb-4  ">
            <div className="row align-items-center">
              <div className="col-6 place_order text-center">
                <button>
                  <a to="/placeOrder">Place order</a>
                </button>
              </div>
              <div className="col-6 total text-center">
                BDT:<span>123</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSlide;
