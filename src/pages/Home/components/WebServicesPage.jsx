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

/* ─── Shared styles injected once ─── */
const styles = `
  /* ── Layout ── */
  .ws-section {
    padding: clamp(2rem, 5vw, 2.5rem) 0;
  }
  .ws-inner {
    display: flex;
    gap: clamp(2rem, 6vw, 5rem);
    align-items: flex-start;
  }
  /* Stack vertically on mobile/tablet, side-by-side on desktop */
  @media (max-width: 899px) {
    .ws-inner { flex-direction: column; gap: clamp(1.5rem, 4vw, 2.5rem); }
  }

  /* ── Left panel ── */
  .ws-left { flex: 1; min-width: 0; }

  /* ── Eyebrow ── */
  .ws-eyebrow {
    color: ${brandTeal};
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    font-size: clamp(0.6rem, 1.1vw, 0.75rem);
    display: block;
    margin-bottom: clamp(0.5rem, 1vw, 0.75rem);
  }

  /* ── Heading ── */
  .ws-heading {
    font-size: clamp(1.75rem, 5vw, 3rem);
    font-weight: 900;
    color: #111;
    line-height: 1.1;
    margin-bottom: clamp(0.75rem, 1.5vw, 1.25rem);
    letter-spacing: -0.03em;
  }

  /* ── Body text ── */
  .ws-body {
    font-size: clamp(0.875rem, 1.6vw, 1rem);
    color: #666;
    line-height: 1.7;
    margin-bottom: clamp(1.5rem, 3vw, 2.5rem);
    max-width: 450px;
  }

  /* ── Service list ── */
  .ws-list { border-top: 1px solid #eee; }
  .ws-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: clamp(0.875rem, 2vw, 1.25rem) 0;
    border-bottom: 1px solid #f0f0f0;
    cursor: pointer;
    transition: opacity 0.3s ease, transform 0.3s ease;
    gap: 1rem;
  }
  .ws-item-name {
    font-size: clamp(0.875rem, 1.8vw, 1rem);
    font-weight: 500;
    color: #333;
    transition: color 0.3s ease, font-weight 0.1s;
    line-height: 1.35;
  }
  .ws-item-name.active {
    font-weight: 800;
    color: ${brandTeal};
  }
  .ws-item-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: clamp(26px, 3.5vw, 32px);
    height: clamp(26px, 3.5vw, 32px);
    border-radius: 50%;
    border: 1.5px solid #ddd;
    background: transparent;
    flex-shrink: 0;
    transition: all 0.3s ease;
  }
  .ws-item-icon.active {
    background: ${brandTeal};
    border-color: ${brandTeal};
    transform: rotate(-45deg);
  }

  /* ── Right panel — sticky preview (desktop only) ── */
  .ws-right {
    width: clamp(280px, 32vw, 400px);
    flex-shrink: 0;
    position: sticky;
    top: 100px;
  }
  @media (max-width: 899px) {
    .ws-right {
      width: 100%;
      position: static;
    }
  }

  /* ── Preview card ── */
  .ws-card {
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    height: clamp(240px, 40vw, 380px);
    width: 100%;
    box-shadow: 0 20px 40px rgba(23, 94, 117, 0.15);
  }
  @media (max-width: 899px) {
    /* On mobile, show the card between the heading and the list */
    .ws-card { height: clamp(180px, 45vw, 280px); border-radius: 16px; }
  }
  .ws-card img {
    width: 100%; height: 100%; object-fit: cover; display: block;
    transition: transform 0.5s ease;
  }
  .ws-card:hover img { transform: scale(1.05); }
  .ws-card-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(23,94,117,0.9) 0%, rgba(0,0,0,0.2) 60%, transparent 100%);
  }
  .ws-card-content {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    padding: clamp(1rem, 3vw, 2rem);
  }
  .ws-card-title {
    color: #fff;
    font-size: clamp(0.95rem, 2vw, 1.35rem);
    font-weight: 800;
    margin-bottom: clamp(0.4rem, 1vw, 0.75rem);
    line-height: 1.2;
  }
  .ws-card-desc {
    color: rgba(255,255,255,0.88);
    font-size: clamp(0.75rem, 1.3vw, 0.875rem);
    line-height: 1.6;
  }

  /* ── ScrollStack panels ── */
  .ws-panel-heading {
    font-size: clamp(1.5rem, 4vw, 2.625rem);
    font-weight: 900;
    letter-spacing: -0.03em;
    margin-bottom: clamp(0.75rem, 2vw, 1.5rem);
  }
  .ws-panel-body {
    font-size: clamp(0.875rem, 1.6vw, 1.125rem);
    line-height: 1.8;
    max-width: 800px;
  }
  .ws-process-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(clamp(120px, 20vw, 200px), 1fr));
    gap: clamp(0.75rem, 2vw, 1.25rem);
    margin-top: clamp(1.5rem, 3vw, 2.5rem);
  }
  .ws-process-card {
    padding: clamp(0.875rem, 2vw, 1.25rem);
    background: rgba(255,255,255,0.1);
    border-radius: clamp(10px, 2vw, 16px);
    border: 1px solid rgba(255,255,255,0.1);
  }
  .ws-process-step {
    font-size: clamp(0.6rem, 1vw, 0.75rem);
    opacity: 0.5;
    font-weight: 800;
    letter-spacing: 0.05em;
  }
  .ws-process-name {
    font-size: clamp(0.9rem, 1.8vw, 1.125rem);
    font-weight: 700;
    margin-top: clamp(4px, 0.8vw, 8px);
  }
`;

