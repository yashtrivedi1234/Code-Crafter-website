import React, { useState } from "react";
import {
  Globe,
  Smartphone,
  Palette,
  ShoppingCart,
  Cloud,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const ServicesGrid = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const services = [
    {
      id: 1,
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
      icon: Globe,
      color: "from-blue-500 to-blue-600",
      bgLight: "bg-blue-50",
    },
    {
      id: 2,
      title: "Mobile Development",
      description:
        "Native and cross-platform mobile apps designed to engage users and drive business growth.",
      icon: Smartphone,
      color: "from-green-500 to-green-600",
      bgLight: "bg-green-50",
    },
    {
      id: 3,
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive interface designs that convert visitors into customers and enhance engagement.",
      icon: Palette,
      color: "from-purple-500 to-purple-600",
      bgLight: "bg-purple-50",
    },
    {
      id: 4,
      title: "E-Commerce Solutions",
      description:
        "Fully functional online stores with secure payment gateways and inventory management systems.",
      icon: ShoppingCart,
      color: "from-orange-500 to-orange-600",
      bgLight: "bg-orange-50",
    },
    {
      id: 5,
      title: "Cloud Services",
      description:
        "Scalable cloud infrastructure and migration services to ensure your business grows without limits.",
      icon: Cloud,
      color: "from-cyan-500 to-cyan-600",
      bgLight: "bg-cyan-50",
    },
    {
      id: 6,
      title: "Digital Marketing",
      description:
        "SEO, social media, and content strategies to maximize your online visibility and reach.",
      icon: BarChart3,
      color: "from-red-500 to-red-600",
      bgLight: "bg-red-50",
    },
  ];

  return (
    <section className="py-8 px-8 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-100/20 rounded-full blur-3xl animate-pulse delay-700"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const IconComponent = service.icon;
            const isHovered = hoveredId === service.id;
            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`p-8 rounded-2xl border-2 transition-all duration-500 group cursor-pointer ${
                  isHovered
                    ? "border-[#175E75] shadow-2xl -translate-y-4 scale-105"
                    : "border-gray-200 hover:border-gray-300 shadow-md"
                } ${isHovered ? service.bgLight : "bg-white"}`}
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                {/* Header with icon and arrow */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} text-white flex items-center justify-center shadow-lg transition-all duration-300 ${
                      isHovered
                        ? "scale-125 rotate-12 shadow-xl"
                        : "group-hover:scale-110"
                    }`}
                  >
                    <IconComponent
                      size={32}
                      className={`transition-transform duration-300 ${
                        isHovered ? "scale-110 rotate-12" : ""
                      }`}
                    />
                  </div>
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isHovered ? "bg-[#175E75] scale-110" : "bg-gray-100"
                    }`}
                  >
                    <ArrowRight
                      size={20}
                      className={`transition-all duration-300 ${
                        isHovered
                          ? "text-white scale-125 translate-x-1"
                          : "text-[#175E75]"
                      }`}
                    />
                  </div>
                </div>

                {/* Content */}
                <h3
                  className={`text-xl font-bold mb-3 transition-all duration-300 ${
                    isHovered ? "text-[#175E75] text-2xl" : "text-black"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`leading-relaxed transition-all duration-300 ${
                    isHovered
                      ? "text-gray-700 font-medium"
                      : "text-gray-600 text-sm"
                  }`}
                >
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
