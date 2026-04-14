import { motion } from 'framer-motion'
import { products, variantStyles } from './shopData'

const featured = products.filter((p) => [1, 2, 3].includes(p.id))

export default function FeaturedSection({ onAddToCart }) {
  return (
    <section className="py-16 sm:py-24 bg-[#0A1A2F] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#060f1e] to-[#0A1A2F]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 sm:mb-14"
        >
          <p className="font-montserrat text-sky-400 text-xs tracking-[0.4em] uppercase mb-3">Limited Drop</p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl text-white tracking-wider">
              Summer <span className="text-sky-400">Collection</span>
            </h2>
            <p className="font-montserrat text-gray-400 text-sm max-w-xs">
              The full KRĀKN lineup — all three variants, one mission.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {featured.map((p, i) => {
            const s = variantStyles[p.variant]
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`group relative rounded-2xl bg-gradient-to-b ${s.bg} to-[#0A1A2F] border ${s.border} overflow-hidden p-6 flex flex-col gap-4 hover:-translate-y-2 transition-all duration-300`}
                style={{ boxShadow: `0 4px 40px rgba(0,0,0,0.4)` }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-bebas text-2xl text-white tracking-wider">{p.name}</h3>
                  <span className="font-bebas text-xl text-white">₱{p.price}</span>
                </div>
                <p className={`font-montserrat text-xs tracking-widest uppercase ${s.accent}`}>{p.type}</p>
                <button
                  onClick={() => onAddToCart(p)}
                  className={`mt-auto font-montserrat text-xs font-semibold tracking-widest uppercase py-2.5 border ${s.border} ${s.accent} hover:bg-white/5 rounded-full transition-all duration-300`}
                >
                  Add to Cart
                </button>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
