import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Clinet_say.css';
import { RxCaretRight } from 'react-icons/rx';
import Client_Data from '../../../data/Client_Data';

const ClientSay = () => {
  const settings = {
    dots: true,
    dotsClass: 'slick-dots custom-dots',
    infinite: true,
    centerMode: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          infinite: false,
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      <section className=" Client_say py-3 py-lg-4 flex_center ">
        <div className="container">
          <h2 className="mb-2 mb-md-3 mb-lg-4 text-center   ">Client Say</h2>
          <div className="row">
            <div className="col ">
              <Slider {...settings}>
                {Client_Data.map((item) => (
                  <div key={item.id} className=" py-3   ">
                    <div className=" box shadow-sm px-4 d-flex flex-column flex-md-row  text-center text-md-start   align-items-center gap-2 p-2  mx-2 border">
                      <img
                        src={item.img}
                        className="img-fluid      "
                        alt="img"
                      />
                      <div className="info     p-2  ">
                        <h6 className="mb-0">{item.Name}</h6>
                        <p className="mb-2">{item.title}</p>
                        <p>
                          <q>{item.text}</q>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientSay;
