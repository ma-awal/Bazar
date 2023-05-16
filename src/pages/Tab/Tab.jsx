import React, { useEffect, useState } from 'react';

import './tab.css';
import Footer_Data from '../../data/Footer_Data';

const Tab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleActiveTab = (index) => {
    setActiveTab(index);
  };
  const tabLink = Footer_Data.flatMap((item) =>
    item.links.filter((link) => link.path === '/tabs')
  );

  return (
    <section className="tab py-2 py-md-3 py-lg-4">
      <div className="container  ">
        <div className="row justify-content-between  ">
          <div className="col-12 col-lg-3  order-2 order-lg-1 border-end p-0   ">
            <ul>
              {tabLink.map((link, index) => {
                return (
                  <li>
                    <button
                      key={index}
                      className={` border-0 btn text-center text-lg-start btn btn-link nav-link  w-100   d-block ${
                        activeTab === index ? ' show active' : ''
                      }`}
                      onClick={() => handleActiveTab(index)}
                    >
                      {link.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-12 col-lg-8 order-1 order-lg-2">
            <div className="tab-content text-center text-lg-start  ">
              {tabLink.map((link, index) => (
                <div
                  key={index}
                  className={`tab-pane fade ${
                    activeTab === index ? 'show active' : ''
                  }`}
                >
                  <h2>{link.name}</h2>
                  {link.component}
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    fugiat quisquam sit aperiam eaque laborum eum laudantium vel
                    voluptates ad non at molestias, perferendis architecto velit
                    veritatis, cumque optio expedita veniam quas, dolores
                    quidem? Iure illo architecto accusantium accusamus
                    perferendis, id vero ad ipsa, temporibus impedit tempora
                    maxime alias pariatur corporis. Vel, quaerat possimus facere
                    odio cumque qui temporibus nihil natus necessitatibus animi
                    corrupti nobis sapiente consectetur nostrum aut rem fugit
                    incidunt est vero? Aut ratione quibusdam rem voluptates. Aut
                    veritatis dolores hic ad! A dignissimos nobis maiores illum
                    perferendis cum, hic tempora ab architecto enim suscipit
                    assumenda itaque repudiandae!
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tab;
