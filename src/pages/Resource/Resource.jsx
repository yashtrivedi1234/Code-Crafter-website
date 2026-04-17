import React from 'react';
import PageHero from '../WhatWeDo/components/PageHero';
import BlogGrid from './components/BlogGrid';

const Resource = () => {
  return (
    <div className="w-full">
      <PageHero 
        title="Resources & Blog"
        subtitle="Insights, tips, and industry trends to help you grow your business"
      />
      <BlogGrid />
    </div>
  );
};

export default Resource;
