import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="shop" className="py-20 sm:py-32 bg-[#060f1e] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-[600px] sm:h-[600px] bg-sky-900/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-96 sm:h-96 rounded-full blur-2xl" style={{ background: 'rgba(56,189,248,0.08)' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-montserrat text-sky-400 text-xs tracking-[0.4em] uppercase mb-4 sm:mb-6">
            Ready?
          </p>
          <h2
            className="font-bebas uppercase text-5xl sm:text-6xl md:text-8xl text-white tracking-wider leading-none mb-6 sm:mb-8"
            style={{ textShadow: '0 0 60px rgba(56,189,248,0.25)' }}
          >
            Ready to Feel <br />
            <span className="text-sky-400">the Pull?</span>
          </h2>
          <p className="font-montserrat text-gray-400 text-sm sm:text-base mb-8 sm:mb-12 max-w-md mx-auto">
            Join thousands of athletes who chose KRĀKN. Your next level starts here.
          </p>
          <motion.a
            href="#products"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block font-montserrat font-semibold text-sm tracking-widest uppercase px-10 sm:px-14 py-4 sm:py-5 bg-sky-500 hover:bg-sky-400 text-white rounded-full transition-colors duration-300"
            style={{ boxShadow: '0 0 40px rgba(56,189,248,0.5)' }}
          >
            Shop Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
