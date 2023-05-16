import React from 'react';
import './About.css';
import ClineSay from '../../components/HomeAll/ClientSay/ClientSay';

const About = () => {
  return (
    <section className="About py-3 py-md-4 ">
      <div className="container">
        <div className="row gy-4 gy-md-0">
          <div className="col-12 col-md-4 border-end ">
            <div className="heading text-center col-8 mx-auto  ">
              <h2 className="  text-md-end">About us</h2>
            </div>
          </div>
          <div className="col-12 col-md-7  ">
            <div className="info  ">
              <h6 className="">Destination and Goal</h6>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
                consectetur dignissimos officiis esse aspernatur inventore fuga
                praesentium excepturi quibusdam laboriosam, dicta dolorem
                dolorum nobis eos assumenda a nostrum, asperiores distinctio!
                Harum labore fugit consectetur dolorem qui sint impedit,
                adipisci dolore sapiente officiis sunt vel odio illum beatae
                deleniti atque voluptatem eius earum consequuntur saepe libero
                et perspiciatis id! Dolore accusantium modi tempore, libero
                facere quaerat illum autem voluptate ducimus harum blanditiis
              </p>
            </div>
            <div className="details">
              <ul className="list-group">
                <li>
                  <strong>About Service:</strong>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Maxime ducimus ratione facere repellendus, eaque id.
                  </p>
                </li>
                <li>
                  <strong>About Service:</strong>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Maxime ducimus ratione facere repellendus, eaque id.
                  </p>
                </li>
                <li>
                  <strong>About Service:</strong>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Maxime ducimus ratione facere repellendus, eaque id.
                  </p>
                </li>
                <li>
                  <strong>About Service:</strong>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Maxime ducimus ratione facere repellendus, eaque id.
                  </p>
                </li>
                <li>
                  <strong>About Service:</strong>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Maxime ducimus ratione facere repellendus, eaque id.
                  </p>
                </li>
                <li>
                  <strong>About Service:</strong>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Maxime ducimus ratione facere repellendus, eaque id.
                  </p>
                </li>
                <li>
                  <strong>About Service:</strong>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Maxime ducimus ratione facere repellendus, eaque id.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <ClineSay />
      </div>
    </section>
  );
};

export default About;
