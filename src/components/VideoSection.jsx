import { motion } from 'framer-motion'
import videoMp4 from '../assets/video/KRAKEN VIDEO AD_2_1.mp4'
import videoWebm from '../assets/video/KRAKEN VIDEO AD_2_1.webm'

export default function VideoSection() {
  return (
    <section className="relative py-16 sm:py-24 bg-[#060f1e] overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8"
        >
          <p className="font-montserrat text-sky-400 text-xs tracking-[0.4em] uppercase mb-3">
            The Experience
          </p>
          <h2 className="font-bebas uppercase text-5xl sm:text-6xl md:text-7xl text-white tracking-wider">
            Power Born <span className="text-sky-400">Beneath</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl overflow-hidden aspect-video border border-sky-900/40"
          style={{ boxShadow: '0 0 60px rgba(56,189,248,0.15)' }}
        >
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={videoWebm} type="video/webm" />
            <source src={videoMp4} type="video/mp4" />
          </video>
          <div className="absolute top-0 left-0 w-32 h-32 bg-sky-500/10 blur-2xl rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-600/10 blur-2xl rounded-full pointer-events-none" />
        </motion.div>
      </div>
    </section>
  )
}
