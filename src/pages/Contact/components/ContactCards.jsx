import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactCards = () => {
  const cards = [
    {
      icon: MapPin,
      title: "Our Location",
      details: "123 Tech Street, Silicon Valley, CA 94025",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      color: "from-[#175E75] to-cyan-500"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@codecrafter.com",
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {cards.map((card, index) => {
        const IconComponent = card.icon;
        return (
          <div
            key={index}
            className="group relative p-6 rounded-xl bg-gradient-to-br from-white to-slate-50 border border-slate-200 hover:border-[#175E75]/30 transition-all duration-300 hover:shadow-lg overflow-hidden"
          >
            {/* Gradient overlay on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

            <div className="relative z-10">
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${card.color} text-white mb-4 group-hover:shadow-lg transition-shadow`}>
                <IconComponent size={28} strokeWidth={2} />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#175E75] group-hover:to-cyan-500 transition-all">
                {card.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors">
                {card.details}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContactCards;
