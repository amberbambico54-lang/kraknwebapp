import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section className="py-16 sm:py-24 bg-[#0A1A2F] relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-sky-950/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-montserrat text-sky-400 text-xs tracking-[0.4em] uppercase mb-4">
              Our Story
            </p>
            <h2 className="font-bebas uppercase text-4xl sm:text-5xl md:text-6xl text-white tracking-wider leading-none mb-6">
              From the <br />
              <span className="text-sky-400">Depths</span>
            </h2>
            <p className="font-montserrat text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
              KRĀKN wasn't born in a boardroom. It was forged in the pressure of the deep — where
              only the strongest survive. We took the raw power of the ocean and bottled it.
            </p>
            <p className="font-montserrat text-gray-400 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10">
              This isn't your typical energy drink. KRĀKN is a statement. A force. A cold surge of
              energy that hits different — because it was built different.
            </p>
            <Link
              to="/about#mission"
              className="font-montserrat text-sm font-semibold tracking-widest uppercase px-8 py-3.5 border border-sky-500/50 hover:border-sky-400 text-sky-300 hover:text-sky-200 rounded-full transition-all duration-300 inline-block hover:bg-sky-500/10"
            >
              Our Mission
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full aspect-square max-w-xs sm:max-w-sm md:max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full border border-sky-500/10 animate-spin" style={{ animationDuration: '30s', willChange: 'transform' }} />
              <div className="absolute inset-8 rounded-full border border-sky-400/10 animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse', willChange: 'transform' }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full bg-sky-900/40 flex items-center justify-center" style={{ boxShadow: '0 0 80px rgba(56,189,248,0.2)' }}>
                  <span className="font-bebas uppercase text-3xl sm:text-4xl md:text-5xl text-sky-300 tracking-widest" style={{ textShadow: '0 0 30px rgba(56,189,248,0.6)' }}>
                    KR<span className="text-white">Ā</span>KN
                  </span>
                </div>
              </div>
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-sky-400/60"
                  style={{ top: `${50 + 42 * Math.sin((i * Math.PI * 2) / 6)}%`, left: `${50 + 42 * Math.cos((i * Math.PI * 2) / 6)}%`, willChange: 'opacity' }}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
