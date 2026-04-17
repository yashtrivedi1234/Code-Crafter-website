import React from 'react';
import PageHero from '../WhatWeDo/components/PageHero';
import JobListings from './components/JobListings';
import BenefitsSection from './components/BenefitsSection';

const JoinUs = () => {
  return (
    <div className="w-full">
      <PageHero 
        title="Join Our Team"
        subtitle="Help us create amazing digital experiences"
      />
      <BenefitsSection />
      <JobListings />
    </div>
  );
};

export default JoinUs;
