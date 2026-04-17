import React from 'react';
import { MapPin, Phone, Mail, Clock, Share2, Send, MessageSquare, ExternalLink } from 'lucide-react';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: MapPin,
      title: "Address",
      details: "123 Tech Street, Silicon Valley, CA 94025"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (555) 123-4567"
    },
    {
      icon: Mail,
      title: "Email",
      details: "hello@codecrafter.com"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Monday - Friday: 9:00 AM - 6:00 PM"
    }
  ];

  const socialLinks = [
    { icon: Share2, name: "GitHub", url: "#" },
    { icon: Send, name: "Twitter", url: "#" },
    { icon: MessageSquare, name: "LinkedIn", url: "#" },
    { icon: ExternalLink, name: "Instagram", url: "#" }
  ];

  return (
    <div>
      <h2 className="text-black mb-8">Get In Touch</h2>

      <div className="space-y-6 mb-12">
        {contactDetails.map((detail, index) => {
          const IconComponent = detail.icon;
          return (
          <div key={index} className="flex gap-4">
            <div className="text-[#175E75] shrink-0">
              <IconComponent size={28} strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="font-bold text-black mb-1">{detail.title}</h4>
              <p className="text-gray-600">{detail.details}</p>
            </div>
          </div>
          );
        })}
      </div>

      <div className="border-t border-gray-200 pt-8">
        <h4 className="font-bold text-black mb-6">Follow Us</h4>
        <div className="flex gap-4">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
            <a
              key={index}
              href={social.url}
              className="w-12 h-12 rounded-full bg-[#175E75] text-white flex items-center justify-center hover:bg-[#0f3f4f] transition-colors"
              title={social.name}
            >
              <IconComponent size={20} strokeWidth={1.5} />
            </a>
            );
          })}
        </div>
      </div>

      <div className="mt-8 p-6 bg-slate-50 rounded-lg border border-gray-200">
        <p className="text-sm text-gray-600">
          <span className="font-semibold text-[#175E75]">Response Time:</span> We typically respond within 24 business hours
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
