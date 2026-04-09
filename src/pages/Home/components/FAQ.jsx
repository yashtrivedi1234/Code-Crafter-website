import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: "Why should I choose custom web development over a pre-built template?",
    answer: "Choosing the right approach for website development can be a challenging decision. While pre-built templates are cost-effective, they lack uniqueness and may not reflect your brand identity. Custom website development helps you create a special and trustworthy online presence that stands out and meets your needs. It's an investment in long-term success and customer satisfaction.",
  },
  {
    question: "Do you offer multilingual website development?",
    answer: "Yes, we do. We understand that in today's global market, reaching a diverse audience is crucial. We offer multilingual website development to ensure your content is accessible to users who speak different languages. This can help you expand your customer base and improve your online presence.",
  },
  {
    question: "How long will it take to deliver my website?",
    answer: "The timeline for delivering a website can vary greatly depending on the project's complexity and your specific requirements. We pride ourselves on clear and transparent communication throughout the process. We will work closely with you to set a clear timeline and keep you updated on progress every step of the way.",
  },
  {
    question: "How do you ensure website security?",
    answer: "Security is a top priority for us. We implement a multi-layered security approach, including secure coding practices, regular vulnerability scans, and robust security configurations. We also stay up-to-date with the latest security best practices to protect your website from evolving threats.",
  },
  {
    question: "Is my website scalable for future updates and traffic growth?",
    answer: "Yes, scalability is a core consideration in our development process. We build websites with future growth in mind, using flexible architectures and technologies that allow for easy updates and expansion as your needs evolve and your website traffic increases.",
  },
  {
    question: "How do you make sure that my website loads faster?",
    answer: "We employ various techniques to optimize your website for faster loading times. This includes code optimization, image compression, and efficient database queries. We also follow best practices for front-end performance, such as minimizing HTTP requests and leveraging browser caching.",
  },
  {
    question: "How will I stay updated on the progress of my website development?",
    answer: "We prioritize clear and transparent communication with our clients. We use project management tools and regular check-ins to keep you updated on progress, and we are always available to answer your questions and provide support throughout the development process.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
            Frequently asked <span className="text-[#175E75]">questions</span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 md:space-y-5">
          {faqData.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl border transition-all duration-300 shadow-sm overflow-hidden ${
                  isActive
                    ? 'border-[#175E75] shadow-md' // Removed the ring classes here
                    : 'border-slate-200 hover:border-[#175E75]/40 hover:shadow-md'
                }`}
              >
                <button
                  id={`faq-button-${index}`}
                  aria-expanded={isActive}
                  aria-controls={`faq-answer-${index}`}
                  className="group flex w-full items-center justify-between p-5 gap-4 text-left font-sans focus:outline-none focus-visible:ring-2 focus-visible:ring-[#175E75] focus-visible:ring-offset-2"
                  onClick={() => toggleAccordion(index)}
                >
                  <h3
                    className={`text-base md:text-lg lg:text-xl font-semibold tracking-tight transition-colors duration-300 ${
                      isActive ? 'text-[#175E75]' : 'text-slate-800'
                    }`}
                  >
                    {item.question}
                  </h3>
                  
                  {/* Icon Container */}
                  <span
                    className={`flex-shrink-0 p-2 rounded-full border transition-all duration-300 ease-in-out ${
                      isActive
                        ? 'bg-[#175E75] border-[#175E75] rotate-45'
                        : 'bg-slate-50 border-slate-200 group-hover:bg-slate-100'
                    }`}
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-5 w-5 transition-colors ${isActive ? 'text-white' : 'text-slate-600'}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>
                
                {/* Expandable Content */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-button-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="px-5 md:px-8 pb-6 md:pb-8 pt-2">
                        <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}