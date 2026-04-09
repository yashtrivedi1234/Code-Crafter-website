import React from "react";
import { ArrowUpRight } from "lucide-react";

const CodeCrafterLanding = () => {
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

  return (
    <>
      <style>{`
        /* ── Fluid scale ── */
        .cc-section {
          padding: clamp(2rem, 6vw, 4rem) clamp(1rem, 5vw, 4rem);
        }
        .cc-heading {
          font-size: clamp(1.5rem, 4.5vw, 3.25rem);
          line-height: 1.15;
          letter-spacing: -0.02em;
        }
        .cc-header-gap {
          margin-bottom: clamp(2rem, 5vw, 5rem);
        }
        .cc-card-pad {
          padding: clamp(1.25rem, 3.5vw, 2.5rem);
        }
        .cc-card-title {
          font-size: clamp(0.95rem, 2vw, 1.35rem);
          line-height: 1.35;
          margin-bottom: clamp(0.5rem, 1.5vw, 1rem);
        }
        .cc-card-desc {
          font-size: clamp(0.8rem, 1.5vw, 0.9rem);
          line-height: 1.7;
          margin-bottom: clamp(0.875rem, 2vw, 1.5rem);
        }
        .cc-point {
          font-size: clamp(0.65rem, 1.2vw, 0.72rem);
          letter-spacing: 0.07em;
        }
        .cc-dot {
          width: clamp(5px, 0.9vw, 7px);
          height: clamp(5px, 0.9vw, 7px);
          flex-shrink: 0;
          margin-top: 3px;
          margin-right: clamp(6px, 1vw, 12px);
        }

        /* ── Grid border logic ── */
        .cc-grid {
          display: grid;
          grid-template-columns: 1fr;
          border-top: 2px solid #0f172a;
          border-left: 2px solid #0f172a;
        }
        .cc-card {
          border-right: 2px solid #0f172a;
          border-bottom: 2px solid #0f172a;
          transition: background-color 0.25s ease, transform 0.2s ease;
        }
        /* 2-col */
        @media (min-width: 540px) {
          .cc-grid { grid-template-columns: repeat(2, 1fr); }
        }
        /* 3-col */
        @media (min-width: 900px) {
          .cc-grid { grid-template-columns: repeat(3, 1fr); }
        }

        /* Hover — desktop only */
        @media (hover: hover) {
          .cc-card:hover {
            background-color: #f8fafc;
            transform: translateY(-2px);
          }
          .cc-card:hover .cc-card-title {
            color: #175E75;
          }
        }

        /* ── CTA ── */
        .cc-cta-gap {
          margin-top: clamp(2.5rem, 6vw, 5rem);
        }
        .cc-btn {
          font-size: clamp(0.875rem, 1.8vw, 1.125rem);
          padding: clamp(0.875rem, 2vw, 1.125rem) clamp(1.5rem, 4vw, 2.5rem);
          gap: clamp(0.625rem, 1.5vw, 1rem);
          width: 100%;
          max-width: 480px;
        }
        @media (min-width: 480px) {
          .cc-btn { width: auto; }
        }
        .cc-btn-icon {
          width: clamp(18px, 2.5vw, 24px);
          height: clamp(18px, 2.5vw, 24px);
          flex-shrink: 0;
        }
        .cc-sub {
          font-size: clamp(0.8rem, 1.5vw, 0.9375rem);
          margin-top: clamp(0.625rem, 1.5vw, 1rem);
        }

        /* ── Very small screens (<360px) ── */
        @media (max-width: 359px) {
          .cc-card-pad { padding: 1rem; }
          .cc-btn { padding: 0.875rem 1.25rem; }
        }

        /* ── Landscape phones ── */
        @media (max-height: 500px) and (orientation: landscape) {
          .cc-section { padding-block: 1.25rem; }
          .cc-header-gap { margin-bottom: 1.25rem; }
        }
      `}</style>

      <div className="min-h-screen bg-white font-sans text-slate-900 cc-section">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center cc-header-gap">
            <h1 className="cc-heading font-extrabold inline-block max-w-4xl mx-auto">
              Why Code Crafter is the Top Web Development Agency in{" "}
              <span className="text-[#175E75]">Lucknow?</span>
            </h1>
          </div>

          {/* Feature Grid */}
          <div className="cc-grid">
            {features.map((feature, index) => (
              <div key={index} className="cc-card cc-card-pad">
                <h3 className="cc-card-title font-bold text-slate-900 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="cc-card-desc text-slate-500">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.points.map((point, idx) => (
                    <li key={idx} className="cc-point font-bold uppercase flex items-start text-slate-700">
                      <span className="cc-dot bg-[#175E75] rounded-full inline-block" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center cc-cta-gap">
            <button className="cc-btn group flex items-center justify-center font-bold bg-slate-900 text-white hover:bg-[#175E75] transition-all duration-300 shadow-lg hover:shadow-cyan-100">
              Start Your Project With Us
              <ArrowUpRight
                className="cc-btn-icon group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
            </button>
            <p className="cc-sub text-slate-500 font-medium text-center">
              Book a 30-min Free Consultation
            </p>
          </div>

        </div>
      </div>
    </>
  );
};

export default CodeCrafterLanding;