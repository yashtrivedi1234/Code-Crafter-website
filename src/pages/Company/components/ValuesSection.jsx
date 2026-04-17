import React from 'react';
import { Lightbulb, Handshake, Target, Users, Sprout, Sparkles } from 'lucide-react';

const ValuesSection = () => {
  const values = [
    {
      title: "Innovation",
      description: "We constantly explore new technologies and methodologies to deliver cutting-edge solutions",
      icon: Lightbulb
    },
    {
      title: "Integrity",
      description: "We believe in transparency and honesty in all our client relationships and business dealings",
      icon: Handshake
    },
    {
      title: "Excellence",
      description: "We are committed to delivering high-quality work that exceeds expectations",
      icon: Target
    },
    {
      title: "Collaboration",
      description: "We work closely with our clients, treating them as partners in the journey to success",
      icon: Users
    },
    {
      title: "Growth",
      description: "We invest in our team's development and celebrate continuous learning and improvement",
      icon: Sprout
    },
    {
      title: "Impact",
      description: "We focus on creating solutions that generate real, measurable business results",
      icon: Sparkles
    }
  ];

  return (
    <section className="py-20 px-8 md:px-16 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-black mb-4">Our Core Values</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            These principles guide everything we do and shape our company culture
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
            <div
              key={index}
              className="p-8 bg-white rounded-lg border border-gray-200 hover:border-[#175E75] hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg brand-bg text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <IconComponent size={24} />
              </div>
              <h3 className="text-black mb-2 group-hover:text-[#175E75] transition-colors">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
