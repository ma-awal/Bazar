import React from 'react';
import './Faq_form.css';

import { RiMailOpenLine } from 'react-icons/ri';
import { BiPencil } from 'react-icons/bi';

const FaqForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="form py-5 shadow">
      <form className="text-start      px-4  " onSubmit={handleSubmit}>
        <h3 className="">Have any further query</h3>
        <h5>Contact us</h5>
        <div className="mb-4 flex_row  ">
          <input
            type="email"
            id="email"
            className="form-control py-2"
            name="email"
            placeholder="Enter email"
          />
          <RiMailOpenLine />
        </div>
        <div className="mb-4 flex_row  ">
          <textarea
            type="message"
            id="message"
            className="form-control"
            name="message"
            placeholder="Message"
          />
          <BiPencil />
        </div>
        <div className="text-center mt-3 w-100">
          <button type="submit" className="send_btn text-white w-100 py-1 ">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default FaqForm;
