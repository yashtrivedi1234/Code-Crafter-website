import React from 'react';

const PageHero = ({ title, subtitle }) => {
  return (
    <section className="relative w-full h-[60vh] overflow-hidden bg-linear-to-b from-slate-50 to-white flex items-center justify-center">
      {/* Decorative background element */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 brand-bg rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 brand-bg rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-8 md:px-16">
        <h1 className="text-black mb-4">{title}</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
      </div>
    </section>
  );
};

export default PageHero;
