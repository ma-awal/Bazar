import React, { useState } from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';

const Menu = ({ items, initialNumItems }) => {
  const [numItems, setNumItems] = useState(initialNumItems);
  const [showAll, setShowAll] = useState(false);

  const handleShowMore = () => {
    setShowAll(true);
    setNumItems(items.length);
  };

  const handleShowLess = () => {
    setShowAll(false);
    setNumItems(initialNumItems);
  };
  return (
    <>
      <div className=" Menu row justify-content-center  gy-3 row-cols-xl-5 py-2 py-md-3 py-lg-4   ">
        {items.slice(0, numItems).map((item) => {
          return (
            <div key={item.id} className="col-4 col-md-3  ">
              <div className="box text-center flex_col align-items-center  gap-2">
                <img src={item.img} className="rounded img-fluid" alt="name " />
                <Link
                  className="text-decoration-none"
                  to={`/product/${item.title}`}
                >
                  {item.title}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      {!showAll && numItems < items.length && (
        <div className="text-center mt-4">
          <button className="btn btn_less " onClick={handleShowMore}>
            Load More
          </button>
        </div>
      )}
      {showAll && (
        <div className="text-center mt-2 mt-lg-3">
          <button className="btn btn_less " onClick={handleShowLess}>
            Show Less
          </button>
        </div>
      )}
    </>
  );
};

export default Menu;
