const caseStudiesData = [
  {
    id: 1,
    title: "Digital Payment Platform",
    stats: ["Improved website transaction reliability by 50%."],
    image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 2,
    title: "Procurement Technology Company",
    stats: ["Reduced bounce by 35%", "Improved loading speed by 60%"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 3,
    title: "Textile and Retail Brand",
    stats: ["Increased mobile conversions by 38% after redesign."],
image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?auto=format&fit=crop&q=80&w=600", 
  },
];

const ArrowUpRight = ({ size = 16 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const cardHoverStyles = `
  .cs-card:hover .cs-img { transform: scale(1.08); }
  .cs-card:hover .cs-overlay { background: rgba(0,0,0,0.1) !important; }
  .cs-card:hover .cs-card-title { color: var(--brand); }
  .cs-img { transition: transform 0.7s ease; }
  .cs-overlay { transition: background 0.3s ease; }
  .cs-card-title { transition: color 0.25s ease; }
`;

const CaseStudies = () => {
  return (
    <>
      <style>{cardHoverStyles}</style>

      <section className="relative min-h-screen px-4 py-8 bg-gradient-to-b from-white via-slate-50 to-white font-sans text-gray-900 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-100/20 rounded-full blur-3xl animate-pulse delay-700"></div>

        <div className="max-w-7xl mx-auto relative z-10">

          {/* Header */}
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-2 rounded-full bg-[#175E75]/10 text-[#175E75] text-sm font-bold uppercase tracking-wider">Case Studies</span>
            <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-tight tracking-tight text-black">
              Real-time <span className="text-[#175E75]">Case Studies</span>
            </h2>
      
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {caseStudiesData.map((study) => (
              <div
                key={study.id}
                className="cs-card relative overflow-hidden rounded-2xl bg-gray-100 border border-gray-200 h-96 shadow-lg hover:shadow-2xl hover:border-[#175E75] transition-all duration-500 group"
              >
                {/* Image */}
                <img
                  src={study.image}
                  alt={study.title}
                  className="cs-img absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay */}
                

                {/* Content Box */}
                <div className="absolute bottom-0 right-0 w-full sm:w-[90%] bg-white shadow-2xl p-6 lg:p-8 rounded-t-2xl">
                  <h3 className="cs-card-title text-base lg:text-lg font-bold leading-snug mb-4 text-black">
                    {study.title}
                  </h3>

                  <hr className="border-gray-200 mb-4" />

                  <div className="flex flex-col gap-2 min-h-12 mb-5">
                    {study.stats.map((stat, i) => (
                      <p key={i} className="flex items-start gap-2 text-xs lg:text-sm leading-relaxed text-gray-700 font-medium">
                        <span className="w-2 h-2 rounded-full bg-[#175E75] shrink-0 mt-1.5" />
                        {stat}
                      </p>
                    ))}
                  </div>

                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#175E75] border-b-2 border-[#175E75] pb-1 transition-colors duration-300 hover:opacity-80"
                  >
                    Read more <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="mt-12 lg:mt-16 flex justify-center">
            <button className="inline-flex items-center gap-2 border-2 border-slate-900 font-bold text-[0.7rem] uppercase tracking-widest px-6 py-3 lg:px-8 lg:py-4 transition-all duration-300 bg-white hover:brand-bg hover:text-white hover:border-(--brand) cursor-pointer">
              View all cases <ArrowUpRight size={16} />
            </button>
          </div>

        </div>
      </section>
    </>
  );
};

export default CaseStudies;