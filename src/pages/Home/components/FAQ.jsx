import { useState } from 'react';

const faqData = [
  {
    question: "Why should I choose custom web development over a pre-built template?",
    answer: "Choosing the right approach for website development can be a challenging decision. While pre-built templates are cost-effective, they lack uniqueness and may not reflect your brand identity. Custom website development helps you create a special and trustworthy online presence that stands out and meets your needs. It's an investment in long-term success and customer satisfaction.",
  },
  {
    question: "Do you offer multilingual website development?",
    answer: "Yes, we do. We understand that in today's global market, reaching a diverse audience is crucial. We offer multilingual website development to ensure your content is accessible to users who speak different languages.",
  },
  {
    question: "How long will it take to deliver my website?",
    answer: "The timeline for delivering a website can vary greatly depending on the project's complexity and your specific requirements. We will work closely with you to set a clear timeline and keep you updated on progress every step of the way.",
  },
  {
    question: "How do you ensure website security?",
    answer: "Security is a top priority for us. We implement a multi-layered security approach, including secure coding practices, regular vulnerability scans, and robust security configurations.",
  },
  {
    question: "Is my website scalable for future updates and traffic growth?",
    answer: "Yes, scalability is a core consideration in our development process. We build websites with future growth in mind, using flexible architectures and technologies that allow for easy updates and expansion.",
  },
  {
    question: "How do you make sure that my website loads faster?",
    answer: "We employ various techniques to optimize your website for faster loading times. This includes code optimization, image compression, and efficient database queries.",
  },
  {
    question: "How will I stay updated on the progress of my website development?",
    answer: "We prioritize clear and transparent communication with our clients. We use project management tools and regular check-ins to keep you updated on progress.",
  },
];

function AccordionItem({ item, index, isActive, onToggle }) {
  return (
    <div
      className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 mb-4
        ${isActive
          ? 'border-2 border-[#175E75] shadow-lg'
          : 'border-2 border-gray-200 hover:border-[#175E75] hover:shadow-md shadow-sm'
        }`}
    >
      {/* Button */}
      <button
        onClick={() => onToggle(index)}
        aria-expanded={isActive}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left
                   min-h-16 md:min-h-18 focus:outline-none
                   focus-visible:ring-2 focus-visible:ring-[#175E75] focus-visible:ring-offset-2 group"
      >
        <span
          className={`font-semibold text-base md:text-lg leading-snug tracking-tight
                      transition-colors duration-300
                      ${isActive ? 'text-[#175E75]' : 'text-black'}`}
        >
          {item.question}
        </span>

        {/* Icon */}
        <span
          className={`shrink-0 flex items-center justify-center rounded-full border-2
                      transition-all duration-300 ease-in-out
                      w-8 h-8 sm:w-10 sm:h-10
                      ${isActive
                        ? 'bg-[#175E75] border-[#175E75] rotate-45'
                        : 'bg-gray-50 border-gray-200 group-hover:bg-blue-50 group-hover:border-[#175E75]'
                      }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors
                        ${isActive ? 'text-white' : 'text-gray-600'}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>

      {/* Expandable Answer */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-out ${
          isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-5 pt-2 border-t-2 border-gray-100">
          <p className="text-sm md:text-base leading-relaxed text-gray-700 font-medium">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-white via-slate-50 to-white py-8 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-100/20 rounded-full blur-3xl animate-pulse delay-700"></div>

      <div className="max-w-3xl mx-auto w-full relative z-10">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-2 rounded-full bg-[#175E75]/10 text-[#175E75] text-sm font-bold uppercase tracking-wider">FAQ</span>
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-black tracking-tight">
            Frequently asked <span className="text-[#175E75]">questions</span>
          </h2>

          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our web development process.
          </p>
        </div>

        {/* Accordion */}
        <div>
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              item={item}
              index={index}
              isActive={activeIndex === index}
              onToggle={toggleAccordion}
            />
          ))}
        </div>

      </div>
    </section>
  );
}