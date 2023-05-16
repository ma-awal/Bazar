import React from 'react';
import './Locate.css';
const Locator = () => {
  return (
    <div className=" Locate  flex_center position-fixed top-0 start-0 bottom-0 start-0 min-vh-100   w-100 ">
      <form className="text-start   shadow    ">
        <div className="sign_up text-center mb-3"></div>
        <div className="mb-4">
          <input
            type="text"
            id="city"
            className="form-control"
            name="city"
            placeholder="City"
          />
          <label htmlFor="city" className="p-black mb-2">
            Please select city
          </label>
        </div>
        <div className="mb-4">
          <input
            type="text"
            id="area"
            className="form-control"
            name="area"
            placeholder="Area"
          />
          <label htmlFor="area" className="p-black mb-2">
            Please select area
          </label>
        </div>
        <div className="text-center mt-4">
          <button typeof="submit-btn">Locate</button>
        </div>
      </form>
    </div>
  );
};

export default Locator;
