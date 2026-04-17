import React from 'react';
import { Zap, Target, Award } from 'lucide-react';

const AboutContent = () => {
  return (
    <section className="py-8 px-8 md:px-16 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-100/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="space-y-12">
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-[#175E75]/10 text-[#175E75] text-sm font-bold mb-4 uppercase tracking-wider">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-bold text-black">Founded on Innovation</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#175E75] to-cyan-400 mb-8"></div>
            <p className="text-gray-700 text-lg leading-relaxed mb-5 font-medium">
              Founded in 2019, Code Crafter started with a simple vision: to help businesses thrive in the digital world. What began as a small team of passionate developers has grown into a full-service digital agency with a diverse team of experts.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Today, we're proud to have delivered over 100 successful projects across various industries, from startups to Fortune 500 companies. Our commitment to excellence and innovation remains unchanged.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-12">
            <div className="p-8 rounded-2xl bg-white border-2 border-gray-200 hover:border-[#175E75] shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Target size={24} className="text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses with cutting-edge digital solutions that drive growth, enhance user experience, and create lasting value in an ever-evolving digital landscape.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border-2 border-gray-200 hover:border-[#175E75] shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
              <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap size={24} className="text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the trusted digital partner for businesses worldwide, known for our innovation, quality, and dedication to client success.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-50 via-white to-slate-50 p-12 md:p-16 rounded-3xl border-2 border-gray-200 mt-12 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-8">
              <Award size={28} className="text-[#175E75]" />
              <h3 className="text-2xl md:text-3xl font-bold text-black">By The Numbers</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center group cursor-pointer hover:scale-105 transition-transform">
                <p className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#175E75] to-cyan-500 mb-2">100+</p>
                <p className="text-sm text-gray-600 font-medium">Projects Delivered</p>
              </div>
              <div className="text-center group cursor-pointer hover:scale-105 transition-transform">
                <p className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-[#175E75] mb-2">50+</p>
                <p className="text-sm text-gray-600 font-medium">Satisfied Clients</p>
              </div>
              <div className="text-center group cursor-pointer hover:scale-105 transition-transform">
                <p className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 mb-2">200+</p>
                <p className="text-sm text-gray-600 font-medium">Team Members</p>
              </div>
              <div className="text-center group cursor-pointer hover:scale-105 transition-transform">
                <p className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#175E75] to-cyan-400 mb-2">5+</p>
                <p className="text-sm text-gray-600 font-medium">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
