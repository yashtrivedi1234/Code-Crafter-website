import React from 'react';

const technologies = [
  { name: 'Bootstrap' }, { name: 'Node JS' }, { name: 'Shopify' },
  { name: 'Microsoft Azure' }, { name: 'Docker' }, { name: 'Gemini APIs' },
  { name: 'Semantic UI' }, { name: 'JavaScript' }, { name: 'Golang' },
  { name: 'CSS3' }, { name: 'Digital Ocean' }, { name: 'Jenkins' },
  { name: 'Razorpay' }, { name: 'AMP' }, { name: 'TypeScript' },
  { name: 'Python' }, { name: 'Tailwind CSS' }, { name: 'Git' },
  { name: 'Electron JS' }, { name: 'OpenAI APIs' }, { name: 'Adobe Illustrator' },
  { name: 'WordPress' }, { name: 'Django' }, { name: 'GitHub' },
  { name: 'Shadcn UI' }, { name: 'Stripe' }, { name: 'Figma' },
  { name: 'Framer' },
];

const TechCard = ({ tech }) => (
  <div className="bg-white p-4 rounded-2xl border border-gray-100 flex flex-col items-center justify-center transition-all duration-500 hover:border-[#175E75]/30 hover:shadow-2xl hover:shadow-[#175E75]/10 hover:-translate-y-2 group min-w-[120px] h-36">
    {/* Animated Icon Placeholder */}
    <div className="w-14 h-14 mb-4 bg-slate-50 rounded-xl flex items-center justify-center font-black text-2xl text-slate-400 group-hover:bg-[#175E75] group-hover:text-white transition-all duration-500 shadow-inner">
      {tech.name.charAt(0)}
    </div>
    <span className="text-xs font-bold text-slate-600 group-hover:text-[#175E75] text-center tracking-tight transition-colors duration-300 uppercase">
      {tech.name}
    </span>
  </div>
);

const TechStack = () => {
  return (
    <section className="py-24 px-6 bg-[#fcfdfe]">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-[#175E75] text-sm font-bold uppercase tracking-[0.3em] block mb-4">
            Our Tech Stack
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter">
            Robust Tools & <span className="text-[#175E75]">Technologies</span> We Work
          </h2>
          <div className="w-20 h-1.5 bg-[#175E75] mx-auto rounded-full opacity-20"></div>
        </div>
        
        {/* Grid System */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {technologies.map((tech, index) => (
            <TechCard key={index} tech={tech} />
          ))}
        </div>

        {/* Bottom Decorative Element */}
        <div className="mt-20 p-8 rounded-3xl bg-slate-900 text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#175E75] opacity-10 rounded-full -mr-16 -mt-16 blur-3xl group-hover:opacity-20 transition-opacity"></div>
            <p className="text-white/80 font-medium text-lg relative z-10">
                Don't see your preferred tech here? <span className="text-[#175E75] font-bold cursor-pointer hover:underline">Ask our experts</span>—we adapt to your needs.
            </p>
        </div>
      </div>
    </section>
  );
};

export default TechStack;