const technologies = [
  { name: "MongoDB", logo: "https://cdn.simpleicons.org/mongodb/47A248" },
  { name: "Express", logo: "https://cdn.simpleicons.org/express/000000" },
  { name: "React", logo: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { name: "JavaScript", logo: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "TypeScript", logo: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: ".NET", logo: "https://cdn.simpleicons.org/dotnet/512BD4" },
  { name: "C#", logo: "https://cdn.simpleicons.org/csharp/239120" },
  { name: "Microsoft SQL Server", logo: "https://cdn.simpleicons.org/microsoftsqlserver/CC2927" },
  { name: "Azure", logo: "https://cdn.simpleicons.org/microsoftazure/0078D4" },
  { name: "Tailwind CSS", logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "Bootstrap", logo: "https://cdn.simpleicons.org/bootstrap/7952B3" },
  { name: "WordPress", logo: "https://cdn.simpleicons.org/wordpress/21759B" },
  { name: "Google Analytics", logo: "https://cdn.simpleicons.org/googleanalytics/E37400" },
  { name: "Google Tag Manager", logo: "https://cdn.simpleicons.org/googletagmanager/246FDB" },
  { name: "SEMrush", logo: "https://cdn.simpleicons.org/semrush/FF642D" },
  { name: "Ahrefs", logo: "https://cdn.simpleicons.org/ahrefs/FF8800" },
  { name: "Google Ads", logo: "https://cdn.simpleicons.org/googleads/4285F4" },
  { name: "Figma", logo: "https://cdn.simpleicons.org/figma/F24E1E" },
  { name: "Adobe Photoshop", logo: "https://cdn.simpleicons.org/adobephotoshop/31A8FF" },
  { name: "Adobe Illustrator", logo: "https://cdn.simpleicons.org/adobeillustrator/FF9A00" },
  { name: "Canva", logo: "https://cdn.simpleicons.org/canva" },
  { name: "Git", logo: "https://cdn.simpleicons.org/git/F05032" },
  { name: "GitHub", logo: "https://cdn.simpleicons.org/github/181717" },
];

const TechCard = ({ tech }) => (
  <div className="bg-white p-4 sm:p-5 rounded-2xl border-2 border-gray-200 flex items-center justify-center transition-all duration-500 hover:border-[#175E75] hover:shadow-2xl hover:-translate-y-2 group min-w-28 h-28 sm:h-32">
    <div className="w-14 sm:w-16 h-14 sm:h-16 bg-slate-50 rounded-xl flex items-center justify-center transition-all duration-500 shadow-sm group-hover:bg-blue-50">
      <img
        src={tech.logo}
        alt={`${tech.name} logo`}
        loading="lazy"
        className="w-8 sm:w-9 h-8 sm:h-9 object-contain transition-transform duration-300 group-hover:scale-110"
      />
    </div>
  </div>
);

const TechStack = () => {
  return (
    <section className="relative min-h-screen py-8 px-4 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-100/20 rounded-full blur-3xl animate-pulse delay-700"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-2 rounded-full bg-[#175E75]/10 text-[#175E75] text-sm font-bold uppercase tracking-wider">Tech Stack</span>
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-black tracking-tight">
            Robust Tools & <span className="text-[#175E75]">Technologies</span> We Work With
          </h2>
        
        </div>

        {/* Grid System */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {technologies.map((tech, index) => (
            <TechCard key={index} tech={tech} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
