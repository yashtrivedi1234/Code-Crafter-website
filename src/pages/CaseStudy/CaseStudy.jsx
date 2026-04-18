import React, { useState } from 'react';
import PageHero from '../WhatWeDo/components/PageHero';
import { ShoppingCart, BarChart3, Zap, CheckCircle, ChevronDown, Lightbulb, Rocket, Award } from 'lucide-react';

const CaseStudy = () => {
  const [selectedCase, setSelectedCase] = useState(null);

  const cases = [
    {
      id: 1,
      title: "TechStore - 300% Revenue Growth",
      category: "E-Commerce",
      client: "TechStore Inc",
      challenge: "Legacy website with poor UX causing low conversion rates",
      solution: "Complete redesign with modern UI, improved checkout process, and mobile optimization",
      results: ["300% revenue increase", "50% bounce rate reduction", "4.8/5 customer rating"],
      testimonial: "Code Crafter transformed our online store. The new website is faster and our customers love it!",
      icon: ShoppingCart,
      colors: { bg: "bg-blue-50", border: "border-blue-500", badge: "bg-blue-100 text-blue-800" }
    },
    {
      id: 2,
      title: "DataFlow - Real-time Analytics Platform",
      category: "SaaS",
      client: "DataFlow Co",
      challenge: "Need for a scalable analytics platform to handle millions of data points",
      solution: "Built cloud-based SaaS with real-time data visualization and custom dashboards",
      results: ["500+ active users", "99.9% uptime achieved", "1000+ data points/second"],
      testimonial: "The platform exceeded our expectations. The team delivered on time and within budget.",
      icon: BarChart3,
      colors: { bg: "bg-purple-50", border: "border-purple-500", badge: "bg-purple-100 text-purple-800" }
    },
    {
      id: 3,
      title: "FitLife - Mobile Fitness Revolution",
      category: "Mobile App",
      client: "FitLife Ltd",
      challenge: "Create engaging fitness app to compete in crowded market",
      solution: "Native iOS and Android app with AI-powered workout recommendations",
      results: ["100K+ downloads", "4.9/5 app store rating", "$2M funding raised"],
      testimonial: "The app's success helped us secure Series A funding. Great execution!",
      icon: Zap,
      colors: { bg: "bg-orange-50", border: "border-orange-500", badge: "bg-orange-100 text-orange-800" }
    }
  ];

  return (
    <div className="w-full">
      <PageHero 
        title="Case Studies"
        subtitle="Real results from real clients - See how we've transformed businesses"
      />
      
      <section className="py-8 px-8 md:px-16 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-100/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
         
          <div className="space-y-6">
            {cases.map((caseStudy, idx) => {
              const isOpen = selectedCase === caseStudy.id;
              return (
                <div
                  key={caseStudy.id}
                  className={`border-2 rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer group ${
                    isOpen 
                      ? `border-[#175E75] ${caseStudy.colors.bg} shadow-2xl` 
                      : 'border-gray-200 hover:border-gray-300 hover:shadow-xl'
                  }`}
                  onClick={() => setSelectedCase(selectedCase === caseStudy.id ? null : caseStudy.id)}
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  {/* Header */}
                  <div className={`p-8 md:p-10 bg-gradient-to-r ${
                    isOpen 
                      ? 'from-[#175E75] to-[#0f3f4f] text-white' 
                      : 'from-slate-50 to-white group-hover:from-slate-100 to-white'
                  } flex justify-between items-start md:items-center transition-all duration-300`}>
                    <div className="flex-1">
                      <p className={`font-bold text-sm mb-3 uppercase tracking-wider transition-all duration-300 ${
                        isOpen ? 'text-cyan-200' : 'text-[#175E75]'
                      }`}>{caseStudy.category}</p>
                      <h3 className={`text-2xl md:text-3xl font-bold mb-2 transition-colors duration-300 ${
                        isOpen ? 'text-white' : 'text-black group-hover:text-[#175E75]'
                      }`}>{caseStudy.title}</h3>
                      <p className={`font-medium transition-colors duration-300 ${
                        isOpen ? 'text-cyan-100' : 'text-gray-600'
                      }`}>Client: {caseStudy.client}</p>
                    </div>
                    <div className={`flex-shrink-0 ml-6 transition-all duration-300 ${
                      isOpen ? 'text-cyan-200' : 'text-[#175E75] group-hover:scale-125'
                    }`}>
                      {React.createElement(caseStudy.icon, { size: 56, strokeWidth: 1.5 })}
                    </div>
                  </div>

                  {/* Expandable Content */}
                  {isOpen && (
                    <div className="border-t-2 border-[#175E75]/20 p-8 md:p-10 space-y-8 animate-in fade-in duration-300">
                      {/* Challenge */}
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <Lightbulb size={24} className="text-amber-500 mt-1" />
                        </div>
                        <div>
                          <h4 className="font-bold text-black mb-3 text-lg">Challenge</h4>
                          <p className="text-gray-700 leading-relaxed">{caseStudy.challenge}</p>
                        </div>
                      </div>

                      {/* Solution */}
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <Rocket size={24} className="text-blue-500 mt-1" />
                        </div>
                        <div>
                          <h4 className="font-bold text-black mb-3 text-lg">Solution</h4>
                          <p className="text-gray-700 leading-relaxed">{caseStudy.solution}</p>
                        </div>
                      </div>

                      {/* Results */}
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <Award size={24} className="text-green-500" />
                          <h4 className="font-bold text-black text-lg">Results</h4>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {caseStudy.results.map((result, idx) => (
                            <div key={idx} className="p-4 bg-white rounded-lg border-2 border-[#175E75]/20 hover:border-[#175E75] transition-all">
                              <div className="flex items-start gap-3">
                                <CheckCircle size={20} className="text-[#175E75] flex-shrink-0 mt-0.5" />
                                <p className="text-gray-700 font-medium text-sm">{result}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Testimonial */}
                      <div className="bg-gradient-to-r from-[#175E75]/10 to-cyan-400/10 p-8 rounded-2xl border-l-4 border-[#175E75] hover:shadow-lg transition-all">
                        <p className="text-gray-800 italic text-lg leading-relaxed mb-4">"{caseStudy.testimonial}"</p>
                        <p className="text-sm font-bold text-[#175E75]">— {caseStudy.client}</p>
                      </div>
                    </div>
                  )}

                  {/* Expand indicator */}
                  <div className={`h-1 bg-gradient-to-r from-[#175E75] to-cyan-400 transition-all duration-300 ${
                    isOpen ? 'opacity-100' : 'opacity-0'
                  }`}></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudy;
