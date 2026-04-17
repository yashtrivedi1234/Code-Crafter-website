import React from 'react';
import { DollarSign, Heart, TrendingUp, MapPin, BookOpen, Users } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    { icon: DollarSign, title: "Competitive Salary", description: "Competitive compensation packages based on experience" },
    { icon: Heart, title: "Health Benefits", description: "Comprehensive health and wellness coverage" },
    { icon: TrendingUp, title: "Growth Opportunities", description: "Career development and learning opportunities" },
    { icon: MapPin, title: "Remote Work", description: "Flexible work arrangements and remote options" },
    { icon: BookOpen, title: "Training & Development", description: "Regular training and skill development programs" },
    { icon: Users, title: "Team Culture", description: "Collaborative and innovative work environment" }
  ];

  return (
    <section className="py-20 px-8 md:px-16 bg-linear-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-black mb-4">Why Work With Us</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We offer a great workplace where talented people can do their best work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
            <div key={index} className="p-6 bg-white rounded-lg border border-gray-200 hover:border-[#175E75] hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 rounded-lg brand-bg text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <IconComponent size={24} />
              </div>
              <h3 className="text-black mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
