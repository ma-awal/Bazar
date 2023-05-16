import React from 'react';
import './Contact.css';
import { CiStopwatch } from 'react-icons/ci';
const Contact = () => {
  return (
    <section className="Contact py-5">
      <div className="container">
        <h2>Contact us</h2>
        <div className="row  justify-content-between gy-3 gy-md-0 ">
          <div className="col-12 col-md-6 col-lg-5">
            <form action="" className=" ">
              <div className="input_div">
                <label htmlFor="name">Name</label>
                <input
                  type="name"
                  id="name"
                  name="name"
                  className="form-control"
                  placeholder="Name"
                />
              </div>
              <div className="input_div d-flex gap-3 justify-content-between">
                <div className="w-100">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-100 form-control   "
                    placeholder="Email"
                  />
                </div>
                <div className="w-100">
                  <label htmlFor="number'">Phone number</label>
                  <input
                    type="number'"
                    id="number"
                    name="number"
                    className="w-100 form-control  "
                    placeholder="Number"
                  />
                </div>
              </div>
              <div className="teaxtarea">
                <label htmlFor="message">Your Message</label>
                <textarea
                  name=""
                  id=""
                  className="form-control text_area"
                  placeholder="Your text"
                  cols="30"
                  rows="6"
                ></textarea>
              </div>
              <div className=" mt-2">
                <button
                  type="sumit"
                  className="rounded py-2 btn-sm  btn text-white "
                >
                  Save
                </button>
              </div>
            </form>
          </div>
          <div className="col-12 col-md-6 col-lg-5 ">
            <div className="box flex_col gap-2  align-items-center">
              <CiStopwatch className="text-danger fs-4" />
              <h6>Call us</h6>
              <span>We are available from 10 am - 10 pm</span>
            </div>
            <div className="box flex_col gap-2  align-items-center">
              <CiStopwatch className="text-danger fs-4" />
              <h6>Call us</h6>
              <span>We are available from 10 am - 10 pm</span>
            </div>
            <div className="box flex_col gap-2  align-items-center">
              <CiStopwatch className="text-danger fs-4" />
              <h6>Call us</h6>
              <span>We are available from 10 am - 10 pm</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
