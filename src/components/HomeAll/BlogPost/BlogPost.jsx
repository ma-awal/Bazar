import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Blog_post.css';

import { CiCalendarDate } from 'react-icons/ci';

import Blog_Post from '../../../data/Blog_post';
import { Link } from 'react-router-dom';

const BlogPost = () => {
  const settings = {
    dots: true,
    dotsClass: 'slick-dots custom-dots',
    infinite: true,

    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: '100px;',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <section className=" Blog_post py-3 py-lg-5 flex_center mb-3 ">
      <div className="container">
        <h2 className="mb-2 mb-md-3 mb-lg-4   text-center  text-uppercase">
          Latest Blog
        </h2>
        <div className="row">
          <div className="col   ">
            <Slider className=" " {...settings}>
              {Blog_Post.map((item) => (
                <div key={item.id} className=" ">
                  <div className="shadow h-100  flex_col gap-3  m-3 rounded-3">
                    <img
                      src={item.img}
                      className="img-fluid rounded row w-100  m-auto  "
                      alt="img"
                      style={{ objectFit: 'cover' }}
                    />
                    <div className="info   gap-2 p-3   ">
                      <h6 className="mb-0">{item.title}</h6>
                      <p className="mb-0">{item.text}</p>
                      <div className="date text-capitalize    flex_row justify-content-between   ">
                        <span>
                          <CiCalendarDate className="pe-1  fs-5" />
                          23 sep 2023
                        </span>
                        <span>
                          <Link className="" to={item.title}>
                            Read More
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
