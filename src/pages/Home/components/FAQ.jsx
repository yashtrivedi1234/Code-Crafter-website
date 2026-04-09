import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: "Why should I choose custom web development over a pre-built template?",
    answer:
      "Choosing the right approach for website development can be a challenging decision. While pre-built templates are cost-effective, they lack uniqueness and may not reflect your brand identity. Custom website development helps you create a special and trustworthy online presence that stands out and meets your needs. It's an investment in long-term success and customer satisfaction.",
  },
  {
    question: "Do you offer multilingual website development?",
    answer:
      "Yes, we do. We understand that in today's global market, reaching a diverse audience is crucial. We offer multilingual website development to ensure your content is accessible to users who speak different languages. This can help you expand your customer base and improve your online presence.",
  },
  {
    question: "How long will it take to deliver my website?",
    answer:
      "The timeline for delivering a website can vary greatly depending on the project's complexity and your specific requirements. We pride ourselves on clear and transparent communication throughout the process. We will work closely with you to set a clear timeline and keep you updated on progress every step of the way.",
  },
  {
    question: "How do you ensure website security?",
    answer:
      "Security is a top priority for us. We implement a multi-layered security approach, including secure coding practices, regular vulnerability scans, and robust security configurations. We also stay up-to-date with the latest security best practices to protect your website from evolving threats.",
  },
  {
    question: "Is my website scalable for future updates and traffic growth?",
    answer:
      "Yes, scalability is a core consideration in our development process. We build websites with future growth in mind, using flexible architectures and technologies that allow for easy updates and expansion as your needs evolve and your website traffic increases.",
  },
  {
    question: "How do you make sure that my website loads faster?",
    answer:
      "We employ various techniques to optimize your website for faster loading times. This includes code optimization, image compression, and efficient database queries. We also follow best practices for front-end performance, such as minimizing HTTP requests and leveraging browser caching.",
  },
  {
    question: "How will I stay updated on the progress of my website development?",
    answer:
      "We prioritize clear and transparent communication with our clients. We use project management tools and regular check-ins to keep you updated on progress, and we are always available to answer your questions and provide support throughout the development process.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <>
      {/* Inject responsive CSS overrides */}
      <style>{`
        /* Fluid font sizes using clamp() for smooth scaling */
        .faq-title {
          font-size: clamp(1.25rem, 4vw, 2rem);
          line-height: 1.2;
        }
        .faq-subtitle {
          font-size: clamp(0.875rem, 2vw, 1.125rem);
          line-height: 1.6;
        }
        .faq-question {
          font-size: clamp(0.9rem, 2.5vw, 1.125rem);
          line-height: 1.4;
        }
        .faq-answer {
          font-size: clamp(0.8125rem, 1.8vw, 1rem);
          line-height: 1.7;
        }

        /* Ensure minimum touch target on mobile (44px) */
        .faq-button {
          min-height: 56px;
        }
        @media (min-width: 768px) {
          .faq-button { min-height: 64px; }
        }

        /* Fluid padding for accordion items */
        .faq-button-inner {
          padding: clamp(0.875rem, 3vw, 1.375rem) clamp(1rem, 3.5vw, 1.5rem);
          gap: clamp(0.75rem, 2vw, 1rem);
        }
        .faq-answer-body {
          padding-inline: clamp(1rem, 3.5vw, 2rem);
          padding-bottom: clamp(1rem, 3vw, 2rem);
          padding-top: 0.25rem;
        }

        /* Icon scales with viewport */
        .faq-icon-wrapper {
          width: clamp(28px, 5vw, 40px);
          height: clamp(28px, 5vw, 40px);
          flex-shrink: 0;
        }
        .faq-icon {
          width: clamp(14px, 2.5vw, 20px);
          height: clamp(14px, 2.5vw, 20px);
        }

        /* Section spacing */
        .faq-section {
          padding-block: clamp(2.5rem, 8vw, 5rem);
          padding-inline: clamp(1rem, 5vw, 2rem);
        }
        .faq-header {
          margin-bottom: clamp(1.5rem, 4vw, 2.5rem);
        }
        .faq-list {
          gap: clamp(0.625rem, 1.5vw, 1.25rem);
        }

        /* Max-width container */
        .faq-container {
          max-width: min(56rem, 100%);
          margin-inline: auto;
          width: 100%;
        }

        /* Very small screens (< 360px) extra care */
        @media (max-width: 359px) {
          .faq-button-inner {
            padding: 0.75rem 0.875rem;
          }
          .faq-answer-body {
            padding-inline: 0.875rem;
          }
        }

        /* Landscape phone: limit max-height so section doesn't feel cramped */
        @media (max-height: 500px) and (orientation: landscape) {
          .faq-section {
            padding-block: 1.5rem;
          }
        }

        /* Large screens: subtle hover lift */
        @media (hover: hover) {
          .faq-card:hover {
            transform: translateY(-1px);
          }
        }
        .faq-card {
          transition: transform 0.2s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }
      `}</style>

      <section className="faq-section bg-slate-50 min-h-screen">
        <div className="faq-container">

          {/* Header */}
          <div className="text-center faq-header">
            <h2 className="faq-title font-extrabold text-slate-900 tracking-tight">
              Frequently asked{' '}
              <span className="text-[#175E75]">questions</span>
            </h2>
            <p className="faq-subtitle text-slate-500 mt-3 max-w-xl mx-auto px-2">
              Everything you need to know about our web development process.
            </p>
          </div>

          {/* Accordion List */}
          <div className="flex flex-col faq-list">
            {faqData.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={index}
                  className={`faq-card bg-white rounded-2xl border shadow-sm overflow-hidden ${
                    isActive
                      ? 'border-[#175E75] shadow-md'
                      : 'border-slate-200 hover:border-[#175E75]/40 hover:shadow-md'
                  }`}
                >
                  {/* Trigger Button */}
                  <button
                    id={`faq-button-${index}`}
                    aria-expanded={isActive}
                    aria-controls={`faq-answer-${index}`}
                    className="faq-button faq-button-inner group flex w-full items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#175E75] focus-visible:ring-offset-2"
                    onClick={() => toggleAccordion(index)}
                  >
                    <h3
                      className={`faq-question font-semibold tracking-tight transition-colors duration-300 ${
                        isActive ? 'text-[#175E75]' : 'text-slate-800'
                      }`}
                    >
                      {item.question}
                    </h3>

                    {/* Icon */}
                    <span
                      className={`faq-icon-wrapper flex items-center justify-center rounded-full border transition-all duration-300 ease-in-out ${
                        isActive
                          ? 'bg-[#175E75] border-[#175E75] rotate-45'
                          : 'bg-slate-50 border-slate-200 group-hover:bg-slate-100'
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`faq-icon transition-colors ${isActive ? 'text-white' : 'text-slate-600'}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
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
                        <div className="faq-answer-body">
                          <p className="faq-answer text-slate-600">
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
    </>
  );
}