/* ─── Preview card ─── */
function PreviewCard({ service }) {
  return (
    <div className="ws-card">
      <img src={service.image} alt={service.name} />
      <div className="ws-card-overlay" />
      <div className="ws-card-content">
        <h3 className="ws-card-title">{service.name}</h3>
        <p className="ws-card-desc">{service.description}</p>
      </div>
    </div>
  );
}

/* ─── Service list (desktop: hover; mobile: click/tap) ─── */
function ServiceList({ active, onHover, onClick }) {
  return (
    <div className="ws-list">
      {services.map((svc) => {
        const isActive = active?.id === svc.id;
        return (
          <div
            key={svc.id}
            className="ws-item"
            style={{ opacity: active && !isActive ? 0.4 : 1, transform: isActive ? "translateX(8px)" : "none" }}
            onMouseEnter={() => onHover(svc)}
            onMouseLeave={() => onHover(null)}
            onClick={() => onClick(svc)}
          >
            <span className={`ws-item-name${isActive ? " active" : ""}`}>{svc.name}</span>
            <span className={`ws-item-icon${isActive ? " active" : ""}`}>
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
  );
}

function ServicesSection() {
  const [active, setActive] = useState(services[0]);

  return (
    <>
      <style>{styles}</style>
      <div className="ws-section">
        <div className="ws-inner">

          {/* Left: heading + (on mobile: card here) + list */}
          <div className="ws-left">
            <span className="ws-eyebrow">Expertise</span>
            <h2 className="ws-heading">
              Our website <br />
              <span style={{ color: brandTeal }}>development</span> services
            </h2>
            <p className="ws-body">
              We offer a wide range of website development solutions to enhance your user experience and drive business growth.
            </p>

            {/* Card visible only on mobile/tablet (hidden on desktop via CSS) */}
            <div className="ws-right" style={{ marginBottom: "clamp(1.25rem, 3vw, 2rem)" }}>
              {active && <PreviewCard service={active} />}
            </div>

            <ServiceList
              active={active}
              onHover={(s) => setActive(s || services[0])}
              onClick={(s) => setActive(s)}
            />
          </div>

          {/* Right: sticky preview — desktop only */}
          <div
            className="ws-right"
            style={{
              // Hide on mobile via media query handled in <style>
            }}
          >
            {active && <PreviewCard service={active} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default function WebServicesPage() {
  return (
    <ScrollStack useWindowScroll>
      <ScrollStackItem itemClassName="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServicesSection />
        </div>
      </ScrollStackItem>

      <ScrollStackItem itemClassName="bg-[#f0f4f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="ws-eyebrow" style={{ color: brandTeal }}>Partnership</span>
          <h2 className="ws-panel-heading" style={{ color: "#111" }}>
            Why choose <span style={{ color: brandTeal }}>us?</span>
          </h2>
          <p className="ws-panel-body" style={{ color: "#444" }}>
            With over a decade of experience and 300+ successful projects, our team delivers on time, every time.
            We combine technical excellence with deep domain knowledge to build products that truly make a difference.
          </p>
        </div>
      </ScrollStackItem>

      <ScrollStackItem itemClassName="bg-[#175E75] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="ws-eyebrow" style={{ color: "#fff", opacity: 0.6 }}>Workflow</span>
          <h2 className="ws-panel-heading" style={{ color: "#fff" }}>
            Our <span style={{ color: "#86d1e9" }}>process</span>
          </h2>
          <div className="ws-process-grid">
            {["Discovery", "Design", "Development", "Testing", "Launch", "Support"].map((step, i) => (
              <div key={i} className="ws-process-card">
                <span className="ws-process-step">STEP 0{i + 1}</span>
                <h4 className="ws-process-name">{step}</h4>
              </div>
            ))}
          </div>
        </div>
      </ScrollStackItem>
    </ScrollStack>
  );
}