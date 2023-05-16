import React from 'react';
import './User.css';
import { Link } from 'react-router-dom';
import { RxCross1 } from 'react-icons/rx';
const UserLogin = (props) => {
  const { modal, onClose } = props;
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className={` user_login position-fixed top-0 start-0 bottom-0 start-0 min-vh-100 flex_row w-100 ${
        modal ? 'active' : ''
      }`}
    >
      <div className="container">
        <div className="row flex_center">
          <div className="col-4">
            <form className="text-start   shadow   " onSubmit={handleSubmit}>
              <div className="div ">
                <RxCross1 className="fs-5 times" onClick={onClose} />
              </div>
              <h2 className="text-center mb-5">SIGN IN</h2>
              <div className="sign_up text-center mb-3">
                Don't have an account? <Link to="/signup">Sign up</Link>
              </div>
              <div className="mb-4">
                <label htmlFor="name" className="p-black mb-2">
                  Name
                </label>
                <input
                  type="nam"
                  id="name"
                  className="form-control"
                  name="name"
                  placeholder="Full Name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="p-black mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  name="password"
                  placeholder="Full Name"
                />
              </div>
              <div className="text-center mt-4">
                <button typeof="submit-btn">Confirm</button>
              </div>
              <div className="sign_up text-center mb-3 mt-3">
                Forgot your password?{' '}
                <Link to="/recover">Recover your passwrod</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
