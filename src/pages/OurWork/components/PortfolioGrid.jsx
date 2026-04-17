import React, { useState } from 'react';
import { ShoppingCart, BarChart3, Smartphone, Globe, Store, BookOpen } from 'lucide-react';

const PortfolioGrid = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "ecommerce",
      description: "Full-stack e-commerce solution with payment integration",
      icon: ShoppingCart,
      client: "TechStore Inc"
    },
    {
      id: 2,
      title: "SaaS Dashboard",
      category: "saas",
      description: "Real-time analytics and management dashboard",
      icon: BarChart3,
      client: "DataFlow Co"
    },
    {
      id: 3,
      title: "Mobile App",
      category: "mobile",
      description: "iOS and Android native mobile application",
      icon: Smartphone,
      client: "FitLife Ltd"
    },
    {
      id: 4,
      title: "Corporate Website",
      category: "web",
      description: "Modern, responsive corporate website with CMS",
      icon: Globe,
      client: "BusyNet Solutions"
    },
    {
      id: 5,
      title: "Marketplace Platform",
      category: "ecommerce",
      description: "Multi-vendor marketplace with vendor dashboard",
      icon: Store,
      client: "GlobalTrade Inc"
    },
    {
      id: 6,
      title: "Educational Platform",
      category: "saas",
      description: "Learning management system with video streaming",
      icon: BookOpen,
      client: "EduTech Academy"
    },
    {
      id: 7,
      title: "Fitness App",
      category: "mobile",
      description: "Workout tracking and community app",
      icon: Smartphone,
      client: "FitHub Pro"
    },
    {
      id: 8,
      title: "Booking System",
      category: "web",
      description: "Appointment booking and management system",
      icon: Globe,
      client: "BookMyService"
    },
    {
      id: 9,
      title: "Social Network",
      category: "saas",
      description: "Community platform with real-time messaging",
      icon: BarChart3,
      client: "ConnectHub"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'ecommerce', label: 'E-Commerce' },
    { id: 'saas', label: 'SaaS' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section className="py-20 px-8 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                filter === cat.id
                  ? 'brand-bg text-white'
                  : 'border border-[#175E75] text-[#175E75] hover:bg-[#175E75] hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const IconComponent = project.icon;
            return (
            <div
              key={project.id}
              className="group rounded-lg overflow-hidden border border-gray-200 hover:border-[#175E75] hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Image/Icon Area */}
              <div className="w-full h-48 bg-linear-to-br from-slate-50 to-slate-100 flex items-center justify-center group-hover:bg-[#175E75] transition-colors duration-300">
                <IconComponent size={48} className="text-[#175E75] group-hover:text-white transition-colors" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-sm text-[#175E75] font-semibold mb-2">{project.client}</p>
                <h3 className="text-black mb-2 group-hover:text-[#175E75] transition-colors">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <a href="#" className="text-[#175E75] font-semibold text-sm hover:opacity-70 transition-opacity">
                  View Case →
                </a>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
