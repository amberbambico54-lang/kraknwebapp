import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import kraknClassic from '../../assets/krakencola/KRAKN Classic.png'
import kraknPure    from '../../assets/krakencola/KRAKN PURE.png'
import kraknMax     from '../../assets/krakencola/KRAKN MAX.png'

const products = [
  {
    name: "KRAKN Classic",
    tagline: "Pure, balanced energy",
    badge: "Original",
    canColor: "from-sky-900/60 to-[#0A1A2F]",
    borderColor: "border-sky-500/30",
    glowColor: "rgba(56,189,248,0.2)",
    accentColor: "text-sky-400",
    badgeBg: "bg-sky-500/20 border-sky-500/30 text-sky-300",
    id: "classic",
    image: kraknClassic,
  },
  {
    name: "KRAKN PURE",
    tagline: "Clean energy, no compromise",
    badge: "Plant-Based",
    canColor: "from-emerald-900/60 to-[#0A1A2F]",
    borderColor: "border-emerald-500/30",
    glowColor: "rgba(52,211,153,0.2)",
    accentColor: "text-emerald-400",
    badgeBg: "bg-emerald-500/20 border-emerald-500/30 text-emerald-300",
    id: "green",
    image: kraknPure,
  },
  {
    name: "KRAKN MAX",
    tagline: "Maximum intensity unleashed",
    badge: "High Performance",
    canColor: "from-red-900/60 to-[#0A1A2F]",
    borderColor: "border-red-500/30",
    glowColor: "rgba(248,113,113,0.2)",
    accentColor: "text-red-400",
    badgeBg: "bg-red-500/20 border-red-500/30 text-red-300",
    id: "red",
    image: kraknMax,
  },
];

export default function ProductOverview() {
  return (
    <section
      id="overview"
      className="py-16 sm:py-24 bg-[#060f1e] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1A2F] to-[#060f1e]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="font-montserrat text-sky-400 text-xs tracking-[0.4em] uppercase mb-3">
            All Variants
          </p>
          <h2 className="font-bebas uppercase text-5xl sm:text-6xl md:text-7xl text-white tracking-wider">
            The Full <span className="text-sky-400">Collection</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`group relative rounded-2xl bg-gradient-to-b ${p.canColor} border ${p.borderColor} overflow-hidden transition-all duration-300 hover:-translate-y-2 cursor-pointer`}
              style={{ boxShadow: `0 4px 40px rgba(0,0,0,0.4)` }}
              onClick={() =>
                document
                  .getElementById(p.id)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at center, ${p.glowColor}, transparent 70%)`,
                }}
              />

              {/* Badge */}
              <div className="absolute top-4 right-4">
                <span
                  className={`font-montserrat text-xs font-semibold tracking-widest uppercase px-3 py-1 border rounded-full ${p.badgeBg}`}
                >
                  {p.badge}
                </span>
              </div>

              {/* Can image */}
              <div className="h-[220px] flex items-center justify-center relative">
                <motion.img
                  src={p.image}
                  alt={p.name}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
                  className="h-44 w-auto object-contain"
                  style={{ filter: `drop-shadow(0 0 20px ${p.glowColor})`, willChange: 'transform' }}
                />
                <div
                  className="absolute bottom-4 w-16 h-3 rounded-full blur-xl"
                  style={{ background: p.glowColor }}
                />
              </div>

              {/* Info */}
              <div className="p-6 pt-0">
                <h3 className="font-bebas text-3xl text-white tracking-wider mb-1">
                  {p.name}
                </h3>
                <p className={`font-montserrat text-sm mb-5 ${p.accentColor}`}>
                  {p.tagline}
                </p>
                <Link
                  to="/shop"
                  className={`block w-full font-montserrat text-sm font-semibold tracking-widest uppercase py-3 border ${p.borderColor} hover:bg-white/5 ${p.accentColor} rounded-full transition-all duration-300 text-center`}
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
