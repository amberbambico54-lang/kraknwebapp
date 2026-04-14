import { motion } from 'framer-motion'
import FloatingBubbles from './FloatingBubbles'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A1A2F]"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-900/40 rounded-full blur-3xl"
          style={{ willChange: 'opacity' }}
        />
        <motion.div
          animate={{ opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-800/30 rounded-full blur-3xl"
          style={{ willChange: 'opacity' }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-950/20 rounded-full blur-3xl" />
      </div>

      {/* Floating bubbles */}
      <FloatingBubbles count={18} />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-montserrat text-sky-400 text-sm tracking-[0.4em] uppercase mb-6"
        >
          Premium Energy Drink
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-bebas text-8xl md:text-[10rem] leading-none tracking-wider text-white mb-4"
          style={{ textShadow: '0 0 60px rgba(56,189,248,0.3)' }}
        >
          Feel the Pull
          <br />
          <span className="text-sky-400">of Summer</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="font-montserrat text-gray-300 text-lg md:text-xl tracking-widest uppercase mb-12"
        >
          Dive Into a Colder Kind of Energy
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#products"
            className="font-montserrat font-semibold text-sm tracking-widest uppercase px-10 py-4 bg-sky-500 hover:bg-sky-400 text-white rounded-full transition-all duration-300 hover:scale-105"
            style={{ boxShadow: '0 0 30px rgba(56,189,248,0.4)' }}
          >
            Dive In Now
          </a>
          <a
            href="#products"
            className="font-montserrat font-semibold text-sm tracking-widest uppercase px-10 py-4 border border-sky-500/50 hover:border-sky-400 text-sky-300 hover:text-sky-200 rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-sm"
          >
            Explore Flavors
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ willChange: 'transform' }}
      >
        <span className="font-montserrat text-xs tracking-widest text-gray-500 uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-sky-400/60 to-transparent" />
      </motion.div>
    </section>
  )
}
