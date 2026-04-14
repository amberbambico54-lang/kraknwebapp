import { motion } from 'framer-motion'
import { FaLeaf, FaBolt, FaFlask } from 'react-icons/fa'

const diffs = [
  {
    Icon: FaLeaf,
    title: 'Plant-Based Caffeine',
    body: 'Sourced from green tea and guarana — not synthetic caffeine. Cleaner energy, smoother delivery, zero jitters.',
  },
  {
    Icon: FaBolt,
    title: 'No Crash Formula',
    body: 'Engineered with L-theanine to balance the caffeine curve. You come down easy — not hard.',
  },
  {
    Icon: FaFlask,
    title: 'Performance Formula',
    body: 'Electrolytes, B-vitamins, and adaptogens. Built for output, not just a quick buzz.',
  },
]

export default function Differentiation() {
  return (
    <section className="bg-[#060f1e]" style={{ padding: '96px 0' }}>
      <div className="max-w-[1200px] mx-auto px-[120px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-montserrat text-sky-400 text-xs tracking-[0.4em] uppercase mb-3">
            The Formula
          </p>
          <h2 className="font-bebas text-6xl md:text-7xl text-white tracking-wider">
            Why We're <span className="text-sky-400">Different</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '32px' }}>
          {diffs.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group p-8 rounded-[20px] bg-[#0d2240]/40 border border-sky-900/30 hover:border-sky-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-full bg-sky-500/10 flex items-center justify-center mb-5 group-hover:bg-sky-500/20 transition-colors duration-300">
                <d.Icon className="text-sky-400 text-2xl" />
              </div>
              <h3 className="font-bebas text-3xl text-white tracking-wider mb-3">{d.title}</h3>
              <p className="font-montserrat text-gray-400 text-sm leading-relaxed">{d.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
