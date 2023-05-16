import React from 'react';
import { Link } from 'react-router-dom';

const FooterLinks = ({ footerData, handleTabClick }) => {
  return (
    <>
      <div className="col-12 col-md-4 col-lg-3  ">
        <div className="links box_1  ">
          <h6 className="d-inline-block border-2 position-relative">
            QUICK LINKS
          </h6>
          <ul className="list-group  ">
            {footerData[0].links.map((link, index) => {
              return (
                <li key={index}>
                  <a
                    href={link.path}
                    onClick={() => handleTabClick(link.index)}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="col-12 col-md-4 col-lg-3  ">
        <div className="links box_1  ">
          <h6 className="d-inline-block border-2 position-relative">
            RESOURCES
          </h6>
          <ul className="list-group">
            {footerData[1].links.map((link, index) => {
              return (
                <li key={index}>
                  <a
                    href={link.path}
                    onClick={() => handleTabClick(link.index)}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default FooterLinks;
