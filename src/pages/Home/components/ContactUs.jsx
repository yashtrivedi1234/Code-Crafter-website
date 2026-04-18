const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden">

      {/* Background Image — full section cover */}
      <img
        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
        alt="Business Digital Transformation"
        className="absolute inset-0 w-full h-full object-cover brightness-50"
      />

      {/* Overlay Content — right side pe form card */}
      <div className="relative z-10 flex items-center justify-end min-h-screen px-6 py-8">

        <div className="w-full max-w-lg flex flex-col gap-6 bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-t-4 border-[#175E75]">

          {/* Headings */}
          <div className="space-y-4">
            <span className="inline-block px-4 py-2 rounded-full bg-[#175E75]/10 text-[#175E75] text-xs font-bold uppercase tracking-wider">Get in Touch</span>
            <h2 className="text-2xl md:text-3xl font-bold text-black leading-tight">
              Unlock your business potential with <span className="text-[#175E75]">Code Crafter</span>
            </h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Step up your online presence with the proper utilization of digital assets. Our experts are ready to help you scale.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Enter name"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#175E75] focus:border-[#175E75] focus:bg-white outline-none transition-all text-sm font-medium hover:border-gray-300"
                required
              />
              <input
                type="tel"
                placeholder="Enter number"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#175E75] focus:border-[#175E75] focus:bg-white outline-none transition-all text-sm font-medium hover:border-gray-300"
                required
              />
            </div>

            <input
              type="email"
              placeholder="Please enter your work email"
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#175E75] focus:border-[#175E75] focus:bg-white outline-none transition-all text-sm font-medium hover:border-gray-300"
              required
            />

            <textarea
              placeholder="How can we help you?"
              rows={4}
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#175E75] focus:border-[#175E75] focus:bg-white outline-none transition-all resize-none text-sm font-medium hover:border-gray-300"
              required
            />

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#175E75] hover:bg-[#175E75]/90 text-white font-bold text-base rounded-xl transition-all shadow-xl hover:-translate-y-1"
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