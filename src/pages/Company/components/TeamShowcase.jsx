import React from 'react';
import { User } from 'lucide-react';

const TeamShowcase = () => {
  const teamMembers = [
    { id: 1, name: "John Smith", role: "CEO & Founder", initials: "JS" },
    { id: 2, name: "Sarah Johnson", role: "CTO", initials: "SJ" },
    { id: 3, name: "Mike Chen", role: "Lead Developer", initials: "MC" },
    { id: 4, name: "Emma Davis", role: "Design Lead", initials: "ED" },
    { id: 5, name: "Alex Rodriguez", role: "Project Manager", initials: "AR" },
    { id: 6, name: "Lisa Anderson", role: "Marketing Head", initials: "LA" }
  ];

  return (
    <section className="py-20 px-8 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-black mb-4">Meet Our Team</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Talented professionals dedicated to creating exceptional digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="text-center group"
            >
              <div className="w-32 h-32 mx-auto rounded-full bg-linear-to-br from-[#175E75] to-[#0f3f4f] flex items-center justify-center mb-4 text-white text-lg font-bold group-hover:scale-110 transition-transform duration-300">
                {member.initials}
              </div>
              <h3 className="text-black mb-1 group-hover:text-[#175E75] transition-colors">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamShowcase;
