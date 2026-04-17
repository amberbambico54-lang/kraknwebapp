import { motion } from 'framer-motion'

const ingredients = [
  { icon: '🌿', label: 'Guarana Extract', desc: 'Natural caffeine source for sustained energy release.' },
  { icon: '⚡', label: 'Electrolytes', desc: 'Sodium, potassium & magnesium for hydration support.' },
  { icon: '🚫', label: 'Zero Sugar', desc: 'All the power, none of the crash-inducing sugar.' },
  { icon: '🧬', label: 'Performance Blend', desc: 'L-theanine + B-vitamins for clean, focused output.' },
]

export default function Ingredients() {
  return (
    <section id="ingredients" className="py-16 sm:py-24 bg-[#060f1e] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="font-montserrat text-sky-400 text-xs tracking-[0.4em] uppercase mb-3">
            What's Inside
          </p>
          <h2 className="font-bebas uppercase text-5xl sm:text-6xl md:text-7xl text-white tracking-wider">
            The <span className="text-sky-400">Ingredients</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {ingredients.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group p-6 sm:p-8 rounded-2xl bg-[#0d2240]/40 border border-sky-900/30 hover:border-sky-500/30 transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-bebas text-xl sm:text-2xl text-white tracking-wider mb-2">{item.label}</h3>
              <p className="font-montserrat text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
