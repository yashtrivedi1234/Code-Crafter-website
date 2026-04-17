import React, { useState } from 'react';
import { Lightbulb, Handshake, Target, Users, Sprout, Sparkles } from 'lucide-react';

const ValuesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const values = [
    {
      title: "Innovation",
      description: "We constantly explore new technologies and methodologies to deliver cutting-edge solutions",
      icon: Lightbulb,
      color: "bg-yellow-100",
      iconColor: "text-yellow-600"
    },
    {
      title: "Integrity",
      description: "We believe in transparency and honesty in all our client relationships and business dealings",
      icon: Handshake,
      color: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      title: "Excellence",
      description: "We are committed to delivering high-quality work that exceeds expectations",
      icon: Target,
      color: "bg-red-100",
      iconColor: "text-red-600"
    },
    {
      title: "Collaboration",
      description: "We work closely with our clients, treating them as partners in the journey to success",
      icon: Users,
      color: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      title: "Growth",
      description: "We invest in our team's development and celebrate continuous learning and improvement",
      icon: Sprout,
      color: "bg-emerald-100",
      iconColor: "text-emerald-600"
    },
    {
      title: "Impact",
      description: "We focus on creating solutions that generate real, measurable business results",
      icon: Sparkles,
      color: "bg-purple-100",
      iconColor: "text-purple-600"
    }
  ];

  return (
    <section className="py-8 px-8 md:px-16 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-2 rounded-full bg-[#175E75]/10 text-[#175E75] text-sm font-bold mb-4 uppercase tracking-wider">Core Values</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black">What Drives Us</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#175E75] to-cyan-400 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            These principles guide everything we do and shape our company culture
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            const isHovered = hoveredIndex === index;
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`p-8 bg-white rounded-2xl border-2 transition-all duration-500 group cursor-pointer ${ 
                  isHovered 
                    ? 'border-[#175E75] shadow-2xl -translate-y-4 scale-105' 
                    : 'border-gray-200 hover:border-gray-300 shadow-md'
                }`}
              >
                <div className={`w-14 h-14 rounded-xl ${value.color} flex items-center justify-center mb-5 transition-all duration-500 ${ 
                  isHovered ? 'scale-125 rotate-12 shadow-lg' : 'shadow-md'
                }`}>
                  <IconComponent size={28} className={`${value.iconColor} transition-transform duration-500 ${ 
                    isHovered ? 'scale-110 rotate-12' : ''
                  }`} />
                </div>
                <h3 className={`font-bold mb-3 transition-all duration-300 ${ 
                  isHovered ? 'text-[#175E75] text-xl' : 'text-black text-lg'
                }`}>{value.title}</h3>
                <p className={`leading-relaxed transition-all duration-300 ${ 
                  isHovered ? 'text-gray-700 font-medium' : 'text-gray-600 text-sm'
                }`}>{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
