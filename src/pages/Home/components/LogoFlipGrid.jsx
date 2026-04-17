import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const brands = [
  { label: "Pine Labs", img: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=600" },
  { label: "Trinamix", img: "https://images.unsplash.com/photo-1487015307519-bf21a02798c3?auto=format&fit=crop&q=80&w=600" },
  { label: "EROS Innovation", img: "https://images.unsplash.com/photo-1489749798305-4fea3ba63d60?auto=format&fit=crop&q=80&w=600" },
  { label: "MFAR", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600" },
  { label: "Aster Pharmacy", img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600" },
  { label: "Mirabelle Korea", img: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&q=80&w=600" },
  { label: "Embassy", img: "https://images.unsplash.com/photo-1578683800619-b2fb4692f539?auto=format&fit=crop&q=80&w=600" },
  { label: "RmKV Silks", img: "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?auto=format&fit=crop&q=80&w=600" },
  { label: "British Council", img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=600" },
  { label: "Prestige Group", img: "https://images.unsplash.com/photo-1600607687920-4e52a09f1c44?auto=format&fit=crop&q=80&w=600" },
  { label: "Honda e:SWAP", img: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&q=80&w=600" },
  { label: "Sobha", img: "https://images.unsplash.com/photo-1616321338123-7f6f0ee58262?auto=format&fit=crop&q=80&w=600" },
  { label: "Zycus", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600" },
  { label: "Wendt", img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=600" },
  { label: "Essae", img: "https://images.unsplash.com/photo-1581092918692-8d7e7e798247?auto=format&fit=crop&q=80&w=600" },
  { label: "dminds", img: "https://images.unsplash.com/photo-1677442d019e72b4ef191829ed9aab51?auto=format&fit=crop&q=80&w=600" },
  { label: "Qwikcilver", img: "https://images.unsplash.com/photo-1555696541-d19a01e06b77?auto=format&fit=crop&q=80&w=600" },
  { label: "ABSYZ", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600" },
];

const alts = [
  { label: "Digital Payments", img: "https://images.unsplash.com/photo-1563013544-824ae1c83919?auto=format&fit=crop&q=80&w=600" },
  { label: "Infrastructure", img: "https://images.unsplash.com/photo-1581092160562-40038f4c03b7?auto=format&fit=crop&q=80&w=600" },
  { label: "Entertainment", img: "https://images.unsplash.com/photo-1485095046519-51ce5347760d?auto=format&fit=crop&q=80&w=600" },
  { label: "Real Estate", img: "https://images.unsplash.com/photo-1486324803835-c6aa13d81763?auto=format&fit=crop&q=80&w=600" },
  { label: "Healthcare", img: "https://images.unsplash.com/photo-1576091160597-112458c1082a?auto=format&fit=crop&q=80&w=600" },
  { label: "K-Beauty", img: "https://images.unsplash.com/photo-1556740749-b7eca00cf72e?auto=format&fit=crop&q=80&w=600" },
  { label: "Hospitality", img: "https://images.unsplash.com/photo-1631049307038-da0ec9d70304?auto=format&fit=crop&q=80&w=600" },
  { label: "Wedding", img: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&q=80&w=600" },
  { label: "Education", img: "https://images.unsplash.com/photo-1427504494785-cdcdb269f637?auto=format&fit=crop&q=80&w=600" },
  { label: "Premium Living", img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=600" },
  { label: "EV Technology", img: "https://images.unsplash.com/photo-1560958089-fcf2f04b8905?auto=format&fit=crop&q=80&w=600" },
  { label: "Architecture", img: "https://images.unsplash.com/photo-1503387762519-52582b652ba3?auto=format&fit=crop&q=80&w=600" },
  { label: "Logistics", img: "https://images.unsplash.com/photo-1586527505506-8f30c0df1dd6?auto=format&fit=crop&q=80&w=600" },
  { label: "Manufacturing", img: "https://images.unsplash.com/photo-1581092895033-b6ce9e7c0b67?auto=format&fit=crop&q=80&w=600" },
  { label: "Instruments", img: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=80&w=600" },
  { label: "AI Solutions", img: "https://images.unsplash.com/photo-1677442d019e72b4ef191829ed9aab51?auto=format&fit=crop&q=80&w=600" },
  { label: "Gift Cards", img: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&q=80&w=600" },
  { label: "Cloud Tech", img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600" },
];

function imgUrl(img) {
  return img;
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
            src={imgUrl(brand.img)}
            alt={brand.label}
            className="w-full h-full object-cover absolute inset-0 opacity-40 grayscale hover:grayscale-0 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-linear-to-t brand-overlay to-transparent" />
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
            src={imgUrl(alt.img)}
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