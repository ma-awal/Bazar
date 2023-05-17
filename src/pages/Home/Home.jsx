import React from 'react';
import HomeBanner from '../../components/HomeAll/HomeBanner/HomeBanner';
import Add from '../../components/HomeAll/Add/Add';
import Department from '../../components/HomeAll/Department/Index/Department';
import BestSell from '../../components/HomeAll/BestSeller/BestSell';
import BlogPost from '../../components/HomeAll/BlogPost/BlogPost';
import './Home.css';
const Home = () => {
  return (
    <main className="home">
      <HomeBanner />
      <Department />
      <Add />
      <BestSell />
      <BlogPost />
    </main>
  );
};

export default Home;
