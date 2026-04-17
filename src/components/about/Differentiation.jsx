import { motion } from 'framer-motion'
import { FaLeaf, FaBolt, FaFlask } from 'react-icons/fa'

const diffs = [
  { Icon: FaLeaf, title: 'Cola Extract Base', body: 'Distinct formulation for smoother absorption and balanced energy delivery.' },
  { Icon: FaBolt, title: 'Stable Energy Curve', body: 'Consistent performance without spikes or crashes.' },
  { Icon: FaFlask, title: 'Performance-Driven Formula', body: 'Built with key ingredients to support strength, endurance, and focus.' },
]

export default function Differentiation() {
  return (
    <section className="bg-[#060f1e] py-16 sm:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="font-montserrat text-sky-400 text-xs tracking-[0.4em] uppercase mb-3">
            The Formula
          </p>
          <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl text-white tracking-wider">
            Why We're <span className="text-sky-400">Different</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {diffs.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group p-6 sm:p-8 rounded-[20px] bg-[#0d2240]/40 border border-sky-900/30 hover:border-sky-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-full bg-sky-500/10 flex items-center justify-center mb-5 group-hover:bg-sky-500/20 transition-colors duration-300">
                <d.Icon className="text-sky-400 text-2xl" />
              </div>
              <h3 className="font-bebas text-2xl sm:text-3xl text-white tracking-wider mb-3">{d.title}</h3>
              <p className="font-montserrat text-gray-400 text-sm leading-relaxed">{d.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
