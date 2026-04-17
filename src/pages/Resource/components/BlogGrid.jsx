import React, { useState } from 'react';
import { Palette, Zap, Smartphone, Search, Cloud } from 'lucide-react';

const BlogGrid = () => {
  const [filter, setFilter] = useState('all');

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
    <section className="py-20 px-8 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
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

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredArticles.map((article) => {
            const IconComponent = article.icon;
            return (
            <article
              key={article.id}
              className="group border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-[#175E75] transition-all duration-300"
            >
              {/* Image/Icon Area */}
              <div className="w-full h-40 bg-linear-to-br from-slate-50 to-slate-100 flex items-center justify-center group-hover:bg-[#175E75] transition-colors duration-300">
                <IconComponent size={40} className="text-[#175E75] group-hover:text-white transition-colors" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <p className="text-xs text-[#175E75] font-semibold uppercase">{article.category}</p>
                  <p className="text-xs text-gray-500">{article.date}</p>
                </div>

                <h3 className="text-black mb-2 group-hover:text-[#175E75] transition-colors">{article.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>

                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-500">By {article.author}</p>
                  <a href="#" className="text-[#175E75] font-semibold text-sm hover:opacity-70 transition-opacity">
                    Read More →
                  </a>
                </div>
              </div>
            </article>
            );
          })}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 p-12 rounded-lg bg-linear-to-r from-[#175E75] to-[#0f3f4f] text-white text-center">
          <h3 className="text-white mb-3">Stay Updated</h3>
          <p className="mb-6 opacity-90">Subscribe to our newsletter for the latest insights and tips</p>
          <div className="flex flex-col md:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-black placeholder-gray-500 focus:outline-none"
            />
            <button className="px-8 py-3 rounded-lg bg-white text-[#175E75] font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
