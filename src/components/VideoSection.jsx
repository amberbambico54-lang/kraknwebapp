import { motion } from 'framer-motion'

export default function VideoSection() {
  return (
    <section className="relative py-24 bg-[#060f1e] overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-6">
        {/* Text overlay above video */}
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
          <h2 className="font-bebas text-6xl md:text-8xl text-white tracking-wider">
            Power Born <span className="text-sky-400">Beneath</span>
          </h2>
        </motion.div>

        {/* Video placeholder — replace <source> comment with your actual video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl overflow-hidden aspect-video bg-[#0d2240] border border-sky-900/40"
          style={{ boxShadow: '0 0 60px rgba(56,189,248,0.15)' }}
        >
          {/* Fallback / placeholder — swap this div for a <video> tag when ready */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#0A1A2F] via-[#0d2240] to-[#060f1e]">
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="w-20 h-20 rounded-full border-2 border-sky-400/50 flex items-center justify-center mb-6 cursor-pointer hover:border-sky-400 transition-colors"
              style={{ boxShadow: '0 0 30px rgba(56,189,248,0.3)', willChange: 'opacity' }}
            >
              <div className="w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[20px] border-l-sky-400 ml-1" />
            </motion.div>
            <p className="font-montserrat text-gray-400 text-sm tracking-widest uppercase">
              Add your brand video here
            </p>
          </div>

          {/* Corner glow accents */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-sky-500/10 blur-2xl rounded-full" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-600/10 blur-2xl rounded-full" />
        </motion.div>
      </div>
    </section>
  )
}
