import React from 'react';
import { RxCross1 } from 'react-icons/rx';
import HomeLink from '../HomeAll/Link/HomeLink';
import './Department_slide.css';

const DepartmentSlide = (props) => {
  const { department, onClose } = props;
  return (
    <div className={`Department_slide  ${department ? 'is-Active' : ''}`}>
      <RxCross1 className="mb-3 mt-2  " onClick={onClose} />

      <HomeLink />
      {/* <div className="row min-vh-100 align-items-center justify-content-center">
        <div className="col">
          <h1 className="text-center">Department</h1>
        </div>
      </div> */}
    </div>
  );
};

export default DepartmentSlide;
