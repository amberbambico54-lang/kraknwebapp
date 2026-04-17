import { motion } from "framer-motion";

const rows = [
  { feature: "Energy Level", classic: "Medium", green: "Clean", red: "High" },
  { feature: "Focus Type", classic: "Smooth", green: "Stable", red: "Intense" },
  {
    feature: "Caffeine Source",
    classic: "Natural",
    green: "Plant",
    red: "Boosted",
  },
  { feature: "Crash Risk", classic: "Low", green: "None", red: "Minimal" },
  {
    feature: "Best For",
    classic: "Daily Use",
    green: "Clean Diet",
    red: "Training",
  },
  { feature: "Sugar", classic: "Zero", green: "Zero", red: "Zero" },
];

const headers = [
  {
    label: "Krakn Classic",
    color: "text-sky-400",
    border: "border-sky-500/40",
    bg: "bg-sky-500/10",
  },
  {
    label: "Krakn Pure",
    color: "text-emerald-400",
    border: "border-emerald-500/40",
    bg: "bg-emerald-500/10",
  },
  {
    label: "Krakn MAX",
    color: "text-red-400",
    border: "border-red-500/40",
    bg: "bg-red-500/10",
  },
];

export default function ComparisonTable() {
  return (
    <section className="py-16 sm:py-24 bg-[#0A1A2F] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#060f1e] to-[#0A1A2F]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="font-montserrat text-sky-400 text-xs tracking-[0.4em] uppercase mb-3">
            Side by Side
          </p>
          <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl text-white tracking-wider">
            Compare the <span className="text-sky-400">Formula</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl border border-sky-900/30 overflow-hidden"
          style={{ boxShadow: "0 0 60px rgba(56,189,248,0.08)" }}
        >
          {/* Table header */}
          <div className="grid grid-cols-4 bg-[#0d2240]/80">
            <div className="p-4 sm:p-5 border-r border-sky-900/30">
              <span className="font-montserrat text-xs font-semibold tracking-widest uppercase text-gray-500">
                Feature
              </span>
            </div>
            {headers.map((h) => (
              <div
                key={h.label}
                className={`p-4 sm:p-5 border-r border-sky-900/30 last:border-r-0 ${h.bg}`}
              >
                <span
                  className={`font-bebas text-lg sm:text-xl tracking-wider ${h.color}`}
                >
                  {h.label}
                </span>
              </div>
            ))}
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-4 border-t border-sky-900/20 ${i % 2 === 0 ? "bg-[#0A1A2F]" : "bg-[#0d2240]/30"}`}
            >
              <div className="p-4 sm:p-5 border-r border-sky-900/20">
                <span className="font-montserrat text-xs sm:text-sm font-medium text-gray-400">
                  {row.feature}
                </span>
              </div>
              <div className="p-4 sm:p-5 border-r border-sky-900/20">
                <span className="font-montserrat text-xs sm:text-sm text-sky-300">
                  {row.classic}
                </span>
              </div>
              <div className="p-4 sm:p-5 border-r border-sky-900/20">
                <span className="font-montserrat text-xs sm:text-sm text-emerald-300">
                  {row.green}
                </span>
              </div>
              <div className="p-4 sm:p-5">
                <span className="font-montserrat text-xs sm:text-sm text-red-300">
                  {row.red}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
