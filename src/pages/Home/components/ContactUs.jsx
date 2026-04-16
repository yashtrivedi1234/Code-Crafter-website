import React from 'react';

const ContactUs = () => {
  const brandText = "text-[#175E75]";
  const brandBg = "bg-[#175E75]";
  const brandFocusRing = "focus:ring-[#175E75]";
  const brandShadow = "shadow-[#175E75]/30";

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  return (
    <section className="bg-[#f8fafb] min-h-screen flex items-center py-20 px-6 sm:px-12 lg:px-24 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
        
        {/* Left Column: Visual/Images */}
        <div className="relative flex justify-center items-center">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
            alt="Business Digital Transformation" 
            className="w-full max-w-md lg:max-w-full drop-shadow-2xl rounded-2xl object-cover h-137.5 z-10" 
          />
          
          {/* Decorative Background Blobs */}
          <div className="absolute z-0 w-80 h-80 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60 -top-10 -left-10"></div>
          <div className="absolute z-0 w-80 h-80 bg-slate-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60 -bottom-10 -right-10"></div>
        </div>

        {/* Right Column: Content & Form */}
        <div className="flex flex-col gap-8 z-10 self-stretch">
          
          {/* Headings */}
          <div className="space-y-4">
            <h2 className={`text-sm font-bold uppercase tracking-[0.2em] ${brandText}`}>
              Get in Touch
            </h2>
            <h2 className="text-[clamp(1.25rem,4vw,2rem)] font-extrabold text-gray-900 leading-tight">
              Unlock your business potential with <span className={brandText}>Code Crafter</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Step up your online presence with the proper utilization of digital assets. Our experts are ready to help you scale.
            </p>
          </div>

          {/* Modern Contact Form */}
          <form 
            onSubmit={handleSubmit} 
            className={`flex-1 flex flex-col gap-5 bg-white p-8 md:p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input 
                type="text" 
                placeholder="Enter name" 
                className={`w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 placeholder-gray-400 focus:ring-2 ${brandFocusRing} focus:border-transparent focus:bg-white outline-none transition-all`} 
                required 
              />
              <input 
                type="tel" 
                placeholder="Enter number" 
                className={`w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 placeholder-gray-400 focus:ring-2 ${brandFocusRing} focus:border-transparent focus:bg-white outline-none transition-all`} 
                required 
              />
            </div>

            <div>
              <input 
                type="email" 
                placeholder="Please enter your work email" 
                className={`w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 placeholder-gray-400 focus:ring-2 ${brandFocusRing} focus:border-transparent focus:bg-white outline-none transition-all`} 
                required 
              />
            </div>

            <div className="flex-1">
              <textarea 
                placeholder="How can we help you?" 
                className={`h-full w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 placeholder-gray-400 focus:ring-2 ${brandFocusRing} focus:border-transparent focus:bg-white outline-none transition-all resize-none`} 
                required
              ></textarea>
            </div>

            {/* Call to Action Button */}
            <button 
              type="submit" 
              className={`w-full inline-flex items-center justify-center gap-3 px-8 py-5 ${brandBg} hover:opacity-90 text-white font-bold text-lg rounded-xl transition-all shadow-xl ${brandShadow} hover:-translate-y-0.5`}
            >
              Talk to our experts
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </form>
          
        </div>
      </div>
    </section>
  );
};

export default ContactUs;