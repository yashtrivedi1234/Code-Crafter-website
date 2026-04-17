import React from 'react';

const Statistics = () => {
  const stats = [
    { number: "100+", label: "Projects Delivered" },
    { number: "50+", label: "Happy Clients" },
    { number: "200+", label: "Team Members" },
    { number: "5+", label: "Years in Industry" }
  ];

  return (
    <section className="py-16 px-8 md:px-16 bg-linear-to-r from-[#175E75] to-[#0f3f4f] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <p className="text-sm md:text-base opacity-90">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
