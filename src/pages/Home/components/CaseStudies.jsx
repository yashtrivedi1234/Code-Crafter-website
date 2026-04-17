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

      <section className="px-4 sm:px-12 lg:px-24 py-10 lg:py-20 bg-white font-sans text-gray-900">
        <div className="max-w-350 mx-auto">

          {/* Header */}
          <div className="mb-10 lg:mb-16">
            <p className="brand-text text-[0.7rem] font-semibold uppercase tracking-widest mb-2">
              Our Case Studies
            </p>
            <h2 className="text-[clamp(1.25rem,4vw,2rem)] font-bold leading-tight tracking-tight">
              Real-time Case Studies
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
            {caseStudiesData.map((study) => (
              <div
                key={study.id}
                className="cs-card relative overflow-hidden bg-gray-100 border border-gray-100 h-80 sm:h-90 lg:h-110"
              >
                {/* Image */}
                <img
                  src={study.image}
                  alt={study.title}
                  className="cs-img absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay */}
                <div
                  className="cs-overlay absolute inset-0"
                  style={{ background: 'rgba(0,0,0,0.22)' }}
                />

                {/* Content Box */}
                <div className="absolute bottom-0 right-0 w-[85%] bg-white shadow-[0_-4px_32px_rgba(0,0,0,0.12)] p-4 lg:p-6">
                  <h3 className="cs-card-title text-sm lg:text-lg font-bold leading-snug mb-3 pr-4 text-slate-900">
                    {study.title}
                  </h3>

                  <hr className="border-gray-200 mb-3" />

                  <div className="flex flex-col gap-1 min-h-12 mb-4">
                    {study.stats.map((stat, i) => (
                      <p key={i} className="flex items-start gap-2 text-xs lg:text-sm leading-relaxed text-gray-700">
                        <span className="w-1.25 h-1.25 rounded-full brand-bg shrink-0 mt-1.25" />
                        {stat}
                      </p>
                    ))}
                  </div>

                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-xs font-bold border-b-2 border-slate-900 pb-px transition-colors duration-300 hover:brand-text hover:border-(--brand) text-slate-900 no-underline"
                  >
                    Read more <ArrowUpRight size={14} />
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