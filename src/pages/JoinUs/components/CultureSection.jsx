import React, { useState } from 'react';
import { Users, Zap, Award, Target } from 'lucide-react';

const CultureSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const values = [
    {
      icon: Users,
      title: "Collaborative",
      description: "Work with talented professionals",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Zap,
      title: "Innovative",
      description: "Drive cutting-edge solutions",
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: Award,
      title: "Award-Winning",
      description: "Recognized for excellence",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Making real impact together",
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600"
    }
  ];

  return (
    <section className="py-8 px-8 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-cyan-200/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            const isHovered = hoveredIndex === index;
            return (
              <div 
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group text-center p-8 rounded-2xl bg-gradient-to-br from-white to-slate-50 border-2 transition-all duration-500 cursor-pointer ${
                  isHovered 
                    ? 'border-[#175E75] shadow-2xl -translate-y-3 scale-105' 
                    : 'border-gray-200 hover:border-gray-300 shadow-md'
                }`}
              >
                <div className={`w-16 h-16 rounded-full ${value.bgColor} flex items-center justify-center mx-auto mb-6 group-hover:scale-125 transition-all duration-500 shadow-lg ${
                  isHovered ? 'ring-4 ring-offset-2 ring-[#175E75]/30' : ''
                }`}>
                  <IconComponent size={32} className={`${value.iconColor} transition-transform duration-500 ${
                    isHovered ? 'rotate-12 scale-110' : ''
                  }`} />
                </div>
                <h3 className={`font-bold mb-2 text-lg transition-all duration-300 ${
                  isHovered ? 'text-[#175E75] text-xl' : 'text-black'
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

export default CultureSection;
