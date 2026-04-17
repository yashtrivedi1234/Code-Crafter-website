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
      {/* Background gradient blob */}
      <div className="absolute -inset-1 brand-bg rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition duration-500 -z-10" />

      {/* Main card */}
      <div
        className={`relative bg-white rounded-2xl p-8 h-full backdrop-blur-sm border border-slate-100 shadow-lg transition-all duration-500 hover:border-[#175E75]/30 ${
          isHovered ? "brand-shadow -translate-y-2" : "shadow-md"
        }`}
      >
        {/* Step number badge */}
        <div className="absolute -top-4 -right-4 flex items-center justify-center">
          <motion.div
            animate={isHovered ? { scale: 1.1, rotate: 360 } : { scale: 1, rotate: 0 }}
            transition={{ duration: 0.5 }}
            className="w-12 h-12 rounded-full brand-bg flex items-center justify-center text-white font-bold text-lg shadow-lg"
          >
            {step.id}
          </motion.div>
        </div>

        {/* Icon */}
        <motion.div
          animate={isHovered ? { scale: 1.1, y: -5 } : { scale: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="w-16 h-16 rounded-2xl brand-bg flex items-center justify-center mb-6 shadow-md"
        >
          <IconComponent className="w-8 h-8 text-white" />
        </motion.div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3 brand-text group-hover:opacity-90 transition duration-300">
          {step.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
          {step.desc}
        </p>

        {/* Bottom accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="absolute bottom-0 left-0 right-0 h-1 brand-bg rounded-b-2xl origin-left"
        />
      </div>
    </motion.div>
  );
};

const ProcessFlow = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="relative py-8 px-6 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#175E75]/10 to-transparent rounded-full blur-3xl opacity-40 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-[#175E75]/10 to-transparent rounded-full blur-3xl opacity-40 translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          
          <h2 className="font-bold text-gray-900 leading-tight">
            Our Website Development <span className="brand-text">Process</span>
          </h2>
          <p className=" text-gray-600 max-w-2xl mx-auto">
            From initial concept to ongoing support, we follow a proven methodology to deliver exceptional digital solutions
          </p>
        </motion.div>

        {/* Timeline connector (desktop only) */}
        <div className="hidden md:block absolute top-96 left-1/2 transform -translate-x-1/2 w-1 h-32 bg-gradient-to-b from-[#175E75]/30 to-transparent opacity-40" />

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
