import React from 'react';
import { TrendingUp, Users, Award, Rocket } from 'lucide-react';

const Statistics = () => {
  const stats = [
    { number: "100+", label: "Projects Delivered", icon: Award, color: "text-blue-400" },
    { number: "50+", label: "Happy Clients", icon: Users, color: "text-cyan-400" },
    { number: "200+", label: "Team Members", icon: TrendingUp, color: "text-green-400" },
    { number: "5+", label: "Years in Industry", icon: Rocket, color: "text-purple-400" }
  ];

  return (
    <section className="py-8 px-8 md:px-16 bg-gradient-to-r from-[#175E75] via-[#0f3f4f] to-[#0a2838] text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center group cursor-pointer hover:scale-110 transition-transform duration-300">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 group-hover:scale-125">
                    <IconComponent size={32} className={`${stat.color} transition-transform group-hover:scale-110`} />
                  </div>
                </div>
                <div className="text-5xl md:text-6xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-white">
                  {stat.number}
                </div>
                <p className="text-sm md:text-base opacity-90 font-medium group-hover:opacity-100 transition-opacity">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
