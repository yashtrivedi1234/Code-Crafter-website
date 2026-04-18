import { ArrowUpRight } from 'lucide-react';

const BlogSection = () => {
  const articles = [
    {
      id: 1,
      date: "Mar 11, 2026",
      title: "What Is a Design System? Why Every Team Needs One",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      date: "Mar 11, 2026",
      title: "Wordpress v/s Webflow: Which one is better",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-white via-slate-50 to-white py-8 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-100/20 rounded-full blur-3xl animate-pulse delay-700"></div>

      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-10 text-center relative z-10">
        <span className="inline-block px-4 py-2 rounded-full bg-[#175E75]/10 text-[#175E75] text-sm font-bold uppercase tracking-wider">Blog</span>
        <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-black">
          Recent blog & <span className="text-[#175E75]">articles</span>
        </h2>
        
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 max-w-7xl mx-auto relative z-10">
        {articles.map((post) => (
          <div key={post.id} className="group relative">
            {/* Image Container */}
            <div className="relative h-72 md:h-96 w-full overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-200 hover:border-[#175E75]">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            {/* Overlapping Content Card */}
            <div className="relative md:absolute bottom-0 right-0 w-full md:w-[90%] bg-white p-8 md:p-10 shadow-2xl md:-mb-12 z-10 rounded-2xl border-t-4 border-[#175E75]">
              <p className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-4">{post.date}</p>
              <h3 className="text-xl md:text-2xl font-bold text-black mb-8 leading-tight group-hover:text-[#175E75] transition-colors duration-300">
                {post.title}
              </h3>
              <div className="border-t border-gray-200 pt-6">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 font-bold text-[#175E75] border-b-2 border-[#175E75] pb-1 hover:opacity-80 transition-all duration-300"
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