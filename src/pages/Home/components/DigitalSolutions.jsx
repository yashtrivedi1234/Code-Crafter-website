import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  {
    id: 0,
    number: "01",
    title: "Fully Customized Websites",
    short: "Built from scratch, just for you.",
    description:
      "Running a business is the result of your dreams coming true, and it's our job to express that on the internet. We develop your website from scratch with unique and efficient technologies.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=90",
    tag: "Design & Dev",
  },
  {
    id: 1,
    number: "02",
    title: "All Services in One Place",
    short: "One team. Every solution.",
    description: (
      <>
        No need to go anywhere else. We deliver end-to-end services — planning,
        development, hosting, infographics,{" "}
        <a href="#" className="font-medium text-[#175E75] underline underline-offset-2 decoration-[#175E75] hover:opacity-80 transition-colors">
          digital marketing
        </a>{" "}
        and{" "}
        <a href="#" className="font-medium text-[#175E75] underline underline-offset-2 decoration-[#175E75] hover:opacity-80 transition-colors">
          SEO services
        </a>
        .
      </>
    ),
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=90",
    tag: "Full Stack",
  },
  {
    id: 2,
    number: "03",
    title: "Highly Skilled In-Line Team",
    short: "Creativity meets cutting-edge tech.",
    description:
      "Our team members are trained in the latest technologies. They implement their creativity in website development to ensure that your website stands out from the rest.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=90",
    tag: "Team",
  },
  {
    id: 3,
    number: "04",
    title: "On-Time Delivery",
    short: "Deadlines are a promise, not a goal.",
    description:
      "We promise to deliver all projects on time and following client instructions, ensuring good quality work without any delays.",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&q=90",
    tag: "Workflow",
  },
];

const TEAL = "#175E75";

