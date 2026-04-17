import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const ProcessOverview = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description: "We understand your business goals, target audience, and market positioning.",
      color: "from-blue-500 to-blue-600"
    },
    {
      number: "02",
      title: "Design & Prototyping",
      description: "Creating wireframes and interactive prototypes for your approval and feedback.",
      color: "from-purple-500 to-purple-600"
    },
    {
      number: "03",
      title: "Development & Integration",
      description: "Building robust solutions with clean code and best practices in mind.",
      color: "from-green-500 to-green-600"
    },
    {
      number: "04",
      title: "Testing & Optimization",
      description: "Rigorous QA and performance optimization across all devices and browsers.",
      color: "from-orange-500 to-orange-600"
    },
    {
      number: "05",
      title: "Launch & Support",
      description: "Smooth deployment and ongoing support to ensure continued success.",
      color: "from-red-500 to-red-600"
    }
  ];

  return (
    <section className="py-8 px-8 md:px-16 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl animate-pulse delay-500"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-2 rounded-full bg-[#175E75]/10 text-[#175E75] text-sm font-bold mb-4 uppercase tracking-wider">Process</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black">Our Process</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#175E75] to-cyan-400 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">Five-step methodology ensuring quality results</p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-8 items-start group">
              {/* Left connector */}
              <div className="relative shrink-0">
                {/* Vertical line connector */}
                {index < steps.length - 1 && (
                  <div className="absolute left-10 top-24 w-1 h-16 bg-gradient-to-b from-[#175E75] to-transparent"></div>
                )}
                
                {/* Step number circle */}
                <div className={`relative flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br ${step.color} text-white text-2xl font-bold shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1`}>
                  <span>{step.number}</span>
                  {/* Check mark on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                </div>
              </div>

              {/* Content */}
              <div className="grow pt-4 md:pt-6">
                <div className="p-6 rounded-2xl bg-white border-2 border-gray-200 hover:border-[#175E75] transition-all duration-300 group-hover:shadow-lg">
                  <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-[#175E75] transition-colors">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">{step.description}</p>
                  
                  {/* Visual checkmark on hover */}
                  <div className="mt-4 inline-flex items-center gap-2 text-[#175E75] font-bold opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <CheckCircle2 size={20} />
                    <span className="text-sm">Complete</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessOverview;
