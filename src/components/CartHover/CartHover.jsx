import React from 'react';
import './Cart.css';
import { RxCross1 } from 'react-icons/rx';

const CartHover = (props) => {
  const Cart_Data = props.Data;
  return (
    <>
      <div className="cart position-absolute top-100 end-0 my_cart   shadow  ">
        <div className="cart_items position-sticky top-0 start-0 flex_row">
          <span> 3ITEMS</span>
          <span>SELECTED </span>
        </div>

        <div className="flex_col">
          <ul className="list-group px-4">
            {Cart_Data.map((item) => {
              const { id, img, title, weight, price } = item;
              return (
                <li
                  className=" row  py-2 cart_list  border-bottom align-items-center  "
                  key={id}
                >
                  <div className="remove col">
                    <RxCross1 className="fs-6 times" />
                  </div>
                  <div className="col">
                    <img src={img} className="img-fluid w-100" alt={'Name'} />
                  </div>
                  <div className="col p_info ">
                    <p>
                      <span>{title}</span>
                    </p>
                    <p>
                      <span>{weight}</span>
                    </p>
                  </div>
                  <div className=" col  ">
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
          <div className="order position-sticky bottom-0 start-0 w-100  ">
            <div className="row align-items-center">
              <div className="col-6 place_order text-center">
                <button>
                  <a to="/PlaceOrder">Place order</a>
                </button>
              </div>
              <div className="col-6 total text-center">
                BDT: <span>123</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartHover;
