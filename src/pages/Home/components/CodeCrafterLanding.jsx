import React from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const CodeCrafterLanding = () => {
  // Primary Color: rgb(23, 94, 117)
  const brandColor = "text-[#175E75]";
  const brandBg = "bg-[#175E75]";
  const brandBorder = "border-[#175E75]";
  const brandHoverBg = "hover:bg-[#175E75]";
  const brandHoverText = "group-hover:text-[#175E75]";

  const features = [
    {
      title: "Dedicated and personalized web development",
      description:
        "We value making things and always give our best to create unique websites and achieve great outcomes.",
      points: [
        "Focus on your needs",
        "Tailored to your business",
        "Personalized attention",
      ],
    },
    {
      title: "High quality at a reasonable cost",
      description:
        "Our streamlined processes and optimized resource allocation enable us to deliver high-quality web development solutions as per global standards.",
      points: [
        "Affordable prices",
        "High-quality work",
        "Value for your money",
      ],
    },
    {
      title: "Real-time project tracking",
      description:
        "At Code Crafter, we prioritize transparent communication with our clients by providing real-time report tracking.",
      points: [
        "Stay up-to-date",
        "See your project progress",
        "Be involved in the process",
      ],
    },
    {
      title: "Ongoing support",
      description:
        "We believe in providing ongoing support to our clients in maintaining and optimizing their websites.",
      points: [
        "Help when you need it",
        "Answer your questions",
        "Make sure you're happy",
      ],
    },
    {
      title: "Dynamic and responsive website",
      description:
        "We strive to exceed client expectations with our reliable and accessible web development services.",
      points: [
        "Looks great on any device",
        "Works seamlessly",
        "Keeps your visitors engaged",
      ],
    },
    {
      title: "Performance readiness",
      description:
        "We use smart tools to make websites easy to use and navigate for users.",
      points: ["Built to last", "Scalable and secure", "Ready for the future"],
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 px-6 py-12 md:p-16">
      {/* Header Section - Centered */}
      <div className="max-w-7xl mx-auto mb-12 md:mb-20 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight inline-block">
          Why Code Crafter is the Top Web Development Agency in {""}
          <span className={`${brandColor} ml-2 sm:ml-0`}>Lucknow?</span>
        </h1>
      </div>

      {/* Grid Section - Responsive Borders */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t-2 border-slate-900">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`p-8 md:p-10 border-slate-200 group hover:bg-slate-50 transition-colors duration-300
              border-b
              ${index % 2 !== 1 ? "sm:border-r" : "sm:border-r-0"} 
              ${index % 3 !== 2 ? "lg:border-r" : "lg:border-r-0"}
            `}
          >
            <h3
              className={`text-xl md:text-2xl font-bold mb-4 leading-snug ${brandHoverText} transition-colors`}
            >
              {feature.title}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {feature.description}
            </p>
            <ul className="space-y-3">
              {feature.points.map((point, idx) => (
                <li
                  key={idx}
                  className="text-[10px] md:text-xs font-bold uppercase tracking-wider flex items-start"
                >
                  <span
                    className={`mt-1 mr-3 w-1.5 h-1.5 shrink-0 ${brandBg} rounded-full`}
                  ></span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* CTA Button - Fully Responsive */}
      <div className="flex flex-col items-center mt-16 md:mt-20 px-4">
        <button
          className={`w-full sm:w-auto group flex items-center justify-center gap-4 bg-slate-900 text-white px-8 md:px-10 py-4 font-bold text-base md:text-lg ${brandHoverBg} transition-all duration-300 shadow-xl hover:shadow-cyan-100`}
        >
          Start Your Project With Us
          <ArrowUpRight className="w-5 h-5 md:w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>
        <p className="mt-4 text-slate-500 font-medium text-sm md:text-base text-center">
          Book a 30-min Free Consultation
        </p>
      </div>
    </div>
  );
};

export default CodeCrafterLanding;
