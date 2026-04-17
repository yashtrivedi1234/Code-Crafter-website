import React from 'react';
import HeroVideo from "../../../assets/code-crafter-loader.mp4";

const Hero = () => {
  const brandColor = "#175E75";

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">

      {/* ✅ Full-Width Background Video */}
      <video
        src={HeroVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* ✅ Dark Gradient Overlay - left side dark, right side transparent */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent z-10" />

      {/* ✅ Content Overlay */}
      <div className="relative z-20 h-full flex flex-col justify-center px-8 md:px-16 max-w-3xl">

        {/* Brand Badge - Top */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-[1px] w-8 bg-[#175E75]" />
          <span className="text-[#175E75] text-xs font-bold tracking-[0.2em] uppercase border border-[#175E75]/40 px-3 py-1 rounded-full">
            Code Crafter
          </span>
          <div className="h-[1px] w-8 bg-[#175E75]" />
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-5">
          Digital Experiences<br />
          that Drive{" "}
          <span style={{ color: brandColor }}>Infinite</span>{" "}
          Results
        </h1>

        {/* Subtext */}
        <p className="text-white/75 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
          We develop websites that enhance user experience and load faster on all devices & browsers.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4">
          <button
            className="px-7 py-3 font-bold text-white rounded-md transition-all duration-300 hover:opacity-90"
            style={{ backgroundColor: brandColor }}
          >
            Our Projects →
          </button>
          <button
            className="px-7 py-3 font-bold rounded-md border-2 transition-all duration-300 hover:bg-white/10"
            style={{ color: brandColor, borderColor: brandColor }}
          >
            Our Services →
          </button>
        </div>
      </div>

      {/* ✅ Bottom Slogan - Right Side */}
      <div className="absolute bottom-16 right-8 md:right-16 z-20 hidden md:block text-right">
        <h3 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">
          Design{" "}
          <span style={{ color: brandColor }} className="font-black mx-1">+</span>
          Develop{" "}
          <span style={{ color: brandColor }} className="font-black mx-1">+</span>
          Promote
        </h3>
        <div className="h-1 w-full mt-2 rounded-full opacity-40" style={{ backgroundColor: brandColor }} />
      </div>

      {/* ✅ Scroll Down Button */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
        <button className="w-10 h-10 rounded-full border-2 border-white/60 flex items-center justify-center text-white hover:border-white transition-all">
          ↓
        </button>
      </div>

      {/* ✅ Right Side Vertical CTA (like the image) */}
     

    </section>
  );
};

export default Hero;