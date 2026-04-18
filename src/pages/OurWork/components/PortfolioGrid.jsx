import React, { useState } from 'react';
import { ShoppingCart, BarChart3, Smartphone, Globe, Store, BookOpen, ArrowUpRight } from 'lucide-react';

const PortfolioGrid = () => {
  const [filter, setFilter] = useState('all');
  const [hoveredId, setHoveredId] = useState(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "ecommerce",
      description: "Full-stack e-commerce solution with payment integration",
      icon: ShoppingCart,
      client: "TechStore Inc",
      bgColor: "from-blue-500 to-blue-600",
      tagColor: "bg-blue-100 text-blue-800"
    },
    {
      id: 2,
      title: "SaaS Dashboard",
      category: "saas",
      description: "Real-time analytics and management dashboard",
      icon: BarChart3,
      client: "DataFlow Co",
      bgColor: "from-purple-500 to-purple-600",
      tagColor: "bg-purple-100 text-purple-800"
    },
    {
      id: 3,
      title: "Mobile App",
      category: "mobile",
      description: "iOS and Android native mobile application",
      icon: Smartphone,
      client: "FitLife Ltd",
      bgColor: "from-green-500 to-green-600",
      tagColor: "bg-green-100 text-green-800"
    },
    {
      id: 4,
      title: "Corporate Website",
      category: "web",
      description: "Modern, responsive corporate website with CMS",
      icon: Globe,
      client: "BusyNet Solutions",
      bgColor: "from-orange-500 to-orange-600",
      tagColor: "bg-orange-100 text-orange-800"
    },
    {
      id: 5,
      title: "Marketplace Platform",
      category: "ecommerce",
      description: "Multi-vendor marketplace with vendor dashboard",
      icon: Store,
      client: "GlobalTrade Inc",
      bgColor: "from-pink-500 to-pink-600",
      tagColor: "bg-pink-100 text-pink-800"
    },
    {
      id: 6,
      title: "Educational Platform",
      category: "saas",
      description: "Learning management system with video streaming",
      icon: BookOpen,
      client: "EduTech Academy",
      bgColor: "from-indigo-500 to-indigo-600",
      tagColor: "bg-indigo-100 text-indigo-800"
    },
    {
      id: 7,
      title: "Fitness App",
      category: "mobile",
      description: "Workout tracking and community app",
      icon: Smartphone,
      client: "FitHub Pro",
      bgColor: "from-red-500 to-red-600",
      tagColor: "bg-red-100 text-red-800"
    },
    {
      id: 8,
      title: "Booking System",
      category: "web",
      description: "Appointment booking and management system",
      icon: Globe,
      client: "BookMyService",
      bgColor: "from-teal-500 to-teal-600",
      tagColor: "bg-teal-100 text-teal-800"
    },
    {
      id: 9,
      title: "Social Network",
      category: "saas",
      description: "Community platform with real-time messaging",
      icon: BarChart3,
      client: "ConnectHub",
      bgColor: "from-cyan-500 to-cyan-600",
      tagColor: "bg-cyan-100 text-cyan-800"
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
    <section className="py-8 px-8 md:px-16 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-100/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
       
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-2.5 rounded-full font-bold transition-all duration-300 ${
                filter === cat.id
                  ? 'bg-[#175E75] text-white shadow-lg scale-105'
                  : 'border-2 border-[#175E75] text-[#175E75] hover:bg-[#175E75]/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => {
            const IconComponent = project.icon;
            const isHovered = hoveredId === project.id;
            return (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`group rounded-2xl overflow-hidden border-2 transition-all duration-500 cursor-pointer ${ 
                  isHovered 
                    ? 'border-[#175E75] shadow-2xl -translate-y-4 scale-105' 
                    : 'border-gray-200 hover:border-gray-300 shadow-md'
                }`}
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                {/* Image/Icon Area */}
                <div className={`w-full h-56 bg-gradient-to-br ${project.bgColor} flex items-center justify-center relative overflow-hidden transition-all duration-300`}>
                  {/* Overlay on hover */}
                  <div className={`absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  
                  <IconComponent 
                    size={56} 
                    className={`text-white transition-all duration-300 relative z-10 ${ 
                      isHovered ? 'scale-125 -rotate-6' : 'group-hover:scale-110'
                    }`} 
                    strokeWidth={1.5} 
                  />
                </div>

                {/* Content */}
                <div className="p-8 bg-white">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${project.tagColor}`}>
                      {categories.find(c => c.id === project.category)?.label}
                    </span>
                    <div className={`w-8 h-8 rounded-full bg-[#175E75]/10 flex items-center justify-center transition-all duration-300 ${ 
                      isHovered ? 'bg-[#175E75] scale-110' : ''
                    }`}>
                      <ArrowUpRight size={16} className={`transition-all duration-300 ${ 
                        isHovered ? 'text-white scale-125' : 'text-[#175E75]'
                      }`} />
                    </div>
                  </div>
                  
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-2">{project.client}</p>
                  <h3 className={`text-lg font-bold mb-3 transition-colors duration-300 ${ 
                    isHovered ? 'text-[#175E75]' : 'text-black'
                  }`}>{project.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
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
