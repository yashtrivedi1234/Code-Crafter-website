import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const BlogSection = () => {
  // Brand Color: rgb(23, 94, 117) -> #175E75
  const brandColor = "text-[#175E75]";
  const brandBg = "bg-[#175E75]";
  const brandBorder = "border-[#175E75]";
  const brandHoverText = "hover:text-[#175E75]";
  const brandHoverBorder = "hover:border-[#175E75]";

  const articles = [
    {
      id: 1,
      date: "Mar 11, 2026",
      title: "What Is a Design System? Why Every Team Needs One",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      date: "Mar 11, 2026",
      title: "Wordpress v/s Webflow: Which one is better",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    }
  ];

  return (
    <section className="bg-white py-8 px-6 md:px-12 lg:px-24">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-20">
        <p className={`${brandColor} font-bold uppercase tracking-widest text-sm mb-3`}>
          Our blog
        </p>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <h2 className="text-[clamp(1.25rem,4vw,2rem)] font-bold text-black shrink-0">
            Recent blog & articles
          </h2>
      
        </div>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-24 gap-x-12 max-w-7xl mx-auto">
        {articles.map((post) => (
          <div key={post.id} className="group relative">
            {/* Image Container */}
            <div className="relative h-[300px] md:h-[450px] w-full overflow-hidden shadow-lg">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>

            {/* Overlapping Content Card */}
            <div className="relative md:absolute bottom-0 right-0 w-full md:w-[85%] bg-white p-8 md:p-10 shadow-2xl md:-mb-10 z-10 border-t-4 border-[#175E75]">
              <p className="text-gray-500 text-sm font-medium mb-4">{post.date}</p>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 leading-tight group-hover:text-[#175E75] transition-colors">
                {post.title}
              </h3>
              <div className="border-t border-gray-100 pt-6">
                <a 
                  href="#" 
                  className={`inline-flex items-center gap-2 font-bold text-black border-b-2 border-black pb-1 ${brandHoverText} ${brandHoverBorder} transition-all duration-300`}
                >
                  Read Blog <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;