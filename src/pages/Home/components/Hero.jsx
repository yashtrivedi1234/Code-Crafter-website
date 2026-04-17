import React from 'react';
import HeroVideo from "../../../assets/hero1.mp4";

const Hero = () => {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden">

      {/* Full-Width Background Video */}
      <video
        src={HeroVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/75 via-black/40 to-transparent z-10" />

      {/* Content Overlay */}
      <div className="relative z-20 h-full flex flex-col justify-center px-8 md:px-16 max-w-3xl">

        {/* Brand Badge */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-8 bg-white/70" />
          <span className="text-white kalam-bold text-xs tracking-[0.2em] uppercase border border-white/70 px-3 py-1 rounded-full">
            Code Crafter
          </span>
          <div className="h-px w-8 bg-white/70" />
        </div>

        {/* Main Heading — font-family & font-size handled by global h1 */}
        <h1 className="text-white leading-tight mb-5">
          Digital Experiences<br />
          that Drive{" "}
          <span className="brand-text">Infinite</span>{" "}
          Results
        </h1>

        {/* Subtext — font-family & font-size handled by global p */}
        <p className="text-white/75 leading-relaxed mb-8 max-w-xl">
          We develop websites that enhance user experience and load faster on all devices & browsers.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4">
          <button className="px-7 py-3 kalam-bold text-white rounded-md transition-all duration-300 hover:opacity-90 brand-bg">
            Our Projects →
          </button>
          <button className="px-7 py-3 kalam-bold text-white rounded-md border-2 border-white/70 transition-all duration-300 hover:bg-white/10 hover:border-white">
            Our Services →
          </button>
        </div>
      </div>

      {/* Bottom Slogan — font-family & font-size handled by global h3 */}
      <div className="absolute bottom-16 right-8 md:right-16 z-20 hidden md:block text-right">
        <h3 className="text-white tracking-tight">
          Design{" "}
          <span className="brand-text kalam-bold mx-1">+</span>
          Develop{" "}
          <span className="brand-text kalam-bold mx-1">+</span>
          Promote
        </h3>
        <div className="h-1 w-full mt-2 rounded-full opacity-40 brand-bg" />
      </div>

      {/* Scroll Down Button */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
        <button className="w-10 h-10 rounded-full border-2 border-white/60 flex items-center justify-center text-white hover:border-white transition-all">
          ↓
        </button>
      </div>

    </section>
  );
};

export default Hero;