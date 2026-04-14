import { motion } from 'framer-motion'

export default function AboutStory() {
  return (
    <section className="bg-[#060f1e] overflow-hidden" style={{ padding: '96px 0' }}>
      <div className="max-w-[1200px] mx-auto px-[120px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center" style={{ gap: '48px', minHeight: '600px' }}>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-montserrat text-sky-400 text-xs tracking-[0.4em] uppercase mb-4">
              The Origin
            </p>
            <h2 className="font-bebas text-6xl md:text-7xl text-white tracking-wider leading-none mb-6">
              Not Built in a <br />
              <span className="text-sky-400">Boardroom</span>
            </h2>

            <p className="font-montserrat text-gray-300 text-base leading-relaxed mb-4">
              KRĀKN was forged in the pressure of the deep — where only the strongest survive. We
              looked at the energy drink market and saw the same thing repeated: artificial hype,
              sugar crashes, empty promises.
            </p>
            <p className="font-montserrat text-gray-400 text-base leading-relaxed mb-4">
              So we went a different direction. Down. Into the depths where raw power lives. We
              built a formula that respects your body and your performance — no shortcuts, no fillers.
            </p>
            <p className="font-montserrat text-gray-400 text-base leading-relaxed">
              KRĀKN isn't just a drink. It's a statement that you refuse to settle for average.
            </p>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full aspect-square max-w-[480px] rounded-2xl bg-gradient-to-br from-[#0d2240] to-[#0A1A2F] border border-sky-900/30 overflow-hidden flex items-center justify-center"
              style={{ boxShadow: '0 0 80px rgba(56,189,248,0.1)' }}
            >
              {/* Placeholder — swap with actual brand image */}
              <div className="text-center px-8">
                <div className="font-bebas text-8xl text-sky-400/20 tracking-widest mb-4">KRĀKN</div>
                <p className="font-montserrat text-gray-600 text-xs tracking-widest uppercase">Brand image here</p>
              </div>
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-sky-500/5 blur-2xl rounded-full" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-600/5 blur-2xl rounded-full" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
