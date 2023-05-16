import React from 'react';
import './New_adress.css';
const NewAdress = (props) => {
  const handleBackClick = () => {
    props.onBackClick();
  };
  return (
    <>
      <div className="New_adress p-4  col-12  ">
        <h2 className="d-none d-lg-block  ">New Delivery Address</h2>
        <p className=" ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quo
          <br />
          est itaque aperiam expedita aspernatur.
        </p>
        <form action="" className=" py-3 mt-4   ">
          <div className="input_filed   row    ">
            <div className="input_form col-6">
              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="name"
                  className="name form-control   "
                  id="name"
                  name="name"
                  placeholder="Name"
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="email form-control"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="input_form col-6">
              <div>
                <label htmlFor="password">Old Password</label>
                <input
                  type="password"
                  className="oldPassword form-control"
                  id="oldPassword"
                  name="oldPassword"
                  placeholder="Old password"
                />
              </div>
              <div>
                <label htmlFor="newPassword">New Password</label>
                <input
                  type="email"
                  className="newPassword form-control"
                  id="newPassword"
                  name="newPassword"
                  placeholder="New passwrod"
                />
              </div>
            </div>
          </div>
          <div className="   check_items  ">
            <div className="check_box">
              <input type="checkbox" className="m-0 p-0" />
              <span className=" ">Lorem ipsum dolor sit amet.</span>
              <button
                className="d-block bg-transparent text-black"
                onClick={handleBackClick}
              >
                Back
              </button>
            </div>
            <button className="  btn btn-sm " type="submit">
              Save Change
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewAdress;
