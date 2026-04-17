import React from 'react';
import PageHero from '../WhatWeDo/components/PageHero';
import AboutContent from './components/AboutContent';
import TeamShowcase from './components/TeamShowcase';
import ValuesSection from './components/ValuesSection';

const Company = () => {
  return (
    <div className="w-full">
      <PageHero 
        title="About Code Crafter"
        subtitle="Discover the story behind the digital solutions that transform businesses"
      />
      <AboutContent />
      <ValuesSection />
      <TeamShowcase />
    </div>
  );
};

export default Company;
