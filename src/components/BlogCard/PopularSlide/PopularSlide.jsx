import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import categories from '../../../assets/categories.png';
import '../Latest/Common.css';
import './Slider.css';
const PopularSlide = () => {
  const settings = {
    dots: true,
    dotsClass: 'slick-dots custom-dots',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // enable auto-sliding
    autoplaySpeed: 3000,
  };

  return (
    <div className="slider common ">
      <h2 className="mb-3">Popular Categories</h2>
      <Slider {...settings}>
        <div>
          <img src={categories} className="img-fluid" alt="name" />
        </div>
        <div>
          <img src={categories} className="img-fluid" alt="name" />
        </div>
        <div>
          <img src={categories} className="img-fluid" alt="name" />
        </div>
        <div>
          <img src={categories} className="img-fluid" alt="name" />
        </div>
      </Slider>
    </div>
  );
};

export default PopularSlide;
