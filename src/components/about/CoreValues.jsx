import { motion } from 'framer-motion'
import { FaFire, FaShieldAlt, FaFlask, FaUsers } from 'react-icons/fa'

const values = [
  { Icon: FaFire, title: 'Intensity', body: 'We bring full force to everything — our formula, our brand, our community.' },
  { Icon: FaShieldAlt, title: 'Integrity', body: 'No hidden ingredients. No false claims. What you see is exactly what you get.' },
  { Icon: FaFlask, title: 'Innovation', body: 'We constantly push the formula forward. Comfort zones are for other brands.' },
  { Icon: FaUsers, title: 'Community', body: 'Built by athletes, for athletes. Every decision we make starts with our people.' },
]

export default function CoreValues() {
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
            What We Stand For
          </p>
          <h2 className="font-bebas uppercase text-4xl sm:text-5xl md:text-6xl text-white tracking-wider">
            Core <span className="text-sky-400">Values</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group text-center p-6 sm:p-8 rounded-[20px] bg-[#0d2240]/40 border border-sky-900/30 hover:border-sky-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full bg-sky-500/10 flex items-center justify-center group-hover:bg-sky-500/20 transition-colors duration-300">
                  <v.Icon className="text-sky-400 text-2xl" />
                </div>
              </div>
              <h3 className="font-bebas uppercase text-xl text-white tracking-wider mb-2">{v.title}</h3>
              <p className="font-montserrat text-gray-400 text-sm leading-relaxed">{v.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
