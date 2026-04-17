import { motion } from 'framer-motion'

export default function AboutStory() {
  return (
    <section className="bg-[#060f1e] overflow-hidden py-16 sm:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="font-montserrat text-sky-400 text-xs tracking-[0.4em] uppercase mb-4">
            The Origin
          </p>
          <h2 className="font-bebas uppercase text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-wider leading-none mb-6">
            Not Built in a <br />
            <span className="text-sky-400">Boardroom</span>
          </h2>
          <p className="font-montserrat text-gray-300 text-sm sm:text-base leading-relaxed mb-4 text-center pt-2">
            KRAKN was forged in the pressure of the deep — where only the strongest survive. We
            looked at the energy drink market and saw the same thing repeated: artificial hype,
            sugar crashes, empty promises.
          </p>
          <p className="font-montserrat text-gray-400 text-sm sm:text-base leading-relaxed mb-4 text-center">
            So we went a different direction. Down. Into the depths where raw power lives. We
            built a formula that respects your body and your performance — no shortcuts, no fillers.
          </p>
          <p className="font-montserrat text-gray-400 text-sm sm:text-base leading-relaxed text-center">
            KRAKN isn't just a drink. It's a statement that you refuse to settle for average.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
