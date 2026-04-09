import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const caseStudiesData = [
  {
    id: 1,
    title: "Digital Payment Platform",
    stats: ["Improved website transaction reliability by 50%."],
    image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 2,
    title: "Procurement Technology Company",
    stats: ["Reduced bounce by 35%", "Improved loading speed by 60%"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 3,
    title: "Textile and Retail Brand",
    stats: ["Increased mobile conversions by 38% after redesign."],
    image: "https://images.unsplash.com/photo-1583391733958-611591350a41?auto=format&fit=crop&q=80&w=600",
  },
];

const CaseStudies = () => {
  return (
    <>
      <style>{`
        /* ── Section ── */
        .cs-section {
          padding: clamp(2.5rem, 7vw, 5rem) clamp(1rem, 6vw, 6rem);
        }
        .cs-header-gap {
          margin-bottom: clamp(2rem, 5vw, 4rem);
        }

        /* ── Typography ── */
        .cs-eyebrow {
          font-size: clamp(0.65rem, 1.2vw, 0.8rem);
          letter-spacing: 0.1em;
          margin-bottom: clamp(0.5rem, 1vw, 0.75rem);
        }
        .cs-heading {
          font-size: clamp(1.75rem, 5vw, 3.25rem);
          line-height: 1.15;
          letter-spacing: -0.02em;
        }

        /* ── Grid ── */
        .cs-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(1rem, 2.5vw, 2rem);
        }
        @media (min-width: 640px) {
          .cs-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .cs-grid { grid-template-columns: repeat(3, 1fr); }
        }

        /* ── Card ── */
        .cs-card {
          position: relative;
          overflow: hidden;
          background: #f3f4f6;
          /* Fluid height: tall on desktop, shorter on mobile */
          height: clamp(280px, 50vw, 480px);
          border: 1px solid #f3f4f6;
        }
        /* On 2-col, cap the height so cards don't get too tall */
        @media (min-width: 640px) and (max-width: 1023px) {
          .cs-card { height: clamp(300px, 38vw, 420px); }
        }
        /* On 3-col, restore generous height */
        @media (min-width: 1024px) {
          .cs-card { height: clamp(340px, 30vw, 480px); }
        }

        /* ── Image ── */
        .cs-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s ease;
        }
        .cs-card:hover .cs-img { transform: scale(1.08); }
        .cs-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.22);
          transition: background 0.3s ease;
        }
        .cs-card:hover .cs-overlay { background: rgba(0,0,0,0.1); }

        /* ── Content box ── */
        .cs-box {
          position: absolute;
          bottom: 0;
          right: 0;
          /* Fluid width: wider on small cards, narrower on large */
          width: clamp(78%, 85%, 90%);
          background: #fff;
          box-shadow: 0 -4px 32px rgba(0,0,0,0.12);
          padding: clamp(0.875rem, 2.5vw, 1.5rem) clamp(0.875rem, 2.5vw, 1.5rem) clamp(1rem, 2.5vw, 1.5rem);
        }

        .cs-card-title {
          font-size: clamp(0.875rem, 1.8vw, 1.125rem);
          font-weight: 700;
          line-height: 1.35;
          margin-bottom: clamp(0.5rem, 1vw, 0.875rem);
          padding-right: clamp(0.25rem, 1vw, 1rem);
          color: #0f172a;
          transition: color 0.25s ease;
        }
        .cs-card:hover .cs-card-title { color: #175E75; }

        .cs-stat {
          font-size: clamp(0.72rem, 1.3vw, 0.875rem);
          line-height: 1.5;
          color: #374151;
          display: flex;
          align-items: flex-start;
          gap: clamp(5px, 0.8vw, 8px);
        }
        .cs-stat-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #175E75;
          flex-shrink: 0;
          margin-top: 5px;
        }
        .cs-stats-wrap {
          min-height: clamp(40px, 6vw, 64px);
          margin-bottom: clamp(0.75rem, 1.5vw, 1.25rem);
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .cs-link {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: clamp(0.7rem, 1.2vw, 0.85rem);
          font-weight: 700;
          border-bottom: 2px solid #0f172a;
          padding-bottom: 1px;
          transition: color 0.25s, border-color 0.25s;
          color: #0f172a;
          text-decoration: none;
        }
        .cs-link:hover { color: #175E75; border-color: #175E75; }

        /* ── CTA ── */
        .cs-footer {
          margin-top: clamp(2.5rem, 5vw, 4rem);
          display: flex;
          justify-content: center;
        }
        .cs-btn {
          display: inline-flex;
          align-items: center;
          gap: clamp(6px, 1vw, 10px);
          border: 2px solid #0f172a;
          font-weight: 700;
          font-size: clamp(0.7rem, 1.2vw, 0.8rem);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: clamp(0.75rem, 1.5vw, 1rem) clamp(1.25rem, 3vw, 2rem);
          transition: background 0.3s, color 0.3s, border-color 0.3s;
          cursor: pointer;
          background: white;
        }
        .cs-btn:hover {
          background: #175E75;
          color: white;
          border-color: #175E75;
        }

        /* ── Very small (<360px) ── */
        @media (max-width: 359px) {
          .cs-box { width: 92%; padding: 0.75rem; }
          .cs-card { height: 260px; }
        }

        /* ── Landscape phones ── */
        @media (max-height: 500px) and (orientation: landscape) {
          .cs-section { padding-block: 1.5rem; }
          .cs-card { height: 220px; }
        }
      `}</style>

      <section className="cs-section bg-white font-sans text-gray-900">
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

          {/* Header */}
          <div className="cs-header-gap">
            <p className="cs-eyebrow font-semibold uppercase text-[#175E75]">Our Case Studies</p>
            <h2 className="cs-heading font-bold">Real-time Case Studies</h2>
          </div>

          {/* Grid */}
          <div className="cs-grid">
            {caseStudiesData.map((study) => (
              <div key={study.id} className="cs-card group">

                {/* Image */}
                <img src={study.image} alt={study.title} className="cs-img" />
                <div className="cs-overlay" />

                {/* Content box */}
                <div className="cs-box">
                  <h3 className="cs-card-title">{study.title}</h3>

                  <hr style={{ borderColor: '#e5e7eb', marginBottom: 'clamp(0.5rem, 1vw, 0.875rem)' }} />

                  <div className="cs-stats-wrap">
                    {study.stats.map((stat, i) => (
                      <p key={i} className="cs-stat">
                        <span className="cs-stat-dot" />
                        {stat}
                      </p>
                    ))}
                  </div>

                  <a href="#" className="cs-link">
                    Read more <ArrowUpRight size={14} />
                  </a>
                </div>

              </div>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="cs-footer">
            <button className="cs-btn">
              View all cases <ArrowUpRight size={16} />
            </button>
          </div>

        </div>
      </section>
    </>
  );
};

export default CaseStudies;