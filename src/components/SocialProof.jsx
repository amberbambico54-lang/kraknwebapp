import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'

const testimonials = [
  {
    quote: 'The cleanest energy I\'ve ever felt. No jitters, no crash — just pure focus.',
    name: 'Marcus T.',
    role: 'Pro Athlete',
  },
  {
    quote: 'KRAKN hits different. I use it before every training session. Nothing compares.',
    name: 'Jess R.',
    role: 'CrossFit Coach',
  },
  {
    quote: 'Finally an pre-workout cola that actually tastes good and performs even better.',
    name: 'Kai L.',
    role: 'Competitive Swimmer',
  },
]

export default function SocialProof() {
  return (
    <section className="py-24 bg-[#0A1A2F] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-sky-500/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <p className="font-montserrat text-sky-400 text-xs tracking-[0.4em] uppercase mb-3">
            Social Proof
          </p>
          <h2 className="font-bebas uppercase text-4xl sm:text-5xl md:text-6xl text-white tracking-wider mb-4">
            Trusted by <span className="text-sky-400">Athletes</span>
          </h2>
          <p className="font-montserrat text-gray-400 text-sm tracking-widest uppercase">
            Built for high performance
          </p>
        </motion.div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-12 mb-16 mt-10">
          {[['10K+', 'Cans Sold'], ['98%', 'Satisfaction'], ['50+', 'Athletes']].map(([val, label], i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center"
            >
              <div className="font-bebas uppercase text-4xl text-sky-400 tracking-wider" style={{ textShadow: '0 0 20px rgba(56,189,248,0.4)' }}>
                {val}
              </div>
              <div className="font-montserrat text-xs text-gray-400 tracking-widest uppercase mt-1">{label}</div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="p-8 rounded-2xl bg-[#0d2240]/50 border border-sky-900/30 hover:border-sky-500/30 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <FaStar key={j} className="text-sky-400 text-sm" />
                ))}
              </div>
              <p className="font-montserrat text-gray-300 text-sm leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <div>
                <p className="font-montserrat font-semibold text-white text-sm">{t.name}</p>
                <p className="font-montserrat text-gray-500 text-xs tracking-widest uppercase mt-0.5">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
