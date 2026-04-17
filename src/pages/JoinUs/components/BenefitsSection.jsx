import React, { useState } from 'react';
import { DollarSign, Heart, TrendingUp, MapPin, BookOpen, Users } from 'lucide-react';

const BenefitsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const benefits = [
    { icon: DollarSign, title: "Competitive Salary", description: "Competitive compensation packages based on experience", bgGradient: "from-blue-50 to-blue-100" },
    { icon: Heart, title: "Health Benefits", description: "Comprehensive health and wellness coverage", bgGradient: "from-red-50 to-red-100" },
    { icon: TrendingUp, title: "Growth Opportunities", description: "Career development and learning opportunities", bgGradient: "from-green-50 to-green-100" },
    { icon: MapPin, title: "Remote Work", description: "Flexible work arrangements and remote options", bgGradient: "from-purple-50 to-purple-100" },
    { icon: BookOpen, title: "Training & Development", description: "Regular training and skill development programs", bgGradient: "from-amber-50 to-amber-100" },
    { icon: Users, title: "Team Culture", description: "Collaborative and innovative work environment", bgGradient: "from-cyan-50 to-cyan-100" }
  ];

  const iconColors = [
    "bg-blue-500", "bg-red-500", "bg-green-500", 
    "bg-purple-500", "bg-amber-500", "bg-cyan-500"
  ];

  return (
    <section className="py-10 md:py-24 px-8 md:px-16 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-15 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-100 rounded-full blur-3xl opacity-15 animate-pulse delay-700"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-2 rounded-full bg-[#175E75]/10 text-[#175E75] text-sm font-bold mb-4 uppercase tracking-wider">Why Join Us</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black">Amazing Benefits Await</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#175E75] to-cyan-400 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            We believe in investing in our team. Enjoy comprehensive benefits designed to support your growth and well-being.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            const isHovered = hoveredIndex === index;
            return (
              <div 
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative p-8 bg-white rounded-2xl border-2 transition-all duration-500 group cursor-pointer overflow-hidden ${
                  isHovered 
                    ? 'border-[#175E75] shadow-2xl -translate-y-4 scale-105' 
                    : 'border-gray-200 hover:border-gray-300 shadow-md'
                }`}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.bgGradient} opacity-0 transition-opacity duration-500 -z-10 ${
                  isHovered ? 'opacity-10' : ''
                }`}></div>
                
                <div className={`w-14 h-14 rounded-xl ${iconColors[index]} text-white flex items-center justify-center mb-6 transition-all duration-500 shadow-lg ${
                  isHovered ? 'scale-125 rotate-12 shadow-xl' : 'group-hover:scale-110'
                }`}>
                  <IconComponent size={28} className={`transition-transform duration-500 ${
                    isHovered ? 'scale-110' : ''
                  }`} />
                </div>
                <h3 className={`font-bold mb-2 transition-all duration-300 ${
                  isHovered ? 'text-[#175E75] text-xl' : 'text-black text-lg'
                }`}>{benefit.title}</h3>
                <p className={`leading-relaxed transition-all duration-300 ${
                  isHovered ? 'text-gray-700 font-medium' : 'text-gray-600 text-sm'
                }`}>{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
