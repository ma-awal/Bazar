import React, { useState } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { BiMinus } from 'react-icons/bi';
import Faq_Data from '../../data/Faq_Data';
import FaqForm from '../../components/FaqForm/FaqForm';
import './faq.css';

const Faqs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [expand, setExpand] = useState(null);
  const toggleQuestion = (index) => {
    if (index === expand) {
      setExpand(null);
    } else {
      setExpand(index);
    }
  };
  return (
    <section className="faqs py-3 py-md-4 py-lg-5">
      <div className="container  ">
        <div className="faq_heading text-center lh-lg col-10 col-md-8 col-lg-6 mx-auto ">
          <h1 className="title">FAQ</h1>
          <h2 className="mb-3">Have any questions</h2>
          <p>
            Anything else you want to know about our application process? This
            list of frequently asked questions is a good place to start.
          </p>
        </div>
        <div className="row justify-content-between ">
          <div className=" col-12 col-md-6       ">
            <div className="tab_btn flex_row justify-content-start justify-content-lg-between  flex-wrap  ">
              {Faq_Data.map((tab, index) => (
                <button
                  key={index}
                  className={`   border-0 btn ${
                    activeTab === index ? 'btn active' : ''
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab.name}
                </button>
              ))}
            </div>
            <div className="tab-content ">
              {Faq_Data.map((tab, index) => (
                <div
                  key={index}
                  className={` tab-pane fade  ${
                    activeTab === index ? ' show active' : ''
                  }`}
                >
                  {tab.faqs.map((question, index) => {
                    const { num, heading, para } = question;
                    const isExpand = expand === index;
                    return (
                      <div key={index} className="  question  ">
                        <div
                          className="flex_row "
                          style={{ cursor: 'pointer' }}
                          onClick={() => toggleQuestion(index)}
                        >
                          <div className="info">
                            <span>{num}</span>
                            <span>{heading}</span>
                          </div>
                          <button>
                            {isExpand ? <BiMinus /> : <BsPlusLg />}
                          </button>
                        </div>
                        {isExpand && <div className="para ">{para}</div>}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
          <div className=" col-12 col-md-5 col-lg-4  ">
            <FaqForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
