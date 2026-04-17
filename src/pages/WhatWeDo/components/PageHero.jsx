import React from 'react';

const PageHero = ({ title, subtitle }) => {
  return (
    <section className="relative w-full min-h-[28vh] overflow-hidden flex items-center justify-center bg-gradient-to-b from-[#0f4f64] via-[#175E75] to-[#11485a]">
      {/* Decorative background orbs */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute -top-20 left-1/4 h-56 w-56 rounded-full bg-cyan-200 blur-3xl"></div>
        <div className="absolute -bottom-24 right-1/4 h-64 w-64 rounded-full bg-sky-200 blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-8 md:px-16 max-w-4xl mx-auto">
        {/* Main title with enhanced styling */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default PageHero;
