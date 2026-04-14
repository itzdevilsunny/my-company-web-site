import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import Pricing from '../components/Pricing';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <Services />
      <WhyUs />
      <Pricing />
    </div>
  );
};

export default Home;
