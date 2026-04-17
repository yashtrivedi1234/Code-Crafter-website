import React, { useState } from 'react';
import { Users, Award, Zap, Headphones, TrendingUp, DollarSign } from 'lucide-react';

const WhyChooseUs = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const reasons = [
    { title: "Expert Team", description: "Experienced developers, designers, and strategists", icon: Users, color: "from-blue-500 to-blue-600" },
    { title: "Proven Track Record", description: "100+ successful projects delivered to clients", icon: Award, color: "from-yellow-500 to-yellow-600" },
    { title: "Cutting-edge Tech", description: "Latest technologies and best practices", icon: Zap, color: "from-green-500 to-green-600" },
    { title: "24/7 Support", description: "Dedicated support team always available", icon: Headphones, color: "from-purple-500 to-purple-600" },
    { title: "Scalable Solutions", description: "Solutions that grow with your business", icon: TrendingUp, color: "from-red-500 to-red-600" },
    { title: "Cost Effective", description: "Competitive pricing without compromising quality", icon: DollarSign, color: "from-cyan-500 to-cyan-600" }
  ];

  return (
    <section className="py-8 px-8 md:px-16 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-100/20 rounded-full blur-3xl animate-pulse delay-700"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-2 rounded-full bg-[#175E75]/10 text-[#175E75] text-sm font-bold mb-4 uppercase tracking-wider">Why Us</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black">Why Choose Code Crafter</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#175E75] to-cyan-400 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg leading-relaxed">We bring expertise, innovation, and dedication to every project</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            const isHovered = hoveredIndex === index;
            return (
              <div 
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`p-8 rounded-2xl border-2 transition-all duration-500 group cursor-pointer ${ 
                  isHovered 
                    ? `border-[#175E75] shadow-2xl -translate-y-4 scale-105 bg-gradient-to-br ${reason.color} text-white` 
                    : 'border-gray-200 hover:border-gray-300 shadow-md bg-white'
                }`}
              >
                {/* Icon box */}
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 ${ 
                  isHovered 
                    ? 'bg-white scale-125 shadow-lg' 
                    : `bg-gradient-to-br ${reason.color} text-white shadow-md`
                }`}>
                  <IconComponent size={32} className={`transition-colors duration-300 ${ 
                    isHovered ? `text-transparent bg-clip-text bg-gradient-to-br ${reason.color}` : 'text-white'
                  }`} />
                </div>

                {/* Content */}
                <h3 className={`text-xl font-bold mb-3 transition-all duration-300 ${ 
                  isHovered ? 'text-white text-2xl' : 'text-black'
                }`}>{reason.title}</h3>
                <p className={`transition-all duration-300 ${ 
                  isHovered ? 'text-gray-100 font-medium' : 'text-gray-600 text-sm'
                }`}>{reason.description}</p>

                {/* Bottom accent */}
                <div className={`mt-4 h-1 bg-gradient-to-r ${reason.color} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
