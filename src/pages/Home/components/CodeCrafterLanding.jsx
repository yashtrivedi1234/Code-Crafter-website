import React from "react";
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
    <div className="min-h-screen bg-white text-slate-900 px-4 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-20">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-16 lg:mb-20">
          <h2 className="text-[clamp(1.25rem,4vw,2rem)] font-extrabold leading-tight tracking-tight max-w-4xl mx-auto">
            Why Code Crafter is the Top Web Development Agency in{" "}
            <span className="text-[#175E75]">Lucknow?</span>
          </h2>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t-2 border-l-2 border-slate-900">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border-r-2 border-b-2 border-slate-900 p-5 sm:p-7 lg:p-10
                         transition-all duration-200 ease-in-out
                         hover:bg-slate-50 hover:-translate-y-0.5 group"
            >
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 mb-3
                             group-hover:text-[#175E75] transition-colors duration-300 leading-snug">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-4 sm:mb-6">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-slate-700"
                  >
                    <span className="mt-1 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#175E75] flex-shrink-0" />
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
                       px-6 py-4 sm:px-10 sm:py-5
                       text-sm sm:text-base lg:text-lg font-bold
                       bg-slate-900 text-white
                       hover:bg-[#175E75]
                       transition-all duration-300
                       shadow-lg hover:shadow-cyan-100"
          >
            Start Your Project With Us
            <ArrowUpRight
              className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0
                         group-hover:translate-x-0.5 group-hover:-translate-y-0.5
                         transition-transform duration-300"
            />
          </button>
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-slate-500 font-medium text-center">
            Book a 30-min Free Consultation
          </p>
        </div>

      </div>
    </div>
  );
};

export default CodeCrafterLanding;