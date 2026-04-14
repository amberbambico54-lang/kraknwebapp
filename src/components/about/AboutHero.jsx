import { motion } from 'framer-motion'
import FloatingBubbles from '../FloatingBubbles'

export default function AboutHero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-[#0A1A2F]" style={{ minHeight: '65vh', paddingTop: '160px', paddingBottom: '96px' }}>
      <FloatingBubbles count={14} />

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-sky-900/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-[700px] mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-montserrat text-sky-400 text-xs tracking-[0.4em] uppercase mb-4"
        >
          Our Story
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-bebas text-7xl md:text-9xl leading-none tracking-wider text-white mb-6"
          style={{ textShadow: '0 0 60px rgba(56,189,248,0.25)' }}
        >
          Born From the <span className="text-sky-400">Deep</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="font-montserrat text-gray-400 text-lg leading-relaxed mb-0"
        >
          We didn't follow the formula. We rewrote it — from the depths up.
        </motion.p>
      </div>
    </section>
  )
}
