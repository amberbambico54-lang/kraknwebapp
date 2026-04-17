import { motion } from 'framer-motion'
import FloatingBubbles from '../FloatingBubbles'

export default function AboutHero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-[#0A1A2F] pt-32 sm:pt-40 pb-16 sm:pb-24 min-h-[65vh]">
      <FloatingBubbles count={14} />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-[700px] h-48 sm:h-[400px] bg-sky-900/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-[700px] mx-auto">
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
          className="font-bebas uppercase text-4xl sm:text-6xl md:text-8xl leading-none tracking-wider text-white mb-6"
          style={{ textShadow: '0 0 60px rgba(56,189,248,0.25)' }}
        >
          Born From the <span className="text-sky-400">Deep</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="font-montserrat text-gray-400 text-base sm:text-lg leading-relaxed"
        >
          We didn't follow the formula. We rewrote it — from the depths up.
        </motion.p>
      </div>
    </section>
  )
}
