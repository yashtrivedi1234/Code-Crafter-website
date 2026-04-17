import React from 'react';
import PageHero from '../WhatWeDo/components/PageHero';
import PortfolioGrid from './components/PortfolioGrid';
import Statistics from './components/Statistics';

const OurWork = () => {
  return (
    <div className="w-full">
      <PageHero 
        title="Our Work"
        subtitle="Showcasing our best projects and successful collaborations"
      />
      <Statistics />
      <PortfolioGrid />
    </div>
  );
};

export default OurWork;
