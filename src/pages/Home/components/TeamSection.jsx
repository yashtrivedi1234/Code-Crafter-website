import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const TeamSection = () => {
  // Brand Color Constants
  const brandTeal = "#175E75";
  const brandTealBg = "bg-[#175E75]";
  const brandTealText = "text-[#175E75]";

  // Framer Motion Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative min-h-screen bg-white text-gray-900 flex items-center justify-center p-6 md:p-12 overflow-hidden selection:bg-cyan-100 selection:text-[#175E75]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10"
      >
        {/* Left Side: Unsplash Image Container */}
        <motion.div variants={itemVariants} className="relative group">
          {/* Subtle background glow - Updated to Teal tint */}
          <div className="absolute -inset-4 bg-cyan-50/50 rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out -z-10" />

          <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl shadow-gray-200/80 bg-gray-50 border border-gray-100">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
              alt="Our creative team at work"
              className="w-full h-[500px] lg:h-[650px] object-cover origin-center"
            />
            {/* Subtle overlay for brand consistency */}
            <div className="absolute inset-0 bg-[#175E75]/5 group-hover:bg-transparent transition-colors duration-500" />
          </div>
        </motion.div>

        {/* Right Side: Typography & CTA */}
        <div className="space-y-10 pl-0 lg:pl-10">
          <motion.div variants={itemVariants} className="space-y-6">
            <span
              className={`${brandTealText} text-sm font-bold uppercase tracking-[0.3em] block`}
            >
              Our DNA
            </span>
            <h2 className="text-[clamp(1.25rem,4vw,2rem)]  font-black tracking-tighter text-gray-950 leading-[0.95]">
              Meet our <span className={brandTealText}>creative</span> team
            </h2>
            <div className={`h-1.5 w-24 ${brandTealBg} rounded-full`} />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg lg:text-xl text-gray-600 max-w-lg leading-relaxed font-normal"
          >
            As a leading{" "}
            <span className={`${brandTealText} font-bold`}>web design</span> and
            development agency, we bring together innovation and technical
            excellence to craft custom solutions that drive business success
            worldwide.
          </motion.p>

          {/* Minimalist Magnetic CTA Button */}
          <motion.div variants={itemVariants} className="pt-4">
            <a href="#team" className="inline-block group">
              <div className="relative w-44 h-44 flex items-center justify-center rounded-full border-2 border-gray-200 bg-white hover:border-[#175E75] transition-colors duration-500 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-[#175E75]/10">
                {/* Fill effect on hover - Updated to Teal */}
                <div
                  className={`absolute inset-0 ${brandTealBg} translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out rounded-full`}
                />

                <div className="relative z-10 flex flex-col items-center gap-2 group-hover:text-white transition-colors duration-300">
                  <span className="font-bold text-lg tracking-wide">
                    Join us
                  </span>
                  <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Request Callback Tab - Synced with Teal */}
      <motion.div
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ delay: 1, duration: 0.6, type: "spring" }}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex"
      >
        <button
          className={`${brandTealBg} hover:opacity-90 text-white py-8 px-4 rounded-l-2xl font-bold tracking-widest shadow-2xl hover:-translate-x-2 transition-all duration-300 group flex items-center justify-center border-y border-l border-white/20`}
        >
          <span className="[writing-mode:vertical-rl] rotate-180 flex items-center gap-4">
            Request a Callback
            <span className="inline-block w-2.5 h-2.5 bg-cyan-300 rounded-full animate-ping" />
          </span>
        </button>
      </motion.div>
    </section>
  );
};

export default TeamSection;
