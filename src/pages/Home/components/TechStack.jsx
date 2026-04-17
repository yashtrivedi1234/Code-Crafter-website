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
  <div className="bg-white p-4 rounded-2xl border border-gray-100 flex items-center justify-center transition-all duration-500 hover:border-(--brand) hover:shadow-2xl brand-shadow hover:-translate-y-2 group min-w-30 h-28">
    <div className="w-16 h-16 bg-slate-50 rounded-xl flex items-center justify-center transition-all duration-500 shadow-inner group-hover:bg-[#ecf8fb]">
      <img
        src={tech.logo}
        alt={`${tech.name} logo`}
        loading="lazy"
        className="w-9 h-9 object-contain transition-transform duration-300 group-hover:scale-110"
      />
    </div>
  </div>
);

const TechStack = () => {
  return (
    <section className="py-8 px-6 bg-[#fcfdfe]">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <span className="brand-text text-sm font-bold uppercase tracking-[0.3em] block">
            Our Tech Stack
          </span>
          <h2 className="text-[clamp(1.25rem,4vw,2rem)] font-black text-slate-900 tracking-tighter">
            Robust Tools & <span className="brand-text">Technologies</span>{" "}
            We Work
          </h2>
        </div>

        {/* Grid System */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {technologies.map((tech, index) => (
            <TechCard key={index} tech={tech} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
