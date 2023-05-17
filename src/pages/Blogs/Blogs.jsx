import React from 'react';
import banner from '../../assets/banner/blog-banner.jpg';
import Latest from '../../components/BlogCard/Latest/Latest';
import Popular from '../../components/BlogCard/Popular/Popular';
import './Blog.css';
import PopularSlide from '../../components/BlogCard/PopularSlide/PopularSlide';

const Blogs = () => {
  return (
    <section className="Blogs">
      <div className="blogs_banner position-relative">
        <img src={banner} className="img-fluid banner_img" alt="img" />
        <h2 className=" text-uppercase ">Our Blogs</h2>
      </div>
      <div className="container py-5">
        <div className="row mb-3 justify-content-between ">
          <div className="col-12 col-xl-7  latest">
            <Latest />
          </div>
          <div className="d-none d-lg-flex flex-lg-column justify-content-between col-xl-4 popular pt-5">
            <Popular />
            <PopularSlide />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
