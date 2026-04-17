import React from 'react';
import Hero from '../components/features/Hero';
import Services from '../components/features/Services';
import WhyUs from '../components/features/WhyUs';
import Pricing from '../components/features/Pricing';
import TechStack from '../components/features/TechStack';
import Portfolio from '../components/features/Portfolio';
import Team from '../components/features/Team';
import Testimonials from '../components/features/Testimonials';
import Contact from '../components/features/Contact';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <Services />
      <Pricing />
      <WhyUs />
      <TechStack />
      <Portfolio teaser={true} />
      <Team teaser={true} />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
