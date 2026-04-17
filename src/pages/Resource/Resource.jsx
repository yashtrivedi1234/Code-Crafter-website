import React from 'react';
import PageHero from '../WhatWeDo/components/PageHero';
import BlogGrid from './components/BlogGrid';

const Resource = () => {
  return (
    <div className="w-full">
      <PageHero 
        title="Resources & Blog"
        subtitle="Expert insights, industry trends, and practical tips to accelerate your digital transformation journey"
      />
      <BlogGrid />
    </div>
  );
};

export default Resource;
