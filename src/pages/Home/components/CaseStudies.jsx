import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const CaseStudies = () => {
  // Brand Color: rgb(23, 94, 117) -> HEX: #175E75
  const brandTextColor = "text-[#175E75]";
  const brandBorderColor = "border-[#175E75]";
  const brandHoverText = "hover:text-[#175E75]";
  const brandHoverBorder = "hover:border-[#175E75]";
  const brandHoverBg = "hover:bg-[#175E75]";

  const caseStudiesData = [
    {
      id: 1,
      title: "Digital Payment Platform",
      stats: [
        "Improved website transaction reliability by 50%."
      ],
      image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: 2,
      title: "Procurement Technology Company",
      stats: [
        "Reduced bounce by 35%",
        "Improved loading speed by 60%"
      ],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: 3,
      title: "Textile and Retail Brand",
      stats: [
        "Increased mobile conversions by 38% after redesign."
      ],
      image: "https://images.unsplash.com/photo-1583391733958-611591350a41?auto=format&fit=crop&q=80&w=600",
    }
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24 font-sans text-gray-900">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Section */}
        <div className="mb-16">
          <p className={`${brandTextColor} text-sm font-semibold mb-3 uppercase tracking-wider`}>Our Case Studies</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Real-time Case Studies</h2>
          
          
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {caseStudiesData.map((study) => (
            <div key={study.id} className="relative group overflow-hidden bg-gray-100 h-[420px] md:h-[460px] border border-gray-100">
              
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 transition-opacity group-hover:bg-black/10"></div>
              </div>

              {/* Bottom Right White Content Box */}
              <div className="absolute bottom-0 right-0 w-[85%] bg-white pt-6 px-6 pb-6 shadow-2xl">
                <h3 className="text-[1.1rem] leading-snug font-bold mb-4 pr-4 text-black group-hover:text-[#175E75] transition-colors">
                  {study.title}
                </h3>
                
                <hr className="border-gray-200 mb-4" />
                
                <div className="space-y-1 min-h-[64px] mb-6">
                  {study.stats.map((stat, index) => (
                    <p key={index} className="text-[0.85rem] text-gray-700 leading-snug flex items-start gap-2">
                      <span className={`w-1 h-1 rounded-full ${brandTextColor.replace('text', 'bg')} mt-1.5 shrink-0`}></span>
                      {stat}
                    </p>
                  ))}
                </div>
                
                <a 
                  href="#" 
                  className={`inline-flex items-center gap-2 text-sm font-bold border-b-2 border-black pb-[1px] ${brandHoverText} ${brandHoverBorder} transition-all duration-300 w-max`}
                >
                  Read more <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Button */}
        <div className="mt-16 flex justify-center">
          <button className={`flex items-center gap-3 border-2 border-slate-900 px-8 py-3.5 text-sm font-bold uppercase tracking-widest ${brandHoverBg} hover:text-white ${brandHoverBorder} transition-all duration-300 shadow-lg`}>
            View all cases <ArrowUpRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default CaseStudies;