import React from 'react';
import PageHero from '../WhatWeDo/components/PageHero';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';

const Contact = () => {
  return (
    <div className="w-full">
      <PageHero 
        title="Get In Touch"
        subtitle="We'd love to hear from you. Send us a message!"
      />
      <div className="py-20 px-8 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

export default Contact;
