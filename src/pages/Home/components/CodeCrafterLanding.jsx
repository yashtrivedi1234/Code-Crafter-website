import { ArrowUpRight } from "lucide-react";

const features = [
  {
    title: "Dedicated and personalized web development",
    description:
      "We value making things and always give our best to create unique websites and achieve great outcomes.",
    points: ["Focus on your needs", "Tailored to your business", "Personalized attention"],
  },
  {
    title: "High quality at a reasonable cost",
    description:
      "Our streamlined processes and optimized resource allocation enable us to deliver high-quality web development solutions as per global standards.",
    points: ["Affordable prices", "High-quality work", "Value for your money"],
  },
  {
    title: "Real-time project tracking",
    description:
      "At Code Crafter, we prioritize transparent communication with our clients by providing real-time report tracking.",
    points: ["Stay up-to-date", "See your project progress", "Be involved in the process"],
  },
  {
    title: "Ongoing support",
    description:
      "We believe in providing ongoing support to our clients in maintaining and optimizing their websites.",
    points: ["Help when you need it", "Answer your questions", "Make sure you're happy"],
  },
  {
    title: "Dynamic and responsive website",
    description:
      "We strive to exceed client expectations with our reliable and accessible web development services.",
    points: ["Looks great on any device", "Works seamlessly", "Keeps your visitors engaged"],
  },
  {
    title: "Performance readiness",
    description:
      "We use smart tools to make websites easy to use and navigate for users.",
    points: ["Built to last", "Scalable and secure", "Ready for the future"],
  },
];

const CodeCrafterLanding = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-900 px-4 py-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-100/20 rounded-full blur-3xl animate-pulse delay-700"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-2 rounded-full bg-[#175E75]/10 text-[#175E75] text-sm font-bold uppercase tracking-wider">Why Us</span>
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-tight tracking-tight max-w-4xl mx-auto text-black">
            Why Code Crafter is the Top Web Development Agency in{" "}
            <span className="text-[#175E75]">Lucknow?</span>
          </h2>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-white border-2 border-gray-200 
                         transition-all duration-500 group cursor-pointer
                         hover:border-[#175E75] hover:shadow-2xl hover:-translate-y-4 
                         hover:bg-blue-50/50"
            >
              {/* Icon with gradient background */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-[#175E75] to-cyan-500 flex items-center justify-center mb-6 text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                📊
              </div>

              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black mb-3
                             group-hover:text-[#175E75] transition-colors duration-300 leading-snug">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6
                           group-hover:text-gray-700 transition-colors">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-700"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#175E75] shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center mt-12 sm:mt-16 lg:mt-20">
          <button
            className="group flex items-center justify-center gap-2 sm:gap-3
                       w-full sm:w-auto
                       px-8 py-4 sm:px-12 sm:py-5
                       text-sm sm:text-base lg:text-lg font-bold
                       bg-[#175E75] text-white
                       rounded-xl transition-all duration-300
                       hover:bg-[#175E75]/90 hover:shadow-2xl
                       shadow-lg"
          >
            Start Your Project With Us
            <ArrowUpRight
              className="w-5 h-5 sm:w-6 sm:h-6 shrink-0
                         group-hover:translate-x-0.5 group-hover:-translate-y-0.5
                         transition-transform duration-300"
            />
          </button>
          <p className="mt-4 sm:mt-5 text-xs sm:text-sm text-slate-600 font-medium text-center">
            Book a 30-min Free Consultation
          </p>
        </div>

      </div>
    </div>
  );
};

export default CodeCrafterLanding;