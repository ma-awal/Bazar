import React from 'react';
import Category_Data from '../../../data/Category_Data';
import './Best_sell.css';
import Menu from './Menu/Menu';

const BestSell = () => {
  const bestSellItems = Category_Data.filter((item) =>
    ['Apple', 'Beef', 'Grapes', 'Cucumber', 'Mango'].includes(item.title)
  );

  return (
    <section className="Best_Sell py-2 py-md-3 py-lg-5">
      <div className="container">
        <h2 className="text-center text-uppercase">Best sells</h2>
        <Menu items={bestSellItems} />
      </div>
    </section>
  );
};

export default BestSell;
