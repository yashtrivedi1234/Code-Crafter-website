import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BRAND = "var(--brand)";
const BRAND_BORDER = "var(--brand-border)";

const features = [
  {
    id: 0,
    number: "01",
    title: "Fully Customized Websites",
    short: "Built from scratch, just for you.",
    description:
      "Running a business is the result of your dreams coming true, and it's our job to express that on the internet. We develop your website from scratch with unique and efficient technologies.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=90",
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
        <a
          href="#"
          className="font-medium brand-text underline underline-offset-2 decoration-(--brand) hover:opacity-80 transition-colors"
        >
          digital marketing
        </a>{" "}
        and{" "}
        <a
          href="#"
          className="font-medium brand-text underline underline-offset-2 decoration-(--brand) hover:opacity-80 transition-colors"
        >
          SEO services
        </a>
        .
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=90",
    tag: "Full Stack",
  },
  {
    id: 2,
    number: "03",
    title: "Highly Skilled In-Line Team",
    short: "Creativity meets cutting-edge tech.",
    description:
      "Our team members are trained in the latest technologies. They implement their creativity in website development to ensure that your website stands out from the rest.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=90",
    tag: "Team",
  },
  {
    id: 3,
    number: "04",
    title: "On-Time Delivery",
    short: "Deadlines are a promise, not a goal.",
    description:
      "We promise to deliver all projects on time and following client instructions, ensuring good quality work without any delays.",
    image:
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&q=90",
    tag: "Workflow",
  },
];

