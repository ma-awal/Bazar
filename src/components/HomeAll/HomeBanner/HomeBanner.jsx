import React from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './Home_banner.css';
import img1 from '../../../assets/banner/banner-bg.jpg';
import img2 from '../../../assets/banner/banner-bg2.jpg';
const HomeBanner = () => {
  const settings = {
    dots: false,
    dotsClass: 'slick-dots custom-dots',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <>
      <section className="Home_banner  ">
        <Slider {...settings}>
          <div>
            <img src={img1} className="img-fluid" alt="name" />
          </div>
          <div>
            <img src={img2} className="img-fluid" alt="name" />
          </div>
        </Slider>
      </section>
    </>
  );
};

export default HomeBanner;
