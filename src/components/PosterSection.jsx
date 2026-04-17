import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import posterClassic from '../assets/krakenPoster/KRAKN classic.png'
import posterPure    from '../assets/krakenPoster/KRAKN PURE.png'
import posterMax     from '../assets/krakenPoster/KRAKN MAX.png'

const posters = [
  { title: 'KRAKN Classic', label: 'The Original',      image: posterClassic, glow: 'rgba(56,189,248,0.4)',  anchor: 'classic' },
  { title: 'KRAKN PURE',    label: 'Clean Energy',      image: posterPure,    glow: 'rgba(52,211,153,0.4)',  anchor: 'green'   },
  { title: 'KRAKN MAX',     label: 'Maximum Intensity', image: posterMax,     glow: 'rgba(248,113,113,0.4)', anchor: 'red'     },
]

export default function PosterSection() {
  return (
    <section id="posters" className="py-24 bg-[#0A1A2F] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#060f1e] via-[#0A1A2F] to-[#060f1e] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-montserrat text-sky-400 text-xs tracking-[0.4em] uppercase mb-3">
            The Line Up
          </p>
          <h2 className="font-bebas uppercase text-5xl sm:text-6xl md:text-7xl text-white tracking-wider">
            Our<span className="text-sky-400">Products</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {posters.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <Link
                to={`/products#${p.anchor}`}
                className="group relative rounded-2xl overflow-hidden cursor-pointer block"
                style={{ aspectRatio: '2/3', boxShadow: '0 8px 40px rgba(0,0,0,0.5)' }}
              >
              {/* Poster image */}
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Glow border on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: `inset 0 0 0 1px ${p.glow}, 0 0 60px ${p.glow}` }}
              />

              {/* Overlay — slides up on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#060f1e]/90 via-[#060f1e]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <p className="font-montserrat text-xs tracking-[0.3em] uppercase text-sky-400 mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {p.label}
                </p>
                <h3 className="font-bebas uppercase text-3xl text-white tracking-wider translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {p.title}
                </h3>
                <span className="font-montserrat text-xs font-semibold tracking-widest uppercase text-sky-400/70 mt-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  View →
                </span>
              </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
