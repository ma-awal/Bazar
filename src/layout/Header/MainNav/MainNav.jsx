import './main.css';
import { BsList } from 'react-icons/bs';

import { CiSearch } from 'react-icons/ci';
import { BsBag } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import SearchSlide from '../../../components/SearchSlide/SearchSlide';
import { useState } from 'react';
import './main.css';

import Cart_Data from '../../../data/Category_Data';
import BarSlide from '../../../components/BarSlide/BarSlide';
import CartSlide from '../../../components/CartSlide/CartSlide';
const MainNav = () => {
  const navigate = useNavigate();
  const [menu, showMenu] = useState(false);
  const [cart, showCart] = useState(false);
  const [showSearch, setSearch] = useState(false);

  const handleMenu = () => {
    showMenu(!menu);
  };
  const handleCart = () => {
    showCart(!cart);
  };
  const handleSearch = () => {
    setSearch(!showSearch);
  };
  return (
    <div className="Main  ">
      <nav className="navbar position-relative sticky-top">
        <div className="container-fluid ">
          <div className="bar">
            <BsList className="icon" onClick={handleMenu} />
            <BarSlide show={menu} onClose={handleMenu} />
          </div>
          <div className="logo">
            <h4 className="  ">Bazar</h4>
          </div>
          <div className="icons flex_row gap-2   ">
            <div className="search ">
              <CiSearch className="icon " onClick={handleSearch} />
              <SearchSlide showSearch={showSearch} onClose={handleSearch} />
            </div>
            <div className="bag">
              <BsBag className="icon" onClick={handleCart} />
              <CartSlide Data={Cart_Data} cart={cart} onClose={handleCart} />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MainNav;
