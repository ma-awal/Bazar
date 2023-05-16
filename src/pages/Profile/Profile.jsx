import React, { useState, useEffect } from 'react';
import './Profile.css';
import Profile_Data from '../../data/Profile_Data';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const { tab } = useParams();
  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
    const defaultTab = Profile_Data[0].id;
    setActiveTab(tab || defaultTab);
  }, [tab]);

  const handleTab = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <section className="Profile ">
      <div className="container">
        <div className="row gy-2 gy-sm-4 gy-md-5 gy-lg-0">
          <div className="col-12 col-lg-3">
            <h3 className="text-center text-lg-start mb-4">User Profile</h3>
            <ul className=" tab-btn  ">
              {Profile_Data.map((tab) => {
                return (
                  <li className="list">
                    <img
                      src={tab.icon}
                      className="icon img-fluid  pe-2 "
                      alt="name"
                    />
                    <button
                      key={tab.id}
                      className={`btn  btn-link nav-link ${
                        activeTab === tab.id ? 'active' : ''
                      }`}
                      onClick={() => handleTab(tab.id)}
                    >
                      {tab.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-12 col-lg-9">
            <div className="tab-content">
              {Profile_Data.map((tab) => {
                return (
                  <div
                    key={tab.id}
                    className={` tab-pane fade   ${
                      activeTab === tab.id ? ' show active' : ''
                    }`}
                  >
                    {tab.component}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
