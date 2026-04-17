import React, { useState } from 'react';

const TeamShowcase = () => {
  const [hoveredId, setHoveredId] = useState(null);
  
  const teamMembers = [
    { id: 1, name: "John Smith", role: "CEO & Founder", initials: "JS", color: "from-blue-500 to-cyan-400" },
    { id: 2, name: "Sarah Johnson", role: "CTO", initials: "SJ", color: "from-purple-500 to-blue-400" },
    { id: 3, name: "Mike Chen", role: "Lead Developer", initials: "MC", color: "from-green-500 to-cyan-400" },
    { id: 4, name: "Emma Davis", role: "Design Lead", initials: "ED", color: "from-pink-500 to-purple-400" },
    { id: 5, name: "Alex Rodriguez", role: "Project Manager", initials: "AR", color: "from-amber-500 to-orange-400" },
    { id: 6, name: "Lisa Anderson", role: "Marketing Head", initials: "LA", color: "from-red-500 to-pink-400" }
  ];

  return (
    <section className="py-8 px-8 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-100/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-2 rounded-full bg-[#175E75]/10 text-[#175E75] text-sm font-bold mb-4 uppercase tracking-wider">Our Team</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black">Meet Our Experts</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#175E75] to-cyan-400 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Talented professionals dedicated to creating exceptional digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member) => {
            const isHovered = hoveredId === member.id;
            return (
              <div
                key={member.id}
                onMouseEnter={() => setHoveredId(member.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="text-center group cursor-pointer"
              >
                <div className={`relative w-40 h-40 mx-auto mb-6 transition-all duration-500 transform ${ 
                  isHovered ? 'scale-110 -translate-y-2' : 'hover:scale-105'
                }`}>
                  {/* Outer glow ring */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${member.color} opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-300`}></div>
                  
                  {/* Main avatar */}
                  <div className={`relative w-full h-full rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-white text-2xl font-bold shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden`}>
                    {/* Animated overlay on hover */}
                    <div className={`absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                    <span className="relative z-10">{member.initials}</span>
                  </div>
                </div>
                
                <div className={`transition-all duration-300 ${ 
                  isHovered ? 'scale-105' : ''
                }`}>
                  <h3 className={`font-bold transition-all duration-300 ${ 
                    isHovered ? 'text-[#175E75] text-xl' : 'text-black text-lg'
                  }`}>{member.name}</h3>
                  <p className={`transition-all duration-300 ${ 
                    isHovered ? 'text-gray-700 font-medium text-sm' : 'text-gray-600 text-sm'
                  }`}>{member.role}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamShowcase;
