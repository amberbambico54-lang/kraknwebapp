import { motion } from 'framer-motion'
import { FaBolt, FaBrain, FaLeaf, FaSnowflake } from 'react-icons/fa'

const benefits = [
  { Icon: FaBolt, title: 'Explosive Energy', desc: 'Instant surge that powers you through any challenge.' },
  { Icon: FaBrain, title: 'Laser Focus', desc: 'Sharpen your mind and lock in on what matters.' },
  { Icon: FaLeaf, title: 'Plant-Based Caffeine', desc: 'Clean energy sourced from nature, not a lab.' },
  { Icon: FaSnowflake, title: 'Zero Crash Formula', desc: 'Sustained performance with no hard comedown.' },
]

export default function Benefits() {
  return (
    <section id="about" className="py-24 bg-[#0A1A2F] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060f1e] via-[#0A1A2F] to-[#0A1A2F]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-montserrat text-sky-400 text-xs tracking-[0.4em] uppercase mb-3">
            Why KRĀKN
          </p>
          <h2 className="font-bebas text-6xl md:text-7xl text-white tracking-wider">
            Built Different
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group p-8 rounded-2xl bg-[#0d2240]/60 border border-sky-900/30 hover:border-sky-500/40 transition-all duration-300 text-center backdrop-blur-sm hover:-translate-y-1"
              style={{ boxShadow: '0 4px 30px rgba(0,0,0,0.3)' }}
            >
              <div className="flex justify-center mb-5">
                <div className="w-16 h-16 rounded-full bg-sky-500/10 flex items-center justify-center group-hover:bg-sky-500/20 transition-colors duration-300">
                  <b.Icon className="text-sky-400 text-3xl" />
                </div>
              </div>
              <h3 className="font-bebas text-2xl text-white tracking-wider mb-2">{b.title}</h3>
              <p className="font-montserrat text-gray-400 text-sm leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
