import React, { useState } from 'react';
import PageHero from '../WhatWeDo/components/PageHero';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a comprehensive range of digital services including web development, mobile app development, UI/UX design, e-commerce solutions, cloud services, and digital marketing strategies."
    },
    {
      question: "How much does a project cost?",
      answer: "Project costs vary depending on scope, complexity, and timeline. We provide custom quotes after understanding your specific requirements. Contact us for a detailed consultation."
    },
    {
      question: "What is your typical project timeline?",
      answer: "Most projects take 2-6 months depending on complexity. We break projects into phases and provide clear timelines during the initial consultation."
    },
    {
      question: "Do you provide post-launch support?",
      answer: "Yes, we offer 24/7 support and maintenance packages to ensure your digital solutions continue to perform optimally."
    },
    {
      question: "What technologies do you use?",
      answer: "We work with modern technologies including React, Node.js, TypeScript, Cloud platforms (AWS, Azure, GCP), and other cutting-edge tools tailored to your needs."
    },
    {
      question: "Do you work with startups?",
      answer: "Absolutely! We have extensive experience working with startups and can offer flexible engagement models and competitive pricing."
    },
    {
      question: "Can you work on my existing project?",
      answer: "Yes, we can audit, enhance, or completely redesign your existing projects. We'll assess your current setup and provide recommendations."
    },
    {
      question: "How do we communicate during the project?",
      answer: "We maintain regular communication through weekly updates, sprint reviews, and dedicated project managers who are always available for your questions."
    },
    {
      question: "What's your refund policy?",
      answer: "We're confident in our work and offer a satisfaction guarantee. If you're not happy with the deliverables, we'll work to make it right."
    },
    {
      question: "How do I get started?",
      answer: "Simply contact us or schedule a consultation. We'll discuss your project goals, timeline, and provide a detailed proposal."
    }
  ];

  return (
    <div className="w-full">
      <PageHero 
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our services and process"
      />
      
      <section className="py-20 px-8 md:px-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden hover:border-[#175E75] transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 flex justify-between items-center bg-white hover:bg-slate-50 transition-colors"
                >
                  <h3 className="text-black font-semibold text-left">{faq.question}</h3>
                  <ChevronDown
                    size={20}
                    className={`text-[#175E75] shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {openIndex === index && (
                  <div className="px-6 py-4 bg-slate-50 border-t border-gray-200">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-linear-to-r from-[#175E75] to-[#0f3f4f] text-white rounded-lg text-center">
            <h3 className="text-white mb-3">Didn't find your answer?</h3>
            <p className="mb-6 opacity-90">Get in touch with our team for more information</p>
            <a href="/contact" className="inline-block px-8 py-3 rounded-lg bg-white text-[#175E75] font-semibold hover:bg-gray-100 transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
