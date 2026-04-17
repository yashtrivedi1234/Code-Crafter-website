import React from 'react';

const ProcessOverview = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description: "We understand your business goals, target audience, and market positioning."
    },
    {
      number: "02",
      title: "Design & Prototyping",
      description: "Creating wireframes and interactive prototypes for your approval and feedback."
    },
    {
      number: "03",
      title: "Development & Integration",
      description: "Building robust solutions with clean code and best practices in mind."
    },
    {
      number: "04",
      title: "Testing & Optimization",
      description: "Rigorous QA and performance optimization across all devices and browsers."
    },
    {
      number: "05",
      title: "Launch & Support",
      description: "Smooth deployment and ongoing support to ensure continued success."
    }
  ];

  return (
    <section className="py-20 px-8 md:px-16 bg-linear-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-black mb-4">Our Process</h2>
          <p className="text-gray-600 text-lg">Five-step methodology ensuring quality results</p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-8 items-start">
              <div className="shrink-0">
                <div className="flex items-center justify-center w-20 h-20 rounded-lg brand-bg text-white text-2xl font-bold">
                  {step.number}
                </div>
              </div>
              <div className="grow pt-2">
                <h3 className="text-black mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessOverview;
