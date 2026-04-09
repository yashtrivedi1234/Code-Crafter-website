import React, { useRef, useEffect } from 'react';
import './ProcessFlow.css';


const steps = [
  { id: 1, title: "Discussion", desc: "In order to gather website requirements, we schedule a detailed interaction with the client." },
  { id: 2, title: "Sketch", desc: "A layout is designed as a prototype to meet the specified requirements." },
  { id: 3, title: "Approval", desc: "A final layout is designed based on the prototype for client approval." },
  { id: 4, title: "Web Design", desc: "We ensure that the design is in line with the requirements provided." },
  { id: 5, title: "Development", desc: "Converting the approved designs into clean, functional code." },
  { id: 6, title: "Testing", desc: "Rigorous testing to ensure everything works flawlessly across devices." },
  { id: 7, title: "Deployment", desc: "Launching your brand new website to the live server." },
  { id: 8, title: "Maintenance", desc: "Providing ongoing support and updates to keep your site secure." }
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

  
      if (top <= 0 && -top <= (height - windowHeight)) {
      
        const scrollProgress = -top / (height - windowHeight);
        
      
        const maxTranslate = track.scrollWidth - window.innerWidth;
        
        track.style.transform = `translateX(-${scrollProgress * maxTranslate}px)`;
      } else if (top > 0) {
        track.style.transform = `translateX(0px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
   
    

      <section className="scroll-section" ref={containerRef}>
        <div className="sticky-wrapper">
          <h2 className="process-title">Our website development process</h2>
          
          <div className="horizontal-track" ref={trackRef}>
            {steps.map((step) => (
              <div key={step.id} className="card">
                <div className="circle">{step.id}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    
      <div style={{ height: '50vh', backgroundColor: '#eee' }}></div>
    </>
  );
};

export default ProcessFlow;