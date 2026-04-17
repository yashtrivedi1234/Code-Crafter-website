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
    <section className="relative w-full min-h-screen overflow-hidden font-sans">

      {/* Background Image — full section cover */}
      <img
        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
        alt="Business Digital Transformation"
        className="absolute inset-0 w-full h-full object-cover brightness-50"
      />

      {/* Overlay Content — right side pe form card */}
      <div className="relative z-10 flex items-center justify-end min-h-screen px-6 sm:px-12 lg:px-20 py-16">

        <div className="w-full max-w-lg flex flex-col gap-6 bg-white rounded-3xl p-8 md:p-10 shadow-2xl">

          {/* Headings */}
          <div className="space-y-3">
            <h2 className={`text-xs font-bold uppercase tracking-[0.2em] ${brandText}`}>
              Get in Touch
            </h2>
            <h2 className="text-2xl font-extrabold text-gray-900 leading-tight">
              Unlock your business potential with <span className={brandText}>Code Crafter</span>
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              Step up your online presence with the proper utilization of digital assets. Our experts are ready to help you scale.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Enter name"
                className={`w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 placeholder-gray-400 focus:ring-2 ${brandFocusRing} focus:border-transparent focus:bg-white outline-none transition-all text-sm`}
                required
              />
              <input
                type="tel"
                placeholder="Enter number"
                className={`w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 placeholder-gray-400 focus:ring-2 ${brandFocusRing} focus:border-transparent focus:bg-white outline-none transition-all text-sm`}
                required
              />
            </div>

            <input
              type="email"
              placeholder="Please enter your work email"
              className={`w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 placeholder-gray-400 focus:ring-2 ${brandFocusRing} focus:border-transparent focus:bg-white outline-none transition-all text-sm`}
              required
            />

            <textarea
              placeholder="How can we help you?"
              rows={4}
              className={`w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 placeholder-gray-400 focus:ring-2 ${brandFocusRing} focus:border-transparent focus:bg-white outline-none transition-all resize-none text-sm`}
              required
            />

            <button
              type="submit"
              className={`w-full inline-flex items-center justify-center gap-3 px-8 py-4 ${brandBg} hover:opacity-90 text-white font-bold text-base rounded-xl transition-all shadow-xl ${brandShadow} hover:-translate-y-0.5`}
            >
              Talk to our experts
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
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