import React from 'react';
import { Globe, Smartphone, Palette, ShoppingCart, Cloud, BarChart3 } from 'lucide-react';

const ServicesGrid = () => {
  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
      icon: Globe
    },
    {
      id: 2,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps designed to engage users and drive business growth.",
      icon: Smartphone
    },
    {
      id: 3,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interface designs that convert visitors into customers and enhance engagement.",
      icon: Palette
    },
    {
      id: 4,
      title: "E-Commerce Solutions",
      description: "Fully functional online stores with secure payment gateways and inventory management systems.",
      icon: ShoppingCart
    },
    {
      id: 5,
      title: "Cloud Services",
      description: "Scalable cloud infrastructure and migration services to ensure your business grows without limits.",
      icon: Cloud
    },
    {
      id: 6,
      title: "Digital Marketing",
      description: "SEO, social media, and content strategies to maximize your online visibility and reach.",
      icon: BarChart3
    }
  ];

  return (
    <section className="py-20 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-black mb-4">Our Services</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We offer a comprehensive range of digital solutions to help your business thrive in the modern landscape
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
            <div
              key={service.id}
              className="p-8 rounded-lg border border-gray-200 hover:border-[#175E75] hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-lg brand-bg text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <IconComponent size={32} />
              </div>
              <h3 className="text-black mb-3 group-hover:text-[#175E75] transition-colors">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
