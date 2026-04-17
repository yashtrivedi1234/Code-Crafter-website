import React from 'react';
import { Users, Award, Zap, Headphones, TrendingUp, DollarSign } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    { title: "Expert Team", description: "Experienced developers, designers, and strategists", icon: Users },
    { title: "Proven Track Record", description: "100+ successful projects delivered to clients", icon: Award },
    { title: "Cutting-edge Tech", description: "Latest technologies and best practices", icon: Zap },
    { title: "24/7 Support", description: "Dedicated support team always available", icon: Headphones },
    { title: "Scalable Solutions", description: "Solutions that grow with your business", icon: TrendingUp },
    { title: "Cost Effective", description: "Competitive pricing without compromising quality", icon: DollarSign }
  ];

  return (
    <section className="py-20 px-8 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-black mb-4">Why Choose Code Crafter</h2>
          <p className="text-gray-600 text-lg">We bring expertise, innovation, and dedication to every project</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
            <div key={index} className="p-6 rounded-lg bg-slate-50 hover:bg-[#175E75] hover:text-white transition-all duration-300 group">
              <div className="w-12 h-12 rounded-lg brand-bg text-white flex items-center justify-center mb-4 group-hover:bg-white group-hover:text-[#175E75] transition-colors">
                <IconComponent size={24} />
              </div>
              <h3 className="font-bold mb-2 group-hover:text-white">{reason.title}</h3>
              <p className="text-gray-600 group-hover:text-gray-100">{reason.description}</p>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
