import { motion } from 'framer-motion'

const products = [
  {
    name: 'Deep Sea Cola',
    tagline: 'Cold. Bold. Unleashed.',
    color: 'from-sky-900 to-[#0A1A2F]',
    glowColor: 'rgba(56,189,248,0.25)',
    badge: 'Best Seller',
  },
  {
    name: 'Abyss Blue',
    tagline: 'Dive deeper. Go harder.',
    color: 'from-blue-900 to-[#0A1A2F]',
    glowColor: 'rgba(96,165,250,0.25)',
    badge: 'New',
  },
  {
    name: 'Kraken Original',
    tagline: 'The one that started it all.',
    color: 'from-indigo-900 to-[#0A1A2F]',
    glowColor: 'rgba(129,140,248,0.25)',
    badge: 'Classic',
  },
]

export default function Products() {
  return (
    <section id="products" className="py-24 bg-[#060f1e] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1A2F] to-[#060f1e]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-montserrat text-sky-400 text-xs tracking-[0.4em] uppercase mb-3">
            The Lineup
          </p>
          <h2 className="font-bebas text-6xl md:text-7xl text-white tracking-wider">
            Choose Your <span className="text-sky-400">Depth</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className={`group relative rounded-2xl bg-gradient-to-b ${p.color} border border-sky-900/30 hover:border-sky-500/50 overflow-hidden transition-all duration-300 cursor-pointer`}
              style={{ boxShadow: `0 4px 40px rgba(0,0,0,0.4)` }}
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-sky-500/5" />

              {/* Badge */}
              <div className="absolute top-4 right-4">
                <span className="font-montserrat text-xs font-semibold tracking-widest uppercase px-3 py-1 bg-sky-500/20 border border-sky-500/30 text-sky-300 rounded-full">
                  {p.badge}
                </span>
              </div>

              {/* Can placeholder */}
              <div className="h-64 flex items-center justify-center relative">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
                  className="w-24 h-44 rounded-2xl bg-gradient-to-b from-sky-400/20 to-sky-900/40 border border-sky-400/30 flex items-center justify-center"
                  style={{ boxShadow: `0 0 30px ${p.glowColor}`, willChange: 'transform' }}
                >
                  <span className="font-bebas text-sky-300 text-lg tracking-widest rotate-0 text-center px-2">
                    KR<span className="text-white">Ā</span>KN
                  </span>
                </motion.div>
                {/* Glow under can */}
                <div className="absolute bottom-6 w-20 h-4 bg-sky-400/20 blur-xl rounded-full" />
              </div>

              {/* Info */}
              <div className="p-6 pt-0">
                <h3 className="font-bebas text-3xl text-white tracking-wider mb-1">{p.name}</h3>
                <p className="font-montserrat text-gray-400 text-sm mb-6">{p.tagline}</p>
                <button className="w-full font-montserrat text-sm font-semibold tracking-widest uppercase py-3 border border-sky-500/40 hover:border-sky-400 hover:bg-sky-500/10 text-sky-300 rounded-full transition-all duration-300">
                  View Product
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
