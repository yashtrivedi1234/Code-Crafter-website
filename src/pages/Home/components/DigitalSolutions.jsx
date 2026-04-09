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

export default function DigitalSolutions() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = features[activeIndex];

  return (
    <section
      className="min-h-screen bg-[#f8fafc] text-gray-900 px-4 sm:px-6 py-16 md:py-24 overflow-hidden relative"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&family=Syne:wght@700;800&display=swap');`}</style>

      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] z-0"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow blob - Synced to Teal */}
      <motion.div
        className="pointer-events-none absolute top-[-100px] right-[-100px] md:top-[-200px] md:right-[-200px] w-[400px] md:w-[600px] h-[400px] md:h-[600px] rounded-full z-0"
        style={{
          background: `radial-gradient(circle, rgba(23,94,117,0.15) 0%, transparent 70%)`,
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
          className="mb-12 md:mb-20 flex flex-col items-center text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-6 md:w-8 h-[2px] bg-[#175E75]" />
            <span className="text-[#175E75] text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
              What We Offer
            </span>
            <div className="w-6 md:w-8 h-[2px] bg-[#175E75]" />
          </div>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight max-w-3xl mx-auto"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            End-to-End{" "}
            <span className="relative inline-block whitespace-nowrap">
              <span className="relative z-10 text-[#175E75]">Digital</span>
              <motion.span
                className="absolute inset-0 bg-[#175E75]/10 rounded-md -mx-1 md:-mx-2"
                animate={{ scaleX: [0.95, 1.05, 0.95] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </span>{" "}
            Solutions
            <br className="hidden sm:block" />
            <span className="sm:ml-2">for Growing Businesses</span>
          </h1>
        </motion.div>

        {/* Main Layout */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Feature List - Ordered 2nd on mobile, 1st on desktop */}
          <div className="order-2 lg:order-1 lg:col-span-5 flex flex-col gap-3 md:gap-2 w-full">
            {features.map((feature, index) => {
              const isActive = activeIndex === index;

              return (
                <motion.div
                  key={feature.id}
                  onClick={() => setActiveIndex(index)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveIndex(index);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-expanded={isActive}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#175E75] focus-visible:ring-offset-2 rounded-xl"
                >
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-[#175E75]/[0.03] border border-[#175E75]/10"
                    initial={false}
                    animate={{ opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />

                  <div className="relative z-10 px-5 py-5 sm:px-6 sm:py-6 flex items-start gap-4 sm:gap-5">
                    <motion.span
                      className="text-[11px] font-bold tracking-widest mt-1 shrink-0"
                      animate={{ color: isActive ? "#175E75" : "#9ca3af" }}
                      transition={{ duration: 0.3 }}
                    >
                      {feature.number}
                    </motion.span>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3 mb-1">
                        <motion.h3
                          className="text-base sm:text-[17px] font-bold leading-tight"
                          animate={{ color: isActive ? "#111827" : "#6b7280" }}
                          transition={{ duration: 0.3 }}
                        >
                          {feature.title}
                        </motion.h3>
                        <motion.span
                          className="text-[10px] px-2 py-0.5 rounded-full border shrink-0 font-bold self-start sm:self-auto"
                          animate={{
                            borderColor: isActive ? "rgba(23,94,117,0.3)" : "rgba(0,0,0,0.1)",
                            color: isActive ? "#175E75" : "#6b7280",
                            backgroundColor: isActive ? "rgba(23,94,117,0.05)" : "transparent"
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {feature.tag}
                        </motion.span>
                      </div>

                      <motion.p
                        className="text-[12px] font-semibold"
                        animate={{ color: isActive ? "#4b5563" : "#9ca3af" }}
                        transition={{ duration: 0.3 }}
                      >
                        {feature.short}
                      </motion.p>

                      <motion.div
                        initial={false}
                        animate={{
                          height: isActive ? "auto" : 0,
                          opacity: isActive ? 1 : 0,
                        }}
                        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                        style={{ overflow: "hidden" }}
                      >
                        <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed mt-3 pr-2">
                          {feature.description}
                        </p>
                      </motion.div>
                    </div>

                    <motion.div
                      className="shrink-0 mt-1 hidden sm:block"
                      animate={{
                        x: isActive ? 0 : -6,
                        opacity: isActive ? 1 : 0,
                        color: "#175E75",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
                        <path
                          d="M1 7h12M7 1l6 6-6 6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Divider line hidden if active to look cleaner */}
                  <div className={`h-[1px] bg-gray-200 mx-6 transition-opacity ${isActive ? 'opacity-0' : 'opacity-100'}`} />
                </motion.div>
              );
            })}
          </div>

          {/* Image Panel - Ordered 1st on mobile, 2nd on desktop. Sticky on desktop. */}
          <motion.div
            className="order-1 lg:order-2 lg:col-span-7 relative w-full lg:sticky lg:top-10"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Corner accents - Teal */}
            <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 w-8 sm:w-12 h-8 sm:h-12 border-t-2 border-l-2 border-[#175E75] rounded-tl-lg z-20" />
            <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 w-8 sm:w-12 h-8 sm:h-12 border-b-2 border-r-2 border-[#175E75] rounded-br-lg z-20" />

            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-video lg:aspect-[4/3] shadow-2xl bg-gray-200">
              {/* Big ghost number */}
              <div
                className="absolute top-4 left-6 sm:top-5 sm:left-8 z-20 text-[60px] sm:text-[100px] font-extrabold leading-none select-none pointer-events-none"
                style={{
                  fontFamily: "'Syne', sans-serif",
                  color: "rgba(255,255,255,0.35)", 
                }}
              >
                {active.number}
              </div>

              {/* Tag badge */}
              <motion.div
                key={activeIndex + "-tag"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-20 bg-[#175E75] text-white text-[10px] sm:text-[11px] font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full backdrop-blur-sm uppercase tracking-widest shadow-lg"
              >
                {active.tag}
              </motion.div>

              {/* Title pill */}
              <motion.div
                key={activeIndex + "-title"}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 bg-white/95 backdrop-blur-sm text-[#175E75] text-[12px] sm:text-[13px] font-bold px-4 py-2 sm:px-5 sm:py-3 rounded-2xl border border-[#175E75]/10 max-w-[180px] sm:max-w-[220px] text-right shadow-2xl"
              >
                {active.title}
              </motion.div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent z-10" />

              {/* Crossfade image */}
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

            {/* Progress dots - Interactive & Accessible */}
            <div className="flex gap-2 sm:gap-3 mt-6 sm:mt-8 justify-center">
              {features.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className="outline-none focus-visible:ring-2 focus-visible:ring-[#175E75] rounded-full p-1"
                >
                  <motion.div
                    className="rounded-full h-2 sm:h-2.5"
                    animate={{
                      width: activeIndex === i ? 30 : 10,
                      backgroundColor: activeIndex === i ? "#175E75" : "#cbd5e1",
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