export default function DigitalSolutions() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = features[activeIndex];

  return (
    <section
      className="min-h-screen bg-[#f8fafc] text-gray-900 overflow-hidden relative"
      style={{
        fontFamily: "'DM Sans', sans-serif",
        padding: "clamp(3rem,8vw,6rem) clamp(1rem,5vw,2rem)",
      }}
    >
      <style>{`
        
        /* ── Fluid heading ── */
        .ds-hero-heading {
          font-size: clamp(2rem, 6vw, 3.75rem);
          line-height: 1.1;
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          max-width: 42rem;
          margin-inline: auto;
        }

        /* ── Main grid: stack on mobile, 12-col on lg ── */
        .ds-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(1.5rem, 4vw, 3.5rem);
          align-items: start;
        }
        @media (min-width: 1024px) {
          .ds-layout {
            grid-template-columns: 5fr 7fr;
          }
        }

        /* ── Mobile: image first, list second ── */
        .ds-list-panel  { order: 2; }
        .ds-image-panel { order: 1; }
        @media (min-width: 1024px) {
          .ds-list-panel  { order: 1; }
          .ds-image-panel { order: 2; position: sticky; top: clamp(1rem, 2vw, 2.5rem); }
        }

        /* ── Feature items ── */
        .ds-item-inner {
          padding: clamp(0.875rem,2.5vw,1.5rem) clamp(1rem,3vw,1.5rem);
          display: flex;
          align-items: flex-start;
          gap: clamp(0.75rem,2vw,1.25rem);
        }
        .ds-item-num {
          font-size: clamp(0.65rem,1vw,0.7rem);
          font-weight: 700;
          letter-spacing: 0.15em;
          margin-top: 2px;
          flex-shrink: 0;
        }
        .ds-item-title {
          font-size: clamp(0.875rem,1.8vw,1.0625rem);
          font-weight: 700;
          line-height: 1.35;
        }
        .ds-item-short {
          font-size: clamp(0.7rem,1.2vw,0.75rem);
          font-weight: 600;
          margin-top: 2px;
        }
        .ds-item-desc {
          font-size: clamp(0.75rem,1.3vw,0.875rem);
          line-height: 1.7;
          margin-top: clamp(0.5rem,1vw,0.75rem);
          padding-right: clamp(0,1vw,0.5rem);
        }
        .ds-tag {
          font-size: clamp(0.58rem,0.9vw,0.625rem);
          padding: 2px clamp(6px,1vw,8px);
          border-radius: 999px;
          border: 1px solid;
          font-weight: 700;
          flex-shrink: 0;
          align-self: flex-start;
          letter-spacing: 0.04em;
        }

        /* ── Image panel ── */
        .ds-img-wrap {
          position: relative;
          border-radius: clamp(12px,2vw,20px);
          overflow: hidden;
          /* Fluid aspect — landscape on mobile, more square on desktop */
          aspect-ratio: 16/9;
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
          background: #e2e8f0;
        }
        @media (min-width: 1024px) {
          .ds-img-wrap { aspect-ratio: 4/3; }
        }

        /* Ghost number */
        .ds-ghost-num {
          position: absolute;
          top: clamp(0.75rem,2vw,1.25rem);
          left: clamp(1rem,2.5vw,2rem);
          z-index: 20;
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(3rem,10vw,6.25rem);
          line-height: 1;
          color: rgba(255,255,255,0.35);
          pointer-events: none;
          user-select: none;
        }

        /* Badges */
        .ds-tag-badge {
          position: absolute;
          bottom: clamp(0.75rem,2vw,1.5rem);
          left: clamp(0.75rem,2vw,1.5rem);
          z-index: 20;
          background: ${TEAL};
          color: white;
          font-size: clamp(0.55rem,1vw,0.6875rem);
          font-weight: 700;
          padding: clamp(4px,0.8vw,8px) clamp(10px,1.5vw,16px);
          border-radius: 999px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        .ds-title-badge {
          position: absolute;
          bottom: clamp(0.75rem,2vw,1.5rem);
          right: clamp(0.75rem,2vw,1.5rem);
          z-index: 20;
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(8px);
          color: ${TEAL};
          font-size: clamp(0.65rem,1.2vw,0.8125rem);
          font-weight: 700;
          padding: clamp(6px,1vw,12px) clamp(10px,1.5vw,20px);
          border-radius: clamp(10px,1.5vw,16px);
          border: 1px solid rgba(23,94,117,0.1);
          max-width: clamp(130px,30vw,220px);
          text-align: right;
          line-height: 1.3;
        }

        /* Corner accents */
        .ds-corner-tl {
          position: absolute; top: clamp(-6px,-1vw,-8px); left: clamp(-6px,-1vw,-8px);
          width: clamp(28px,5vw,48px); height: clamp(28px,5vw,48px);
          border-top: 2px solid ${TEAL}; border-left: 2px solid ${TEAL};
          border-radius: 4px 0 0 0; z-index: 20;
        }
        .ds-corner-br {
          position: absolute; bottom: clamp(-6px,-1vw,-8px); right: clamp(-6px,-1vw,-8px);
          width: clamp(28px,5vw,48px); height: clamp(28px,5vw,48px);
          border-bottom: 2px solid ${TEAL}; border-right: 2px solid ${TEAL};
          border-radius: 0 0 4px 0; z-index: 20;
        }

        /* Progress dots */
        .ds-dots {
          display: flex;
          gap: clamp(6px,1vw,10px);
          justify-content: center;
          margin-top: clamp(1rem,2.5vw,2rem);
          padding-inline: 4px;
        }
        .ds-dot-btn {
          outline: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          border-radius: 999px;
        }
        .ds-dot-btn:focus-visible {
          outline: 2px solid ${TEAL};
          outline-offset: 2px;
        }

        /* Header margin */
        .ds-header {
          margin-bottom: clamp(2rem,5vw,5rem);
        }

        /* Eyebrow */
        .ds-eyebrow {
          font-size: clamp(0.6rem,1vw,0.75rem);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: ${TEAL};
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(8px,1.5vw,12px);
          margin-bottom: clamp(0.75rem,1.5vw,1rem);
        }
        .ds-eyebrow-line {
          display: block;
          height: 2px;
          background: ${TEAL};
          width: clamp(20px,4vw,32px);
        }

        /* Very small screens */
        @media (max-width: 359px) {
          .ds-item-inner { padding: 0.75rem; gap: 0.625rem; }
          .ds-ghost-num { font-size: 2.5rem; }
        }

        /* Landscape phones */
        @media (max-height: 500px) and (orientation: landscape) {
          .ds-img-wrap { aspect-ratio: 21/9; }
        }
      `}</style>

      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] z-0"
        style={{
          backgroundImage: "linear-gradient(#000 1px,transparent 1px),linear-gradient(90deg,#000 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow blob */}
      <motion.div
        className="pointer-events-none absolute top-0 right-0 rounded-full z-0"
        style={{
          width: "clamp(260px,50vw,600px)",
          height: "clamp(260px,50vw,600px)",
          background: `radial-gradient(circle, rgba(23,94,117,0.15) 0%, transparent 70%)`,
          transform: "translate(30%,-30%)",
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="ds-header text-center"
        >
          <p className="ds-eyebrow">
            <span className="ds-eyebrow-line" />
            What We Offer
            <span className="ds-eyebrow-line" />
          </p>
         <h1 className="ds-hero-heading">
  End-to-End{" "}
  <span className="relative inline-block whitespace-nowrap">
    <span className="relative z-10" style={{ color: TEAL }}>Digital</span>
    <motion.span
      className="absolute inset-0 rounded-md -mx-1"
      style={{ background: "rgba(23,94,117,0.1)" }}
      animate={{ scaleX: [0.95, 1.05, 0.95] }}
      transition={{ duration: 3, repeat: Infinity }}
    />
  </span>{" "}
  Solutions{" "}
  <span>for Growing Businesses</span>
</h1>
        </motion.div>

        {/* Main layout */}
        <div className="ds-layout">

          {/* Feature list */}
          <div className="ds-list-panel flex flex-col gap-2">
            {features.map((feature, index) => {
              const isActive = activeIndex === index;
              return (
                <motion.div
                  key={feature.id}
                  onClick={() => setActiveIndex(index)}
                  onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setActiveIndex(index); } }}
                  tabIndex={0}
                  role="button"
                  aria-expanded={isActive}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group cursor-pointer outline-none focus-visible:ring-2 rounded-xl"
                  style={{ "--tw-ring-color": TEAL }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-xl"
                    style={{ background: "rgba(23,94,117,0.03)", border: "1px solid rgba(23,94,117,0.1)" }}
                    initial={false}
                    animate={{ opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />

                  <div className="ds-item-inner relative z-10">
                    <motion.span
                      className="ds-item-num shrink-0"
                      animate={{ color: isActive ? TEAL : "#9ca3af" }}
                      transition={{ duration: 0.3 }}
                    >
                      {feature.number}
                    </motion.span>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 mb-0.5">
                        <motion.h3
                          className="ds-item-title"
                          animate={{ color: isActive ? "#111827" : "#6b7280" }}
                          transition={{ duration: 0.3 }}
                        >
                          {feature.title}
                        </motion.h3>
                        <motion.span
                          className="ds-tag"
                          animate={{
                            borderColor: isActive ? "rgba(23,94,117,0.3)" : "rgba(0,0,0,0.1)",
                            color: isActive ? TEAL : "#6b7280",
                            backgroundColor: isActive ? "rgba(23,94,117,0.05)" : "transparent",
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {feature.tag}
                        </motion.span>
                      </div>

                      <motion.p
                        className="ds-item-short"
                        animate={{ color: isActive ? "#4b5563" : "#9ca3af" }}
                        transition={{ duration: 0.3 }}
                      >
                        {feature.short}
                      </motion.p>

                      <motion.div
                        initial={false}
                        animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
                        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                        style={{ overflow: "hidden" }}
                      >
                        <p className="ds-item-desc text-gray-600">
                          {feature.description}
                        </p>
                      </motion.div>
                    </div>

                    <motion.div
                      className="shrink-0 mt-1 hidden sm:block"
                      animate={{ x: isActive ? 0 : -6, opacity: isActive ? 1 : 0, color: TEAL }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
                        <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </motion.div>
                  </div>

                  <div className={`h-px bg-gray-200 mx-5 transition-opacity ${isActive ? "opacity-0" : "opacity-100"}`} />
                </motion.div>
              );
            })}
          </div>

          {/* Image panel */}
          <motion.div
            className="ds-image-panel"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div style={{ position: "relative" }}>
              <div className="ds-corner-tl" />
              <div className="ds-corner-br" />

              <div className="ds-img-wrap">
                {/* Ghost number */}
                <div className="ds-ghost-num">{active.number}</div>

                {/* Gradient */}
                <div className="absolute inset-0 z-10" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.1) 50%, transparent)" }} />

                {/* Tag badge */}
                <motion.div
                  key={activeIndex + "-tag"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="ds-tag-badge"
                >
                  {active.tag}
                </motion.div>

                {/* Title badge */}
                <motion.div
                  key={activeIndex + "-title"}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="ds-title-badge"
                >
                  {active.title}
                </motion.div>

                {/* Image crossfade */}
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeIndex}
                    src={active.image}
                    alt={active.title}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>
              </div>
            </div>

            {/* Progress dots */}
            <div className="ds-dots">
              {features.map((_, i) => (
                <button
                  key={i}
                  className="ds-dot-btn"
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                >
                  <motion.div
                    className="rounded-full"
                    style={{ height: "clamp(6px,1vw,10px)" }}
                    animate={{
                      width: activeIndex === i ? "clamp(20px,4vw,30px)" : "clamp(6px,1vw,10px)",
                      backgroundColor: activeIndex === i ? TEAL : "#cbd5e1",
                    }}
                    transition={{ duration: 0.4 }}
                  />
                </button>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}