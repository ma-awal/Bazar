import React, { useState } from 'react';
import './Delivery.css';
import NewAdress from './NewAdress/NewAdress';
import map from '../../../assets/map.png';
const DeliveryAddress = () => {
  const [address, showNewAddress] = useState(false);
  const showNewAddressClick = () => {
    showNewAddress(true);
  };
  const handleBackClick = () => {
    showNewAddress(false);
  };

  return (
    <>
      <div className="Delivery ">
        <div className="col-12 col-lg-6 mx-auto mx-lg-0">
          {!address && (
            <button className="add" onClick={showNewAddressClick}>
              New Delivery Address +
            </button>
          )}
        </div>
        {address ? (
          <NewAdress onBackClick={handleBackClick} />
        ) : (
          <AddressHistory />
        )}
      </div>
    </>
  );
};

const AddressHistory = () => {
  return (
    <>
      <div className="Adress col-12   col-lg-6 mx-auto mx-lg-0">
        <div className="single_adress mb-3 flex_row gap-2 p-2 shadow rounded">
          <img src={map} alt="name" />
          <div className="info flex_col gap-2 ">
            <h6 className="m-0">Mothers home</h6>
            <span className="fs-6 lh-sm ">
              2H - UN3, 562/A, St. Begum Rokeya, Gulshan 1.
            </span>
          </div>
        </div>
        <div className="single_adress flex_row gap-2 p-2 shadow rounded">
          <img src={map} alt="name" />
          <div className="info flex_col gap-2 ">
            <h6 className="m-0">Mothers home</h6>
            <span className="fs-6 lh-sm ">
              2H - UN3, 562/A, St. Begum Rokeya, Gulshan 1.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeliveryAddress;
