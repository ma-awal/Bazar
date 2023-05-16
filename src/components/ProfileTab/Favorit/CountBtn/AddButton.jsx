import React, { useState } from 'react';
import './button.css';

const AddButton = () => {
  const [showBagButton, setShowBagButton] = useState(true);
  const [showBtnContainer, setShowBtnContainer] = useState(false);
  const [value, setValue] = useState(1);

  const handleAddBagClick = () => {
    setShowBagButton(false);
    setShowBtnContainer(true);
  };

  const handlePlusClick = () => {
    setValue((prevValue) => prevValue + 1);
  };

  const handleMinusClick = () => {
    setValue((prevValue) => {
      if (prevValue > 1) {
        return prevValue - 1;
      } else {
        setShowBagButton(true);
        setShowBtnContainer(false);
        return 1;
      }
    });
  };

  return (
    <div className="add_btn text-center  ">
      {showBagButton && (
        <button className="bag  " onClick={handleAddBagClick}>
          Add to bag
        </button>
      )}
      {showBtnContainer && (
        <div className="btn_container  ">
          <button
            className="plus   rounded-0 rounded-start   "
            onClick={handlePlusClick}
          >
            +
          </button>
          <button className="value  ">{value}</button>
          <button
            className="minus   rounded-0 rounded-end "
            onClick={handleMinusClick}
          >
            -
          </button>
        </div>
      )}
    </div>
  );
};

export default AddButton;
