import React from 'react';
import { RxCross1 } from 'react-icons/rx';
import Favorit from '../ProfileTab/Favorit/Favorit';
import './Favorit_slide.css';

const FavoritSlide = (props) => {
  const { favorit, onClose } = props;
  return (
    <div className={`Favorit_slide  ${favorit ? 'is-Active' : ''}`}>
      <RxCross1 className="mb-3 mt-2  " onClick={onClose} />
      <Favorit />
    </div>
  );
};

export default FavoritSlide;
