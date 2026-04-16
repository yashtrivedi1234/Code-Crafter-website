import React, { useState, useRef, useEffect } from 'react';

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
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isActive ? contentRef.current.scrollHeight : 0);
    }
  }, [isActive]);

  return (
    <div
      className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 mb-2.5
        ${isActive
          ? 'border border-[#175E75] shadow-md'
          : 'border border-slate-200 hover:border-[#175E75]/40 hover:shadow-md shadow-sm'
        }`}
    >
      {/* Button */}
      <button
        onClick={() => onToggle(index)}
        aria-expanded={isActive}
        className="w-full flex items-center justify-between gap-4 px-5 py-[18px] text-left
                   min-h-[56px] md:min-h-[64px] focus:outline-none
                   focus-visible:ring-2 focus-visible:ring-[#175E75] focus-visible:ring-offset-2 group"
      >
        <span
          className={`font-semibold text-[clamp(0.9rem,2.5vw,1.125rem)] leading-snug tracking-tight
                      transition-colors duration-300
                      ${isActive ? 'text-[#175E75]' : 'text-slate-800'}`}
        >
          {item.question}
        </span>

        {/* Icon */}
        <span
          className={`flex-shrink-0 flex items-center justify-center rounded-full border
                      transition-all duration-300 ease-in-out
                      w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10
                      ${isActive
                        ? 'bg-[#175E75] border-[#175E75] rotate-45'
                        : 'bg-slate-50 border-slate-200 group-hover:bg-slate-100'
                      }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-colors
                        ${isActive ? 'text-white' : 'text-slate-600'}`}
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
        style={{
          height: `${height}px`,
          overflow: 'hidden',
          transition: 'height 0.35s cubic-bezier(0.04,0.62,0.23,0.98), opacity 0.35s',
          opacity: isActive ? 1 : 0,
        }}
      >
        <div ref={contentRef} className="px-5 pb-5 pt-1">
          <p className="text-[clamp(0.8125rem,1.8vw,1rem)] leading-7 text-slate-600">
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
    <section className="bg-slate-50 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto w-full">

        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-[clamp(1.25rem,4vw,2rem)] font-extrabold text-slate-900 tracking-tight leading-tight">
            Frequently asked{' '}
            <span className="text-[#175E75]">questions</span>
          </h2>
          <p className="text-[clamp(0.875rem,2vw,1.125rem)] text-slate-500 mt-3 max-w-xl mx-auto">
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