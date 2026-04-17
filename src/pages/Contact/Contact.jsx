import React from 'react';
import PageHero from '../WhatWeDo/components/PageHero';
import ContactForm from './components/ContactForm';
import ContactCards from './components/ContactCards';

const Contact = () => {
  return (
    <div className="w-full bg-white min-h-screen">
      <PageHero 
        title="Get In Touch"
        subtitle="We'd love to hear from you. Send us a message!"
      />
      
      {/* Contact Info Cards */}
      <div className="relative py-8 px-8 md:px-16 bg-gradient-to-b from-slate-50 via-white to-slate-50">
        <div className="max-w-6xl mx-auto">
          <ContactCards />
        </div>
      </div>

      {/* Contact Form and Map Section */}
      <div className="relative py-8 px-8 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          
          {/* Map Section */}
          <div className="flex flex-col justify-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-800 h-96 lg:h-full lg:min-h-[600px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.6099999999998!2d-121.9945!3d37.3382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fef38cffffff!2s123%20Tech%20Street%2C%20Silicon%20Valley%2C%20CA%2094025!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
