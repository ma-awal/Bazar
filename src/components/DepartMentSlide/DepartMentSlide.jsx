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
    </div>
  );
};

export default DepartmentSlide;
