import { motion } from 'framer-motion'

const features = [
  { label: 'High Caffeine', value: '200mg', desc: 'Controlled & precise' },
  { label: 'Sugar Crash', value: 'Zero', desc: 'Clean all the way down' },
  { label: 'Electrolytes', value: 'Added', desc: 'Hydration support built in' },
  { label: 'Creatine Powder', value: 'Premium', desc: 'Supports strength, endurance and muscle performance.' },
]

export default function Features() {
  return (
    <section className="py-24 bg-[#060f1e] relative overflow-hidden">
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
            The Difference
          </p>
          <h2 className="font-bebas uppercase text-4xl sm:text-5xl md:text-6xl text-white tracking-wider">
            What Makes KRAKN <span className="text-sky-400">Different?</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-[#0d2240]/40 border border-sky-900/30 hover:border-sky-500/30 transition-all duration-300 text-center group hover:-translate-y-1"
            >
              <div
                className="font-bebas uppercase text-4xl text-sky-400 mb-2 group-hover:text-sky-300 transition-colors"
                style={{ textShadow: '0 0 20px rgba(56,189,248,0.4)' }}
              >
                {f.value}
              </div>
              <h3 className="font-montserrat font-semibold text-white text-sm tracking-widest uppercase mb-2">
                {f.label}
              </h3>
              <p className="font-montserrat text-gray-500 text-xs">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
