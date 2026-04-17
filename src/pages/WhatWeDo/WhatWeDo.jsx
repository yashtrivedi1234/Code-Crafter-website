import React from 'react';
import PageHero from './components/PageHero';
import ServicesGrid from './components/ServicesGrid';
import ProcessOverview from './components/ProcessOverview';
import WhyChooseUs from './components/WhyChooseUs';

const WhatWeDo = () => {
  return (
    <div className="w-full">
      <PageHero 
        title="What We Do"
        subtitle="Comprehensive digital solutions tailored to transform your business and accelerate growth"
      />
      <ServicesGrid />
      <ProcessOverview />
      <WhyChooseUs />
    </div>
  );
};

export default WhatWeDo;
