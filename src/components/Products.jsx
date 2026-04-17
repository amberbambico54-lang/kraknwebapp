import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import kraknMax     from '../assets/krakencola/KRAKN MAX.png'
import kraknPure    from '../assets/krakencola/KRAKN PURE.png'
import kraknClassic from '../assets/krakencola/KRAKN Classic.png'

const products = [
  {
    name: 'KRAKN Classic',
    tagline: 'The one that started it all.',
    gradient: 'from-sky-900/80 to-[#0A1A2F]',
    border: 'border-sky-500/30',
    hoverBorder: 'hover:border-sky-500/60',
    glowColor: 'rgba(56,189,248,0.25)',
    badgeColor: 'bg-sky-500/20 border-sky-500/30 text-sky-300',
    btnColor: 'border-sky-500/40 text-sky-300 hover:border-sky-400 hover:bg-sky-500/10',
    badge: 'Classic',
    image: kraknClassic,
    anchor: 'classic',
  },
  {
    name: 'KRAKN PURE',
    tagline: 'Dive deeper. Go harder.',
    gradient: 'from-emerald-900/80 to-[#0A1A2F]',
    border: 'border-emerald-500/30',
    hoverBorder: 'hover:border-emerald-500/60',
    glowColor: 'rgba(52,211,153,0.25)',
    badgeColor: 'bg-emerald-500/20 border-emerald-500/30 text-emerald-300',
    btnColor: 'border-emerald-500/40 text-emerald-300 hover:border-emerald-400 hover:bg-emerald-500/10',
    badge: 'New',
    image: kraknPure,
    anchor: 'green',
  },
  {
    name: 'KRAKN MAX',
    tagline: 'Cold. Bold. Unleashed.',
    gradient: 'from-red-900/80 to-[#0A1A2F]',
    border: 'border-red-500/30',
    hoverBorder: 'hover:border-red-500/60',
    glowColor: 'rgba(248,113,113,0.25)',
    badgeColor: 'bg-red-500/20 border-red-500/30 text-red-300',
    btnColor: 'border-red-500/40 text-red-300 hover:border-red-400 hover:bg-red-500/10',
    badge: 'Best Seller',
    image: kraknMax,
    anchor: 'red',
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
          <h2 className="font-bebas uppercase text-5xl md:text-6xl text-white tracking-wider">
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
              className={`group relative rounded-2xl bg-gradient-to-b ${p.gradient} border ${p.border} ${p.hoverBorder} overflow-hidden transition-all duration-300 cursor-pointer`}
              style={{ boxShadow: '0 4px 40px rgba(0,0,0,0.4)' }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `radial-gradient(circle at center, ${p.glowColor}, transparent 70%)` }}
              />

              {/* Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className={`font-montserrat text-xs font-semibold tracking-widest uppercase px-3 py-1 border rounded-full ${p.badgeColor}`}>
                  {p.badge}
                </span>
              </div>

              {/* Can image */}
              <div className="h-64 flex items-center justify-center relative">
                <motion.img
                  src={p.image}
                  alt={p.name}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
                  className="h-52 w-auto object-contain"
                  style={{ filter: `drop-shadow(0 0 20px ${p.glowColor})`, willChange: 'transform' }}
                />
                <div className="absolute bottom-6 w-20 h-4 blur-xl rounded-full" style={{ background: p.glowColor }} />
              </div>

              {/* Info */}
              <div className="p-6 pt-0">
                <h3 className="font-bebas uppercase text-3xl text-white tracking-wider mb-1">{p.name}</h3>
                <p className="font-montserrat text-gray-400 text-sm mb-6">{p.tagline}</p>
                <Link
                  to={`/products#${p.anchor}`}
                  className={`block w-full font-montserrat text-sm font-semibold tracking-widest uppercase py-3 border rounded-full transition-all duration-300 text-center ${p.btnColor}`}
                >
                  View Product
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
