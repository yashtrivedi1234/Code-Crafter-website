import React, { useState } from 'react';
import PageHero from '../WhatWeDo/components/PageHero';
import { ShoppingCart, BarChart3, Zap, CheckCircle } from 'lucide-react';

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
      icon: ShoppingCart
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
      icon: BarChart3
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
      icon: Zap
    }
  ];

  return (
    <div className="w-full">
      <PageHero 
        title="Case Studies"
        subtitle="Real results from real clients - See how we've transformed businesses"
      />
      
      <section className="py-20 px-8 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            {cases.map((caseStudy) => (
              <div
                key={caseStudy.id}
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedCase(selectedCase === caseStudy.id ? null : caseStudy.id)}
              >
                {/* Header */}
                <div className="p-8 bg-linear-to-r from-slate-50 to-white flex justify-between items-start md:items-center">
                  <div>
                    <p className="text-[#175E75] font-semibold text-sm mb-2">{caseStudy.category}</p>
                    <h3 className="text-black mb-2">{caseStudy.title}</h3>
                    <p className="text-gray-600">Client: {caseStudy.client}</p>
                  </div>
                  <div className="text-[#175E75]">
                    {React.createElement(caseStudy.icon, { size: 48, strokeWidth: 1.5 })}
                  </div>
                </div>

                {/* Expandable Content */}
                {selectedCase === caseStudy.id && (
                  <div className="border-t border-gray-200 p-8 space-y-6">
                    {/* Challenge */}
                    <div>
                      <h4 className="font-bold text-black mb-2">Challenge</h4>
                      <p className="text-gray-600">{caseStudy.challenge}</p>
                    </div>

                    {/* Solution */}
                    <div>
                      <h4 className="font-bold text-black mb-2">Solution</h4>
                      <p className="text-gray-600">{caseStudy.solution}</p>
                    </div>

                    {/* Results */}
                    <div>
                      <h4 className="font-bold text-black mb-3">Results</h4>
                      <ul className="space-y-2">
                        {caseStudy.results.map((result, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-gray-600">
                            <CheckCircle size={18} className="text-[#175E75] shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Testimonial */}
                    <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-[#175E75]">
                      <p className="text-gray-700 italic mb-2">"{caseStudy.testimonial}"</p>
                      <p className="text-sm text-gray-600">— {caseStudy.client}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudy;
