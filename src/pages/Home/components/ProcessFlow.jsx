import { useRef, useEffect } from "react";

const steps = [
  {
    id: 1,
    title: "Discussion",
    desc: "In order to gather website requirements, we schedule a detailed interaction with the client.",
  },
  {
    id: 2,
    title: "Sketch",
    desc: "A layout is designed as a prototype to meet the specified requirements.",
  },
  {
    id: 3,
    title: "Approval",
    desc: "A final layout is designed based on the prototype for client approval.",
  },
  {
    id: 4,
    title: "Web Design",
    desc: "We ensure that the design is in line with the requirements provided.",
  },
  {
    id: 5,
    title: "Development",
    desc: "Converting the approved designs into clean, functional code.",
  },
  {
    id: 6,
    title: "Testing",
    desc: "Rigorous testing to ensure everything works flawlessly across devices.",
  },
  {
    id: 7,
    title: "Deployment",
    desc: "Launching your brand new website to the live server.",
  },
  {
    id: 8,
    title: "Maintenance",
    desc: "Providing ongoing support and updates to keep your site secure.",
  },
];

const ProcessFlow = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !trackRef.current) return;
      const container = containerRef.current;
      const track = trackRef.current;
      const { top, height } = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (top <= 0 && -top <= height - windowHeight) {
        const scrollProgress = -top / (height - windowHeight);
        const maxTranslate = track.scrollWidth - window.innerWidth;
        track.style.transform = `translateX(-${scrollProgress * maxTranslate}px)`;
      } else if (top > 0) {
        track.style.transform = `translateX(0px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Section - 300vh lamba */}
      <section
        ref={containerRef}
        className="relative bg-[#fdfafb]"
        
      >
        {/* Sticky Wrapper */}
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-start pt-8 ">
          <h2 className="text-center text-[clamp(1.25rem,4vw,2rem)] font-bold mb-12 text-gray-900">
            Our website development process
          </h2>

          {/* Horizontal Track */}
          <div
            ref={trackRef}
            className="flex gap-7 px-[5vw] w-max"
            style={{ willChange: "transform" }}
          >
            {steps.map((step) => (
              <div
                key={step.id}
                className="w-75 h-95 bg-white rounded-2xl flex flex-col items-center px-5 py-10 text-center shrink-0 transition-transform duration-300 ease-in-out hover:-translate-y-2.5 brand-shadow"
              >
                <div className="w-20 h-20 brand-bg rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6">
                  {step.id}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProcessFlow;
