import React from 'react';
import { MapPin, Phone, Mail, Clock, Code, MessageCircle, Users, Star, ArrowRight } from 'lucide-react';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: MapPin,
      title: "Address",
      details: "123 Tech Street, Silicon Valley, CA 94025",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (555) 123-4567",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: Mail,
      title: "Email",
      details: "hello@codecrafter.com",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Monday - Friday: 9:00 AM - 6:00 PM",
      color: "from-emerald-500 to-emerald-600"
    }
  ];

  const socialLinks = [
    { icon: Code, name: "GitHub", url: "#" },
    { icon: MessageCircle, name: "Twitter", url: "#" },
    { icon: Users, name: "LinkedIn", url: "#" },
    { icon: Star, name: "Instagram", url: "#" }
  ];

  return (
    <div className="space-y-8">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl text-black mb-3">Get In Touch</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[#175E75] to-cyan-400 rounded-full"></div>
      </div>

      <div className="space-y-4">
        {contactDetails.map((detail, index) => {
          const IconComponent = detail.icon;
          return (
            <div key={index} className="group p-5 rounded-xl bg-white/60 backdrop-blur-sm border border-white/40 hover:bg-white hover:shadow-lg hover:border-[#175E75]/20 transition-all duration-300 cursor-pointer">
              <div className="flex gap-4 items-start">
                <div className={`bg-gradient-to-br ${detail.color} p-3 rounded-lg shrink-0 text-white shadow-md group-hover:shadow-lg transition-shadow`}>
                  <IconComponent size={24} strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-black mb-1 text-lg">{detail.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{detail.details}</p>
                </div>
                <ArrowRight size={18} className="text-[#175E75] opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-1" />
              </div>
            </div>
          );
        })}
      </div>

      <div className="pt-8 border-t border-gray-200">
        <h3 className="text-xl font-bold text-black mb-6">Follow Us</h3>
        <div className="flex gap-3 flex-wrap">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <a
                key={index}
                href={social.url}
                className="w-14 h-14 rounded-full bg-gradient-to-br from-[#175E75] to-cyan-600 text-white flex items-center justify-center hover:shadow-lg hover:scale-110 transition-all duration-300 group/icon hover:from-cyan-600 hover:to-[#175E75]"
                title={social.name}
              >
                <IconComponent size={22} strokeWidth={1.5} className="group-hover/icon:rotate-12 transition-transform" />
              </a>
            );
          })}
        </div>
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border-2 border-blue-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-start gap-3">
          <div className="text-[#175E75] mt-1">
            <Clock size={20} />
          </div>
          <div>
            <p className="text-sm text-gray-700">
              <span className="font-bold text-[#175E75]">Response Time:</span><br />
              We typically respond within 24 business hours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
