import React from 'react';

const AboutContent = () => {
  return (
    <section className="py-20 px-8 md:px-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          <div>
            <h2 className="text-black mb-4">Our Story</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Founded in 2019, Code Crafter started with a simple vision: to help businesses thrive in the digital world. What began as a small team of passionate developers has grown into a full-service digital agency with a diverse team of experts.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Today, we're proud to have delivered over 100 successful projects across various industries, from startups to Fortune 500 companies. Our commitment to excellence and innovation remains unchanged.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-black mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses with cutting-edge digital solutions that drive growth, enhance user experience, and create lasting value in an ever-evolving digital landscape.
              </p>
            </div>
            <div>
              <h3 className="text-black mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the trusted digital partner for businesses worldwide, known for our innovation, quality, and dedication to client success.
              </p>
            </div>
          </div>

          <div className="bg-linear-to-r from-slate-50 to-white p-8 rounded-lg border border-gray-200 mt-12">
            <h3 className="text-black mb-4">By The Numbers</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <p className="text-3xl font-bold text-[#175E75] mb-1">100+</p>
                <p className="text-sm text-gray-600">Projects Delivered</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#175E75] mb-1">50+</p>
                <p className="text-sm text-gray-600">Satisfied Clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#175E75] mb-1">200+</p>
                <p className="text-sm text-gray-600">Team Members</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#175E75] mb-1">5+</p>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
