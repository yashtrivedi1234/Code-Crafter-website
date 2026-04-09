import { useState } from "react";
import ScrollStack, { ScrollStackItem } from "../../../components/ui/ScrollStack";

const services = [
  {
    id: 1,
    name: "Custom web development",
    description:
      "We make customized websites for clients to achieve their business goals and give customers a unique experience. Our customized websites help make your dream of a successful website come true.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=700&q=80",
  },
  {
    id: 2,
    name: "Full-stack development",
    description:
      "End-to-end development solutions covering both frontend and backend. We build robust, scalable applications with modern frameworks and clean architecture.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=700&q=80",
  },
  {
    id: 3,
    name: "E-commerce development",
    description:
      "High-converting online stores built to maximize sales. From product catalogues to secure checkout flows, we craft e-commerce experiences that turn visitors into loyal customers.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80",
  },
  {
    id: 4,
    name: "Cloud-based web development",
    description:
      "Scalable cloud-native applications built on AWS, GCP, or Azure. We architect solutions that grow with your business, ensuring high availability and security.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=700&q=80",
  },
  {
    id: 5,
    name: "UI/UX development",
    description:
      "Pixel-perfect, accessible interfaces designed around your users. We combine research-driven UX strategy with meticulous UI craft to deliver products people love.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=700&q=80",
  },
  {
    id: 6,
    name: "CMS development",
    description:
      "Powerful content management systems that give your team full control. We build custom CMS solutions so you can manage content with ease.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=700&q=80",
  },
];

const brandTeal = "#175E75";

/* ─── Service preview card shown on hover ─── */
function PreviewCard({ service }) {
  return (
    <div
      key={service.id}
      style={{
        borderRadius: "24px",
        overflow: "hidden",
        position: "relative",
        height: "380px",
        width: "100%",
        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        boxShadow: `0 20px 40px rgba(23, 94, 117, 0.15)`,
      }}
    >
      <img
        src={service.image}
        alt={service.name}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(23, 94, 117, 0.9) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "32px",
        }}
      >
        <h3
          style={{
            color: "#fff",
            fontSize: "22px",
            fontWeight: 800,
            marginBottom: "12px",
            lineHeight: 1.2,
          }}
        >
          {service.name}
        </h3>
        <p
          style={{
            color: "rgba(255,255,255,0.9)",
            fontSize: "14px",
            lineHeight: 1.6,
          }}
        >
          {service.description}
        </p>
      </div>
    </div>
  );
}

/* ─── Left panel: service list ─── */
function ServiceList({ active, onHover }) {
  return (
    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={{ borderTop: `1px solid #eee` }}>
        {services.map((svc) => {
          const isActive = active?.id === svc.id;
          return (
            <div
              key={svc.id}
              onMouseEnter={() => onHover(svc)}
              onMouseLeave={() => onHover(null)}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "20px 0",
                borderBottom: "1px solid #f0f0f0",
                cursor: "pointer",
                transition: "all 0.3s ease",
                opacity: active && !isActive ? 0.4 : 1,
                transform: isActive ? "translateX(10px)" : "none",
              }}
            >
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: isActive ? 800 : 500,
                  color: isActive ? brandTeal : "#333",
                  transition: "all 0.3s ease",
                }}
              >
                {svc.name}
              </span>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  backgroundColor: isActive ? brandTeal : "transparent",
                  border: `1.5px solid ${isActive ? brandTeal : "#ddd"}`,
                  transition: "all 0.3s ease",
                  transform: isActive ? "rotate(-45deg)" : "none",
                }}
              >
                <svg width="12" height="12" viewBox="0 0 10 10" fill="none">
                  <path
                    d="M1.5 8.5L8.5 1.5M8.5 1.5H3M8.5 1.5V7"
                    stroke={isActive ? "#fff" : "#999"}
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ServicesSection() {
  const [active, setActive] = useState(services[0]);

  return (
    <div style={{ display: "flex", gap: "80px", alignItems: "flex-start", padding: "40px 0" }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <span style={{ color: brandTeal, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '12px', display: 'block', marginBottom: '12px' }}>
          Expertise
        </span>
        <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 900, color: "#111", lineHeight: 1.1, marginBottom: "20px", letterSpacing: "-1px" }}>
          Our website <br/><span style={{ color: brandTeal }}>development</span> services
        </h2>
        <p style={{ fontSize: "16px", color: "#666", lineHeight: 1.6, marginBottom: "40px", maxWidth: "450px" }}>
          We offer a wide range of website development solutions to enhance your user experience and drive business growth.
        </p>
        <ServiceList active={active} onHover={(s) => setActive(s || services[0])} />
      </div>

      <div style={{ width: "380px", flexShrink: 0, position: "sticky", top: "100px" }}>
        {active && <PreviewCard service={active} />}
      </div>
    </div>
  );
}

export default function WebServicesPage() {
  return (
    <ScrollStack useWindowScroll>
      <ScrollStackItem itemClassName="bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ServicesSection />
        </div>
      </ScrollStackItem>

      <ScrollStackItem itemClassName="bg-[#f0f4f5]">
        <div className="max-w-7xl mx-auto px-6">
          <span style={{ color: brandTeal, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '12px', display: 'block', marginBottom: '12px' }}>
            Partnership
          </span>
          <h2 style={{ fontSize: "42px", fontWeight: 900, color: "#111", marginBottom: "24px", letterSpacing: "-1px" }}>
            Why choose <span style={{ color: brandTeal }}>us?</span>
          </h2>
          <p style={{ color: "#444", fontSize: "18px", lineHeight: 1.8, maxWidth: "800px" }}>
            With over a decade of experience and 300+ successful projects, our
            team delivers on time, every time. We combine technical excellence
            with deep domain knowledge to build products that truly make a
            difference.
          </p>
        </div>
      </ScrollStackItem>

      <ScrollStackItem itemClassName="bg-[#175E75] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <span style={{ color: "#fff", opacity: 0.6, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '12px', display: 'block', marginBottom: '12px' }}>
            Workflow
          </span>
          <h2 style={{ fontSize: "42px", fontWeight: 900, color: "#fff", marginBottom: "24px", letterSpacing: "-1px" }}>
            Our <span style={{ color: "#86d1e9" }}>process</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '40px' }}>
             {['Discovery', 'Design', 'Development', 'Testing', 'Launch', 'Support'].map((step, i) => (
               <div key={i} style={{ padding: '20px', background: 'rgba(255,255,255,0.1)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                 <span style={{ fontSize: '12px', opacity: 0.5, fontWeight: 800 }}>STEP 0{i+1}</span>
                 <h4 style={{ fontSize: '18px', fontWeight: 700, marginTop: '8px' }}>{step}</h4>
               </div>
             ))}
          </div>
        </div>
      </ScrollStackItem>
    </ScrollStack>
  );
}