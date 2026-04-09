import React from 'react';
// Aapka local video path:
import HeroVideo from "../../../assets/code-crafter-loader.mp4";
import HeroBg from "../../../assets/hero.webp"; 

const Hero = () => {
  // Brand Color: rgb(23, 94, 117) -> HEX: #175E75
  const brandColor = "#175E75";
  const brandText = "text-[#175E75]";

  return (
    <section 
      className="relative min-h-[90vh] flex flex-col items-center justify-start p-4 pt-12 md:pt-20 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${HeroBg})` }}
    >
      
      {/* Overlay: Branding ke saath match karne ke liye halka sa blue tint */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] z-0"></div>

      {/* --- Top Main Content --- */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-8xl font-black text-gray-900 leading-[1.1] text-center tracking-tight">
          Digital Experiences<br />
          that Drive <span className={brandText}>Infinite</span> Results
        </h1>
      </div>

      {/* --- Bottom Left Section --- */}
      <div className="absolute bottom-10 left-4 md:left-[8%] flex flex-col items-start max-w-[450px] text-left z-10">
        
        {/* Custom Animated Star SVG - Now Teal */}
        <div className="absolute -top-12 -right-4 z-20">
          <svg 
            className={`animate-pulse h-14 w-14 ${brandText} origin-center opacity-80`} 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 0L13.5 8.5L22 10L13.5 11.5L12 20L10.5 11.5L2 10L10.5 8.5L12 0Z" fill="currentColor"/>
          </svg>
        </div>

        {/* Video Player Box - Brand Border */}
        <div className={`relative w-[300px] h-[170px] rounded-2xl overflow-hidden shadow-2xl mb-6 border-4 border-white group`}>
          <video 
            src={HeroVideo} 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
          />
          {/* Subtle Inner Glow */}
          <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl"></div>
        </div>

        {/* Bottom Text */}
        <div className="bg-white/60 backdrop-blur-md p-4 rounded-xl border border-white/50 shadow-sm">
          <h4 className={`${brandText} text-lg font-bold mb-2 leading-tight uppercase tracking-wide`}>
            Empowering Businesses Online With Result Oriented Development
          </h4>
          <p className="text-gray-800 font-semibold text-sm leading-relaxed">
            We develop websites that enhance user experience and load faster on all devices & browsers.
          </p>
        </div>
      </div>

      {/* --- Bottom Right Section --- */}
      <div className="absolute bottom-16 right-4 md:right-[8%] hidden md:block z-10">
        <h3 className="text-2xl lg:text-4xl font-bold text-gray-900 tracking-tighter">
          Design <span className={`${brandText} font-black mx-2`}>+</span> 
          Develop <span className={`${brandText} font-black mx-2`}>+</span> 
          Promote
        </h3>
        {/* Decorative line under the slogan */}
        <div className={`h-1.5 w-full bg-[#175E75] mt-2 rounded-full opacity-20`}></div>
      </div>

    </section>
  )
}

export default Hero;