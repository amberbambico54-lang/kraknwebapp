import { motion } from 'framer-motion'

const cards = [
  {
    label: 'Our Mission', icon: '⚡', title: 'Fuel the Relentless',
    body: 'To create the cleanest, most effective energy drink on the market — one that powers real performance without compromise. Every can is built for people who refuse to slow down.',
    border: 'border-sky-500/30', glow: 'rgba(56,189,248,0.12)',
  },
  {
    label: 'Our Vision', icon: '🌊', title: 'Redefine the Category',
    body: 'To become the global benchmark for premium energy — a brand synonymous with depth, power, and authenticity. Not the loudest in the room. The most respected.',
    border: 'border-blue-500/30', glow: 'rgba(96,165,250,0.12)',
  },
]

export default function MissionVision() {
  return (
    <section id="mission" className="bg-[#0A1A2F] py-16 sm:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="font-montserrat text-sky-400 text-xs tracking-[0.4em] uppercase mb-3">
            What Drives Us
          </p>
          <h2 className="font-bebas uppercase text-4xl sm:text-5xl md:text-6xl text-white tracking-wider">
            Purpose & <span className="text-sky-400">Direction</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {cards.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`rounded-[20px] border ${c.border} bg-[#0d2240]/50 backdrop-blur-sm p-6 sm:p-8`}
              style={{ boxShadow: `0 0 40px ${c.glow}` }}
            >
              <div className="text-3xl mb-4">{c.icon}</div>
              <p className="font-montserrat text-sky-400 text-xs tracking-[0.4em] uppercase mb-3">{c.label}</p>
              <h3 className="font-bebas uppercase text-2xl sm:text-3xl text-white tracking-wider mb-4">{c.title}</h3>
              <p className="font-montserrat text-gray-400 text-sm leading-relaxed">{c.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
