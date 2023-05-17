import React from 'react';
import banner from '../../assets/banner/blog-banner.jpg';
import './offer.css';
import OfferItems from '../../components/ProfileTab/OfferItems/OfferItems';

const Offer = () => {
  return (
    <section className="offer">
      <div className="offer_banner position-relative">
        <img src={banner} className="img-fluid" alt="img" />
        <h2 className=" text-uppercase ">Offer</h2>
      </div>
      <div className="container">
        <OfferItems />
      </div>
    </section>
  );
};

export default Offer;
