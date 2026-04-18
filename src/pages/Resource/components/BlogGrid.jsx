import React, { useState } from 'react';
import { Palette, Zap, Smartphone, Search, Cloud, ArrowRight, Calendar, User } from 'lucide-react';

const BlogGrid = () => {
  const [filter, setFilter] = useState('all');
  const [hoveredId, setHoveredId] = useState(null);

  const categoryColors = {
    design: { color: "from-purple-500 to-purple-600", light: "bg-purple-50", border: "border-purple-200" },
    development: { color: "from-blue-500 to-blue-600", light: "bg-blue-50", border: "border-blue-200" },
    mobile: { color: "from-green-500 to-green-600", light: "bg-green-50", border: "border-green-200" },
    seo: { color: "from-orange-500 to-orange-600", light: "bg-orange-50", border: "border-orange-200" }
  };

  const articles = [
    {
      id: 1,
      title: "Top 10 Web Design Trends for 2024",
      category: "design",
      date: "Mar 15, 2024",
      author: "Sarah Johnson",
      excerpt: "Discover the latest web design trends that are shaping the digital landscape this year.",
      icon: Palette
    },
    {
      id: 2,
      title: "React Performance Optimization Guide",
      category: "development",
      date: "Mar 12, 2024",
      author: "Mike Chen",
      excerpt: "Learn advanced techniques to optimize your React applications for better performance.",
      icon: Zap
    },
    {
      id: 3,
      title: "The Future of Mobile Development",
      category: "mobile",
      date: "Mar 10, 2024",
      author: "Emma Davis",
      excerpt: "Exploring emerging technologies and frameworks that are revolutionizing mobile apps.",
      icon: Smartphone
    },
    {
      id: 4,
      title: "E-Commerce SEO Best Practices",
      category: "seo",
      date: "Mar 08, 2024",
      author: "Alex Rodriguez",
      excerpt: "Proven strategies to boost your e-commerce website's visibility in search results.",
      icon: Search
    },
    {
      id: 5,
      title: "Building Scalable Cloud Architecture",
      category: "development",
      date: "Mar 05, 2024",
      author: "James Wilson",
      excerpt: "Best practices for designing cloud infrastructure that grows with your business.",
      icon: Cloud
    },
    {
      id: 6,
      title: "UX Psychology: Converting Visitors to Customers",
      category: "design",
      date: "Feb 28, 2024",
      author: "Lisa Anderson",
      excerpt: "Understanding user psychology and applying it to improve conversion rates.",
      icon: Palette
    },
    {
      id: 7,
      title: "API Security: Protecting Your Data",
      category: "development",
      date: "Feb 25, 2024",
      author: "David Kumar",
      excerpt: "Essential security measures for building robust and secure APIs.",
      icon: Cloud
    },
    {
      id: 8,
      title: "User Engagement Strategies for Apps",
      category: "mobile",
      date: "Feb 20, 2024",
      author: "Sophie Martin",
      excerpt: "Proven tactics to increase user retention and engagement in mobile applications.",
      icon: Smartphone
    }
  ];

  const categories = [
    { id: 'all', label: 'All Articles' },
    { id: 'design', label: 'Design' },
    { id: 'development', label: 'Development' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'seo', label: 'SEO' }
  ];

  const filteredArticles = filter === 'all' 
    ? articles 
    : articles.filter(a => a.category === filter);

  return (
    <section className="py-8 px-8 md:px-16 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl animate-pulse delay-700"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
       

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 border-2 ${ 
                filter === cat.id
                  ? 'bg-[#175E75] text-white border-[#175E75] shadow-lg'
                  : 'border-gray-300 text-gray-700 hover:border-[#175E75] hover:text-[#175E75]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {filteredArticles.map((article, idx) => {
            const IconComponent = article.icon;
            const catColor = categoryColors[article.category] || categoryColors.development;
            const isHovered = hoveredId === article.id;
            return (
              <article
                key={article.id}
                onMouseEnter={() => setHoveredId(article.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`group overflow-hidden rounded-2xl border-2 transition-all duration-500 cursor-pointer ${ 
                  isHovered 
                    ? 'border-[#175E75] shadow-2xl -translate-y-4 scale-105' 
                    : 'border-gray-200 shadow-md hover:border-gray-300'
                }`}
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                {/* Image/Icon Area */}
                <div className={`w-full h-48 bg-gradient-to-br ${catColor.color} flex items-center justify-center transition-all duration-300 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>
                  <IconComponent size={48} className={`text-white transition-all duration-300 ${ 
                    isHovered ? 'scale-125 rotate-12' : 'group-hover:scale-110'
                  }`} strokeWidth={1.5} />
                </div>

                {/* Content */}
                <div className={`p-6 transition-all duration-300 ${ 
                  isHovered ? catColor.light : 'bg-white'
                }`}>
                  {/* Category Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${ 
                      isHovered 
                        ? `bg-gradient-to-r ${catColor.color} text-white` 
                        : `bg-${article.category === 'design' ? 'purple' : article.category === 'mobile' ? 'green' : article.category === 'seo' ? 'orange' : 'blue'}-100 text-${article.category === 'design' ? 'purple' : article.category === 'mobile' ? 'green' : article.category === 'seo' ? 'orange' : 'blue'}-700`
                    }`}>{article.category}</span>
                    <div className={`text-xs flex items-center gap-1 transition-all duration-300 ${ 
                      isHovered ? 'text-[#175E75] font-semibold' : 'text-gray-500'
                    }`}>
                      <Calendar size={14} /> {article.date}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl font-bold mb-3 transition-all duration-300 ${ 
                    isHovered ? 'text-[#175E75] text-2xl' : 'text-black'
                  }`}>{article.title}</h3>

                  {/* Excerpt */}
                  <p className={`mb-4 leading-relaxed transition-all duration-300 ${ 
                    isHovered ? 'text-gray-700 font-medium' : 'text-gray-600 text-sm'
                  }`}>{article.excerpt}</p>

                  {/* Footer */}
                  <div className="flex justify-between items-center pt-4 border-t-2 border-gray-200">
                    <div className={`text-xs flex items-center gap-1 transition-all duration-300 ${ 
                      isHovered ? 'text-[#175E75]' : 'text-gray-500'
                    }`}>
                      <User size={14} /> {article.author}
                    </div>
                    <a href="#" className={`font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${ 
                      isHovered 
                        ? `text-white bg-gradient-to-r ${catColor.color} px-4 py-2 rounded-lg` 
                        : `text-[#175E75] hover:text-[#0f3f4f]`
                    }`}>
                      Read More <ArrowRight size={16} className={`transition-transform duration-300 ${ 
                        isHovered ? 'translate-x-1' : ''
                      }`} />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Newsletter Signup */}
        <div className="p-10 md:p-16 rounded-2xl bg-gradient-to-r from-[#175E75] via-[#0f3f4f] to-[#0a2f3f] text-white text-center relative overflow-hidden border-2 border-[#175E75]/30">
          {/* Background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-3">Stay Updated</h3>
            <p className="mb-8 text-lg opacity-90 max-w-2xl mx-auto">Subscribe to our newsletter for the latest insights, tips, and industry trends</p>
            <div className="flex flex-col md:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
              />
              <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-cyan-300 text-[#175E75] font-bold hover:shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
