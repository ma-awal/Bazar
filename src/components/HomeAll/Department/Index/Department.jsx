import React, { useState } from 'react';
import Category_Data from '../../../../data/Category_Data';
import './Department.css';
import Menu from '../Menu/Menu';
import Categories from '../Categories/Categories';
const allCategories = [
  'All',
  ...new Set(Category_Data.map((item) => item.category)),
];
const Other = () => {
  const [menu, setMenu] = useState(Category_Data);
  const [categories, setCategories] = useState(allCategories);
  const filteredItems = (category) => {
    if (category === 'All') {
      setMenu(Category_Data);
      return;
    }
    const newItems = Category_Data.filter((item) => item.category === category);
    setMenu([...newItems]);
  };
  return (
    <section className="Department py-2 py-md-3 py-lg-5">
      <div className="container">
        <h2 className="text-center text-uppercase">Categories</h2>

        <Categories categories={categories} filteredItems={filteredItems} />
        <Menu items={menu} initialNumItems={15} />
      </div>
    </section>
  );
};

export default Other;
