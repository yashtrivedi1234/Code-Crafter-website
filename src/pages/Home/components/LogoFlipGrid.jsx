import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const brands = [
  { label: "Pine Labs", kw: "fintech technology office", seed: 101 },
  { label: "Trinamix", kw: "modern architecture building", seed: 118 },
  { label: "EROS Innovation", kw: "cinema film production", seed: 135 },
  { label: "MFAR", kw: "real estate luxury property", seed: 152 },
  { label: "Aster Pharmacy", kw: "pharmacy medicine healthcare", seed: 169 },
  { label: "Mirabelle Korea", kw: "beauty skincare cosmetics", seed: 186 },
  { label: "Embassy", kw: "hotel lobby hospitality", seed: 203 },
  { label: "RmKV Silks", kw: "silk fabric textile wedding", seed: 220 },
  { label: "British Council", kw: "library education english", seed: 237 },
  { label: "Prestige Group", kw: "luxury apartment skyline", seed: 254 },
  { label: "Honda e:SWAP", kw: "electric vehicle battery", seed: 271 },
  { label: "Sobha", kw: "modern villa interior design", seed: 288 },
  { label: "Zycus", kw: "supply chain procurement", seed: 305 },
  { label: "Wendt", kw: "industrial machinery factory", seed: 322 },
  { label: "Essae", kw: "precision weighing measurement", seed: 339 },
  { label: "dminds", kw: "artificial intelligence data", seed: 356 },
  { label: "Qwikcilver", kw: "gift card retail shopping", seed: 373 },
  { label: "ABSYZ", kw: "cloud computing server tech", seed: 390 },
];

const alts = [
  { label: "Digital Payments", kw: "digital payment cashless", seed: 110 },
  { label: "Infrastructure", kw: "construction site steel", seed: 127 },
  { label: "Entertainment", kw: "entertainment media studio", seed: 144 },
  { label: "Real Estate", kw: "property development city", seed: 161 },
  { label: "Healthcare", kw: "hospital doctor patient", seed: 178 },
  { label: "K-Beauty", kw: "korean skincare beauty", seed: 195 },
  { label: "Hospitality", kw: "resort luxury travel", seed: 212 },
  { label: "Wedding", kw: "indian wedding ceremony", seed: 229 },
  { label: "Education", kw: "classroom learning students", seed: 246 },
  { label: "Premium Living", kw: "luxury living room home", seed: 263 },
  { label: "EV Technology", kw: "electric motorcycle future", seed: 280 },
  { label: "Architecture", kw: "architecture design blueprint", seed: 297 },
  { label: "Logistics", kw: "warehouse logistics supply", seed: 314 },
  { label: "Manufacturing", kw: "precision manufacturing tool", seed: 331 },
  { label: "Instruments", kw: "laboratory instruments scale", seed: 348 },
  { label: "AI Solutions", kw: "machine learning neural", seed: 365 },
  { label: "Gift Cards", kw: "shopping voucher retail", seed: 382 },
  { label: "Cloud Tech", kw: "cloud software developer", seed: 399 },
];

function imgUrl(kw, seed) {
  return `https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=60&w=400&q=80&sig=${seed}`;
}

function Card({ brand, alt, isFlipped }) {
  return (
    <div className="relative w-full h-full" style={{ perspective: "1000px" }}>
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* Front - Brand Themed */}
        <div
          className="absolute inset-0 overflow-hidden bg-white flex items-center justify-center border-r border-b border-gray-100"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={imgUrl(brand.kw, brand.seed)}
            alt={brand.label}
            className="w-full h-full object-cover absolute inset-0 opacity-40 grayscale hover:grayscale-0 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t brand-overlay to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm px-2 py-2 z-10 border-t border-gray-100">
            <span className="brand-text kalam-bold text-[10px] truncate block tracking-wider text-center uppercase">
              {brand.label}
            </span>
          </div>
        </div>

        {/* Back - Teal Focus */}
        <div
          className="absolute inset-0 overflow-hidden brand-bg flex items-center justify-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <img
            src={imgUrl(alt.kw, alt.seed)}
            alt={alt.label}
            className="w-full h-full object-cover absolute inset-0 opacity-30"
          />
          <div className="absolute inset-0 brand-bg opacity-40" />
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <span className="text-white kalam-bold text-[12px] text-center leading-tight tracking-wide drop-shadow-md">
              {alt.label}
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function LogoFlipGrid() {
  const [flipped, setFlipped] = useState(Array(18).fill(false));
  const queueRef = useRef(
    [...Array(18).keys()].sort(() => Math.random() - 0.5),
  );
  const qiRef = useRef(0);

  useEffect(() => {
    let timeouts = [];

    function scheduleFlip(offset = 0) {
      const delay = offset + 2500 + Math.random() * 2000;
      const t = setTimeout(() => {
        if (qiRef.current >= queueRef.current.length) {
          qiRef.current = 0;
          queueRef.current = [...Array(18).keys()].sort(
            () => Math.random() - 0.5,
          );
        }
        const idx = queueRef.current[qiRef.current++];
        setFlipped((prev) => {
          const next = [...prev];
          next[idx] = !next[idx];
          return next;
        });
        scheduleFlip();
      }, delay);
      timeouts.push(t);
    }

    scheduleFlip(500);
    scheduleFlip(1500);

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <section className="py-8 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <span className="brand-text kalam-bold text-sm uppercase tracking-[0.3em] block">
          Trusted Partners
        </span>

        {/* h2 — font-family & font-size from global h2 */}
        <h2 className="text-gray-900 leading-tight mb-4 tracking-tighter">
          Serving 500+ Clients from{" "}
          <span className="brand-text">Startups to Enterprises</span>
        </h2>

        {/* p — font-family & font-size from global p */}
        <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Providing end-to-end website design and development solutions for
          brands that demand excellence.
        </p>
      </motion.div>

      {/* Grid */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid grid-cols-3 md:grid-cols-6 gap-0 border border-gray-100 rounded-3xl overflow-hidden shadow-2xl brand-shadow"
      >
        {brands.map((brand, i) => (
          <div
            key={i}
            className="bg-white aspect-square md:aspect-[4/3] relative overflow-hidden group"
          >
            <Card brand={brand} alt={alts[i]} isFlipped={flipped[i]} />
          </div>
        ))}
      </motion.div>

      {/* Footer Dots */}
      <div className="flex items-center justify-center gap-3 mt-10">
        <div className="flex gap-1">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full brand-bg opacity-20 animate-pulse"
            />
          ))}
        </div>
        <p className="text-center kalam-bold brand-text text-[10px] uppercase tracking-widest opacity-60">
          Global Portfolio Spotlight
        </p>
        <div className="flex gap-1">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full brand-bg opacity-20 animate-pulse"
            />
          ))}
        </div>
      </div>
    </section>
  );
}