export default function DigitalSolutions() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = features[activeIndex];

  return (
    <section
      className="min-h-screen bg-slate-50 text-gray-900 overflow-hidden relative py-8 px-4"
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] z-0"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px,transparent 1px),linear-gradient(90deg,#000 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow blob */}
      <motion.div
        className="pointer-events-none absolute top-0 right-0 rounded-full z-0 w-[260px] h-[260px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px]"
        style={{
          background: "radial-gradient(circle, rgba(var(--brand-rgb), 0.15) 0%, transparent 70%)",
          transform: "translate(30%,-30%)",
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-10 lg:mb-20 text-center"
        >
          {/* Eyebrow */}
          <p
            className="flex items-center justify-center gap-3 mb-3 text-[0.7rem] font-bold uppercase tracking-[0.2em] brand-text"
          >
            <span className="block h-0.5 w-5 lg:w-8 brand-bg" />
            What We Offer
            <span className="block h-0.5 w-5 lg:w-8 brand-bg" />
          </p>

          {/* Heading */}
          <h2 className="font-extrabold max-w-2xl mx-auto leading-[1.1] text-[clamp(1.25rem,4vw,2rem)]">
            End-to-End{" "}
            <span className="relative inline-block whitespace-nowrap">
              <span className="relative z-10 brand-text">
                Digital
              </span>
              <motion.span
                className="absolute inset-0 rounded-md -mx-1 brand-overlay"
                animate={{ scaleX: [0.95, 1.05, 0.95] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </span>{" "}
            Solutions for Growing Businesses
          </h2>
        </motion.div>

        {/* ── Main layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-6 lg:gap-14 items-start">

          {/* ── Feature list ── */}
          <div className="order-2 lg:order-1 flex flex-col gap-2">
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
                  className="relative group cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-(--brand) rounded-xl"
                >
                  {/* Active background */}
                  <motion.div
                    className="absolute inset-0 rounded-xl brand-border"
                    style={{
                      background: "rgba(var(--brand-rgb), 0.03)",
                      borderWidth: "1px",
                      borderStyle: "solid",
                    }}
                    initial={false}
                    animate={{ opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Item inner */}
                  <div className="relative z-10 flex items-start gap-3 px-4 py-3 lg:px-6 lg:py-5">
                    {/* Number */}
                    <motion.span
                      className="text-[0.65rem] font-bold tracking-[0.15em] mt-0.5 shrink-0"
                      animate={{ color: isActive ? BRAND : "#9ca3af" }}
                      transition={{ duration: 0.3 }}
                    >
                      {feature.number}
                    </motion.span>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 mb-0.5">
                        <motion.h3
                          className="text-[0.9rem] lg:text-[1.0625rem] font-bold leading-snug"
                          animate={{ color: isActive ? "#111827" : "#6b7280" }}
                          transition={{ duration: 0.3 }}
                        >
                          {feature.title}
                        </motion.h3>

                        {/* Tag pill */}
                        <motion.span
                          className="text-[0.58rem] lg:text-[0.625rem] px-2 py-0.5 rounded-full border font-bold tracking-wide shrink-0 self-start"
                          animate={{
                            borderColor: isActive ? BRAND_BORDER : "rgba(0,0,0,0.1)",
                            color: isActive ? BRAND : "#6b7280",
                            backgroundColor: isActive
                              ? "rgba(var(--brand-rgb), 0.05)"
                              : "transparent",
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {feature.tag}
                        </motion.span>
                      </div>

                      {/* Short tagline */}
                      <motion.p
                        className="text-[0.7rem] lg:text-[0.75rem] font-semibold"
                        animate={{ color: isActive ? "#4b5563" : "#9ca3af" }}
                        transition={{ duration: 0.3 }}
                      >
                        {feature.short}
                      </motion.p>

                      {/* Expandable description */}
                      <motion.div
                        initial={false}
                        animate={{
                          height: isActive ? "auto" : 0,
                          opacity: isActive ? 1 : 0,
                        }}
                        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                        style={{ overflow: "hidden" }}
                      >
                        <p className="text-[0.75rem] lg:text-sm leading-relaxed mt-2 pr-1 text-gray-600">
                          {feature.description}
                        </p>
                      </motion.div>
                    </div>

                    {/* Arrow icon */}
                    <motion.div
                      className="shrink-0 mt-1 hidden sm:block"
                      animate={{
                        x: isActive ? 0 : -6,
                        opacity: isActive ? 1 : 0,
                        color: BRAND,
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

                  {/* Divider */}
                  <div
                    className={`h-px bg-gray-200 mx-5 transition-opacity ${
                      isActive ? "opacity-0" : "opacity-100"
                    }`}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* ── Image panel ── */}
          <motion.div
            className="order-1 lg:order-2 lg:sticky lg:top-10"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              {/* Corner accents — border-radius trick needs inline style for partial borders */}
              <div
                className="absolute -top-2 -left-2 w-7 h-7 lg:w-12 lg:h-12 z-20"
                style={{
                  borderTop: `2px solid ${BRAND}`,
                  borderLeft: `2px solid ${BRAND}`,
                  borderRadius: "4px 0 0 0",
                }}
              />
              <div
                className="absolute -bottom-2 -right-2 w-7 h-7 lg:w-12 lg:h-12 z-20"
                style={{
                  borderBottom: `2px solid ${BRAND}`,
                  borderRight: `2px solid ${BRAND}`,
                  borderRadius: "0 0 4px 0",
                }}
              />

              {/* Image wrapper — aspect-ratio with media query needs a style tag or inline */}
              <div
                className="relative overflow-hidden rounded-2xl shadow-2xl bg-slate-200"
                style={{
                  aspectRatio: "16/9",
                  // Override to 4/3 on lg via media query below
                }}
              >
                <style>{`
                  @media (min-width: 1024px) { .ds-img-wrap { aspect-ratio: 4/3 !important; } }
                  @media (max-height: 500px) and (orientation: landscape) { .ds-img-wrap { aspect-ratio: 21/9 !important; } }
                `}</style>
                {/* Apply class so the media query targets it */}
                <div className="ds-img-wrap absolute inset-0 w-full h-full" />

                {/* Ghost number */}
                <div
                  className="absolute top-4 left-5 lg:top-5 lg:left-8 z-20 font-extrabold text-5xl lg:text-[6.25rem] leading-none pointer-events-none select-none"
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    color: "rgba(255,255,255,0.35)",
                  }}
                >
                  {active.number}
                </div>

                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 z-10"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.1) 50%, transparent)",
                  }}
                />

                {/* Tag badge */}
                <motion.div
                  key={activeIndex + "-tag"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute bottom-4 left-4 z-20 text-white text-[0.55rem] lg:text-[0.6875rem] font-bold px-3 py-1.5 lg:px-4 lg:py-2 rounded-full uppercase tracking-[0.1em] brand-bg"
                >
                  {active.tag}
                </motion.div>

                {/* Title badge */}
                <motion.div
                  key={activeIndex + "-title"}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="absolute bottom-4 right-4 z-20 text-[0.65rem] lg:text-[0.8125rem] font-bold px-3 py-2 lg:px-5 lg:py-3 rounded-xl lg:rounded-2xl border text-right leading-snug max-w-[130px] lg:max-w-[220px]"
                  style={{
                    background: "rgba(255,255,255,0.95)",
                    backdropFilter: "blur(8px)",
                    color: BRAND,
                    borderColor: BRAND_BORDER,
                  }}
                >
                  {active.title}
                </motion.div>

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
            </div>

            {/* Progress dots */}
            <div className="flex items-center justify-center gap-2 mt-6 lg:mt-8 px-1">
              {features.map((_, i) => (
                <button
                  key={i}
                  className="outline-none bg-transparent border-0 cursor-pointer p-1 rounded-full focus-visible:outline-2 focus-visible:outline-offset-2"
                  style={{ outlineColor: BRAND }}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                >
                  <motion.div
                    className="rounded-full"
                    style={{ height: "clamp(6px,1vw,10px)" }}
                    animate={{
                      width:
                        activeIndex === i
                          ? "clamp(20px,4vw,30px)"
                          : "clamp(6px,1vw,10px)",
                      backgroundColor: activeIndex === i ? BRAND : "#cbd5e1",
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