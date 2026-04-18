import { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Pen,
  CheckCircle,
  Palette,
  Code,
  TestTube,
  Rocket,
  Wrench,
} from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Discussion",
    desc: "In order to gather website requirements, we schedule a detailed interaction with the client.",
    icon: MessageCircle,
  },
  {
    id: 2,
    title: "Sketch",
    desc: "A layout is designed as a prototype to meet the specified requirements.",
    icon: Pen,
  },
  {
    id: 3,
    title: "Approval",
    desc: "A final layout is designed based on the prototype for client approval.",
    icon: CheckCircle,
  },
  {
    id: 4,
    title: "Web Design",
    desc: "We ensure that the design is in line with the requirements provided.",
    icon: Palette,
  },
  {
    id: 5,
    title: "Development",
    desc: "Converting the approved designs into clean, functional code.",
    icon: Code,
  },
  {
    id: 6,
    title: "Testing",
    desc: "Rigorous testing to ensure everything works flawlessly across devices.",
    icon: TestTube,
  },
  {
    id: 7,
    title: "Deployment",
    desc: "Launching your brand new website to the live server.",
    icon: Rocket,
  },
  {
    id: 8,
    title: "Maintenance",
    desc: "Providing ongoing support and updates to keep your site secure.",
    icon: Wrench,
  },
];

const ProcessCard = ({ step, index, hoveredCard, setHoveredCard }) => {
  const IconComponent = step.icon;
  const isHovered = hoveredCard === index;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      onMouseEnter={() => setHoveredCard(index)}
      onMouseLeave={() => setHoveredCard(null)}
      className="relative group"
    >
      {/* Main card */}
      <div
        className={`relative bg-white rounded-2xl p-8 h-full border-2 border-gray-200 transition-all duration-500
          hover:border-[#175E75] hover:shadow-2xl hover:-translate-y-4`}
      >
        {/* Step number badge */}
        <div className="absolute -top-5 -right-5 flex items-center justify-center">
          <motion.div
            animate={
              isHovered ? { scale: 1.15, rotate: 360 } : { scale: 1, rotate: 0 }
            }
            transition={{ duration: 0.5 }}
            className="w-14 h-14 rounded-full bg-gradient-to-br from-[#175E75] to-cyan-500 flex items-center justify-center text-white font-bold text-lg shadow-lg"
          >
            {step.id}
          </motion.div>
        </div>

        {/* Icon */}
        <motion.div
          animate={isHovered ? { scale: 1.1, y: -5 } : { scale: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#175E75] to-cyan-500 flex items-center justify-center mb-6 shadow-lg"
        >
          <IconComponent className="w-8 h-8 text-white" />
        </motion.div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-[#175E75] transition-colors duration-300">
          {step.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
          {step.desc}
        </p>

        {/* Bottom accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#175E75] to-cyan-400 rounded-b-2xl origin-left"
        />
      </div>
    </motion.div>
  );
};

const ProcessFlow = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="relative py-8 px-4 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-100/20 rounded-full blur-3xl animate-pulse delay-700"></div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#175E75]/10 text-[#175E75] text-sm font-bold uppercase tracking-wider">
            Process
          </span>
          <h2 className="font-bold text-black leading-tight text-[clamp(1.75rem,4vw,2.5rem)]">
            Our Website Development{" "}
            <span className="text-[#175E75]">Process</span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            From initial concept to ongoing support, we follow a proven
            methodology to deliver exceptional digital solutions
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <ProcessCard
              key={step.id}
              step={step}
              index={index}
              hoveredCard={hoveredCard}
              setHoveredCard={setHoveredCard}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
